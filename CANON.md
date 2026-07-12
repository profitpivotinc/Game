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
- **C-FRAME-04.** The frame-skald is deliberately never named. Naming the reciter is withheld so the Successor reveal lands clean — that the hall lies under the World-Tree's roots, that it is the last night, and that the "skald" is the harvest given a mouth.

### 1.2 World & Setting

- **C-WORLD-01.** Setting: the Northlands **[P]** — fjord coasts, inland holds, high fells, and the Thingvellir plain **[P]** where law is spoken. Presents as grounded ~10th-century Scandinavia in the conversion era.
- **C-WORLD-02.** Magic is rare, ambiguous, and feared. The mythic layer (corpse-eater, Hel, the Wyrd) surfaces gradually; it is fully undeniable only by Chapter 3.
- **C-WORLD-03.** The High King **[P — unnamed, to be named Phase 1]** recently converted to the new faith and banned raiding, outlawing a generation of landless young warriors.
- **C-WORLD-04.** The new faith is an invented Christianity-analog, called the faith of the "White God" **[P]**. It is never named as real-world Christianity.
- **C-WORLD-05.** The old priesthood answers the ban with escalating blóts. A conversion civil war is igniting at game start.
- **C-KING-01.** The High King is **Ragnvald [P]** — a convert-king torn between two altars. His reign is built of erasures: he commissioned the níð that unmade Queen Aldís (Y−20), sanctioned the Blót of Yrsa (Y−6), and banned raiding on his conversion (Y−2). Never cartoon-evil: he believes each erasure bought a real peace, and the ban did stop real bloodshed — right about the wound, monstrous in the cure, a mirror of the new faith itself.
- **C-KING-02.** Ragnvald was Aldís's husband-king; Grím is his legally-disowned son. Biological paternity stays **unconfirmed** (Ragnvald, or Loki) per C-GRIM-04, so the ch1-08 test is the father unknowingly ordering the son to burn the mother's kin. *(Working decision — flag for human lead.)*
- **C-LANDLESS-01.** The outlawed-raider host (Wiegraf-analog) is led by **Brandr [P]** ("firebrand"), introduced at ch1-04 "The Landless." Distinct from but allied to Clan Ulfheim; his righteous cause — a generation outlawed for being poor and young — curdles into martyr-zealotry the hunger exploits, and he may return as an einherji to be unhooked (C-DEATH-02).

### 1.3 Religion & the Harvest Lie

- **C-LIE-01.** Official old-faith doctrine: valkyries carry the glorious dead to Valhalla.
- **C-LIE-02.** Truth: the harvest of the dead goes *down*, to the Corpse-Eater **[P]** gnawing at the roots of the World-Tree **[P]**. The old priesthood serves it without fully understanding. "Valhalla" is the sales pitch of a slaughterhouse.
- **C-LIE-02a.** The old priesthood serves the Corpse-Eater without fully understanding — **except an inner rite** that half-knows the harvest goes down and euphemizes it as **"seeding the roots"** (glossary §3). Half-knowledge, not complicity: enough to keep the rite going, not enough to name the maw. Refines, does not contradict, C-LIE-02.
- **C-LIE-03.** By Chapter 3 the player learns the hunger has re-homed inside the *new* church, cocooned in a martyred saint's relics — a faith that venerates dying for god is a better harvest engine.
- **C-LIE-04.** The new faith genuinely frees thralls and is genuinely right that the old ways are rotten — right about the rot, wrong about the cure. It is never cartoon-evil.
- **C-LIE-05.** The old faith is never noble-savage'd: it hanged Yrsa. Both altars have blood on them; only people earn loyalty.
- **C-LIE-05a.** The old faith also holds a **genuine good the conversion destroys**: it binds free kindreds into a web of kin, ancestor-honor, and communal law (the **Thing itself is old-faith-entangled**) — a real belonging that the new faith's individualism and market-faith (cf. Hvalfjorð's contract-faith) dissolve. Both altars must be **mournable-in-loss**, not only the new one **celebrable-in-gift** — this is the institutional counterweight that keeps C-LIE-04/05 from making the old faith one-dimensional. Where the new faith wins an argument, the old faith must have a real one to lose.
- **C-LIE-06.** Hel operates through dreams, corpse-roads, and one recurring emissary **[P — unnamed, Phase 1]**. She wants the harvest returned to its lawful course: her halls are starving.
- **C-EMISSARY-01.** Hel's emissary is **Salgerð "the Grey-Guest" [P]**, a dead völva who walks Grím's dreams and the corpse-roads, pleading that the harvest be returned to Hel's lawful course. She cannot lie but can withhold; a petitioner for a broken order, never a tempter to evil. She gates the True ledger and the Benevolent God / Successor content (C-ALIGN-02).
- **C-CLERIC-01.** **Bótólfr [P]** is the representative sincere White-God priest who genuinely manumits thralls (C-LIE-04) and tends Ingunn's shrine unaware the harvest nests within — the new faith's honest human face and the cocoon's camouflage.
- **C-SAINT-01.** "**Ingunn 'the Unburnt' [P]**" is the new church's founding saint — but the woman under the relic **is Yrsa** (C-SAINT-02). The official hagiography (an ancient freed thrall-girl martyred at the high grove ~Y−25 whom the blót-fire "would not take") is **fabrication**; the venerated **incorrupt body** is the thrall-girl **hanged at the Blót of Yrsa (Y−6)**, spirited from the grove, relocated, renamed, and re-storied to found the new church and enable Ragnvald's conversion. By Ch3 the re-homed hunger cocoons in that body (C-LIE-03). "**Unburnt**" reads **three** ways: holy miracle (the lie); un-consumed vessel (the cocoon); and **literally true — she was hanged, not burned** (the truth the fire-miracle was invented to bury).
- **C-SAINT-02. [COMMITTED — project-lead ruling; was the optional escalation, now canon.]** **Ingunn and Yrsa are the same erased woman.** The old faith hanged her (Y−6); the new faith stole and sainted her corpse to found itself. The two "mirror-figures" collapse into **one body** — the ultimate word-fame horror, and "both altars have blood" (C-LIE-05) rendered literally: one murdered thrall-girl claimed, in turn, by each altar. The last great blót-victim of the old faith becomes the founding saint of the new.
- **C-SAINT-03.** **Dramatic-irony structure (project-lead directive).** The **player** learns Ingunn = Yrsa **early** — shown, not deduced: the hanging (Ch1 grove material / frame) and the relic-cult are set side by side so the player cannot miss it. The **characters** stay ignorant until a **late reveal (Ch3–4)** that lands as the game's biggest shock — most of all for **Dag** (her brother, who fled her murder into the very church founded on her stolen body) and **Bótólfr** (who sincerely tends her shrine). The gap between player-knowledge and character-knowledge **is** the word-fame theme made playable: you watch the erasure work in real time on people who cannot see it. **Handling requirement (Ch3–4 writers):** Dag's non-recognition must stay credible — she was renamed, relocated far from the blót-site, storied as centuries-ancient, the reliquary kept closed, and a brother who never let himself look; the reveal is the **opening of the incorrupt body**. Do not let a character stumble on it casually before that beat.

### 1.4 Grím (protagonist)

- **C-GRIM-01.** Grím "the Masked" **[P]**, ~19 at game start. Raised as a smith's fostered son in a coastal hold. Prodigious — uncannily so — with every weapon.
- **C-GRIM-02.** Wears a half-mask; he says it hides burn scars. ("Or so he says" — the claim is his, not the narrator's.)
- **C-GRIM-03.** He is *vargdropi*: child of Queen Aldís **[P]**, whose line was legally unmade ~20 years ago by commissioned níð-verse alleging an affair with Loki. Her kin scattered into outlawry (became the Ulfheim remnant). He is barred by law from his own blood. His family was destroyed by a poem.
- **C-GRIM-04.** Grím's paternity is deliberately ambiguous and never confirmed in canon. If the níð was true, Hel — Loki's daughter, keeper of the un-glorious dead — is his kinswoman.
- **C-GRIM-05.** Grím is the **Wyrdless**: the one thread the Norns cannot fix — the in-fiction reason the game branches at all. His Wyrd powers first manifest involuntarily and are witnessed only as **uncanny skill or luck** — deniable in Chapter 1 (C-WORLD-02); the saga names it *Wyrd* only in hindsight — yet that witnessed uncanniness is what draws every faction's eye to him and reopens the question the crown paid to close (C-KING-02).
- **C-GRIM-06.** **[F]** Grím's godlike skill is meta, not stats: Wyrd Points manipulate the CT system itself. He must never be an Orlandeau-style stat monster.
- **C-GRIM-07.** His arc: discovering what he is, then choosing what it *means* — by law (King of Men), by blood (Benevolent God), by terror (Merciless Ruler), or by hunger (The Successor).
- **C-NID-EVIDENCE-01.** The original níð-stave carved against Aldís survives in Hrafnmark's keeping, together with the commission-tally that names the throne (Ragnvald) as its payer. High Hrafnmark trust yields it as legal proof that she was **framed** (that the verse was *bought*) — the King of Men lever; the fire-path burns the **raven-wood** (Hrafnmark's seat, distinct from the old-faith **high grove** — see Rename Table) and destroys the proof forever. *(Note: proving the níð was commissioned proves Aldís was framed, not that its content was false — see C-GRIM-04; the distinction is load-bearing.)*
- **C-THING-01.** **Skapti the Lawspeaker [P]** spoke the law that ratified Aldís's unmaking at the Thing. Only the Thing can lift *vargdropi* status, so the King of Men trial arc forces him to correct his own past ruling — law used once as a murder weapon, asked now to be a remedy.

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
- **C-CLAN-03. [F]** Taking Hjortdal by fire (riding down the lawspeakers) forecloses the **King of Men** ending permanently, since only law can unmake *vargdropi* status (ties C-CLAN-01 to the §1.9 King of Men gate).
- **C-CLAN-04.** Fire-path **stigma-tag registry** (the dialogue tags C-CLAN-01 anticipates; mechanical effects on cross-clan trust live in `spec-clans-trust.md`): **KINSLAYER** (Ulfheim — "he burned his own blood"), **LOREBURNER** (Hrafnmark — burned the raven-wood, destroyed the níð-proof), **OATHBREAKER** (Bjarnholt — "he broke the **guest-cup**," the deepest Norse stigma; see glossary), **MARKET-BURNER** (Hvalfjorð — robbed his own creditors; no port will deal), **LAW-BREAKER / Thing-slayer** (Hjortdal — outlaw forever, and forecloses King of Men per C-CLAN-03). Tags are cumulative, permanent, and poison starting trust elsewhere.
- **C-CLAN-LEAD-01.** Clan leaders **[all P]**: Ulfheim — **Gunnhild "the Wolf-Widow"** (Aldís's sister, Grím's maternal aunt; wants a banner, not a kinsman); Hrafnmark — **Rúnolfr "the Rune-Heir"** (male seiðmaðr, ergi-stigmatized, níð-heir); Bjarnholt — **Bǫðvarr "Bear-Sark"** (oath-bound lodge-master); Hvalfjorð — **Auðr "the Deep-Counseled"** (prime-signed merchant, sells to both altars); Hjortdal — **Skapti "the Lawspeaker"** (Lawspeaker of the Thing).

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
- **C-ELEV-02.** **Climb convention (Phase 3 ruling, [T]):** the maximum single-step climb is **Jump − 1** height units; Chapter-1 standard units have Jump 2, so only 1h steps are climbable and any 2h+ face is a wall to them. Every ch1 map is built to this reading. Revisit in `spec-combat-core.md` (Phase 2) — see OQ-6.
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

### 1.11 Cast Ages (at Y0)

- **C-AGE-01.** Canonical ages, so scene files (03–07) do not drift. All **[T]** and consistent with the §4 Timeline (e.g. Skapti ~58 → ~38 at the Y−20 Unmaking; Ragnvald ~55 → ~35 at the níð; Þorgeir ~60 → ~54 at the Blót of Yrsa).

| Character | Age at Y0 | Note |
|---|---|---|
| Grím | ~19 | living (C-GRIM-01) |
| Dag | ~24 | living (C-DAG-01) |
| Aldís | would be ~40s | erased Y−20 (never appears living) |
| Yrsa | a young woman | hanged Y−6 |
| Ingunn | = Yrsa (no separate age) | cult-name for Yrsa's corpse; cult *claims* ~Y−25 (C-SAINT-02) |
| Gunnhild | ~44 | Aldís's younger sister |
| Rúnolfr | ~50 | — |
| Bǫðvarr | ~38 | — |
| Auðr | ~46 | — |
| Skapti | ~58 | — |
| Ragnvald | ~55 | — |
| Þorgeir | ~60 | — |
| Bótólfr | ~35 | — |
| Salgerð | dead; ageless | a dead völva |
| Brandr | ~28 | — |

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
| the high grove | old-faith altar in the high fells | where Yrsa was hanged and Ingunn martyred; goðar blót-site. **Distinct** from the raven-wood | — |
| the raven-wood | Hrafnmark's seat (rune-grove of seiðr-halls) | a wooded inland march; the fire-path "burns the raven-wood" (C-NID-EVIDENCE-01). Kept distinct from the high grove to prevent map/scene conflation | — |
| the White God | new-faith epithet | historically attested Norse epithet for Christ (*Hvítakristr*); kept as in-world epithet for the invented faith | — |
| the Trickster | in-world epithet of Loki | used in níð-verse and pious speech where the god's name is avoided (cf. 00-frame row 4, the second níð) | — |
| the Landless | Brandr's outlawed-raider host | the movement's name (C-LANDLESS-01); capitalized as a faction noun, not a clan | — |
| the Corpse-Eater | the hunger at the roots | Níðhöggr-analog; canon deliberately does not use the real name | — |
| the World-Tree | cosmic tree | Yggdrasill-analog; canon uses only the common noun | — |
| Hel | goddess, keeper of the un-glorious dead | real-myth. Loki's daughter | — |
| Loki | god named in the níð | real-myth | — |
| the Norns | fate-weavers | real-myth | — |
| Valhalla | the doctrine's destination | real-myth; the sales pitch of the Lie | — |
| Ragnvald | converted High King; Grím's tester at ch1-08; commissioner of Aldís's níð | ON *Rǫgnvaldr* — *rǫgn* "ruling powers, gods" + *valdr* "ruler": "rules by the gods' power" (ironic — he forswore them for the White God). Opt. by-name "the White-Signed" | — |
| Salgerð ("the Grey-Guest") | Hel's recurring emissary; dreams and corpse-roads; a dead völva | ON *salr* "hall" + *-gerðr* "keeper" — "hall-keeper" of Hel's starving halls; by-name *grár* "grey" + *gestr* "guest," the uninvited guest of the corpse-roads | — |
| Brandr | leader of the outlawed-raider host; introduced ch1-04 | ON *brandr* "firebrand; sword-blade" — the bright blade that burns to ash; the idealist-zealot's fate-name | — |
| Gunnhild ("the Wolf-Widow") | Ulfheim leader; wants a banner, not a kinsman; Aldís's sister, Grím's aunt | ON *gunnr* + *hildr*, doubled "battle-battle" (a historical queen's name); by-name ties her widowhood to the Wolf totem | — |
| Rúnolfr ("the Rune-Heir") | Hrafnmark leader; níð-heir; male seiðmaðr (ergi-stigmatized) | ON *Rúnólfr* — *rún* "rune, secret" + *ulfr* "wolf": "rune-wolf," the house whose carved poems kill; by-name marks him heir to Aldís's níð | — |
| Bǫðvarr ("Bear-Sark") | Bjarnholt leader; oath-bound lodge-master | ON *bǫð* "battle" + *-varr/herr* "warrior," echoing legendary Bǫðvarr Bjarki the bear-champion; by-name *berserkr* "bear-shirt," the lodge's rite | — |
| Auðr ("the Deep-Counseled") | Hvalfjorð leader; prime-signed merchant; sells to both altars | ON *auðr* "wealth" (cf. Auðr the Deep-Minded, a real wealthy Christian-leaning ship-owner); by-name *djúp* "deep" + *-úðigr* "minded," shrewd | — |
| Skapti ("the Lawspeaker") | Hjortdal leader; Lawspeaker of the Thing | ON *skap* "shape, fate"; *skapa* "to shape/ordain fate" (a documented lawspeaker's name) — law as fate-carving, the man who can re-shape Grím's *vargdropi* fate | — |
| Ingunn ("the Unburnt") | **cult-name for Yrsa's sainted corpse** (C-SAINT-01/02); the new church's founding saint | ON *Ing* (Yngvi-Freyr, harvest-god) + *unn* "love": "beloved of Ing" — a harvest-name on the harvest's vessel. Epithet *úbrunninn* "unburnt": miracle-lie / un-consumed cocoon / literally, hanged-not-burned. The name is the church's relabel of Yrsa | — |

**Rule:** grep for any proper noun not in this table during every phase gate; unregistered nouns fail the Phase 5 gate.

### 2.1 Out-of-world design & historical references (grep-exempt)

These are **not in-world names** — they are design/lineage references and real historical/philological cognates used in commentary and etymology notes. They are **exempt from the Phase-5 proper-noun grep gate** (they must never appear in player-facing story/verse text, only in asides, notes, and etymologies):

- **Design lineage:** Final Fantasy Tactics (FFT), Tactics Ogre, Delita, Wiegraf, Orlandeau, Balmamusa.
- **Real historical / philological:** Hákon the Good, Auðr djúpúðga ("the Deep-Minded"), Hávamál, fornyrðislag, primsigning, Hvítakristr, Níðhöggr, Yggdrasill (the last two used only as "-analog" glosses; canon prose uses the common nouns Corpse-Eater / World-Tree).

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
| **seeding the roots** | the old priesthood's inner-rite euphemism for the true downward harvest — half-knowledge that the dead go *down*, not up (C-LIE-02a). Used only by the inner circle (e.g. Þorgeir's rite), never in public doctrine. |
| **guest-cup** | the hospitality-oath cup; breaking it is the deepest Norse stigma (the OATHBREAKER fire-tag, C-CLAN-04). |
| **Yule** | the midwinter feast; capitalized calendar term (like "Thing"). Chapter 1's Yule feast hosts the second níð. |

**Job-name gloss** (full definitions in `docs/design/spec-jobs.md`): Drengr "worthy young warrior" (base); Huscarl "house-man" (knight); Veiðimaðr "hunter" (archer); Berserker (monk); Læknir "healer" (chemist); Völva "staff-bearer, seeress" (white mage); Seiðmaðr "seiðr-man" (black mage); Norn-touched (time mage); Goði (summoner); Raider (thief); Skald (orator/bard fused); Runespeaker (oracle); Vættir-speaker (geomancer); Wyrmslayer (dragoon); Skógarmaðr (ninja); Varangian (samurai); Rune-reckoner (calculator); Riddari "rider" (mounted knight, Hjortdal-exclusive); **Wyrdless** (Grím-unique command, not a job).

---

## 4. Timeline

Year offsets are relative to **Y0 = game start**. All offsets **[T]** placeholder until Phase 1 locks the chronology.

| When | Event |
|---|---|
| ~Y−25 | **"Martyrdom of the Unburnt" — the CLAIMED date (hagiography, no such event).** The new church's founding legend places Ingunn "the Unburnt" [P] here; canon has no martyr at Y−25. The founding relic is really Yrsa's body (Y−6), dated ancient to disguise it (C-SAINT-01/02). Retained in the table only as the *fabricated* date the cult recites. |
| Y−20 | **The Unmaking.** Hrafnmark rune-lawyers — Rúnolfr's forebears — on commission from King **Ragnvald [P]**, publish the níð accusing Queen Aldís of an affair with Loki. Her line is legally unmade at the Thing, ratified by lawspeaker **Skapti [P]**; her kin are outlawed and scatter (origin of the Ulfheim remnant). |
| Y−20…Y−19 | Grím born within the unmaking's shadow; the níð's accusation covers his conception window (C-GRIM-04). Fostered to a smith in a coastal hold. |
| Y−6 | **The Blót of Yrsa** — the last *great* (openly royal-sanctioned) blót at the high grove, sanctioned by King **Ragnvald** and presided by **Goði Þorgeir**. Yrsa, thrall-born, is hanged (a jarl's daughter would not do); Dag (~18) converts to the new faith. **Her body is then taken by the new faith and re-storied as the saint "Ingunn the Unburnt"** (C-SAINT-01/02) — the relic-cult crystallizes Y−6→Y−2 and enables the conversion. |
| Y−2 | **The Conversion & the Ban.** King **Ragnvald** takes the White God's faith and bans raiding; a generation of landless young warriors is outlawed overnight — the host **Brandr [P]** will lead. Old priesthood answers with escalating (now unsanctioned) blóts. |
| Y0 | **Game start.** Clans led by Gunnhild (Ulfheim), Rúnolfr (Hrafnmark), Bǫðvarr (Bjarnholt), Auðr (Hvalfjorð), Skapti (Hjortdal). Chapter 1 spans one winter, ending at the Burning of Ulfheim. |
| Y+1 | Chapter 2 (spring–autumn, route-split). Chapter 3 begins (winter — the blood wakes). |
| Y+2 | Chapter 4 (spring — convergence on the Thing-plain and the roots). Endings. |
| ~Y+300 | **The frame.** The skald recites in the hall that is not what it seems. |

Ordering per KICKOFF §5.1 is fixed: Unmaking → Blót of Yrsa → Raiding Ban → game start. "Last great blót" = last royally sanctioned great blót; post-ban blóts are illegal and escalating (resolves apparent tension with C-WORLD-05).

---

## 5. Data Conventions (binding on schemas, tools, and all data files)

- **D-COORD-01.** Positions are `[col, row]`, 0-indexed. `col 0` = west edge, `row 0` = north edge. Map edges are `"N" | "S" | "E" | "W"`.
- **D-COORD-02.** `terrain` and `elevation` are row-major: outer array = rows (north → south), inner arrays = cols (west → east). Dimensions must equal `grid.rows` × `grid.cols`.
- **D-TERR-01.** Terrain vocabulary **[T, extensible via schema]**: `grass, dirt, rock, sand, shingle, snow, ice, water_shallow, water_deep, marsh, road, plank, wood_floor, stone_floor, root`.
- **D-TERR-02.** **Passability rulings (Phase 3):** (a) `rock` is passable stone — impassability arises ONLY from elevation deltas (walls are modeled as high-elevation tiles, cf. ch1-02's elev-6 turf walls); (b) `water_deep` is intrinsically drowning-lethal to grounded units — the `drown_edge` overlay marks *additional* scripted drowning tiles on other terrain (ice holes, deck edges), not a prerequisite for water_deep lethality; (c) a neutral's `escape_edge` is independent of the map's top-level `escape_edges`, which govern rout/player escape accounting (C-ALIGN-04) only.
- **D-OVER-01.** Overlay vocabulary **[T, extensible via schema]**: `flammable, fire, ice, rubble, law_circle, corpse_road, rockslide_zone, drown_edge, hallowed, grave_goods`.
- **D-AI-01.** AI vocabulary **[T]**: `guard, aggressive, flee, support, leader, script`.
- **D-FLAG-01.** Every narrative flag lives in `data/flags/story-flags.json` with a type and setter/reader refs. Map triggers reference flags via `"when": "flag:<id>"` and `"set_flag": "<id>"`; the validator cross-checks both.
- **D-ROUTE-01.** Valid `route_tags` values are the C-ROUTE-03 list; once `docs/story/08-branch-map.md` exists, its route list is authoritative and the validator reads it from there.
- **D-MAP-01.** Every map's `designer_notes.height_gimmick` must answer *"what does elevation do HERE that it does nowhere else?"* and `designer_notes.witness_setup` must answer *"who can witness, and can the player prevent it?"* Missing/empty answers fail validation. **[F]**

---

## 6. Open Questions

| # | Question | Proposed resolution (pending human lead) |
|---|---|---|
| OQ-1 | KICKOFF §4 says "~16 job files" but §7 enumerates **18** jobs (Drengr through Riddari, excluding the Wyrdless command). | Treat "~16" as approximate; plan 18 job JSON files + Wyrdless documented in spec-wyrd/spec-jobs as a command set, not a job file. **DECISION (working):** adopt — lock 18 job files (Drengr, Huscarl, Veiðimaðr, Berserker, Læknir, Völva, Seiðmaðr, Norn-touched, Goði, Raider, Skald, Runespeaker, Vættir-speaker, Wyrmslayer, Skógarmaðr, Varangian, Rune-reckoner, Riddari); Wyrdless = Grím-only command, no job file. |
| OQ-2 | §3 gives Hjortdal the custodian "Lawspeaker-Skald (orator-analog)" while §7 lists a single fused "Skald (orator/bard)". Same job or two? | One job, `skald`, custodian Hjortdal; "Lawspeaker" is its trust-75 advanced title/ability tier. Revisit in Phase 2 (spec-jobs). **DECISION (working):** adopt — single `skald` job (Hjortdal custodian); "Lawspeaker" = its trust-75 title/ability tier, embodied in-fiction by Skapti the Lawspeaker. |
| OQ-3 | Benevolent God gate says "mercy ≥ +40" without naming a ledger (King of Men explicitly uses Sung; Merciless Ruler mixes True and Sung). | Use the **True** ledger — Hel judges what actually happened, not what is sung. Mark TUNABLE in spec-alignment and 08-branch-map. **DECISION (working):** adopt — Benevolent God gate reads the **True** ledger (mercy ≥ +40 True); Hel and the straw-dead judge reality, not the song. **[T]** |
| OQ-4 | Wyrd Point pool: is 3 a hard cap, or can fate-defiance gains exceed 3 in a battle? | Pool starts at 3, gains can exceed it up to a soft cap of 5 **[T]**; decide in Phase 2 (spec-wyrd). **DECISION (working):** adopt — pool starts 3/battle; fate-defiance may raise it to a soft cap of 5; excess gains are lost, nothing banked between battles. **[T]** |
| OQ-5 | "Last great blót" (Yrsa, pre-ban) vs. "escalating blóts" after the ban (§3 World). | Resolved editorially in Timeline §4: "great" = royally sanctioned; post-ban blóts are illegal and escalating. Confirm in Phase 1. **DECISION (confirmed, Phase 1):** "great" = royally sanctioned (last: Blót of Yrsa, Y−6); post-ban blóts are illegal and escalating. Timeline §4 stands; no contradiction with C-WORLD-05. |
| OQ-6 | C-ELEV-01 "capped by Jump" is ambiguous: is a Jump-2 unit's max single-step climb 2h or 1h? All eight ch1 maps assume 2h faces are walls to standard units. | **DECISION (working, Phase 3):** max single-step climb = **Jump − 1** h (C-ELEV-02) — preserves every shipped map. Human lead may instead lower standard Ch1 Jump to 1 and keep climb ≤ Jump; either way spec-combat-core (Phase 2) must restate the rule. **[T]** |

---

*Maintained by every phase. Additions require the same commit as the file that first uses the fact.*
