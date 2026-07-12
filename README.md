# VARGDROPI — Design Repository

*Working title. Old Norse: "wolf's whelp" — the child of an outlaw, barred by law from inheriting.*

A Norse-themed turn-based tactical RPG: **Final Fantasy Tactics** combat chassis fused with **Tactics Ogre** structural architecture, wearing authentic 10th-century Norse cultural machinery. This repository contains the complete design — story, data, and specs. **No engine code lives here.**

## Where to start

1. **[KICKOFF.md](KICKOFF.md)** — the founding brief. Read-only; never modified.
2. **[CANON.md](CANON.md)** — the constitution. Every shared fact, the Rename Table (all names are placeholders), the glossary, the timeline, data conventions, and Open Questions. If two documents disagree, CANON wins; if CANON disagrees with a KICKOFF §2 pillar, the pillar wins.
3. `docs/story/` — the narrative, in reading order (`00-frame.md` → `07-endings.md`, with `08-branch-map.md` as the flag/route reference).
4. `docs/design/` — mechanics spec sheets (combat core, jobs, wyrd, alignment, clans/trust, death/valkyrie, maps).
5. `data/` — engine-agnostic JSON: schemas, battle maps, jobs, clans, story flags.
6. `manifest/battle-manifest.md` — one row per battle in the game.

## Repository map

```
├── KICKOFF.md            founding brief (do not modify)
├── CANON.md              single source of truth
├── docs/
│   ├── story/            frame, bible, characters, chapter scripts, endings, branch map
│   └── design/           seven mechanics spec sheets
├── data/
│   ├── schema/           JSON Schemas: map, job, clan
│   ├── maps/             battle maps (ch1/ full chapter, showcase/ later chapters, example/ self-test)
│   ├── jobs/             one JSON per job
│   ├── clans/            one JSON per clan
│   └── flags/            story-flags.json — every narrative flag, typed, with setter/reader refs
├── manifest/             battle-manifest.md — every battle, one line each
└── tools/                zero-dependency Node 18+ scripts
```

## Tools

Requires Node 18+. No dependencies, no install step.

```sh
# Validate everything: schema conformance, grid dimensions, positions in bounds,
# route tags, flag cross-references, designer-notes hard rules.
node tools/validate.mjs            # exits non-zero on any error

# ASCII-preview any map JSON: elevation digits, terrain letters, E/P/W markers.
node tools/render-map.mjs data/maps/example/ex0-00-selftest.json
```

Run `validate.mjs` before every commit; it is the gate for every phase.

## Data conventions (summary — CANON §5 is authoritative)

- Positions are `[col, row]`, 0-indexed; col 0 = west, row 0 = north; edges `N|S|E|W`.
- `terrain`/`elevation` are row-major (rows north→south, cols west→east) and must match `grid`.
- Every map must answer two questions in `designer_notes` or fail validation: *what does elevation do here that it does nowhere else?* (`height_gimmick`) and *who can witness, and can the player prevent it?* (`witness_setup`).
- Flags used by maps/scenes must be registered in `data/flags/story-flags.json`.

## Phase status

Executed one commit per phase, stopping for human review at each gate (KICKOFF §9).

| Phase | Scope | Status |
|---|---|---|
| 0 | Scaffold: CANON, README, schemas, tools, self-test map | ✅ |
| 1 | Story bible & people (`00`, `01`, `02`) | ✅ |
| 2 | All seven design specs | ⬜ deferred — executed after Phase 3 by project-lead directive; CANON §1.7/§1.8 is the interim mechanics authority |
| 3 | Chapter 1 deep build: full scripts + 8 map JSONs + manifest seed | ✅ |
| 4 | Branches (04a/04b/05/06), endings (07), branch map (08), 5 showcase maps, 37-flag registry | ✅ |
| 5 | Battle manifest & consistency pass | ⬜ |

## House rules

- **All names are placeholders.** The Rename Table in CANON.md is the only authority.
- Any fact used in two or more files must appear in CANON.md first, added in the same commit that first uses it.
- Story files use the scene-script format of KICKOFF §5.2; specs use the section order of §5.3.
- Out-of-scope ideas (engine, balance sims, art/audio, side quests, multiplayer, localization) go to `FUTURE.md` as stubs only.
