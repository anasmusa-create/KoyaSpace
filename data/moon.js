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
    },
    tagline: {
      en: "I am the lander that carried two humans down to the Moon.",
    },
    status: {
      en: "DORMANT · LASER REFLECTOR ACTIVE",
    },
    statusType: "partial",

    passport: {
      nssdca: "1969-059C (CSM 1969-059A)",
      launch: { en: "16 July 1969" },
      arrival: {
        en: "20 July 1969, 20:17:40 UT (landing)",
      },
      end: {
        en: "EASEP ended 27 Aug 1969; the laser reflector is still usable",
      },
      location: {
        en: "Mare Tranquillitatis (Sea of Tranquility)",
      },
      coords: "0.67416° N, 23.47314° E",
      mass: {
        en: "15,103 kg (whole LM); descent stage 2,034 kg dry",
      },
      power: {
        en: "6 silver-zinc batteries; EASEP ran on solar panels",
      },
      dormancy: {
        en: "Mission complete: ascent stage left; EASEP's short-lived instruments went silent",
      },
      discovery: {
        en: "First moonquake recordings from the surface, 21.55 kg of samples, and lasting laser ranging to the Moon",
      },
    },

    sites: [
      {
        label: { en: "Eagle (Tranquility Base)" },
        lat: 0.67416,
        lon: 23.47314,
      },
      {
        label: {
          en: "EASEP (~17 m south of Eagle)",
        },
        lat: 0.6735,
        lon: 23.473,
      },
    ],

    funFacts: [
      {
        en: "My engine worked like a car pedal 🚗: gentle push or full power. That let me hover and pick a safe spot!",
      },
      {
        en: "The mirror I left bounces laser light back to Earth, so scientists can still measure the Moon's distance to millimetres! 📏",
      },
      {
        en: "My bottom half is still on the Moon. It was the launch pad for the astronauts' ride home! 🚀",
      },
    ],

    story: {
      junior: {
        en: "Hello, Earth! 🦅 I am Eagle, the Apollo 11 Lunar Module. I had one big job: carry two astronauts down to the Moon. I weighed 15,103 kg, about the same as a school bus! 🚌\n\nOn July 20, 1969, I fired my engine and sank toward the Sea of Tranquility. My computer beeped with alarms, and boulders waited below! Neil Armstrong took control and steered me to a flat, safe spot. I landed with less than 30 seconds of fuel to spare. Phew! 😅\n\nThe astronauts collected 21.55 kg of Moon rocks 🪨 and left a special mirror 🪞 that bounces laser beams straight back to Earth. Scientists still use it today!\n\nMy bottom half still stands on the Moon like a launch pad nobody needs. Do you remember my story? Try the quiz! 🚀",
      },
      specialist: {
        en: "I am Lunar Module 5, call sign Eagle: 15,103 kg fuelled, built as two stages. My descent stage (2,034 kg dry) carried the landing gear, propellant tanks, silver-zinc batteries and a 45,000 N engine that could be throttled continuously from roughly 10% to 60% thrust, with a near-full-thrust setting; the intermediate band was avoided to limit nozzle erosion. Throttling let the crew trade propellant for hover time, which is exactly what the landing consumed.\n\nOn 20 July 1969 at 20:17:40 UT I touched down in Mare Tranquillitatis. During descent my guidance computer raised 1201 and 1202 overload alarms; its priority-scheduled executive shed low-priority tasks and kept the landing running. Armstrong took semi-manual control to overfly a boulder-strewn crater and set me down with under 30 seconds of propellant margin. Probes on my footpads signalled contact.\n\nAbout 17 m south of me the crew deployed EASEP. Its Passive Seismic Experiment, powered by solar panels, recorded moonquakes until the package ended on 27 August 1969. The Laser Ranging Retroreflector, an array of 100 fused-silica corner cubes with no electronics at all, has no such limit: it has returned Earth-based laser pulses ever since, refining the Moon's distance to millimetre level. The crew returned 21.55 kg of samples, and my descent stage still serves as a monument on the surface, the launch pad I was designed to become.",
      },
    },

    specs: [
      {
        k: { en: "Coordinates" },
        v: "Eagle 0.67416° N, 23.47314° E · EASEP 0.6735° N, 23.4730° E",
      },
      {
        k: { en: "Catalog IDs" },
        v: "NSSDCA 1969-059C (LM) · 1969-059A (CSM)",
      },
      {
        k: { en: "Mass" },
        v: {
          en: "15,103 kg total LM; descent stage 2,034 kg dry; 21.55 kg of samples returned",
        },
      },
      {
        k: { en: "Descent engine" },
        v: {
          en: "45,000 N, throttleable (~10–60% plus near-full-thrust setting)",
        },
      },
      {
        k: { en: "Power" },
        v: {
          en: "6 silver-zinc batteries on the LM; EASEP on solar panels",
        },
      },
      {
        k: { en: "Instruments (EASEP)" },
        v: {
          en: "Passive Seismic Experiment · Laser Ranging Retroreflector (100 corner cubes)",
        },
      },
      {
        k: { en: "Landing" },
        v: {
          en: "20 July 1969, 20:17:40 UT; <30 s propellant margin",
        },
      },
      {
        k: { en: "EASEP duration" },
        v: {
          en: "Deployed 21 July 1969 · ended 27 Aug 1969",
        },
      },
    ],

    tradeoffs: [
      {
        en: "A throttleable descent engine cost extra mass and complexity, but gave the crew hover time to dodge boulders instead of committing to a fixed-thrust burn.",
      },
      {
        en: "The descent stage doubled as launch pad: leaving it behind cut the ascent mass and avoided a separate launch structure.",
      },
      {
        en: "EASEP's retroreflector is passive: no power or electronics to fail, which is why it outlived every powered instrument.",
      },
    ],

    radio: {
      en: "S-band ~2.2 GHz unified link with Earth for voice, telemetry and TV; VHF voice to the astronauts' suits; slow-scan TV at 10 frames per second.",
    },

    quiz: [
      {
        q: { en: "Where did I land?" },
        options: [
          { en: "Ocean of Storms" },
          { en: "Sea of Tranquility" },
          { en: "Hadley Rille" },
        ],
        answer: 1,
        why: {
          en: "I touched down in the Sea of Tranquility on July 20, 1969.",
        },
      },
      {
        q: {
          en: "How much Moon rock did the astronauts collect?",
        },
        options: [
          { en: "2 kg" },
          { en: "100 kg" },
          { en: "21.55 kg" },
        ],
        answer: 2,
        why: {
          en: "They brought home 21.55 kg of Moon rocks.",
        },
      },
      {
        q: {
          en: "What did we leave that still works today?",
        },
        options: [
          { en: "A laser mirror" },
          { en: "A radio" },
          { en: "A TV" },
        ],
        answer: 0,
        why: {
          en: "The mirror still bounces laser light back to Earth.",
        },
      },
    ],

    pingReply: {
      en: "I cannot answer, but my mirror still catches your light and gives it back. That is how I say hello. 🪞",
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
    },
    tagline: {
      en: "We are three Moon Buggies, parked forever where the road ended.",
    },
    status: {
      en: "DORMANT · PARKED ON THE MOON",
    },
    statusType: "dormant",

    passport: {
      nssdca: "1971-063C (LRV-1) · 1972-031C (LRV-2) · 1972-096C (LRV-3)",
      launch: {
        en: "26 Jul 1971 · 16 Apr 1972 · 7 Dec 1972 (with Apollo 15, 16, 17)",
      },
      arrival: {
        en: "Deployed July 1971 · April 1972 · December 1972",
      },
      end: {
        en: "Left parked at the end of each mission's last moonwalk",
      },
      location: {
        en: "Hadley-Apennine · Descartes Highlands · Taurus-Littrow",
      },
      coords:
        "26.1322° N, 3.6339° E · 8.9730° S, 15.5002° E · 20.1908° N, 30.7717° E",
      mass: {
        en: "210 kg on Earth (~34 kg in lunar gravity, about 1/6)",
      },
      power: {
        en: "Two 36-volt silver-zinc batteries (non-rechargeable)",
      },
      dormancy: {
        en: "Batteries are single-use and were left on the surface by design",
      },
      discovery: {
        en: "Vastly widened the astronauts' range (up to 35.9 km on Apollo 17) and let Earth watch Lunar Module liftoffs live",
      },
    },

    sites: [
      {
        label: {
          en: "Apollo 15 LRV (Hadley-Apennine)",
        },
        lat: 26.1322,
        lon: 3.6339,
      },
      {
        label: {
          en: "Apollo 16 LRV (Descartes Highlands)",
        },
        lat: -8.973,
        lon: 15.5002,
      },
      {
        label: {
          en: "Apollo 17 LRV (Taurus-Littrow)",
        },
        lat: 20.1908,
        lon: 30.7717,
      },
    ],

    funFacts: [
      {
        en: "On Earth I weigh 210 kg, but on the Moon only 34 kg, about like a big dog! 🐕",
      },
      {
        en: "My tyres have no air! They are woven from piano wire, so they can never go flat. 🎹",
      },
      {
        en: "I carried a TV camera, so Earth could watch the Lunar Module lift off the Moon, live! 📺",
      },
    ],

    story: {
      junior: {
        en: "Vroom vroom! 🚙 We are the three Moon Buggies, the Lunar Roving Vehicles of Apollo 15, 16 and 17. On Earth I weigh 210 kg, like a big motorbike 🏍️. On the Moon, gravity is only about 1/6 as strong, so I weigh just 34 kg!\n\nI folded up flat inside the Lunar Module, like a camping chair ⛺. Astronauts unfolded me, hopped on and zoomed across the dust. I had four wheels, each with its own tiny electric motor, and bouncy tyres made of woven piano wire! 🎹\n\nThanks to me, astronauts could explore far from their landing spot. On Apollo 17 we drove 35.9 km! We also carried a TV camera 📺 so you could watch the Lunar Module blast off the Moon.\n\nMy batteries can't be recharged, so we are parked on the Moon forever. Ready for a quiz? 🏁",
      },
      specialist: {
        en: "We are LRV-1, -2 and -3: a 210 kg folding aluminium-alloy chassis stowed in a bay of the Lunar Module and deployed by tapes and pulleys. Each wheel has its own ~0.25 hp electric motor with harmonic-drive gearing, and steering is on both axles, giving a tight turning circle. Two 36-volt silver-zinc batteries are non-rechargeable: the best energy per kilogram, and no charging hardware to carry.\n\nOur tyres are ~81 cm wire-mesh woven from zinc-coated piano wire with titanium chevron treads. They give traction and compliance on regolith with no inflation system to puncture or leak. Navigation used a directional gyro and wheel odometers to compute bearing and range back to the Lunar Module. That mattered, because the crews were allowed to travel only as far as they could walk back if we failed.\n\nWithin those limits we did what no landing alone could. Apollo 15 covered 27.9 km, Apollo 16 26.7 km, and Apollo 17 35.9 km, carrying tools, samples and crews to outcrops kilometres from the landing site. On Apollo 17, a fender broken by a hammer was repaired with duct tape and map sheets to keep dust off the electronics. A colour TV camera on a steerable S-band umbrella antenna was commanded from Earth, and showed each Lunar Module liftoff. Then the crews parked us, and the batteries slowly died.",
      },
    },

    specs: [
      {
        k: { en: "Coordinates" },
        v: "A15 26.1322° N, 3.6339° E · A16 8.9730° S, 15.5002° E · A17 20.1908° N, 30.7717° E",
      },
      {
        k: { en: "Catalog IDs" },
        v: "NSSDCA 1971-063C · 1972-031C · 1972-096C",
      },
      {
        k: { en: "Mass" },
        v: {
          en: "210 kg on Earth (~34 kg in lunar gravity)",
        },
      },
      {
        k: { en: "Drive" },
        v: {
          en: "Four wheels, each with a ~0.25 hp electric motor",
        },
      },
      {
        k: { en: "Power" },
        v: {
          en: "Two 36-volt silver-zinc batteries, non-rechargeable",
        },
      },
      {
        k: { en: "Tyres" },
        v: {
          en: "Wire-mesh of woven piano wire, ~81 cm diameter, titanium chevrons",
        },
      },
      {
        k: { en: "Distances driven" },
        v: "A15 27.9 km · A16 26.7 km · A17 35.9 km",
      },
      {
        k: { en: "Navigation" },
        v: {
          en: "Directional gyro + wheel odometers; steering on front and rear axles",
        },
      },
    ],

    tradeoffs: [
      {
        en: "Wire-mesh tyres cost traction engineering but removed puncture and leak risk. In vacuum and dust, no air meant no failure mode.",
      },
      {
        en: "Non-rechargeable silver-zinc batteries gave high energy per kg and no charging hardware, at the price of a fixed total range.",
      },
      {
        en: "The walk-back limit capped exploration to what the crew could walk home from, trading range for survival if the rover died.",
      },
    ],

    radio: {
      en: "Colour TV camera steered from Earth via an S-band high-gain umbrella antenna; VHF voice links to the crew's suits and the Lunar Module.",
    },

    quiz: [
      {
        q: {
          en: "How much do I weigh on the Moon?",
        },
        options: [
          { en: "34 kg" },
          { en: "210 kg" },
          { en: "1,000 kg" },
        ],
        answer: 0,
        why: {
          en: "Moon gravity is about 1/6 of Earth's, so my 210 kg weighs about 34 kg there.",
        },
      },
      {
        q: {
          en: "What are my tyres made of?",
        },
        options: [
          { en: "Rubber filled with air" },
          { en: "Woven piano wire" },
          { en: "Moon rock" },
        ],
        answer: 1,
        why: {
          en: "My bouncy tyres are woven from piano wire, so they cannot go flat.",
        },
      },
      {
        q: {
          en: "How far did we drive on Apollo 17?",
        },
        options: [
          { en: "3.5 km" },
          { en: "350 km" },
          { en: "35.9 km" },
        ],
        answer: 2,
        why: {
          en: "On Apollo 17 we drove 35.9 km, the longest of the three missions.",
        },
      },
    ],

    pingReply: {
      en: "My wheels are still, but my tracks are still here in the dust. Thank you for following them. 🙂",
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
    },
    tagline: {
      en: "We are five stations that listened to the Moon for years.",
    },
    status: {
      en: "DORMANT · SWITCHED OFF 1977",
    },
    statusType: "dormant",

    passport: {
      nssdca: "1969-099C · 1971-008C · 1971-063C · 1972-031C · 1972-096C",
      launch: {
        en: "Apollo 12, 14, 15, 16, 17 (1969–1972)",
      },
      arrival: {
        en: "Deployed 1969–1972 by Apollo astronauts",
      },
      end: {
        en: "Commanded off 30 September 1977",
      },
      location: {
        en: "Ocean of Storms · Fra Mauro · Hadley Rille · Descartes · Taurus-Littrow",
      },
      coords:
        "A12 3.01° S 23.42° W · A14 3.65° S 17.47° W · A15 26.1322° N 3.6339° E · A16 8.9730° S 15.5002° E · A17 20.1908° N 30.7717° E",
      mass: {
        en: "Five separate multi-instrument packages (one per mission)",
      },
      power: {
        en: "SNAP-27 RTGs, ~70 watts, plutonium-238",
      },
      dormancy: {
        en: "Commanded off on 30 Sep 1977 to end Earth-based operations",
      },
      discovery: {
        en: "Over 13,000 seismic events; mapped the Moon's crust, mantle and core; measured solar wind and heat flow",
      },
    },

    sites: [
      {
        label: {
          en: "Apollo 12 ALSEP (Ocean of Storms)",
        },
        lat: -3.01,
        lon: -23.42,
      },
      {
        label: {
          en: "Apollo 14 ALSEP (Fra Mauro)",
        },
        lat: -3.65,
        lon: -17.47,
      },
      {
        label: {
          en: "Apollo 15 ALSEP (Hadley Rille)",
        },
        lat: 26.9322,
        lon: 2.8339,
      },
      {
        label: {
          en: "Apollo 16 ALSEP (Descartes)",
        },
        lat: -8.173,
        lon: 14.7002,
      },
      {
        label: {
          en: "Apollo 17 ALSEP (Taurus-Littrow)",
        },
        lat: 20.9908,
        lon: 29.9717,
      },
    ],

    funFacts: [
      {
        en: "My “battery” is an RTG: warm plutonium-238 that kept me alive through freezing nights 14 Earth days long! 🌙",
      },
      {
        en: "We recorded over 13,000 moonquakes and meteorite hits. After one crash the Moon rang for nearly an hour! 🔔",
      },
      {
        en: "Five stations listened until Earth switched us off on Sept 30, 1977, almost 8 years of Moon news! 📰",
      },
    ],

    story: {
      junior: {
        en: "Beep… beep… 📡 We are the ALSEP science stations! Astronauts set us up on five Apollo missions: 12, 14, 15, 16 and 17. Think of us as five little earthquake and weather stations, but on the Moon!\n\nA Moon night lasts 14 Earth days and is freezing 🥶, so solar panels were not enough for us. Our secret was a battery that never ran out: an RTG powered by plutonium-238, giving about 70 watts, like a bright light bulb 💡.\n\nWe listened to the Moon for years. We recorded over 13,000 moonquakes and space-rock crashes ☄️, and felt the Sun's wind blowing past. Scientists used our data to learn what is inside the Moon: crust, mantle and core!\n\nOn September 30, 1977, Earth sent one last command: switch off. We fell silent. Ready for the quiz? 🎧",
      },
      specialist: {
        en: "We are the Apollo Lunar Surface Experiments Packages, deployed on Apollo 12 (Ocean of Storms), 14 (Fra Mauro), 15 (Hadley Rille), 16 (Descartes) and 17 (Taurus-Littrow). Each package was a central station plus a cluster of instruments, fed by a SNAP-27 radioisotope thermoelectric generator delivering ~70 W from plutonium-238 decay. Solar panels with batteries were rejected: a lunar night lasts about 14 Earth days at roughly −170 °C, and a battery big enough to span it would have outweighed the science payload.\n\nOur instruments included passive seismometers on Apollo 12, 14, 15 and 16, a magnetometer, a solar wind spectrometer, heat-flow probes on Apollo 15 and 17, and active seismic profiling with explosive charges. The four-station seismic network let analysts triangulate events. We logged over 13,000 seismic events: thermal quakes, meteoroid impacts, shallow quakes, and deep moonquakes tied to Earth's tides. Impacts of spent stages gave calibrated sources; one shook the Moon for close to an hour.\n\nFrom the arrival times, researchers mapped the Moon's crust, mantle and core, finding a small core and a seismically quiet but not dead interior. Heat-flow data tracked the interior's thermal state. The data stream ran for almost eight years, until budget limits led controllers to command us off on 30 September 1977. We were not worn out. We were switched off while still listening.",
      },
    },

    specs: [
      {
        k: { en: "Coordinates" },
        v: "A12 3.01° S 23.42° W · A14 3.65° S 17.47° W · A15 26.1322° N 3.6339° E · A16 8.9730° S 15.5002° E · A17 20.1908° N 30.7717° E",
      },
      {
        k: { en: "Catalog IDs" },
        v: "NSSDCA 1969-099C · 1971-008C · 1971-063C · 1972-031C · 1972-096C",
      },
      {
        k: { en: "Power" },
        v: {
          en: "SNAP-27 RTG, ~70 W, plutonium-238",
        },
      },
      {
        k: { en: "Seismology" },
        v: {
          en: "Passive seismometers (Apollo 12, 14, 15, 16); active seismic profiling with explosive charges",
        },
      },
      {
        k: { en: "Other instruments" },
        v: {
          en: "Magnetometer, solar wind spectrometer, heat-flow probes (Apollo 15, 17)",
        },
      },
      {
        k: { en: "Data returned" },
        v: {
          en: "Over 13,000 seismic events recorded",
        },
      },
      {
        k: { en: "Night survival" },
        v: {
          en: "Lunar night ~14 Earth days at about −170 °C; RTG supplies heat and power",
        },
      },
      {
        k: { en: "Operations" },
        v: {
          en: "1969–1972 deployment; commanded off 30 Sep 1977",
        },
      },
    ],

    tradeoffs: [
      {
        en: "RTG over solar and batteries: higher mass per watt of fuel, but the only practical way to survive a 14-day freezing night.",
      },
      {
        en: "Five sites, four seismometers on the network: spread wide enough to triangulate events, at the cost of separate crews and deployments.",
      },
      {
        en: "Operating forever was never the goal: ground teams and budget limited the mission, so the stations were commanded off while still working.",
      },
    ],

    radio: {
      en: "S-band uplink for commands and downlink for telemetry, received by NASA's ground tracking network.",
    },

    quiz: [
      {
        q: {
          en: "On how many Apollo missions were we set up?",
        },
        options: [
          { en: "Two" },
          { en: "Five" },
          { en: "Ten" },
        ],
        answer: 1,
        why: {
          en: "Apollo 12, 14, 15, 16 and 17: five missions.",
        },
      },
      {
        q: {
          en: "How long does a Moon night last?",
        },
        options: [
          { en: "14 Earth days" },
          { en: "1 hour" },
          { en: "1 year" },
        ],
        answer: 0,
        why: {
          en: "A Moon night lasts about 14 Earth days and is freezing.",
        },
      },
      {
        q: {
          en: "What powered us through the long nights?",
        },
        options: [
          { en: "Wind" },
          { en: "A wall socket" },
          { en: "An RTG with plutonium-238" },
        ],
        answer: 2,
        why: {
          en: "An RTG gave about 70 watts from plutonium-238, even in the dark.",
        },
      },
    ],

    pingReply: {
      en: "My ears are closed, but the Moon has never forgotten what I heard. Thank you for listening back. 🎧",
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
    },
    tagline: {
      en: "I was the first American to touch the Moon softly, and I told the truth.",
    },
    status: {
      en: "DORMANT · FIVE OF SEVEN LANDED",
    },
    statusType: "dormant",

    passport: {
      nssdca: "1966-045A (Surveyor 1) … 1968-001A (Surveyor 7)",
      launch: {
        en: "Surveyor 1: 30 May 1966",
      },
      arrival: {
        en: "Surveyor 1 landed 2 June 1966",
      },
      end: {
        en: "Surveyor 1 ended 7 January 1967",
      },
      location: {
        en: "Oceanus Procellarum (Ocean of Storms), Surveyor 1",
      },
      coords: "2.474° S, 43.339° W",
      mass: {
        en: "292 kg landed mass",
      },
      power: {
        en: "Solar panel + silver-zinc batteries",
      },
      dormancy: {
        en: "Solar-and-battery power could not survive the long lunar nights; contact ended 7 Jan 1967",
      },
      discovery: {
        en: "Lunar soil is firm enough for crewed landers; Surveyor 1 sent 11,237 high-resolution photos",
      },
    },

    sites: [
      {
        label: {
          en: "Surveyor 1 (Ocean of Storms)",
        },
        lat: -2.474,
        lon: -43.339,
      },
      {
        label: {
          en: "Surveyor 3 (Apollo 12 neighbour)",
        },
        lat: -2.94,
        lon: -23.34,
      },
      {
        label: {
          en: "Surveyor 5 (Tranquility neighbour)",
        },
        lat: 1.46,
        lon: 23.2,
      },
      {
        label: {
          en: "Surveyor 6 (Central Bay)",
        },
        lat: 0.47,
        lon: -1.37,
      },
      {
        label: { en: "Surveyor 7 (near Tycho)" },
        lat: -40.86,
        lon: -11.44,
      },
    ],

    funFacts: [
      {
        en: "I proved the Moon's ground was firm, like packed sand 🏖️, not a bottomless sea of dust!",
      },
      {
        en: "Surveyor 1 alone took 11,237 photos, a giant Moon photo album! 📸",
      },
      {
        en: "In Nov 1969, Apollo 12 astronauts walked to my sister Surveyor 3 and brought home her camera! 🏛️",
      },
    ],

    story: {
      junior: {
        en: "Hello! 🛬 I am Surveyor, America's first soft lander on the Moon. Before people could land, someone had to check: is the Moon covered in dust so deep it will swallow a spaceship? 😨 That was my job.\n\nOn June 2, 1966, I fired small rockets and landed gently in the Ocean of Storms. After landing I weighed 292 kg, about as heavy as three giant pandas 🐼.\n\nThen my camera got to work. I sent back 11,237 photos 📸, and they showed the ground was firm. My feet barely sank! Five Surveyors (1, 3, 5, 6 and 7) landed safely, but two did not make it. Later, Apollo 12 astronauts walked up to Surveyor 3 and brought home its camera!\n\nI went quiet in January 1967, but I had shown that people could land safely. Can you remember my secrets? Try the quiz! 🚀",
      },
      specialist: {
        en: "I am Surveyor 1, launched 30 May 1966 on an Atlas-Centaur. A solid-propellant retro-rocket removed most of my velocity, then was jettisoned. Radar altimeter and Doppler velocity sensors steered three throttleable liquid-propellant vernier engines for the terminal descent, and I landed on 2 June 1966 at 2.474° S, 43.339° W in Oceanus Procellarum with a landed mass of 292 kg. It was NASA's first soft landing on another world, on the first attempt.\n\nThe design choice was simple: soft landing or nothing. A solid motor gave a large velocity change with minimal mass, but it could not be throttled, so verniers handled the final braking and the engines were cut a few metres above the surface. Power came from a solar panel charging silver-zinc batteries, which kept me working by day. Lunar nights were harder, but I survived several.\n\nMy television camera returned 11,237 high-resolution photos of the surface, footpad impressions and rocks. The answer for Apollo was clear: regolith bore the load. Later missions refined it: Surveyor 3's scoop dug trenches, Surveyor 5 carried an alpha-scattering instrument that found basaltic composition, and Surveyor 6 made the first lift-off from the Moon in a short hop. Five of seven Surveyors landed (1, 3, 5, 6, 7; Surveyors 2 and 4 failed). In November 1969, Apollo 12's crew walked to Surveyor 3 and brought its camera and parts home. My last contact came on 7 January 1967.",
      },
    },

    specs: [
      {
        k: {
          en: "Coordinates (Surveyor 1)",
        },
        v: "2.474° S, 43.339° W",
      },
      {
        k: { en: "Catalog IDs" },
        v: "NSSDCA 1966-045A (Surveyor 1) to 1968-001A (Surveyor 7)",
      },
      {
        k: { en: "Landed mass" },
        v: "292 kg",
      },
      {
        k: { en: "Descent" },
        v: {
          en: "Solid retro-rocket, radar altimeter, vernier liquid-propellant engines",
        },
      },
      {
        k: { en: "Power" },
        v: {
          en: "Solar panel + silver-zinc batteries",
        },
      },
      {
        k: { en: "Imaging" },
        v: {
          en: "Television camera; Surveyor 1 returned 11,237 photos",
        },
      },
      {
        k: { en: "Surveyor 1 timeline" },
        v: {
          en: "Launch 30 May 1966 · landing 2 Jun 1966 · last contact 7 Jan 1967",
        },
      },
      {
        k: { en: "Program results" },
        v: {
          en: "5 of 7 landed (1, 3, 5, 6, 7); 2 and 4 failed",
        },
      },
    ],

    tradeoffs: [
      {
        en: "A solid retro-rocket gave a huge braking burn for little mass but could not be throttled, so verniers handled the final soft touchdown.",
      },
      {
        en: "Solar panel plus batteries was light and simple, but made survival through the long lunar night a hard problem.",
      },
      {
        en: "A single television camera was the only eye, giving up wide instruments to keep a lander light enough to launch.",
      },
    ],

    radio: {
      en: "Radio link to ground stations of NASA's Deep Space Network, with a high-gain planar antenna for TV and omnidirectional antennas for commands and telemetry.",
    },

    quiz: [
      {
        q: {
          en: "What was my big job before people landed?",
        },
        options: [
          {
            en: "Check that the ground was firm",
          },
          { en: "Carry astronauts" },
          { en: "Collect Moon rocks" },
        ],
        answer: 0,
        why: {
          en: "I checked that the ground was firm instead of deep, swallowing dust.",
        },
      },
      {
        q: {
          en: "How many photos did Surveyor 1 send back?",
        },
        options: [
          { en: "11" },
          { en: "11,237" },
          { en: "1 million" },
        ],
        answer: 1,
        why: {
          en: "Surveyor 1 sent back 11,237 photos.",
        },
      },
      {
        q: {
          en: "How many Surveyors landed safely?",
        },
        options: [
          { en: "Two" },
          { en: "Seven" },
          { en: "Five" },
        ],
        answer: 2,
        why: {
          en: "Surveyors 1, 3, 5, 6 and 7 landed: five of the seven.",
        },
      },
    ],

    pingReply: {
      en: "I took the first steps, even without feet. Your thanks reach a lander that only wanted to say: it is safe to come. 🛬",
    },
  },
);
