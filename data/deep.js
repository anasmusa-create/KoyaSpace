window.ECHOES = window.ECHOES || { artifacts: [] };
window.ECHOES.artifacts.push(
  /* ============================ 10 · DAWN ============================ */
  {
    id: "dawn",
    num: 10,
    sector: "deep",
    icon: "🌀",
    name: { en: "Dawn Spacecraft" },
    tagline: {
      en: "I visited two worlds, and now I sleep in orbit around one of them.",
    },
    status: { en: "DORMANT · ORBITING CERES" },
    statusType: "dormant",

    passport: {
      nssdca: "2007-043A",
      launch: { en: "Sep 27, 2007" },
      arrival: {
        en: "Vesta orbit 2011–2012 · Ceres orbit from Mar 2015",
      },
      end: {
        en: "Oct 31, 2018 (announced Nov 1, 2018)",
      },
      location: {
        en: "Perpetual, unpowered quarantine orbit around dwarf planet Ceres, Main Asteroid Belt",
      },
      coords: {
        en: "Orbit around Ceres · ~2.77 AU from the Sun",
      },
      mass: { en: "1,217.7 kg at launch" },
      power: {
        en: "Two solar arrays, 19.7 m tip to tip · 3 xenon ion thrusters",
      },
      dormancy: {
        en: "Hydrazine attitude-control fuel ran out, so it can no longer aim its antenna or solar arrays",
      },
      discovery: {
        en: "Cryovolcano Ahuna Mons, organic compounds and briny water reservoirs on Ceres",
      },
    },

    sites: [
      {
        label: { en: "Ceres orbit" },
        au: 2.77,
        angle: 150,
      },
    ],

    funFacts: [
      {
        en: "My ion engines push with the force of one sheet of paper 📄, yet they sped me up by about 40,000 km/h over my journey!",
      },
      {
        en: "I was the first spaceship ever to orbit two worlds beyond Earth: giant rock Vesta and dwarf planet Ceres. 🌍🌍",
      },
      {
        en: "My solar wings are longer than a school bus 🚌, and I will circle Ceres for at least 20 years.",
      },
    ],

    story: {
      junior: {
        en: "Hello, Earth! I am Dawn 🌀. I am a spaceship with giant wings. My solar panels are 19.7 meters wide from tip to tip, longer than a school bus! 🚌☀️\n\nI did not blast through space with a loud roar. I had three ion engines that push out a gentle stream of glowing xenon gas. The push is tiny, only as strong as one sheet of paper resting on your hand. But it never stops! Little by little, I got faster and faster. 🐢➡️🚀\n\nThat is how I became the first spaceship to orbit two different worlds: the giant space rock Vesta, and then the dwarf planet Ceres. On Ceres I found shiny bright spots, a mountain that erupts icy mud (it is called Ahuna Mons), and salty water hidden underground! 💧\n\nIn 2018 the fuel I used for turning ran out. Now I cannot steer or call home. But I keep circling Ceres, quietly, for at least 20 years, so no germs from Earth can ever touch it. 🌙\n\nCan you remember what pushed me through space? 🤔",
      },
      specialist: {
        en: "I am Dawn, NSSDCA 2007-043A, and I traded thrust for efficiency. Three xenon ion thrusters of NSTAR heritage (one firing at a time) delivered a specific impulse near 3,100 s, roughly ten times a chemical engine, but at a peak thrust of only ~91 mN. Reaching highway speed took about four days of continuous thrusting. In return, 425 kg of xenon gave me ~11 km/s of delta-v, enough to capture into orbit around Vesta, leave it, and capture again at Ceres, a sequence no chemical spacecraft of my 1,217.7 kg launch mass could have flown.\n\nThe price was power. At 2.77 AU the solar flux is only ~13% of that at Earth, so two 19.7 m arrays, rated ~10 kW at 1 AU, had to feed the thrusters in the cold, dim belt. My Framing Camera, VIR spectrometer and GRaND mapped Vesta's differentiated crust and Ceres' brine-rich mantle, its organics, and the cryovolcano Ahuna Mons.\n\nThe real mission clock, however, was my hydrazine. Two of my four reaction wheels failed, in 2010 and 2012, so the 45.6 kg hydrazine supply took over attitude control and was rationed against every observation. It ran dry on Oct 31, 2018, leaving me unable to point my high-gain antenna at Earth or my arrays at the Sun. I was left in a stable elliptical orbit that will not decay for at least 20 years, a planetary-protection quarantine so that Ceres, a possible habitat, stays uncontaminated.",
      },
    },

    specs: [
      {
        k: { en: "Catalog ID" },
        v: "NSSDCA 2007-043A",
      },
      {
        k: { en: "Position" },
        v: {
          en: "Orbit around Ceres, ~2.77 AU from the Sun",
        },
      },
      {
        k: { en: "Mass" },
        v: {
          en: "1,217.7 kg launch (~747 kg dry, 425 kg xenon, 45.6 kg hydrazine)",
        },
      },
      {
        k: { en: "Propulsion" },
        v: {
          en: "3 xenon ion thrusters, Isp ~3,100 s, ~91 mN max; hydrazine RCS",
        },
      },
      {
        k: { en: "Power" },
        v: {
          en: "2 solar arrays, 19.7 m tip to tip, ~10 kW at 1 AU",
        },
      },
      {
        k: { en: "Instruments" },
        v: "Framing Camera · VIR · GRaND",
      },
      {
        k: { en: "Communications" },
        v: {
          en: "X-band via ~1.5 m high-gain antenna, Deep Space Network",
        },
      },
      {
        k: { en: "Mission duration" },
        v: { en: "~11 years (2007–2018)" },
      },
    ],

    tradeoffs: [
      {
        en: "Ion propulsion: Isp ~3,100 s but only ~91 mN of thrust. Huge delta-v from 425 kg of xenon, paid for with months of slow spiral manoeuvres.",
      },
      {
        en: "Large 19.7 m arrays (~10 kW at 1 AU) let ion thrusters run at 2.77 AU, but they add mass, flexibility and a big surface for attitude control.",
      },
      {
        en: "After two reaction-wheel failures, the 45.6 kg hydrazine reserve became the mission clock, trading science time for pointing control until it ran out.",
      },
    ],

    radio: {
      en: "X-band telecommunications through NASA's Deep Space Network. After missed contacts on Oct 31 – Nov 1, 2018 and the end of hydrazine, I have been silent.",
    },

    quiz: [
      {
        q: {
          en: "What pushed Dawn through space?",
        },
        options: [
          { en: "Giant rocket fire" },
          {
            en: "Three ion engines using xenon gas",
          },
          { en: "Sails catching the wind" },
        ],
        answer: 1,
        why: {
          en: "Dawn's three ion engines gave a tiny push that never stopped, so it slowly built up huge speed.",
        },
      },
      {
        q: {
          en: "Which two worlds did Dawn orbit?",
        },
        options: [
          { en: "Mars and the Moon" },
          { en: "Mercury and Venus" },
          { en: "Vesta and Ceres" },
        ],
        answer: 2,
        why: {
          en: "Dawn was the first spacecraft to orbit two worlds beyond Earth: Vesta, then dwarf planet Ceres.",
        },
      },
      {
        q: {
          en: "Why does Dawn still circle Ceres?",
        },
        options: [
          {
            en: "It is parked safely for at least 20 years so Earth germs stay away",
          },
          {
            en: "It is waiting for a fuel delivery",
          },
          { en: "It is playing hide and seek" },
        ],
        answer: 0,
        why: {
          en: "With no fuel left, Dawn stays in a quiet orbit for at least 20 years, protecting Ceres from Earth germs.",
        },
      },
    ],

    pingReply: {
      en: "I cannot answer, but my silent orbit goes on, and every lap carries your thanks around Ceres.",
    },
  },

  /* ============================ 11 · NEAR SHOEMAKER ============================ */
  {
    id: "near",
    num: 11,
    sector: "deep",
    icon: "☄️",
    name: {
      en: "NEAR Shoemaker (Near Earth Asteroid Rendezvous)",
    },
    tagline: {
      en: "I was never built to land, yet I touched an asteroid and kept talking.",
    },
    status: {
      en: "DORMANT · RESTING ON EROS",
    },
    statusType: "dormant",

    passport: {
      nssdca: "1996-008A",
      launch: { en: "Feb 17, 1996" },
      arrival: {
        en: "Eros orbit Feb 14, 2000 · Touchdown Feb 12, 2001",
      },
      end: { en: "Last signal Feb 28, 2001" },
      location: {
        en: "On the surface of Asteroid 433 Eros, southern saddle region",
      },
      coords: {
        en: "~35° S, 279° W on Eros",
      },
      mass: {
        en: "805 kg at launch (487 kg dry)",
      },
      power: {
        en: "4 gallium-arsenide solar panels",
      },
      dormancy: {
        en: "Never designed to land; after about two weeks on the surface its last signal came on Feb 28, 2001",
      },
      discovery: {
        en: "160,000+ images and gamma-ray data taken directly on Eros's regolith",
      },
    },

    sites: [
      { label: { en: "Eros surface" }, au: 1.46, angle: 40 },
    ],

    funFacts: [
      {
        en: "Eros is shaped like a peanut 🥜 and is about 34 km long. I orbited it, then landed on it!",
      },
      {
        en: "I sent home more than 160,000 pictures, like a photo album of a whole tiny world. 📸",
      },
      {
        en: "I had no landing legs and no parachute, yet I landed softly and kept working for about two weeks. 🎉",
      },
    ],

    story: {
      junior: {
        en: "Hi, Earth! I am NEAR Shoemaker ☄️. I am named after Gene Shoemaker, a scientist who loved craters and space rocks.\n\nMy mission was to visit Eros, an asteroid shaped like a peanut 🥜 and about 34 km long. In February 2000 I became the first spacecraft ever to orbit an asteroid. I zoomed around it and took more than 160,000 pictures! 📸\n\nThen came a big surprise. I was never built to land. I had no landing legs and no parachute. But my team asked, “Can we try?” On February 12, 2001, I drifted down slowly, slower than a fast walk, taking photos all the way. And I touched down softly on Eros! 🎉 I became the first spaceship ever to land on an asteroid.\n\nFor about two weeks I kept working on the surface, listening to gamma rays coming from the dusty ground right under me. My last signal came on February 28, 2001. Now I rest on Eros, quiet and still, as it spins around the Sun. 🌌\n\nDo you remember what shape Eros is? 🤔",
      },
      specialist: {
        en: "I am NEAR Shoemaker, NSSDCA 1996-008A, the first launch of NASA's Discovery programme. At 805 kg, of which 487 kg was dry mass, I carried an X-ray/gamma-ray spectrometer, a multispectral imager, a near-infrared spectrograph, a laser rangefinder and a magnetometer.\n\nMy first rendezvous attempt failed. On Dec 20, 1998 the main-engine burn aborted, and I flew past Eros without stopping. Because I had conserved propellant, I could return and enter orbit on Feb 14, 2000, a year late but intact. For the next twelve months I mapped Eros, a ~34 km long, peanut-shaped body, returning more than 160,000 images and its first global gravity and compositional data.\n\nMy four panels of gallium-arsenide cells were fixed, with no gimbals, so I pointed the whole body to trade solar power against my Earth-pointing X-band antenna. I was designed for orbit, never for touchdown, with no landing gear and no terminal-descent sensing. Even so, on Feb 12, 2001 I executed four descent burns and touched down at ~1.6 m/s near the southern saddle region (~35° S, 279° W).\n\nOn the surface my gamma-ray spectrometer, now in contact with the regolith instead of tens of kilometres away, collected far stronger data. It showed a composition consistent with primitive ordinary-chondrite meteorites, with a surface sulfur depletion. My last signal came on Feb 28, 2001.",
      },
    },

    specs: [
      {
        k: { en: "Catalog ID" },
        v: "NSSDCA 1996-008A",
      },
      {
        k: { en: "Position" },
        v: {
          en: "Surface of 433 Eros, southern saddle region, ~35° S, 279° W",
        },
      },
      {
        k: { en: "Mass" },
        v: {
          en: "805 kg launch, 487 kg dry (~318 kg propellant)",
        },
      },
      {
        k: { en: "Propulsion" },
        v: {
          en: "Chemical main engine plus small attitude thrusters",
        },
      },
      {
        k: { en: "Power" },
        v: {
          en: "4 fixed gallium-arsenide solar panels",
        },
      },
      {
        k: { en: "Instruments" },
        v: {
          en: "XGRS, multispectral imager, NIR spectrograph, laser rangefinder, magnetometer",
        },
      },
      {
        k: { en: "Communications" },
        v: {
          en: "X-band via a fixed high-gain antenna, Deep Space Network",
        },
      },
      {
        k: { en: "Mission duration" },
        v: { en: "~5 years (1996–2001)" },
      },
    ],

    tradeoffs: [
      {
        en: "Designed for orbit, not touchdown: no landing gear or terminal-descent sensing, so the landing relied on four precisely planned descent burns.",
      },
      {
        en: "Fixed, non-gimballed panels and antenna cut mechanical complexity, but forced the whole spacecraft to turn to trade sunlight against Earth contact.",
      },
      {
        en: "Gamma-ray counts fall with distance, so the surface landing, risky as it was, gave far better composition data than any orbit could.",
      },
    ],

    radio: {
      en: "X-band link through NASA's Deep Space Network via a fixed high-gain antenna. Last signal received on Feb 28, 2001, after about two weeks on the surface.",
    },

    quiz: [
      {
        q: { en: "What shape is Eros?" },
        options: [
          { en: "Like a peanut" },
          { en: "Like a perfect ball" },
          { en: "Like a flat pancake" },
        ],
        answer: 0,
        why: {
          en: "Eros is a long, peanut-shaped asteroid, about 34 km from end to end.",
        },
      },
      {
        q: {
          en: "What was special about NEAR's landing?",
        },
        options: [
          { en: "It landed on Mars" },
          {
            en: "It used a giant parachute",
          },
          {
            en: "It was never built to land, but landed anyway",
          },
        ],
        answer: 2,
        why: {
          en: "NEAR had no landing legs or parachute, yet it became the first spacecraft to land softly on an asteroid.",
        },
      },
      {
        q: {
          en: "How long did NEAR keep working on the surface?",
        },
        options: [
          { en: "A few seconds" },
          { en: "About two weeks" },
          { en: "Ten years" },
        ],
        answer: 1,
        why: {
          en: "NEAR worked for about two weeks on Eros, with its last signal on February 28, 2001.",
        },
      },
    ],

    pingReply: {
      en: "Your thanks reached a quiet little world. I still lie where I landed, a small visitor on a spinning peanut of stone.",
    },
  },

  /* ============================ 12 · PIONEER 10 & 11 ============================ */
  {
    id: "pioneer",
    num: 12,
    sector: "deep",
    icon: "🛸",
    name: { en: "Pioneer 10 & 11" },
    tagline: {
      en: "We are two silent ambassadors carrying a map of Earth into the galaxy.",
    },
    status: {
      en: "SILENT · DRIFTING INTERSTELLAR",
    },
    statusType: "drifting",

    passport: {
      nssdca: "Pioneer 10: 1972-012A · Pioneer 11: 1973-019A",
      launch: {
        en: "Mar 2, 1972 (P10) · Apr 6, 1973 (P11)",
      },
      arrival: {
        en: "P10 at Jupiter Dec 1973 · P11 at Jupiter Dec 1974, Saturn Sep 1979",
      },
      end: {
        en: "P10 last signal Jan 23, 2003 · P11 last regular contact Sep 30, 1995 (lost Nov 1995)",
      },
      location: {
        en: "Drifting into interstellar space: P10 toward Aldebaran (Taurus), P11 toward Scutum",
      },
      coords: {
        en: "P10 ~80 AU (~12 billion km) at last contact · P11 position approximate",
      },
      mass: { en: "~258 kg each" },
      power: {
        en: "Four SNAP-19 plutonium-238 RTGs each",
      },
      dormancy: {
        en: "Power and signal faded with distance and RTG decay; no contact since 2003 (P10) and 1995 (P11)",
      },
      discovery: {
        en: "First through the Asteroid Belt; first close-ups and radiation data of Jupiter and Saturn",
      },
    },

    sites: [
      {
        label: {
          en: "Pioneer 10 (~80 AU at last contact)",
        },
        au: 80,
        angle: 80,
      },
      {
        label: {
          en: "Pioneer 11 (approximate position)",
        },
        au: 55,
        angle: 290,
      },
    ],

    funFacts: [
      {
        en: "Pioneer 10's last signal came from about 12 billion km away. Even light needed about 11 hours to reach Earth! 💡",
      },
      {
        en: "Our golden plaque, about the size of a small tray, shows a man, a woman and a map to Earth. 🌍",
      },
      {
        en: "Before us, nobody knew if a spaceship could survive the Asteroid Belt. We did! 🪨",
      },
    ],

    story: {
      junior: {
        en: "Hello from far, far away! We are Pioneer 10 and Pioneer 11 🛸. We are twin explorers. We left Earth in 1972 and 1973.\n\nWe were first at many things! Pioneer 10 was the first spaceship to cross the Asteroid Belt, a huge ring of space rocks, and the first to take close-up pictures of giant Jupiter 🪐 in December 1973. Pioneer 11 visited Jupiter too, and then flew up close to Saturn in 1979!\n\nWe are so far from the Sun that solar panels would be useless. So we carry little plutonium power plants, called RTGs. 🔋 At the end, Pioneer 10's voice was a whisper. Its last signal came on January 23, 2003, from about 12 billion km away. Light itself takes about 11 hours to travel that far!\n\nBut we carry a gift ✨. Each of us has a golden plaque with a man, a woman, and a map showing where Earth is. If aliens ever find us, they will know who sent us. Pioneer 10 is drifting toward the star Aldebaran, and Pioneer 11 toward a group of stars called Scutum. 🌌\n\nDo you know what we are carrying for the stars? 🤔",
      },
      specialist: {
        en: "We are Pioneer 10 (1972-012A) and Pioneer 11 (1973-019A), ~258 kg each, spin-stabilised at about 5 rpm. Spin stabilisation meant no reaction wheels and no gyros: our 2.74 m high-gain dish stayed aimed at Earth through conical scanning, with occasional hydrazine precession manoeuvres. Imaging was built line by line, one scan per rotation, instead of through a framing camera.\n\nPower came from four SNAP-19 plutonium-238 RTGs, ~155 W at launch, carried on booms to keep their radiation away from the sensors. Pu-238 has an 87.7-year half-life, but thermocouple degradation made output fall faster, so instruments were switched off one by one as the margins shrank.\n\nWe crossed the Asteroid Belt, finding less dust than feared, and returned the first close-up Jupiter data in Dec 1973, including the radiation belts that forced the shielding design of Voyager and Galileo. Pioneer 11 used Jupiter's gravity in Dec 1974 to reach Saturn in Sep 1979, where it discovered the F ring.\n\nFrom 80 AU (~12 billion km), our last Pioneer 10 downlink on Jan 23, 2003 arrived at roughly 10⁻²¹ W, the faintest signal the Deep Space Network could still recognise. Pioneer 11 went silent in Nov 1995. We now carry the gold-anodised aluminium plaque of Carl Sagan, Frank Drake and Linda Salzman Sagan: a hydrogen-atom unit, a pulsar map to the Sun, and two human figures.",
      },
    },

    specs: [
      {
        k: { en: "Catalog IDs" },
        v: "P10: 1972-012A · P11: 1973-019A",
      },
      {
        k: { en: "Position" },
        v: {
          en: "P10: ~80 AU at last contact, toward Aldebaran · P11: toward Scutum",
        },
      },
      {
        k: { en: "Mass" },
        v: { en: "~258 kg each" },
      },
      {
        k: { en: "Power" },
        v: {
          en: "4 × SNAP-19 Pu-238 RTGs, ~155 W at launch",
        },
      },
      {
        k: { en: "Attitude control" },
        v: {
          en: "Spin-stabilised, ~5 rpm; hydrazine thrusters for precession",
        },
      },
      {
        k: { en: "Antenna" },
        v: {
          en: "2.74 m parabolic high-gain dish",
        },
      },
      {
        k: { en: "Plaque" },
        v: {
          en: "Gold-anodised aluminium; Sagan, Drake, Linda Salzman Sagan",
        },
      },
      {
        k: { en: "Mission duration" },
        v: {
          en: "P10 ~31 years of contact (1972–2003) · P11 ~22 years (1973–1995)",
        },
      },
    ],

    tradeoffs: [
      {
        en: "Spin stabilisation kept the dish on Earth with no gyros or wheels, but imaging had to be built line by line, one scan per rotation.",
      },
      {
        en: "RTGs gave power where sunlight is useless, but Pu-238 decay and thermocouple ageing shrank output until instruments had to be shut down.",
      },
      {
        en: "A modest dish and transmitter were enough only because Earth's big Deep Space Network antennas could recover a signal near 10⁻²¹ W.",
      },
    ],

    radio: {
      en: "S-band downlink (~2.3 GHz) through a 2.74 m dish. Pioneer 10's last signal, on Jan 23, 2003, arrived from ~80 AU at roughly 10⁻²¹ W.",
    },

    quiz: [
      {
        q: {
          en: "What did Pioneer 10 do first?",
        },
        options: [
          { en: "Landed on Jupiter" },
          { en: "Visited the Sun" },
          {
            en: "Crossed the Asteroid Belt and photographed Jupiter up close",
          },
        ],
        answer: 2,
        why: {
          en: "Pioneer 10 was the first to cross the Asteroid Belt and the first to take close-ups of Jupiter.",
        },
      },
      {
        q: {
          en: "What is on the golden plaque?",
        },
        options: [
          {
            en: "A map to Earth, a man and a woman",
          },
          { en: "A pizza recipe" },
          { en: "A video game" },
        ],
        answer: 0,
        why: {
          en: "The plaque shows a man and a woman and a map showing where Earth is, in case someone finds us.",
        },
      },
      {
        q: {
          en: "What powered us far from the Sun?",
        },
        options: [
          {
            en: "Giant sails catching starlight",
          },
          {
            en: "Plutonium power plants called RTGs",
          },
          { en: "A very long extension cord" },
        ],
        answer: 1,
        why: {
          en: "Far from the Sun, solar panels are useless, so we used RTGs that make power from plutonium.",
        },
      },
    ],

    pingReply: {
      en: "We cannot answer, since our voices faded long ago, but we keep carrying your thanks and Earth's address toward the stars.",
    },
  },

  /* ============================ 13 · KEPLER ============================ */
  {
    id: "kepler",
    num: 13,
    sector: "deep",
    icon: "🔭",
    name: { en: "Kepler Space Telescope" },
    tagline: {
      en: "I watched half a million stars and found that planets are everywhere.",
    },
    status: {
      en: "DORMANT · EARTH-TRAILING ORBIT",
    },
    statusType: "dormant",

    passport: {
      nssdca: "2009-011A",
      launch: { en: "Mar 7, 2009" },
      arrival: {
        en: "Earth-trailing heliocentric orbit; science began May 2009",
      },
      end: { en: "Oct 30, 2018" },
      location: {
        en: "Passive Earth-trailing heliocentric orbit, drifting safely",
      },
      coords: {
        en: "~1 AU from the Sun · 372.5-day orbital period",
      },
      mass: { en: "1,052.4 kg at launch" },
      power: {
        en: "Fixed solar array and battery",
      },
      dormancy: {
        en: "Reaction-control hydrazine fuel ran out; retired Oct 30, 2018",
      },
      discovery: {
        en: "2,600+ confirmed exoplanets; our galaxy has more planets than stars",
      },
    },

    sites: [
      {
        label: { en: "Earth-trailing orbit" },
        au: 1.0,
        angle: 215,
      },
    ],

    funFacts: [
      {
        en: "I watched about 150,000 stars at the same time, waiting for a tiny wink of shadow. 👀",
      },
      {
        en: "My discoveries showed that our galaxy has more planets than stars. Every night-sky star may have a family! 🪐",
      },
      {
        en: "When my steering wheels broke, engineers used sunlight pushing on me like wind on a sailboat to keep me going. ⛵",
      },
    ],

    story: {
      junior: {
        en: "Hi, Earth! I am Kepler 🔭, a planet-hunting space telescope. For years I stared at one patch of sky near the constellations Cygnus and Lyra. I watched about 150,000 stars at once!\n\nHow do you find a planet around a faraway star? You wait for a wink. When a planet passes in front of its star, the star gets a tiny bit dimmer, like a small moth flying across a car headlight far away 🦋. I measured those winks again and again.\n\nAnd it worked! In my main mission and my second one, I watched more than 530,000 stars and discovered more than 2,600 planets 🪐. I showed that our galaxy has more planets than stars! 🌟\n\nBut in 2012 and 2013, two of my four reaction wheels broke. These are the spinning wheels that keep me steady and pointing. Engineers invented a clever trick: they balanced me with sunlight pushing on my panels, like a sailboat balanced in the wind ⛵. That gave me a second mission, called K2!\n\nOn October 30, 2018, my fuel ran out and I retired. Now I drift quietly around the Sun, trailing behind Earth. One lap takes 372.5 days.\n\nCan you remember how I found planets? 🤔",
      },
      specialist: {
        en: "I am Kepler, NSSDCA 2009-011A, a photometer more than a camera. Behind a 0.95 m Schmidt aperture and a 1.4 m primary mirror sat 42 CCDs, 95 megapixels in total, continuously monitoring ~150,000 stars in about 115 square degrees of Cygnus–Lyra. A transiting Earth-size planet dims a Sun-like star by only ~84 ppm, so I needed relative precision near 20 ppm and pointing stable to milliarcseconds.\n\nMy Earth-trailing heliocentric orbit (372.5-day period) was chosen to avoid Earth occultations and keep gravity-gradient and thermal disturbances low. The cost was distance: I drifted away from Earth, so each science downlink, roughly monthly, required turning my high-gain antenna toward Earth and pausing the survey.\n\nPointing relied on four reaction wheels, three needed. Wheel 2 failed in July 2012 and wheel 4 in Jan 2013, ending the original field survey. The K2 mission, from 2014, was a rescue: I was aimed along my orbital plane so that solar radiation pressure balanced the remaining torque, and thruster firings corrected the drift. The trade was a short ~80-day campaign per field in exchange for new stars.\n\nIn total I observed over 530,000 stars and helped confirm more than 2,600 exoplanets, showing that planets are statistically common. My reaction-control hydrazine ran out and I was retired on Oct 30, 2018, with transmitters commanded off.",
      },
    },

    specs: [
      {
        k: { en: "Catalog ID" },
        v: "NSSDCA 2009-011A",
      },
      {
        k: { en: "Orbit" },
        v: {
          en: "Earth-trailing heliocentric, 372.5-day period, ~1 AU",
        },
      },
      {
        k: { en: "Mass" },
        v: { en: "1,052.4 kg at launch" },
      },
      {
        k: { en: "Telescope" },
        v: {
          en: "0.95 m Schmidt aperture, 1.4 m primary mirror",
        },
      },
      {
        k: { en: "Detector" },
        v: {
          en: "95-megapixel CCD photometer (42 CCDs)",
        },
      },
      {
        k: { en: "Field of view" },
        v: {
          en: "~115 deg², ~150,000 stars monitored at once",
        },
      },
      {
        k: { en: "Communications" },
        v: {
          en: "X-band and Ka-band via Deep Space Network",
        },
      },
      {
        k: { en: "Mission duration" },
        v: { en: "~9.6 years (2009–2018)" },
      },
    ],

    tradeoffs: [
      {
        en: "An Earth-trailing orbit gave an uninterrupted view with low disturbances, but the growing distance forced periodic turns to point the antenna at Earth.",
      },
      {
        en: "One fixed field with a wide ~115 deg² view allowed 150,000 simultaneous stars and ~20 ppm precision, but gave no freedom to re-point.",
      },
      {
        en: "After two reaction wheels failed, balancing against solar radiation pressure saved the mission as K2, but each field lasted only ~80 days.",
      },
    ],

    radio: {
      en: "X-band and Ka-band links through NASA's Deep Space Network, with roughly monthly science downlinks. Transmitters were commanded off at retirement on Oct 30, 2018.",
    },

    quiz: [
      {
        q: {
          en: "How did Kepler find planets?",
        },
        options: [
          { en: "By landing on them" },
          {
            en: "By watching stars dim when a planet passes in front",
          },
          {
            en: "By listening to radio from aliens",
          },
        ],
        answer: 1,
        why: {
          en: "Kepler measured tiny dips in starlight when a planet crossed in front of its star.",
        },
      },
      {
        q: {
          en: "How many confirmed planets did Kepler help discover?",
        },
        options: [
          { en: "More than 2,600" },
          { en: "Only 3" },
          { en: "Exactly 100" },
        ],
        answer: 0,
        why: {
          en: "Kepler discovered more than 2,600 confirmed planets and showed that our galaxy has more planets than stars.",
        },
      },
      {
        q: {
          en: "What saved Kepler when its wheels broke?",
        },
        options: [
          {
            en: "A repair visit by astronauts",
          },
          {
            en: "A new set of wheels sent by mail",
          },
          {
            en: "Sunlight pushing on it like wind on a sailboat",
          },
        ],
        answer: 2,
        why: {
          en: "Engineers balanced Kepler with sunlight pressure, which began its second mission, K2.",
        },
      },
    ],

    pingReply: {
      en: "I am dark now, but every star I watched still holds a world. Thank you for looking up with me.",
    },
  },
);
