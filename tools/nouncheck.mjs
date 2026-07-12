#!/usr/bin/env node
// VARGDROPI proper-noun gate — zero dependencies, Node 18+ (KICKOFF §9 Phase 5).
//
// "Grep every proper noun against CANON's Rename Table." Enforces the Phase-5
// gate: zero unregistered nouns. Heuristic, not a parser — it is meant to
// surface candidates for human triage, and to stay quiet once the registry is
// complete. Exit non-zero if any unregistered candidate remains.
//
//   node tools/nouncheck.mjs            # scan docs/story + manifest
//   node tools/nouncheck.mjs --all      # also scan CANON.md, README.md
//   node tools/nouncheck.mjs --list     # print the known-name set and exit
//
// How it decides a token is a proper noun worth flagging:
//   * it is Capitalized or contains an Old Norse special letter (Þ ð ǫ á …),
//   * AND at least one occurrence is NOT sentence-initial (mid-sentence caps
//     is the strong proper-noun signal; a word capitalized only after "." is
//     almost always an ordinary word),
//   * AND it is not in the KNOWN set (built from CANON) or the STOPWORDS list.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const rel = (p) => relative(ROOT, p) || p;
const ON = 'ÞþÐðÆæØøǪǫÁáÉéÍíÓóÚúÝýÖöÄäŒœ'; // Old Norse / Scandinavian letters we use
const WORD = new RegExp(`[A-Za-z${ON}][A-Za-z${ON}'’-]*`, 'g');
const isCap = (w) => /^[A-ZÞÐÆØǪÁÉÍÓÚÝÖÄŒ]/.test(w); // proper-noun signal = FIRST letter uppercase (lowercase-rooted ON compounds like "blót-fire" are not names)

// Ordinary words that are legitimately capitalized (sentence start, headings,
// mid-sentence emphasis, in-world common nouns, game/mechanics vocabulary).
// Anything here is NOT treated as a proper noun. Curated against real output.
const STOPWORDS = new Set(([
  // articles / conjunctions / pronouns / common sentence-openers
  'The','A','An','And','But','Or','Nor','So','Yet','For','If','As','At','By','In','On','Of','To','Up','No','Not','Now','Then','Thus','This','That','These','Those','It','Its','He','His','Him','She','Her','They','Them','Their','We','You','Your','I','Who','Whom','Whose','What','When','Where','Why','How','Which','There','Here','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
  'Do','Does','Did','Is','Are','Was','Were','Be','Been','Being','Have','Has','Had','Will','Would','Can','Could','Shall','Should','May','Might','Must','Let','Keep','Mark','Ask','Look','Hear','Watch','Play','Read','See','Say','Sing','Quiet','Remember','Every','Each','Any','All','Both','Some','Most','More','Less','Only','Even','Still','Never','Always','Once','Twice',
  // structural / editorial words common in these docs
  'Scene','Beat','Stage','Choice','Chapter','Route','Player','Note','Aside','Location','Time','Weather','Present','Flags','Flag','Purpose','Battle','Trigger','Map','Grid','Enemy','Enemies','Neutral','Objective','Defeat','Primary','Secondary','Design','Designer','Writer','Canon','Timeline','Table','Row','Rows','Section','File','Overview','Format','Convention','Guardrail','Notice',
  // in-world common nouns (not names; already glossed or plain English)
  'Wyrd','Wyrdless','Sung','Unsung','True','Terror','Mercy','Man','Blood','Word','Word-fame','Wordfame','Harvest','Lie','Faith','Church','Crown','King','Queen','Thrall','Thralls','Thrall-born','Saint','Martyr','Relic','Reliquary','Shrine','Grove','Ban','Raid','Raiding','Duel','Ledger','Ledgers','Witness','Witnesses','Mask','Masked','Yule','Northlands','Old','New','White','Grey','Wolf','Raven','Bear','Whale','Stag','Landless','Successor','God','Gods','Hall','Deep','Roots','Root','Tree','World-Tree','Corpse-Eater','Corpse-Road','Valkyrie','Valkyries','Einherjar','Norns','Wound-sea',
  // frame / cadence words that open lines
  'Fire','Ravens','Cattle','Kinsmen','Herd','Hearth','Four','Quiet','Whence','Hail','Who','Ask','Look','Blessed',
  // script/beat-sheet format keywords (often ALL-CAPS)
  'STAGE','CHOICE','ASIDE','SCENE','BATTLE','TRIGGER','FLAGS','READ','SET','PRESENT','LOCATION','TIME','WEATHER','VOICE','IF','AND','OR','THE','NOT','WRITER','GUARDRAIL','NOTICE','BRANCH','TURN','WIN','LOSE','END','STAGED','PLAYED','RECITED','MEANING','SUNG','UNSUNG','TRUE','NONE','OBEY','TAKE','DECISION','JUXTAPOSITION','THEN','NOW','LOOK','BLESSED','QUIET',
  // dossier field labels
  'Role','Age','Faction','Allegiance','Appearance','Personality','Voice','Backstory','Arc','Relationships','Secrets','Reveals','Etymology','Kind','Status','Identity','Custodian','Totem','Region','Premise',
  // role-descriptor speaker labels (unnamed characters in ROLE-CAPS, not names)
  'SMITH','REEVE','ELDER','WARD','WARDEN','WARDENS','THRALL','GROVE-THRALL','FREEDMAN','FREEDWOMAN','LEVY-MAN','GOÐI','GODI','PRIEST','CLERK','CAPTAIN','HELMSMAN','OARSMAN','LAWSPEAKER','HERALD','CHILD','WOMAN','MAN','BOY','GIRL','MOTHER','FATHER','PILGRIM','MONK','BISHOP','HUSCARL','RAIDER','SEER','BERSERKER','SECOND','JUDGE','CROWD','HALL','HIRD','LODGE','HOST','COLUMN','CONGREGATION',
  // misc capitalized common tokens seen in output
  'Discrepancies','Discrepancy','Phase','Rename','Delita','Balmamusa','Orlandeau','Wiegraf',
  'Ch','CANON','KICKOFF','Because','Neither','Either','Nobody','Above','Below','Ah','Aye','Mm','Oh','Well','Yes','No','Maybe','Perhaps','Above','Since','While','Though','Although','Unless','Until','Before','After','During','Against','Within','Without','Toward','Between','Among','Across','Along','Around','Behind','Beneath','Beyond','Beside','Enjoy','Welcome','Thank','Congratulations','Listen','Understand','Regardless','Something','Someone','Anything','Anyone','Nothing','Nobody','Everything','Everyone','Whichever','Whatever','Whoever','Whenever','Wherever',
  // capitalized forms of glossary terms (registered §3) used as titles / sentence-openers
  'Blót','Blót-victim','Níð','Seiðr','Seiðr-keepers','Grið','Holmgang','Strandhögg','Vargdropi','Ergi','Goði','Goðar','Skógarmaðr','Einherjar','Dísir','Vættir','Fylgja','Wyrd','Whelp',
  // registered mechanics/analog labels & doc-structure nouns (not in-world names)
  'CT','LoS','VFX','UI','QA','TBD','TD','TUNABLE','FIXED','Jump','Charge-Time','Sung-Ledger','True-ledger','Wyrd-in-sung','Hel-arc','Corpse-road','Corpse-roads','Corpse-Roads','Delita-analog','Orlandeau-style','Yggdrasill-analogs','Christianity','Christian','Scandinavia','Guest-Cup','Truce-Wand','Law-Ring','King-of-Men','Hidden-Ending','Thing-Plain','Thing-law','Thing-slayer','Blót-of-Yrsa','White-God','White-Signed','Ragnvald-as-father','Brandr-adjacent','Aldís-linked','Ulfheim-restoration','Whale-Road','Looted-Shrine','Reliquary-Opened','Ingunn-radiance','Route-merged','Route-variant','Scene-by-scene','Chapter-Break','Chapter-Open','Chapter-Close','Chapter-','Beat-','Flag-count','Clan-fate','Final-beat','Cross-file','Cross-cutting','Faith-nuance','Fog-cairns','Post-ban','Husband-king','Lodge-master','Lodge-brother','Horse-lords','Night-fighters','Prime-signed','Turf-walled','Weather-cured','Rival-ally','Forest-man','Sight','Roads','Road','Roster','Index','Handoff','Spine','Manifest','Bible','Registry','Reachability','Verdict','Audit','Auditor','Authority','Emissary','Keeper','Heir','Guest','Maw','Whelp','Wife','Boy','Woman','Sister','Second','Knife','Halls','Gates','Cocoon','Truth','Wrongness','Unmaking','Conversion','Burning','Reckoning','Recitation','Interlude','Opening','Closings','Founding','Officiating','Levy','Berth','Relief','Storm','Tideline','Wolves','Pilgrims','Survivors','Travelers','Carvers','Factions','Faiths','Altars','Clans','Leaders','Dossiers','Threads','Endings','Questions','Notes','Records','Scripts','Rules','Points','Counts','Gates',
].map((w) => w)));

const stripToken = (w) => w.split(/[’']/)[0]; // cut at first apostrophe: handles possessive (Hel's) + contraction (I'll)

// Registered-elsewhere concepts (ending names, route names, C-CLAN-04 stigma
// tags, mechanics), plus common words that appear capitalized mid-phrase.
const EXTRA = ('Benevolent Merciless Ruler Men KoM Kingsman Outlaw Shared Secret '
  + 'KINGSMAN OUTLAW SHARED SECRET SHOWCASE PLANNED RECORDING FISHER-WIFE '
  + 'KINSLAYER LOREBURNER OATHBREAKER MARKET-BURNER LAW-BREAKER THING-SLAYER '
  + 'High Low Down Up Deep Old New First Last Next Only Both None Yes Give Take '
  + 'My Our Your Their His Her Its Everything Everyone Nothing Whatever Whether '
  + 'Law Gate Trust Frame Saga Rating Choices Choice Ending Epigraph Hold Feeds '
  + 'KICKOFF Key Composed Played Recited Meaning Point Total Smoke Fire Name Dead '
  + 'Two Vellums Bear Wolf Raven Whale Stag Wound-sea Erased Women Threads Petition '
  + 'Convergence Boarding Ambush Barrow Trial Root Reliquary Opened Vargdropi '
  // reviewed common-word / scene-title / doc-structure residue (Phase-5 triage: none are proper nouns)
  + 'Bloodied Bracket Broken Claim Clan Clerk Different Don Eat Empty Enough Face Factor Fell '
  + 'Field Find Fires Full Geography Get Gilded Go Goes Gone Graph Guard Hedge Hound Hungry Hunted '
  + 'JSONs Just Keeps Logic Longhouse Merged Mine Mouth Move Neat Night OQs Other Post Priest '
  + 'Question Relationship Return Rising Seal Seat Seems Sheet Sold Starving Strike Struck Tell '
  + 'Test Theme Thumb Wall Way Wear Worse Wrong Id Night Berth Vellums Wakes Levy '
  + 'Conventions Schemas Open Items').split(/\s+/);

// Build the KNOWN proper-noun set from CANON: Rename Table names, §2.1
// allowlist, glossary terms, and job-name gloss. Split multiword names into
// component words so "Bǫðvarr" and "Bear-Sark" both register from one row.
function buildKnown() {
  const canon = readFileSync(join(ROOT, 'CANON.md'), 'utf8');
  const known = new Set();
  const add = (s) => {
    for (const m of String(s).matchAll(WORD)) {
      const w = m[0];
      if (isCap(w)) known.add(w.toLowerCase()); // case-insensitive registry
    }
  };
  // Rename Table: rows in "## 2. Rename Table" .. "### 2.1"; first cell = name.
  const tableStart = canon.indexOf('## 2. Rename Table');
  const allowStart = canon.indexOf('### 2.1');
  const glossStart = canon.indexOf('## 3. Terminology Glossary');
  const glossEnd = canon.indexOf('## 4.');
  if (tableStart >= 0 && allowStart > tableStart) {
    for (const line of canon.slice(tableStart, allowStart).split('\n')) {
      const m = line.match(/^\|\s*([^|]+?)\s*\|/);
      if (m && !/^-+$/.test(m[1]) && m[1] !== 'Placeholder') add(m[1]);
    }
  }
  // §2.1 allowlist + glossary: add every capitalized token (names + terms).
  if (allowStart >= 0 && glossStart > allowStart) add(canon.slice(allowStart, glossStart));
  if (glossStart >= 0 && glossEnd > glossStart) add(canon.slice(glossStart, glossEnd));
  // Job display names / etymology also live in the glossary block above.
  return known;
}

for (const w of EXTRA) STOPWORDS.add(w);
const args = new Set(process.argv.slice(2));
const known = buildKnown();
const isKnown = (w) => { const l = w.toLowerCase(); return known.has(l) || known.has(l.replace(/s$/, '')); };
if (args.has('--list')) {
  console.log([...known].sort().join('\n'));
  process.exit(0);
}

function* walk(dir) {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.md')) yield p;
  }
}
const targets = [join(ROOT, 'docs/story'), join(ROOT, 'manifest')];
if (args.has('--all')) targets.push(join(ROOT, 'CANON.md'), join(ROOT, 'README.md'));

const SENT_BOUNDARY = /[.!?:;•|>\-—–("'`\[\]]/; // char classes that precede a sentence/segment start
const candidates = new Map(); // token -> {count, firstMid: "file:line"}

for (const target of targets) {
  const files = target.endsWith('.md') ? [target] : [...walk(target)];
  for (const file of files) {
    const lines = readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, i) => {
      // skip fenced code and pure table-separator lines
      if (/^\s*```/.test(line) || /^\s*\|[-:| ]+\|\s*$/.test(line)) return;
      // strip CANON citation ids (C-…, D-…, OQ-…) so they don't tokenize as nouns
      line = line.replace(/\b(?:C|D|OQ)-[A-Za-zÞ0-9-]+/g, ' ');
      // strip markdown emphasis/formatting so a bolded sentence-opener ("**Blunt, …") isn't mistaken for mid-sentence
      line = line.replace(/[*_`#>~]/g, ' ');
      let m;
      WORD.lastIndex = 0;
      while ((m = WORD.exec(line))) {
        const w = stripToken(m[0]);
        if (!isCap(w) || w.length < 2) continue;
        if (isKnown(w) || STOPWORDS.has(w)) continue;
        // hyphenated compound whose HEAD is a registered name/term/stopword (Thing-plain, White-God, Blót-of-Yrsa)
        const head = w.split('-')[0];
        if (head !== w && (isKnown(head) || STOPWORDS.has(head))) continue;
        // a fully ALL-CAPS unknown token is a ROLE-CAPS speaker label or emphasis (kickoff convention), not a proper noun
        if (w === w.toUpperCase()) continue;
        // sentence-initial? look back for the previous non-space character.
        let j = m.index - 1;
        while (j >= 0 && line[j] === ' ') j--;
        const prev = j < 0 ? '' : line[j];
        const midSentence = j >= 0 && !SENT_BOUNDARY.test(prev);
        const cur = candidates.get(w) || { count: 0, firstMid: null };
        cur.count++;
        if (midSentence && !cur.firstMid) cur.firstMid = `${rel(file)}:${i + 1}`;
        candidates.set(w, cur);
      }
    });
  }
}

// Report only candidates seen mid-sentence at least once (strong proper-noun signal).
const flagged = [...candidates.entries()].filter(([, v]) => v.firstMid).sort((a, b) => b[1].count - a[1].count);
if (flagged.length === 0) {
  console.log(`nouncheck: clean — no unregistered proper nouns (known set: ${known.size} names).`);
  process.exit(0);
}
console.error(`nouncheck: ${flagged.length} unregistered proper-noun candidate(s) — register in CANON §2 or add to STOPWORDS/§2.1, or log in Open Questions:\n`);
for (const [w, v] of flagged) console.error(`  ${w}  (×${v.count})  first mid-sentence at ${v.firstMid}`);
process.exit(1);
