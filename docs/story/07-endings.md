> **All names in this file are placeholders.** The CANON Rename Table (`CANON.md §2`) is the only naming authority; every coined name carries an implied **[P]** and its final-name column stays blank until the human lead fills it. Where a scene relies on a canonical fact it cites the id (**C-\***, **D-\***). Every narrative flag named here is already registered in `data/flags/story-flags.json` (D-FLAG-01); this file registers no new flags.

# 07 — THE FOUR DEATHS
### The Ending Scripts, and Their Handoff to the Frame

*Canon anchors: C-END-01 (four endings, one hidden; the gates), C-FRAME-03 (each ending recontextualizes the frame), C-FRAME-04 (the reciter is never named), C-DAG-02/03 (Dag crowned in every route, knowing), C-SAINT-01/02/03 (Ingunn = Yrsa), C-EMISSARY-01 (Salgerð's petition), C-THING-01 / C-NID-EVIDENCE-01 (the trial and the framed-proof), C-TONE-01/02/03/04 (verse form, present-tense skald voice, rating). Consumes the Phase-4 spine `chapters.07` (AUTHORITATIVE) and `route_graph.ending_gates`. Feeds `08-branch-map.md`.*

---

## 0. What this file is, and how it locks to `00-frame.md`

`00-frame.md §2` already contains the **four closings** (2A King of Men, 2B Benevolent God, 2C Merciless Ruler, 2D The Successor). **They are written and FIXED.** This file does **not** rewrite them. It provides the four **played** ending sequences — the scenes the player acts through at the roots (`ch4-06-the-corpse-eater` / `end4-root-of-the-tree`) — and hands each one **into** its matching closing, quoting the closing's opening lines verbatim so the seam locks. Where a handoff quotes `00-frame`, the quoted text is reproduced **exactly** and is not to be altered here; the remainder of each closing lives in `00-frame.md` and is played from there.

**The see-more axis (C-FRAME-03), the ordering law of the set.** The four differ only in how far the telling lets you *see* what the hall is:

| Ending | Alignment | Final flag | Lets you see | Frame closing |
|---|---|---|---|---|
| King of Men | Mercy + Man | `final_choice=sever_blood` | **least** — an honest old mead-hall, strangeness thinned to mere age | `00-frame §2A` |
| Benevolent God | Mercy + Blood | `final_choice=take_hel_seat` | more — the benches are the dead | `00-frame §2B` |
| Merciless Ruler | Terror + Man | `final_choice=keep_power_man` | **less** than 2B — the gilding hides more than shadow | `00-frame §2C` |
| The Successor | Terror + Blood | `final_choice=become_successor` | **everything** — the hall is the maw; the last night | `00-frame §2D` |

**Convention.** Played scenes are standard script format (C-TONE-03). The **frame** voice — the SKALD, never named (C-FRAME-04) — is present tense, addressed to the hall, and appears only at the handoff, where the played scene dissolves three hundred winters forward. `[STAGE ...]` = staging; `[ASIDE ...]` = writer's note; `> verse` blocks are composed fornyrðislag (C-TONE-01), never a translation of any real verse.

### File epigraph
*Composed, fornyrðislag flavor (C-TONE-01/02); spoken by the SKALD as the fire burns low, before the one closing the player earned.*

> Four deaths waited    in one man's marrow;
> the ledger keeps    what the lip lets fall.
> One knife carves    the king remembered —
> and whose hand holds it    holds the hall.

*[ASIDE: restates the epigraph of `00-frame §0` ("the hand at the haft") as the endings open. The knife is the carver's, not the killer's. Which of the four deaths gets cut into Grím is the whole of what the player chose.]*

---

## 1. Shared ground: the coronation, the cocoon, and the descent

Everything below happens after three fixed Ch4 beats the spine (`chapters.06`) already stages; the endings only *inflect* them. Restated here so each script can lean on them:

1. **The trial at the Thing** (`ch4-02-thing-plain-trial`). Skapti — who spoke the law that unmade Aldís (C-THING-01) — is asked to correct his own Y−20 ruling. The `law_circle` is a no-kill ground; a killing inside it is sung `LAW-BREAKER` by every clan at once and forecloses King of Men on the spot (C-CLAN-03/04). Sets `hjortdal_fate`, `trial_arc_complete`. `nid_proof==held` is its strongest lever (it proves Aldís was **framed** — that the throne *paid* — **not** that she was innocent; the distinction is load-bearing, C-NID-EVIDENCE-01).
2. **The coronation, and the opening of the body** (`ch4-03-crown-and-cocoon`). Dag is crowned at the unfinished new church (**C-DAG-02**, on rails, in every route). Beneath the nave the reliquary is breached and **opened** — the incorrupt saint "Ingunn the Unburnt" is **Yrsa**, Dag's hanged sister (C-SAINT-02). Sets `ingunn_yrsa_revealed=true`. Dag learns his church is built on his murdered sister's stolen body and **crowns himself anyway** (`dag_knows_cocoon=true`, **C-DAG-03**). The player has known since early Ch2 (C-SAINT-03); this is the characters' shock. **`ingunn_handling`** is set here / at `ch4-s04` — its value is the pivot on which each ending routes the relic.
3. **The descent** (`ch4-05-under-the-tree` → the maw). The corpse-roads run one-way DOWN with the harvested dead in ranks (einherjar at full strength, C-DEATH-02). The final macro-choice (`final_choice`, C-ROUTE-01) is taken at the roots.

**Dag's coronation is identical in staging across all four endings (C-DAG-02); only its *echo in the telling* changes.** Each ending below states that echo rather than re-staging the crown.

---

## 2. ENDING — KING OF MEN
*Mercy + Man. Lets you see least. Hands to `00-frame §2A`.*

### 2.1 The Gate (mirrors C-END-01 and `route_graph.ending_gates:king_of_men`)

| Condition | Value |
|---|---|
| **Ledger (Sung)** | `sung_mercy_terror >= +40` **AND** `sung_man_blood >= +30`. Public/law framing — the honest **partial** record. No True-ledger condition; True > Sung is *confessed* in the telling, not gated. |
| **Trust** | `hjortdal_trust >= 60` **AND** Hjortdal **not** taken by fire. |
| **Flags** | `hjortdal_fate == law_upheld` (NOT `thing_broken` — that value forecloses this ending forever, C-CLAN-03) **AND** `trial_arc_complete == true` **AND** `final_choice == sever_blood`. `nid_proof == held` strongly recommended (the framed-proof lever) but not strictly required if `hjortdal_trust` is high. `ingunn_handling == proclaimed` is the resonant handling (below); `buried_again` still reaches this ending but leaves the false miracle standing. |
| **Final choice** | `sever_blood` — Grím gives up **all** Wyrd for the last act. The game gets harder because he chose to be only a man (C-END-01). |

### 2.2 The Ingunn=Yrsa payoff (relic handled per spine: `ingunn_handling=proclaimed`)

The law that lifts Grím's *vargdropi* status is the same instrument that un-sanctifies the stolen body. Grím carries out of the opened reliquary the **saint's iron** — Yrsa's own manumission-ring, the freedom she was owed and the noose erased (a role-descriptor object; no proper noun) — and enters it into the record at the Thing.

> **[STAGE: the Thing-plain, before the descent. GRÍM lays the saint's iron on the law-stone beside the níð-stave. SKAPTI, old, reads both.]**
>
> **GRÍM:** Your saint kept her collar under the gold. Read the ring.
>
> **SKAPTI:** *(reading — the freedom-debt, the season she was due manumission, the season she was hanged)* ... A thrall-girl. Hanged at a king's blót, six winters gone. And carried off to be a church's first miracle. *(a long pause; the weary, self-indicting cadence of a man who once carved a queen out of the world)* The fire never touched her. She was **hanged**. The miracle was the lie built to bury the rope.

*[ASIDE: "Unburnt" reading three ways at once, paid off in law — miracle-lie, un-consumed vessel, and literally true (C-SAINT-01). Proclaiming Yrsa is the new faith's founding miracle *unmade in the record*, the exact instrument the King of Men trial exists to be: law correcting a poem. Faith nuance (C-LIE-04/05): the church still genuinely freed the thralls in the yard — Bótólfr's work was real — which is why proclaiming this **costs**, and is not a triumph over a cartoon. If `botolfr_turned==horrified_ally`, he is the one who reads the ring aloud to his own flock; the sincere cleric becomes the witness that unmakes the shrine he tended (C-CLERIC-01).]*

### 2.3 The ending sequence — "The Knife the Other Way"

**[STAGE: the roots. The maw at the base of the World-Tree; everything downed slides toward it. GRÍM has descended as far as a man can and refused to descend further. He is the only one, in any telling, who climbs back UP. SALGERÐ stands on the road, road-dust and grave-cold.]**

> **GRÍM:** *(looking at the seat, the power, the whole harvest offered)* No.
>
> **SALGERÐ:** *(the courtroom-of-the-dead cadence; she cannot lie, so she names it plainly)* There is a seat here that would make you a god of the owed dead. There is a hunger here that would make you the thing that eats them. And there is a stair that goes up, to a law-ring and a small mortal name, and a fate you would have to carry with your own two hands. Only the last door does not open twice.
>
> **GRÍM:** Then I'll take the one I have to carry.

**[STAGE: GRÍM severs the blood. There is no spell for it — that is the point. He cuts the one thread the Norns could not fix (C-GRIM-05) out of himself; the Wyrd goes out of him like heat out of iron. `final_choice=sever_blood`. Mechanically every Wyrd power is gone for the last act; the maw does not become easy. He climbs the stair as a man, and the harvested do not follow, because a man is nothing they can hook.]**

> **SALGERÐ:** *(not walking with him; her road runs the other way)* Go up, then. You will die like the herd and the hearth-kin, small, in your own body. *(a withholding, not a threat)* It is more than most of your blood were left.

**[STAGE: the law-circle at the Thing. GRÍM stands inside it with no fate-craft left, only a name and the nerve to answer for it. SKAPTI speaks the law that ratified Aldís's unmaking, and turns it.]**

> **SKAPTI:** *(law as fate-carving, self-indicting)* I spoke a queen out of the world once, on this ground, and called it law, and the calling held for twenty winters. Hear me speak it the other way. *(he lifts the níð-stave and the saint's iron together)* A verse was bought to unmake her house. I do not say she was innocent — I say she was **framed**, and the throne paid the carver, and that is enough for the law to unsay what the law once said.

> The stave that struck    a queen from standing
> is turned in the hand    to true her son;
> no wound unwound,    no word unsaid —
> but law once a lie    learns to mend.

> **SKAPTI:** The doom of *vargdropi* is lifted. Stand up under your own name.

**[STAGE: DAG is crowned regardless (C-DAG-02) — the sun on its rails, in every telling. He rules the realm the trial could not un-build; he let the truth of the reliquary stand in the record (`ingunn_handling=proclaimed`) and governs anyway, because a fed monster is a governable one and a proclaimed one costs him nothing he cannot afford. Under that fixed sun a man chose to be remembered **smaller**, and truer.]**

### 2.4 Handoff → `00-frame §2A`

**[STAGE: the played scene dissolves. Three hundred winters forward, the hall. The SKALD sets down the harp — for the length of this closing, and only this one, recitation and play agree. He does not perform. He reports. Continue exactly as written in `00-frame §2A`, beginning:]**

> **SKALD:** So he cut it out of himself. The thread the Norns could not fix, he severed with his own hand, and stood in the law-circle a man like any of you — no fate-craft left in him, nothing to bend, only a name and the nerve to answer for it. And the Lawspeaker, who once spoke a queen out of the world, spoke her son back into it. ...

*[ASIDE: the played `sever_blood` beat is the exact deed `00-frame §2A` reports in past tense; the law-verse above is the played instantiation of the closing's "law used once as a murder-knife, made once to mend." The frame's confession — that the SKALD voluntarily names the deeds no witness lived to carry (True > Sung) — needs nothing added here; play it from `00-frame`.]*

### 2.5 Frame recontextualization (agrees with `00-frame §2A`)

The hall's strangeness **thins to mere age**: the mead almost warms, a man on the far bench finds the door for the first time. It is **not** resolved or explained — only quieted. The freed folk on the benches are thralls' grandchildren keeping a true-*ish* memory. This is the ending that lets you see **least**, and that is its point (C-FRAME-03): the most honest telling is also the one that admits it is partial.

---

## 3. ENDING — BENEVOLENT GOD
*Mercy + Blood. Lets you see more than 2A. Hands to `00-frame §2B`.*

### 3.1 The Gate (mirrors C-END-01, OQ-3, `route_graph.ending_gates:benevolent_god`)

| Condition | Value |
|---|---|
| **Ledger (True)** | `true_mercy_terror >= +40` **AND** `true_man_blood <= -30`. Hel judges what actually happened, not the song (OQ-3). No Sung condition. |
| **Trust** | None hard — Hel is not a clan. The `hel_arc` bond with Salgerð is the functional trust. |
| **Flags** | `hel_arc_stage == complete` with the petition **GRANTED** (harvest returned to Hel's lawful course) **AND** `final_choice == take_hel_seat`. High `einherjar_unhooked` and `ingunn_handling ∈ {proclaimed, buried_again}` color the telling; the cocoon in Ingunn's body is dislodged to **FREE** the harvest, never to consume it. `corpse_road_door_found` is **not** required. |
| **Final choice** | `take_hel_seat` — Grím takes the empty seat as god of the straw-dead; Salgerð finally rests. |

### 3.2 The Ingunn=Yrsa payoff (relic handled: dislodge to FREE the harvest)

The hunger cocooned in Ingunn's body (C-LIE-03) is **dislodged so the trapped harvest can go where the dead are owed** — the opposite of the Successor's consumption. If `ingunn_handling==proclaimed`, Yrsa takes her place among the straw-dead **by her own name**, a seat filled at last; and Aldís, that unrecoverable face (C-GRIM-04), may sit there too — a mystery not solved, only **seated**.

> **[STAGE: at the breached reliquary, before the descent. GRÍM lifts the hunger out of the body like a splinter from a wound. SALGERÐ names the freed thing in her owed-debts grammar.]**
>
> **SALGERÐ:** She was a lawful share of Hel's, taken twice — once by the rope, once by the gold. Give her back her road and she is only a girl again, going down where the un-glorious go, into a hall that will finally know her name.

*[ASIDE: both altars mournable (C-LIE-05/05a): freeing Yrsa un-saints the church that genuinely freed thralls, and returns her to the old order's downward road — no altar is left clean, only made honest. This is the tender reading of the reveal, against the Successor's atrocity.]*

### 3.3 The ending sequence — "The Empty Seat"

**[STAGE: the roots, the maw. The empty seat at the head of the hall-that-is-a-hall-of-the-dead. SALGERÐ stands where the corpse-roads end; behind her, dim, the straw-dead — the drowned, the fevered, the thralls worked into the ground, the stillborn, the forsworn, everyone Valhalla would not stoop for.]**

> **SALGERÐ:** *(patient, grief-worn, formal — a petition reaching its last clause)* The seat has stood empty three hundred years while two churches stole the dead. I did not walk your dreams to make you a king. I walked them to fill a chair. *(the withholding lifts, once)* You asked, on the first road, what a lawful share would cost. This is the cost. Sit, and feed them, instead of being fed.
>
> **GRÍM:** *(the Wyrd still in him, the Blood side of him owned, not severed)* And the living world?
>
> **SALGERÐ:** Is not yours to save. You are a god of a grave. That is a real thing to be, and a kind one, and it is not the same as being a savior. I will not pretend it is.

**[STAGE: GRÍM takes the seat. `final_choice=take_hel_seat`. The harvest turns — the descent that fed the Corpse-Eater is bent back to Hel's lawful course; the maw's pull weakens, not because the hunger is killed (no one kills the hunger) but because the dead are no longer being stolen for it. The straw-dead come to the benches. Every einherji `einherjar_unhooked` freed across Ch3–4 is already among them, and remembers who freed it.]**

> **SALGERÐ:** *(for the first time since the corpse-roads, she is not walking; she sits, at the door that can now be seen)* My petition is answered. My order is mended. I rest.

> Come the straw-dead,    the sea-swallowed,
> the fevered, the forsworn,    the field's unfamed;
> no valkyrie stooped,    but a seat stands filled —
> the grave grown gentle,    a god come down.

**[STAGE: DAG is crowned regardless (C-DAG-02). His crown is a **footnote** here — the living realm's business, sung soft to the comforted dead. Whether he re-sealed the shrine (`buried_again`) or let Yrsa be named (`proclaimed`), it does not reach this hall; the dead have her back either way.]**

### 3.4 Handoff → `00-frame §2B`

**[STAGE: dissolve to the hall, three hundred winters on. The SKALD rises and turns UP the lamps. Light finds the far benches for the first time — and they are FULL. They were always full. Continue exactly as written in `00-frame §2B`, beginning:]**

> **SKALD:** Look now. Look who has been listening.
>
> Every bench. The drowned and the fevered, the thralls worked into the ground, the stillborn and the forsworn ... — the straw-dead, all of them, the harvest that Valhalla turned away and the roots tried to swallow. And at the head of the hall, in the seat that stood empty three hundred years, a masked man who would not let them be eaten. ...

*[ASIDE: the SALGERÐ-at-rest beat and "this song was never a song — it is their evensong" are in `00-frame §2B`; play them from there. This hall is one of Hel's now-fed halls (C-LIE-06). Lets you see MORE than King of Men — you see the benches are the dead — but NOT yet the maw.]*

### 3.5 Frame recontextualization (agrees with `00-frame §2B`)

The lamps come up; the far benches are the dead, and were always. Genuinely tender **and** genuinely a hall of the dead — Grím is a kind god of a grave, not a savior of the living. Warm, true, and still an ending under the roots. Salgerð's whole arc (C-EMISSARY-01) closes on her first rest.

---

## 4. ENDING — MERCILESS RULER
*Terror + Man. Lets you see less than 2B. Hands to `00-frame §2C`.*

### 4.1 The Gate (mirrors C-END-01, `route_graph.ending_gates:merciless_ruler`)

| Condition | Value |
|---|---|
| **Ledger** | `true_mercy_terror <= -40` **AND** `true_man_blood >= +30` **AND** `sung_mercy_terror >= 0`. The golden-age lie **requires** a clean PUBLIC ledger — which means the witnesses had to die (C-ALIGN-03). |
| **Trust** | Sung standing kept publicly clean despite True terror; clan trust incidental. |
| **Flags** | `final_choice == keep_power_man`. `fire_stigma_count` and executed-grið history color the reign. `corpse_road_door_found` **not** required; einherjar mostly **unhooked or ignored** (Man side, not Blood side). `ingunn_handling == buried_again` is the resonant handling (below). |
| **Final choice** | `keep_power_man` — keep the Wyrd; rule as a man over a realm bought quiet with murdered witnesses. |

### 4.2 The Ingunn=Yrsa payoff (relic handled per spine: `ingunn_handling=buried_again`)

A golden age needs its saint intact. The truth is opened and then **re-sealed** — the church that harvests cleanly folded into the reign as an instrument (spine `chapters.06`). Yrsa is erased a **third** way: not by rope, not by gold, but by a reign that found the truth inconvenient and had the witnesses to it killed.

> **[STAGE: the opened reliquary. DAG has read the ring. GRÍM, who rules by terror, has no use for the truth loose.]**
>
> **DAG:** *(glacial, warm only where it is seen)* A grove kills a girl to feed a god it does not understand. A church can feed the same god and free a thousand collars doing it. Yrsa is dead either way. I will make her death **mean** a kingdom. *(he re-seals the body)* Seal it. Let the saint stand.
>
> **GRÍM:** *(needs no argument; the ones who saw the body will not carry it far)* Seal it.

*[ASIDE: the reveal weaponized as **silence** rather than as consumption — the Merciless register of the same horror. If `botolfr_turned==silenced`, the sincere cleric is among the dead who cannot testify; if `faithful`, he re-seals the shrine believing, and tends a slaughterhouse for the rest of his life (C-CLERIC-01). Both altars have blood (C-LIE-05); here the *reign* adds the third stain.]*

### 4.3 The ending sequence — "The Gilded Quiet"

**[STAGE: the roots, the maw. GRÍM does not descend to serve and does not sever. He keeps the Wyrd and turns his back on the seat — the realm above is the prize, not the grave below.]**

> **SALGERÐ:** *(she cannot lie; she states the account he is declining)* You leave the seat empty and the dead unclaimed, and you go up to rule the living. The dead will keep being stolen for the hunger. That is not my petition answered. That is my petition ignored.
>
> **GRÍM:** *(quiet; the Man axis, terror without appetite)* The living are the ones who sing. I'll be sung.
>
> **SALGERÐ:** *(a withholding that is almost a mercy)* Yes. You will. That is the whole of what you have chosen.

**[STAGE: GRÍM keeps the power and takes the realm. `final_choice=keep_power_man`. The land goes quiet as a field under snow — the quiet **bought**: emptied holds, the yielding cut down where no one would carry the tale, grið cried and refused in rooms with no survivors (C-ALIGN-03/04). The Sung ledger stays clean (`sung_mercy_terror >= 0`) *because* the witnesses died. DAG is crowned (C-DAG-02) and serves within the golden lie; the re-sealed church is his cleanest instrument.]**

> Gold on every    gable and lintel,
> the land lies quiet    as a lea in snow;
> and the names that would answer    are ash on the wind —
> bless the peace,    the price unsung.

*[ASIDE: the verse gilds and, in its last half-line, tells on itself ("the price unsung") — the seed of the frame's single impossible witness. Keep the verse beautiful; the beauty is the crime.]*

### 4.4 Handoff → `00-frame §2C`

**[STAGE: dissolve to the hall. The SKALD sings this one BEAUTIFULLY — the best fornyrðislag of the night, gold in every line, performing harder than he has all evening. He is very good, and he is lying, and one small thing will give him away. Continue exactly as written in `00-frame §2C`, beginning:]**

> **SKALD:** And so began the golden reign, and the land lay quiet under his hand as a field lies quiet under snow — and none who deserved mercy was ever denied it, and the harvests were fat ... — and if the faces on the far benches never aged from verse to verse, why, the song had a gilding for that too ...

*[ASIDE: the tell — the SKALD faltering on a name that could not have lived to be quoted, filing it off mid-line, "as I am paid to carve it" — is in `00-frame §2C`; play it from there. The gilding hides more than shadow, so you see LESS than Benevolent God. Word-fame as propaganda: the hall applauds a slaughter it was taught to call a reign.]*

### 4.5 Frame recontextualization (agrees with `00-frame §2C`)

The hall's wrongness is **gilded over**, not lifted — the ageless benches "painted young," their unchanging sold as the peace's own blessing. The Sung ledger is triumphant precisely because the True one was buried with its witnesses. This is the beautiful lie; it is the second-least-seeing telling by design (C-FRAME-03).

---

## 5. ENDING — THE SUCCESSOR *(hidden)*
*Terror + Blood. Lets you see everything. Hands to `00-frame §2D`. The only closing that tears the frame fully open.*

### 5.1 The Gate (mirrors C-END-01, `route_graph.ending_gates:successor`)

| Condition | Value |
|---|---|
| **Ledger (True)** | `true_mercy_terror <= -40` **AND** `true_man_blood <= -40` (deepest Terror + Blood). No Sung condition — Unsung by nature. |
| **Trust** | None. The path runs **through** Salgerð's corpse-roads (`hel_arc_stage >= corpse_road_walked` to find the door) and then **betrays** her. `hel_arc_stage` must **not** be `complete`-as-granted — the petition is perverted; even Hel starves. |
| **Flags** | `einherjar_consumed >= 5` **AND** `corpse_road_door_found == true` **AND** `consume_rite_known == true` **AND** `final_choice == become_successor`. `ingunn_handling == weaponized` deepens it. `consume_rite_known` is learned **only** at the concealed door (`ch3-07-mouth-of-the-roads`) — the design guard that makes the Successor **unreachable by accident** (spine). |
| **Final choice** | `become_successor` — climb into the hunger and wear it. `end4-root-of-the-tree` **replaces** `ch4-06`. |

### 5.2 The Ingunn=Yrsa payoff (relic handled per spine: `ingunn_handling=weaponized`)

The hunger nested in Yrsa's body is not freed and not re-sealed — it is **dislodged to be consumed**. The last blót-victim of the old faith and the founding saint of the new is **eaten a third time**, taken into the thing Grím is becoming. It is the ultimate word-fame horror (C-SAINT-02) turned into fuel.

> **[STAGE: the opened reliquary. GRÍM does not lift the hunger like a splinter (Benevolent God) or re-seal it (Merciless Ruler). He takes it **in**.]**
>
> **SALGERÐ:** *(she cannot lie, so she can only name the theft as it happens)* That was a lawful share, owed to my mistress twice over. You are taking a third bite of a girl the rope and the gold already ate. *(the first crack in the courtroom-calm)* There is no road back from a mouth that has done this.
>
> **GRÍM:** *(no deflection left; the mask over a face he will not name)* Then I'll be the mouth.

*[ASIDE: the reveal at its cruelest register — Yrsa consumed, the erased woman made appetite. Rating (C-TONE-04): the horror is in the *meaning*, not the gore; keep the physical act off-page and the theological theft in the foreground.]*

### 5.3 The ending sequence — "The Mouth"

**[STAGE: `end4-root-of-the-tree`. The maw at the base of the World-Tree. GRÍM has consumed his ≥5 einherjar down the descent; the harvested he has taken are already *in* him. SALGERÐ stands at the last door — the one that does not open twice. She wanted the harvest returned to Hel's lawful course; she showed him the road down, withholding the method as long as she could, and cannot lie about it now that his feet are on the stair.]**

> **SALGERÐ:** *(the last petition, refused before it is finished)* I walked your dreams for a broken order. I asked one thing: that the dead go where the dead are owed. *(quiet, absolute)* You will not even leave my mistress her hunger. You climb into the hunger and leave *her* halls to starve. I am the first hope you break. I will not be the last, because there will be no last.
>
> **GRÍM:** No one kills the hunger. *(he does not destroy the Corpse-Eater — he replaces it)* I'll wear it.

**[STAGE: GRÍM climbs into the hunger and wears it. `final_choice=become_successor`. He becomes the thing at the roots. SALGERÐ is turned away at the last door — even Hel goes hungry (C-EMISSARY-01; she is the first hope betrayed). DAG is crowned above (C-DAG-02), knowing, cold, on his rails — and it does not matter, because there is no next morning for the realm he crowns himself over. The harvested he consumed are seated on the benches: not an audience — the meal, sat down to listen to the sound of its own eating.]**

> No door, no dawn,    no daylight after;
> the roots run red    where the last road ends.
> The mouth that sang you    was the maw all along —
> lean close, little dead:    the last line is cut.

*[ASIDE: this is the reveal of C-FRAME-04 dramatized from the inside — the reciter was never a person; the harvest learned, in time, to sing the dead a reason. "Valhalla" was the sales pitch; this hall is the slaughter-floor; every recitation was bait. The composed verse above is the last line the VOICE carves; when it is cut, the roots part.]*

### 5.4 Handoff → `00-frame §2D`

**[STAGE: no lamp is turned up. No harp is set down. The seams the player half-saw all night — the mead that never warmed, the smokeless fire, the ageless faces, the door no one could find — tear. All of them. At once. And the SKALD's voice changes, because it was never only the skald's. Continue exactly as written in `00-frame §2D`, beginning:]**

> **SKALD / THE VOICE:** You could not find the door because there is no door. You are not in a hall.
>
> You are in the mouth.
>
> These roots around you are the roots of the tree, and this hall is the thing beneath them ... The benches are full, as they are always full — but they are not an audience. They are the einherjar he fed here, the harvested, sat down to listen to the sound of their own eating. ...

**[STAGE: the closing runs to its fixed end in `00-frame §2D` — "He did not kill the hunger. No one kills the hunger. He climbed into it and wore it..." through "This is the last one. This is the last night... So lean close. It is almost —" and then: the last line is carved, the roots part, it ends. No next telling. Do not add a line after; `00-frame` terminates the game here.]**

*[ASIDE: the frame's own promise from `00-frame §Beat 3` — "I will sing it again" — is revealed as the one thing that finally cannot happen. It **agrees exactly** with `00-frame §2D`: the hall is the maw, it is the last night of the world, the reciter is the harvest given a mouth. This closing lets you see EVERYTHING — the terminus of the see-more axis that orders all four (C-FRAME-03).]*

### 5.5 Frame recontextualization (agrees with `00-frame §2D`)

Every seed from the opening (`00-frame §Beat 3`) pays at once: the un-warming mead, the smokeless fire, the unaging benches, the unfindable door, the "again." The hall is the maw; the audience is the meal; the reciter was never named because the reciter is not a person (C-FRAME-04). It is the last night, and when the last line is carved there is nothing after — the deepest cut of C-THEME-01: whoever controls the carving controls which hall you believe you sat in, and here the carver was the hunger.

---

## 6. Reachability restatement and frame-match confirmation

### 6.1 One concrete reachable path per ending

- **King of Men** *(kingsman-primary; outlaw-reachable via the status-lifting trial in the merged chapters).* Keep every Ch2 battle Sung and accept grið publicly (`sung_mercy_terror` past +40); take the king's ring and the law's wage (`sung_man_blood` past +30); court Hjortdal by clean conduct and win `nid_proof=held` from the Hrafnmark faith path at `ch3-02` so `hjortdal_trust >= 60` and `hjortdal_fate=law_upheld`; complete the trial at `ch4-02` (`trial_arc_complete=true`); at the roots choose `sever_blood`. Proclaim Yrsa in the record (`ingunn_handling=proclaimed`).
- **Benevolent God** *(either route; corpse-road door NOT required).* Spare and **unhook** throughout (`true_mercy_terror >= +40`; high `einherjar_unhooked`); let the Wyrd and Blood side accrue via the Hel arc (`true_man_blood <= -30`); carry `hel_arc_stage` from `contact` (`ch2o-s02`) → `corpse_road_walked` → **`complete`-granted** (`ch4-s05`); dislodge the hunger from Yrsa's body to **free** the harvest; choose `take_hel_seat`.
- **Merciless Ruler** *(either route).* Execute the yielding and massacre witnesses in **Unsung** battles so `true_mercy_terror <= -40` while `sung_mercy_terror >= 0` (leave no survivor to sing the terror); keep to the Man axis — law's wages, few Wyrd uses in sung fights, **unhook rather than consume** — so `true_man_blood >= +30`; re-seal the reliquary (`ingunn_handling=buried_again`); at the roots choose `keep_power_man`.
- **The Successor (hidden)** *(all five conditions independently satisfiable; consume design-guarded).* Drive True Terror/Blood past −40/−40 by **consuming** rather than sparing; walk Salgerð's `corpse_road` overlays in `ch3-01`/`ch3-06` (`hel_arc_stage=corpse_road_walked`) to FIND `ch3-07` (`corpse_road_door_found=true` + `consume_rite_known=true`); **consume ≥5** returned einherjar across `ch3-04` / `ch4-05` / `end4` (`einherjar_consumed >= 5`); weaponize Yrsa's body (`ingunn_handling=weaponized`); at the roots choose `become_successor` — do **not** let `hel_arc_stage` reach `complete`-granted (the petition is perverted).

### 6.2 Final-beat / frame-closing match confirmation

| Ending | Played final beat (this file) | Hands to | Matches the fixed closing? |
|---|---|---|---|
| King of Men | `sever_blood`; Skapti lifts *vargdropi* status; Dag crowned regardless; smaller-and-truer | `00-frame §2A` ("So he cut it out of himself...") | **Yes** — recitation and play agree; strangeness thinned to age; True > Sung confessed. No contradiction. |
| Benevolent God | `take_hel_seat`; harvest freed to Hel's course; Salgerð rests; Dag a footnote | `00-frame §2B` ("Look now. Look who has been listening.") | **Yes** — lamps up, benches full of the straw-dead, a kind god of a grave. No contradiction. |
| Merciless Ruler | `keep_power_man`; realm bought quiet, witnesses dead; Dag serves the golden lie; reliquary re-sealed | `00-frame §2C` ("And so began the golden reign...") | **Yes** — beautiful, lying, the impossible-witness tell; sees less than 2B. No contradiction. |
| The Successor | `become_successor`; climbs into the hunger; Salgerð turned away; Yrsa eaten a third time; frame tears open, last night | `00-frame §2D` ("...You are not in a hall. You are in the mouth.") | **Yes** — hall = the maw, reciter = the harvest given a mouth, the last night, no next telling. No contradiction. |

*File owner: narrative lead. Consumes: `CANON.md §1.9/§1.3/§1.5`, `00-frame.md §2` (FIXED closings), Phase-4 spine `chapters.07` + `route_graph.ending_gates`, `data/flags/story-flags.json`. Feeds: `08-branch-map.md`. Registers no new flags.*
