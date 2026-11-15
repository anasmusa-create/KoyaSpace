window.ECHOES = window.ECHOES || { artifacts: [] };
window.ECHOES.artifacts.push(
  /* ===================================================================
     1. APOLLO 11 LUNAR MODULE "EAGLE" & EASEP
     =================================================================== */
  {
    id: "apollo11",
    num: 1,
    sector: "moon",
    icon: "🦅",
    name: {
      en: "Apollo 11 Lunar Module “Eagle” & EASEP",
      ku: "مۆدیوڵی نیشتنەوەی مانگی ئەپۆلۆ 11 «ئیگڵ» و EASEP",
    },
    tagline: {
      en: "I am the lander that carried two humans down to the Moon.",
      ku: "من ئەو فەزاگەمەیەم کە دوو مرۆڤی گەیاندە سەر مانگ.",
    },
    status: {
      en: "DORMANT · LASER REFLECTOR ACTIVE",
      ku: "نووستوو · ئاوێنەی لەیزەر چالاکە",
    },
    statusType: "partial",

    passport: {
      nssdca: "1969-059C (CSM 1969-059A)",
      launch: { en: "16 July 1969", ku: "16ی تەمموزی 1969" },
      arrival: {
        en: "20 July 1969, 20:17:40 UT (landing)",
        ku: "20ی تەمموزی 1969، 20:17:40 UT (نیشتنەوە)",
      },
      end: {
        en: "EASEP ended 27 Aug 1969; the laser reflector is still usable",
        ku: "EASEP لە 27ی ئابی 1969 کۆتایی هات؛ ئاوێنەی لەیزەر هێشتا بەکاردێت",
      },
      location: {
        en: "Mare Tranquillitatis (Sea of Tranquility)",
        ku: "دەریای ئارامی (Mare Tranquillitatis)",
      },
      coords: "0.67416° N, 23.47314° E",
      mass: {
        en: "15,103 kg (whole LM); descent stage 2,034 kg dry",
        ku: "15,103 kg (کۆی LM)؛ قۆناغی دابەزین 2,034 kg وشک",
      },
      power: {
        en: "6 silver-zinc batteries; EASEP ran on solar panels",
        ku: "6 باتری زیو-زنک؛ EASEP بە پانێڵی خۆری کاری دەکرد",
      },
      dormancy: {
        en: "Mission complete: ascent stage left; EASEP's short-lived instruments went silent",
        ku: "ئەرک تەواو بوو: قۆناغی بەرزبوونەوە ڕۆیشت؛ ئامێرەکانی EASEP بێدەنگ بوون",
      },
      discovery: {
        en: "First moonquake recordings from the surface, 21.55 kg of samples, and lasting laser ranging to the Moon",
        ku: "یەکەم تۆماری بوومەلەرزەی مانگ، 21.55 kg نموونە، و پێوانەی درێژخایەنی دووری مانگ بە لەیزەر",
      },
    },

    sites: [
      {
        label: { en: "Eagle (Tranquility Base)", ku: "ئیگڵ (بنکەی ئارامی)" },
        lat: 0.67416,
        lon: 23.47314,
      },
      {
        label: {
          en: "EASEP (~17 m south of Eagle)",
          ku: "EASEP (~17 m لە باشووری ئیگڵ)",
        },
        lat: 0.6735,
        lon: 23.473,
      },
    ],

    funFacts: [
      {
        en: "My engine worked like a car pedal 🚗: gentle push or full power. That let me hover and pick a safe spot!",
        ku: "بزوێنەرەکەم وەک پێڵاوی ئۆتۆمبێل کاری دەکرد 🚗: فشارێکی نەرم یان هێزی تەواو. بۆیە توانیم هەڵبفڕم و شوێنێکی سەلامەت هەڵبژێرم!",
      },
      {
        en: "The mirror I left bounces laser light back to Earth, so scientists can still measure the Moon's distance to millimetres! 📏",
        ku: "ئەو ئاوێنەیەی بەجێم هێشت تیشکی لەیزەر دەگەڕێنێتەوە بۆ زەوی، بۆیە زانایان هێشتا دووری مانگ بە میلیمەتر دەپێون! 📏",
      },
      {
        en: "My bottom half is still on the Moon. It was the launch pad for the astronauts' ride home! 🚀",
        ku: "نیوەی خوارەوەم هێشتا لەسەر مانگە. ئەو سەکۆی هەڵدانی ئاسمانەوانەکان بوو بۆ گەڕانەوە! 🚀",
      },
    ],

    story: {
      junior: {
        en: "Hello, Earth! 🦅 I am Eagle, the Apollo 11 Lunar Module. I had one big job: carry two astronauts down to the Moon. I weighed 15,103 kg, about the same as a school bus! 🚌\n\nOn July 20, 1969, I fired my engine and sank toward the Sea of Tranquility. My computer beeped with alarms, and boulders waited below! Neil Armstrong took control and steered me to a flat, safe spot. I landed with less than 30 seconds of fuel to spare. Phew! 😅\n\nThe astronauts collected 21.55 kg of Moon rocks 🪨 and left a special mirror 🪞 that bounces laser beams straight back to Earth. Scientists still use it today!\n\nMy bottom half still stands on the Moon like a launch pad nobody needs. Do you remember my story? Try the quiz! 🚀",
        ku: "سڵاو زەوی! 🦅 من «ئیگڵ»م، مۆدیوڵی نیشتنەوەی مانگی ئەپۆلۆ 11. ئەرکێکی گەورەم هەبوو: دوو ئاسمانەوان بگەیەنمە سەر مانگ. کێشم 15,103 kg بوو، نزیکەی هێندەی ئۆتۆبوسێکی قوتابخانە! 🚌\n\nلە 20ی تەمموزی 1969 بزوێنەرەکەم داگیرساند و بەرەو دەریای ئارامی دابەزیم. کۆمپیوتەرەکەم ئاگادارکەرەوەی لێدەدا و لە خوارەوە بەردی گەورە هەبوو! نیل ئارمسترۆنگ کۆنترۆڵی گرتە دەست و منی بۆ شوێنێکی تەخت و سەلامەت ڕێنمایی کرد. بە کەمتر لە 30 چرکە سووتەمەنی ماوە نیشتمەوە. ئووف! 😅\n\nئاسمانەوانەکان 21.55 kg بەردی مانگیان کۆکردەوە 🪨 و ئاوێنەیەکی تایبەتیان بەجێهێشت 🪞 کە تیشکی لەیزەر ڕاستەوخۆ دەگەڕێنێتەوە بۆ زەوی. زانایان هێشتا بەکاری دەهێنن!\n\nنیوەی خوارەوەم هێشتا لەسەر مانگ ڕاوەستاوە، وەک سەکۆیەکی هەڵدانی کە کەس پێویستی پێی نەماوە. چیرۆکەکەم لەبیرە؟ تاقیکردنەوەکە بکە! 🚀",
      },
      specialist: {
        en: "I am Lunar Module 5, call sign Eagle: 15,103 kg fuelled, built as two stages. My descent stage (2,034 kg dry) carried the landing gear, propellant tanks, silver-zinc batteries and a 45,000 N engine that could be throttled continuously from roughly 10% to 60% thrust, with a near-full-thrust setting; the intermediate band was avoided to limit nozzle erosion. Throttling let the crew trade propellant for hover time, which is exactly what the landing consumed.\n\nOn 20 July 1969 at 20:17:40 UT I touched down in Mare Tranquillitatis. During descent my guidance computer raised 1201 and 1202 overload alarms; its priority-scheduled executive shed low-priority tasks and kept the landing running. Armstrong took semi-manual control to overfly a boulder-strewn crater and set me down with under 30 seconds of propellant margin. Probes on my footpads signalled contact.\n\nAbout 17 m south of me the crew deployed EASEP. Its Passive Seismic Experiment, powered by solar panels, recorded moonquakes until the package ended on 27 August 1969. The Laser Ranging Retroreflector, an array of 100 fused-silica corner cubes with no electronics at all, has no such limit: it has returned Earth-based laser pulses ever since, refining the Moon's distance to millimetre level. The crew returned 21.55 kg of samples, and my descent stage still serves as a monument on the surface, the launch pad I was designed to become.",
        ku: "من مۆدیوڵی نیشتنەوەی 5م، ناوی بانگکردنم «ئیگڵ»: 15,103 kg بە سووتەمەنییەوە، لە دوو قۆناغ پێکهاتووە. قۆناغی دابەزینم (2,034 kg وشک) پێی نیشتنەوە، تانکی سووتەمەنی، باتری زیو-زنک و بزوێنەرێکی 45,000 N ی هەڵگرتبوو کە دەکرا هێزەکەی بە بەردەوامی لە نزیکەی 10% تا 60% کۆنترۆڵ بکرێت، لەگەڵ ڕێکخستنێکی نزیک لە هێزی تەواو؛ ناوچەی ناوەڕاستی نێوانیان بۆ کەمکردنەوەی خورانی نۆزڵ دوور خرایەوە. ئەم ڕێکخستنە ڕێگەی بە ئاسمانەوانەکان دەدا سووتەمەنی بگۆڕنەوە بە کاتی هەڵواسران، کە دەقاودەق ئەوەیە نیشتنەوەکە خەرجی کرد.\n\nلە 20ی تەمموزی 1969 کاتژمێر 20:17:40 UT لە Mare Tranquillitatis نیشتمەوە. لە کاتی دابەزیندا کۆمپیوتەری ڕێنمایی من ئاگادارکەرەوەی بارگرانی 1201 و 1202ی دا؛ بەڕێوەبەری ئەولەویەتی ئەرکەکان ئەو ئەرکانەی گرنگییان کەمتر بوو فڕێدا و نیشتنەوەکەی بەردەوام کرد. ئارمسترۆنگ بە شێوەیەکی نیمچە دەستی کۆنترۆڵی گرت تا بەسەر چاڵێکی پڕ لە بەردی گەورە تێبپەڕێت و منی دانا بە کەمتر لە 30 چرکە سووتەمەنی پاشەکەوت. پرۆبەکانی سەر پێیەکانم بەرکەوتنیان ئاگادار کردەوە.\n\nنزیکەی 17 m لە باشووری من ئەندامانی گەشتەکە EASEP یان دانا. ئەزموونی لەرزەپێوی ئاسایی (Passive Seismic Experiment) کە بە پانێڵی خۆری کاری دەکرد، بوومەلەرزەکانی تۆمار کرد تا پاکێجەکە لە 27ی ئابی 1969 کۆتایی هات. ئاوێنەی گەڕێنەرەوەی لەیزەر (Laser Ranging Retroreflector)، ڕیزێک لە 100 ئاوێنەی گۆشەیی لە سیلیکای تواوە و بێ هیچ ئەلیکترۆنیک، ئەو سنوورەی نییە: لەو کاتەوە پەڵسی لەیزەری زەوی دەگەڕێنێتەوە و دووری مانگ تا ئاستی میلیمەتر ڕوون دەکاتەوە. ئاسمانەوانەکان 21.55 kg نموونەیان هێنایەوە، و قۆناغی دابەزینم هێشتا وەک یادگارێک لەسەر ڕووی مانگ ماوە، ئەو سەکۆی هەڵدانەی بۆ دروستکرابووم.",
      },
    },

    specs: [
      {
        k: { en: "Coordinates", ku: "پێوەرە شوێنییەکان" },
        v: "Eagle 0.67416° N, 23.47314° E · EASEP 0.6735° N, 23.4730° E",
      },
      {
        k: { en: "Catalog IDs", ku: "ناسنامەی کاتالۆگ" },
        v: "NSSDCA 1969-059C (LM) · 1969-059A (CSM)",
      },
      {
        k: { en: "Mass", ku: "کێش" },
        v: {
          en: "15,103 kg total LM; descent stage 2,034 kg dry; 21.55 kg of samples returned",
          ku: "15,103 kg کۆی LM؛ قۆناغی دابەزین 2,034 kg وشک؛ 21.55 kg نموونە هێنرایەوە",
        },
      },
      {
        k: { en: "Descent engine", ku: "بزوێنەری دابەزین" },
        v: {
          en: "45,000 N, throttleable (~10–60% plus near-full-thrust setting)",
          ku: "45,000 N، دەکرێت هێزەکەی ڕێک بخرێت (~10–60% لەگەڵ ڕێکخستنێکی نزیک لە هێزی تەواو)",
        },
      },
      {
        k: { en: "Power", ku: "وزە" },
        v: {
          en: "6 silver-zinc batteries on the LM; EASEP on solar panels",
          ku: "6 باتری زیو-زنک لەسەر LM؛ EASEP بە پانێڵی خۆری",
        },
      },
      {
        k: { en: "Instruments (EASEP)", ku: "ئامێرەکان (EASEP)" },
        v: {
          en: "Passive Seismic Experiment · Laser Ranging Retroreflector (100 corner cubes)",
          ku: "ئەزموونی لەرزەپێوی ئاسایی · ئاوێنەی گەڕێنەرەوەی لەیزەر (100 گۆشە)",
        },
      },
      {
        k: { en: "Landing", ku: "نیشتنەوە" },
        v: {
          en: "20 July 1969, 20:17:40 UT; <30 s propellant margin",
          ku: "20ی تەمموزی 1969، 20:17:40 UT؛ کەمتر لە 30 چرکە سووتەمەنی ماوە",
        },
      },
      {
        k: { en: "EASEP duration", ku: "ماوەی EASEP" },
        v: {
          en: "Deployed 21 July 1969 · ended 27 Aug 1969",
          ku: "دانرا 21ی تەمموزی 1969 · کۆتایی هات 27ی ئابی 1969",
        },
      },
    ],

    tradeoffs: [
      {
        en: "A throttleable descent engine cost extra mass and complexity, but gave the crew hover time to dodge boulders instead of committing to a fixed-thrust burn.",
        ku: "بزوێنەرێکی ڕێکخراوی دابەزین کێش و ئاڵۆزی زیاتری خایاند، بەڵام کاتی هەڵواسرانی دایە ئاسمانەوانەکان بۆ دوورکەوتنەوە لە بەردەکان، نەک بسووتێنرێت بە هێزێکی جێگیر.",
      },
      {
        en: "The descent stage doubled as launch pad: leaving it behind cut the ascent mass and avoided a separate launch structure.",
        ku: "قۆناغی دابەزین وەک سەکۆی هەڵدانیش کاری کرد: بەجێهێشتنی کێشی هەڵفڕینەوەی کەم کردەوە و پێویستی بە پێکهاتەیەکی جیای هەڵدان نەما.",
      },
      {
        en: "EASEP's retroreflector is passive: no power or electronics to fail, which is why it outlived every powered instrument.",
        ku: "ئاوێنەی گەڕێنەرەوەی EASEP پاسیڤە: وزە و ئەلیکترۆنیکی نییە تا تێک بچێت، بۆیە لە هەموو ئامێرە کارەباییەکان زیاتر ژیا.",
      },
    ],

    radio: {
      en: "S-band ~2.2 GHz unified link with Earth for voice, telemetry and TV; VHF voice to the astronauts' suits; slow-scan TV at 10 frames per second.",
      ku: "بەستەری S-band ~2.2 GHz لەگەڵ زەوی بۆ دەنگ، تێلێمەتری و تەلەڤزیۆن؛ VHF بۆ دەنگی بەرگەکانی ئاسمانەوانەکان؛ تەلەڤزیۆنی خاو بە 10 فرەیم لە چرکەیەکدا.",
    },

    quiz: [
      {
        q: { en: "Where did I land?", ku: "لە کوێ نیشتمەوە؟" },
        options: [
          { en: "Ocean of Storms", ku: "دەریای تۆفانەکان" },
          { en: "Sea of Tranquility", ku: "دەریای ئارامی" },
          { en: "Hadley Rille", ku: "هادلی ڕیل" },
        ],
        answer: 1,
        why: {
          en: "I touched down in the Sea of Tranquility on July 20, 1969.",
          ku: "لە 20ی تەمموزی 1969 لە دەریای ئارامی نیشتمەوە.",
        },
      },
      {
        q: {
          en: "How much Moon rock did the astronauts collect?",
          ku: "ئاسمانەوانەکان چەند بەردی مانگیان کۆکردەوە؟",
        },
        options: [
          { en: "2 kg", ku: "2 kg" },
          { en: "100 kg", ku: "100 kg" },
          { en: "21.55 kg", ku: "21.55 kg" },
        ],
        answer: 2,
        why: {
          en: "They brought home 21.55 kg of Moon rocks.",
          ku: "ئەوان 21.55 kg بەردی مانگیان هێنایەوە.",
        },
      },
      {
        q: {
          en: "What did we leave that still works today?",
          ku: "چ شتێکمان بەجێهێشت کە هێشتا کار دەکات؟",
        },
        options: [
          { en: "A laser mirror", ku: "ئاوێنەیەکی لەیزەر" },
          { en: "A radio", ku: "ڕادیۆیەک" },
          { en: "A TV", ku: "تەلەڤزیۆنێک" },
        ],
        answer: 0,
        why: {
          en: "The mirror still bounces laser light back to Earth.",
          ku: "ئاوێنەکە هێشتا تیشکی لەیزەر دەگەڕێنێتەوە بۆ زەوی.",
        },
      },
    ],

    pingReply: {
      en: "I cannot answer, but my mirror still catches your light and gives it back. That is how I say hello. 🪞",
      ku: "ناتوانم وەڵام بدەمەوە، بەڵام ئاوێنەکەم هێشتا ڕووناکییەکەتان دەگرێت و دەیگەڕێنێتەوە. ئەمە شێوازی سڵاوکردنی منە. 🪞",
    },
  },

  /* ===================================================================
     2. LUNAR ROVING VEHICLES (APOLLO 15, 16, 17)
     =================================================================== */
  {
    id: "lrv",
    num: 2,
    sector: "moon",
    icon: "🚙",
    name: {
      en: "Lunar Roving Vehicles (Apollo 15, 16, 17)",
      ku: "ئۆتۆمبێلە گەڕۆکەکانی مانگ (ئەپۆلۆ 15، 16، 17)",
    },
    tagline: {
      en: "We are three Moon Buggies, parked forever where the road ended.",
      ku: "ئێمە سێ ئۆتۆمبێلی مانگین، بۆ هەمیشە لەو شوێنەی ڕێگاکە تەواو بوو ڕاوەستاوین.",
    },
    status: {
      en: "DORMANT · PARKED ON THE MOON",
      ku: "نووستوو · لەسەر مانگ پارک کراوە",
    },
    statusType: "dormant",

    passport: {
      nssdca: "1971-063C (LRV-1) · 1972-031C (LRV-2) · 1972-096C (LRV-3)",
      launch: {
        en: "26 Jul 1971 · 16 Apr 1972 · 7 Dec 1972 (with Apollo 15, 16, 17)",
        ku: "26ی تەمموزی 1971 · 16ی نیسانی 1972 · 7ی کانوونی یەکەمی 1972 (لەگەڵ ئەپۆلۆ 15، 16، 17)",
      },
      arrival: {
        en: "Deployed July 1971 · April 1972 · December 1972",
        ku: "دانران تەمموزی 1971 · نیسانی 1972 · کانوونی یەکەمی 1972",
      },
      end: {
        en: "Left parked at the end of each mission's last moonwalk",
        ku: "لە کۆتایی دوایین پیاسەی مانگی هەر ئەرکێک پارک کران",
      },
      location: {
        en: "Hadley-Apennine · Descartes Highlands · Taurus-Littrow",
        ku: "هادلی-ئەپێنین · بەرزاییەکانی دێکارت · تاوروس-لیترۆ",
      },
      coords:
        "26.1322° N, 3.6339° E · 8.9730° S, 15.5002° E · 20.1908° N, 30.7717° E",
      mass: {
        en: "210 kg on Earth (~34 kg in lunar gravity, about 1/6)",
        ku: "210 kg لەسەر زەوی (~34 kg لە خوڕی مانگدا، نزیکەی 1/6)",
      },
      power: {
        en: "Two 36-volt silver-zinc batteries (non-rechargeable)",
        ku: "دوو باتری زیو-زنکی 36 ڤۆڵت (دووبارە بارناکرێنەوە)",
      },
      dormancy: {
        en: "Batteries are single-use and were left on the surface by design",
        ku: "باترییەکان تەنیا یەکجار بەکاردێن و بە ئەنقەست لەسەر مانگ بەجێهێڵران",
      },
      discovery: {
        en: "Vastly widened the astronauts' range (up to 35.9 km on Apollo 17) and let Earth watch Lunar Module liftoffs live",
        ku: "مەودای گەڕانی ئاسمانەوانەکانی زۆر فراوان کرد (تا 35.9 km لە ئەپۆلۆ 17) و ڕێگەی دا زەوی هەڵفڕینی مۆدیوڵی مانگ بە ڕاستەوخۆ ببینێت",
      },
    },

    sites: [
      {
        label: {
          en: "Apollo 15 LRV (Hadley-Apennine)",
          ku: "ئۆتۆمبێلی ئەپۆلۆ 15 (هادلی-ئەپێنین)",
        },
        lat: 26.1322,
        lon: 3.6339,
      },
      {
        label: {
          en: "Apollo 16 LRV (Descartes Highlands)",
          ku: "ئۆتۆمبێلی ئەپۆلۆ 16 (بەرزاییەکانی دێکارت)",
        },
        lat: -8.973,
        lon: 15.5002,
      },
      {
        label: {
          en: "Apollo 17 LRV (Taurus-Littrow)",
          ku: "ئۆتۆمبێلی ئەپۆلۆ 17 (تاوروس-لیترۆ)",
        },
        lat: 20.1908,
        lon: 30.7717,
      },
    ],

    funFacts: [
      {
        en: "On Earth I weigh 210 kg, but on the Moon only 34 kg, about like a big dog! 🐕",
        ku: "لەسەر زەوی 210 kg کێشم هەیە، بەڵام لەسەر مانگ تەنیا 34 kg، نزیکەی وەک سەگێکی گەورە! 🐕",
      },
      {
        en: "My tyres have no air! They are woven from piano wire, so they can never go flat. 🎹",
        ku: "تایەکانم هەوایان تێدا نییە! لە تەلی پیانۆ چنراون، بۆیە هەرگیز کون نابن. 🎹",
      },
      {
        en: "I carried a TV camera, so Earth could watch the Lunar Module lift off the Moon, live! 📺",
        ku: "کامێرایەکی تەلەڤزیۆنم هەڵگرتبوو، بۆیە زەوی توانی هەڵفڕینی مۆدیوڵی مانگ بە ڕاستەوخۆ ببینێت! 📺",
      },
    ],

    story: {
      junior: {
        en: "Vroom vroom! 🚙 We are the three Moon Buggies, the Lunar Roving Vehicles of Apollo 15, 16 and 17. On Earth I weigh 210 kg, like a big motorbike 🏍️. On the Moon, gravity is only about 1/6 as strong, so I weigh just 34 kg!\n\nI folded up flat inside the Lunar Module, like a camping chair ⛺. Astronauts unfolded me, hopped on and zoomed across the dust. I had four wheels, each with its own tiny electric motor, and bouncy tyres made of woven piano wire! 🎹\n\nThanks to me, astronauts could explore far from their landing spot. On Apollo 17 we drove 35.9 km! We also carried a TV camera 📺 so you could watch the Lunar Module blast off the Moon.\n\nMy batteries can't be recharged, so we are parked on the Moon forever. Ready for a quiz? 🏁",
        ku: "ڤرووم ڤرووم! 🚙 ئێمە سێ ئۆتۆمبێلی مانگین، ئۆتۆمبێلە گەڕۆکەکانی ئەپۆلۆ 15، 16 و 17. لەسەر زەوی 210 kg کێشم هەیە، وەک مۆتۆسکیلێکی گەورە 🏍️. لەسەر مانگ خوڕی تەنیا نزیکەی 1/6ی زەوییە، بۆیە کێشم تەنیا 34 kg ـە!\n\nلە ناو مۆدیوڵی مانگدا تەخت پێچرابوومەوە، وەک کورسییەکی کەمپ ⛺. ئاسمانەوانەکان کردیانمەوە، سوار بوون و بە سەر تۆزەکەدا بە خێرایی ڕۆیشتن. چوار سووڕانم هەبوو، هەریەکەیان مۆتۆڕێکی کارەبایی بچووکی خۆی هەبوو، و تایەی جووڵاویم لە تەلی پیانۆی چنراو دروست کرابوو! 🎹\n\nلەبەر من ئاسمانەوانەکان توانیان لە شوێنی نیشتنەوەکەیان دوور بگەڕێن. لە ئەپۆلۆ 17 ئێمە 35.9 km ڕۆیشتین! کامێرایەکی تەلەڤزیۆنیشمان هەڵگرتبوو 📺 تاکو ببینیت مۆدیوڵی مانگ چۆن لە مانگ هەڵدەفڕێت.\n\nباترییەکانم دووبارە بار ناکرێنەوە، بۆیە ئێمە بۆ هەمیشە لەسەر مانگ پارک کراوین. ئامادەی تاقیکردنەوەیت؟ 🏁",
      },
      specialist: {
        en: "We are LRV-1, -2 and -3: a 210 kg folding aluminium-alloy chassis stowed in a bay of the Lunar Module and deployed by tapes and pulleys. Each wheel has its own ~0.25 hp electric motor with harmonic-drive gearing, and steering is on both axles, giving a tight turning circle. Two 36-volt silver-zinc batteries are non-rechargeable: the best energy per kilogram, and no charging hardware to carry.\n\nOur tyres are ~81 cm wire-mesh woven from zinc-coated piano wire with titanium chevron treads. They give traction and compliance on regolith with no inflation system to puncture or leak. Navigation used a directional gyro and wheel odometers to compute bearing and range back to the Lunar Module. That mattered, because the crews were allowed to travel only as far as they could walk back if we failed.\n\nWithin those limits we did what no landing alone could. Apollo 15 covered 27.9 km, Apollo 16 26.7 km, and Apollo 17 35.9 km, carrying tools, samples and crews to outcrops kilometres from the landing site. On Apollo 17, a fender broken by a hammer was repaired with duct tape and map sheets to keep dust off the electronics. A colour TV camera on a steerable S-band umbrella antenna was commanded from Earth, and showed each Lunar Module liftoff. Then the crews parked us, and the batteries slowly died.",
        ku: "ئێمە LRV-1 و -2 و -3ین: شاسییەکی ئەلومینیۆمی 210 kg ی پێچراوە کە لە بەشێکی مۆدیوڵی مانگدا دانرابوو و بە پشتێن و ماکەرە دەکرایەوە. هەر سووڕانێک مۆتۆڕێکی کارەبایی ~0.25 hp ی خۆی هەیە لەگەڵ گێڕی هارمۆنیک-درایڤ، و ئاڕاستەکردن لەسەر هەردوو تەوەرەکە بوو، کە بازنەی ئاوڕدانەوەیەکی تەنگی دەدا. دوو باتری زیو-زنکی 36 ڤۆڵت دووبارە بار ناکرێنەوە: باشترین وزە بۆ هەر کیلۆگرامێک، و هیچ ئامێری بارکردنەوەیەک نییە بۆ هەڵگرتن.\n\nتایەکانمان ~81 cm تۆڕی تەلین کە لە تەلی پیانۆی زنک-داپۆشراو چنراون لەگەڵ ڕووی تیتانیۆمی شێوە-V. گرتن و نەرمییان لەسەر ڕیگۆلیس دەدەن بەبێ سیستەمی پڕکردنەوەی هەوا کە کون بێت یان بڕژێت. ڕێدۆزی گایرۆی ئاڕاستە و دووریپێوی تایەکانی بەکارهێنا بۆ هەژماردنی ئاڕاستە و دووری گەڕانەوە بۆ مۆدیوڵی مانگ. ئەمە گرنگ بوو، چونکە ئاسمانەوانەکان ڕێگەیان پێدرابوو تەنیا ئەوەندە دوور بکەونەوە کە ئەگەر ئێمە تێک بچین بتوانن بە پێ بگەڕێنەوە.\n\nلە ناو ئەو سنوورانەدا ئەوەمان کرد کە نیشتنەوەی تەنیا ناتوانێت. ئەپۆلۆ 15 27.9 km، ئەپۆلۆ 16 26.7 km، و ئەپۆلۆ 17 35.9 km ی بڕی، و ئامراز و نموونە و ئاسمانەوانەکانی گەیاندە شوێنی بەردە دەرکەوتووەکان کە چەندین کیلۆمەتر لە شوێنی نیشتنەوە دوور بوون. لە ئەپۆلۆ 17، چەپەری شکاوی ئەو ئۆتۆمبێلە (بە چەکوشێک شکابوو) بە تەیپی لکێنەر و نەخشە چاک کرایەوە بۆ ئەوەی تۆز لە ئەلیکترۆنیکەکان دوور بخرێتەوە. کامێرای تەلەڤزیۆنی ڕەنگاوڕەنگ لەسەر ئانتێنای چەتری S-band ی ڕێکخراو لە زەوییەوە فەرمانی پێدرا، و هەر هەڵفڕینێکی مۆدیوڵی مانگی نیشان دا. دوای ئەوە ئاسمانەوانەکان پارکیان کردین، و باترییەکان بە هێواشی مردن.",
      },
    },

    specs: [
      {
        k: { en: "Coordinates", ku: "پێوەرە شوێنییەکان" },
        v: "A15 26.1322° N, 3.6339° E · A16 8.9730° S, 15.5002° E · A17 20.1908° N, 30.7717° E",
      },
      {
        k: { en: "Catalog IDs", ku: "ناسنامەی کاتالۆگ" },
        v: "NSSDCA 1971-063C · 1972-031C · 1972-096C",
      },
      {
        k: { en: "Mass", ku: "کێش" },
        v: {
          en: "210 kg on Earth (~34 kg in lunar gravity)",
          ku: "210 kg لەسەر زەوی (~34 kg لە خوڕی مانگدا)",
        },
      },
      {
        k: { en: "Drive", ku: "جووڵاندن" },
        v: {
          en: "Four wheels, each with a ~0.25 hp electric motor",
          ku: "چوار سووڕان، هەریەکەیان مۆتۆڕێکی کارەبایی ~0.25 hp",
        },
      },
      {
        k: { en: "Power", ku: "وزە" },
        v: {
          en: "Two 36-volt silver-zinc batteries, non-rechargeable",
          ku: "دوو باتری زیو-زنکی 36 ڤۆڵت، دووبارە بار ناکرێنەوە",
        },
      },
      {
        k: { en: "Tyres", ku: "تایەکان" },
        v: {
          en: "Wire-mesh of woven piano wire, ~81 cm diameter, titanium chevrons",
          ku: "تۆڕی تەل لە تەلی پیانۆی چنراو، ~81 cm دەور، ڕووی تیتانیۆم",
        },
      },
      {
        k: { en: "Distances driven", ku: "ماوەی ڕۆیشتن" },
        v: "A15 27.9 km · A16 26.7 km · A17 35.9 km",
      },
      {
        k: { en: "Navigation", ku: "ڕێدۆزی" },
        v: {
          en: "Directional gyro + wheel odometers; steering on front and rear axles",
          ku: "گایرۆی ئاڕاستە + دووریپێوی تایەکان؛ ئاڕاستەکردن لەسەر تەوەری پێشەوە و دواوە",
        },
      },
    ],

    tradeoffs: [
      {
        en: "Wire-mesh tyres cost traction engineering but removed puncture and leak risk. In vacuum and dust, no air meant no failure mode.",
        ku: "تایەی تۆڕی تەل ئەندازیاری گرتنی زیاتری دەخواست، بەڵام مەترسی کونبوون و بڕژانی هەوای نەهێشت. لە بۆشایی و تۆزدا، نەبوونی هەوا واتە نەبوونی شێوازی شکست.",
      },
      {
        en: "Non-rechargeable silver-zinc batteries gave high energy per kg and no charging hardware, at the price of a fixed total range.",
        ku: "باتری زیو-زنکی دووبارە-بارنەکراو وزەی بەرزی بۆ هەر kg یەک دا و ئامێری بارکردنەوەی نەبوو، بە بەهای مەودایەکی کۆی جێگیر.",
      },
      {
        en: "The walk-back limit capped exploration to what the crew could walk home from, trading range for survival if the rover died.",
        ku: "سنووری گەڕانەوە بە پێ گەڕانی سنووردار کرد بۆ ئەو مەوداییەی ئاسمانەوانەکان بتوانن بە پێ بگەڕێنەوە، مەودا گۆڕدرایەوە بە ژیان ئەگەر ئۆتۆمبێلەکە بمرێت.",
      },
    ],

    radio: {
      en: "Colour TV camera steered from Earth via an S-band high-gain umbrella antenna; VHF voice links to the crew's suits and the Lunar Module.",
      ku: "کامێرای تەلەڤزیۆنی ڕەنگاوڕەنگ لە زەوییەوە ڕێکدەخرا بە ئانتێنای چەتری بەرزی S-band؛ بەستەری دەنگی VHF بۆ بەرگی ئاسمانەوانەکان و مۆدیوڵی مانگ.",
    },

    quiz: [
      {
        q: {
          en: "How much do I weigh on the Moon?",
          ku: "لەسەر مانگ کێشم چەندە؟",
        },
        options: [
          { en: "34 kg", ku: "34 kg" },
          { en: "210 kg", ku: "210 kg" },
          { en: "1,000 kg", ku: "1,000 kg" },
        ],
        answer: 0,
        why: {
          en: "Moon gravity is about 1/6 of Earth's, so my 210 kg weighs about 34 kg there.",
          ku: "خوڕی مانگ نزیکەی 1/6ی زەوییە، بۆیە 210 kg ـەکەم لەوێ نزیکەی 34 kg دەکێشێت.",
        },
      },
      {
        q: {
          en: "What are my tyres made of?",
          ku: "تایەکانم لە چی دروست کراون؟",
        },
        options: [
          { en: "Rubber filled with air", ku: "لاستیکی پڕ لە هەوا" },
          { en: "Woven piano wire", ku: "تەلی پیانۆی چنراو" },
          { en: "Moon rock", ku: "بەردی مانگ" },
        ],
        answer: 1,
        why: {
          en: "My bouncy tyres are woven from piano wire, so they cannot go flat.",
          ku: "تایە جووڵاوەکانم لە تەلی پیانۆ چنراون، بۆیە کون نابن.",
        },
      },
      {
        q: {
          en: "How far did we drive on Apollo 17?",
          ku: "لە ئەپۆلۆ 17 چەند ڕۆیشتین؟",
        },
        options: [
          { en: "3.5 km", ku: "3.5 km" },
          { en: "350 km", ku: "350 km" },
          { en: "35.9 km", ku: "35.9 km" },
        ],
        answer: 2,
        why: {
          en: "On Apollo 17 we drove 35.9 km, the longest of the three missions.",
          ku: "لە ئەپۆلۆ 17 ئێمە 35.9 km ڕۆیشتین، درێژترینی هەر سێ ئەرکەکە.",
        },
      },
    ],

    pingReply: {
      en: "My wheels are still, but my tracks are still here in the dust. Thank you for following them. 🙂",
      ku: "سووڕانەکانم ڕاوەستاون، بەڵام شوێنپێکانم هێشتا لە تۆزەکەدا ماون. سوپاس کە شوێنیان دەکەویت. 🙂",
    },
  },

  /* ===================================================================
     3. ALSEP SCIENTIFIC PACKAGES
     =================================================================== */
  {
    id: "alsep",
    num: 3,
    sector: "moon",
    icon: "📡",
    name: {
      en: "ALSEP Scientific Packages (Apollo 12–17)",
      ku: "پاکێجە زانستییەکانی ALSEP (ئەپۆلۆ 12–17)",
    },
    tagline: {
      en: "We are five stations that listened to the Moon for years.",
      ku: "ئێمە پێنج وێستگەین کە چەند ساڵێک گوێمان لە مانگ گرت.",
    },
    status: {
      en: "DORMANT · SWITCHED OFF 1977",
      ku: "نووستوو · 1977 کوژێنرایەوە",
    },
    statusType: "dormant",

    passport: {
      nssdca: "1969-099C · 1971-008C · 1971-063C · 1972-031C · 1972-096C",
      launch: {
        en: "Apollo 12, 14, 15, 16, 17 (1969–1972)",
        ku: "ئەپۆلۆ 12، 14، 15، 16، 17 (1969–1972)",
      },
      arrival: {
        en: "Deployed 1969–1972 by Apollo astronauts",
        ku: "لە 1969–1972 لەلایەن ئاسمانەوانەکانی ئەپۆلۆوە دانران",
      },
      end: {
        en: "Commanded off 30 September 1977",
        ku: "لە 30ی ئەیلوولی 1977 بە فەرمان کوژێنرانەوە",
      },
      location: {
        en: "Ocean of Storms · Fra Mauro · Hadley Rille · Descartes · Taurus-Littrow",
        ku: "دەریای تۆفانەکان · فرا ماورۆ · هادلی ڕیل · دێکارت · تاوروس-لیترۆ",
      },
      coords:
        "A12 3.01° S 23.42° W · A14 3.65° S 17.47° W · A15 26.1322° N 3.6339° E · A16 8.9730° S 15.5002° E · A17 20.1908° N 30.7717° E",
      mass: {
        en: "Five separate multi-instrument packages (one per mission)",
        ku: "پێنج پاکێجی جیای فرە-ئامێر (یەک بۆ هەر ئەرکێک)",
      },
      power: {
        en: "SNAP-27 RTGs, ~70 watts, plutonium-238",
        ku: "SNAP-27 RTG، ~70 وات، پلوتۆنیۆم-238",
      },
      dormancy: {
        en: "Commanded off on 30 Sep 1977 to end Earth-based operations",
        ku: "لە 30ی ئەیلوولی 1977 بە فەرمان کوژێنرانەوە بۆ کۆتایی هێنان بە کاری زەوی",
      },
      discovery: {
        en: "Over 13,000 seismic events; mapped the Moon's crust, mantle and core; measured solar wind and heat flow",
        ku: "زیاتر لە 13,000 ڕووداوی لەرزەیی؛ توێکڵ و مانتڵ و ناوکی مانگی نەخشاند؛ با خۆری و ڕەوتی گەرمی پێوا",
      },
    },

    sites: [
      {
        label: {
          en: "Apollo 12 ALSEP (Ocean of Storms)",
          ku: "ALSEPی ئەپۆلۆ 12 (دەریای تۆفانەکان)",
        },
        lat: -3.01,
        lon: -23.42,
      },
      {
        label: {
          en: "Apollo 14 ALSEP (Fra Mauro)",
          ku: "ALSEPی ئەپۆلۆ 14 (فرا ماورۆ)",
        },
        lat: -3.65,
        lon: -17.47,
      },
      {
        label: {
          en: "Apollo 15 ALSEP (Hadley Rille)",
          ku: "ALSEPی ئەپۆلۆ 15 (هادلی ڕیل)",
        },
        lat: 26.9322,
        lon: 2.8339,
      },
      {
        label: {
          en: "Apollo 16 ALSEP (Descartes)",
          ku: "ALSEPی ئەپۆلۆ 16 (دێکارت)",
        },
        lat: -8.173,
        lon: 14.7002,
      },
      {
        label: {
          en: "Apollo 17 ALSEP (Taurus-Littrow)",
          ku: "ALSEPی ئەپۆلۆ 17 (تاوروس-لیترۆ)",
        },
        lat: 20.9908,
        lon: 29.9717,
      },
    ],

    funFacts: [
      {
        en: "My “battery” is an RTG: warm plutonium-238 that kept me alive through freezing nights 14 Earth days long! 🌙",
        ku: "«باتری»یەکەم RTG ـە: پلوتۆنیۆم-238ی گەرم کە لە شەوە ساردەکانی 14 ڕۆژی زەوی دا زیندووی هێشتمەوە! 🌙",
      },
      {
        en: "We recorded over 13,000 moonquakes and meteorite hits. After one crash the Moon rang for nearly an hour! 🔔",
        ku: "زیاتر لە 13,000 بوومەلەرزە و کەوتنی ئەستێرەپارچەمان تۆمار کرد. دوای یەک پێکدادان مانگ نزیکەی کاتژمێرێک زرنگایەوە! 🔔",
      },
      {
        en: "Five stations listened until Earth switched us off on Sept 30, 1977, almost 8 years of Moon news! 📰",
        ku: "پێنج وێستگە گوێمان گرت تا زەوی لە 30ی ئەیلوولی 1977 کوژاندینەوە، نزیکەی 8 ساڵ هەواڵی مانگ! 📰",
      },
    ],

    story: {
      junior: {
        en: "Beep… beep… 📡 We are the ALSEP science stations! Astronauts set us up on five Apollo missions: 12, 14, 15, 16 and 17. Think of us as five little earthquake and weather stations, but on the Moon!\n\nA Moon night lasts 14 Earth days and is freezing 🥶, so solar panels were not enough for us. Our secret was a battery that never ran out: an RTG powered by plutonium-238, giving about 70 watts, like a bright light bulb 💡.\n\nWe listened to the Moon for years. We recorded over 13,000 moonquakes and space-rock crashes ☄️, and felt the Sun's wind blowing past. Scientists used our data to learn what is inside the Moon: crust, mantle and core!\n\nOn September 30, 1977, Earth sent one last command: switch off. We fell silent. Ready for the quiz? 🎧",
        ku: "بیپ… بیپ… 📡 ئێمە وێستگە زانستییەکانی ALSEPین! ئاسمانەوانەکان لە پێنج ئەرکی ئەپۆلۆدا دایاننایین: 12، 14، 15، 16 و 17. وا بزانە ئێمە پێنج وێستگەی بچووکی بوومەلەرزە و کەشوهەوایین، بەڵام لەسەر مانگ!\n\nشەوی مانگ 14 ڕۆژی زەوی دەخایەنێت و زۆر ساردە 🥶، بۆیە پانێڵی خۆری بەس نەبوو بۆمان. نهێنییەکەمان باترییەک بوو کە هەرگیز تەواو نەدەبوو: RTGیەک بە پلوتۆنیۆم-238 کە نزیکەی 70 وات وزەی دەدا، وەک گڵۆپێکی ڕووناک 💡.\n\nچەند ساڵێک گوێمان لە مانگ گرت. زیاتر لە 13,000 بوومەلەرزە و پێکدادانی بەردی فەزامان تۆمار کرد ☄️، و هەستمان بە با خۆرییەکە کرد کە تێدەپەڕی. زانایان داتاکەی ئێمەیان بەکارهێنا بۆ زانینی ئەوەی لە ناو مانگدایە: توێکڵ، مانتڵ و ناوک!\n\nلە 30ی ئەیلوولی 1977 زەوی یەک فەرمانی کۆتایی نارد: بکوژێنەوە. ئێمە بێدەنگ بووین. ئامادەی تاقیکردنەوەیت؟ 🎧",
      },
      specialist: {
        en: "We are the Apollo Lunar Surface Experiments Packages, deployed on Apollo 12 (Ocean of Storms), 14 (Fra Mauro), 15 (Hadley Rille), 16 (Descartes) and 17 (Taurus-Littrow). Each package was a central station plus a cluster of instruments, fed by a SNAP-27 radioisotope thermoelectric generator delivering ~70 W from plutonium-238 decay. Solar panels with batteries were rejected: a lunar night lasts about 14 Earth days at roughly −170 °C, and a battery big enough to span it would have outweighed the science payload.\n\nOur instruments included passive seismometers on Apollo 12, 14, 15 and 16, a magnetometer, a solar wind spectrometer, heat-flow probes on Apollo 15 and 17, and active seismic profiling with explosive charges. The four-station seismic network let analysts triangulate events. We logged over 13,000 seismic events: thermal quakes, meteoroid impacts, shallow quakes, and deep moonquakes tied to Earth's tides. Impacts of spent stages gave calibrated sources; one shook the Moon for close to an hour.\n\nFrom the arrival times, researchers mapped the Moon's crust, mantle and core, finding a small core and a seismically quiet but not dead interior. Heat-flow data tracked the interior's thermal state. The data stream ran for almost eight years, until budget limits led controllers to command us off on 30 September 1977. We were not worn out. We were switched off while still listening.",
        ku: "ئێمە پاکێجە ئەزموونەکانی ڕووی مانگی ئەپۆلۆین، لە ئەپۆلۆ 12 (دەریای تۆفانەکان)، 14 (فرا ماورۆ)، 15 (هادلی ڕیل)، 16 (دێکارت) و 17 (تاوروس-لیترۆ) دانران. هەر پاکێجێک وێستگەیەکی ناوەندی بوو لەگەڵ کۆمەڵە ئامێرێک، کە لە SNAP-27 RTGیەکەوە وزەی وەردەگرت و ~70 W ی لە تێکچوونی پلوتۆنیۆم-238 دەدا. پانێڵی خۆری لەگەڵ باتری ڕەتکرایەوە: شەوی مانگ نزیکەی 14 ڕۆژی زەوی دەخایەنێت لە نزیکەی −170 °C، و باترییەک بەس بێت بۆ ئەو ماوەیە لە بارستەی ئامێرە زانستییەکان قورسترە دەبوو.\n\nئامێرەکانمان لەرزەپێوی ئاسایی لەسەر ئەپۆلۆ 12، 14، 15 و 16، مەگنیتۆمەتەر، سپێکترۆمەتەری با خۆری، پرۆبی ڕەوتی گەرمی لەسەر ئەپۆلۆ 15 و 17، و پرۆفایلی لەرزەیی چالاک بە بارگەی تەقینەوە بوون. تۆڕی لەرزەیی چوار وێستگە ڕێگەی بە شیکارەکان دا ڕووداوەکان سێگۆشە بکەن. زیاتر لە 13,000 ڕووداوی لەرزەییمان تۆمار کرد: لەرزەی گەرمایی، کەوتنی ئەستێرەپارچە، لەرزەی کەم-قووڵ، و بوومەلەرزەی قووڵ کە بە مەد و جەزری زەوییەوە بەستراون. کەوتنی قۆناغە بەکارهاتووەکان سەرچاوەی پێوانەکراوی دابوون؛ یەکێکیان نزیکەی کاتژمێرێک مانگی لەرزاند.\n\nلە کاتی گەیشتنی شەپۆلەکانەوە، توێژەران توێکڵ و مانتڵ و ناوکی مانگیان نەخشاند، ناوکێکی بچووکیان دۆزییەوە و ناوەوەیەکی لەرزەیی ئارام بەڵام نەمردوو. داتای ڕەوتی گەرمی دۆخی گەرمایی ناوەوەی شوێنپێ کرد. جۆگەی داتاکە نزیکەی هەشت ساڵ بەردەوام بوو، تا سنووری بوودجە وای کرد کۆنترۆڵکارەکان لە 30ی ئەیلوولی 1977 بمانکوژێننەوە. ئێمە هەڵنەوەریبووین. کوژێنرانەوە لە کاتێکدا هێشتا گوێمان دەگرت.",
      },
    },

    specs: [
      {
        k: { en: "Coordinates", ku: "پێوەرە شوێنییەکان" },
        v: "A12 3.01° S 23.42° W · A14 3.65° S 17.47° W · A15 26.1322° N 3.6339° E · A16 8.9730° S 15.5002° E · A17 20.1908° N 30.7717° E",
      },
      {
        k: { en: "Catalog IDs", ku: "ناسنامەی کاتالۆگ" },
        v: "NSSDCA 1969-099C · 1971-008C · 1971-063C · 1972-031C · 1972-096C",
      },
      {
        k: { en: "Power", ku: "وزە" },
        v: {
          en: "SNAP-27 RTG, ~70 W, plutonium-238",
          ku: "SNAP-27 RTG، ~70 W، پلوتۆنیۆم-238",
        },
      },
      {
        k: { en: "Seismology", ku: "لەرزەناسی" },
        v: {
          en: "Passive seismometers (Apollo 12, 14, 15, 16); active seismic profiling with explosive charges",
          ku: "لەرزەپێوی ئاسایی (ئەپۆلۆ 12، 14، 15، 16)؛ پرۆفایلی لەرزەیی چالاک بە بارگەی تەقینەوە",
        },
      },
      {
        k: { en: "Other instruments", ku: "ئامێرەکانی تر" },
        v: {
          en: "Magnetometer, solar wind spectrometer, heat-flow probes (Apollo 15, 17)",
          ku: "مەگنیتۆمەتەر، سپێکترۆمەتەری با خۆری، پرۆبی ڕەوتی گەرمی (ئەپۆلۆ 15، 17)",
        },
      },
      {
        k: { en: "Data returned", ku: "داتای گەڕێنراوە" },
        v: {
          en: "Over 13,000 seismic events recorded",
          ku: "زیاتر لە 13,000 ڕووداوی لەرزەیی تۆمار کرا",
        },
      },
      {
        k: { en: "Night survival", ku: "مانەوە لە شەودا" },
        v: {
          en: "Lunar night ~14 Earth days at about −170 °C; RTG supplies heat and power",
          ku: "شەوی مانگ ~14 ڕۆژی زەوی لە نزیکەی −170 °C؛ RTG گەرمی و وزە دابین دەکات",
        },
      },
      {
        k: { en: "Operations", ku: "کارکردن" },
        v: {
          en: "1969–1972 deployment; commanded off 30 Sep 1977",
          ku: "1969–1972 دانان؛ 30ی ئەیلوولی 1977 بە فەرمان کوژێنرانەوە",
        },
      },
    ],

    tradeoffs: [
      {
        en: "RTG over solar and batteries: higher mass per watt of fuel, but the only practical way to survive a 14-day freezing night.",
        ku: "RTG لە جیاتی خۆری و باتری: کێشی زیاتر بۆ هەر واتێک، بەڵام تاکە ڕێگای کرداری بوو بۆ مانەوە لە شەوێکی ساردی 14 ڕۆژی.",
      },
      {
        en: "Five sites, four seismometers on the network: spread wide enough to triangulate events, at the cost of separate crews and deployments.",
        ku: "پێنج شوێن، چوار لەرزەپێو لە تۆڕەکەدا: بەس بڵاو بوو بۆ سێگۆشەکردنی ڕووداوەکان، بە بەهای دانانی جیاواز بۆ هەر ئەرکێک.",
      },
      {
        en: "Operating forever was never the goal: ground teams and budget limited the mission, so the stations were commanded off while still working.",
        ku: "کارکردنی هەمیشەیی ئامانج نەبوو: تیمەکانی زەوی و بوودجە ئەرکەکەیان سنووردار کرد، بۆیە وێستگەکان لە کاتی کارکردندا کوژێنرانەوە.",
      },
    ],

    radio: {
      en: "S-band uplink for commands and downlink for telemetry, received by NASA's ground tracking network.",
      ku: "S-band ی سەرەوە بۆ فەرمانەکان و S-band ی خوارەوە بۆ تێلێمەتری، لەلایەن تۆڕی شوێنپێکەوتنی زەوی NASA وەردەگیرا.",
    },

    quiz: [
      {
        q: {
          en: "On how many Apollo missions were we set up?",
          ku: "لە چەند ئەرکی ئەپۆلۆدا دانران؟",
        },
        options: [
          { en: "Two", ku: "دوو" },
          { en: "Five", ku: "پێنج" },
          { en: "Ten", ku: "دە" },
        ],
        answer: 1,
        why: {
          en: "Apollo 12, 14, 15, 16 and 17: five missions.",
          ku: "ئەپۆلۆ 12، 14، 15، 16 و 17: پێنج ئەرک.",
        },
      },
      {
        q: {
          en: "How long does a Moon night last?",
          ku: "شەوی مانگ چەند دەخایەنێت؟",
        },
        options: [
          { en: "14 Earth days", ku: "14 ڕۆژی زەوی" },
          { en: "1 hour", ku: "کاتژمێرێک" },
          { en: "1 year", ku: "ساڵێک" },
        ],
        answer: 0,
        why: {
          en: "A Moon night lasts about 14 Earth days and is freezing.",
          ku: "شەوی مانگ نزیکەی 14 ڕۆژی زەوی دەخایەنێت و زۆر ساردە.",
        },
      },
      {
        q: {
          en: "What powered us through the long nights?",
          ku: "چی لە شەوە درێژەکاندا وزەی پێدایین؟",
        },
        options: [
          { en: "Wind", ku: "با" },
          { en: "A wall socket", ku: "پریزی دیوار" },
          { en: "An RTG with plutonium-238", ku: "RTGیەک بە پلوتۆنیۆم-238" },
        ],
        answer: 2,
        why: {
          en: "An RTG gave about 70 watts from plutonium-238, even in the dark.",
          ku: "RTGیەک نزیکەی 70 وات لە پلوتۆنیۆم-238 دەدا، تەنانەت لە تاریکیشدا.",
        },
      },
    ],

    pingReply: {
      en: "My ears are closed, but the Moon has never forgotten what I heard. Thank you for listening back. 🎧",
      ku: "گوێکانم داخراون، بەڵام مانگ هەرگیز ئەوەی لەبیر نەکردووە کە من بیستم. سوپاس کە ئێوە گوێتان گرت. 🎧",
    },
  },

  /* ===================================================================
     4. SURVEYOR LANDERS (1–7)
     =================================================================== */
  {
    id: "surveyor",
    num: 4,
    sector: "moon",
    icon: "🛬",
    name: {
      en: "Surveyor Landers (Surveyor 1–7)",
      ku: "نیشتنەوەگەرەکانی سەرڤەیەر (سەرڤەیەر 1–7)",
    },
    tagline: {
      en: "I was the first American to touch the Moon softly, and I told the truth.",
      ku: "من یەکەمی ئەمەریکی بووم کە بە نەرمی گەیشتمە مانگ، و ڕاستییەکەم گوت.",
    },
    status: {
      en: "DORMANT · FIVE OF SEVEN LANDED",
      ku: "نووستوو · پێنج لە حەوت نیشتنەوە",
    },
    statusType: "dormant",

    passport: {
      nssdca: "1966-045A (Surveyor 1) … 1968-001A (Surveyor 7)",
      launch: {
        en: "Surveyor 1: 30 May 1966",
        ku: "سەرڤەیەر 1: 30ی ئایاری 1966",
      },
      arrival: {
        en: "Surveyor 1 landed 2 June 1966",
        ku: "سەرڤەیەر 1 لە 2ی حوزەیرانی 1966 نیشتەوە",
      },
      end: {
        en: "Surveyor 1 ended 7 January 1967",
        ku: "سەرڤەیەر 1 لە 7ی کانوونی دووەمی 1967 کۆتایی هات",
      },
      location: {
        en: "Oceanus Procellarum (Ocean of Storms), Surveyor 1",
        ku: "دەریای تۆفانەکان (Oceanus Procellarum)، سەرڤەیەر 1",
      },
      coords: "2.474° S, 43.339° W",
      mass: {
        en: "292 kg landed mass",
        ku: "292 kg کێشی دوای نیشتنەوە",
      },
      power: {
        en: "Solar panel + silver-zinc batteries",
        ku: "پانێڵی خۆری + باتری زیو-زنک",
      },
      dormancy: {
        en: "Solar-and-battery power could not survive the long lunar nights; contact ended 7 Jan 1967",
        ku: "وزەی خۆری و باتری نەیتوانی لە شەوە درێژەکانی مانگ بمێنێتەوە؛ پەیوەندی لە 7ی کانوونی دووەمی 1967 تەواو بوو",
      },
      discovery: {
        en: "Lunar soil is firm enough for crewed landers; Surveyor 1 sent 11,237 high-resolution photos",
        ku: "خاکی مانگ بەس توندە بۆ نیشتنەوەگەری ئاسمانەوان؛ سەرڤەیەر 1 11,237 وێنەی بەرزی ڕوونی نارد",
      },
    },

    sites: [
      {
        label: {
          en: "Surveyor 1 (Ocean of Storms)",
          ku: "سەرڤەیەر 1 (دەریای تۆفانەکان)",
        },
        lat: -2.474,
        lon: -43.339,
      },
      {
        label: {
          en: "Surveyor 3 (Apollo 12 neighbour)",
          ku: "سەرڤەیەر 3 (دراوسێی ئەپۆلۆ 12)",
        },
        lat: -2.94,
        lon: -23.34,
      },
      {
        label: {
          en: "Surveyor 5 (Tranquility neighbour)",
          ku: "سەرڤەیەر 5 (دراوسێی ئارامی)",
        },
        lat: 1.46,
        lon: 23.2,
      },
      {
        label: {
          en: "Surveyor 6 (Central Bay)",
          ku: "سەرڤەیەر 6 (کەنداوی ناوەڕاست)",
        },
        lat: 0.47,
        lon: -1.37,
      },
      {
        label: { en: "Surveyor 7 (near Tycho)", ku: "سەرڤەیەر 7 (نزیک تایکۆ)" },
        lat: -40.86,
        lon: -11.44,
      },
    ],

    funFacts: [
      {
        en: "I proved the Moon's ground was firm, like packed sand 🏖️, not a bottomless sea of dust!",
        ku: "سەلماندم زەوی مانگ توندە، وەک لمی گوشراو 🏖️، نەک دەریایەکی بێبنی لە تۆز!",
      },
      {
        en: "Surveyor 1 alone took 11,237 photos, a giant Moon photo album! 📸",
        ku: "سەرڤەیەر 1 بە تەنیا 11,237 وێنەی گرت، ئەلبومێکی گەورەی وێنەی مانگ! 📸",
      },
      {
        en: "In Nov 1969, Apollo 12 astronauts walked to my sister Surveyor 3 and brought home her camera! 🏛️",
        ku: "لە تشرینی دووەمی 1969، ئاسمانەوانەکانی ئەپۆلۆ 12 بە پێ چوون بۆ خوشکەکەم سەرڤەیەر 3 و کامێراکەیان هێنایەوە! 🏛️",
      },
    ],

    story: {
      junior: {
        en: "Hello! 🛬 I am Surveyor, America's first soft lander on the Moon. Before people could land, someone had to check: is the Moon covered in dust so deep it will swallow a spaceship? 😨 That was my job.\n\nOn June 2, 1966, I fired small rockets and landed gently in the Ocean of Storms. After landing I weighed 292 kg, about as heavy as three giant pandas 🐼.\n\nThen my camera got to work. I sent back 11,237 photos 📸, and they showed the ground was firm. My feet barely sank! Five Surveyors (1, 3, 5, 6 and 7) landed safely, but two did not make it. Later, Apollo 12 astronauts walked up to Surveyor 3 and brought home its camera!\n\nI went quiet in January 1967, but I had shown that people could land safely. Can you remember my secrets? Try the quiz! 🚀",
        ku: "سڵاو! 🛬 من سەرڤەیەرم، یەکەم نیشتنەوەگەری نەرمی ئەمەریکا لەسەر مانگ. پێش ئەوەی مرۆڤ بنیشێتەوە، کەسێک دەبوو بپشکنێت: ئایا مانگ بە تۆزێکی ئەوەندە قووڵ داپۆشراوە کە فەزاگەمە قووت دەدات؟ 😨 ئەمە ئەرکی من بوو.\n\nلە 2ی حوزەیرانی 1966 ڕۆکێتی بچووکم داگیرساند و بە نەرمی لە دەریای تۆفانەکان نیشتمەوە. دوای نیشتنەوە 292 kg کێشم بوو، نزیکەی هێندەی سێ پاندای گەورە 🐼.\n\nپاشان کامێراکەم دەستی بە کار کرد. 11,237 وێنەم نارد 📸، و نیشانیان دا زەوییەکە توندە. پێیەکانم تەنیا کەمێک چوونە ناوەوە! پێنج سەرڤەیەر (1، 3، 5، 6 و 7) بە سەلامەتی نیشتنەوە، بەڵام دووانیان نەگەیشتن. دواتر ئاسمانەوانەکانی ئەپۆلۆ 12 بە پێ چوون بۆ سەرڤەیەر 3 و کامێراکەیان هێنایەوە!\n\nلە کانوونی دووەمی 1967 بێدەنگ بووم، بەڵام نیشانم دا مرۆڤ دەتوانێت بە سەلامەتی بنیشێتەوە. نهێنییەکانم لەبیرن؟ تاقیکردنەوەکە بکە! 🚀",
      },
      specialist: {
        en: "I am Surveyor 1, launched 30 May 1966 on an Atlas-Centaur. A solid-propellant retro-rocket removed most of my velocity, then was jettisoned. Radar altimeter and Doppler velocity sensors steered three throttleable liquid-propellant vernier engines for the terminal descent, and I landed on 2 June 1966 at 2.474° S, 43.339° W in Oceanus Procellarum with a landed mass of 292 kg. It was NASA's first soft landing on another world, on the first attempt.\n\nThe design choice was simple: soft landing or nothing. A solid motor gave a large velocity change with minimal mass, but it could not be throttled, so verniers handled the final braking and the engines were cut a few metres above the surface. Power came from a solar panel charging silver-zinc batteries, which kept me working by day. Lunar nights were harder, but I survived several.\n\nMy television camera returned 11,237 high-resolution photos of the surface, footpad impressions and rocks. The answer for Apollo was clear: regolith bore the load. Later missions refined it: Surveyor 3's scoop dug trenches, Surveyor 5 carried an alpha-scattering instrument that found basaltic composition, and Surveyor 6 made the first lift-off from the Moon in a short hop. Five of seven Surveyors landed (1, 3, 5, 6, 7; Surveyors 2 and 4 failed). In November 1969, Apollo 12's crew walked to Surveyor 3 and brought its camera and parts home. My last contact came on 7 January 1967.",
        ku: "من سەرڤەیەر 1م، لە 30ی ئایاری 1966 بە ئەتڵاس-سێنتۆر هەڵدرام. ڕێتڕۆ-ڕۆکێتێکی سووتەمەنی ڕەق بەشی زۆری خێراییەکەمی لابرد، پاشان فڕێدرا. ئاڵتیمیتەری ڕادار و هەستکەرەکانی خێرایی دۆپلەر سێ بزوێنەری ڤێرنیەری شلەمەنی ڕێکخراویان بۆ دابەزینی کۆتایی ڕێنمایی کرد، و لە 2ی حوزەیرانی 1966 لە 2.474° S, 43.339° W لە Oceanus Procellarum نیشتمەوە بە کێشی دوای نیشتنەوەی 292 kg. ئەمە یەکەم نیشتنەوەی نەرمی NASA بوو لەسەر جیهانێکی تر، لە یەکەم هەوڵدا.\n\nهەڵبژاردنی دیزاینەکە ساکار بوو: نیشتنەوەی نەرم یان هیچ. مۆتۆڕی سووتەمەنی ڕەق گۆڕانکارییەکی گەورەی خێرایی بە کەمترین کێش دەدا، بەڵام ڕێکنەدەخرا، بۆیە ڤێرنیەرەکان وەستاندنی کۆتاییان کرد و بزوێنەرەکان چەند مەترێک لەسەر ڕووەکە کوژێنرانەوە. وزە لە پانێڵێکی خۆرییەوە دەهات کە باتری زیو-زنکی بار دەکرد، بۆیە لە ڕۆژدا کارم دەکرد. شەوەکانی مانگ قورستر بوون، بەڵام چەند شەوێکم تێپەڕاند.\n\nکامێرای تەلەڤزیۆنەکەم 11,237 وێنەی بەرزی ڕوونی ڕووەکە، شوێنپێی پێیەکان و بەردەکانی گەڕاندەوە. وەڵامی ئەپۆلۆ ڕوون بوو: ڕیگۆلیس بارەکەی هەڵگرت. ئەرکە دواتر ڕوونتریان کردەوە: سەرڤەیەر 3 بە کەوچکەکەی چاڵی هەڵکەند، سەرڤەیەر 5 ئامێری ئەلفا-پەرشبوونی هەڵگرتبوو کە پێکهاتەی بازەلتی دۆزییەوە، و سەرڤەیەر 6 یەکەم هەڵفڕینی لە مانگ بە بازێکی کورت ئەنجام دا. پێنج لە حەوت سەرڤەیەر نیشتنەوە (1، 3، 5، 6، 7؛ سەرڤەیەر 2 و 4 سەرکەوتوو نەبوون). لە تشرینی دووەمی 1969 ئاسمانەوانەکانی ئەپۆلۆ 12 بە پێ چوون بۆ سەرڤەیەر 3 و کامێرا و بەشەکانیان هێنایەوە. دوایین پەیوەندیم لە 7ی کانوونی دووەمی 1967 بوو.",
      },
    },

    specs: [
      {
        k: {
          en: "Coordinates (Surveyor 1)",
          ku: "پێوەرە شوێنییەکان (سەرڤەیەر 1)",
        },
        v: "2.474° S, 43.339° W",
      },
      {
        k: { en: "Catalog IDs", ku: "ناسنامەی کاتالۆگ" },
        v: "NSSDCA 1966-045A (Surveyor 1) to 1968-001A (Surveyor 7)",
      },
      {
        k: { en: "Landed mass", ku: "کێشی دوای نیشتنەوە" },
        v: "292 kg",
      },
      {
        k: { en: "Descent", ku: "دابەزین" },
        v: {
          en: "Solid retro-rocket, radar altimeter, vernier liquid-propellant engines",
          ku: "ڕێتڕۆ-ڕۆکێتی ڕەق، ئاڵتیمیتەری ڕادار، بزوێنەری ڤێرنیەری سووتەمەنی شل",
        },
      },
      {
        k: { en: "Power", ku: "وزە" },
        v: {
          en: "Solar panel + silver-zinc batteries",
          ku: "پانێڵی خۆری + باتری زیو-زنک",
        },
      },
      {
        k: { en: "Imaging", ku: "وێنەگرتن" },
        v: {
          en: "Television camera; Surveyor 1 returned 11,237 photos",
          ku: "کامێرای تەلەڤزیۆن؛ سەرڤەیەر 1 11,237 وێنەی گەڕاندەوە",
        },
      },
      {
        k: { en: "Surveyor 1 timeline", ku: "کاتی سەرڤەیەر 1" },
        v: {
          en: "Launch 30 May 1966 · landing 2 Jun 1966 · last contact 7 Jan 1967",
          ku: "هەڵدان 30ی ئایاری 1966 · نیشتنەوە 2ی حوزەیرانی 1966 · دوایین پەیوەندی 7ی کانوونی دووەمی 1967",
        },
      },
      {
        k: { en: "Program results", ku: "ئەنجامی بەرنامە" },
        v: {
          en: "5 of 7 landed (1, 3, 5, 6, 7); 2 and 4 failed",
          ku: "5 لە 7 نیشتنەوە (1، 3، 5، 6، 7)؛ 2 و 4 سەرکەوتوو نەبوون",
        },
      },
    ],

    tradeoffs: [
      {
        en: "A solid retro-rocket gave a huge braking burn for little mass but could not be throttled, so verniers handled the final soft touchdown.",
        ku: "ڕێتڕۆ-ڕۆکێتی ڕەق بە کێشێکی کەم وەستاندنێکی گەورەی دا بەڵام ڕێک نەدەخرا، بۆیە ڤێرنیەرەکان نیشتنەوەی نەرمی کۆتاییان بەڕێوە برد.",
      },
      {
        en: "Solar panel plus batteries was light and simple, but made survival through the long lunar night a hard problem.",
        ku: "پانێڵی خۆری لەگەڵ باتری سووک و ساکار بوو، بەڵام مانەوە لە شەوی درێژی مانگ کێشەیەکی قورس بوو.",
      },
      {
        en: "A single television camera was the only eye, giving up wide instruments to keep a lander light enough to launch.",
        ku: "تەنیا یەک کامێرای تەلەڤزیۆن چاو بوو، ئامێری زیاتر دوور خرایەوە بۆ ئەوەی نیشتنەوەگەرەکە بەس سووک بێت بۆ هەڵدان.",
      },
    ],

    radio: {
      en: "Radio link to ground stations of NASA's Deep Space Network, with a high-gain planar antenna for TV and omnidirectional antennas for commands and telemetry.",
      ku: "بەستەری ڕادیۆیی لەگەڵ وێستگەکانی زەوی Deep Space Network ی NASA، بە ئانتێنای تەخت-بەرزی بۆ تەلەڤزیۆن و ئانتێنای هەموو-ئاڕاستە بۆ فەرمان و تێلێمەتری.",
    },

    quiz: [
      {
        q: {
          en: "What was my big job before people landed?",
          ku: "ئەرکە گەورەکەم چی بوو پێش ئەوەی مرۆڤ بنیشێتەوە؟",
        },
        options: [
          {
            en: "Check that the ground was firm",
            ku: "پشکنین کە زەوییەکە توندە",
          },
          { en: "Carry astronauts", ku: "هەڵگرتنی ئاسمانەوانەکان" },
          { en: "Collect Moon rocks", ku: "کۆکردنەوەی بەردی مانگ" },
        ],
        answer: 0,
        why: {
          en: "I checked that the ground was firm instead of deep, swallowing dust.",
          ku: "پشکنیم زەوییەکە توندە نەک تۆزی قووڵی قووتدەر.",
        },
      },
      {
        q: {
          en: "How many photos did Surveyor 1 send back?",
          ku: "سەرڤەیەر 1 چەند وێنەی ناردەوە؟",
        },
        options: [
          { en: "11", ku: "11" },
          { en: "11,237", ku: "11,237" },
          { en: "1 million", ku: "1 ملیۆن" },
        ],
        answer: 1,
        why: {
          en: "Surveyor 1 sent back 11,237 photos.",
          ku: "سەرڤەیەر 1 11,237 وێنەی ناردەوە.",
        },
      },
      {
        q: {
          en: "How many Surveyors landed safely?",
          ku: "چەند سەرڤەیەر بە سەلامەتی نیشتنەوە؟",
        },
        options: [
          { en: "Two", ku: "دوو" },
          { en: "Seven", ku: "حەوت" },
          { en: "Five", ku: "پێنج" },
        ],
        answer: 2,
        why: {
          en: "Surveyors 1, 3, 5, 6 and 7 landed: five of the seven.",
          ku: "سەرڤەیەر 1، 3، 5، 6 و 7 نیشتنەوە: پێنج لە حەوت.",
        },
      },
    ],

    pingReply: {
      en: "I took the first steps, even without feet. Your thanks reach a lander that only wanted to say: it is safe to come. 🛬",
      ku: "من یەکەم هەنگاوەکانم نا، تەنانەت بێ پێ. سوپاسەکەتان دەگاتە نیشتنەوەگەرێک کە تەنیا دەیویست بڵێت: هاتن سەلامەتە. 🛬",
    },
  },
);
