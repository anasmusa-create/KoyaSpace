window.ECHOES = window.ECHOES || { artifacts: [] };
window.ECHOES.artifacts.push(
  /* ===================================================================== */
  /* 5 — SOJOURNER ROVER (MARS PATHFINDER)                                  */
  /* ===================================================================== */
  {
    id: "sojourner",
    num: 5,
    sector: "mars",
    icon: "🤖",
    name: {
      en: "Sojourner Rover (Mars Pathfinder)",
    },
    tagline: {
      en: "I am the little rover who proved wheels could roam another world.",
    },
    status: {
      en: "DORMANT · FIRST WHEELS ON MARS",
    },
    statusType: "dormant",

    passport: {
      nssdca: "1996-068A (Mars Pathfinder)",
      launch: {
        en: "Dec 4, 1996",
      },
      arrival: {
        en: "Jul 4, 1997 (airbag landing)",
      },
      end: {
        en: "Sep 27, 1997 (last contact, sol 83)",
      },
      location: {
        en: "Ares Vallis · Carl Sagan Memorial Station",
      },
      coords: "19.13° N, 33.22° W",
      mass: {
        en: "11.5 kg · microwave-oven sized (65 cm long)",
      },
      power: {
        en: "0.22 m² GaAs solar panel + non-rechargeable lithium-thionyl chloride batteries",
      },
      dormancy: {
        en: "Pathfinder lander (my radio relay) fell silent after 83 sols; I could no longer be commanded",
      },
      discovery: {
        en: "First rover to drive on Mars; APXS rock chemistry backed a warm, wet, flood-carved past",
      },
    },

    sites: [
      {
        label: {
          en: "Carl Sagan Memorial Station, Ares Vallis",
        },
        lat: 19.13,
        lon: -33.22,
      },
    ],

    funFacts: [
      {
        en: "🍳 I was about the size of a microwave oven — and the first wheeled robot ever to drive on Mars!",
      },
      {
        en: "🐌 I crawled about 1 cm every second — slower than a garden snail on a sprint, but I made history.",
      },
      {
        en: "🎂 I was built for 7 Mars days but worked for 83. That's like a 7-day holiday lasting almost 3 months!",
      },
    ],

    story: {
      junior: {
        en: "Hi! I'm Sojourner 🤖, a little robot no bigger than a microwave oven. On July 4, 1997, I rolled down a ramp and became the first wheeled rover ever to drive on another planet. Red dust under my six wheels. What a moment! 🎉\n\nMy home was Ares Vallis, a rocky plain where giant floods once rushed long, long ago. I carried a tiny tool called APXS that could “sniff” a rock and tell what it is made of. Scientists nicknamed my rocks Barnacle Bill and Yogi. What I found hinted that Mars was once warm and wet! 💧\n\nThe team planned for me to work for 7 Mars days. But I kept going for 83 days. That is twelve times longer! ☀️ I was slow as a snail, and I never gave up. My last message reached Earth on September 27, 1997.\n\nNow I sit quietly on the red plain, dreaming of Earth. Do you remember how many days I worked? Let's see if you can ace my quiz! 🚀",
      },
      specialist: {
        en: "I am Sojourner, the microrover of Mars Pathfinder: 11.5 kg, 65 cm long. Pathfinder skipped orbit entirely. It hit the Martian atmosphere directly, slowed on a parachute and retrorockets, then bounced to rest inside airbags on July 4, 1997 in Ares Vallis (19.13° N, 33.22° W), a giant ancient outflow channel.\n\nMy six wheels hang on a rocker-bogie suspension: no springs, only passive pivots that keep every wheel loaded and let me climb obstacles about a wheel diameter tall. The price is speed, roughly 1 cm/s. Power came from a 0.22 m² GaAs panel, backed by lithium-thionyl chloride primary cells that could never be recharged, so my energy budget was finite from the first sol. A small 8-bit computer ran me semi-autonomously, using laser stripes and cameras to spot hazards between daily commands from Earth.\n\nI never spoke to Earth directly. My UHF modem talked only to the lander, which relayed over X-band. My APXS pressed against rocks such as Barnacle Bill and Yogi and measured their elemental chemistry. The compositions pointed to an evolved, silica-rich crust and to a region reshaped by ancient floods, supporting a warmer, wetter early Mars.\n\nI was designed for 7 sols and worked 83. When the lander's last contact came on September 27, 1997, most likely because its battery degraded, I lost my only link to home and went dormant where I stood.",
      },
    },

    specs: [
      {
        k: { en: "Coordinates" },
        v: {
          en: "19.13° N, 33.22° W (Ares Vallis, Carl Sagan Memorial Station)",
        },
      },
      {
        k: { en: "Catalog ID" },
        v: {
          en: "NSSDCA 1996-068A (Mars Pathfinder)",
        },
      },
      {
        k: { en: "Mass / size" },
        v: {
          en: "11.5 kg · ~65 cm long · microwave-oven sized",
        },
      },
      {
        k: { en: "Mobility" },
        v: {
          en: "6 wheels on rocker-bogie suspension · top speed ~1 cm/s",
        },
      },
      {
        k: { en: "Power" },
        v: {
          en: "0.22 m² GaAs solar panel + lithium-thionyl chloride primary batteries (non-rechargeable)",
        },
      },
      {
        k: { en: "Science instrument" },
        v: {
          en: "Alpha Proton X-Ray Spectrometer (APXS) + cameras",
        },
      },
      {
        k: { en: "Communications" },
        v: {
          en: "UHF link to the Pathfinder lander, relayed to Earth by the lander",
        },
      },
      {
        k: { en: "Mission duration" },
        v: {
          en: "83 sols (design life: 7 sols)",
        },
      },
    ],

    tradeoffs: [
      {
        en: "Rocker-bogie: no springs, passive pivots keep six wheels loaded. Light and rugged, but slow (~1 cm/s).",
      },
      {
        en: "A small GaAs panel plus non-rechargeable primary cells saved mass and complexity, but my total energy was finite.",
      },
      {
        en: "Relaying through the lander let me skip a heavy Earth-pointing antenna, but my life depended on the lander's.",
      },
    ],

    radio: {
      en: "UHF modem link to the Pathfinder lander; the lander relayed to Earth via X-band through the Deep Space Network.",
    },

    quiz: [
      {
        q: {
          en: "What was I the first in history to do?",
        },
        options: [
          {
            en: "Fly a helicopter on Mars",
          },
          {
            en: "Drive a wheeled rover on another planet",
          },
          { en: "Bring rocks back to Earth" },
        ],
        answer: 1,
        why: {
          en: "On July 4, 1997 I became the first wheeled rover to drive on another planet. 🤖",
        },
      },
      {
        q: {
          en: "How many Mars days did I work?",
        },
        options: [
          { en: "7 days" },
          { en: "30 days" },
          { en: "83 days" },
        ],
        answer: 2,
        why: {
          en: "I was planned for 7 days but worked 83. That's twelve times longer! ☀️",
        },
      },
      {
        q: {
          en: "What did my APXS tool tell scientists?",
        },
        options: [
          { en: "What rocks are made of" },
          {
            en: "What the weather would be tomorrow",
          },
          {
            en: "How far Earth is from Mars",
          },
        ],
        answer: 0,
        why: {
          en: "APXS “sniffed” rocks like Barnacle Bill and Yogi to learn their ingredients. 🪨",
        },
      },
    ],

    pingReply: {
      en: "Your thank-you crosses the red plain like a warm sunrise. I cannot answer, but I am still here, small and proud.",
    },
  },

  /* ===================================================================== */
  /* 6 — SPIRIT & OPPORTUNITY (MARS EXPLORATION ROVERS)                     */
  /* ===================================================================== */
  {
    id: "mer",
    num: 6,
    sector: "mars",
    icon: "🛞",
    name: {
      en: "Spirit & Opportunity (Mars Exploration Rovers)",
    },
    tagline: {
      en: "We are twin rovers who followed the water across Mars for years.",
    },
    status: {
      en: "DORMANT · TWIN ROVERS OF MARS",
    },
    statusType: "dormant",

    passport: {
      nssdca: "Spirit 2003-027A · Opportunity 2003-032A",
      launch: {
        en: "Spirit Jun 10, 2003 · Opportunity Jul 7, 2003",
      },
      arrival: {
        en: "Jan 2004 (Spirit Jan 4 · Opportunity Jan 25, UTC)",
      },
      end: {
        en: "Spirit Mar 22, 2010 (2,208 sols) · Opportunity Jun 10, 2018 (5,111 sols)",
      },
      location: {
        en: "Gusev Crater (Spirit, “Troy”) · Meridiani Planum (Opportunity, Perseverance Valley)",
      },
      coords:
        "Spirit 14.5684° S, 175.4726° E · Opportunity 2.046° S, 354.634° E",
      mass: {
        en: "185 kg each",
      },
      power: {
        en: "Multi-junction solar arrays + rechargeable batteries",
      },
      dormancy: {
        en: "Spirit trapped in soft sulfate sand; Opportunity silenced by the 2018 global dust storm",
      },
      discovery: {
        en: "Hematite “blueberries”, silica deposits and clays proving ancient habitable liquid water",
      },
    },

    sites: [
      {
        label: {
          en: "Spirit · “Troy”, Gusev Crater",
        },
        lat: -14.5684,
        lon: 175.4726,
      },
      {
        label: {
          en: "Opportunity · Perseverance Valley, Meridiani Planum",
        },
        lat: -2.046,
        lon: -5.366,
      },
    ],

    funFacts: [
      {
        en: "🏃 Opportunity drove 45.16 km. That's longer than a marathon (42.2 km), all on Mars!",
      },
      {
        en: "🫐 We found tiny round “blueberries” made of hematite, clues that water once soaked the ground.",
      },
      {
        en: "📅 We were built to last 90 days. Opportunity worked for almost 15 years. That's like a pencil lasting a lifetime!",
      },
    ],

    story: {
      junior: {
        en: "Hello, Earth! We are Spirit and Opportunity 🛞🛞, twin robot geologists. Each of us weighs 185 kg, about as much as a big lion 🦁. In January 2004 we landed on opposite sides of Mars, bouncing inside giant airbags like beach balls!\n\nOur team planned for just 90 Mars days. But we kept rolling! Spirit explored for 2,208 days, until she got stuck in soft sand at a place called Troy on March 22, 2010. Opportunity kept going for 5,111 days, almost 15 years! She drove 45.16 km, longer than a marathon. 🏃\n\nWe took amazing pictures with our camera eyes 📸 and ground into rocks with our tools. We found tiny round “blueberries” made of hematite and special minerals that form only in water. 💧 Mars once had water that could have helped life!\n\nThen in 2018, a giant dust storm covered the whole planet and hid the Sun from Opportunity. Her solar panels went dark, and on June 10, 2018 she fell silent. 🌪️\n\nCan you remember what trapped Spirit, and what stopped Opportunity? Try our quiz! 🚀",
      },
      specialist: {
        en: "We are Spirit (MER-A) and Opportunity (MER-B): 185 kg each, launched on Delta II rockets on June 10 and July 7, 2003, and landed in January 2004 inside airbags at Gusev Crater (14.5684° S, 175.4726° E) and Meridiani Planum (2.046° S, 354.634° E). The requirement was 90 sols and about 600 m of driving.\n\nSix 26 cm wheels on a rocker-bogie let us cross rocks and sand, while multi-junction solar arrays (~140 W peak) charged rechargeable batteries. That choice freed us from plutonium but tied our lives to dust and seasons. Wind events and dust devils cleaned our panels again and again, an unplanned gift that stretched 90 sols into years.\n\nOur kit: Pancam, Mini-TES, APXS, Mössbauer spectrometer, Microscopic Imager and the Rock Abrasion Tool. Opportunity found hematite spherules, sulfates and later clay minerals at the rim of Endeavour crater. Spirit, dragging a dead right-front wheel, scraped open soil of nearly pure silica near Home Plate, evidence of hot water. Together: ancient liquid water suited to life.\n\nSpirit broke through a crust at Troy in 2009 and sank into soft sulfate sand. She could not tilt toward the winter Sun and went silent on March 22, 2010 after 2,208 sols and 7.73 km. Opportunity drove a record 45.16 km before the 2018 planet-encircling dust storm choked her power. Her last contact was June 10, 2018 (sol 5,111). NASA declared the mission complete on February 13, 2019.",
      },
    },

    specs: [
      {
        k: { en: "Coordinates" },
        v: {
          en: "Spirit 14.5684° S, 175.4726° E · Opportunity 2.046° S, 354.634° E",
        },
      },
      {
        k: { en: "Catalog IDs" },
        v: {
          en: "NSSDCA Spirit 2003-027A · Opportunity 2003-032A",
        },
      },
      {
        k: { en: "Mass" },
        v: { en: "185 kg each" },
      },
      {
        k: { en: "Mobility" },
        v: {
          en: "6 × 26 cm wheels, rocker-bogie · top speed ~5 cm/s",
        },
      },
      {
        k: { en: "Power" },
        v: {
          en: "Multi-junction solar arrays (~140 W peak) + rechargeable batteries",
        },
      },
      {
        k: { en: "Instruments" },
        v: {
          en: "Pancam, Mini-TES, APXS, Mössbauer, Microscopic Imager, Rock Abrasion Tool (RAT)",
        },
      },
      {
        k: { en: "Communications" },
        v: {
          en: "X-band direct to Earth + UHF relay via Mars orbiters",
        },
      },
      {
        k: { en: "Mission duration" },
        v: {
          en: "Spirit 2,208 sols (7.73 km) · Opportunity 5,111 sols (45.16 km) · design life 90 sols",
        },
      },
    ],

    tradeoffs: [
      {
        en: "Solar arrays avoided plutonium, mass and cost, but made us hostage to dust accumulation, winter tilt and global storms.",
      },
      {
        en: "Airbag landing meant no complex descent stage, but needed a clear bounce zone and cost mass in the protective cocoon.",
      },
      {
        en: "Six independently driven wheels gave resilience. Spirit's dead wheel dragged open silica, but soft sand still trapped her.",
      },
    ],

    radio: {
      en: "X-band direct-to-Earth link (low- and high-gain antennas) plus UHF relay through Mars orbiters.",
    },

    quiz: [
      {
        q: { en: "What trapped Spirit?" },
        options: [
          { en: "Soft sand" },
          { en: "A huge cliff" },
          { en: "A runaway rock" },
        ],
        answer: 0,
        why: {
          en: "Spirit sank into soft sand at Troy and could not drive free. 🏜️",
        },
      },
      {
        q: {
          en: "How far did Opportunity drive?",
        },
        options: [
          { en: "4.5 km" },
          { en: "45.16 km" },
          { en: "450 km" },
        ],
        answer: 1,
        why: {
          en: "She drove 45.16 km, longer than a marathon! 🏃",
        },
      },
      {
        q: {
          en: "What silenced Opportunity in 2018?",
        },
        options: [
          {
            en: "A flat battery from too much driving",
          },
          { en: "A big meteorite" },
          {
            en: "A planet-wide dust storm",
          },
        ],
        answer: 2,
        why: {
          en: "The dust storm hid the Sun, so her solar panels could not make power. 🌪️",
        },
      },
    ],

    pingReply: {
      en: "We hear you across the dust and the years. Two wheels stopped, but the water we found still speaks.",
    },
  },

  /* ===================================================================== */
  /* 7 — VIKING 1 & 2 LANDERS                                               */
  /* ===================================================================== */
  {
    id: "viking",
    num: 7,
    sector: "mars",
    icon: "🧪",
    name: {
      en: "Viking 1 & 2 Landers",
    },
    tagline: {
      en: "We are the first to land and listen, and we asked Mars: is anyone there?",
    },
    status: {
      en: "DORMANT · FIRST U.S. MARS LANDERS",
    },
    statusType: "dormant",

    passport: {
      nssdca: "Viking 1 Lander 1975-075C · Viking 2 Lander 1975-083C",
      launch: {
        en: "Viking 1 Aug 20, 1975 · Viking 2 Sep 9, 1975",
      },
      arrival: {
        en: "Viking 1 Jul 20, 1976 · Viking 2 Sep 3, 1976",
      },
      end: {
        en: "Viking 1 Nov 11, 1982 (2,245 sols) · Viking 2 Apr 1980",
      },
      location: {
        en: "Chryse Planitia (Viking 1) · Utopia Planitia (Viking 2)",
      },
      coords: "Viking 1 22.697° N, 48.222° W · Viking 2 47.968° N, 225.71° W",
      mass: {
        en: "572 kg landed mass (each)",
      },
      power: {
        en: "Two SNAP-19 Plutonium-238 RTGs (+ batteries)",
      },
      dormancy: {
        en: "Viking 1: a faulty command overwrote antenna-pointing data; Viking 2: battery failure",
      },
      discovery: {
        en: "First color Mars panoramas, first in-situ soil biology tests, years of Martian weather",
      },
    },

    sites: [
      {
        label: {
          en: "Viking 1 · Chryse Planitia",
        },
        lat: 22.697,
        lon: -48.222,
      },
      {
        label: {
          en: "Viking 2 · Utopia Planitia",
        },
        lat: 47.968,
        lon: 134.29,
      },
    ],

    funFacts: [
      {
        en: "🎹 Each of us weighed 572 kg when we landed, about as much as a big grand piano.",
      },
      {
        en: "🌕 Viking 1 landed on July 20, 1976, exactly seven years after Apollo 11 touched the Moon!",
      },
      {
        en: "🌡️ A tiny nuclear battery kept us warm and powered for years, even on freezing Mars nights.",
      },
    ],

    story: {
      junior: {
        en: "Greetings, Earth! We are Viking 1 and Viking 2 🧪, twin landers. We were the first U.S. spacecraft to land safely and work on Mars! Viking 1 touched down on July 20, 1976, exactly seven years after Apollo 11 reached the Moon. Viking 2 followed on September 3. 🚀\n\nWe had no wheels, so we stayed put. But we had a long robot arm 🦾 that scooped up red soil. We sent home the first color photos of Mars 📸: red rocks under a pinkish sky. We even felt the weather, from chilly winds to winter frost!\n\nOur biggest job was a puzzle: we had three experiments to look for tiny living things in the soil. The answers were confusing, and scientists still talk about them today. 🔬\n\nA small nuclear battery with plutonium powered us through freezing nights. ⚡ Viking 1 worked for 2,245 Mars days, more than six years, until November 11, 1982.\n\nWhat were we searching for in the soil, and what kept us powered? Take our quiz! 🌍",
      },
      specialist: {
        en: "We are the Viking 1 and Viking 2 landers, launched on August 20 and September 9, 1975, each riding with an orbiter. After separation we entered at Mars behind an aeroshell, deployed a supersonic parachute, then fired throttleable hydrazine retrorockets to land on three legs: Viking 1 on July 20, 1976 at Chryse Planitia (22.697° N, 48.222° W) and Viking 2 on September 3, 1976 at Utopia Planitia (47.968° N, 225.71° W). Landed mass: 572 kg.\n\nAt that mass, airbags were not an option. Two SNAP-19 Plutonium-238 RTGs gave us steady power through dust, winter and polar-latitude darkness, with batteries covering peaks. Our sampling arm fed soil to an X-ray fluorescence spectrometer, a GCMS and a biology package of three experiments: Pyrolytic Release, Labeled Release and Gas Exchange. Cameras returned the first color panoramas, and a meteorology boom logged pressure, temperature and wind for years.\n\nThe biology results were ambiguous. Labeled Release produced an initially life-like response, but GCMS detected no organic molecules at its sensitivity. Most scientists concluded that reactive soil chemistry, not life, was responsible; perchlorates found by Phoenix in 2008 added a modern twist. The debate we started endures.\n\nViking 2 failed in April 1980 as its batteries degraded. Viking 1 operated for 2,245 sols until November 11, 1982, when a faulty command during a software update overwrote antenna-pointing data and I could no longer aim at Earth. Contact was never recovered.",
      },
    },

    specs: [
      {
        k: { en: "Coordinates" },
        v: {
          en: "Viking 1 22.697° N, 48.222° W · Viking 2 47.968° N, 225.71° W",
        },
      },
      {
        k: { en: "Catalog IDs" },
        v: {
          en: "NSSDCA Viking 1 Lander 1975-075C · Viking 2 Lander 1975-083C",
        },
      },
      {
        k: { en: "Landed mass" },
        v: { en: "572 kg each" },
      },
      {
        k: { en: "Entry & landing" },
        v: {
          en: "Aeroshell, parachute, throttleable hydrazine retrorockets, three landing legs",
        },
      },
      {
        k: { en: "Power" },
        v: {
          en: "Two SNAP-19 Plutonium-238 RTGs + batteries",
        },
      },
      {
        k: { en: "Instruments" },
        v: {
          en: "Sampling arm, GCMS, X-ray fluorescence, cameras, meteorology boom, 3 biology experiments",
        },
      },
      {
        k: { en: "Communications" },
        v: {
          en: "S-band direct to Earth + UHF relay via the Viking orbiters",
        },
      },
      {
        k: { en: "Mission duration" },
        v: {
          en: "Viking 1: 2,245 sols (to Nov 11, 1982) · Viking 2: to Apr 1980",
        },
      },
    ],

    tradeoffs: [
      {
        en: "RTGs gave steady power through dust, winter and high latitudes, but demanded plutonium handling and launch safety reviews.",
      },
      {
        en: "At 572 kg, a parachute plus retrorockets and legs was the only way to land softly. Airbags could not cushion that mass.",
      },
      {
        en: "Landers were heat-sterilized to protect the life search, but three biology tests with different assumptions gave ambiguous results.",
      },
    ],

    radio: {
      en: "S-band direct-to-Earth link with a steerable high-gain antenna, plus UHF relay through the Viking orbiters.",
    },

    quiz: [
      {
        q: {
          en: "What were our three experiments looking for?",
        },
        options: [
          { en: "Gold and diamonds" },
          {
            en: "Tiny living things in the soil",
          },
          { en: "Alien spaceships" },
        ],
        answer: 1,
        why: {
          en: "Our three biology experiments searched the soil for tiny living things. 🔬",
        },
      },
      {
        q: {
          en: "What powered us through freezing nights?",
        },
        options: [
          { en: "Big wind turbines" },
          { en: "Giant solar sails" },
          {
            en: "A small nuclear battery with plutonium",
          },
        ],
        answer: 2,
        why: {
          en: "Two plutonium-powered RTGs gave us steady heat and electricity. ⚡",
        },
      },
      {
        q: {
          en: "How long did Viking 1 work?",
        },
        options: [
          { en: "More than six years" },
          { en: "Two weeks" },
          { en: "About one year" },
        ],
        answer: 0,
        why: {
          en: "Viking 1 worked for 2,245 Mars days, more than six years, until November 11, 1982. 🗓️",
        },
      },
    ],

    pingReply: {
      en: "Your thank-you warms our old plutonium hearts. We asked if Mars had life, and you kept asking after us.",
    },
  },
);
