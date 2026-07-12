> **All names in this file are placeholders.** The CANON Rename Table (`CANON.md §2`) is the only naming authority; every coined name carries an implied **[P]** and its final-name column stays blank until the human lead fills it. Unnamed minor speakers are given ROLE-CAPS (CAPTAIN, RECORDING SKALD, REEVE…) so no unregistered proper noun enters the record.

# 04a — Chapter Two (KINGSMAN): THE KING'S HOUND

*Route file: `route == kingsman` (C-ROUTE-02, C-ROUTE-03). Runs parallel to `04b-ch2-outlaw.md`; both merge into shared Ch3 (`05`). Structure, beats, and key scenes are authoritative from the Phase-4 spine (`chapters.04a` — premise/beats/key_scenes); durable content lives in `data/maps/ch2/`, `data/flags/story-flags.json`, `manifest/battle-manifest.md`. Format per KICKOFF §5.2 (key scenes fully dialogued). Canon anchors cited inline (C-\*, D-\*).*

*Chapter-2 constraints in force throughout. The Harvest Lie is **cracking, not cracked**: `harvest_lie_stage` reaches **`suspected`** only — the downward pull is *suspectable, not provable*; no confirmed myth, no einherjar yet, Wyrd still deniable (C-LIE-02, C-WORLD-02, C-GRIM-05). The Ingunn = Yrsa truth is delivered as **dramatic irony** — the **player** is shown it, the **characters never connect it** (C-SAINT-03); `ingunn_yrsa_revealed` stays **false** until Ch4. Faith stays un-cartooned: Bótólfr's good is real and the church genuinely frees thralls (C-LIE-04, C-CLERIC-01); the old faith keeps its real argument (C-LIE-05/05a). All verse is composed fornyrðislag flavor, never quoted (C-TONE-01/02). Rating per C-TONE-04.*

---

## Chapter Epigraph

*Composed, Hávamál-flavor, fornyrðislag: two stressed alliterating syllables per half-line, no rhyme (C-TONE-01/02).*

> Hound of the king    hunts what he's bidden;
> the leash lies light    but a leash for all that.
> A wage is a word    worn close to the skin —
> warm as a gift    and it grips like a chain.
>
> Doctrine sings    the dead go upward;
> deeper the door    that doctrine buries.
> Who bears the king's verse    bears two tongues:
> one for the telling,    one for the truth.

---

## Chapter-Open — the Skald

**[STAGE: the hall, ~Y+300. The fire fed again by the SKALD's own hand — no thrall comes, none ever comes (C-FRAME-04). Spring, in the telling; the horn in his hand is as cold as it was at Yule, and he does not notice, and neither do you — yet (C-WORLD-02). Present tense, second person, to the benches (C-TONE-03).]**

> **SKALD:** Spring, then. You asked after the wolf-widow, and I told you it was a spring story, and here is the spring — though not hers first. Hers keeps a while yet.
>
> But mark how the telling changes hands. All the winter past I sang you what the *coast* remembered — a fishwife, a net-mender, a peddler on a toll-road. Rough carvers, and clumsy, but their own. Now the boy rides under the king — and a king does not leave his carving to fishwives. A singer rides in every column the crown sends out now, a wage at his belt and good vellum in his pack, and he cuts the day's deeds before the blood is cold. So that by the time a thing is *done*, it is already *sung*, and sung the king's way.
>
> That is the mercy of the king's road, and the horror of it, one thing wearing two faces: on that road the boy is never once unwitnessed. There is always a verse. He does not get to choose whether he is remembered — only what the singer is handed to work with. And a good singer can beat thin gold very thin indeed. *(a dry beat)* I would know the trade. You are sitting in it.
>
> So hear it as they wrote it, for the writing is the version that lived: the *vargdropi* question was **answered** — answered in ash, on a fell-shoulder, in the boy's own mother's kin. A document said so, and a crown remembers whatever its documents say. Hear how clean the spring begins for him.
>
> And mark, as it runs, the one small thing starting to go wrong under all that gold — the thing no wage could quite carve out. That spring, the dead did not always lie where the doctrine swore they would.

---

## Beat Sheet — the Kingsman Arc (Y+1, spring → autumn)

*The full kingsman-route arc from `spine.chapters.04a.beats`. Each beat gives **purpose**, **flags set/read** (registered ids only, D-FLAG-01), **ledger effects** (mercy_terror / man_blood; Sung vs True, C-ALIGN-01/02/04), and **battle ref**. Micro-choices feed the ledgers; there is no route macro-split in Ch2 — the split already happened at ch1-08 (C-ROUTE-01). The Lie advances only to `suspected` here (C-LIE-02).*

**Standing motif — the recording skald (the route's spine).** The crown attaches a RECORDING SKALD to every column (ch1-s11 established him). Consequence: **every kingsman field is Sung by default**, in the king's words. The player never chooses *whether* a verse exists — only its **shape** (mercy or terror, honor or ash). This is the mechanical face of C-ALIGN-02/03/04 on this route: to make a battle Unsung here, the player must silence the crown's own singer, which is itself a deed the True ledger keeps.

| # | Beat & purpose | Flags SET | Flags READ | Ledger effects | Battle ref |
|---|---|---|---|---|---|
| **1** | **The King's Hound.** First commission. Dag hands Grím the crown's work with the winter-clerk's warm-glacial exactness; the recording-skald motif is established as a standing witness. Grím is set against a Landless spring camp — the crown's instrument against the outlawed poor he half-pitied all winter. He learns his deeds now carry the king's *authorship*. | `sung_mercy_terror`, `sung_man_blood`, `hjortdal_trust` | `route`, `holmgang_grith`, `ulfheim_civilians_saved` (echo) | **Sung by default** (recording skald present). Grið accepted before the singer → Sung **+mercy** and `hjortdal_trust +` (clean public conduct, C-ALIGN-05). Taking the law's wage / breaking to end resistance fast → Sung **+Man** / **−mercy**. No True-only path unless the player silences the singer (then the deed is Unsung and only True moves). | `ch2-01-levy-of-spears` |
| **2** | **Two Vellums — the Ingunn player-knowledge beat (C-SAINT-03).** No battle. Bótólfr is introduced tending the reliquary of "Ingunn the Unburnt"; the church column halts beside Dag's open archive. The player is **shown, never told**, that the saint is Yrsa: the hagiography (ancient martyr ~Y−25, unburnt-by-fire) lies on the same table as the Blót-of-Yrsa record (Y−6, thrall-girl **hanged**, *body gone from the grove by spring*). **The characters do not connect it** (dated a generation older, relocated, reliquary closed). First faint corpse-road rumor plants the Hel arc; Hvalfjorð commerce opens. | `harvest_lie_stage` (→ `suspected`), `hvalfjord_fate` (nudged), `hel_arc_stage` (→ `contact`) | `grove_testimony`, `grove_blot_witnessed` | **None** (archive / road scene — no battle, no witnessed deed). The movement here is *knowledge*, not ledger. | — (null) |
| **3** | **Unlawful Fires — ch1-05 mirrored.** Now Grím is sent **uphill** under the king's writ to suppress an illegal fell-side blót — the inverse of the boy who once stood *below* the grove and let travelers run. The deposition Dag files afterward is the player's conduct verbatim: the Hjortdal law-courtship is built or broken by how lawfully the writ is served. | `sung_mercy_terror`, `hjortdal_trust`, `harvest_lie_stage` | `grove_blot_witnessed` (echo), `grove_testimony` | Worshippers who escape sing **terror or mercy** into the old-faith kin-web (Sung). Clean, law-bound suppression → `hjortdal_trust +`; slaughter of unarmed worshippers → Sung **−mercy** and the kin-web hardens against the crown. A body that will not rise where doctrine swears nudges `harvest_lie_stage` toward `suspected`. | `ch2-02-unlawful-fires` |
| **4** | **SHOWCASE — The Whale-Road Boarding.** The Hvalfjorð account made physical: a ship-to-ship boarding where Auðr's ledger is either **paid** (logistics spine kept, Crown offer for Grím's berth closed) or **burned** (one-time plunder, network severed, MARKET-BURNER). A raider given to the deep does **not surface** where the sword-slain are promised to — suspicion deepens. Showcase map: naval boarding, deck-edge drowning, tide as a clock. | `hvalfjord_fate`, `sung_mercy_terror`, `harvest_lie_stage` | `hvalfjord_fate` (running account) | Hvalfjorð oarsmen **witness** (Sung); accept grið on the deck → Sung **+mercy**. **Cut the planks** and give a crew to the sea and the fight can vanish **Unsung** (True-only −mercy) — but drowned men leave no valkyrie, and the crew that lived *notice that too*. | `ch2k-nav-boarding` (showcase; manifest `ch2-03-whale-road-boarding`) |
| **5** | **The Bear's Second Rising.** Put down or talk down a Bjarnholt lodge-rising against the ban. `holmgang_grith` pays off: honored → the lodge can be **sworn** to Grím; executed → the guest-cup went *around* him all winter and the lodge answers with axes. Bǫðvarr admits his berserkergang is starting to feel like a thing that will not switch off — the first deniable touch of the hunger (foreshadows Brandr, the einherjar; C-DEATH-02). | `bjarnholt_fate`, `sung_mercy_terror`, `fire_stigma_count` | `holmgang_grith`, `wyrd_flicker_witnessed` | The lodge, oath-sworn to silence, **wants to stay Unsung** — the rare kingsman field that does. A single router breaks the quiet and drags it onto the Sung ledger. `sworn` → Sung **+mercy**, full lines. `broken` → `fire_stigma_count +1` (OATHBREAKER), diminished arts, cross-clan trust poisoned (C-CLAN-04). | `ch2-05-bear-lodge-rising` (map `ch2k-bear-lodge-rising`) |
| **6** | **KINGSMAN CLIMAX — The Last Wall of the Landless.** Storm Brandr's ringfort at first frost; his zealotry peaks (idealist → martyr, the Wiegraf turn). What falls here can rise **rune-lit in Ch3** — the einherjar seed (C-DEATH-02). Merge point into shared Ch3 (no macro-decision; `route` carries variant scenes forward). | `sung_mercy_terror`, `sung_man_blood`, `true_mercy_terror` | `brandr_met`, `mask_lifted`, `blood_exposed` | The Landless **families watch from the crest ring** (Sung guaranteed): the crown wants it Sung, the player chooses *as what*. Sparing the yielding → Sung **+mercy**; executing a cornered, righteous host before its own children → **−mercy** on both ledgers, and the frame keeps it. Brandr taken alive vs. felled colors his Ch3 einherji return. | `ch2-06-last-wall-of-the-landless` |

*Merge: on clearing `ch2-06`, the route flows to shared Ch3 (`n_ch3_merge`) with kingsman-variant scenes (spine `route_graph.edges`). `hjortdal_trust`, `hvalfjord_fate`, `bjarnholt_fate`, `fire_stigma_count`, `harvest_lie_stage`, and `hel_arc_stage` all carry forward as the ending levers they seed.*

---

## KEY SCENES (fully scripted — KICKOFF §5.2)

*Three fully-dialogued scenes from `spine.chapters.04a.key_scenes`: **ch2k-s01 "The King's Hound"**, **ch2k-s02 "Two Vellums"** (the Ingunn player-knowledge beat), **ch2k-s03 "The Bear's Second Rising"**.*

---

### SCENE ch2k-s01 — "The King's Hound"
LOCATION: coastal scrub above a Landless spring camp (before map ch2-01-levy-of-spears) | TIME: Y+1, first spring moon — grey dawn | WEATHER: low cloud
FLAGS READ: [route, holmgang_grith, ulfheim_civilians_saved] | FLAGS SET: [—] *(the battle and choices set `sung_mercy_terror`, `sung_man_blood`, `hjortdal_trust`)*
PRESENT: Grím, Dag; unnamed: RECORDING SKALD (crown, e-tag TBD in map), CAPTAIN, levy-men

[STAGE: a rise of wet gorse over a hollow where cook-smoke lifts thin — a Landless camp waking, more women and old men and pots than spears. The king's column stands in the gorse above it, unhurried, and the whole shape of the thing is a hunt that has already caught its quarry and is only deciding the manner. DAG rides up beside Grím in plain good wool, the White God's cross simpler than any bishop's (C-DAG-01). Behind him, a little apart, the RECORDING SKALD sits his horse with a wax tablet open on the saddlebow, already working — the crown's memory, present before the deed.]

DAG: Spring suits you. You look less like a man the winter was trying to kill. (he follows Grím's eye down to the smoke) Yes. That's the commission. A Landless spring camp — Brandr's, or Brandr-adjacent; the host frays into a dozen little hungers this time of year. The king wants the coast road open before the grain moves. Open it.

GRÍM: (looking at the pots, not the spears) That's a camp of cooks.

DAG: It is mostly a camp of cooks. (evenly; no flinch, the glacier under the warmth) They are also right, Grím — righter than the crown, most of them; outlawed for being born late and poor, exactly as their firebrand sings it. I told you in the winter I deal in things that are true, so here is one: their being right will not open the road, and the road has to open, and you are the one the king sends to open it. Both of those are true at once. I have stopped expecting them to stop being true.

GRÍM: And him? (a nod at the skald, scratching wax)

DAG: (a small, real smile) Ah. You've noticed the difference. In the winter you were a rumor a peddler carried. Now you are a *column*, and a column carries its own singer. (he says it without cruelty, which is the cruelty of it) Whatever you do down there, ford-boy, it will be sung by nightfall — in the king's grammar, on the king's vellum, at the king's wage. You cannot make this morning *unwitnessed*. (beat) Not without reaching past me to the man writing it down. And I would notice that.

[STAGE: the RECORDING SKALD looks up, mild, a craftsman making conversation about the work.]

RECORDING SKALD: (half to himself, tasting a line)
> Down on the den    the drengr came…
— "den," I think. It scans, and it tells the folk what to feel before they've heard a fact. (to Grím, pleasantly) Give me a clean morning and I'll give you a clean verse. Give me a mess and I'll still give you a clean verse — it only costs you more of what's true. Your choice sets my price, not my product.

GRÍM: (flat) Everyone on this road keeps telling me it's my choice.

DAG: Because it's the one thing they can't carve for you. (he gathers his reins) The camp will break the moment the pots scatter. Some will throw down and cry grið; the skald can see a grið as well as you can, and a mercy witnessed is a mercy the crown must own. Some will run. What you do to the runners, and the yielded, is the whole of what gets written. (quietly, the winter-clerk again) The Lawspeaker's people watch how the king's men keep the king's law, you know. Hjortdal counts a clean hand. Keep one, if you want that door to stay open.

  > CHOICE: [Break the camp cleanly — take every grið the skald can see] → `sung_mercy_terror +` (mercy witnessed, C-ALIGN-05); `hjortdal_trust +` (law kept before the crown's own record); the verse gains a merciful line. The yielded are ransomed to the levy, not the ground.
  > CHOICE: [Make the breaking a warning — terror to end resistance fast] → `sung_mercy_terror −`, `sung_man_blood +` (the realm's quiet bought hard by the king's hand). Dag notes it without flinching; the recording skald sings it as *firmness*, and it costs Grím the Hjortdal warmth he has not yet earned.

DAG: (before he rides off, the coldest kindness on the route, and he means it) Whatever you choose — be the one who chose it. (the public smile; underneath, the arithmetic) The skald will say the king chose it, either way. Don't you believe him.

[BATTLE TRIGGER → ch2-01-levy-of-spears]

[IN-BATTLE NOTE: **Sung by default** — the RECORDING SKALD is a neutral on the field who withdraws to the S edge on turn 2 and cannot be reached without leaving the fight (silencing him is possible, catastrophic, and makes the morning Unsung — True-only from there, C-ALIGN-04). Non-combatant camp-folk (n-tags) flee toward the low water; whether they escape shapes nothing on the Sung ledger *except* what the skald sees the player do to them. Grið is available the moment the camp's morale breaks (leader down or below the band). Any Wyrd use here is spent in front of the crown's singer → `sung_man_blood −4` toward Blood (C-WYRD-02) and the ford-question reopens in the king's own record. Post-battle: the skald reads his fresh verse aloud; it is the first time the player hears their morning carved *while the ash is warm*.]

---

### SCENE ch2k-s02 — "Two Vellums"
LOCATION: the steward's garth — Dag's archive room; the church column halted in the yard outside | TIME: Y+1, second spring moon — afternoon | WEATHER: clear
FLAGS READ: [grove_testimony, grove_blot_witnessed] | FLAGS SET: [harvest_lie_stage → suspected (via choice 2), hvalfjord_fate (nudged, choice 2), hel_arc_stage → contact (choice 2)]
PRESENT: Grím, Dag, Bótólfr; unnamed: RELIQUARY-BEARERS, FREEDWOMAN (newly manumitted), thralls-made-free, a HVALFJORÐ FACTOR (Auðr's man)

> **[WRITER'S GUARDRAIL — C-SAINT-03, load-bearing.** This is the kingsman Ingunn = Yrsa player-knowledge beat. The **player** must leave this scene unable to un-see that the saint is Yrsa. **No character may connect it** — not Dag (his own hanged sister, dated a generation older by the cult and moved far from the blót-site), not Bótólfr (sincere; the reliquary is kept closed and the story is centuries deep), not Grím. The juxtaposition is **environmental and accidental** — two documents that happen to share a table — never staged by anyone in the fiction. Do NOT set `ingunn_yrsa_revealed`; it stays false until Ch4's opening of the body. The gap between what the player holds and what the characters hold **is** the scene.]**

[STAGE: a warm room off the garth, tallow and ink, Dag's winter circuit turned to spring cataloguing. Through the open shutter, the yard: a church column halted to water its oxen — and on the lead cart, canopied and cord-bound, a RELIQUARY, plain oak banded in iron, closed. Beside it BÓTÓLFR, ~35, plain and poor in dress, manumission-cords looped at his belt, doing real labor beside the freed folk he travels with (C-CLERIC-01, C-LIE-04). He is unmistakably, disarmingly kind. A knot of newly-freed thralls waters the beasts with the loose dignity of people still learning they may.]

DAG: (not looking up from a slit-eyed ledger of blót-testimony) The White God's road-priest. He shelters at the garth when the church moves its holy furniture. (a glance out the shutter, and something in his voice that is not quite warmth and not quite its opposite) He cut the cords off those four himself, last week. He is exactly what he looks like. That is rare enough that I make a note of it every time.

[STAGE: BÓTÓLFR ducks in at the door, catching the last of it, easy and unoffended.]

BÓTÓLFR: You flatter the trade, clerk. (to Grím, a plain open hand) You'll be the masked one the columns talk of. Don't mind them; a man's face is his own business and his god's. (a nod back at the canopied cart) You're wondering at my cargo. Everyone does. Come to the yard when you've a moment — she's why I have any of this to give.

GRÍM: She?

BÓTÓLFR: (and here is the hagiography, sincere to the marrow, C-SAINT-01) Ingunn. The Unburnt. Our founding saint — a thrall-girl freed and then martyred at a high grove, oh, long before either of us drew breath; three generations, near enough. They put her to the blót-fire and the fire *would not take her*. (he says it the way a man says a thing that has held him up his whole life) They laid her by, and the years went, and when they opened the ground she was *whole* — uncorrupted, as sleeping. The church grew up around that mercy. The cords I cut come off *because of her body*. Freed thralls die in the White God's grace at her tomb, and there's a radiance there, a warmth off the stone — I've felt it. (simply) It's the kindest thing I know. It's why the collar comes off.

[STAGE: he says it cleanly, and it is all true to him, and the freed folk in the yard are *actually free*, and the game does not let the player sneer at any of it (C-LIE-04). Then Bótólfr is called back to the oxen, and the scene turns, quietly, to the thing on Dag's table.]

[STAGE: DAG has slid one vellum out from the stack — not for Grím, not staged, just the next leaf in a pile he keeps. His voice drops out of the clerk's register into something older and more private. He is not investigating. He is grieving, the way he grieves: in documents.]

DAG: The old altars kept better records than the folk who love them like to remember. (he sets a fingertip on the leaf) The Blót of Yrsa. Six years gone. The last one the crown ever *sanctioned* — before the ban, before the White God, when a king could still hallow a grove and no law spoke against it. (a beat; the glacier has a crack in it, one, hairline) A thrall-born girl. Hanged. They chose her because a jarl's daughter would not do. (evenly, too evenly) I know the deposition by heart. I keep it because no one else will, and because someone should know her name was a *name* before it was a rite.

GRÍM: (carefully) Yrsa.

DAG: (a single nod; he does not elaborate, and the not-elaborating is the whole of his grief) Mm. (he reads the last line aloud, flat, the way you read a wound you've read a thousand times) *"…and the body was gone from the grove by spring, and none could say where it was carried, nor by whose hand."* (he squares the leaf back into the pile) Gone. Six years, and no one ever told me where. The one thing the old faith owed me, and it lost the receipt.

[STAGE: **THE JUXTAPOSITION.** Through the open shutter, the closed reliquary on the cart — *the whole, uncorrupted body a girl the fire would not take, laid by, then found* — sits forty feet from the leaf on Dag's table that reads *body gone from the grove by spring, Y−6*. The camera does not move between them; the scene does not name them together; **only the player holds both facts at once.** Dag has, in his own hand, the record that would open the reliquary — and cannot read it, because the cult dated its saint a generation older and carried her far from the grove, and grief does not do arithmetic across three fabricated decades (C-SAINT-02/03). Bótólfr, in the yard, keeps the lid shut out of reverence. Neither man will ever be closer to it than this, until Ch4.]

GRÍM: (looking from the leaf to the cart, and the player looks with him — but Grím has no more reason to bridge it than they do; he was a child at the coast when Yrsa hanged, and "Ingunn" is a name three generations deep) …The old faith loses bodies. The new one keeps them in oak. (a smith's dry economy; he does not connect it, and must not) Different trades.

DAG: (a short breath that is almost a laugh, taking it as an epigram, not a clue) That's near enough a whole theology, ford-boy. (he re-stacks the vellums; the moment closes over, unremarked, forever — until it doesn't) The one god harvests and forgets. The other files. I know which I'd rather be filed by.

[STAGE: at the shutter, a last texture — a HVALFJORÐ FACTOR waits in the yard with a slate of prices, and a FREEDWOMAN lingers near Grím, wanting to say a thing she is not sure she is allowed to say.]

FREEDWOMAN: (low, to Grím, twisting a cut cord in her hands) They told us to die at her tomb, if we're to die. For the grace. (she hesitates) My man went that way, this winter past. Peaceful, the priest said. Only — (quieter, the thing she came to say) — I dreamed him after, and he wasn't *up*, lord. He was down. Down under, and cold, and calling like a road goes on and on. (she flushes) It's grief talking. Everyone says it's grief talking.

  > CHOICE: [Ask Bótólfr why the fire "would not take" a girl the old faith HANGED] → *no ledger.* Bótólfr answers with total, unshaken faith — *"A miracle keeps no method, friend. If we could account for grace, it would only be cleverness."* — and means it entirely. **The irony tightens; the player is primed harder; no character connects a thing** (C-SAINT-03: the question that would crack it open bounces harmlessly off sincere belief). Grím lets it lie; he has no thread to pull, only the player does.
  > CHOICE: [Say nothing — take the crown's coin and the church's blessing both] → `hvalfjord_fate` **nudged** (the Factor's account opened — commerce introduced for the whale-road beat); `harvest_lie_stage` → **suspected** (the drowned-and-down rumor now has two mouths — the freedwoman's dream and a thing Dag half-recalls from the levy: *"they keep telling me the sea-dead don't wash up where the doctrine says"*); `hel_arc_stage` → **contact** (that night, the first grey figure at the edge of a dream — road-dust and grave-cold, saying nothing yet, only *standing*, C-EMISSARY-01). None of it proves anything. All of it *suspects* everything.

[STAGE: scene ends on the reliquary being re-canopied for the road — the closed oak carried out of the yard, past the archive shutter, past the leaf that names the grove it came from, and no one in the fiction feels the two pass within a stone's throw of each other. The player feels nothing else.]

---

### SCENE ch2k-s03 — "The Bear's Second Rising"
LOCATION: Bjarnholt log-crib lodge-terraces, a high timber hall in cleared forest (before map ch2-05-bear-lodge-rising) | TIME: Y+1, first autumn moon — cold clear | WEATHER: clear
FLAGS READ: [holmgang_grith, wyrd_flicker_witnessed, route] | FLAGS SET: [bjarnholt_fate, fire_stigma_count (fire branch), plus `sung_mercy_terror`/`sung_man_blood` via choices]
PRESENT: Grím, Bǫðvarr; unnamed: LODGE-BROTHERS, CAPTAIN (crown detachment), RECORDING SKALD (present, per route motif)

[STAGE: a lodge built like a fist — log cribs stacked in terraces up a cleared slope, bear-skulls on the gable-posts, and every fighting man of it drawn up in the yard with axes grounded and faces set. They have risen against the ban that outlawed their young men; the crown has sent its new hound to put them down or bring them in. BǪÐVARR BEAR-SARK stands on the second terrace, huge, scarred, the pelt across his shoulders, and he is not roaring today. That is the first sign of how bad it is.]

BǪÐVARR: (down to Grím, and the crown's CAPTAIN a pace behind him) The masked boy. They said it'd be you. (he spits to the side, not at Grím) The king's dog now, wearing the king's ring — I heard that too. Is it true you took his silver for the fell you burned?

GRÍM: (flat) I took it. Or I didn't. The verse says I did. (a beat) Say your piece, Bear-Sark. You didn't line up your whole hall to ask after my jewelry.

BǪÐVARR: (a grunt that is almost approval) No. (he comes down a terrace, heavy) The ban made my young men into your Landless — outlaws for wanting to eat like their fathers ate. This spring they raided a grain-hall that flew the White God's cross, because a starving man is not a theologian. Now the crown wants their heads, and mine for lodging them. (oath-plain, the tally laid out) So here it is, boy, the honest order of it: I'll not hand you one head. Not one. Bring your column up my terraces and take them, if the king's arithmetic says you must. But know what you're climbing over first.

[BRANCH — IF holmgang_grith == honored:]

BǪÐVARR: (and here the winter's holm does its work — he looks at Grím the way a man looks at someone who once had his life on the boards and gave it back) You took my hand at the Yule holm. You had the yield and you gave me the hand instead of the boards. (grudging, real) A man who keeps a yield keeps other things. So I'll say a word to you I'll say to no other king's man: there may be *terms*. Give my young men a lawful blade to swing — a raid the crown will *bless*, a border to guard, a wall to hold — and I'll swear this whole lodge to *you*, not to the ring on your arm. The bear will follow the hand that stayed open. It will never follow the fist.

[BRANCH — IF holmgang_grith == executed:]

BǪÐVARR: (and here the winter's holm is a wound between them — his voice goes very low and very level, which from Bǫðvarr is worse than shouting) You killed a yielded man on lawful boards once. Word of it went round every fire on this coast, and it went *around you*, hand to hand, the guest-cup passing you by all winter like you were a draught under the door. (he takes up his axe) A lodge is an oath-house. We do not treat with a man who broke the deepest oath there is in front of witnesses. There are no terms. There was never going to be. Climb, dog, and we'll see what your luck is worth when it's bear-work.

[BRANCH — IF wyrd_flicker_witnessed (either holm branch — a lodge-brother mutters it):]

A LODGE-BROTHER: (to Bǫðvarr, not quiet enough) They say spears step wide of him, lodge-master. Seiðr-luck. Bought luck.

BǪÐVARR: (rounding on him, the old anger — the one clean thing in him) Then we'll test it with an axe an honest arm's-length long and see does it step. I'll not have my hall win on a *slander* what it can lose on its feet. (to Grím, and this is the whole man) Whatever your luck is, boy, I'd sooner you beat me with it than my own men lie about it.

[STAGE: and then, quieter — for Grím alone, the thing that matters most in the scene and that the player must not miss (foreshadow: C-DEATH-02, the hunger). Bǫðvarr turns the axe-haft in his hands and does not look up.]

BǪÐVARR: I'll tell you a thing, and I don't know why it's you I tell it to. Maybe because you wear a mask and I've started to feel like I need one. (low) The sark. The battle-rage. My whole life it came when I called it and went when the killing stopped. (a breath) This last year it comes when it likes. And this last *season* — it doesn't go. I stood over a boy I'd downed at the grain-hall, and he was yielding, and some part of me was still *hungry* after there was nothing left to be hungry for. (he finally looks at Grím) I don't know what that is. I only know it's growing, and it isn't mine anymore, and no goði of either god has a word for it that I believe. (straightening, the lodge-master again) So. Terms, or terraces. Choose, and let's not make a long day of a short truth.

  > CHOICE: [Swear a shared oath — give the lodge a lawful raid-target] → `bjarnholt_fate` = **sworn** *(available in full only if `holmgang_grith == honored`; if executed, this option is greyed — the lodge will not treat, C-CLAN-04 texture)*. Full **Berserker / Wyrmslayer** lines granted (trust band ≥ 75, C-CLAN-01). `sung_mercy_terror +` (a rising quelled without a razing, before the crown's singer). **Binds Grím to the lodge's feuds** — their enemies are his now, carried into Ch3. The battle that follows is a *demonstration*, not a slaughter: swing beside the bear, don't climb over him.
  > CHOICE: [Break the lodge by fire] → `bjarnholt_fate` = **broken**; `fire_stigma_count +1` (**OATHBREAKER** — "he broke the guest-cup," the deepest Norse stigma, C-CLAN-04); diminished **ash-tongued** Berserker arts looted, not granted; **poisons starting trust with every other clan** (the tag is cumulative and permanent). `sung_mercy_terror −` before the recording skald. The lodge that oath-swears to silence is put to the axe, and one router carries the manner of it to every hall.

[BATTLE TRIGGER → ch2-05-bear-lodge-rising]

[IN-BATTLE NOTE: this is the rare kingsman field that **wants to stay Unsung** — the lodge fights for its own young men and would rather the crown's verse never named them at all. But the RECORDING SKALD rides with the column (route motif), and any Bjarnholt fighter who **routs off an edge** drags the day onto the Sung ledger (C-ALIGN-04); on the `sworn` branch the "battle" is a scripted joint action against a lawful target and stays clean; on the `broken` branch it is a terrace-assault up log cribs where fire climbs the timber (flammable overlays) exactly as it climbed the longhouse and the fell — the third burning of Grím's chapter-and-a-half, and the game means the rhyme. Grið offered by a yielding lodge-brother is the guest-cup made literal one more time: accept → Sung +mercy; execute → the OATHBREAKER reading is confirmed in the flesh, not just the flag. Any Wyrd spent before the singer: `sung_man_blood −4` (C-WYRD-02). Bǫðvarr survives both branches by script — sworn as an ally, or broken and carried off by his own men — because his "the sark won't switch off" thread is owed a Ch3 payoff (C-DEATH-02).]

---

## Flags set / read in this chapter

*Index of every flag this chapter touches. All ids exist in `data/flags/story-flags.json` (D-FLAG-01); the Ch1 carryover flags are **read, never redefined** here (spine `note_do_not_redefine`). `ingunn_yrsa_revealed` is deliberately **absent** — it stays false until Ch4 (C-SAINT-03).*

| Flag | Type | Set by (this chapter) | Read by (this chapter) |
|---|---|---|---|
| `sung_mercy_terror` | counter | beats 1,3,4,6; scenes ch2k-s01, ch2k-s03 (choices) | ledger snapshots; end-gate colorings (Ch4) |
| `sung_man_blood` | counter | beats 1,6; scenes ch2k-s01, ch2k-s03 (law's wage / Wyrd-in-sung) | ledger snapshots; King of Men / Merciless gates (Ch4) |
| `true_mercy_terror` | counter | beat 6 (silenced/unwitnessed deeds) | ledger snapshots; Benevolent / Merciless / Successor gates (Ch4) |
| `hjortdal_trust` | counter | beats 1,3; scene ch2k-s01 (clean public conduct) | beat 3 (law-courtship builds/breaks); King of Men gate (Ch4) |
| `hvalfjord_fate` | enum: neutral/bought/burned | beat 4; scene ch2k-s02 (choice 2 nudge) | beat 4 (running account) |
| `bjarnholt_fate` | enum: neutral/sworn/broken | beat 5; scene ch2k-s03 (choices) | Ch3 (`ch3-s05`), endings |
| `fire_stigma_count` | counter 0–5 | beat 5; scene ch2k-s03 (fire branch → OATHBREAKER) | branch map, Merciless/Successor colorings (Ch4) |
| `harvest_lie_stage` | enum: believed→**suspected** | beats 2,3,4; scene ch2k-s02 (choice 2) | Ch3 (`05`), reveal cadence |
| `hel_arc_stage` | enum: dormant→**contact** | beat 2; scene ch2k-s02 (choice 2, first dream-figure) | Benevolent/Successor gates, Ch3 corpse-road |
| `route` | enum: kingsman/outlaw | *(read only — set at ch1-08)* | this whole file (gates every scene) |
| `holmgang_grith` | enum: honored/executed | *(read only — set at ch1-06)* | scene ch2k-s03 (terms vs axes) |
| `wyrd_flicker_witnessed` | boolean | *(read only — set at ch1-03)* | scene ch2k-s03 (the seiðr-slur recurs) |
| `grove_testimony` | enum: spoke/silent | *(read only — set at ch1-s06)* | scene ch2k-s02, beat 3 |
| `grove_blot_witnessed` | enum: talked/silenced/unseen | *(read only — set at ch1-05)* | beat 3 (echo) |
| `ulfheim_civilians_saved` | counter 0–4 | *(read only — set at ch1-08)* | scene ch2k-s01 (echo), beat 1 |
| `brandr_met` | boolean | *(read only — set at ch1-s04)* | beat 6 (Landless climax register) |
| `mask_lifted` / `blood_exposed` | boolean | *(read only — set at ch1-s08)* | beat 6 (who Grím is, to the Landless) |

---

## New Discrepancy rows for 00-frame

*Append to the Saga Discrepancies table in `docs/story/00-frame.md §3` in the same commit as this file (C-FRAME-02, frame rule 6). Numbering continues from row 14 (the last Ch1 row). Each row dramatizes word-fame (C-THEME-01): a deed carved, a deed erased, a hand on the knife. Row 16 refines the existing row 8 (Ingunn) with this chapter's scene id and the two-vellums specifics.*

| # | RECITED (what the skald sings) | PLAYED (what the player sees) | MEANING (who is remembered / erased / carves) |
|---|---|---|---|
| 15 *(ch2k-s01, ch2-01)* | "Down on the den the drengr came, and opened the coast road at the king's word; the wolf's-heads scattered, and no honest traveler feared the way thereafter." | A camp "mostly of cooks" (spine premise) broken under the king's writ; the recording skald composes the clean line **while the ash is warm**, in the crown's grammar, at the crown's wage — the player *hears* the laundering happen in real time (ch2k-s01). | On the kingsman road the carving arrives *before* the deed is cold: the skald is issued with the column. Word-fame is no longer a memory that hardens — it is a *product*, priced in how much truth the player is willing to spend. The atrocity and the honor are the same morning; only the singer's wage decides which one is sung. |
| 16 *(ch2k-s02 — refines row 8)* | "In those days the saint Ingunn the Unburnt was given the folk, whom the fire would not take three generations gone; and the collar came off the thrall at her holy tomb." | The hagiography is recited **on the same table** as the Blót-of-Yrsa deposition (Y−6): a thrall-girl **hanged**, *body gone from the grove by spring*. The player holds both; **no character connects them** — the cult dated the saint a generation older and carried her far from the grove, and Dag grieves a lost body forty feet from the oak that holds it (C-SAINT-02/03). | The founding miracle and the last royal blót are **one erased girl**, twice-carved, and the erasure is so complete it blinds even her own brother reading the receipt. "Unburnt" is sung as a miracle and is literally true — she was *hanged, not burned* (C-SAINT-01). The player sees the collapse from the start; the hall — and the characters — never will, until the oak is opened. |
| 17 *(ch2k-nav-boarding / ch2-03; beat 4)* | "The choosers take the sword-slain, on land or on the whale-road alike; the sea gives up her fallen and the valkyrie stoops to the wave as to the field." | A raider given to the deep at the boarding **does not surface** where doctrine promises; the drowned "go down and stay down," and the crew that lived remark on it; the freedwoman's dream in ch2k-s02 said the same of her man (`harvest_lie_stage` → suspected). | The Lie sings *upward* while the played dead go *down* (C-LIE-02) — but in Ch2 this is only a **suspicion**, a thing sailors and widows half-say and no one can prove (C-WORLD-02). The recitation keeps the sales pitch intact one more chapter; the record has begun, very quietly, to leak. |
| 18 *(ch2k-s03 / ch2-05; beat 5)* | "The king won the bear-lodge to his peace, and Bjarnholt swore glad service, and there was no fire on the terraces that anyone could name." | A rising against the ban: `sworn` only if the winter's yield was honored — else the lodge is **broken by fire** up its own log cribs (`fire_stigma_count` +1, OATHBREAKER), and the guest-cup logic that damns Grím is invoked in the flesh a third time. | A coerced oath and a burned oath-house are sung as the same "glad service," because the crown's verse cannot afford a lodge that had to be *made* to kneel. The deepest Norse stigma — breaking the guest-cup — is exactly the thing the recitation is built to bury, and on this road the singer is paid to bury it. |

---

*File owner: narrative lead. Consumes: `CANON.md` (§1.3 the Lie & saints, §1.6 clans, §1.7 ledgers, §1.9 routes/endings, §1.10 tone, §4 timeline), `00-frame.md` (skald voice, Discrepancies, frame rules), `02-characters.md` (Dag, Bótólfr, Bǫðvarr, Auðr, Salgerð voices), `03-ch1-the-masked.md` (Ch1 flags/voice/format), the Phase-4 spine `chapters.04a` (authoritative beats/key_scenes) and `data/flags/story-flags.json`. Feeds: `00-frame.md §3` (rows 15–18, same commit), `05-ch3-the-blood-wakes.md` (merge; the Hel arc, the einherjar, `harvest_lie_stage` → undeniable, the Ch4 Ingunn reveal), `08-branch-map.md` (gates). Parallel: `04b-ch2-outlaw.md`. All verse composed, never quoted (C-TONE-01/02); rating per C-TONE-04.*
