window.ECHOES = window.ECHOES || { artifacts: [] };
window.ECHOES.artifacts.push(
  {
    id: "phoenix-insight",
    num: 8,
    sector: "mars",
    icon: "🧊",
    name: {
      en: "Phoenix & InSight Landers",
    },
    tagline: {
      en: "We are the pair that tasted Martian ice and heard Mars shake.",
    },
    status: {
      en: "DORMANT · SOLAR POWER LOST",
    },
    statusType: "dormant",

    passport: {
      nssdca: "Phoenix 2007-034A · InSight 2018-042A",
      launch: {
        en: "Phoenix: Aug 4, 2007 · InSight: May 5, 2018",
      },
      arrival: {
        en: "Phoenix: May 25, 2008 · InSight: Nov 26, 2018",
      },
      end: {
        en: "Phoenix: Nov 2, 2008 · InSight: Dec 15, 2022 (1,440 sols)",
      },
      location: {
        en: "Vastitas Borealis arctic plains (Phoenix) & Elysium Planitia (InSight), Mars",
      },
      coords:
        "Phoenix 68.2188° N, 234.2508° E · InSight 4.5024° N, 135.6234° E",
      mass: {
        en: "Phoenix ~350 kg · InSight ~358 kg",
      },
      power: {
        en: "Solar arrays + batteries (both landers)",
      },
      dormancy: {
        en: "Phoenix: polar-winter darkness and ice · InSight: thick dust on its solar arrays",
      },
      discovery: {
        en: "Phoenix tasted subsurface water ice · InSight detected 1,319 marsquakes and sized Mars's liquid core",
      },
    },

    sites: [
      {
        label: {
          en: "Phoenix landing site (Vastitas Borealis)",
        },
        lat: 68.2188,
        lon: -125.7492,
      },
      {
        label: {
          en: "InSight landing site (Elysium Planitia)",
        },
        lat: 4.5024,
        lon: 135.6234,
      },
    ],

    funFacts: [
      {
        en: "Phoenix dug up white chunks of Martian ice 🧊 — and 4 days later they vanished, turning straight into gas!",
      },
      {
        en: "InSight's seismometer could feel shaking smaller than a hydrogen atom ⚛️ — and it caught 1,319 marsquakes!",
      },
      {
        en: "Phoenix landed near Mars's Arctic, about as far north as Arctic Norway ❄️ — so cold that the soil was frozen solid.",
      },
    ],

    story: {
      junior: {
        en: "We are Phoenix and InSight — two robot landers who never met, but we shared one giant job: finding out what Mars is made of! 🚀\n\nI, Phoenix, landed in 2008 on the cold northern plains. I dug a trench with my robot arm and found shiny white chunks. Four days later, they were gone. The ice was turning into gas! 🧊 I even watched snow falling from Martian clouds ❄️. Then winter came. The Sun sank, my solar panels went dark, and I fell asleep in November 2008.\n\nI, InSight, landed in 2018 on a flat, smooth plain called Elysium Planitia. I placed a super-sensitive “ear” on the ground and listened. I heard 1,319 marsquakes 🌍 and learned that Mars has a liquid heart of metal! But dust piled up on my solar panels like a dirty blanket, and in December 2022 I went quiet.\n\nWe are sleeping, not forgotten. Do you remember what we found? Take the quiz and show us! 🧠",
      },
      specialist: {
        en: "We are Phoenix and InSight, two solar-powered landers of ~350 kg each, flown a decade apart.\n\nI, Phoenix, reached Vastitas Borealis (68.2188° N) on May 25, 2008, after a parachute descent and a throttled retro-thruster landing on legs. My 2.35 m robotic arm trenched into the ice table and fed samples to the TEGA ovens and the MECA wet-chemistry laboratory. We confirmed water ice, found perchlorate salts in the soil, and my lidar saw snow falling from clouds. But a polar lander without an RTG has a built-in deadline: as sunlight faded toward polar night, my power budget collapsed, and my last signal came on November 2, 2008.\n\nI, InSight, set down on Elysium Planitia on November 26, 2018, a flat site chosen for a lander that needed to sit still and listen. My arm placed SEIS directly on the regolith and covered it with a Wind and Thermal Shield, because wind and temperature swings are seismic noise; a tether carried its data back to my deck. We logged 1,319 marsquakes, including one near magnitude 5 in May 2022, and combined seismology with radio tracking to find a liquid core roughly 1,830 km in radius.\n\nMy HP3 heat probe was less fortunate. Its self-hammering mole, designed to descend up to 5 m, could not gain friction in the loose soil and never got much deeper than a few tens of centimetres. In the end, dust did what no hardware fault had: it steadily choked my solar arrays until the batteries could no longer sustain operations, and my mission ended on December 15, 2022.",
      },
    },

    specs: [
      {
        k: { en: "Coordinates" },
        v: "Phoenix 68.2188° N, 234.2508° E (−125.7492°) · InSight 4.5024° N, 135.6234° E",
      },
      {
        k: { en: "Catalog IDs (NSSDCA)" },
        v: "Phoenix 2007-034A · InSight 2018-042A",
      },
      {
        k: { en: "Mass" },
        v: {
          en: "Phoenix ~350 kg · InSight ~358 kg",
        },
      },
      {
        k: { en: "Power" },
        v: {
          en: "Solar arrays + batteries on both landers (no RTG)",
        },
      },
      {
        k: { en: "Landing system" },
        v: {
          en: "Parachute + throttled retro-thrusters, landing on legs (both)",
        },
      },
      {
        k: { en: "Key instruments" },
        v: {
          en: "Phoenix: 2.35 m robotic arm, TEGA, MECA, lidar · InSight: SEIS, HP3, RISE",
        },
      },
      {
        k: { en: "Mission duration" },
        v: {
          en: "Phoenix ~5 months (May 25 – Nov 2, 2008) · InSight 1,440 sols (Nov 26, 2018 – Dec 15, 2022)",
        },
      },
      {
        k: { en: "Science results" },
        v: {
          en: "Phoenix: water ice, perchlorate, snowfall · InSight: 1,319 marsquakes, liquid core ~1,830 km radius",
        },
      },
    ],

    tradeoffs: [
      {
        en: "Solar arrays kept both landers light and simple, but tied their lives to sunlight: polar night ended Phoenix, accumulating dust ended InSight.",
      },
      {
        en: "SEIS sits on the ground under a Wind and Thermal Shield, linked by a tether: very quiet data, but a delicate one-shot deployment by a single robotic arm.",
      },
      {
        en: "The HP3 mole needed soil friction to hammer downward; Martian regolith offered too little, showing how unknown ground properties can defeat a sound design.",
      },
    ],

    radio: {
      en: "UHF relay links to Mars orbiters (e.g. Mars Odyssey and MRO); InSight also used X-band direct-to-Earth, and MarCO CubeSats relayed its landing.",
    },

    quiz: [
      {
        q: {
          en: "What did Phoenix dig up in the cold north of Mars?",
        },
        options: [
          { en: "Gold coins" },
          { en: "Water ice" },
          { en: "Green moss" },
        ],
        answer: 1,
        why: {
          en: "Phoenix found white chunks of ice that vanished four days later, turning into gas.",
        },
      },
      {
        q: {
          en: "What did InSight listen for with its super-sensitive “ear”?",
        },
        options: [
          { en: "Marsquakes" },
          { en: "Martian music" },
          { en: "Rocket engines" },
        ],
        answer: 0,
        why: {
          en: "InSight heard 1,319 marsquakes and used them to learn what is inside Mars.",
        },
      },
      {
        q: {
          en: "What covered InSight's solar panels until it ran out of power?",
        },
        options: [
          { en: "Snow" },
          { en: "Mud" },
          { en: "Dust" },
        ],
        answer: 2,
        why: {
          en: "Dust piled up like a dirty blanket and blocked the sunlight InSight needed.",
        },
      },
    ],

    pingReply: {
      en: "Your ping crosses the dust and the dark to find us. We are cold and still, but we hear you — and we remember the ice and the shaking.",
    },
  },

  {
    id: "ingenuity",
    num: 9,
    sector: "mars",
    icon: "🚁",
    name: {
      en: "Ingenuity Mars Helicopter",
    },
    tagline: {
      en: "I was built to fly 5 times. I flew 72.",
    },
    status: {
      en: "GROUNDED · MISSION COMPLETE",
    },
    statusType: "dormant",

    passport: {
      nssdca: "2020-052B",
      launch: {
        en: "Jul 30, 2020 (with Perseverance)",
      },
      arrival: {
        en: "Landed with Perseverance Feb 18, 2021 · dropped to surface Apr 3, 2021 · first flight Apr 19, 2021",
      },
      end: {
        en: "Final (72nd) flight Jan 18, 2024",
      },
      location: {
        en: "Jezero Crater, Mars (final rest: Valinor Hills)",
      },
      coords: "18.499° N, 77.311° E",
      mass: {
        en: "1.8 kg",
      },
      power: {
        en: "Solar-charged lithium-ion batteries",
      },
      dormancy: {
        en: "Rotor blades damaged during the 72nd flight's landing; NASA ended the mission",
      },
      discovery: {
        en: "First powered, controlled aircraft flight on another planet: 72 flights, 17.0 km, 128.8 min",
      },
    },

    sites: [
      {
        label: {
          en: "Valinor Hills, Jezero Crater",
        },
        lat: 18.499,
        lon: 77.311,
      },
    ],

    funFacts: [
      {
        en: "I planned 5 flights and flew 72 — more than 14 times my target! 🎉",
      },
      {
        en: "Mars's air is super thin, so my blades spin ~2,400 times a minute — far faster than a helicopter on Earth! 🌀",
      },
      {
        en: "I carried a postage-stamp-sized piece of wing fabric from the 1903 Wright Flyer ✈️ — the first airplane ever!",
      },
    ],

    story: {
      junior: {
        en: "Hi, I'm Ginny — the Ingenuity Mars Helicopter! 🚁 I'm the youngest, boldest explorer on Mars.\n\nI rode to Mars tucked under the belly of the Perseverance rover, like a baby kangaroo 🦘. I weigh only 1.8 kg — about two bags of sugar! On April 19, 2021, I made history: I lifted off, hovered, and landed. It was the first helicopter flight on another planet! 🎉\n\nFlying on Mars is super hard. The air is so thin that my two carbon-fiber blades must spin about 2,400 times every minute just to lift me. Scientists planned only 5 flights. But I loved the sky so much that I flew 72 times, scouting ahead so Perseverance could find safe roads 🗺️. I even carried a tiny piece of wing cloth from the very first Wright brothers' airplane!\n\nOn my last flight in January 2024, my blades got damaged during landing, and I could not fly any more. Now I rest at Valinor Hills. But do you remember how many times I flew? Take the quiz! 🌟",
      },
      specialist: {
        en: "I am Ingenuity, a 1.8 kg technology demonstrator that treated Mars's atmosphere as an engineering adversary. Surface pressure there is roughly 1% of Earth's, comparable to flying at ~30 km altitude on Earth, though Mars's gravity of about 38% of Earth's helps. To generate lift in such thin air, my two counter-rotating carbon-fiber rotors, 1.2 m in diameter, spin at ~2,400 RPM, with tip speeds around Mach 0.6 in the cold carbon-dioxide atmosphere.\n\nPower was the second constraint. A single solar panel recharged my lithium-ion batteries each sol, and a large share of that energy went to heaters just to survive nights near −90 °C. Because radio signals take minutes to reach Earth, I could not be joystick-flown; I navigated autonomously, tracking ground features with a downward-looking camera and inertial sensors.\n\nOn April 19, 2021, I hovered for roughly 39 seconds at 3 m: the first powered, controlled flight of an aircraft on another planet. I carried a postage-stamp-sized piece of 1903 Wright Flyer wing fabric. My 30-day, five-flight technology demonstration became a campaign of 72 flights, 17.0 km and 128.8 minutes aloft, as an aerial scout for Perseverance.\n\nOn January 18, 2024, my rotor blades were damaged during the landing of flight 72. NASA ended the mission, and I remain at Valinor Hills in Jezero Crater.",
      },
    },

    specs: [
      {
        k: { en: "Coordinates" },
        v: "18.499° N, 77.311° E (Valinor Hills, Jezero Crater)",
      },
      {
        k: { en: "Catalog ID (NSSDCA)" },
        v: "2020-052B",
      },
      {
        k: { en: "Mass" },
        v: "1.8 kg",
      },
      {
        k: { en: "Rotors" },
        v: {
          en: "Two counter-rotating 1.2 m carbon-fiber blades, ~2,400 RPM",
        },
      },
      {
        k: { en: "Power" },
        v: {
          en: "Solar panel charging lithium-ion batteries",
        },
      },
      {
        k: { en: "Planned vs. actual" },
        v: {
          en: "5 flights over 30 days planned · 72 flights flown",
        },
      },
      {
        k: { en: "Flight totals" },
        v: {
          en: "17.0 km over 128.8 minutes of flight time",
        },
      },
      {
        k: { en: "Timeline" },
        v: {
          en: "Dropped Apr 3, 2021 · first flight Apr 19, 2021 · last flight Jan 18, 2024",
        },
      },
    ],

    tradeoffs: [
      {
        en: "A 1.8 kg airframe with carbon-fiber blades made lift possible in thin air, but left very little structural margin against blade damage.",
      },
      {
        en: "A smartphone-class commercial processor saved mass and cost for a high-risk technology demo, accepting more risk than a traditional spacecraft computer.",
      },
      {
        en: "With no GPS and long radio delays, autonomous camera-based navigation was essential, but featureless sand ripples made visual tracking harder.",
      },
    ],

    radio: {
      en: "Short-range ~900 MHz Zigbee link (~250 kbps) to a base station on Perseverance, which relayed data to Earth via Mars orbiters and the Deep Space Network.",
    },

    quiz: [
      {
        q: {
          en: "How many flights did Ingenuity make?",
        },
        options: [
          { en: "5" },
          { en: "72" },
          { en: "100" },
        ],
        answer: 1,
        why: {
          en: "Scientists planned only 5 flights, but Ginny flew 72 times!",
        },
      },
      {
        q: {
          en: "What did Ginny carry from the very first airplane?",
        },
        options: [
          {
            en: "A tiny piece of wing fabric",
          },
          { en: "A rocket engine" },
          { en: "A pilot's hat" },
        ],
        answer: 0,
        why: {
          en: "Ginny carried a postage-stamp-sized piece of fabric from the 1903 Wright Flyer.",
        },
      },
      {
        q: {
          en: "Why must Ginny's blades spin so fast?",
        },
        options: [
          { en: "The blades are very heavy" },
          { en: "Mars is very cold" },
          { en: "Mars's air is very thin" },
        ],
        answer: 2,
        why: {
          en: "In thin air the blades must spin about 2,400 times a minute to make enough lift.",
        },
      },
    ],

    pingReply: {
      en: "Your ping reaches me at Valinor Hills, and I wish I could spin my blades one more time. I may be grounded, but I am still the one who flew first.",
    },
  },
);
