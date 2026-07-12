> **All names in this file are placeholders.** The CANON Rename Table (`CANON.md §2`) is the only naming authority; every coined name carries an implied **[P]** and its final-name column stays blank until the human lead fills it. Unnamed minor speakers are given ROLE-CAPS (HUNTER, GROVE-THRALL, FACTOR…) so no unregistered proper noun enters the record.

# 04b — Chapter Two (Outlaw Route): THE WOLF'S-HEAD ROAD

*Beat sheet + three fully-scripted key scenes for the **outlaw** route of Chapter 2 (Y+1, spring→autumn). Plays only when `route == outlaw` (C-ROUTE-02). Structure, flags, battle refs, and ledger effects are authoritative from the Phase-4 spine (`chapters.04b`; a scratchpad artifact whose durable content lives in `data/maps/`, `data/flags/story-flags.json`, `manifest/battle-manifest.md`, and `docs/story/08-branch-map.md`). Canon anchors cited inline (C-\*). Chapter-2 constraints in force throughout: the Harvest Lie cracks from doctrine into **suspicion** — `harvest_lie_stage: believed → suspected`, cracking but not yet undeniable, the downward pull deniable as dream, grief, and coincidence (C-LIE-02, C-WORLD-02); Grím's Wyrd is named only in hindsight (C-GRIM-05); all verse is composed fornyrðislag flavor, never quoted from any real translation (C-TONE-01/02); rating per C-TONE-04 — the hanging is remembered, never staged; thralldom is the honest class engine it was; no sexual violence on-page. This is the route where **Salgerð "the Grey-Guest" first walks Grím's dreams** and Hel's country opens (C-EMISSARY-01, C-LIE-06); the Ingunn = Yrsa dramatic irony is planted for the player and withheld from every character (C-SAINT-03).*

---

## Chapter Epigraph

*Composed, Hávamál-flavor, fornyrðislag: two stressed alliterating syllables per half-line, no rhyme (C-TONE-01/02). Not a translation of any real verse. All proper nouns implied by it are Rename-Table placeholders.*

> Wolf's-head walks    where the law won't follow;
> no hall holds him,    no hearth, no name.
> The witness makes    the world's remembering —
> unseen, a slaying    was never sworn.
>
> Roads run two ways;    the writ runs one.
> The other runs downward,    the dead man's door.
> Guard well your grave-share:    the gods grow hungry —
> and the harvest, they say,    holds to no hall.

*[ASIDE — design: stanza one is the outlaw route's whole mechanic (the man the law may kill on sight lives only in the gaps between witnesses; silence is now his shelter, the mirror-inversion of the kingsman's forced Sung). Stanza two seeds Salgerð and the Lie's first crack — "the other runs downward" is the corpse-road, "the harvest holds to no hall" pre-empts the doctrine the skald himself still recites straight. Callback target for `ch2o-s02` and the Ch3 corpse-road.]*

---

## Chapter-Break Interlude — the Skald

**[STAGE: the hall, ~Y+300 (C-FRAME-01). The fire is fed by the SKALD's own hand; no thrall comes, none ever comes. He is never named, now or ever (C-FRAME-04). The mead in the horns has not warmed since the first winter's telling, and no one remarks it (C-WORLD-02). Present tense, second person, to the benches (C-TONE-03). He picks the recitation up where Chapter One set it down — a listener had asked after the wolf-widow, and been told: a spring story.]**

> **SKALD:** You asked what became of her. Here is the spring, then — but mind whose spring it is. Not the king's. The king got a boy who turned his blade the wrong way at the fire-line and vanished into the fells, and a king cannot sing a man he cannot find. So this chapter has a hole in it the shape of the crown's ignorance, and I will not pretend to fill it with the crown's verses, because for once the crown had none.
>
> Hear the word the law hangs on a man like this: *skógarmaðr.* Forest-man. Wolf's-head. Any hand may fell him and owe the law nothing — no hall, no Thing, no hearth-right anywhere the writ runs. It is the heaviest word a free tongue can carry, and Grím carried it now on purpose, which no one in the Northlands had ever done and lived to be sung.
>
> And mark the strange arithmetic of it: all that first winter, being *seen* was what undid him — the ford-rumor, the torn mask, the poem at Yule. Now being seen was the only thing that could kill him, and being *unseen* was a roof over his head. A wolf's-head lives in the gap between one witness and the next. Every hunter who walks home makes the hunt real; every hunter who does not, makes a ghost. So watch, this spring, who lives — because for the first time in this saga the mercy and the murder both hide in the same dark, and only you and the dead will know which he chose.
>
> *(smaller; he does not seem to know he says it)* — and the dead knew. The dead were already walking toward him. There is a road that does not go up.

*[ASIDE: the interlude flips the Ch1 witness-lesson (Sung fame damned him; now Sung fame kills him, silence shelters him) — the True > Sung theme with the polarity reversed (C-ALIGN-02/03/04). The last line seeds Salgerð and the corpse-road (C-EMISSARY-01, C-LIE-06); the skald recites it as atmosphere and does not understand it, because he is inside the Lie he is about to have cracked open for the player. Do not let him react to it. Aldís's name stays out of his mouth (00-frame rule 4).]*

---

## Beat Sheet — Chapter 2, Outlaw

*From `spine.chapters.04b.beats`. Six beats, spring→autumn. `route == outlaw` throughout. Ledger column reads Sung vs True per C-ALIGN-02/04: on this route the default battle is **Unsung** unless a hunter, driver, or oarsman escapes to carry it — the inversion of the kingsman route's standing recording-skald. Registered flag ids only (`data/flags/story-flags.json`, D-FLAG-01). Battle refs cite `manifest/battle-manifest.md`; the showcase is **`ch2o-fell-ambush`** (beat 2).*

### Beat 1 — "Killable on Sight" · battle `ch2-01-hunted-thaw`
- **Purpose.** Establish the outlaw register: the sentence of *skógarmaðr* made lived experience. Break a hird cordon in flooded thaw-lowlands — the first fight as an outlaw in law. Blind the cordon to stay a rumor. Reads `route`, `crown_singer_escaped`, `ulfheim_shelter` (whether the winter's hunt already runs on facts and whether Gunnhild's fire was taken).
- **Flags.** `true_mercy_terror`, `sung_mercy_terror` (both via `engine:alignment-ledger`).
- **Ledger (Sung vs True).** Default **Unsung** — a marsh with few third eyes; every hunter who escapes the edge reports and moves **Sung**, every hunter silenced moves **True only**. Blind the whole cordon and the crown hunts a ghost (nothing Sung; True carries the blood). Key-scene: **`ch2o-s01`**.
- **Faith/tone.** No altar here; the beat is pure witness-arithmetic (C-ALIGN-04). Rating: drownings and drownable ice per C-TONE-04, weight and no spectacle.

### Beat 2 — SHOWCASE · "The Fell Ambush" + Salgerð's first walk + Ingunn player-knowledge bracket · battle `ch2o-fell-ambush` (manifest `ch2-02-fell-ambush`)
- **Purpose.** The outlaw showcase and the route thesis in terrain: ambush the king's mountain column in a high N–S pass where **height is ammunition** — `rockslide_zone` tiles bury the road at 0h and seal the column's memory on the wrong side of a slide (C-ELEV-02). Whether *any* column unit escapes the S edge decides if the crown's hunt runs on **facts** (survivors with names and numbers) or **fear** (a column that simply never came home). That night, camped, **Salgerð "the Grey-Guest" first walks Grím's dream** (C-EMISSARY-01) — Hel's country opens. Around it, the **looted-shrine bracket**: the host reads the Ingunn hagiography from sacked shrine-plunder while a freed grove-thrall tells the Blót-of-Yrsa tale — the player is *shown* the saint is Yrsa; no character connects it (C-SAINT-03).
- **Flags.** `hel_arc_stage` (→ `contact`/`petition_heard`), `harvest_lie_stage` (→ `suspected`), `true_mercy_terror` (`engine:alignment-ledger`; `scene:ch2o-s02` sets the Hel/Lie flags).
- **Ledger (Sung vs True).** "A pass with no third eyes" — no neutrals on the map; **only survivors carry it.** Seal every column unit behind a slide and the ambush is **Unsung** (True only); loose one southward and it is **Sung** as terror by intent. Salgerð is a dream, not a witness — the dream-content writes **True only**. Key-scene: **`ch2o-s02`**.
- **Faith/tone.** The Lie takes its first crack here (a drowned/buried man who does not go where doctrine promised); Salgerð shows the harvest going **down**, deniable as a fugitive's grief-dream (C-WORLD-02). Rating: the hanging is *told* by the grove-thrall, never shown (C-TONE-04).

### Beat 3 — "Grain for the Hungry" (ch1-04 inverted) · battle `ch2-03-grain-for-the-hungry`
- **Purpose.** Invert the Ch1 truce-wand fight: now Grím takes the tithe-train **with** Brandr's host — the banner on the high ground is *his*. Brandr's righteousness curdles a shade further (the Wiegraf arc advancing, C-LANDLESS-01). Reads `brandr_met` for the warmer register.
- **Flags.** `sung_mercy_terror`, `true_mercy_terror`, `brandr_met` (read).
- **Ledger (Sung vs True).** Spared drivers witness a *mercy-theft* and sing it **Sung** (grain to the starving); silenced drivers make it plain banditry, **True only** (C-ALIGN-05, grið to non-combatant drivers). The player chooses which story the road carries.
- **Faith/tone.** The Landless case (a generation outlawed for being poor and late-born) restated from inside; Brandr means every word, which is what makes the curdle a tragedy, not a villainy (C-TONE-04, no cartoon-evil).

### Beat 4 — "Wolf-Den Relief" (ch1-01 inverted) · battle `ch2-04-wolf-den-relief`
- **Purpose.** Invert the Ch1 strandhögg: a royal punitive company finds the Ulfheim hidden camp; **hold the low cave shelf while the households climb out** — the `ulfheim_civilians_saved` echo, now from the sheltering side. Gunnhild's banner-bargain deepens (a banner bloodied on the king's own hird is worth more to her than a nephew — C-CLAN-LEAD-01).
- **Flags.** `true_mercy_terror`; **`ulfheim_fate`** is *seeded here and resolved in Ch3* (`map:ch3-wolves-in-winter`, values `restored`/`terms`/`scattered`) — this beat feeds it, does not set it.
- **Ledger (Sung vs True).** "The saved households are the witnesses that matter; the crown's dead need no singer." Households out = **True** mercy with living mouths that can later counter-sing the crown; the king's fallen, unseen, move **True only**.
- **Faith/tone.** The kin-web as *lived shelter*, not doctrine — the thing the ban is unmaking (C-LIE-05a), shown as people, not sermon.

### Beat 5 — "The Sold Berth" · battle `ch2-05-sold-harbor`
- **Purpose.** Hvalfjorð **sells Grím's berth** (the low-trust branch — Auðr's standing Crown offer for his location, an open line on her books, C-CLAN-LEAD-01). Fight clear of a night harbor. The faith/fire fork at its sharpest: **buy the silence back** (keep the logistics spine) or **burn the wharf** (MARKET-BURNER; no port will deal).
- **Flags.** `hvalfjord_fate` (→ `bought`/`burned`; `map:ch2o-sold-harbor` + `scene:ch2o-s03`), `fire_stigma_count` (+1 on burn), `sung_mercy_terror`.
- **Ledger (Sung vs True).** "A wharf of merchants cannot be bought back whole; escaping unseen is near-impossible" — this fight resists staying Unsung (dockhands and factors everywhere). Mercy or terror here is **Sung** almost by default. Key-scene: **`ch2o-s03`**.
- **Faith/tone.** Auðr's contract-faith (*primsigning* as inventory) is the market-faith the old kin-web mourned in Beat 4 — the two altars' quarrel restaged as ledger vs. hearth (C-LIE-05a); neither clean, both honest in their own grammar (C-TONE-04).

### Beat 6 — OUTLAW CLIMAX · "Hunters, Hunted" · battle `ch2-06-hunters-hunted`
- **Purpose.** Turn on the hunt: lure the king's captain onto the high moor among fog-bound cairns. The route's dilemma made final — **stay a total rumor, or let exactly one live to carry terror home on purpose.** Merge into the shared Ch3 (`n_ch2_outlaw → n_ch3_merge`).
- **Flags.** `true_mercy_terror`, `sung_mercy_terror`, `true_man_blood` (all via `engine:alignment-ledger`).
- **Ledger (Sung vs True).** "Keep every hunter from the south edge and stay a rumor, or spare one to spread terror deliberately." The chapter's thesis: **you author the crown's memory by choosing its survivors** (C-ALIGN-03/04). Feeds the Merciless Ruler / Successor colorings if terror is chosen and left unwitnessed.
- **Faith/tone.** Fog-cairns are old graves; the moor is old-faith-entangled ground (C-LIE-05a texture), and the dead are, by now, *listening* — the last quiet foreshadow before Ch3's blood wakes.

*[BEAT-SHEET ASIDE — the route's spine in one line: on the kingsman route a verse always exists and the player shapes it; on the outlaw route **the player decides whether a verse exists at all.** Every beat's Sung/True column is that single lever turned a different way. `ulfheim_fate` is the one flag a beat *feeds* rather than *sets* (resolved Ch3); every other flag above is set within this chapter or by the running alignment engine.]*

---

## Key Scene 1 — `ch2o-s01` · "Killable on Sight"

LOCATION: flooded thaw-lowlands, a hird cordon (before `ch2-01-hunted-thaw`) | TIME: Y+1, first thaw — grey dawn | WEATHER: meltwater fog
FLAGS READ: [`route`, `crown_singer_escaped`, `ulfheim_shelter`] | FLAGS SET: [—] *(the battle moves `true_mercy_terror` / `sung_mercy_terror` via the alignment engine per the choice below)*
PRESENT: Grím, Gunnhild; unnamed: Ulfheim outriders, hird HUNTERS

[STAGE: spring undoing winter — the fells weeping into a lowland of half-ice and standing meltwater, every hollow a mirror, every mirror a place to drown. Ulfheim moves through it the way wolves move: strung out, low, reading the water. GUNNHILD walks point beside Grím, still counting, always counting. Behind them, somewhere in the fog, the drum-tramp of a cordon that has been closing since the snow softened.]

GUNNHILD: (not looking back) Hear the count. Twenty, maybe thirty spears, spread to a net. They don't want a battle. They want to *see* you — one clear sighting, one man who gets home to say the wolf's-whelp stands here, and the net draws in for good. (a flat glance) You've spent all winter learning that being seen was your wound. Unlearn it. Out here being seen is the knife.

GRÍM: And staying unseen?

GUNNHILD: Is the only roof a wolf's-head gets. (she crouches, palms the ice, tests it) A man the law may kill on sight lives in the gap between one witness and the next. Every hunter who walks home makes the hunt real. Every one who doesn't—

GRÍM: —makes a ghost.

GUNNHILD: (the ghost of approval, gone at once) Her wit, too. Don't let it comfort you; it never comforted her.

[BRANCH — IF crown_singer_escaped: a beat of hard memory.]

GUNNHILD: The king's singer got south from the burning. So the hunt already has your name, your numbers, the order you refused. This cordon isn't fishing blind — it's *confirming.* Give it nothing to confirm.

[BRANCH — IF NOT crown_singer_escaped: ]

GUNNHILD: No singer went south from the fire, so the crown hunts a rumor with too many shapes. Keep it shapeless. One clean sighting and the rumor grows a face — and the face is yours.

[STAGE: a hird HUNTER's shape looms out of the fog on the far side of a meltwater channel — young, cold, a horn already at his lips. He has not seen them yet. He is one breath from a note that would carry for a mile.]

GUNNHILD: (breathed, not an order — a test, and she watches him take it) There's your first witness, boy. The whole chapter's in what you do with him.

[BATTLE TRIGGER → ch2-01-hunted-thaw]

[IN-BATTLE NOTE: default **Unsung** — few neutrals, drownable `water_deep`/`drown_edge` channels (D-TERR-01/D-OVER-01). A hunter routed off an edge makes the field **Sung** (C-ALIGN-04); a hunter silenced in the fog moves **True only**. The horn is the mechanic: a hunter who blows it before he falls flips the field Sung whether he escapes or not — reaching him first is the rumor-play. Any Wyrd Point spent in a Sung fight is `man_blood −4` toward Blood and the ford-question reopens (C-WYRD-02); unseen, it costs nothing but the True ledger.]

> CHOICE: [Break out leaving no hunter to report — blind the cordon] → **`true_mercy_terror` −** (blood done unseen) *OR* neutral if every yield is honored under grið; **`sung_mercy_terror`** stays flat. The crown hunts a rumor — nothing Sung exists to give it a face (C-ALIGN-03).
> CHOICE: [Let one beaten hunter flee to carry a merciful account] → **`sung_mercy_terror` +** (a witnessed mercy enters the record); but the hunt gains a face and facts — the merciful choice is also the *legible* one, and legibility is the danger here. The inversion of Ch1's whole lesson, stated as a fork.

GUNNHILD: (after, whichever way it went, low) There. Now you know the trade this spring asks, and it will ask it again on a mountain, and again on a wharf, and again on a moor. Mercy has a witness or it never happened. Murder has a witness or it never happened. (she rises, wolf-lean, moving on) You're not choosing good and ill out here. You're choosing what the world gets to *remember.* Same as they chose, twenty years back, for her.

---

## Key Scene 2 — `ch2o-s02` · "The Grey Guest"

LOCATION: a high fell camp above the ambushed pass, then a corpse-road in dream (after `ch2o-fell-ambush`) | TIME: the night after the ambush | WEATHER: clear, hard stars → (dream) no weather
FLAGS READ: [`brandr_met`, `harvest_lie_stage`] | FLAGS SET: [`hel_arc_stage`, `harvest_lie_stage`, `true_mercy_terror` via the choice]
PRESENT: Grím, Salgerð "the Grey-Guest"; unnamed: GROVE-THRALL (freed, now with the Landless), Landless host; (dream) shapes of the straw-dead

> **[C-SAINT-03 DRAMATIC-IRONY NOTICE — writers/QA: this scene plants Ingunn = Yrsa *for the player only.* Two brackets close around one truth (the sacked-shrine hagiography; the grove-thrall's Blót-of-Yrsa tale) and Salgerð's dream shows the two as one road-shape with the **name withheld.** NO character may connect saint to sister here or anywhere before the Ch4 reliquary-opening (`scene:ch4-s03`, sets `ingunn_yrsa_revealed`). The credibility guard is built into the text: the hagiography is dated ~Y−25 and set at a far shrine; the grove-thrall's Yrsa is Y−6 at the high grove; the names do not match; the reliquary is sealed. `ingunn_yrsa_revealed` stays FALSE in this chapter.]**

### 2a — The Looted-Shrine Bracket (the camp)

[STAGE: the ambush is hours cold and the pass is sealed behind them — the outlaw host camps high, warmed on the king's column's own fire-oil and the plunder of a wayside White-God shrine-croft the host stripped on the climb. Among the sacked stores: a painted devotional board, a hagiography-slip, a reliquary-cloth worth more as wool than relic to hungry men. Grím turns the painted board to the firelight. Nearby, a GROVE-THRALL — freed by the new faith, riding now with the Landless because a freed thrall is still a landless one — mends a strap and watches him read.]

GRÍM: (reading the board's letters slowly, the way a smith's boy reads — the words are not his craft) "…Ingunn. The Unburnt." (a dry breath) A saint. Old one — this dates her better than a hundred winters gone. A freed thrall-girl, it says, martyred at a high grove, and the blót-fire "would not take her." Her body incorrupt. A radiance at her tomb. (he tilts it) They freed the girl and then burned her, and when the fire refused, they called it a miracle and built a church on the ash. Or so the board sings it.

GROVE-THRALL: (not looking up from the strap) The White God's men love a body the fire won't eat. (a pause; then, because the fire is warm and the memory is old) I stood at a grove once. Not that one — a nearer one, and not a hundred winters back. Six springs, that's all. The last great blót the king still called lawful.

GRÍM: The one they sing about.

GROVE-THRALL: They sing it wrong, then. There was no fire for the girl. They *hanged* her. (he ties the strap off, hard) Yrsa, her name was. Thrall-born, like me — and that was the whole of the reason. A jarl's daughter would not do; the gods, it seems, keep an eye on rank. And here is the thing the songs leave out, the thing I have carried six years: they took her *body.* The White God's men came in the dark after and took her down from the tree and carried her off, and by spring she was gone from the grove entire. Not the fire took her. *Men* took her. (he spits into the coals) One faith hanged her for being born low. The other stole what was left. There is no clean altar in that story. I looked for one a long time.

[STAGE: Grím looks from the painted board — *Ingunn, ancient, unburnt, body incorrupt, taken up in radiance* — to the grove-thrall — *Yrsa, six springs gone, hanged not burned, body taken by the White God's men.* The scene lets the two facts sit in the same firelight for one long beat. **The player holds both. Grím does not close the gap** — the board's saint is a century and more old and enshrined a realm away; the thrall's Yrsa is six springs cold at a grove up the coast; the names do not rhyme; the arithmetic the cult falsified is doing exactly the work it was falsified to do (C-SAINT-03 credibility devices). A chill crosses him he reads as cold, and he sets the board down.]

GRÍM: (only this, and it is not a connection, it is a fugitive's tiredness) Two thrall-girls, then. The one they burned and couldn't, and the one they hanged and could. The gods and their book-keepers get them both in the end.

GROVE-THRALL: (quietly) Aye. Both altars keep a ledger. (the kin-web nuance, C-LIE-05a — earned, not preached) I'll say the hard half of it, since we're being honest by a stolen fire. The old grove that hanged her — it was also the thing that held us. Kin to kin, oath to oath, the dead honored and the living bound; the Thing itself grew out of that root. It was warm. It was strong. (a bitter beat) And I was the floor it stood warm upon. The White God cut my cord and handed it to me and said *remember it comes off* — and that was a true gift, and I will not let a grievance make it a lie. But he counts me *one.* Singly. Into his own purse. No web, no kin, no hall — just a freed man alone on a cold road with an outlaw host, because free and landless is still landless. (he looks at Grím) Both faiths took something real from me. Neither gave the other back. That's the whole sermon. Sleep on it.

[STAGE: Grím lies back against the rock. The stars are very hard and very far. He sleeps the thin sleep of a hunted man — and the sleep does not stay his own.]

### 2b — The Corpse-Road (the dream)

[STAGE: no weather, no edges. A road under no sky — a sunken lane of `root` and grave-cold, running the wrong way: *downward*, always downward, into a dark that is patient. And on the road, coming to him the way an uninvited guest comes to a threshold — courteously, unavoidably, never quite from where the door was — SALGERÐ "the Grey-Guest": grey as road-dust and grave-cold, a seeress's staff and beads worn thin, the stillness of one with nowhere left to hurry to (C-EMISSARY-01). She does not threaten. She never will. She keeps the cadence of a courtroom of the dead.]

SALGERÐ: Do not reach for a weapon; there is nothing here a blade answers. And do not look for the door behind you. It is not where you left it. (she considers him, grey and grieved) I have walked a long way up a road that only goes down, to stand at the one threshold that opened. Yours. I did not choose it for its comfort. I chose it because it *opened.*

GRÍM: You're a dream.

SALGERÐ: I am a *guest.* The distinction will matter to you before the year turns. (formal, the grammar of owed-debts and lawful shares) Hear the account, since I may not lie to you — though I may keep silent, and I will keep silent about much tonight, and you will learn to hate the silences more than any lie. The account is this: the dead are owed a road. Every people that ever buried its own knew the road, and the share, and the door at the end of it. And the road is being walked the *wrong way.* The harvest that should come to a lawful hall is dragged *down* instead, to a hunger at the root of things — and the halls that are owed it stand empty and starving. (grief without heat) I am not here to tempt you to any wickedness. I am here because a debt is unpaid and an order is broken, and someone at last has a threshold the message can reach. That is the whole of my petition. So far.

[STAGE: she lifts her staff — not to strike, to *show.* Down the road, in the patient dark, two shapes. The dream renders them plainly, and the player sees them plainly, and Grím sees them and cannot name them:]

SALGERÐ: (not naming; she will not, cannot be made to — the redaction the law struck and the relabel the cult laid both hold their tongue in her mouth) Look. One girl on a rope. One girl in a box of gold. (a beat that lands only for the player) The road does not know they are two. The road never did. It is a small road, and it keeps a long memory, and it grieves the way I grieve — over a *broken account,* not a broken heart. Do not ask me their names. I would tell you, and I am forbidden nothing but this: I *may* not. Some carvings even the dead must obey. (softer) Ask instead what a lawful share would cost. That, I may answer.

[STAGE: the two shapes — *a girl on a rope; a girl in a reliquary* — are the same road-shape, the same erased woman twice-carved, and the player has now been *shown* it three ways this scene (the board, the thrall, the road) while every character has been shown nothing (C-SAINT-01/02/03; 00-frame Discrepancy row 8). Salgerð waits. The dream will not last.]

> CHOICE: [Hear her petition out — ask what a lawful share would cost] → **`hel_arc_stage` → `petition_heard`**; **`harvest_lie_stage` → `suspected`** (the downward pull is now a thing Grím half-knows, not doctrine he swallows — cracking, deniable as a fugitive's dream, C-WORLD-02); opens the **True-ledger** content the endings read (C-ALIGN-02, OQ-3). *(SALGERÐ: "Then we are in conversation, you and I. It will not always comfort you. The lawful share costs a living man very little and a dead one everything, and you are, for now, the living one.")*
> CHOICE: [Refuse the dream; wake and walk on] → **`hel_arc_stage` → `contact`** (held at the threshold); **`harvest_lie_stage` → `suspected`** still (the shapes were seen; the crack is struck even unheard). The roads will open again — Hel is patient, and starving halls do not forget an address. *(SALGERÐ, as he wakes: "Walk on, then. The road will keep your place. It keeps everyone's.")*

[STAGE: Grím wakes on hard rock under hard stars, the grove-thrall asleep across the coals, the painted board face-down where he set it. Whatever he answered, `true_mercy_terror` and the Lie's suspicion travel with him now, unwitnessed and unprovable — the True ledger's country entered at last (C-ALIGN-02). If the *níð* told true, the grey guest serves his own kinswoman; the dream does not say, and neither does the saga (C-GRIM-04).]

*[SCENE ASIDE — faith nuance (C-LIE-05a, C-LIE-05): the grove-thrall carries **both** halves so neither altar is clean — the old faith's kin-web is mourned as real belonging *and* indicted as the thing that hanged Yrsa; the new faith's manumission is honored as a true gift *and* indicted as market-faith that counts a soul "singly, into its own purse" and stole a murdered girl's body to found itself. The Ingunn = Yrsa collapse is the literal proof of "both altars have blood" (C-SAINT-02) and is delivered to the *player* only. Salgerð's inability to name is a withholding, not a lie (C-EMISSARY-01) — and it is the same silence the law struck over Aldís (00-frame rule 4), rhymed onto Yrsa: two erased women, one grey mouth forbidden both names.]*

---

## Key Scene 3 — `ch2o-s03` · "The Sold Berth"

LOCATION: a night harbor of cranes and cargo-stacks (before `ch2-05-sold-harbor`) | TIME: Y+1, late summer — moonless night | WEATHER: sea-fog, lamplight
FLAGS READ: [`route`, `hel_arc_stage`] | FLAGS SET: [`hvalfjord_fate` via the choice]
PRESENT: Grím, Auðr "the Deep-Counseled"; unnamed: Hvalfjorð FACTORS, hird BUYERS (waiting), dockhands

[STAGE: a whale-road harbor after moonset — cranes like gallows against the fog, stacked hides and salt-fish and stockfish, one lamp burning at a counting-house door where it should not be burning at this hour. AUÐR waits under it: prosperous and unshowy, a single excellent ring, a purse she never touches because she never needs to. She wears the prime-signed cross tonight because a Christian port is watching; it is inventory, and she would tell you so. She has been expecting him, which is the whole problem.]

AUÐR: (courteous, exact, unsurprised) The wolf-lord. Later than my factor guessed; he'll be sorry to lose the wager. (she does not rise) You'll have seen the second lamp, and the men who are not dockhands standing too still by the third crane. So let us not insult each other with a pretense that this is a chance meeting. Sit, if you like. The account is already open.

GRÍM: (not sitting) You sold my berth.

AUÐR: I *listed* it. There is a difference, and you should learn it, because it is the difference that keeps you alive tonight. (she folds her hands) The crown holds a standing offer for your location. It has sat on my books since the ash — an open line, accruing. I did not go looking to fill it. But an open line is an open line, and a merchant who lets them sit unbalanced is a merchant who is shortly a beggar. Tonight a buyer met the price. So: the berth is sold. Your whereabouts, this harbor, this hour. (evenly, no cruelty in it, which is the unnerving part) I am telling you to your face because that, too, is in the account. I do not sell a man his own death and pretend I did him a kindness. I priced you. Here is the price. What you do about it is a new line, and I am, as ever, open to business.

GRÍM: You'd auction a life and call it bookkeeping.

AUÐR: I would call it *exactly* what it is, which is more than either altar up the coast will do for you. (a merchant's steady appraisal) The goði would tell you your death feeds the gods. The White God's clerk would tell you it serves the realm. I tell you it cleared a debt at a fair rate. Of the three of us, guess which one is not lying to you. (she lets that sit; it is the truest thing said to Grím all season, and she knows it) I hold no god but the ledger, and the ledger, unlike the gods, will tell you the truth about what you are worth on an open market. Right now, wolf-lord, you are worth precisely what the crown bid — unless you would like to open a *counter*-line.

[BRANCH — IF `hel_arc_stage` >= `petition_heard`: Auðr's eye catches something changed in him and prices it, because she prices everything.]

AUÐR: (a flicker of the appraiser meeting something she cannot appraise) You've the look of a man carrying a second set of books lately. The dead's, if I had to guess, and I always guess. (dry) A word, unpriced, gratis, because I find it interesting and interest is its own coin: I have traded in relic-cults and grave-goods thirty years, and I have begun to think the new church's holy bones are a *bad harvest bet* — dear to buy, dearer to hold, and something about the yield does not reconcile. I don't know what I mean by it. You might, one day. When you do, I'll pay for the telling.

[STAGE: by the third crane, the buyers who are not dockhands stop pretending. The fog is a wall. The sea is at Grím's back, and Auðr's ledger is the only door.]

> CHOICE: [Clear the account — pay Hvalfjorð's price, keep them bought] → **`hvalfjord_fate` = `bought`**. The counter-line is met; Auðr closes the Crown offer (silence bought), and the logistics/market/intelligence spine stays open into Ch3–4 (C-CLAN-LEAD-01). *(AUÐR: "Balanced. A pleasure — and pleasures with you are rare, so I'll note it. The lamp goes out; the men by the crane were never here. Mind how you go, wolf-lord. The account stays open.")*
> CHOICE: [Burn the wharf and cut your way out] → **`hvalfjord_fate` = `burned`**; **`fire_stigma_count` +1** (**MARKET-BURNER** — "he robbed his own creditors; no port will deal", C-CLAN-04); the intelligence/shop network is **severed for the rest of the game**, one-time plunder only. **`sung_mercy_terror`** moves toward Terror if the wharf-folk witness (they will; a burning harbor has a hundred eyes). *(AUÐR, watching the tar catch, unafraid, already recalculating: "Every port on the whale-road will have this by the next tide, and none will open a door to you again. You have not escaped an account, wolf-lord. You have made yourself one — a bad one. I'd have taken the counter-line. Pity.")*

[BATTLE TRIGGER → ch2-05-sold-harbor]

[IN-BATTLE NOTE: resists Unsung — a night harbor is wall-to-wall witnesses (dockhands, factors, `flammable` tar-stores per D-OVER-01 on the wharf-fire path). Mercy or terror here is **Sung** almost by default (C-ALIGN-04), the inverse of the fell pass. On the `bought` line the fight is a clean break-out (the buyers, unpaid, lose heart); on the `burned` line it is the MARKET-BURNER set-piece, the harbor alight, and every escaping merchant a mouth that ends Grím's welcome at every port. Rating per C-TONE-04: fire has weight and cost, and the cost is *stated,* not spectacle.]

---

## Faith & Rating Notes (this chapter)

- **Neither altar clean (C-LIE-05 / C-LIE-05a).** The chapter's faith argument lives in three mouths, none of them a sermon: the **grove-thrall** (`ch2o-s02`) mourns the old kin-web as real belonging *and* names it the thing that hanged Yrsa, and honors the new faith's manumission *and* names it the market-faith that counts a soul "singly, into its own purse" and stole a murdered girl's corpse; **Salgerð** (`ch2o-s02`) speaks for a *broken account,* not a righteous one — a petitioner for one starving institution against another, never a tempter to evil (C-EMISSARY-01); **Auðr** (`ch2o-s03`) is the market-faith made flesh, honest where both altars lie, and correct about a great deal. Where the new faith wins an argument (the cut cord, the freed man), the old faith has a real one to lose (the warm web, the honored dead), and vice versa (C-LIE-05a). No altar is `clean` and none is `cartoon-evil`.
- **The Ingunn = Yrsa dramatic irony (C-SAINT-01/02/03).** Planted for the **player** in `ch2o-s02` via three closing brackets (the sacked-shrine hagiography Grím reads aloud; the grove-thrall's Blót-of-Yrsa testimony; Salgerð's dream of "one girl on a rope, one girl in a box of gold" as one road-shape, name withheld). Withheld from **every character** by the built-in credibility guard (renamed *Ingunn*; dated ~Y−25, a generation before Yrsa's Y−6; relocated a realm away; sealed reliquary; "unburnt" invented to explain a hanged body's lack of burns). `ingunn_yrsa_revealed` stays **FALSE** — the character-side discovery is the Ch4 reliquary-opening (`scene:ch4-s03`), the game's biggest shock. Grím's near-miss (`"Two thrall-girls, then"`) is written as fugitive fatigue, not deduction.
- **Rating (C-TONE-04).** The hanging is *remembered and testified,* never staged. Drownings (thaw, harbor) and the buried column (fell pass) have weight and named cost. Thralldom is depicted as the class engine it was — the grove-thrall's freedom is real and incomplete. No sexual violence on-page.

---

## Flags set/read in this chapter

*Index of every flag this chapter touches. All ids exist in `data/flags/story-flags.json` (D-FLAG-01); Chapter-2 flags are the Phase-4 additions, Ch1 flags are reused-by-reference and never redefined here.*

| Flag | Type | Set / moved by (this chapter) | Read by (this chapter) |
|---|---|---|---|
| `route` | enum: kingsman/outlaw | — (set Ch1; gates the whole file) | beats 1–6; `ch2o-s01`, `ch2o-s03` |
| `crown_singer_escaped` | boolean | — (set Ch1) | `ch2o-s01` (whether the hunt runs on facts) |
| `ulfheim_shelter` | boolean | — (set Ch1) | beat 1; beat 4 (Gunnhild's bargain register) |
| `brandr_met` | boolean | — (set Ch1) | beat 3; `ch2o-s02` (host register) |
| `sung_mercy_terror` | counter | `engine:alignment-ledger`; beats 1,3,5,6; `ch2o-s01`, `ch2o-s03` | (endings/`08` downstream) |
| `true_mercy_terror` | counter | `engine:alignment-ledger`; beats 1,2,3,4,6; `ch2o-s01`, `ch2o-s02` | (endings/`08` downstream) |
| `true_man_blood` | counter | `engine:alignment-ledger`; beat 6 (Wyrd/terror) | (endings/`08` downstream) |
| `hel_arc_stage` | enum: dormant/contact/petition_heard/… | `scene:ch2o-s02` (→ contact/petition_heard) | `ch2o-s03` (the "second set of books" read) |
| `harvest_lie_stage` | enum: believed/suspected/… | `scene:ch2o-s02` (→ suspected) | beat 2 (read as it advances) |
| `hvalfjord_fate` | enum: neutral/bought/burned | `map:ch2o-sold-harbor`, `scene:ch2o-s03` | (Ch3–4, endings/`08` downstream) |
| `fire_stigma_count` | counter 0–5 | `map:ch2o-sold-harbor` (+1 MARKET-BURNER on burn) | (endings/`08` downstream) |
| `ulfheim_fate` | enum: restored/terms/scattered | *seeded in beat 4; **set** `map:ch3-wolves-in-winter`* | — (resolved Ch3; this chapter feeds it) |

*Note: `ingunn_yrsa_revealed`, `ingunn_handling`, `dag_knows_cocoon`, `botolfr_turned` are **not** touched here — the Ingunn material this chapter is player-knowledge only; the character-side flags are set in Ch4 (`scene:ch4-s03`). `consume_rite_known` / `einherjar_*` / `corpse_road_door_found` remain FALSE/0 through Ch2 by design guard (learned only at the Ch3 concealed door).*

---

## New Discrepancy rows for `00-frame`

*Append to the Saga Discrepancies table in `docs/story/00-frame.md §3` in the same commit as this file (C-FRAME-02, frame rule 6). Numbering continues from row 14 (the Ch1 additions). Every row dramatizes word-fame (C-THEME-01): a deed remembered, a deed erased, a hand on the carving-knife.*

| # | RECITED (what the skald sings) | PLAYED (what the player sees) | MEANING (who is remembered / erased / carves) |
|---|---|---|---|
| 15 *(`ch2o-fell-ambush`, beat 2)* | "In the high pass the king's men fell gloriously, and the valkyries bore them up from the snow." | An ambush in a walled pass whose whole point is the witness-seal: trigger the `rockslide_zone` and the column is buried on the wrong side of the slide, and **if none escaped south the crown never learned how they died** (`ch2-02-fell-ambush`, Unsung/True-only). | The skald invents the glory he cannot witness. Where the record has a hole (a column that never came home), word-fame does not leave a blank — it carves a valkyrie. The crown's own ignorance is gilded into a heroic death, because a missing man must be *given* an ending, and the giver holds the knife. |
| 16 *(`ch2o-s02` — refines row 8, outlaw scene)* | "Ingunn the Unburnt, the ancient martyr the fire would not take, whose body lies incorrupt in radiance." | An outlaw camp brackets the truth the hall never will: a sacked-shrine hagiography (ancient, ~Y−25, *unburnt*) read aloud beside a freed grove-thrall's testimony (Yrsa, Y−6, *hanged,* "the White God's men took her body, not the fire"), and Salgerð's dream showing the two as **one road-shape,** name withheld (C-SAINT-01/02/03). | The player is shown the collapse three ways in one scene while every character is shown nothing — the credibility guard (renamed, re-dated a generation older, relocated, sealed) doing exactly the erasing work it was built for. "Unburnt" is sung as a miracle and is *literally true:* she was hanged, not burned. The gap between player-knowledge and the hall's ignorance **is** the theme, made playable. |
| 17 *(`ch2o-s02`, Salgerð's walk)* | "The slain rose to Valhalla, and the long benches took them, and none went hungry." | Salgerð walks a corpse-road that runs only *downward* and states the account plainly: the harvest is dragged **down** to a hunger at the root, and the owed halls stand starving (`hel_arc_stage`; `harvest_lie_stage → suspected`, C-LIE-02/06). | The frame itself recites the Harvest Lie — the skald sings from inside the slaughterhouse's sales pitch — one chapter before the player is given the first crack in it. The recitation cannot be trusted about the afterlife; the dream is the first evidence the song is bait, and the player carries a suspicion the hall will never be allowed. |
| 18 *(`ch2o-s03`)* | "No port on the whale-road ever closed its door to the wolf-lord; the sea-folk kept his counsel and his coin." | Auðr **sold his berth** — an open line on her books met by a crown buyer — and the player either bought the silence back (`hvalfjord_fate = bought`) or burned the wharf (`= burned`, MARKET-BURNER: no port will deal, C-CLAN-04). | Loyalty was always an account, and the saga gilds a man the market coldly priced. The song remembers the wolf-lord as *welcomed;* the ledger remembers him as *listed.* Word-fame launders a transaction into a friendship — and, on the burned line, erases the harbor that would have sung the truth by burning its every witness at once. |

---

*File owner: narrative lead. Consumes: `CANON.md` (§1.3 Lie/saint, §1.4 Grím, §1.6 clans, §1.7 ledgers, §1.9 routes, §1.10 tone, §4 timeline), `00-frame.md` (skald voice, Discrepancies, frame rules), `02-characters.md` (Grím, Gunnhild, Salgerð, Auðr, the grove-thrall register), `03-ch1-the-masked.md` (voice/format, Ch1 flag state), the Phase-4 spine (`chapters.04b`, `showcase_maps: ch2o-fell-ambush`, `ingunn_reveal_design`). Feeds: `00-frame.md §3` (rows 15–18 above, same commit), `05-ch3-the-blood-wakes.md` (merge, `hel_arc_stage`/`harvest_lie_stage`/`ulfheim_fate` carried in), `08-branch-map.md` (route line, gates), `data/flags/story-flags.json` (index above). All verse herein is composed, never quoted (C-TONE-01/02); all proper nouns are Rename-Table placeholders (CANON §2).*
