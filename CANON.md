# CANON.md — The Constitution of VARGDROPI

> Single source of truth. Any fact used in two or more files MUST appear here first.
> When a new fact is invented mid-writing, it is added here **in the same commit**.
> If any downstream file contradicts this document, this document wins.
> If this document contradicts a Creative Pillar (KICKOFF §2), the pillar wins — and the conflict is logged under [Open Questions](#open-questions).

Status legend: **[P]** placeholder (subject to Rename Table) · **[T]** TUNABLE number · **[F]** FIXED by design fiat.

---

## 1. Canonical Facts

### 1.1 Theme & Frame

- **C-THEME-01.** Word-fame is the theme: who gets remembered, who gets erased, who controls the carving. Every major system (frame, níð device, witness mechanic, endings) expresses it.
- **C-FRAME-01.** The entire game is a saga recited by a skald ~300 years after the events, in a hall that is not what it seems.
- **C-FRAME-02.** The skald's recitation and the played events diverge in small, deliberate ways ("the saga remembers it differently"). Every divergence is tracked in the Saga Discrepancies table in `docs/story/00-frame.md`.
- **C-FRAME-03.** Each of the four endings recontextualizes the frame. The hidden fourth reveals the recitation is happening on the last night of the world.

### 1.2 World & Setting

- **C-WORLD-01.** Setting: the Northlands **[P]** — fjord coasts, inland holds, high fells, and the Thingvellir plain **[P]** where law is spoken. Presents as grounded ~10th-century Scandinavia in the conversion era.
- **C-WORLD-02.** Magic is rare, ambiguous, and feared. The mythic layer (corpse-eater, Hel, the Wyrd) surfaces gradually; it is fully undeniable only by Chapter 3.
- **C-WORLD-03.** The High King **[P — unnamed, to be named Phase 1]** recently converted to the new faith and banned raiding, outlawing a generation of landless young warriors.
- **C-WORLD-04.** The new faith is an invented Christianity-analog, called the faith of the "White God" **[P]**. It is never named as real-world Christianity.
- **C-WORLD-05.** The old priesthood answers the ban with escalating blóts. A conversion civil war is igniting at game start.

### 1.3 Religion & the Harvest Lie

- **C-LIE-01.** Official old-faith doctrine: valkyries carry the glorious dead to Valhalla.
- **C-LIE-02.** Truth: the harvest of the dead goes *down*, to the Corpse-Eater **[P]** gnawing at the roots of the World-Tree **[P]**. The old priesthood serves it without fully understanding. "Valhalla" is the sales pitch of a slaughterhouse.
- **C-LIE-03.** By Chapter 3 the player learns the hunger has re-homed inside the *new* church, cocooned in a martyred saint's relics — a faith that venerates dying for god is a better harvest engine.
- **C-LIE-04.** The new faith genuinely frees thralls and is genuinely right that the old ways are rotten — right about the rot, wrong about the cure. It is never cartoon-evil.
- **C-LIE-05.** The old faith is never noble-savage'd: it hanged Yrsa. Both altars have blood on them; only people earn loyalty.
- **C-LIE-06.** Hel operates through dreams, corpse-roads, and one recurring emissary **[P — unnamed, Phase 1]**. She wants the harvest returned to its lawful course: her halls are starving.

### 1.4 Grím (protagonist)

- **C-GRIM-01.** Grím "the Masked" **[P]**, ~19 at game start. Raised as a smith's fostered son in a coastal hold. Prodigious — uncannily so — with every weapon.
- **C-GRIM-02.** Wears a half-mask; he says it hides burn scars. ("Or so he says" — the claim is his, not the narrator's.)
- **C-GRIM-03.** He is *vargdropi*: child of Queen Aldís **[P]**, whose line was legally unmade ~20 years ago by commissioned níð-verse alleging an affair with Loki. Her kin scattered into outlawry (became the Ulfheim remnant). He is barred by law from his own blood. His family was destroyed by a poem.
- **C-GRIM-04.** Grím's paternity is deliberately ambiguous and never confirmed in canon. If the níð was true, Hel — Loki's daughter, keeper of the un-glorious dead — is his kinswoman.
- **C-GRIM-05.** Grím is the **Wyrdless**: the one thread the Norns cannot fix — the in-fiction reason the game branches at all. His Wyrd powers first manifest involuntarily.
- **C-GRIM-06.** **[F]** Grím's godlike skill is meta, not stats: Wyrd Points manipulate the CT system itself. He must never be an Orlandeau-style stat monster.
- **C-GRIM-07.** His arc: discovering what he is, then choosing what it *means* — by law (King of Men), by blood (Benevolent God), by terror (Merciless Ruler), or by hunger (The Successor).

### 1.5 Dag (foil)

- **C-DAG-01.** Dag **[P]**, ~24 at game start. Thrall-born, brilliant. Converted after the old gods hanged his sister Yrsa **[P]** in the last great blót (a thrall-born girl was an acceptable offering; a jarl's daughter was not).
- **C-DAG-02.** Dag rises through the new church and the king's service and is crowned by endgame **in every route** — his rise is authored, on rails, the fixed-fate measuring stick against every player-built ending.
- **C-DAG-03.** **[F]** Dag learns what is under the church he built in Chapter 4 — and crowns himself anyway. He is a cold, knowing Delita-analog.

### 1.6 The Five Clans

| Clan | Totem | Identity | Custodian jobs |
|---|---|---|---|
| **Ulfheim** [P] | Wolf | Outlawed remnant of Aldís's kin; skirmishers, night-fighters. Trusting them exposes Grím's blood early; they want a banner, not a kinsman. | Skógarmaðr, Raider |
| **Hrafnmark** [P] | Raven | Seiðr-keepers and rune-lawyers who *wrote the níð* that unmade Grím's house. Ugliest alliance in the game. | Seiðmaðr, Norn-touched, Rune-reckoner |
| **Bjarnholt** [P] | Bear | Berserker lodge, oath-bound, enraged by the raiding ban. Easiest to win, easiest to lose. | Berserker, Wyrmslayer |
| **Hvalfjorð** [P] | Whale | Prime-signed merchant converts. Sell ships, grain, intelligence — and eventually Grím's location, unless trust is high. | Varangian, Læknir (+ exotic gear brokerage) |
| **Hjortdal** [P] | Stag | Horse-lords who keep the Thing and the law. Only law can unmake vargdropi status; the King of Men trial arc runs through them. | Riddari, Skald (Lawspeaker line — see OQ-2) |

- **C-CLAN-01.** Each clan is custodian of a job line. **Faith path** (trust) grants the full line; **fire path** (conquest) loots a diminished variant — fewer abilities, stigma tags in dialogue.
- **C-CLAN-02.** Clan trust is a per-clan scalar −100…+100 **[T]**. Trust exercises unlock at 25/50/75 **[T]**; betrayal events can fire below −25 **[T]**.

### 1.7 Alignment, Witnesses, Ledgers

- **C-ALIGN-01.** Two hidden axes: `mercy_terror` ∈ [−100 Terror … +100 Mercy] and `man_blood` ∈ [−100 Blood … +100 Man]. **Negative = Terror / Blood. Positive = Mercy / Man.**
- **C-ALIGN-02.** Two ledgers: **Sung** (deeds with surviving witnesses) and **True** (everything). Sung gates clan trust and public scenes; True gates Hel content and the hidden ending.
- **C-ALIGN-03.** **[F]** The game never stops a player from massacring witnesses to keep a golden name. It just remembers.
- **C-ALIGN-04.** **Witness rule:** a battle is Sung if ≥1 neutral witness survives/escapes OR ≥1 enemy routs off an escape edge. Otherwise Unsung: only the True Ledger moves.
- **C-ALIGN-05.** **Grið (yield):** enemies below 25% HP **[T]** or after their leader falls may cry grið. Accept: +mercy (sung if witnessed), sometimes recruits/informants. Execute: −mercy on True always; on Sung only if a witness survives.

### 1.8 Combat Anchors (detail lives in `docs/design/spec-*.md`)

- **C-CT-01.** Charge Time: each tick `CT += Speed`; act at CT ≥ 100. Act+move resets to 0; move-only or act-only resets to 20 **[T]**. Spells/rune-carvings charge on their own per-spell speed — diegetically, casting time IS carving/chanting time.
- **C-FACE-01.** Side attacks +12% hit, back +25% hit **[T]**. Facing auto-sets on act end; Wait lets you choose.
- **C-ELEV-01.** Melee strikes within ±1h. Bows: +1 range per 2h advantage; LoS blocked by intervening tiles at/above the sightline. +1 move cost per 1h climbed, capped by Jump. Falling > 2h damages. **[T]**
- **C-DEATH-01.** Downed unit persists 3 of its own would-be activations (ravens 3→2→1). At zero: valkyrie descends, unit is gone, drops grave-goods (equipped weapon), name enters the Einherjar Roster. Reviving is, in-fiction, theft from the gods.
- **C-DEATH-02.** **[F]** Einherjar returns: from Chapter 3 on, enemy formations may include the player's permanently fallen units — final job, final abilities, +1 gear tier, rune-lit. Striking them down "unhooks them from the harvest": +1 Wyrd Point and a unique saga line per unit. FIXED — it is the permadeath payoff.
- **C-WYRD-01.** Wyrd Points (Grím only): pool of 3 per battle **[T]**; +1 per fate-defiance (surviving a lethal hit at 1 HP; felling a named enemy). Powers: **Slip** (enemy CT −30, cost 1), **Thread** (ally CT +30, cost 1), **Twist** (reroll one to-hit, cost 1), **Sever** (rewind Grím's last action, once per battle, cost 3). **[T]**
- **C-WYRD-02.** Any Wyrd use in a *sung* battle: `man_blood −4` (toward Blood) **[T]**. Power is public; skalds talk.

### 1.9 Structure, Routes, Endings

- **C-ROUTE-01.** Route splits happen only at chapter boundaries via one large, irreversible decision. Micro-choices feed the ledgers; macro-choices split the routes.
- **C-ROUTE-02.** The Chapter 1 split is a forced atrocity (Balmamusa pattern): battle `ch1-08-burn-ulfheim` — the king's test: raze his mother's kin yourself. Sets flag `route = kingsman | outlaw`.
- **C-ROUTE-03.** Canonical route list (authoritative until `docs/story/08-branch-map.md` exists, which must restate it): `shared`, `kingsman`, `outlaw`, `secret`. Chapter 2 runs parallel route files; Chapter 3 merges with variant scenes; Chapter 4 converges on the Thing-plain and the roots. `secret` marks hidden-ending-only content (the root-of-the-tree map).
- **C-END-01.** Four endings, one hidden. Gates below are **[T]** anchors:
  - **King of Men** (Mercy+Man): Sung mercy ≥ +40 AND man_blood ≥ +30 AND Hjortdal trust ≥ 60 AND trial arc complete AND final choice "sever the blood" — Grím loses all Wyrd powers for the last act; the game gets harder because he chose to be only a man.
  - **Benevolent God** (Mercy+Blood): mercy ≥ +40 AND man_blood ≤ −30 AND Hel arc complete → Grím takes the empty seat as god of the straw-dead, everyone Valhalla wouldn't have. (Ledger unspecified in kickoff — see OQ-3.)
  - **Merciless Ruler** (Terror+Man): True mercy_terror ≤ −40 AND man_blood ≥ +30 AND Sung mercy_terror ≥ 0. The saga calls his reign a golden age because he killed the witnesses.
  - **The Successor** (hidden, Terror+Blood): True mercy_terror ≤ −40 AND man_blood ≤ −40 AND ≥5 einherjar *consumed* rather than unhooked AND the concealed Ch3 corpse-road scene found. Grím replaces the Corpse-Eater. Frame reveal: the hall, the skald, the last night.
- **C-END-02.** Total battle count target across all routes: ~34–40 **[T]**, enumerated in `manifest/battle-manifest.md`.

### 1.10 Tone & Rating

- **C-TONE-01.** All níð and praise-poetry in alliterative fornyrðislag-flavored verse: two stressed alliterating syllables per half-line, no rhyme. Never quote real translations; every epigraph is composed.
- **C-TONE-02.** Each chapter opens with a composed Hávamál-style epigraph.
- **C-TONE-03.** Frame voice: skald in present tense, addressing the hall. Played scenes in standard script format (KICKOFF §5.2).
- **C-TONE-04.** Rating: dark but not gratuitous. Violence has weight and witnesses. No sexual violence on-page. Thralldom depicted honestly as the class engine it was.

---

## 2. Rename Table

**Every proper noun in the project appears here. All are placeholders until the Final Name column is filled by the human lead.** Status: `placeholder` (invented, expected to change), `real-myth` (genuine Norse mythological name, likely retained), `TBD` (entity exists in canon but is not yet named — must be named the moment it first appears in a file).

| Placeholder | Kind | Etymology / note | Final name |
|---|---|---|---|
| VARGDROPI | game title | ON *vargdropi* — "wolf's whelp"; legal term for an outlaw's child, barred from inheriting | — |
| Grím ("the Masked") | protagonist | ON *gríma* — "mask, cowl"; also an Óðinn by-name. On the nose by design; flagged for rename | — |
| Aldís | Grím's mother, unmade queen | ON female name, *ala* + *dís* — "all-goddess" | — |
| Dag | foil, thrall-born king-to-be | ON *dagr* — "day"; the sun that rises on rails | — |
| Yrsa | Dag's sister, hanged at the last great blót | ON name of debated origin, possibly "she-bear"; borne by a legendary bondwoman-queen | — |
| Þorgeir | goði at the grove (Ch1) | ON *Þórr* + *geirr* — "Thor's spear" | — |
| Ulfheim | clan (Wolf) | *ulfr* + *heimr* — "wolf-home" | — |
| Hrafnmark | clan (Raven) | *hrafn* + *mörk* — "raven-march/forest" | — |
| Bjarnholt | clan (Bear) | *bjǫrn* + *holt* — "bear-wood" | — |
| Hvalfjorð | clan (Whale) | *hvalr* + *fjǫrðr* — "whale-fjord" (real Icelandic toponym Hvalfjörður; rename likely) | — |
| Hjortdal | clan (Stag) | *hjǫrtr* + *dalr* — "hart-dale" | — |
| the Northlands | setting region | generic; placeholder by intent | — |
| Thingvellir plain | law-plain | real Icelandic toponym Þingvellir — "assembly plains"; rename likely | — |
| the White God | new-faith epithet | historically attested Norse epithet for Christ (*Hvítakristr*); kept as in-world epithet for the invented faith | — |
| the Corpse-Eater | the hunger at the roots | Níðhöggr-analog; canon deliberately does not use the real name | — |
| the World-Tree | cosmic tree | Yggdrasill-analog; canon uses only the common noun | — |
| Hel | goddess, keeper of the un-glorious dead | real-myth. Loki's daughter | — |
| Loki | god named in the níð | real-myth | — |
| the Norns | fate-weavers | real-myth | — |
| Valhalla | the doctrine's destination | real-myth; the sales pitch of the Lie | — |
| High King | (TBD — name in Phase 1) | the converted king; Grím's tester at ch1-08 | — |
| Hel's emissary | (TBD — name in Phase 1) | recurring; dreams and corpse-roads | — |
| Wiegraf-analog | (TBD — name in Phase 1) | leader of the outlawed-raider host; introduced ch1-04 | — |
| Ulfheim leader | (TBD — name in Phase 1) | wants a banner, not a kinsman | — |
| Hrafnmark leader | (TBD — name in Phase 1) | heir to the níð commission | — |
| Bjarnholt leader | (TBD — name in Phase 1) | oath-bound lodge-master | — |
| Hvalfjorð leader | (TBD — name in Phase 1) | prime-signed merchant prince | — |
| Hjortdal leader | (TBD — name in Phase 1) | lawspeaker of the Thing | — |
| martyred saint | (TBD — name in Phase 1) | relics cocoon the re-homed hunger (C-LIE-03) | — |

**Rule:** grep for any proper noun not in this table during every phase gate; unregistered nouns fail the Phase 5 gate.

---

## 3. Terminology Glossary

Standardized spellings for prose. Story files may gloss on first use; specs use the term bare.

| Term | Meaning in-project |
|---|---|
| **vargdropi** | "wolf's whelp" — child of an outlaw, legally barred from inheriting. Grím's status. |
| **níð** | ritual insult-verse with legal and social force; a poem that can unmake a house. |
| **grið** | truce/quarter; the cry for mercy mechanic (C-ALIGN-05). |
| **seiðr** | Norse sorcery — trance, fate-working; feared, ambiguous. |
| **ergi** | unmanliness stigma historically attached to men who practice seiðr; dialogue texture for male Seiðmaðr characters. |
| **blót** | sacrificial rite of the old faith; escalating to human offerings. |
| **skógarmaðr** | "forest-man" — full outlaw who may be killed on sight; also the outlaw/ninja-analog job. |
| **holmgang** | formal duel with rules and seconds. |
| **strandhögg** | coastal raid for provisions/captives. |
| **Thing** | the law-assembly; capitalized. |
| **goði** (pl. **goðar**) | priest-chieftain of the old faith. |
| **einherjar** | the harvested dead; in-game, permanently fallen units who may return in enemy formations. |
| **dísir** | female tutelary spirits. |
| **vættir** | land-spirits. |
| **fylgja** | a person's attendant fate-spirit, often in animal form. |
| **wyrd** | fate. Anglo-Saxon cognate used for readability; ON purist alternative *urðr* recorded here. Standardize on "wyrd." |

**Job-name gloss** (full definitions in `docs/design/spec-jobs.md`): Drengr "worthy young warrior" (base); Huscarl "house-man" (knight); Veiðimaðr "hunter" (archer); Berserker (monk); Læknir "healer" (chemist); Völva "staff-bearer, seeress" (white mage); Seiðmaðr "seiðr-man" (black mage); Norn-touched (time mage); Goði (summoner); Raider (thief); Skald (orator/bard fused); Runespeaker (oracle); Vættir-speaker (geomancer); Wyrmslayer (dragoon); Skógarmaðr (ninja); Varangian (samurai); Rune-reckoner (calculator); Riddari "rider" (mounted knight, Hjortdal-exclusive); **Wyrdless** (Grím-unique command, not a job).

---

## 4. Timeline

Year offsets are relative to **Y0 = game start**. All offsets **[T]** placeholder until Phase 1 locks the chronology.

| When | Event |
|---|---|
| Y−20 | **The Unmaking.** Hrafnmark rune-lawyers, on commission, publish the níð accusing Queen Aldís of an affair with Loki. Her line is legally unmade at the Thing; her kin are outlawed and scatter (origin of the Ulfheim remnant). |
| Y−20…Y−19 | Grím born within the unmaking's shadow; the níð's accusation covers his conception window (C-GRIM-04). Fostered to a smith in a coastal hold. |
| Y−6 | **The Blót of Yrsa** — the last *great* (openly royal-sanctioned) blót at the high grove. Yrsa, thrall-born, is hanged; Dag (~18) converts to the new faith. |
| Y−2 | **The Conversion & the Ban.** The High King takes the White God's faith and bans raiding; a generation of landless young warriors is outlawed overnight. Old priesthood answers with escalating (now unsanctioned) blóts. |
| Y0 | **Game start.** Chapter 1 spans one winter, ending at the Burning of Ulfheim. |
| Y+1 | Chapter 2 (spring–autumn, route-split). Chapter 3 begins (winter — the blood wakes). |
| Y+2 | Chapter 4 (spring — convergence on the Thing-plain and the roots). Endings. |
| ~Y+300 | **The frame.** The skald recites in the hall that is not what it seems. |

Ordering per KICKOFF §5.1 is fixed: Unmaking → Blót of Yrsa → Raiding Ban → game start. "Last great blót" = last royally sanctioned great blót; post-ban blóts are illegal and escalating (resolves apparent tension with C-WORLD-05).

---

## 5. Data Conventions (binding on schemas, tools, and all data files)

- **D-COORD-01.** Positions are `[col, row]`, 0-indexed. `col 0` = west edge, `row 0` = north edge. Map edges are `"N" | "S" | "E" | "W"`.
- **D-COORD-02.** `terrain` and `elevation` are row-major: outer array = rows (north → south), inner arrays = cols (west → east). Dimensions must equal `grid.rows` × `grid.cols`.
- **D-TERR-01.** Terrain vocabulary **[T, extensible via schema]**: `grass, dirt, rock, sand, shingle, snow, ice, water_shallow, water_deep, marsh, road, plank, wood_floor, stone_floor, root`.
- **D-OVER-01.** Overlay vocabulary **[T, extensible via schema]**: `flammable, fire, ice, rubble, law_circle, corpse_road, rockslide_zone, drown_edge, hallowed, grave_goods`.
- **D-AI-01.** AI vocabulary **[T]**: `guard, aggressive, flee, support, leader, script`.
- **D-FLAG-01.** Every narrative flag lives in `data/flags/story-flags.json` with a type and setter/reader refs. Map triggers reference flags via `"when": "flag:<id>"` and `"set_flag": "<id>"`; the validator cross-checks both.
- **D-ROUTE-01.** Valid `route_tags` values are the C-ROUTE-03 list; once `docs/story/08-branch-map.md` exists, its route list is authoritative and the validator reads it from there.
- **D-MAP-01.** Every map's `designer_notes.height_gimmick` must answer *"what does elevation do HERE that it does nowhere else?"* and `designer_notes.witness_setup` must answer *"who can witness, and can the player prevent it?"* Missing/empty answers fail validation. **[F]**

---

## 6. Open Questions

| # | Question | Proposed resolution (pending human lead) |
|---|---|---|
| OQ-1 | KICKOFF §4 says "~16 job files" but §7 enumerates **18** jobs (Drengr through Riddari, excluding the Wyrdless command). | Treat "~16" as approximate; plan 18 job JSON files + Wyrdless documented in spec-wyrd/spec-jobs as a command set, not a job file. |
| OQ-2 | §3 gives Hjortdal the custodian "Lawspeaker-Skald (orator-analog)" while §7 lists a single fused "Skald (orator/bard)". Same job or two? | One job, `skald`, custodian Hjortdal; "Lawspeaker" is its trust-75 advanced title/ability tier. Revisit in Phase 2 (spec-jobs). |
| OQ-3 | Benevolent God gate says "mercy ≥ +40" without naming a ledger (King of Men explicitly uses Sung; Merciless Ruler mixes True and Sung). | Use the **True** ledger — Hel judges what actually happened, not what is sung. Mark TUNABLE in spec-alignment and 08-branch-map. |
| OQ-4 | Wyrd Point pool: is 3 a hard cap, or can fate-defiance gains exceed 3 in a battle? | Pool starts at 3, gains can exceed it up to a soft cap of 5 **[T]**; decide in Phase 2 (spec-wyrd). |
| OQ-5 | "Last great blót" (Yrsa, pre-ban) vs. "escalating blóts" after the ban (§3 World). | Resolved editorially in Timeline §4: "great" = royally sanctioned; post-ban blóts are illegal and escalating. Confirm in Phase 1. |

---

*Maintained by every phase. Additions require the same commit as the file that first uses the fact.*
