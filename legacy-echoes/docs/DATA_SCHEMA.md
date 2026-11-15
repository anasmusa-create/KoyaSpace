# ECHOES OF SPACE — Artifact Data Schema

Each data file in `js/` registers artifacts on a shared global and has exactly this shape:

```js
window.ECHOES = window.ECHOES || { artifacts: [] };
window.ECHOES.artifacts.push(
  { /* artifact */ },
  { /* artifact */ }
);
```

The same schema is accepted by the in-app **Upload / Attach NASA Media & JSON** manager (as
`[ {...}, {...} ]` or `{ "artifacts": [ ... ] }`). An uploaded artifact whose `id` already exists
replaces the built-in one.

## Localised values (`L`)

`L` = `{ en: "English", ku: "Central Kurdish (Sorani), Arabic script" }`.
A plain string is also accepted and used for both languages (use this for IDs/numbers/coordinates).

## Artifact

```js
{
  id: "apollo11",            // unique lowercase slug
  num: 1,                    // 1..13, official challenge order
  sector: "moon",            // "moon" | "mars" | "deep"
  icon: "🦅",                // one emoji
  name: L,                   // official name
  tagline: L,                // FIRST-PERSON teaser, <= 90 chars, e.g. "I am the engine that carried two humans home."
  status: L,                 // short status chip, <= 40 chars, e.g. "DORMANT · REFLECTOR ACTIVE"
  statusType: "dormant",     // "dormant" (silent) | "partial" (part of it still works) | "drifting" (still travelling, silent)

  passport: {                // "Hardware Passport" — shown in BOTH age modes, keep values short (<= 160 chars)
    nssdca: "1969-059C (CSM 1969-059A)",   // string
    launch: L,               // launch date(s)
    arrival: L,              // landing / orbit-insertion / deployment date(s)
    end: L,                  // end of mission date(s)
    location: L,             // human-readable place name
    coords: "0.67416° N, 23.47314° E",     // exact coordinates, string (or L when words are needed)
    mass: L,
    power: L,
    dormancy: L,             // cause of dormancy
    discovery: L             // key science discovery
  },

  // MAP PINS. One entry per physical resting place. sites[0] is the PRIMARY pin.
  // Moon and Mars: lat (north +), lon (EAST-positive, normalised to -180..180).
  //   e.g. 225.71° W  ->  lon: 134.29    |   354.634° E -> lon: -5.366   |   234.2508° E -> lon: -125.7492
  // Deep space: au (distance from Sun in AU, used on a log radial map) and angle (degrees, 0..360, schematic bearing
  //   on the solar-system map; choose distinct angles so pins do not overlap).
  sites: [
    { label: L, lat: 0.67416, lon: 23.47314 }          // moon / mars
    // { label: L, au: 2.77, angle: 140 }               // deep
  ],

  funFacts: [L, L, L],       // JUNIOR mode: 3 amazing facts with analogies, each <= 160 chars, may include emojis

  story: {                   // FIRST PERSON ("I am ..."). Paragraphs separated by "\n\n".
    junior: L,               // ages 6-12: warm, exciting, simple words, emojis, analogies. 110-160 words, 3-4 paragraphs.
    specialist: L            // ages 13+: precise engineering trade-offs, numbers, discoveries. 170-240 words, 3-4 paragraphs.
  },

  specs: [ { k: L, v: L } ], // SPECIALIST telemetry table, 6-8 rows: coordinates, catalog IDs, mass breakdown,
                             // propulsion, power, instruments, comms/radio, mission duration…
  tradeoffs: [L, L, L],      // SPECIALIST: 3 engineering trade-offs / design decisions (each <= 200 chars)
  radio: L,                  // SPECIALIST: radio/communications summary line (frequency band, antenna, data rate) — see accuracy rule

  quiz: [                    // JUNIOR "Quick Space Quiz": exactly 3 questions answerable from the junior story
    { q: L, options: [L, L, L], answer: 0, why: L }      // answer = index 0..2 of correct option; vary positions
  ],

  pingReply: L               // 1-2 sentence first-person reaction after a "Thank You Ping" arrives (silent hardware, poetic)
}
```

## Style & accuracy rules

* Every story is first person ("I am…", "I landed…"). The spacecraft is dormant, so use tense accordingly.
* Use ONLY facts from the task brief or facts you are highly confident are true. For radio
  frequencies etc. give the band/value only if you are sure (e.g. "S-band ~2.2 GHz downlink, X-band"), else
  describe generically ("S-band and UHF links"). Mark approximations with "~". Never invent numbers.
* Junior text: short sentences, concrete analogies (school bus, football pitch, microwave oven, etc.), a few emojis.
* Specialist text: no emojis in story; real engineering vocabulary.
* Kurdish (`ku`) = Central Kurdish / Sorani in Arabic script, natural not word-for-word. Use Kurdish letters
  (ڕ ڵ ۆ ێ ە ڤ گ چ پ ژ). Keep NASA, RTG, APXS, GCMS, UT, AU, km, kg, and instrument acronyms in Latin script.
  Use Western digits (0-9). Preferred vocabulary: Moon مانگ · Mars مەریخ · Earth زەوی · Sun خۆر · spacecraft فەزاگەمە ·
  rover ڕۆڤەر · lander نیشتنەوەگەر (or "فەزاگەمەی نیشتنەوە") · solar panel پانێڵی خۆری · battery باتری · signal سیگناڵ ·
  radio ڕادیۆ · asteroid ئەستێرۆیید (or "ئەستێرەپارچە") · telescope تەلەسکۆپ · planet هەسارە · star ئەستێرە · water ئاو · dust تۆز.
  Kurdish months: Jan کانوونی دووەم · Feb شوبات · Mar ئازار · Apr نیسان · May ئایار · Jun حوزەیران · Jul تەمموز ·
  Aug ئاب · Sep ئەیلوول · Oct تشرینی یەکەم · Nov تشرینی دووەم · Dec کانوونی یەکەم.
* JS strings: use double quotes; escape inner double quotes or use “ ” typographic quotes; paragraphs via `\n\n`.
