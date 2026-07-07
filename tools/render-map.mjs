#!/usr/bin/env node
// VARGDROPI map previewer — zero dependencies, Node 18+ (KICKOFF §5.5).
//
//   node tools/render-map.mjs <mapfile.json>
//
// Prints an ASCII grid: one 2-character cell per tile — a terrain letter
// (lowercase) or unit/overlay marker (uppercase/symbol), followed by the
// elevation digit. Coordinates per CANON D-COORD-01: col 0 = west (left),
// row 0 = north (top).
//
// Markers (first character of a cell, in precedence order):
//   E enemy   P player deployment zone   W witness neutral   N other neutral
//   * overlay (only shown when no unit occupies the tile)
//   otherwise: terrain letter (see legend printed under the grid)

import { readFileSync } from 'node:fs';

const TERRAIN_LETTER = {
  grass: 'g', dirt: 'd', rock: 'r', sand: 's', shingle: 'b', snow: 'n',
  ice: 'i', water_shallow: 'w', water_deep: 'v', marsh: 'm', road: 'o',
  plank: 'p', wood_floor: 'f', stone_floor: 't', root: 'x',
};

const file = process.argv[2];
if (!file) {
  console.error('usage: node tools/render-map.mjs <mapfile.json>');
  process.exit(2);
}

let map;
try {
  map = JSON.parse(readFileSync(file, 'utf8'));
} catch (e) {
  console.error(`cannot read ${file}: ${e.message}`);
  process.exit(2);
}

const { cols, rows } = map.grid ?? {};
if (!Number.isInteger(cols) || !Number.isInteger(rows)) {
  console.error('map has no valid grid — run tools/validate.mjs first');
  process.exit(2);
}

// marker layers, later assignments win only if slot empty (precedence E > P > W > N > overlay)
const marker = new Map(); // "col,row" -> char
const put = (pos, ch) => {
  if (!Array.isArray(pos)) return;
  const key = `${pos[0]},${pos[1]}`;
  if (!marker.has(key)) marker.set(key, ch);
};
(map.enemies ?? []).forEach((e) => put(e.pos, 'E'));
(map.deployment?.player_zones ?? []).forEach((p) => put(p, 'P'));
(map.neutrals ?? []).forEach((n) => put(n.pos, n.type === 'witness' ? 'W' : 'N'));
(map.overlays ?? []).forEach((o) => put(o.pos, '*'));

const pad = String(rows - 1).length;
console.log(`\n${map.name ?? '?'}  [${map.id ?? '?'}]`);
console.log(`chapter ${map.chapter ?? '?'} · routes: ${(map.route_tags ?? []).join(', ')} · weather: ${map.weather ?? '?'} · ${cols}×${rows}\n`);

// column ruler (index mod 10)
let ruler = ' '.repeat(pad + 2);
for (let c = 0; c < cols; c++) ruler += `${c % 10}  `;
console.log(ruler.trimEnd());

for (let r = 0; r < rows; r++) {
  let line = `${String(r).padStart(pad)}  `;
  for (let c = 0; c < cols; c++) {
    const terr = map.terrain?.[r]?.[c];
    const elev = map.elevation?.[r]?.[c];
    const ch = marker.get(`${c},${r}`) ?? TERRAIN_LETTER[terr] ?? '?';
    line += `${ch}${Number.isInteger(elev) ? elev : '?'} `;
  }
  console.log(line.trimEnd());
}

// legend: terrain letters actually used
const used = new Set((map.terrain ?? []).flat());
console.log('\nterrain:  ' + [...used].map((t) => `${TERRAIN_LETTER[t] ?? '?'}=${t}`).join('  '));
console.log('markers:  E=enemy  P=deploy  W=witness  N=neutral  *=overlay  (digit = elevation)');

if (map.overlays?.length) {
  console.log('overlays: ' + map.overlays.map((o) => `${o.type}@[${o.pos}]`).join('  '));
}
if (map.enemies?.length) {
  console.log('enemies:  ' + map.enemies.map((e) =>
    `${e.id}=${e.job} L${e.level} @[${e.pos}] ${e.ai}${e.named ? ' NAMED' : ''}${e.einherjar ? ' EINHERJAR' : ''}`).join('  |  '));
}
if (map.neutrals?.length) {
  console.log('neutrals: ' + map.neutrals.map((n) =>
    `${n.id}=${n.type} @[${n.pos}] ${n.ai}${n.escape_edge ? ` →${n.escape_edge}` : ''}`).join('  |  '));
}
if (map.escape_edges?.length) console.log('escape:   ' + map.escape_edges.join(', '));
console.log(`deploy:   ${map.deployment?.player_zones?.length ?? 0} zone(s), max ${map.deployment?.max_units ?? '?'} units`);
if (map.objectives) {
  console.log(`objective: ${map.objectives.primary}`);
  if (map.objectives.defeat) console.log(`defeat:    ${map.objectives.defeat}`);
}
if (map.designer_notes) {
  console.log(`\nheight gimmick: ${map.designer_notes.height_gimmick ?? '—'}`);
  console.log(`witness setup:  ${map.designer_notes.witness_setup ?? '—'}`);
}
console.log();
