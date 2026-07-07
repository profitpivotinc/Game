#!/usr/bin/env node
// VARGDROPI validator — zero dependencies, Node 18+ (KICKOFF §5.5).
//
// Checks:
//   1. Schema conformance for every JSON under data/maps, data/jobs, data/clans.
//   2. terrain/elevation dimensions match grid (D-COORD-02).
//   3. Every position in bounds (deployment, overlays, enemies, neutrals).
//   4. Every route_tags value exists in the canonical route list
//      (docs/story/08-branch-map.md "ROUTES:" line; fallback CANON C-ROUTE-03).
//   5. Every flag referenced by map triggers ("set_flag", 'when: "flag:<id>"')
//      exists in data/flags/story-flags.json (D-FLAG-01).
//   6. designer_notes.height_gimmick and .witness_setup present, non-empty (D-MAP-01).
//   7. Cross-refs where data exists: enemy jobs -> data/jobs, clan custodian
//      jobs -> data/jobs, job custodian_clan -> data/clans.
//
// Exit non-zero on any error. Warnings never fail the run.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];
const notes = [];

const rel = (p) => relative(ROOT, p) || p;
const err = (file, msg) => errors.push(`${rel(file)}: ${msg}`);
const warn = (file, msg) => warnings.push(`${rel(file)}: ${msg}`);

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (e) {
    err(path, `unreadable or invalid JSON — ${e.message}`);
    return null;
  }
}

function* walkJson(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkJson(p);
    else if (entry.name.endsWith('.json')) yield p;
  }
}

// ---------------------------------------------------------------------------
// Minimal JSON Schema subset validator. Supports exactly what our three
// schemas use: type (string|array), required, properties, additionalProperties
// (false | schema), items, enum, minimum, maximum, minItems, maxItems,
// minLength, pattern, $ref (local), $defs.
// ---------------------------------------------------------------------------

function typeOk(value, type) {
  switch (type) {
    case 'object': return value !== null && typeof value === 'object' && !Array.isArray(value);
    case 'array': return Array.isArray(value);
    case 'string': return typeof value === 'string';
    case 'integer': return Number.isInteger(value);
    case 'number': return typeof value === 'number';
    case 'boolean': return typeof value === 'boolean';
    case 'null': return value === null;
    default: return false;
  }
}

function resolveRef(ref, rootSchema) {
  if (!ref.startsWith('#/')) throw new Error(`unsupported non-local $ref: ${ref}`);
  let node = rootSchema;
  for (const part of ref.slice(2).split('/')) {
    node = node?.[part];
    if (node === undefined) throw new Error(`unresolvable $ref: ${ref}`);
  }
  return node;
}

function checkSchema(value, schema, rootSchema, path, out) {
  if (schema.$ref) {
    checkSchema(value, resolveRef(schema.$ref, rootSchema), rootSchema, path, out);
    return;
  }
  if (schema.type) {
    const types = Array.isArray(schema.type) ? schema.type : [schema.type];
    if (!types.some((t) => typeOk(value, t))) {
      const got = Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value;
      out.push(`${path}: expected ${types.join('|')}, got ${got}`);
      return;
    }
  }
  if (schema.enum && !schema.enum.includes(value)) {
    out.push(`${path}: ${JSON.stringify(value)} not in enum [${schema.enum.join(', ')}]`);
  }
  if (typeof value === 'string') {
    if (schema.minLength !== undefined && value.length < schema.minLength) {
      out.push(`${path}: string shorter than minLength ${schema.minLength}`);
    }
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) {
      out.push(`${path}: "${value}" does not match pattern ${schema.pattern}`);
    }
  }
  if (typeof value === 'number') {
    if (schema.minimum !== undefined && value < schema.minimum) out.push(`${path}: ${value} < minimum ${schema.minimum}`);
    if (schema.maximum !== undefined && value > schema.maximum) out.push(`${path}: ${value} > maximum ${schema.maximum}`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems !== undefined && value.length < schema.minItems) out.push(`${path}: ${value.length} items < minItems ${schema.minItems}`);
    if (schema.maxItems !== undefined && value.length > schema.maxItems) out.push(`${path}: ${value.length} items > maxItems ${schema.maxItems}`);
    if (schema.items) value.forEach((v, i) => checkSchema(v, schema.items, rootSchema, `${path}[${i}]`, out));
  }
  if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
    for (const req of schema.required ?? []) {
      if (!(req in value)) out.push(`${path}: missing required property "${req}"`);
    }
    for (const [k, v] of Object.entries(value)) {
      if (schema.properties && k in schema.properties) {
        checkSchema(v, schema.properties[k], rootSchema, `${path}.${k}`, out);
      } else if (schema.additionalProperties === false) {
        out.push(`${path}: unknown property "${k}"`);
      } else if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
        checkSchema(v, schema.additionalProperties, rootSchema, `${path}.${k}`, out);
      }
    }
  }
}

function validateAgainst(file, data, schema) {
  const out = [];
  try {
    checkSchema(data, schema, schema, '$', out);
  } catch (e) {
    out.push(`schema evaluation failed: ${e.message}`);
  }
  for (const m of out) err(file, m);
  return out.length === 0;
}

// ---------------------------------------------------------------------------
// Canonical inputs
// ---------------------------------------------------------------------------

function loadRouteList() {
  const branchMap = join(ROOT, 'docs/story/08-branch-map.md');
  if (existsSync(branchMap)) {
    const m = readFileSync(branchMap, 'utf8').match(/^ROUTES:\s*(.+)$/m);
    if (m) {
      return { routes: new Set(m[1].split(',').map((s) => s.trim()).filter(Boolean)), source: rel(branchMap) };
    }
    warn(branchMap, 'has no "ROUTES: a, b, c" line; falling back to CANON C-ROUTE-03 list');
  } else {
    notes.push('docs/story/08-branch-map.md not yet written (Phase 4); using CANON C-ROUTE-03 route list');
  }
  return { routes: new Set(['shared', 'kingsman', 'outlaw', 'secret']), source: 'CANON.md C-ROUTE-03' };
}

function loadFlags() {
  const flagsPath = join(ROOT, 'data/flags/story-flags.json');
  if (!existsSync(flagsPath)) {
    err(flagsPath, 'missing — every flag referenced by data must be registered here (D-FLAG-01)');
    return new Set();
  }
  const data = readJson(flagsPath);
  if (!data) return new Set();
  if (!Array.isArray(data.flags)) {
    err(flagsPath, 'expected top-level "flags" array');
    return new Set();
  }
  const ids = new Set();
  data.flags.forEach((f, i) => {
    if (typeof f.id !== 'string' || !/^[a-z][a-z0-9_]*$/.test(f.id)) {
      err(flagsPath, `flags[${i}]: id ${JSON.stringify(f.id)} missing or not snake_case`);
      return;
    }
    if (ids.has(f.id)) err(flagsPath, `flags[${i}]: duplicate flag id "${f.id}"`);
    ids.add(f.id);
    if (!['boolean', 'enum', 'counter'].includes(f.type)) err(flagsPath, `flags[${i}] (${f.id}): type must be boolean|enum|counter`);
    if (f.type === 'enum' && (!Array.isArray(f.values) || f.values.length === 0)) err(flagsPath, `flags[${i}] (${f.id}): enum flag needs non-empty "values"`);
    if (typeof f.description !== 'string' || !f.description) err(flagsPath, `flags[${i}] (${f.id}): missing description`);
  });
  return ids;
}

// ---------------------------------------------------------------------------
// Map-specific checks beyond the schema
// ---------------------------------------------------------------------------

function checkGridMatrix(file, map, key) {
  const { rows, cols } = map.grid ?? {};
  const matrix = map[key];
  if (!Array.isArray(matrix) || !Number.isInteger(rows) || !Number.isInteger(cols)) return;
  if (matrix.length !== rows) err(file, `${key} has ${matrix.length} rows, grid.rows is ${rows}`);
  matrix.forEach((row, r) => {
    if (Array.isArray(row) && row.length !== cols) err(file, `${key} row ${r} has ${row.length} cols, grid.cols is ${cols}`);
  });
}

function inBounds(pos, map) {
  return Array.isArray(pos) && pos.length === 2 && pos[0] >= 0 && pos[0] < map.grid.cols && pos[1] >= 0 && pos[1] < map.grid.rows;
}

function checkPositions(file, map) {
  if (!map.grid) return;
  const check = (pos, label) => {
    if (!inBounds(pos, map)) err(file, `${label} pos ${JSON.stringify(pos)} out of bounds for ${map.grid.cols}×${map.grid.rows} grid`);
  };
  (map.deployment?.player_zones ?? []).forEach((p, i) => check(p, `deployment.player_zones[${i}]`));
  (map.overlays ?? []).forEach((o, i) => check(o.pos, `overlays[${i}] (${o.type})`));
  (map.enemies ?? []).forEach((e) => check(e.pos, `enemy ${e.id}`));
  (map.neutrals ?? []).forEach((n) => check(n.pos, `neutral ${n.id}`));
}

function checkTriggerFlags(file, map, flagIds) {
  (map.triggers ?? []).forEach((t, i) => {
    if (t.set_flag && !flagIds.has(t.set_flag)) {
      err(file, `triggers[${i}].set_flag "${t.set_flag}" not registered in data/flags/story-flags.json`);
    }
    if (typeof t.when === 'string' && t.when.startsWith('flag:')) {
      const id = t.when.slice('flag:'.length).trim();
      if (!flagIds.has(id)) err(file, `triggers[${i}].when references unregistered flag "${id}"`);
    }
  });
}

function checkDesignerNotes(file, map) {
  // D-MAP-01 hard rule — enforced independently of the schema so the failure
  // message names the rule.
  for (const key of ['height_gimmick', 'witness_setup']) {
    const v = map.designer_notes?.[key];
    if (typeof v !== 'string' || v.trim().length < 20) {
      err(file, `D-MAP-01: designer_notes.${key} missing or too thin — must substantively answer its question`);
    }
  }
}

function checkRouteTags(file, map, routes, routeSource) {
  (map.route_tags ?? []).forEach((tag) => {
    if (!routes.has(tag)) err(file, `route_tags "${tag}" not in canonical route list (${routeSource}: ${[...routes].join(', ')})`);
  });
  for (const key of Object.keys(map.objectives?.route_variants ?? {})) {
    if (!routes.has(key)) err(file, `objectives.route_variants key "${key}" not in canonical route list`);
  }
}

function checkWitnessPlausibility(file, map) {
  if (map.witness_rule !== 'sung_if_any_witness_or_router_escapes') return;
  const hasWitness = (map.neutrals ?? []).some((n) => n.type === 'witness');
  const hasEscape = (map.escape_edges ?? []).length > 0;
  if (!hasWitness && !hasEscape) {
    warn(file, 'standard witness rule but no witness neutrals and no escape edges — battle can never be Sung; intended?');
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const schemas = {};
for (const name of ['map', 'job', 'clan']) {
  const p = join(ROOT, `data/schema/${name}.schema.json`);
  schemas[name] = existsSync(p) ? readJson(p) : null;
  if (!schemas[name]) err(p, 'schema missing or unreadable');
}

const { routes, source: routeSource } = loadRouteList();
const flagIds = loadFlags();

// Jobs
const jobFiles = [...walkJson(join(ROOT, 'data/jobs'))];
const jobIds = new Set();
const jobs = [];
for (const file of jobFiles) {
  const job = readJson(file);
  if (!job || !schemas.job) continue;
  validateAgainst(file, job, schemas.job);
  if (job.id) {
    if (jobIds.has(job.id)) err(file, `duplicate job id "${job.id}"`);
    jobIds.add(job.id);
  }
  jobs.push({ file, job });
}
if (jobFiles.length === 0) notes.push('data/jobs/ empty (populated in Phase 2+); enemy-job and custodian cross-refs skipped');

// Clans
const clanFiles = [...walkJson(join(ROOT, 'data/clans'))];
const clanIds = new Set();
const clans = [];
for (const file of clanFiles) {
  const clan = readJson(file);
  if (!clan || !schemas.clan) continue;
  validateAgainst(file, clan, schemas.clan);
  if (clan.id) {
    if (clanIds.has(clan.id)) err(file, `duplicate clan id "${clan.id}"`);
    clanIds.add(clan.id);
  }
  clans.push({ file, clan });
}
if (clanFiles.length === 0) notes.push('data/clans/ empty (populated in Phase 2+); clan cross-refs skipped');

// Cross-refs that need both sides present
for (const { file, job } of jobs) {
  (job.prerequisites ?? []).forEach((p) => {
    if (jobIds.size && !jobIds.has(p.job)) err(file, `prerequisite job "${p.job}" not found in data/jobs/`);
  });
  if (job.custodian_clan && clanIds.size && !clanIds.has(job.custodian_clan)) {
    err(file, `custodian_clan "${job.custodian_clan}" not found in data/clans/`);
  }
  if (job.diminished_variant) {
    const abilityIds = new Set(Object.values(job.abilities ?? {}).flatMap((v) => (Array.isArray(v) ? v.map((a) => a.id) : [])));
    job.diminished_variant.kept_abilities.forEach((a) => {
      if (!abilityIds.has(a)) err(file, `diminished_variant keeps unknown ability "${a}"`);
    });
  }
}
for (const { file, clan } of clans) {
  (clan.custodian_jobs ?? []).forEach((j) => {
    if (jobIds.size && !jobIds.has(j)) err(file, `custodian job "${j}" not found in data/jobs/`);
  });
  for (const list of [clan.trust_exercises, clan.betrayal_events, [clan.faith_path], [clan.fire_path]]) {
    (list ?? []).forEach((entry) => {
      (entry?.flags_set ?? []).forEach((f) => {
        if (!flagIds.has(f)) err(file, `flags_set "${f}" not registered in data/flags/story-flags.json`);
      });
    });
  }
}

// Maps
const mapFiles = [...walkJson(join(ROOT, 'data/maps'))];
const mapIds = new Set();
for (const file of mapFiles) {
  const map = readJson(file);
  if (!map || !schemas.map) continue;
  validateAgainst(file, map, schemas.map);
  if (map.id) {
    if (mapIds.has(map.id)) err(file, `duplicate map id "${map.id}"`);
    mapIds.add(map.id);
    const expected = `${map.id}.json`;
    if (basename(file) !== expected) warn(file, `filename does not match map id (expected ${expected})`);
  }
  if (map.grid) {
    checkGridMatrix(file, map, 'terrain');
    checkGridMatrix(file, map, 'elevation');
    checkPositions(file, map);
  }
  checkRouteTags(file, map, routes, routeSource);
  checkTriggerFlags(file, map, flagIds);
  checkDesignerNotes(file, map);
  checkWitnessPlausibility(file, map);
  (map.enemies ?? []).forEach((e) => {
    if (jobIds.size && e.job && !jobIds.has(e.job)) err(file, `enemy ${e.id} has unknown job "${e.job}"`);
  });
}
if (mapFiles.length === 0) warn(join(ROOT, 'data/maps'), 'no map files found — nothing validated');

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

for (const n of notes) console.log(`note: ${n}`);
for (const w of warnings) console.log(`WARN  ${w}`);
for (const e of errors) console.error(`ERROR ${e}`);
console.log(
  `\nvalidate: ${mapFiles.length} map(s), ${jobFiles.length} job(s), ${clanFiles.length} clan(s), ` +
  `${flagIds.size} flag(s) — ${errors.length} error(s), ${warnings.length} warning(s)`
);
process.exit(errors.length ? 1 : 0);
