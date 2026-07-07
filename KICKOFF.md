# VARGDROPI — Claude Code Kickoff Prompt
*Working title. Old Norse: "wolf's whelp" — the child of an outlaw, barred by law from inheriting.*

---

## 0. HOW TO USE THIS FILE

Save this file as `KICKOFF.md` in the root of an **empty repository**. Then instruct Claude Code:

> "Read KICKOFF.md in full. Execute Phase 0 only, then stop for my review. Proceed phase by phase, one commit per phase, stopping at each phase gate."

Do not let it run all phases unattended on the first pass.

---

## 1. ROLE & MISSION

You (Claude Code) are the **lead narrative designer, systems designer, and technical writer** for VARGDROPI, a Norse-themed turn-based tactical RPG. Your job is to produce a complete, internally consistent **design repository**: story files, map data files, and design specification sheets.

**Scope boundaries:**
- You produce **documentation and data files only**. No engine code, no rendering, no art, no audio.
- All data files are **engine-agnostic JSON** validated by schemas you also write.
- All story and spec files are **Markdown**.
- The only executable code you write lives in `/tools/` — small zero-dependency Node 18+ scripts for validation and preview.
- Everything must be a file in the repo. Nothing lives only in chat.

**Design lineage (know your references):** Final Fantasy Tactics supplies the combat chassis — Charge Time turn order, job system with JP and secondary ability slots, elevation/facing rules, 3-turn revival window before permadeath. Tactics Ogre: Let Us Cling Together supplies the structural architecture — chapter-end route branching, a forced moral atrocity that splits the story, clan/loyalty ledgers, and multiple endings driven by accumulated deeds. VARGDROPI is these two systems fused, wearing authentic Norse cultural machinery instead of a reskin.

---

## 2. NON-NEGOTIABLE CREATIVE PILLARS

These ten pillars are canon. Every file you write must be consistent with them. If any instruction later in this document appears to conflict with a pillar, the pillar wins — flag the conflict in `CANON.md` under "Open Questions."

1. **Word-fame is the theme.** *Hávamál*: cattle die, kinsmen die, but the fame of a dead man's deeds never dies. This is a game about who gets remembered, who gets erased, and who controls the carving. The frame narrative, the níð-verse plot device, the witness mechanic, and the endings all express this one idea.
2. **Historical shell, myth buried underneath.** The world presents as grounded ~10th-century Scandinavia during the conversion era. Magic is rare, ambiguous, feared. The mythic layer (the corpse-eater, Hel, the Wyrd) surfaces gradually and is fully undeniable only by Chapter 3.
3. **The Harvest Lie.** The official faith says the valkyries carry the glorious dead to Valhalla. The truth: the harvest goes *down*, to a corpse-eater gnawing at the world-tree's roots, which the old priesthood serves without fully understanding. "Valhalla" is the sales pitch of a slaughterhouse. By Chapter 3, the player learns the hunger has already re-homed inside the *new* church — cocooned in a martyred saint's relics — because a faith that venerates dying for god is a *better* harvest engine.
4. **The protagonist is vargdropi.** Grím "the Masked" (all names placeholder — see §10) is the child of a queen whose line was legally unmade a generation ago by commissioned níð-verse accusing her of an affair with Loki. He was raised lowborn, is barred by law from his own blood, and his family was destroyed *by a poem*. If the rumor was true, Hel — Loki's daughter, keeper of the un-glorious dead — is his kinswoman.
5. **Godlike skill is meta, not stats.** Grím is the **Wyrdless** — the one thread the Norns cannot fix, the in-fiction reason the game branches at all. His power is a fate-currency (Wyrd Points) that manipulates the Charge Time system itself. He must never be an Orlandeau-style stat monster who trivializes the tactics.
6. **Alignment is reputation, not karma — and only witnessed deeds are sung.** Two hidden axes (Mercy↔Terror, Man↔Blood) tracked on TWO ledgers: the **Sung Ledger** (deeds with surviving witnesses) and the **True Ledger** (everything). A player can massacre a clan and keep a golden name by leaving no survivors. The game never stops them. It just remembers.
7. **Five clans, courted by faith or taken by fire.** Each clan is custodian of a job line. Trust exercises and betrayal events decide their fate and the player's access to their arts.
8. **Branch at chapter ends.** Route splits happen at chapter boundaries via one large, irreversible decision (the Chapter 1 split is a forced atrocity — the Balmamusa pattern). Micro-choices feed the ledgers; macro-choices split the routes.
9. **Dag is the fixed-fate foil.** A thrall-born convert whose sister was hanged in the last great blót, Dag climbs to the throne *on rails* in every route. His authored, inevitable rise is the measuring stick against which every player-built ending is judged.
10. **Four endings, one hidden.** King of Men (Mercy+Man), Benevolent God (Mercy+Blood), Merciless Ruler (Terror+Man, True Ledger only — the saga calls his reign a golden age because he killed the witnesses), and the hidden fourth: **The Successor** (Terror+Blood) — Grím does not destroy the corpse-eater, he *replaces* it, and the frame-skald's recitation is revealed to be happening on the last night of the world.

---

## 3. CANON SUMMARY

Expand this into full documents; never contradict it.

**World.** The Northlands: fjord coasts, inland holds, high fells, and the Thingvellir plain where law is spoken. A High King recently converted to the incoming faith (the "White God" / new faith — invented, Christianity-analog, never named as real-world Christianity) and has banned raiding, outlawing a generation of landless young warriors. The old priesthood answers with escalating blóts. A conversion civil war is igniting.

**The frame.** The entire game is a saga recited by a skald, 300 years later, in a hall we slowly realize is *not what it seems*. The skald's official recitation and the events the player actually plays diverge in small, deliberate ways (the "saga remembers it differently" device). Each of the four endings recontextualizes the frame — the hidden fourth reveals the recitation is occurring on the world's final night.

**Grím (protagonist, ~19).** Raised as a smith's fostered son in a coastal hold. Prodigious in every weapon he touches — uncannily so. Wears a half-mask (burn-scarred, or so he says). His mother's line: Queen Aldís, unmade by níð two decades ago; her kin scattered into outlawry (Clan Ulfheim). His Wyrd powers first manifest involuntarily. His arc: discovering what he is, then choosing what that *means* — by law, by blood, by terror, or by hunger.

**Dag (foil, ~24).** Thrall-born, brilliant, converted after the old gods hanged his sister Yrsa in the last great blót (a thrall-born girl was an acceptable offering; a jarl's daughter was not). Rises through the new church and the king's service. Crowned by endgame in all routes. Whether he ever learns what's under the church he built: **he learns in Chapter 4, and crowns himself anyway.** He is a cold, knowing Delita.

**The five clans.**
- **Ulfheim (Wolf)** — outlawed remnant of Grím's mother's kin. Skirmishers, night-fighters. Trusting them exposes his blood early; they want a banner, not a kinsman. Custodians: Skógarmaðr (outlaw/ninja-analog), Raider (thief-analog).
- **Hrafnmark (Raven)** — seiðr-keepers and rune-lawyers who *wrote the níð* that unmade his house. The ugliest alliance in the game: court your family's assassins for their arts, or burn the grove and loot a diminished version. Custodians: Seiðmaðr (black-mage-analog), Norn-touched (time-mage-analog), Rune-reckoner (calculator-analog).
- **Bjarnholt (Bear)** — berserker lodge, oath-bound, enraged by the raiding ban. Easiest clan to win, easiest to lose. Custodians: Berserker (monk-analog), Wyrmslayer (dragoon-analog).
- **Hvalfjorð (Whale)** — prime-signed merchant converts (baptism-lite for market access — historically real). They sell Grím ships, grain, intelligence — and eventually his location, unless trust is high. Custodians: Varangian (samurai-analog: east-road mercenary blade arts), Læknir (chemist-analog), plus exotic gear brokerage.
- **Hjortdal (Stag)** — horse-lords who keep the Thing and the law. Only law can unmake vargdropi status; the King of Men ending runs through their trial arc. Custodians: Riddari (mounted knight), Lawspeaker-Skald (orator-analog).

**Religion & the Lie.** Old faith: goðar, blóts, the grove, the valkyrie doctrine. New faith: genuinely frees thralls, genuinely right that something is rotten in the old ways — and already colonized from inside by the hunger it thinks it defeated. Neither altar is clean. Hel operates through dreams, corpse-roads, and one recurring emissary; she wants the harvest returned to its lawful course — *her* halls are starving.

---

## 4. REPOSITORY STRUCTURE

Create exactly this tree (files marked ✱ are fully authored; others per §5 scope rules):

```
vargdropi/
├── KICKOFF.md                     # this file (do not modify)
├── CANON.md                       # ✱ single source of truth — see §5.1
├── README.md                      # ✱ project map + how to navigate
├── docs/
│   ├── story/
│   │   ├── 00-frame.md            # ✱ skald frame: opening + all four closings
│   │   ├── 01-story-bible.md      # ✱ world, theme, factions, religion, the Lie
│   │   ├── 02-characters.md       # ✱ full dossiers: Grím, Dag, clan leaders, king, priesthood, Hel's emissary, Wiegraf-analog
│   │   ├── 03-ch1-the-masked.md   # ✱ FULL scene-by-scene scripts with dialogue
│   │   ├── 04a-ch2-kingsman.md    # ✱ beat sheet + 3 fully scripted key scenes
│   │   ├── 04b-ch2-outlaw.md      # ✱ beat sheet + 3 fully scripted key scenes
│   │   ├── 05-ch3-the-blood-wakes.md  # ✱ beat sheet + 4 fully scripted key scenes (route-merged w/ variants)
│   │   ├── 06-ch4-convergence.md  # ✱ beat sheet + Dag confrontation fully scripted
│   │   ├── 07-endings.md          # ✱ four FULL ending scripts incl. hidden fourth
│   │   └── 08-branch-map.md       # ✱ full flag graph, route logic, Mermaid diagram
│   └── design/
│       ├── spec-combat-core.md    # ✱ CT math, elevation, facing, hit tables
│       ├── spec-jobs.md           # ✱ full job tree, JP economy, per-job ability lists
│       ├── spec-wyrd.md           # ✱ fate currency: powers, costs, witness interaction
│       ├── spec-alignment.md      # ✱ dual-ledger axes, witness rules, grið mechanic
│       ├── spec-clans-trust.md    # ✱ trust math, exercises, betrayal events, faith/fire paths
│       ├── spec-death-valkyrie.md # ✱ 3-turn timer, permadeath, grave-goods, einherjar returns
│       └── spec-maps.md           # ✱ human-readable schema doc + map design rules
├── data/
│   ├── schema/
│   │   ├── map.schema.json        # ✱
│   │   ├── job.schema.json        # ✱
│   │   └── clan.schema.json       # ✱
│   ├── maps/
│   │   ├── ch1/                   # ✱ ALL 8 Chapter 1 battles, full JSON
│   │   └── showcase/              # ✱ 1 per later chapter/route (5 total)
│   ├── jobs/                      # ✱ one JSON per job (~16 files)
│   ├── clans/                     # ✱ one JSON per clan (5 files)
│   └── flags/story-flags.json     # ✱ every narrative flag, typed, with setter/reader refs
├── manifest/
│   └── battle-manifest.md         # ✱ EVERY battle in the game: id, chapter, route tags, one-line brief, height gimmick, witness setup
└── tools/
    ├── validate.mjs               # ✱ schema + cross-reference validation
    └── render-map.mjs             # ✱ ASCII preview of any map JSON
```

---

## 5. FILE SPECIFICATIONS

### 5.1 CANON.md — the constitution
Contains: (a) canonical facts list, terse, bulletable, cited by every other doc; (b) **Rename Table** — every proper noun with placeholder status, etymology note, and blank "final name" column; (c) terminology glossary (see §10); (d) timeline (Aldís's unmaking → blót of Yrsa → raiding ban → game start → chapter spans); (e) "Open Questions" section for conflicts you detect. **Rule: any fact used in two or more files MUST appear in CANON.md first.** When you invent a new fact mid-writing, add it to CANON.md in the same commit.

### 5.2 Story file format
Scene scripts use this structure:

```
### SCENE ch1-s04 — "The Grove Approach"
LOCATION: map ch1-05-grove-road | TIME: dusk | WEATHER: snow
FLAGS READ: [met_wiegraf_analog] | FLAGS SET: [witnessed_blot_prep]
PRESENT: Grím, Dag, Yrsa, Goði Þorgeir

[STAGE: column of thralls led uphill; ravens on the hanging tree]

ÞORGEIR: (dialogue)
GRÍM: (dialogue)
  > CHOICE: [Speak against the blót] → mercy_terror +5 (sung if witnesses ≥1)
  > CHOICE: [Stay silent] → no ledger change, flag [silent_at_grove]
[BATTLE TRIGGER → ch1-05-grove-road]
```

Beat sheets: numbered beats, each with purpose, ledger/flag effects, and battle refs. Dialogue is written in full for Chapter 1 and for the flagged key scenes; elsewhere, one-line intent per exchange is acceptable.

### 5.3 Design spec format
Every spec sheet: Purpose → Player Experience Goal → Rules (numbered) → Numbers Table (every value marked **TUNABLE** or **FIXED**) → Edge Cases → Interactions With Other Specs (explicit cross-refs) → Open Questions.

### 5.4 Map JSON schema (define formally in `map.schema.json`; anchor fields below)

```jsonc
{
  "id": "ch1-08-burn-ulfheim",
  "name": "The Burning of Ulfheim",
  "chapter": 1, "order": 8,
  "route_tags": ["shared"],            // or ["kingsman"], ["outlaw"], etc.
  "grid": { "cols": 14, "rows": 12 },
  "terrain":   [["grass","rock",...]], // rows × cols
  "elevation": [[0,1,2,...]],          // rows × cols, integers 0–9
  "overlays":  [{ "pos":[3,4], "type":"flammable" }, { "pos":[6,2], "type":"ice" }],
  "weather": "night_snow",             // clear|snow|rain|fog|night|night_snow
  "deployment": { "player_zones": [[x,y],...], "max_units": 5 },
  "enemies": [{ "id":"e1", "job":"huscarl", "level":6, "facing":"S", "pos":[10,3], "ai":"guard", "grid_notes":"holds the gate ledge" }],
  "neutrals": [{ "id":"w1", "type":"witness", "pos":[2,9], "ai":"flee", "escape_edge":"W" }],
  "objectives": { "primary":"...", "secondary":["..."], "defeat":"Grím falls" },
  "escape_edges": ["W","N"],
  "witness_rule": "sung_if_any_witness_or_router_escapes",
  "triggers": [{ "when":"turn>=4", "event":"reinforce_e5_e6_north" },
               { "when":"unit_downed:any_player", "event":"valkyrie_vfx_cue" }],
  "designer_notes": { "height_gimmick":"...", "witness_setup":"...", "intent":"..." }
}
```

**Two hard rules for every map:** `designer_notes.height_gimmick` must answer *"what does elevation do HERE that it does nowhere else?"* and `designer_notes.witness_setup` must answer *"who can witness, and can the player prevent it?"* A map missing either answer fails validation.

### 5.5 Tools
- `validate.mjs` — zero dependencies. Checks: schema conformance; `terrain`/`elevation` dimensions match `grid`; all positions in bounds; every `route_tags` value exists in `08-branch-map.md`'s route list; every flag in map triggers exists in `story-flags.json`; both designer_notes rules present and non-empty. Exit non-zero on failure; run in every phase gate.
- `render-map.mjs <mapfile>` — prints ASCII grid: elevation digit per tile, terrain as background letter, `E`/`P`/`W` markers, legend below.

### 5.6 Battle manifest + Chapter 1 seed
`battle-manifest.md` lists **every** battle (~34–40 total across routes) with one-line briefs. Chapter 1's eight battles are fully built in `data/maps/ch1/`:

1. **ch1-01 Strandhögg** — tutorial coastal raid; cliffs teach elevation & bow range.
2. **ch1-02 Longhouse Night** — interior defense; fire-spread overlays; first grið yields.
3. **ch1-03 Ford of Grey Ice** — river crossing; ice-slip tiles; introduces CT manipulation preview.
4. **ch1-04 The Landless** — first clash with the outlawed-raider host (Wiegraf-analog introduced); morale/rout mechanics.
5. **ch1-05 Grove Road** — escort/witness tutorial; civilians who flee and *talk*.
6. **ch1-06 Holmgang** — formal duel map, 1v1 with seconds; facing mastery test.
7. **ch1-07 The Second Níð** — escape battle after Grím's blood is exposed in verse; escape edges under pursuit.
8. **ch1-08 The Burning of Ulfheim** — the split. The king's test: prove the rumor means nothing by razing his mother's kin yourself. Two objective sets in one map file (kingsman: raze & kill; outlaw: turn on your own detachment mid-battle). Sets flag `route = kingsman|outlaw`.

Showcase maps (1 each): ch2-kingsman naval boarding (two longship decks, plank bridges, drowning edges); ch2-outlaw fell ambush (extreme verticality, rockslide triggers); ch3 corpse-road barrow (darkness LoS, einherjar debut); ch4 Thing-plain trial-battle (law circle = no-kill zone tiles); ending-4 root-of-the-tree (secret; geometry that slowly *rearranges* — the map itself is being digested).

## 6. MECHANICS ANCHORS (seed values; refine in specs, mark TUNABLE)

- **Charge Time:** each tick, `CT += Speed`. Unit acts at CT ≥ 100. Act+move resets to 0; move-only or act-only resets to 20. Spells/rune-carvings charge on their own CT (speed stat per spell) — *diegetically, casting time IS carving/chanting time*.
- **Facing:** side attacks +12% hit, back +25% hit. Facing auto-sets on act end; Wait lets you choose.
- **Elevation:** melee strikes targets within ±1h. Bows: +1 range per 2h advantage, LoS blocked by intervening tiles at/above the sightline. Movement: +1 move cost per 1h climbed, capped by Jump stat. Falling > 2h causes damage.
- **Death & the Valkyrie:** downed unit persists 3 of its own would-be activations; each tick, one fewer raven circles the body (3→2→1). At zero: valkyrie descends, unit is **gone**, drops grave-goods (equipped weapon), name enters the Einherjar Roster. Reviving is, in-fiction, *theft from the gods*.
- **Einherjar returns:** from Chapter 3 onward, enemy formations may include the player's permanently fallen units — final job, final abilities, +1 gear tier, rune-lit. Striking them down "unhooks them from the harvest": grants +1 Wyrd Point and a unique saga line per unit. This is FIXED, not tunable — it is the permadeath payoff.
- **Wyrd Points (Grím only):** pool of 3 per battle, +1 per fate-defiance (surviving a lethal hit at 1 HP; felling a named enemy). Powers: **Slip** (enemy CT −30, cost 1), **Thread** (ally CT +30, cost 1), **Twist** (reroll one to-hit, cost 1), **Sever** (rewind Grím's last action, once per battle, cost 3). Any use in a *sung* battle: `man_blood −4` (toward Blood). Power is public; skalds talk.
- **Alignment axes:** `mercy_terror` ∈ [−100 Terror … +100 Mercy]; `man_blood` ∈ [−100 Blood … +100 Man]. Dual ledgers: Sung (witnessed) and True (all). Sung gates clan trust and public scenes; True gates Hel content and the hidden ending.
- **Grið (yield):** enemies below 25% HP or after leader falls may cry grið. Accept: +mercy (sung if witnessed), sometimes recruits/informants. Execute: −mercy on True always; on Sung only if a witness survives.
- **Witness rule:** a battle is Sung if ≥1 neutral witness survives/escapes OR ≥1 enemy routs off an escape edge. Otherwise Unsung: only the True Ledger moves.
- **Clan trust:** −100…+100 per clan. Trust exercises unlock at 25/50/75; betrayal events can fire below −25. **Faith path** grants the clan's full job line; **fire path** loots a diminished variant (fewer abilities, stigma tags in dialogue).

## 7. JOB TREE SEED (~16 jobs; full ability lists per job go in spec-jobs.md + data/jobs/)

Drengr (squire/base) → Huscarl (knight), Veiðimaðr (archer), Berserker (monk), Læknir (chemist), Völva (white mage), Seiðmaðr (black mage — carry the historical *ergi* stigma for men as dialogue texture), Norn-touched (time mage), Goði (summoner — calls vættir and dísir; late spells speak gods' names, dangerously), Raider (thief), Skald (orator/bard fused — níð and praise as combat verbs: taunt, fear, inspire), Runespeaker (oracle), Vættir-speaker (geomancer), Wyrmslayer (dragoon), Skógarmaðr (ninja), Varangian (samurai), Rune-reckoner (calculator), Riddari (mounted, Hjortdal-exclusive). Grím-unique command: **Wyrdless**. JP economy and prerequisite lattice: FFT-proportioned, defined in spec.

## 8. STORY FLAGS & BRANCH LOGIC (author fully in 08-branch-map.md)

Route split at ch1-08 (`route`). Chapter 2 runs parallel route files; Chapter 3 merges with variant scenes; Chapter 4 converges on the Thing-plain and the roots. Ending gates (TUNABLE anchors):
- **King of Men:** Sung mercy ≥ +40 AND man_blood ≥ +30 AND Hjortdal trust ≥ 60 AND trial arc complete AND final choice "sever the blood" (mechanically: lose all Wyrd powers for the last act — the game gets harder because he chose to be only a man).
- **Benevolent God:** mercy ≥ +40 AND man_blood ≤ −30 AND Hel arc complete → Grím takes the empty seat as god of the straw-dead, everyone Valhalla wouldn't have.
- **Merciless Ruler:** True mercy_terror ≤ −40 AND man_blood ≥ +30 AND Sung mercy_terror ≥ 0 (the golden-age lie requires a clean public ledger — killed witnesses are the ticket).
- **The Successor (hidden):** True mercy_terror ≤ −40 AND man_blood ≤ −40 AND ≥5 einherjar consumed rather than unhooked (secret inverse choice you must design) AND a concealed Ch3 corpse-road scene found. Frame reveal: the hall, the skald, the last night.

## 9. EXECUTION PHASES (one commit each; STOP for human review at every gate)

- **Phase 0 — Scaffold:** repo tree, CANON.md (from §3 + rename table + glossary), README, all three schemas, both tools. Gate: `validate.mjs` runs clean on an example map you include as a self-test.
- **Phase 1 — Story bible & people:** 00, 01, 02. Gate: no fact outside CANON.
- **Phase 2 — Design specs:** all seven spec sheets. Gate: every §6 anchor appears in exactly one spec; cross-refs resolve.
- **Phase 3 — Chapter 1 deep build:** 03-ch1 full scripts + all 8 ch1 map JSONs + their manifest rows. Gate: validator passes; every map has height gimmick + witness setup; every flag set/read is registered.
- **Phase 4 — Branches, showcases, endings:** 04a/04b/05/06/07/08, 5 showcase maps, story-flags.json complete. Gate: branch diagram has no orphan flags or unreachable endings.
- **Phase 5 — Manifest & consistency pass:** full battle-manifest.md; grep every proper noun against CANON's rename table; log residue in Open Questions. Gate: zero validator errors, zero unregistered nouns.

## 10. TONE, STYLE & NAMING

- **Verse:** all níð and praise-poetry in alliterative fornyrðislag-flavored verse (two stressed alliterating syllables per half-line; no rhyme). Each chapter opens with a Hávamál-style epigraph you compose (never quote real translations).
- **Frame voice:** skald in present tense, addressing the hall. Played scenes in standard script format. Deliberate small contradictions between recitation and play — track each in a "Saga Discrepancies" table in 00-frame.md.
- **Faith nuance (hard rule):** the new faith is never cartoon-evil — it frees thralls and is *right about the rot, wrong about the cure*. The old faith is never noble-savage'd — it hanged Yrsa. Both altars have blood on them; only people earn loyalty.
- **Terminology glossary (in CANON):** vargdropi, níð, grið, seiðr, ergi, blót, skógarmaðr, holmgang, strandhögg, Thing, goði/goðar, einherjar, dísir, vættir, fylgja, wyrd (note: Anglo-Saxon cognate used for readability; ON *urðr* — standardize on "wyrd," record the purist alternative).
- **All names are placeholders.** Never treat a name as final; the Rename Table is the only authority.
- **Rating:** dark but not gratuitous — violence has weight and witnesses; no sexual violence on-page; thralldom depicted honestly as the class engine it was.

## 11. OUT OF SCOPE (log as `FUTURE.md` stubs only if ideas arise)

Engine implementation, balance simulation, art/audio direction, side-quest content, multiplayer, localization.

---

*End of kickoff. Begin with Phase 0 and stop.*
