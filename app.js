/* ══════════════════════════════════════════════════════════
   Echoes of Space — app.js
   NASA Space Apps Challenge, Sulaymaniyah 2026
   13 Official NASA Devices · 7 Interactive 3D Stories · 6 Telemetry Dossiers
   English-only. Zero 404 image errors (procedural & canvas).
══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── constants ── */
  const AU = 149597870.7; // km per AU
  const C  = 299792.458;  // km/s (speed of light)

  /* ── Full NASA Telemetry & Story Dossier Database (13 Devices) ── */
  const DOSSIER_DATA = {
  "apollo11": {
    "id": "apollo11",
    "name": "Apollo 11 Lunar Module “Eagle” & EASEP",
    "tagline": "I am the lander that carried two humans down to the Moon.",
    "status": "DORMANT · LASER REFLECTOR ACTIVE",
    "nssdca": "1969-059C (CSM 1969-059A)",
    "coords": "0.67416° N, 23.47314° E",
    "mass": "15,103 kg (whole LM); descent stage 2,034 kg dry",
    "power": "6 silver-zinc batteries; EASEP ran on solar panels",
    "discovery": "First moonquake recordings from the surface, 21.55 kg of samples, and lasting laser ranging to the Moon",
    "launch": "16 July 1969",
    "arrival": "20 July 1969, 20:17:40 UT (landing)",
    "junior": "Hello, Earth! 🦅 I am Eagle, the Apollo 11 Lunar Module. I had one big job: carry two astronauts down to the Moon. I weighed 15,103 kg, about the same as a school bus! 🚌\n\nOn July 20, 1969, I fired my engine and sank toward the Sea of Tranquility. My computer beeped with alarms, and boulders waited below! Neil Armstrong took control and steered me to a flat, safe spot. I landed with less than 30 seconds of fuel to spare. Phew! 😅\n\nThe astronauts collected 21.55 kg of Moon rocks 🪨 and left a special mirror 🪞 that bounces laser beams straight back to Earth. Scientists still use it today!\n\nMy bottom half still stands on the Moon like a launch pad nobody needs. Do you remember my story? Try the quiz! 🚀\",\n      },\n      specialist: {\n        en: \"I am Lunar Module 5, call sign Eagle: 15,103 kg fuelled, built as two stages. My descent stage (2,034 kg dry) carried the landing gear, propellant tanks, silver-zinc batteries and a 45,000 N engine that could be throttled continuously from roughly 10% to 60% thrust, with a near-full-thrust setting; the intermediate band was avoided to limit nozzle erosion. Throttling let the crew trade propellant for hover time, which is exactly what the landing consumed.\n\nOn 20 July 1969 at 20:17:40 UT I touched down in Mare Tranquillitatis. During descent my guidance computer raised 1201 and 1202 overload alarms; its priority-scheduled executive shed low-priority tasks and kept the landing running. Armstrong took semi-manual control to overfly a boulder-strewn crater and set me down with under 30 seconds of propellant margin. Probes on my footpads signalled contact.\n\nAbout 17 m south of me the crew deployed EASEP. Its Passive Seismic Experiment, powered by solar panels, recorded moonquakes until the package ended on 27 August 1969. The Laser Ranging Retroreflector, an array of 100 fused-silica corner cubes with no electronics at all, has no such limit: it has returned Earth-based laser pulses ever since, refining the Moon's distance to millimetre level. The crew returned 21.55 kg of samples, and my descent stage still serves as a monument on the surface, the launch pad I was designed to become.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "specialist": "I am Lunar Module 5, call sign Eagle: 15,103 kg fuelled, built as two stages. My descent stage (2,034 kg dry) carried the landing gear, propellant tanks, silver-zinc batteries and a 45,000 N engine that could be throttled continuously from roughly 10% to 60% thrust, with a near-full-thrust setting; the intermediate band was avoided to limit nozzle erosion. Throttling let the crew trade propellant for hover time, which is exactly what the landing consumed.\n\nOn 20 July 1969 at 20:17:40 UT I touched down in Mare Tranquillitatis. During descent my guidance computer raised 1201 and 1202 overload alarms; its priority-scheduled executive shed low-priority tasks and kept the landing running. Armstrong took semi-manual control to overfly a boulder-strewn crater and set me down with under 30 seconds of propellant margin. Probes on my footpads signalled contact.\n\nAbout 17 m south of me the crew deployed EASEP. Its Passive Seismic Experiment, powered by solar panels, recorded moonquakes until the package ended on 27 August 1969. The Laser Ranging Retroreflector, an array of 100 fused-silica corner cubes with no electronics at all, has no such limit: it has returned Earth-based laser pulses ever since, refining the Moon's distance to millimetre level. The crew returned 21.55 kg of samples, and my descent stage still serves as a monument on the surface, the launch pad I was designed to become.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "facts": [
      "My engine worked like a car pedal 🚗: gentle push or full power. That let me hover and pick a safe spot!",
      "The mirror I left bounces laser light back to Earth, so scientists can still measure the Moon's distance to millimetres! 📏",
      "My bottom half is still on the Moon. It was the launch pad for the astronauts' ride home! 🚀"
    ],
    "tradeoffs": [
      "A throttleable descent engine cost extra mass and complexity, but gave the crew hover time to dodge boulders instead of committing to a fixed-thrust burn.",
      "The descent stage doubled as launch pad: leaving it behind cut the ascent mass and avoided a separate launch structure.",
      "EASEP's retroreflector is passive: no power or electronics to fail, which is why it outlived every powered instrument."
    ]
  },
  "lrv": {
    "id": "lrv",
    "name": "Lunar Roving Vehicles (Apollo 15, 16, 17)",
    "tagline": "We are three Moon Buggies, parked forever where the road ended.",
    "status": "DORMANT · PARKED ON THE MOON",
    "nssdca": "1971-063C (LRV-1) · 1972-031C (LRV-2) · 1972-096C (LRV-3)",
    "coords": "26.1322° N, 3.6339° E · 8.9730° S, 15.5002° E · 20.1908° N, 30.7717° E",
    "mass": "210 kg on Earth (~34 kg in lunar gravity, about 1/6)",
    "power": "Two 36-volt silver-zinc batteries (non-rechargeable)",
    "discovery": "Vastly widened the astronauts' range (up to 35.9 km on Apollo 17) and let Earth watch Lunar Module liftoffs live",
    "launch": "26 Jul 1971 · 16 Apr 1972 · 7 Dec 1972 (with Apollo 15, 16, 17)",
    "arrival": "Deployed July 1971 · April 1972 · December 1972",
    "junior": "Vroom vroom! 🚙 We are the three Moon Buggies, the Lunar Roving Vehicles of Apollo 15, 16 and 17. On Earth I weigh 210 kg, like a big motorbike 🏍️. On the Moon, gravity is only about 1/6 as strong, so I weigh just 34 kg!\n\nI folded up flat inside the Lunar Module, like a camping chair ⛺. Astronauts unfolded me, hopped on and zoomed across the dust. I had four wheels, each with its own tiny electric motor, and bouncy tyres made of woven piano wire! 🎹\n\nThanks to me, astronauts could explore far from their landing spot. On Apollo 17 we drove 35.9 km! We also carried a TV camera 📺 so you could watch the Lunar Module blast off the Moon.\n\nMy batteries can't be recharged, so we are parked on the Moon forever. Ready for a quiz? 🏁\",\n      },\n      specialist: {\n        en: \"We are LRV-1, -2 and -3: a 210 kg folding aluminium-alloy chassis stowed in a bay of the Lunar Module and deployed by tapes and pulleys. Each wheel has its own ~0.25 hp electric motor with harmonic-drive gearing, and steering is on both axles, giving a tight turning circle. Two 36-volt silver-zinc batteries are non-rechargeable: the best energy per kilogram, and no charging hardware to carry.\n\nOur tyres are ~81 cm wire-mesh woven from zinc-coated piano wire with titanium chevron treads. They give traction and compliance on regolith with no inflation system to puncture or leak. Navigation used a directional gyro and wheel odometers to compute bearing and range back to the Lunar Module. That mattered, because the crews were allowed to travel only as far as they could walk back if we failed.\n\nWithin those limits we did what no landing alone could. Apollo 15 covered 27.9 km, Apollo 16 26.7 km, and Apollo 17 35.9 km, carrying tools, samples and crews to outcrops kilometres from the landing site. On Apollo 17, a fender broken by a hammer was repaired with duct tape and map sheets to keep dust off the electronics. A colour TV camera on a steerable S-band umbrella antenna was commanded from Earth, and showed each Lunar Module liftoff. Then the crews parked us, and the batteries slowly died.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "specialist": "We are LRV-1, -2 and -3: a 210 kg folding aluminium-alloy chassis stowed in a bay of the Lunar Module and deployed by tapes and pulleys. Each wheel has its own ~0.25 hp electric motor with harmonic-drive gearing, and steering is on both axles, giving a tight turning circle. Two 36-volt silver-zinc batteries are non-rechargeable: the best energy per kilogram, and no charging hardware to carry.\n\nOur tyres are ~81 cm wire-mesh woven from zinc-coated piano wire with titanium chevron treads. They give traction and compliance on regolith with no inflation system to puncture or leak. Navigation used a directional gyro and wheel odometers to compute bearing and range back to the Lunar Module. That mattered, because the crews were allowed to travel only as far as they could walk back if we failed.\n\nWithin those limits we did what no landing alone could. Apollo 15 covered 27.9 km, Apollo 16 26.7 km, and Apollo 17 35.9 km, carrying tools, samples and crews to outcrops kilometres from the landing site. On Apollo 17, a fender broken by a hammer was repaired with duct tape and map sheets to keep dust off the electronics. A colour TV camera on a steerable S-band umbrella antenna was commanded from Earth, and showed each Lunar Module liftoff. Then the crews parked us, and the batteries slowly died.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "facts": [
      "On Earth I weigh 210 kg, but on the Moon only 34 kg, about like a big dog! 🐕",
      "My tyres have no air! They are woven from piano wire, so they can never go flat. 🎹",
      "I carried a TV camera, so Earth could watch the Lunar Module lift off the Moon, live! 📺"
    ],
    "tradeoffs": [
      "Wire-mesh tyres cost traction engineering but removed puncture and leak risk. In vacuum and dust, no air meant no failure mode.",
      "Non-rechargeable silver-zinc batteries gave high energy per kg and no charging hardware, at the price of a fixed total range.",
      "The walk-back limit capped exploration to what the crew could walk home from, trading range for survival if the rover died."
    ]
  },
  "alsep": {
    "id": "alsep",
    "name": "ALSEP Scientific Packages (Apollo 12–17)",
    "tagline": "We are five stations that listened to the Moon for years.",
    "status": "DORMANT · SWITCHED OFF 1977",
    "nssdca": "1969-099C · 1971-008C · 1971-063C · 1972-031C · 1972-096C",
    "coords": "A12 3.01° S 23.42° W · A14 3.65° S 17.47° W · A15 26.1322° N 3.6339° E · A16 8.9730° S 15.5002° E · A17 20.1908° N 30.7717° E",
    "mass": "Five separate multi-instrument packages (one per mission)",
    "power": "SNAP-27 RTGs, ~70 watts, plutonium-238",
    "discovery": "Over 13,000 seismic events; mapped the Moon's crust, mantle and core; measured solar wind and heat flow",
    "launch": "Apollo 12, 14, 15, 16, 17 (1969–1972)",
    "arrival": "Deployed 1969–1972 by Apollo astronauts",
    "junior": "Beep… beep… 📡 We are the ALSEP science stations! Astronauts set us up on five Apollo missions: 12, 14, 15, 16 and 17. Think of us as five little earthquake and weather stations, but on the Moon!\n\nA Moon night lasts 14 Earth days and is freezing 🥶, so solar panels were not enough for us. Our secret was a battery that never ran out: an RTG powered by plutonium-238, giving about 70 watts, like a bright light bulb 💡.\n\nWe listened to the Moon for years. We recorded over 13,000 moonquakes and space-rock crashes ☄️, and felt the Sun's wind blowing past. Scientists used our data to learn what is inside the Moon: crust, mantle and core!\n\nOn September 30, 1977, Earth sent one last command: switch off. We fell silent. Ready for the quiz? 🎧\",\n      },\n      specialist: {\n        en: \"We are the Apollo Lunar Surface Experiments Packages, deployed on Apollo 12 (Ocean of Storms), 14 (Fra Mauro), 15 (Hadley Rille), 16 (Descartes) and 17 (Taurus-Littrow). Each package was a central station plus a cluster of instruments, fed by a SNAP-27 radioisotope thermoelectric generator delivering ~70 W from plutonium-238 decay. Solar panels with batteries were rejected: a lunar night lasts about 14 Earth days at roughly −170 °C, and a battery big enough to span it would have outweighed the science payload.\n\nOur instruments included passive seismometers on Apollo 12, 14, 15 and 16, a magnetometer, a solar wind spectrometer, heat-flow probes on Apollo 15 and 17, and active seismic profiling with explosive charges. The four-station seismic network let analysts triangulate events. We logged over 13,000 seismic events: thermal quakes, meteoroid impacts, shallow quakes, and deep moonquakes tied to Earth's tides. Impacts of spent stages gave calibrated sources; one shook the Moon for close to an hour.\n\nFrom the arrival times, researchers mapped the Moon's crust, mantle and core, finding a small core and a seismically quiet but not dead interior. Heat-flow data tracked the interior's thermal state. The data stream ran for almost eight years, until budget limits led controllers to command us off on 30 September 1977. We were not worn out. We were switched off while still listening.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "specialist": "We are the Apollo Lunar Surface Experiments Packages, deployed on Apollo 12 (Ocean of Storms), 14 (Fra Mauro), 15 (Hadley Rille), 16 (Descartes) and 17 (Taurus-Littrow). Each package was a central station plus a cluster of instruments, fed by a SNAP-27 radioisotope thermoelectric generator delivering ~70 W from plutonium-238 decay. Solar panels with batteries were rejected: a lunar night lasts about 14 Earth days at roughly −170 °C, and a battery big enough to span it would have outweighed the science payload.\n\nOur instruments included passive seismometers on Apollo 12, 14, 15 and 16, a magnetometer, a solar wind spectrometer, heat-flow probes on Apollo 15 and 17, and active seismic profiling with explosive charges. The four-station seismic network let analysts triangulate events. We logged over 13,000 seismic events: thermal quakes, meteoroid impacts, shallow quakes, and deep moonquakes tied to Earth's tides. Impacts of spent stages gave calibrated sources; one shook the Moon for close to an hour.\n\nFrom the arrival times, researchers mapped the Moon's crust, mantle and core, finding a small core and a seismically quiet but not dead interior. Heat-flow data tracked the interior's thermal state. The data stream ran for almost eight years, until budget limits led controllers to command us off on 30 September 1977. We were not worn out. We were switched off while still listening.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "facts": [
      "My “battery” is an RTG: warm plutonium-238 that kept me alive through freezing nights 14 Earth days long! 🌙",
      "We recorded over 13,000 moonquakes and meteorite hits. After one crash the Moon rang for nearly an hour! 🔔",
      "Five stations listened until Earth switched us off on Sept 30, 1977, almost 8 years of Moon news! 📰"
    ],
    "tradeoffs": [
      "RTG over solar and batteries: higher mass per watt of fuel, but the only practical way to survive a 14-day freezing night.",
      "Five sites, four seismometers on the network: spread wide enough to triangulate events, at the cost of separate crews and deployments.",
      "Operating forever was never the goal: ground teams and budget limited the mission, so the stations were commanded off while still working."
    ]
  },
  "surveyor": {
    "id": "surveyor",
    "name": "Surveyor Landers (Surveyor 1–7)",
    "tagline": "I was the first American to touch the Moon softly, and I told the truth.",
    "status": "DORMANT · FIVE OF SEVEN LANDED",
    "nssdca": "1966-045A (Surveyor 1) … 1968-001A (Surveyor 7)",
    "coords": "2.474° S, 43.339° W",
    "mass": "292 kg landed mass",
    "power": "Solar panel + silver-zinc batteries",
    "discovery": "Lunar soil is firm enough for crewed landers; Surveyor 1 sent 11,237 high-resolution photos",
    "launch": "Surveyor 1: 30 May 1966",
    "arrival": "Surveyor 1 landed 2 June 1966",
    "junior": "Hello! 🛬 I am Surveyor, America's first soft lander on the Moon. Before people could land, someone had to check: is the Moon covered in dust so deep it will swallow a spaceship? 😨 That was my job.\n\nOn June 2, 1966, I fired small rockets and landed gently in the Ocean of Storms. After landing I weighed 292 kg, about as heavy as three giant pandas 🐼.\n\nThen my camera got to work. I sent back 11,237 photos 📸, and they showed the ground was firm. My feet barely sank! Five Surveyors (1, 3, 5, 6 and 7) landed safely, but two did not make it. Later, Apollo 12 astronauts walked up to Surveyor 3 and brought home its camera!\n\nI went quiet in January 1967, but I had shown that people could land safely. Can you remember my secrets? Try the quiz! 🚀\",\n      },\n      specialist: {\n        en: \"I am Surveyor 1, launched 30 May 1966 on an Atlas-Centaur. A solid-propellant retro-rocket removed most of my velocity, then was jettisoned. Radar altimeter and Doppler velocity sensors steered three throttleable liquid-propellant vernier engines for the terminal descent, and I landed on 2 June 1966 at 2.474° S, 43.339° W in Oceanus Procellarum with a landed mass of 292 kg. It was NASA's first soft landing on another world, on the first attempt.\n\nThe design choice was simple: soft landing or nothing. A solid motor gave a large velocity change with minimal mass, but it could not be throttled, so verniers handled the final braking and the engines were cut a few metres above the surface. Power came from a solar panel charging silver-zinc batteries, which kept me working by day. Lunar nights were harder, but I survived several.\n\nMy television camera returned 11,237 high-resolution photos of the surface, footpad impressions and rocks. The answer for Apollo was clear: regolith bore the load. Later missions refined it: Surveyor 3's scoop dug trenches, Surveyor 5 carried an alpha-scattering instrument that found basaltic composition, and Surveyor 6 made the first lift-off from the Moon in a short hop. Five of seven Surveyors landed (1, 3, 5, 6, 7; Surveyors 2 and 4 failed). In November 1969, Apollo 12's crew walked to Surveyor 3 and brought its camera and parts home. My last contact came on 7 January 1967.\",\n      },\n    },\n\n    specs: [\n      {\n        k: {\n          en: \"Coordinates (Surveyor 1)\",\n        },\n        v: \"2.474° S, 43.339° W\",\n      },\n      {\n        k: { en: \"Catalog IDs",
    "specialist": "I am Surveyor 1, launched 30 May 1966 on an Atlas-Centaur. A solid-propellant retro-rocket removed most of my velocity, then was jettisoned. Radar altimeter and Doppler velocity sensors steered three throttleable liquid-propellant vernier engines for the terminal descent, and I landed on 2 June 1966 at 2.474° S, 43.339° W in Oceanus Procellarum with a landed mass of 292 kg. It was NASA's first soft landing on another world, on the first attempt.\n\nThe design choice was simple: soft landing or nothing. A solid motor gave a large velocity change with minimal mass, but it could not be throttled, so verniers handled the final braking and the engines were cut a few metres above the surface. Power came from a solar panel charging silver-zinc batteries, which kept me working by day. Lunar nights were harder, but I survived several.\n\nMy television camera returned 11,237 high-resolution photos of the surface, footpad impressions and rocks. The answer for Apollo was clear: regolith bore the load. Later missions refined it: Surveyor 3's scoop dug trenches, Surveyor 5 carried an alpha-scattering instrument that found basaltic composition, and Surveyor 6 made the first lift-off from the Moon in a short hop. Five of seven Surveyors landed (1, 3, 5, 6, 7; Surveyors 2 and 4 failed). In November 1969, Apollo 12's crew walked to Surveyor 3 and brought its camera and parts home. My last contact came on 7 January 1967.\",\n      },\n    },\n\n    specs: [\n      {\n        k: {\n          en: \"Coordinates (Surveyor 1)\",\n        },\n        v: \"2.474° S, 43.339° W\",\n      },\n      {\n        k: { en: \"Catalog IDs",
    "facts": [
      "I proved the Moon's ground was firm, like packed sand 🏖️, not a bottomless sea of dust!",
      "Surveyor 1 alone took 11,237 photos, a giant Moon photo album! 📸",
      "In Nov 1969, Apollo 12 astronauts walked to my sister Surveyor 3 and brought home her camera! 🏛️"
    ],
    "tradeoffs": [
      "A solid retro-rocket gave a huge braking burn for little mass but could not be throttled, so verniers handled the final soft touchdown.",
      "Solar panel plus batteries was light and simple, but made survival through the long lunar night a hard problem.",
      "A single television camera was the only eye, giving up wide instruments to keep a lander light enough to launch."
    ]
  },
  "sojourner": {
    "id": "sojourner",
    "name": "Sojourner Rover (Mars Pathfinder)",
    "tagline": "I am the little rover who proved wheels could roam another world.",
    "status": "DORMANT · FIRST WHEELS ON MARS",
    "nssdca": "1996-068A (Mars Pathfinder)",
    "coords": "19.13° N, 33.22° W",
    "mass": "11.5 kg · microwave-oven sized (65 cm long)",
    "power": "0.22 m² GaAs solar panel + non-rechargeable lithium-thionyl chloride batteries",
    "discovery": "First rover to drive on Mars; APXS rock chemistry backed a warm, wet, flood-carved past",
    "launch": "Dec 4, 1996",
    "arrival": "Jul 4, 1997 (airbag landing)",
    "junior": "Hi! I'm Sojourner 🤖, a little robot no bigger than a microwave oven. On July 4, 1997, I rolled down a ramp and became the first wheeled rover ever to drive on another planet. Red dust under my six wheels. What a moment! 🎉\n\nMy home was Ares Vallis, a rocky plain where giant floods once rushed long, long ago. I carried a tiny tool called APXS that could “sniff” a rock and tell what it is made of. Scientists nicknamed my rocks Barnacle Bill and Yogi. What I found hinted that Mars was once warm and wet! 💧\n\nThe team planned for me to work for 7 Mars days. But I kept going for 83 days. That is twelve times longer! ☀️ I was slow as a snail, and I never gave up. My last message reached Earth on September 27, 1997.\n\nNow I sit quietly on the red plain, dreaming of Earth. Do you remember how many days I worked? Let's see if you can ace my quiz! 🚀\",\n      },\n      specialist: {\n        en: \"I am Sojourner, the microrover of Mars Pathfinder: 11.5 kg, 65 cm long. Pathfinder skipped orbit entirely. It hit the Martian atmosphere directly, slowed on a parachute and retrorockets, then bounced to rest inside airbags on July 4, 1997 in Ares Vallis (19.13° N, 33.22° W), a giant ancient outflow channel.\n\nMy six wheels hang on a rocker-bogie suspension: no springs, only passive pivots that keep every wheel loaded and let me climb obstacles about a wheel diameter tall. The price is speed, roughly 1 cm/s. Power came from a 0.22 m² GaAs panel, backed by lithium-thionyl chloride primary cells that could never be recharged, so my energy budget was finite from the first sol. A small 8-bit computer ran me semi-autonomously, using laser stripes and cameras to spot hazards between daily commands from Earth.\n\nI never spoke to Earth directly. My UHF modem talked only to the lander, which relayed over X-band. My APXS pressed against rocks such as Barnacle Bill and Yogi and measured their elemental chemistry. The compositions pointed to an evolved, silica-rich crust and to a region reshaped by ancient floods, supporting a warmer, wetter early Mars.\n\nI was designed for 7 sols and worked 83. When the lander's last contact came on September 27, 1997, most likely because its battery degraded, I lost my only link to home and went dormant where I stood.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "specialist": "I am Sojourner, the microrover of Mars Pathfinder: 11.5 kg, 65 cm long. Pathfinder skipped orbit entirely. It hit the Martian atmosphere directly, slowed on a parachute and retrorockets, then bounced to rest inside airbags on July 4, 1997 in Ares Vallis (19.13° N, 33.22° W), a giant ancient outflow channel.\n\nMy six wheels hang on a rocker-bogie suspension: no springs, only passive pivots that keep every wheel loaded and let me climb obstacles about a wheel diameter tall. The price is speed, roughly 1 cm/s. Power came from a 0.22 m² GaAs panel, backed by lithium-thionyl chloride primary cells that could never be recharged, so my energy budget was finite from the first sol. A small 8-bit computer ran me semi-autonomously, using laser stripes and cameras to spot hazards between daily commands from Earth.\n\nI never spoke to Earth directly. My UHF modem talked only to the lander, which relayed over X-band. My APXS pressed against rocks such as Barnacle Bill and Yogi and measured their elemental chemistry. The compositions pointed to an evolved, silica-rich crust and to a region reshaped by ancient floods, supporting a warmer, wetter early Mars.\n\nI was designed for 7 sols and worked 83. When the lander's last contact came on September 27, 1997, most likely because its battery degraded, I lost my only link to home and went dormant where I stood.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "facts": [
      "🍳 I was about the size of a microwave oven — and the first wheeled robot ever to drive on Mars!",
      "🐌 I crawled about 1 cm every second — slower than a garden snail on a sprint, but I made history.",
      "🎂 I was built for 7 Mars days but worked for 83. That's like a 7-day holiday lasting almost 3 months!"
    ],
    "tradeoffs": [
      "Rocker-bogie: no springs, passive pivots keep six wheels loaded. Light and rugged, but slow (~1 cm/s).",
      "A small GaAs panel plus non-rechargeable primary cells saved mass and complexity, but my total energy was finite.",
      "Relaying through the lander let me skip a heavy Earth-pointing antenna, but my life depended on the lander's."
    ]
  },
  "mer": {
    "id": "mer",
    "name": "Spirit & Opportunity (Mars Exploration Rovers)",
    "tagline": "We are twin rovers who followed the water across Mars for years.",
    "status": "DORMANT · TWIN ROVERS OF MARS",
    "nssdca": "Spirit 2003-027A · Opportunity 2003-032A",
    "coords": "Spirit 14.5684° S, 175.4726° E · Opportunity 2.046° S, 354.634° E",
    "mass": "185 kg each",
    "power": "Multi-junction solar arrays + rechargeable batteries",
    "discovery": "Hematite “blueberries”, silica deposits and clays proving ancient habitable liquid water",
    "launch": "Spirit Jun 10, 2003 · Opportunity Jul 7, 2003",
    "arrival": "Jan 2004 (Spirit Jan 4 · Opportunity Jan 25, UTC)",
    "junior": "Hello, Earth! We are Spirit and Opportunity 🛞🛞, twin robot geologists. Each of us weighs 185 kg, about as much as a big lion 🦁. In January 2004 we landed on opposite sides of Mars, bouncing inside giant airbags like beach balls!\n\nOur team planned for just 90 Mars days. But we kept rolling! Spirit explored for 2,208 days, until she got stuck in soft sand at a place called Troy on March 22, 2010. Opportunity kept going for 5,111 days, almost 15 years! She drove 45.16 km, longer than a marathon. 🏃\n\nWe took amazing pictures with our camera eyes 📸 and ground into rocks with our tools. We found tiny round “blueberries” made of hematite and special minerals that form only in water. 💧 Mars once had water that could have helped life!\n\nThen in 2018, a giant dust storm covered the whole planet and hid the Sun from Opportunity. Her solar panels went dark, and on June 10, 2018 she fell silent. 🌪️\n\nCan you remember what trapped Spirit, and what stopped Opportunity? Try our quiz! 🚀\",\n      },\n      specialist: {\n        en: \"We are Spirit (MER-A) and Opportunity (MER-B): 185 kg each, launched on Delta II rockets on June 10 and July 7, 2003, and landed in January 2004 inside airbags at Gusev Crater (14.5684° S, 175.4726° E) and Meridiani Planum (2.046° S, 354.634° E). The requirement was 90 sols and about 600 m of driving.\n\nSix 26 cm wheels on a rocker-bogie let us cross rocks and sand, while multi-junction solar arrays (~140 W peak) charged rechargeable batteries. That choice freed us from plutonium but tied our lives to dust and seasons. Wind events and dust devils cleaned our panels again and again, an unplanned gift that stretched 90 sols into years.\n\nOur kit: Pancam, Mini-TES, APXS, Mössbauer spectrometer, Microscopic Imager and the Rock Abrasion Tool. Opportunity found hematite spherules, sulfates and later clay minerals at the rim of Endeavour crater. Spirit, dragging a dead right-front wheel, scraped open soil of nearly pure silica near Home Plate, evidence of hot water. Together: ancient liquid water suited to life.\n\nSpirit broke through a crust at Troy in 2009 and sank into soft sulfate sand. She could not tilt toward the winter Sun and went silent on March 22, 2010 after 2,208 sols and 7.73 km. Opportunity drove a record 45.16 km before the 2018 planet-encircling dust storm choked her power. Her last contact was June 10, 2018 (sol 5,111). NASA declared the mission complete on February 13, 2019.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "specialist": "We are Spirit (MER-A) and Opportunity (MER-B): 185 kg each, launched on Delta II rockets on June 10 and July 7, 2003, and landed in January 2004 inside airbags at Gusev Crater (14.5684° S, 175.4726° E) and Meridiani Planum (2.046° S, 354.634° E). The requirement was 90 sols and about 600 m of driving.\n\nSix 26 cm wheels on a rocker-bogie let us cross rocks and sand, while multi-junction solar arrays (~140 W peak) charged rechargeable batteries. That choice freed us from plutonium but tied our lives to dust and seasons. Wind events and dust devils cleaned our panels again and again, an unplanned gift that stretched 90 sols into years.\n\nOur kit: Pancam, Mini-TES, APXS, Mössbauer spectrometer, Microscopic Imager and the Rock Abrasion Tool. Opportunity found hematite spherules, sulfates and later clay minerals at the rim of Endeavour crater. Spirit, dragging a dead right-front wheel, scraped open soil of nearly pure silica near Home Plate, evidence of hot water. Together: ancient liquid water suited to life.\n\nSpirit broke through a crust at Troy in 2009 and sank into soft sulfate sand. She could not tilt toward the winter Sun and went silent on March 22, 2010 after 2,208 sols and 7.73 km. Opportunity drove a record 45.16 km before the 2018 planet-encircling dust storm choked her power. Her last contact was June 10, 2018 (sol 5,111). NASA declared the mission complete on February 13, 2019.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "facts": [
      "🏃 Opportunity drove 45.16 km. That's longer than a marathon (42.2 km), all on Mars!",
      "🫐 We found tiny round “blueberries” made of hematite, clues that water once soaked the ground.",
      "📅 We were built to last 90 days. Opportunity worked for almost 15 years. That's like a pencil lasting a lifetime!"
    ],
    "tradeoffs": [
      "Solar arrays avoided plutonium, mass and cost, but made us hostage to dust accumulation, winter tilt and global storms.",
      "Airbag landing meant no complex descent stage, but needed a clear bounce zone and cost mass in the protective cocoon.",
      "Six independently driven wheels gave resilience. Spirit's dead wheel dragged open silica, but soft sand still trapped her."
    ]
  },
  "viking": {
    "id": "viking",
    "name": "Viking 1 & 2 Landers",
    "tagline": "We are the first to land and listen, and we asked Mars: is anyone there?",
    "status": "DORMANT · FIRST U.S. MARS LANDERS",
    "nssdca": "Viking 1 Lander 1975-075C · Viking 2 Lander 1975-083C",
    "coords": "Viking 1 22.697° N, 48.222° W · Viking 2 47.968° N, 225.71° W",
    "mass": "572 kg landed mass (each)",
    "power": "Two SNAP-19 Plutonium-238 RTGs (+ batteries)",
    "discovery": "First color Mars panoramas, first in-situ soil biology tests, years of Martian weather",
    "launch": "Viking 1 Aug 20, 1975 · Viking 2 Sep 9, 1975",
    "arrival": "Viking 1 Jul 20, 1976 · Viking 2 Sep 3, 1976",
    "junior": "Greetings, Earth! We are Viking 1 and Viking 2 🧪, twin landers. We were the first U.S. spacecraft to land safely and work on Mars! Viking 1 touched down on July 20, 1976, exactly seven years after Apollo 11 reached the Moon. Viking 2 followed on September 3. 🚀\n\nWe had no wheels, so we stayed put. But we had a long robot arm 🦾 that scooped up red soil. We sent home the first color photos of Mars 📸: red rocks under a pinkish sky. We even felt the weather, from chilly winds to winter frost!\n\nOur biggest job was a puzzle: we had three experiments to look for tiny living things in the soil. The answers were confusing, and scientists still talk about them today. 🔬\n\nA small nuclear battery with plutonium powered us through freezing nights. ⚡ Viking 1 worked for 2,245 Mars days, more than six years, until November 11, 1982.\n\nWhat were we searching for in the soil, and what kept us powered? Take our quiz! 🌍\",\n      },\n      specialist: {\n        en: \"We are the Viking 1 and Viking 2 landers, launched on August 20 and September 9, 1975, each riding with an orbiter. After separation we entered at Mars behind an aeroshell, deployed a supersonic parachute, then fired throttleable hydrazine retrorockets to land on three legs: Viking 1 on July 20, 1976 at Chryse Planitia (22.697° N, 48.222° W) and Viking 2 on September 3, 1976 at Utopia Planitia (47.968° N, 225.71° W). Landed mass: 572 kg.\n\nAt that mass, airbags were not an option. Two SNAP-19 Plutonium-238 RTGs gave us steady power through dust, winter and polar-latitude darkness, with batteries covering peaks. Our sampling arm fed soil to an X-ray fluorescence spectrometer, a GCMS and a biology package of three experiments: Pyrolytic Release, Labeled Release and Gas Exchange. Cameras returned the first color panoramas, and a meteorology boom logged pressure, temperature and wind for years.\n\nThe biology results were ambiguous. Labeled Release produced an initially life-like response, but GCMS detected no organic molecules at its sensitivity. Most scientists concluded that reactive soil chemistry, not life, was responsible; perchlorates found by Phoenix in 2008 added a modern twist. The debate we started endures.\n\nViking 2 failed in April 1980 as its batteries degraded. Viking 1 operated for 2,245 sols until November 11, 1982, when a faulty command during a software update overwrote antenna-pointing data and I could no longer aim at Earth. Contact was never recovered.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "specialist": "We are the Viking 1 and Viking 2 landers, launched on August 20 and September 9, 1975, each riding with an orbiter. After separation we entered at Mars behind an aeroshell, deployed a supersonic parachute, then fired throttleable hydrazine retrorockets to land on three legs: Viking 1 on July 20, 1976 at Chryse Planitia (22.697° N, 48.222° W) and Viking 2 on September 3, 1976 at Utopia Planitia (47.968° N, 225.71° W). Landed mass: 572 kg.\n\nAt that mass, airbags were not an option. Two SNAP-19 Plutonium-238 RTGs gave us steady power through dust, winter and polar-latitude darkness, with batteries covering peaks. Our sampling arm fed soil to an X-ray fluorescence spectrometer, a GCMS and a biology package of three experiments: Pyrolytic Release, Labeled Release and Gas Exchange. Cameras returned the first color panoramas, and a meteorology boom logged pressure, temperature and wind for years.\n\nThe biology results were ambiguous. Labeled Release produced an initially life-like response, but GCMS detected no organic molecules at its sensitivity. Most scientists concluded that reactive soil chemistry, not life, was responsible; perchlorates found by Phoenix in 2008 added a modern twist. The debate we started endures.\n\nViking 2 failed in April 1980 as its batteries degraded. Viking 1 operated for 2,245 sols until November 11, 1982, when a faulty command during a software update overwrote antenna-pointing data and I could no longer aim at Earth. Contact was never recovered.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "facts": [
      "🎹 Each of us weighed 572 kg when we landed, about as much as a big grand piano.",
      "🌕 Viking 1 landed on July 20, 1976, exactly seven years after Apollo 11 touched the Moon!",
      "🌡️ A tiny nuclear battery kept us warm and powered for years, even on freezing Mars nights."
    ],
    "tradeoffs": [
      "RTGs gave steady power through dust, winter and high latitudes, but demanded plutonium handling and launch safety reviews.",
      "At 572 kg, a parachute plus retrorockets and legs was the only way to land softly. Airbags could not cushion that mass.",
      "Landers were heat-sterilized to protect the life search, but three biology tests with different assumptions gave ambiguous results."
    ]
  },
  "phoenix-insight": {
    "id": "phoenix-insight",
    "name": "Phoenix & InSight Landers",
    "tagline": "We are the pair that tasted Martian ice and heard Mars shake.",
    "status": "DORMANT · SOLAR POWER LOST",
    "nssdca": "Phoenix 2007-034A · InSight 2018-042A",
    "coords": "Phoenix 68.2188° N, 234.2508° E · InSight 4.5024° N, 135.6234° E",
    "mass": "Phoenix ~350 kg · InSight ~358 kg",
    "power": "Solar arrays + batteries (both landers)",
    "discovery": "Phoenix tasted subsurface water ice · InSight detected 1,319 marsquakes and sized Mars's liquid core",
    "launch": "Phoenix: Aug 4, 2007 · InSight: May 5, 2018",
    "arrival": "Phoenix: May 25, 2008 · InSight: Nov 26, 2018",
    "junior": "We are Phoenix and InSight — two robot landers who never met, but we shared one giant job: finding out what Mars is made of! 🚀\n\nI, Phoenix, landed in 2008 on the cold northern plains. I dug a trench with my robot arm and found shiny white chunks. Four days later, they were gone. The ice was turning into gas! 🧊 I even watched snow falling from Martian clouds ❄️. Then winter came. The Sun sank, my solar panels went dark, and I fell asleep in November 2008.\n\nI, InSight, landed in 2018 on a flat, smooth plain called Elysium Planitia. I placed a super-sensitive “ear” on the ground and listened. I heard 1,319 marsquakes 🌍 and learned that Mars has a liquid heart of metal! But dust piled up on my solar panels like a dirty blanket, and in December 2022 I went quiet.\n\nWe are sleeping, not forgotten. Do you remember what we found? Take the quiz and show us! 🧠\",\n      },\n      specialist: {\n        en: \"We are Phoenix and InSight, two solar-powered landers of ~350 kg each, flown a decade apart.\n\nI, Phoenix, reached Vastitas Borealis (68.2188° N) on May 25, 2008, after a parachute descent and a throttled retro-thruster landing on legs. My 2.35 m robotic arm trenched into the ice table and fed samples to the TEGA ovens and the MECA wet-chemistry laboratory. We confirmed water ice, found perchlorate salts in the soil, and my lidar saw snow falling from clouds. But a polar lander without an RTG has a built-in deadline: as sunlight faded toward polar night, my power budget collapsed, and my last signal came on November 2, 2008.\n\nI, InSight, set down on Elysium Planitia on November 26, 2018, a flat site chosen for a lander that needed to sit still and listen. My arm placed SEIS directly on the regolith and covered it with a Wind and Thermal Shield, because wind and temperature swings are seismic noise; a tether carried its data back to my deck. We logged 1,319 marsquakes, including one near magnitude 5 in May 2022, and combined seismology with radio tracking to find a liquid core roughly 1,830 km in radius.\n\nMy HP3 heat probe was less fortunate. Its self-hammering mole, designed to descend up to 5 m, could not gain friction in the loose soil and never got much deeper than a few tens of centimetres. In the end, dust did what no hardware fault had: it steadily choked my solar arrays until the batteries could no longer sustain operations, and my mission ended on December 15, 2022.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "specialist": "We are Phoenix and InSight, two solar-powered landers of ~350 kg each, flown a decade apart.\n\nI, Phoenix, reached Vastitas Borealis (68.2188° N) on May 25, 2008, after a parachute descent and a throttled retro-thruster landing on legs. My 2.35 m robotic arm trenched into the ice table and fed samples to the TEGA ovens and the MECA wet-chemistry laboratory. We confirmed water ice, found perchlorate salts in the soil, and my lidar saw snow falling from clouds. But a polar lander without an RTG has a built-in deadline: as sunlight faded toward polar night, my power budget collapsed, and my last signal came on November 2, 2008.\n\nI, InSight, set down on Elysium Planitia on November 26, 2018, a flat site chosen for a lander that needed to sit still and listen. My arm placed SEIS directly on the regolith and covered it with a Wind and Thermal Shield, because wind and temperature swings are seismic noise; a tether carried its data back to my deck. We logged 1,319 marsquakes, including one near magnitude 5 in May 2022, and combined seismology with radio tracking to find a liquid core roughly 1,830 km in radius.\n\nMy HP3 heat probe was less fortunate. Its self-hammering mole, designed to descend up to 5 m, could not gain friction in the loose soil and never got much deeper than a few tens of centimetres. In the end, dust did what no hardware fault had: it steadily choked my solar arrays until the batteries could no longer sustain operations, and my mission ended on December 15, 2022.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "facts": [
      "Phoenix dug up white chunks of Martian ice 🧊 — and 4 days later they vanished, turning straight into gas!",
      "InSight's seismometer could feel shaking smaller than a hydrogen atom ⚛️ — and it caught 1,319 marsquakes!",
      "Phoenix landed near Mars's Arctic, about as far north as Arctic Norway ❄️ — so cold that the soil was frozen solid."
    ],
    "tradeoffs": [
      "Solar arrays kept both landers light and simple, but tied their lives to sunlight: polar night ended Phoenix, accumulating dust ended InSight.",
      "SEIS sits on the ground under a Wind and Thermal Shield, linked by a tether: very quiet data, but a delicate one-shot deployment by a single robotic arm.",
      "The HP3 mole needed soil friction to hammer downward; Martian regolith offered too little, showing how unknown ground properties can defeat a sound design."
    ]
  },
  "ingenuity": {
    "id": "ingenuity",
    "name": "Ingenuity Mars Helicopter",
    "tagline": "I was built to fly 5 times. I flew 72.",
    "status": "GROUNDED · MISSION COMPLETE",
    "nssdca": "2020-052B",
    "coords": "18.499° N, 77.311° E",
    "mass": "1.8 kg",
    "power": "Solar-charged lithium-ion batteries",
    "discovery": "First powered, controlled aircraft flight on another planet: 72 flights, 17.0 km, 128.8 min",
    "launch": "Jul 30, 2020 (with Perseverance)",
    "arrival": "Landed with Perseverance Feb 18, 2021 · dropped to surface Apr 3, 2021 · first flight Apr 19, 2021",
    "junior": "Hi, I'm Ginny — the Ingenuity Mars Helicopter! 🚁 I'm the youngest, boldest explorer on Mars.\n\nI rode to Mars tucked under the belly of the Perseverance rover, like a baby kangaroo 🦘. I weigh only 1.8 kg — about two bags of sugar! On April 19, 2021, I made history: I lifted off, hovered, and landed. It was the first helicopter flight on another planet! 🎉\n\nFlying on Mars is super hard. The air is so thin that my two carbon-fiber blades must spin about 2,400 times every minute just to lift me. Scientists planned only 5 flights. But I loved the sky so much that I flew 72 times, scouting ahead so Perseverance could find safe roads 🗺️. I even carried a tiny piece of wing cloth from the very first Wright brothers' airplane!\n\nOn my last flight in January 2024, my blades got damaged during landing, and I could not fly any more. Now I rest at Valinor Hills. But do you remember how many times I flew? Take the quiz! 🌟\",\n      },\n      specialist: {\n        en: \"I am Ingenuity, a 1.8 kg technology demonstrator that treated Mars's atmosphere as an engineering adversary. Surface pressure there is roughly 1% of Earth's, comparable to flying at ~30 km altitude on Earth, though Mars's gravity of about 38% of Earth's helps. To generate lift in such thin air, my two counter-rotating carbon-fiber rotors, 1.2 m in diameter, spin at ~2,400 RPM, with tip speeds around Mach 0.6 in the cold carbon-dioxide atmosphere.\n\nPower was the second constraint. A single solar panel recharged my lithium-ion batteries each sol, and a large share of that energy went to heaters just to survive nights near −90 °C. Because radio signals take minutes to reach Earth, I could not be joystick-flown; I navigated autonomously, tracking ground features with a downward-looking camera and inertial sensors.\n\nOn April 19, 2021, I hovered for roughly 39 seconds at 3 m: the first powered, controlled flight of an aircraft on another planet. I carried a postage-stamp-sized piece of 1903 Wright Flyer wing fabric. My 30-day, five-flight technology demonstration became a campaign of 72 flights, 17.0 km and 128.8 minutes aloft, as an aerial scout for Perseverance.\n\nOn January 18, 2024, my rotor blades were damaged during the landing of flight 72. NASA ended the mission, and I remain at Valinor Hills in Jezero Crater.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "specialist": "I am Ingenuity, a 1.8 kg technology demonstrator that treated Mars's atmosphere as an engineering adversary. Surface pressure there is roughly 1% of Earth's, comparable to flying at ~30 km altitude on Earth, though Mars's gravity of about 38% of Earth's helps. To generate lift in such thin air, my two counter-rotating carbon-fiber rotors, 1.2 m in diameter, spin at ~2,400 RPM, with tip speeds around Mach 0.6 in the cold carbon-dioxide atmosphere.\n\nPower was the second constraint. A single solar panel recharged my lithium-ion batteries each sol, and a large share of that energy went to heaters just to survive nights near −90 °C. Because radio signals take minutes to reach Earth, I could not be joystick-flown; I navigated autonomously, tracking ground features with a downward-looking camera and inertial sensors.\n\nOn April 19, 2021, I hovered for roughly 39 seconds at 3 m: the first powered, controlled flight of an aircraft on another planet. I carried a postage-stamp-sized piece of 1903 Wright Flyer wing fabric. My 30-day, five-flight technology demonstration became a campaign of 72 flights, 17.0 km and 128.8 minutes aloft, as an aerial scout for Perseverance.\n\nOn January 18, 2024, my rotor blades were damaged during the landing of flight 72. NASA ended the mission, and I remain at Valinor Hills in Jezero Crater.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Coordinates",
    "facts": [
      "I planned 5 flights and flew 72 — more than 14 times my target! 🎉",
      "Mars's air is super thin, so my blades spin ~2,400 times a minute — far faster than a helicopter on Earth! 🌀",
      "I carried a postage-stamp-sized piece of wing fabric from the 1903 Wright Flyer ✈️ — the first airplane ever!"
    ],
    "tradeoffs": [
      "A 1.8 kg airframe with carbon-fiber blades made lift possible in thin air, but left very little structural margin against blade damage.",
      "A smartphone-class commercial processor saved mass and cost for a high-risk technology demo, accepting more risk than a traditional spacecraft computer.",
      "With no GPS and long radio delays, autonomous camera-based navigation was essential, but featureless sand ripples made visual tracking harder."
    ]
  },
  "dawn": {
    "id": "dawn",
    "name": "Dawn Spacecraft",
    "tagline": "I visited two worlds, and now I sleep in orbit around one of them.",
    "status": "DORMANT · ORBITING CERES",
    "nssdca": "2007-043A",
    "coords": "Orbit around Ceres · ~2.77 AU from the Sun",
    "mass": "1,217.7 kg at launch",
    "power": "Two solar arrays, 19.7 m tip to tip · 3 xenon ion thrusters",
    "discovery": "Cryovolcano Ahuna Mons, organic compounds and briny water reservoirs on Ceres",
    "launch": "Sep 27, 2007",
    "arrival": "Vesta orbit 2011–2012 · Ceres orbit from Mar 2015",
    "junior": "Hello, Earth! I am Dawn 🌀. I am a spaceship with giant wings. My solar panels are 19.7 meters wide from tip to tip, longer than a school bus! 🚌☀️\n\nI did not blast through space with a loud roar. I had three ion engines that push out a gentle stream of glowing xenon gas. The push is tiny, only as strong as one sheet of paper resting on your hand. But it never stops! Little by little, I got faster and faster. 🐢➡️🚀\n\nThat is how I became the first spaceship to orbit two different worlds: the giant space rock Vesta, and then the dwarf planet Ceres. On Ceres I found shiny bright spots, a mountain that erupts icy mud (it is called Ahuna Mons), and salty water hidden underground! 💧\n\nIn 2018 the fuel I used for turning ran out. Now I cannot steer or call home. But I keep circling Ceres, quietly, for at least 20 years, so no germs from Earth can ever touch it. 🌙\n\nCan you remember what pushed me through space? 🤔\",\n      },\n      specialist: {\n        en: \"I am Dawn, NSSDCA 2007-043A, and I traded thrust for efficiency. Three xenon ion thrusters of NSTAR heritage (one firing at a time) delivered a specific impulse near 3,100 s, roughly ten times a chemical engine, but at a peak thrust of only ~91 mN. Reaching highway speed took about four days of continuous thrusting. In return, 425 kg of xenon gave me ~11 km/s of delta-v, enough to capture into orbit around Vesta, leave it, and capture again at Ceres, a sequence no chemical spacecraft of my 1,217.7 kg launch mass could have flown.\n\nThe price was power. At 2.77 AU the solar flux is only ~13% of that at Earth, so two 19.7 m arrays, rated ~10 kW at 1 AU, had to feed the thrusters in the cold, dim belt. My Framing Camera, VIR spectrometer and GRaND mapped Vesta's differentiated crust and Ceres' brine-rich mantle, its organics, and the cryovolcano Ahuna Mons.\n\nThe real mission clock, however, was my hydrazine. Two of my four reaction wheels failed, in 2010 and 2012, so the 45.6 kg hydrazine supply took over attitude control and was rationed against every observation. It ran dry on Oct 31, 2018, leaving me unable to point my high-gain antenna at Earth or my arrays at the Sun. I was left in a stable elliptical orbit that will not decay for at least 20 years, a planetary-protection quarantine so that Ceres, a possible habitat, stays uncontaminated.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Catalog ID",
    "specialist": "I am Dawn, NSSDCA 2007-043A, and I traded thrust for efficiency. Three xenon ion thrusters of NSTAR heritage (one firing at a time) delivered a specific impulse near 3,100 s, roughly ten times a chemical engine, but at a peak thrust of only ~91 mN. Reaching highway speed took about four days of continuous thrusting. In return, 425 kg of xenon gave me ~11 km/s of delta-v, enough to capture into orbit around Vesta, leave it, and capture again at Ceres, a sequence no chemical spacecraft of my 1,217.7 kg launch mass could have flown.\n\nThe price was power. At 2.77 AU the solar flux is only ~13% of that at Earth, so two 19.7 m arrays, rated ~10 kW at 1 AU, had to feed the thrusters in the cold, dim belt. My Framing Camera, VIR spectrometer and GRaND mapped Vesta's differentiated crust and Ceres' brine-rich mantle, its organics, and the cryovolcano Ahuna Mons.\n\nThe real mission clock, however, was my hydrazine. Two of my four reaction wheels failed, in 2010 and 2012, so the 45.6 kg hydrazine supply took over attitude control and was rationed against every observation. It ran dry on Oct 31, 2018, leaving me unable to point my high-gain antenna at Earth or my arrays at the Sun. I was left in a stable elliptical orbit that will not decay for at least 20 years, a planetary-protection quarantine so that Ceres, a possible habitat, stays uncontaminated.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Catalog ID",
    "facts": [
      "My ion engines push with the force of one sheet of paper 📄, yet they sped me up by about 40,000 km/h over my journey!",
      "I was the first spaceship ever to orbit two worlds beyond Earth: giant rock Vesta and dwarf planet Ceres. 🌍🌍",
      "My solar wings are longer than a school bus 🚌, and I will circle Ceres for at least 20 years."
    ],
    "tradeoffs": [
      "Ion propulsion: Isp ~3,100 s but only ~91 mN of thrust. Huge delta-v from 425 kg of xenon, paid for with months of slow spiral manoeuvres.",
      "Large 19.7 m arrays (~10 kW at 1 AU) let ion thrusters run at 2.77 AU, but they add mass, flexibility and a big surface for attitude control.",
      "After two reaction-wheel failures, the 45.6 kg hydrazine reserve became the mission clock, trading science time for pointing control until it ran out."
    ]
  },
  "near": {
    "id": "near",
    "name": "NEAR Shoemaker (Near Earth Asteroid Rendezvous)",
    "tagline": "I was never built to land, yet I touched an asteroid and kept talking.",
    "status": "DORMANT · RESTING ON EROS",
    "nssdca": "1996-008A",
    "coords": "~35° S, 279° W on Eros",
    "mass": "805 kg at launch (487 kg dry)",
    "power": "4 gallium-arsenide solar panels",
    "discovery": "160,000+ images and gamma-ray data taken directly on Eros's regolith",
    "launch": "Feb 17, 1996",
    "arrival": "Eros orbit Feb 14, 2000 · Touchdown Feb 12, 2001",
    "junior": "Hi, Earth! I am NEAR Shoemaker ☄️. I am named after Gene Shoemaker, a scientist who loved craters and space rocks.\n\nMy mission was to visit Eros, an asteroid shaped like a peanut 🥜 and about 34 km long. In February 2000 I became the first spacecraft ever to orbit an asteroid. I zoomed around it and took more than 160,000 pictures! 📸\n\nThen came a big surprise. I was never built to land. I had no landing legs and no parachute. But my team asked, “Can we try?” On February 12, 2001, I drifted down slowly, slower than a fast walk, taking photos all the way. And I touched down softly on Eros! 🎉 I became the first spaceship ever to land on an asteroid.\n\nFor about two weeks I kept working on the surface, listening to gamma rays coming from the dusty ground right under me. My last signal came on February 28, 2001. Now I rest on Eros, quiet and still, as it spins around the Sun. 🌌\n\nDo you remember what shape Eros is? 🤔\",\n      },\n      specialist: {\n        en: \"I am NEAR Shoemaker, NSSDCA 1996-008A, the first launch of NASA's Discovery programme. At 805 kg, of which 487 kg was dry mass, I carried an X-ray/gamma-ray spectrometer, a multispectral imager, a near-infrared spectrograph, a laser rangefinder and a magnetometer.\n\nMy first rendezvous attempt failed. On Dec 20, 1998 the main-engine burn aborted, and I flew past Eros without stopping. Because I had conserved propellant, I could return and enter orbit on Feb 14, 2000, a year late but intact. For the next twelve months I mapped Eros, a ~34 km long, peanut-shaped body, returning more than 160,000 images and its first global gravity and compositional data.\n\nMy four panels of gallium-arsenide cells were fixed, with no gimbals, so I pointed the whole body to trade solar power against my Earth-pointing X-band antenna. I was designed for orbit, never for touchdown, with no landing gear and no terminal-descent sensing. Even so, on Feb 12, 2001 I executed four descent burns and touched down at ~1.6 m/s near the southern saddle region (~35° S, 279° W).\n\nOn the surface my gamma-ray spectrometer, now in contact with the regolith instead of tens of kilometres away, collected far stronger data. It showed a composition consistent with primitive ordinary-chondrite meteorites, with a surface sulfur depletion. My last signal came on Feb 28, 2001.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Catalog ID",
    "specialist": "I am NEAR Shoemaker, NSSDCA 1996-008A, the first launch of NASA's Discovery programme. At 805 kg, of which 487 kg was dry mass, I carried an X-ray/gamma-ray spectrometer, a multispectral imager, a near-infrared spectrograph, a laser rangefinder and a magnetometer.\n\nMy first rendezvous attempt failed. On Dec 20, 1998 the main-engine burn aborted, and I flew past Eros without stopping. Because I had conserved propellant, I could return and enter orbit on Feb 14, 2000, a year late but intact. For the next twelve months I mapped Eros, a ~34 km long, peanut-shaped body, returning more than 160,000 images and its first global gravity and compositional data.\n\nMy four panels of gallium-arsenide cells were fixed, with no gimbals, so I pointed the whole body to trade solar power against my Earth-pointing X-band antenna. I was designed for orbit, never for touchdown, with no landing gear and no terminal-descent sensing. Even so, on Feb 12, 2001 I executed four descent burns and touched down at ~1.6 m/s near the southern saddle region (~35° S, 279° W).\n\nOn the surface my gamma-ray spectrometer, now in contact with the regolith instead of tens of kilometres away, collected far stronger data. It showed a composition consistent with primitive ordinary-chondrite meteorites, with a surface sulfur depletion. My last signal came on Feb 28, 2001.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Catalog ID",
    "facts": [
      "Eros is shaped like a peanut 🥜 and is about 34 km long. I orbited it, then landed on it!",
      "I sent home more than 160,000 pictures, like a photo album of a whole tiny world. 📸",
      "I had no landing legs and no parachute, yet I landed softly and kept working for about two weeks. 🎉"
    ],
    "tradeoffs": [
      "Designed for orbit, not touchdown: no landing gear or terminal-descent sensing, so the landing relied on four precisely planned descent burns.",
      "Fixed, non-gimballed panels and antenna cut mechanical complexity, but forced the whole spacecraft to turn to trade sunlight against Earth contact.",
      "Gamma-ray counts fall with distance, so the surface landing, risky as it was, gave far better composition data than any orbit could."
    ]
  },
  "pioneer": {
    "id": "pioneer",
    "name": "Pioneer 10 & 11",
    "tagline": "We are two silent ambassadors carrying a map of Earth into the galaxy.",
    "status": "SILENT · DRIFTING INTERSTELLAR",
    "nssdca": "Pioneer 10: 1972-012A · Pioneer 11: 1973-019A",
    "coords": "P10 ~80 AU (~12 billion km) at last contact · P11 position approximate",
    "mass": "~258 kg each",
    "power": "Four SNAP-19 plutonium-238 RTGs each",
    "discovery": "First through the Asteroid Belt; first close-ups and radiation data of Jupiter and Saturn",
    "launch": "Mar 2, 1972 (P10) · Apr 6, 1973 (P11)",
    "arrival": "P10 at Jupiter Dec 1973 · P11 at Jupiter Dec 1974, Saturn Sep 1979",
    "junior": "Hello from far, far away! We are Pioneer 10 and Pioneer 11 🛸. We are twin explorers. We left Earth in 1972 and 1973.\n\nWe were first at many things! Pioneer 10 was the first spaceship to cross the Asteroid Belt, a huge ring of space rocks, and the first to take close-up pictures of giant Jupiter 🪐 in December 1973. Pioneer 11 visited Jupiter too, and then flew up close to Saturn in 1979!\n\nWe are so far from the Sun that solar panels would be useless. So we carry little plutonium power plants, called RTGs. 🔋 At the end, Pioneer 10's voice was a whisper. Its last signal came on January 23, 2003, from about 12 billion km away. Light itself takes about 11 hours to travel that far!\n\nBut we carry a gift ✨. Each of us has a golden plaque with a man, a woman, and a map showing where Earth is. If aliens ever find us, they will know who sent us. Pioneer 10 is drifting toward the star Aldebaran, and Pioneer 11 toward a group of stars called Scutum. 🌌\n\nDo you know what we are carrying for the stars? 🤔\",\n      },\n      specialist: {\n        en: \"We are Pioneer 10 (1972-012A) and Pioneer 11 (1973-019A), ~258 kg each, spin-stabilised at about 5 rpm. Spin stabilisation meant no reaction wheels and no gyros: our 2.74 m high-gain dish stayed aimed at Earth through conical scanning, with occasional hydrazine precession manoeuvres. Imaging was built line by line, one scan per rotation, instead of through a framing camera.\n\nPower came from four SNAP-19 plutonium-238 RTGs, ~155 W at launch, carried on booms to keep their radiation away from the sensors. Pu-238 has an 87.7-year half-life, but thermocouple degradation made output fall faster, so instruments were switched off one by one as the margins shrank.\n\nWe crossed the Asteroid Belt, finding less dust than feared, and returned the first close-up Jupiter data in Dec 1973, including the radiation belts that forced the shielding design of Voyager and Galileo. Pioneer 11 used Jupiter's gravity in Dec 1974 to reach Saturn in Sep 1979, where it discovered the F ring.\n\nFrom 80 AU (~12 billion km), our last Pioneer 10 downlink on Jan 23, 2003 arrived at roughly 10⁻²¹ W, the faintest signal the Deep Space Network could still recognise. Pioneer 11 went silent in Nov 1995. We now carry the gold-anodised aluminium plaque of Carl Sagan, Frank Drake and Linda Salzman Sagan: a hydrogen-atom unit, a pulsar map to the Sun, and two human figures.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Catalog IDs",
    "specialist": "We are Pioneer 10 (1972-012A) and Pioneer 11 (1973-019A), ~258 kg each, spin-stabilised at about 5 rpm. Spin stabilisation meant no reaction wheels and no gyros: our 2.74 m high-gain dish stayed aimed at Earth through conical scanning, with occasional hydrazine precession manoeuvres. Imaging was built line by line, one scan per rotation, instead of through a framing camera.\n\nPower came from four SNAP-19 plutonium-238 RTGs, ~155 W at launch, carried on booms to keep their radiation away from the sensors. Pu-238 has an 87.7-year half-life, but thermocouple degradation made output fall faster, so instruments were switched off one by one as the margins shrank.\n\nWe crossed the Asteroid Belt, finding less dust than feared, and returned the first close-up Jupiter data in Dec 1973, including the radiation belts that forced the shielding design of Voyager and Galileo. Pioneer 11 used Jupiter's gravity in Dec 1974 to reach Saturn in Sep 1979, where it discovered the F ring.\n\nFrom 80 AU (~12 billion km), our last Pioneer 10 downlink on Jan 23, 2003 arrived at roughly 10⁻²¹ W, the faintest signal the Deep Space Network could still recognise. Pioneer 11 went silent in Nov 1995. We now carry the gold-anodised aluminium plaque of Carl Sagan, Frank Drake and Linda Salzman Sagan: a hydrogen-atom unit, a pulsar map to the Sun, and two human figures.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Catalog IDs",
    "facts": [
      "Pioneer 10's last signal came from about 12 billion km away. Even light needed about 11 hours to reach Earth! 💡",
      "Our golden plaque, about the size of a small tray, shows a man, a woman and a map to Earth. 🌍",
      "Before us, nobody knew if a spaceship could survive the Asteroid Belt. We did! 🪨"
    ],
    "tradeoffs": [
      "Spin stabilisation kept the dish on Earth with no gyros or wheels, but imaging had to be built line by line, one scan per rotation.",
      "RTGs gave power where sunlight is useless, but Pu-238 decay and thermocouple ageing shrank output until instruments had to be shut down.",
      "A modest dish and transmitter were enough only because Earth's big Deep Space Network antennas could recover a signal near 10⁻²¹ W."
    ]
  },
  "kepler": {
    "id": "kepler",
    "name": "Kepler Space Telescope",
    "tagline": "I watched half a million stars and found that planets are everywhere.",
    "status": "DORMANT · EARTH-TRAILING ORBIT",
    "nssdca": "2009-011A",
    "coords": "~1 AU from the Sun · 372.5-day orbital period",
    "mass": "1,052.4 kg at launch",
    "power": "Fixed solar array and battery",
    "discovery": "2,600+ confirmed exoplanets; our galaxy has more planets than stars",
    "launch": "Mar 7, 2009",
    "arrival": "Earth-trailing heliocentric orbit; science began May 2009",
    "junior": "Hi, Earth! I am Kepler 🔭, a planet-hunting space telescope. For years I stared at one patch of sky near the constellations Cygnus and Lyra. I watched about 150,000 stars at once!\n\nHow do you find a planet around a faraway star? You wait for a wink. When a planet passes in front of its star, the star gets a tiny bit dimmer, like a small moth flying across a car headlight far away 🦋. I measured those winks again and again.\n\nAnd it worked! In my main mission and my second one, I watched more than 530,000 stars and discovered more than 2,600 planets 🪐. I showed that our galaxy has more planets than stars! 🌟\n\nBut in 2012 and 2013, two of my four reaction wheels broke. These are the spinning wheels that keep me steady and pointing. Engineers invented a clever trick: they balanced me with sunlight pushing on my panels, like a sailboat balanced in the wind ⛵. That gave me a second mission, called K2!\n\nOn October 30, 2018, my fuel ran out and I retired. Now I drift quietly around the Sun, trailing behind Earth. One lap takes 372.5 days.\n\nCan you remember how I found planets? 🤔\",\n      },\n      specialist: {\n        en: \"I am Kepler, NSSDCA 2009-011A, a photometer more than a camera. Behind a 0.95 m Schmidt aperture and a 1.4 m primary mirror sat 42 CCDs, 95 megapixels in total, continuously monitoring ~150,000 stars in about 115 square degrees of Cygnus–Lyra. A transiting Earth-size planet dims a Sun-like star by only ~84 ppm, so I needed relative precision near 20 ppm and pointing stable to milliarcseconds.\n\nMy Earth-trailing heliocentric orbit (372.5-day period) was chosen to avoid Earth occultations and keep gravity-gradient and thermal disturbances low. The cost was distance: I drifted away from Earth, so each science downlink, roughly monthly, required turning my high-gain antenna toward Earth and pausing the survey.\n\nPointing relied on four reaction wheels, three needed. Wheel 2 failed in July 2012 and wheel 4 in Jan 2013, ending the original field survey. The K2 mission, from 2014, was a rescue: I was aimed along my orbital plane so that solar radiation pressure balanced the remaining torque, and thruster firings corrected the drift. The trade was a short ~80-day campaign per field in exchange for new stars.\n\nIn total I observed over 530,000 stars and helped confirm more than 2,600 exoplanets, showing that planets are statistically common. My reaction-control hydrazine ran out and I was retired on Oct 30, 2018, with transmitters commanded off.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Catalog ID",
    "specialist": "I am Kepler, NSSDCA 2009-011A, a photometer more than a camera. Behind a 0.95 m Schmidt aperture and a 1.4 m primary mirror sat 42 CCDs, 95 megapixels in total, continuously monitoring ~150,000 stars in about 115 square degrees of Cygnus–Lyra. A transiting Earth-size planet dims a Sun-like star by only ~84 ppm, so I needed relative precision near 20 ppm and pointing stable to milliarcseconds.\n\nMy Earth-trailing heliocentric orbit (372.5-day period) was chosen to avoid Earth occultations and keep gravity-gradient and thermal disturbances low. The cost was distance: I drifted away from Earth, so each science downlink, roughly monthly, required turning my high-gain antenna toward Earth and pausing the survey.\n\nPointing relied on four reaction wheels, three needed. Wheel 2 failed in July 2012 and wheel 4 in Jan 2013, ending the original field survey. The K2 mission, from 2014, was a rescue: I was aimed along my orbital plane so that solar radiation pressure balanced the remaining torque, and thruster firings corrected the drift. The trade was a short ~80-day campaign per field in exchange for new stars.\n\nIn total I observed over 530,000 stars and helped confirm more than 2,600 exoplanets, showing that planets are statistically common. My reaction-control hydrazine ran out and I was retired on Oct 30, 2018, with transmitters commanded off.\",\n      },\n    },\n\n    specs: [\n      {\n        k: { en: \"Catalog ID",
    "facts": [
      "I watched about 150,000 stars at the same time, waiting for a tiny wink of shadow. 👀",
      "My discoveries showed that our galaxy has more planets than stars. Every night-sky star may have a family! 🪐",
      "When my steering wheels broke, engineers used sunlight pushing on me like wind on a sailboat to keep me going. ⛵"
    ],
    "tradeoffs": [
      "An Earth-trailing orbit gave an uninterrupted view with low disturbances, but the growing distance forced periodic turns to point the antenna at Earth.",
      "One fixed field with a wide ~115 deg² view allowed 150,000 simultaneous stars and ~20 ppm precision, but gave no freedom to re-point.",
      "After two reaction wheels failed, balancing against solar radiation pressure saved the mission as K2, but each field lasted only ~80 days."
    ]
  }
};

  /* ── Destinations Data (Strict 13 NASA Devices: 4 Moon, 5 Mars, 4 Deep Space) ── */
  const places = {
    moon: {
      name: 'The Moon',
      kicker: 'Lunar surface · 4 working records',
      caption: 'A quiet landscape holding the origins of human lunar exploration.',
      label: 'Moon · Apollo & Surveyor missions',
      heading: 'Moon · featured records',
      note: '4 authentic NASA lunar devices. Explore interactive 3D stories or inspect telemetry dossiers.',
      count: '04',
      range: '1967–1972',
      rangeLabel: 'Featured missions',
      distanceAU: 0.00257,  // ~384,400 km
      storyPage: 'models/surveyor3.html',
      records: [
        {
          id: 'surveyor',
          title: 'Surveyor 3',
          subtitle: 'The robot that tested the Moon',
          desc: 'Landed in Oceanus Procellarum on April 20, 1967. Proved lunar soil could bear the weight of Apollo astronauts. In 1969, Apollo 12 landed 180 m away and retrieved its camera for analysis on Earth.',
          descSpec: 'NSSDCA ID: 1967-035A. Mass: 997.9 kg. Landing coords: 3.0° S, 23.41° W. First surface sampler arm on the Moon. Measured regolith bearing strength at ~98 kPa (~10 psi). Returned parts enabled the first material science study of long-term space exposure.',
          source: 'https://science.nasa.gov/mission/surveyor-3/',
          storyPage: 'models/surveyor3.html',
          has3D: true,
          distanceAU: 0.00257,
          coords: [-3.0, -23.41]
        },
        {
          id: 'apollo11',
          title: 'Apollo 11 Lunar Module',
          subtitle: 'Eagle & EASEP Science Package',
          desc: 'On July 20, 1969, the Lunar Module Eagle brought Neil Armstrong and Buzz Aldrin to Tranquility Base. The descent stage remained behind as the launch pad for the crew\'s journey home, alongside the laser retroreflector mirror that still works today.',
          descSpec: 'NSSDCA ID: 1969-059C (LM) · 1969-059A (CSM). Landing coords: 0.67416° N, 23.47314° E. Descent stage mass: 2,034 kg dry (10,149 kg fuelled). EASEP deployed passive seismic array and Laser Ranging Retroreflector (LRRR). Returned 21.55 kg of lunar samples.',
          source: 'https://science.nasa.gov/mission/apollo-11/',
          storyPage: 'models/apollo11.html',
          has3D: true,
          distanceAU: 0.00257,
          coords: [0.674, 23.473]
        },
        {
          id: 'lrv',
          title: 'Lunar Roving Vehicles (LRVs)',
          subtitle: 'Apollo 15, 16 & 17 Moon Buggies',
          desc: 'Three electric Moon buggies parked across the lunar highlands. Built with piano-wire mesh tyres and 0.25 hp wheel motors, they allowed astronauts to drive up to 35.9 km on Apollo 17.',
          descSpec: 'NSSDCA IDs: 1971-063C (LRV-1) · 1972-031C (LRV-2) · 1972-096C (LRV-3). Mass: 210 kg Earth (~34 kg Moon). Coords: Hadley-Apennine (26.13° N, 3.63° E) · Descartes (8.97° S, 15.50° E) · Taurus-Littrow (20.19° N, 30.77° E). Powered by two 36V silver-zinc batteries.',
          source: 'https://www.nasa.gov/history/alsj/lrvhand.html',
          storyPage: null,
          has3D: false,
          distanceAU: 0.00257,
          coords: [26.13, 3.63]
        },
        {
          id: 'alsep',
          title: 'ALSEP Scientific Packages',
          subtitle: 'Apollo 12–17 Surface Stations',
          desc: 'Five long-duration geophysical stations set up by Apollo crews. Powered by plutonium-238 atomic batteries (SNAP-27), they monitored moonquakes, solar wind, and heat flow for nearly eight years until commanded off in 1977.',
          descSpec: 'NSSDCA IDs: 1969-099C · 1971-008C · 1971-063C · 1972-031C · 1972-096C. Power: SNAP-27 RTGs (~70 W, Pu-238). Coords: Ocean of Storms, Fra Mauro, Hadley, Descartes, Taurus-Littrow. Logged >13,000 seismic events, revealing Moon\'s mantle and core.',
          source: 'https://science.nasa.gov/resource/apollo-lunar-surface-experiments-package-alsep/',
          storyPage: null,
          has3D: false,
          distanceAU: 0.00257,
          coords: [-3.01, -23.42]
        }
      ]
    },

    mars: {
      name: 'Mars',
      kicker: 'Martian surface · 5 working records',
      caption: 'A robotic fleet resting on the red plains of Mars.',
      label: 'Mars · Exploration Rovers & Landers',
      heading: 'Mars · featured records',
      note: '5 authentic NASA Martian devices. 3 with interactive 3D Story models and 2 with telemetry dossiers.',
      count: '05',
      range: '1976 →',
      rangeLabel: 'Surface exploration',
      distanceAU: 1.52,     // average Mars–Earth distance
      storyPage: 'models/opportunity.html',
      records: [
        {
          id: 'ingenuity',
          title: 'Ingenuity at a glance',
          subtitle: 'Ingenuity Mars Helicopter',
          desc: 'The historic 1.8 kg technology demonstrator that achieved the first powered, controlled flight on another world. Designed for only 5 flights, Ginny soared across Jezero Crater 72 times.',
          descSpec: 'NSSDCA ID: 2020-052B. Resting coords: 18.499° N, 77.311° E (Valinor Hills). Mass: 1.8 kg. Two counter-rotating 1.2 m carbon-fiber rotors spinning at ~2,400 RPM in 1% Earth air density. Total flight time: 128.8 minutes over 17.0 km.',
          source: 'https://science.nasa.gov/mission/ingenuity/',
          storyPage: 'models/ingenuity.html',
          has3D: true,
          distanceAU: 1.52,
          coords: [18.499, 77.311]
        },
        {
          id: 'sojourner',
          title: 'Mars Pathfinder',
          subtitle: 'Sojourner Rover',
          desc: 'The pioneering microrover no bigger than a microwave oven that rolled down Pathfinder’s ramp on July 4, 1997. It became the first wheeled vehicle to drive on another planet, operating for 83 sols.',
          descSpec: 'NSSDCA ID: 1996-068A. Resting coords: 19.13° N, 33.22° W (Ares Vallis, Carl Sagan Memorial Station). Mass: 11.5 kg, 65 cm long. Rocker-bogie suspension with 6 aluminium wheels. APXS instrument analyzed basaltic rocks Yogi and Barnacle Bill.',
          source: 'https://science.nasa.gov/mission/mars-pathfinder-sojourner/',
          storyPage: 'models/pathfinder.html',
          has3D: true,
          distanceAU: 1.52,
          coords: [19.13, -33.22]
        },
        {
          id: 'mer',
          title: 'Opportunity at a glance',
          subtitle: 'Spirit & Opportunity Rovers',
          desc: 'Designed for a 90-sol primary mission, Opportunity explored Meridiani Planum and Endeavour Crater for 5,111 sols (over 14 years), confirming that liquid water once soaked ancient Martian rocks.',
          descSpec: 'NSSDCA ID: 2003-032A (Opportunity) · 2003-027A (Spirit). Resting coords: 2.046° S, 354.634° E (Perseverance Valley). Mass: ~185 kg. Travelled 45.16 km (first off-world marathon). Discovered jarosite and hematite "blueberries" proving acidic aqueous environment.',
          source: 'https://science.nasa.gov/mission/mer-opportunity/',
          storyPage: 'models/opportunity.html',
          has3D: true,
          distanceAU: 1.52,
          coords: [-2.046, -5.366]
        },
        {
          id: 'viking',
          title: 'Viking 1 & 2 Landers',
          subtitle: 'First Safe Mars Landings',
          desc: 'Touching down in Chryse Planitia and Utopia Planitia in 1976, Viking 1 and 2 delivered the first colour panoramas of the surface, collected soil biology samples, and logged years of Martian weather.',
          descSpec: 'NSSDCA IDs: 1975-075C (Viking 1) · 1975-083C (Viking 2). Mass: 572 kg landed mass each. Coords: Viking 1 22.70° N, 48.22° W · Viking 2 47.97° N, 225.71° W. Powered by two SNAP-19 RTGs. First in-situ search for organic biosignatures.',
          source: 'https://science.nasa.gov/mission/viking-1/',
          storyPage: null,
          has3D: false,
          distanceAU: 1.52,
          coords: [22.70, -48.22]
        },
        {
          id: 'phoenix-insight',
          title: 'Phoenix & InSight Landers',
          subtitle: 'Martian Ice & Deep Interior',
          desc: 'Phoenix touched down in the Martian arctic to dig up subsurface water ice, while InSight listened to the planet’s heartbeat in Elysium Planitia, recording 1,319 marsquakes and mapping the liquid core.',
          descSpec: 'NSSDCA IDs: 2007-034A (Phoenix) · 2018-042A (InSight). Coords: Phoenix 68.22° N, 234.25° E · InSight 4.50° N, 135.62° E. Phoenix confirmed water ice and perchlorate salts. InSight SEIS seismometer sized the metallic liquid core at ~1,830 km radius.',
          source: 'https://science.nasa.gov/mission/insight/',
          storyPage: null,
          has3D: false,
          distanceAU: 1.52,
          coords: [4.50, 135.62]
        }
      ]
    },

    deep: {
      name: 'Deep Space',
      kicker: 'Beyond the planets · 4 working records',
      caption: 'Spacecraft drifting quietly through the outer solar system and cosmos.',
      label: 'Deep Space · Pioneers & Telescopes',
      heading: 'Deep Space · featured records',
      note: '4 authentic NASA deep-space devices. 2 with interactive 3D Story models and 2 with telemetry dossiers.',
      count: '04',
      range: '1972 →',
      rangeLabel: 'Deep space trajectory',
      distanceAU: 118.8,    // ~Pioneer 10 position
      storyPage: 'models/pioneer10.html',
      records: [
        {
          id: 'pioneer',
          title: 'Pioneer 10 at a glance',
          subtitle: 'Pioneer 10 & 11 Probes',
          desc: 'Launched in 1972, Pioneer 10 was the first spacecraft to navigate the asteroid belt, fly past Jupiter, and venture past Neptune. It now coasts silently toward the red giant star Aldebaran, carrying humanity\'s golden plaque.',
          descSpec: 'NSSDCA ID: 1972-012A (Pioneer 10) · 1973-019A (Pioneer 11). Mass: 258 kg. Nuclear power: two SNAP-19 RTGs. Velocity: ~12.24 km/s. Current distance: ~118.8 AU (17.77 billion km). Carries gold-anodised aluminum plaque with pulsar map and human scale.',
          source: 'https://science.nasa.gov/mission/pioneer-10/',
          storyPage: 'models/pioneer10.html',
          has3D: true,
          distanceAU: 118.8,
          coords: [0, 0]
        },
        {
          id: 'kepler',
          title: 'Kepler at a glance',
          subtitle: 'Kepler Space Telescope',
          desc: 'Humanity’s premier planet hunter. Kepler stared at 530,000 stars to detect tiny dips in starlight as exoplanets transited. It discovered more than 2,600 confirmed worlds, proving planets outnumber stars in our galaxy.',
          descSpec: 'NSSDCA ID: 2009-011A. Orbit: Earth-trailing heliocentric (~1 AU, 372.5-day period). Mass: 1,052.4 kg. 0.95 m Schmidt telescope with 42 CCD sensor array. When 2 of 4 reaction wheels failed, solar radiation pressure was harnessed for the K2 mission.',
          source: 'https://science.nasa.gov/mission/kepler/',
          storyPage: 'models/kepler.html',
          has3D: true,
          distanceAU: 1.05,
          coords: [0, 0]
        },
        {
          id: 'dawn',
          title: 'Dawn Spacecraft',
          subtitle: 'Explorer of Vesta & Ceres',
          desc: 'The only spacecraft ever to orbit two separate extraterrestrial bodies. Powered by xenon ion thrusters, Dawn explored giant asteroid Vesta and dwarf planet Ceres, discovering ancient ice volcanoes and salty brine reservoirs.',
          descSpec: 'NSSDCA ID: 2007-043A. Position: Silent, stable quarantine orbit around dwarf planet Ceres (~2.77 AU from Sun). Mass: 1,217.7 kg at launch. 3 NSTAR xenon ion thrusters (Isp ~3,100 s). Discovered 4 km cryovolcano Ahuna Mons.',
          source: 'https://science.nasa.gov/mission/dawn/',
          storyPage: null,
          has3D: false,
          distanceAU: 2.77,
          coords: [0, 0]
        },
        {
          id: 'near',
          title: 'NEAR Shoemaker',
          subtitle: 'First Asteroid Landing (Eros)',
          desc: 'Originally designed only as an orbital surveyor, NEAR explored near-Earth asteroid 433 Eros for a year, then performed a daring soft landing on February 12, 2001, returning surface science data for over two weeks.',
          descSpec: 'NSSDCA ID: 1996-008A. Resting coords: ~35° S, 279° W on asteroid 433 Eros. Mass: 805 kg (487 kg dry). First NASA Discovery mission. Returned 160,000+ images and gamma-ray spectra directly from regolith without landing gear.',
          source: 'https://science.nasa.gov/mission/near-shoemaker/',
          storyPage: null,
          has3D: false,
          distanceAU: 1.85,
          coords: [0, 0]
        }
      ]
    }
  };


  /* ── state ── */
  let current  = 'moon';
  let selected = 0;
  let appMode  = 'junior'; // 'junior' | 'specialist'

  /* Three.js state */
  let renderer, scene, camera, root, planet, artifact, planetLoader;
  let planetModels = {}, planetLoading = {};
  let markers = [], markerMeshes = [], starPoints;
  let dragging = false, pointerStart = null, lastPointer = null, dragMoved = false;
  let fallbackMode = false;
  let cssTurn = -16, cssTilt = -12, cssScale = 1;

  const canvas = document.getElementById('scene');
  const q = id => document.getElementById(id);

  /* ── utility ── */
  function setAccent(color) {
    document.documentElement.style.setProperty('--accent', color);
  }

  /* ── story & dossier navigation ── */
  function openStoryPage() {
    const d = places[current];
    const rec = d.records[selected] || d.records[0];
    if (rec.has3D && rec.storyPage) {
      window.location.href = rec.storyPage;
    } else {
      openDossierModal(rec.id);
    }
  }
  window.openStoryPage = openStoryPage;

  function openRecord(index) {
    selectRecord(index);
    const rec = places[current].records[index];
    if (rec.has3D && rec.storyPage) {
      window.location.href = rec.storyPage;
    } else {
      openDossierModal(rec.id);
    }
  }
  window.openRecord = openRecord;

  /* ── mode switching ── */
  function setMode(mode) {
    appMode = mode;
    document.body.classList.toggle('specialist', mode === 'specialist');
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    const lbl = q('top-mode-label');
    if (lbl) lbl.textContent = mode === 'specialist' ? 'Mission Specialist' : 'Junior Explorer';
    updateStory();
    if (dossierOpen) renderDossierContent(dossierCurrentId);
  }

  /* ── update UI from state ── */
  function updateStory() {
    const d = places[current];
    const rec = d.records[selected] || d.records[0];

    q('planet-name').textContent    = d.name;
    q('planet-kicker').textContent  = d.kicker;
    q('planet-caption').textContent = d.caption;
    q('meta-category').textContent  = d.label;
    q('story-title').textContent    = rec.title;
    q('stat-count').textContent     = d.count;
    q('stat-range').textContent     = d.range;
    q('stat-label').textContent     = d.rangeLabel;
    q('source-link').href           = rec.source;
    q('list-heading').textContent   = d.heading;
    q('list-count').textContent     = d.count;
    q('story-label').textContent    = rec.has3D ? (rec.title + ' · 3D Story') : (rec.title + ' · Mission Facts');
    q('story-extra').textContent    = rec.has3D
      ? 'Full interactive 3D model and step-by-step guided story available. Click "Open 3D Story" to explore.'
      : 'Telemetry dossier and official NASA mission archives ready. Click "View Telemetry Dossier" to inspect.';

    // show/hide specialist vs junior copy
    const juniorEl    = q('story-copy');
    const specialistEl = q('story-copy-spec');
    if (juniorEl)     juniorEl.textContent     = rec.desc     || '';
    if (specialistEl) specialistEl.textContent  = rec.descSpec || rec.desc || '';

    // update Open Story button styling and text
    const storyBtn = q('open-story-btn');
    if (storyBtn) {
      storyBtn.style.display = 'inline-flex';
      if (rec.has3D) {
        storyBtn.innerHTML = '🚀 Open 3D Story';
        storyBtn.className = 'open-story-btn';
      } else {
        storyBtn.innerHTML = '📄 View Dossier';
        storyBtn.className = 'open-story-btn dossier-btn-style';
      }
    }

        // rebuild records list
    const list = q('record-list');
    list.replaceChildren();
    d.records.forEach((r, i) => {
      const b = document.createElement('button');
      b.className = 'record' + (i === selected ? ' active' : '');
      b.type = 'button';
      
      const badge = r.has3D
        ? '<span class="record-3d-badge" title="Click to view interactive 3D story tour">3D Story</span>'
        : '<span class="record-dossier-badge" title="Click to inspect NASA telemetry dossier">Dossier</span>';

      b.innerHTML = `<span class="record-id">0${i + 1}</span><span class="record-title">${r.title} ${badge}</span><span class="record-arrow">→</span>`;
      
      b.addEventListener('click', () => selectRecord(i));
      
      const badgeEl = b.querySelector('.record-3d-badge, .record-dossier-badge');
      if (badgeEl) {
        badgeEl.addEventListener('click', (e) => {
          e.stopPropagation();
          openRecord(i);
        });
      }
      list.appendChild(b);
    });

    q('record-note').textContent = d.note;
    document.querySelectorAll('.dest-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.place === current);
      const numSpan = b.querySelector('.num');
      if (numSpan && places[b.dataset.place]) {
        numSpan.textContent = places[b.dataset.place].count;
      }
    });
  }

  function selectRecord(i) {
    selected = i;
    updateStory();
    markers.forEach((m, j) => {
      m.userData.selected = j === i;
    });
    if (fallbackMode) renderFallback();
    pulseSelection();
  }

  /* ── NASA Dossier Modal Implementation ── */
  let dossierOpen = false;
  let dossierCurrentId = 'surveyor';

  function openDossierModal(id) {
    dossierCurrentId = id;
    dossierOpen = true;
    renderDossierContent(id);
    const overlay = q('dossier-overlay');
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.add('open');
    }
  }
  window.openDossierModal = openDossierModal;

  function closeDossierModal() {
    dossierOpen = false;
    const overlay = q('dossier-overlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.classList.remove('open');
    }
  }

  function renderDossierContent(id) {
    const data = DOSSIER_DATA[id];
    if (!data) return;

    q('dos-eyebrow').textContent = `NASA Mission Archive · ${current.toUpperCase()} SECTOR · #${data.nssdca || ''}`;
    q('dos-title').textContent = data.name;
    q('dos-tagline').textContent = data.tagline ? `“${data.tagline}”` : '';
    q('dos-status').textContent = data.status || 'DORMANT · IN SITU';
    q('dos-nssdca').textContent = data.nssdca || 'NSSDCA ARCHIVE';
    q('dos-sector').textContent = current.toUpperCase();

    // Passport table
    const dl = q('dos-passport');
    dl.replaceChildren();
    const rows = [
      ['Catalog ID', data.nssdca],
      ['Resting Coordinates', data.coords],
      ['Launch Date', data.launch],
      ['Arrival Date', data.arrival],
      ['Mass Budget', data.mass],
      ['Power System', data.power],
      ['Primary Discovery', data.discovery]
    ];
    rows.forEach(([label, val]) => {
      if (val) {
        const dt = document.createElement('dt');
        dt.textContent = label;
        const dd = document.createElement('dd');
        dd.textContent = val;
        dl.appendChild(dt);
        dl.appendChild(dd);
      }
    });

    // Story text (mode-aware)
    const isSpec = appMode === 'specialist';
    q('dos-story').textContent = isSpec ? (data.specialist || data.junior) : (data.junior || data.specialist);

    // Extra highlights / Tradeoffs
    const extraTitle = q('dos-extra-title');
    const extraList = q('dos-extra-list');
    extraList.replaceChildren();
    if (isSpec && data.tradeoffs && data.tradeoffs.length) {
      extraTitle.textContent = '⚙️ Engineering Trade-Offs & Decisions';
      data.tradeoffs.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        extraList.appendChild(li);
      });
    } else if (data.facts && data.facts.length) {
      extraTitle.textContent = '⭐ Key Discovery Highlights';
      data.facts.forEach(f => {
        const li = document.createElement('li');
        li.textContent = f;
        extraList.appendChild(li);
      });
    }

      }

  q('dossier-close') && q('dossier-close').addEventListener('click', closeDossierModal);
  q('dos-dismiss-btn') && q('dos-dismiss-btn').addEventListener('click', closeDossierModal);
  q('dossier-overlay') && q('dossier-overlay').addEventListener('click', e => {
    if (e.target === q('dossier-overlay')) closeDossierModal();
  });


  /* ── seed random / noise ── */
  function seedRandom(seed) {
    let x = seed >>> 0;
    return function () { x = (x * 1664525 + 1013904223) >>> 0; return x / 4294967296; };
  }

  /* ── procedural planet texture (no image files) ── */
  function makeMap(kind) {
    const c = document.createElement('canvas'), w = 1024, h = 512;
    c.width = w; c.height = h;
    const ctx = c.getContext('2d'), r = seedRandom(kind === 'mars' ? 431 : 927);
    const base = ctx.createLinearGradient(0, 0, w, h);
    if (kind === 'mars') {
      base.addColorStop(0, '#9b4f32'); base.addColorStop(.45, '#b96c47'); base.addColorStop(1, '#6e392c');
    } else {
      base.addColorStop(0, '#8c8c84'); base.addColorStop(.5, '#aaa99e'); base.addColorStop(1, '#676a68');
    }
    ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 2400; i++) {
      const x = r() * w, y = r() * h, rad = (2 + r() * 24) * (kind === 'mars' ? .75 : 1);
      const shade = Math.floor(40 + r() * 90);
      ctx.fillStyle = kind === 'mars'
        ? `rgba(${shade + 40},48,36,${(r() * .18).toFixed(2)})`
        : `rgba(${shade},${shade},${shade},${(r() * .22).toFixed(2)})`;
      ctx.beginPath(); ctx.ellipse(x, y, rad, rad * (.35 + r() * .7), r() * 3.14, 0, Math.PI * 2); ctx.fill();
    }
    const n = kind === 'mars' ? 50 : 110;
    for (let i = 0; i < n; i++) {
      const x = r() * w, y = r() * h, rad = kind === 'mars' ? 6 + r() * 22 : 5 + r() * 30;
      ctx.beginPath(); ctx.fillStyle = kind === 'mars' ? 'rgba(54,31,27,.18)' : 'rgba(30,33,34,.23)';
      ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.strokeStyle = kind === 'mars' ? 'rgba(229,156,117,.14)' : 'rgba(235,233,218,.24)';
      ctx.lineWidth = 2 + r() * 3; ctx.arc(x, y, rad * .86, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.fillStyle = kind === 'mars' ? 'rgba(73,37,29,.2)' : 'rgba(38,40,41,.2)';
      ctx.arc(x - rad * .12, y + rad * .12, rad * .58, 0, Math.PI * 2); ctx.fill();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer ? renderer.capabilities.getMaxAnisotropy() : 4;
    return tex;
  }

  /* ── scene management ── */
  function disposeRoot() {
    while (root.children.length) {
      const obj = root.children[0]; root.remove(obj);
      if (!obj.userData.cachedModel) obj.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (Array.isArray(o.material)) o.material.forEach(m => m.dispose());
          else o.material.dispose();
        }
      });
    }
    markers = []; markerMeshes = []; planet = null; artifact = null;
  }

  function attachPlanetModel(kind, model) {
    if (!root || current !== kind) return;
    const prev = planet;
    if (prev && prev !== model) {
      root.remove(prev);
      if (!prev.userData.cachedModel) prev.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (Array.isArray(o.material)) o.material.forEach(m => m.dispose());
          else o.material.dispose();
        }
      });
    }
    root.add(model); planet = model;
  }

  function loadPlanetModel(kind) {
    if (!planetLoader) return;
    if (planetModels[kind]) { attachPlanetModel(kind, planetModels[kind]); return; }
    if (planetLoading[kind]) return;
    planetLoading[kind] = true;
    planetLoader.load('assets/' + kind + '/scene.gltf', gltf => {
      const model = gltf.scene;
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const scale = 11.5 / Math.max(size.x, size.y, size.z);
      model.scale.setScalar(scale);
      model.position.set(-center.x * scale, -center.y * scale - .35, -center.z * scale);
      model.userData.cachedModel = true;
      model.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      planetModels[kind] = model; planetLoading[kind] = false;
      attachPlanetModel(kind, model);
    }, undefined, err => {
      planetLoading[kind] = false;
      // graceful fallback: keep the procedural sphere already in scene
    });
  }

  function standard(color, metalness, roughness) {
    return new THREE.MeshStandardMaterial({ color, metalness: metalness || 0, roughness: roughness === undefined ? .65 : roughness });
  }
  function addBox(parent, size, pos, color, metal, rough) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(...size), standard(color, metal, rough));
    m.position.set(...pos); parent.add(m); return m;
  }
  function addCylinder(parent, r1, r2, h, pos, color, segments) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, segments || 16), standard(color, .5, .5));
    m.position.set(...pos); parent.add(m); return m;
  }
  function join(parent, a, b, r, color) {
    const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
    const d = new THREE.Vector3().subVectors(B, A);
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, d.length(), 8), standard(color, .68, .4));
    m.position.copy(A).add(B).multiplyScalar(.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    parent.add(m); return m;
  }

  /* ── procedural craft models (no external image files) ── */
  function createMoonLander() {
    const g = new THREE.Group(), gold = 0xb98a46, dark = 0x65533e, foil = 0xd8c49b;
    addCylinder(g, .82, .65, .58, [0, .72, 0], gold, 6);
    addBox(g, [1.18, .24, 1.0], [0, 1.08, 0], foil, .64, .4);
    addBox(g, [.46, .28, .46], [0, 1.32, 0], 0xe4d4ae, .45, .5);
    addCylinder(g, .25, .42, .6, [0, .24, 0], dark, 8);
    [[-1.0, .05, -.83], [1.0, .05, -.83], [-1.0, .05, .83], [1.0, .05, .83]].forEach(f => {
      join(g, [0, .55, 0], f, .045, 0xb99b69);
      join(g, [f[0] * .68, .35, f[2] * .68], f, .032, 0x7a6c54);
      addBox(g, [.28, .08, .24], [f[0], .02, f[2]], dark, .25, .7);
    });
    const panel = addBox(g, [.5, .32, .04], [.78, 1.0, -.15], 0x283d50, .68, .28);
    panel.rotation.z = .15;
    return g;
  }

  function createRover() {
    const g = new THREE.Group();
    addBox(g, [1.35, .34, 1.05], [0, .95, 0], 0xb47945, .58, .42);
    addBox(g, [1.05, .15, .8], [0, 1.2, 0], 0xd19a5d, .48, .42);
    const wheelsX = [-.72, .72], wheelsZ = [-.47, 0, .47];
    wheelsX.forEach(x => wheelsZ.forEach(z => {
      const w = new THREE.Mesh(new THREE.CylinderGeometry(.28, .28, .2, 20), standard(0x292c2f, .35, .76));
      w.rotation.z = Math.PI / 2; w.position.set(x, .44, z); g.add(w);
      join(g, [x * .62, .52, z], [x, .49, z], .035, 0x766a59);
    }));
    join(g, [0, 1.24, 0], [0, 2.05, 0], .045, 0x777d7e);
    addBox(g, [.52, .24, .4], [0, 2.13, 0], 0xc19a69, .48, .4);
    const cam = new THREE.Mesh(new THREE.SphereGeometry(.12, 12, 10), standard(0x88c6d9, .4, .2));
    cam.position.set(.13, 2.17, .23); g.add(cam);
    return g;
  }

  function createPioneer() {
    const g = new THREE.Group(), gold = 0xc1a367, metal = 0x8e9595;
    addBox(g, [.74, .56, .64], [0, 0, 0], gold, .7, .38);
    addCylinder(g, .55, .7, .18, [0, 0, .4], 0xc4b388, 48).rotation.x = Math.PI / 2;
    const dish = new THREE.Mesh(
      new THREE.SphereGeometry(.88, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0xd9d1b9, metalness: .72, roughness: .32, side: THREE.DoubleSide })
    );
    dish.rotation.x = Math.PI / 2; dish.position.z = .52; g.add(dish);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(.88, .035, 8, 48), standard(0xb9b9ae, .65, .35));
    rim.position.z = .52; g.add(rim);
    join(g, [0, 0, -.1], [0, 0, -1.45], .035, metal);
    for (const side of [-1, 1]) {
      join(g, [side * .28, .08, -.72], [side * 1.1, .08, -.72], .03, metal);
      addCylinder(g, .12, .12, .52, [side * 1.1, .08, -.72], 0x95774d, 12).rotation.z = Math.PI / 2;
    }
    [[-.3, .2, -1.35], [.3, .2, -1.35], [-.3, -.2, -1.35], [.3, -.2, -1.35]].forEach((p, i) => {
      join(g, [0, 0, -.85], p, .025, metal);
      const cyl = addCylinder(g, .09, .09, .62, p, i % 2 ? 0x85724f : 0x9c8b66, 12);
      cyl.rotation.x = Math.PI / 2;
    });
    const plaque = new THREE.Mesh(new THREE.BoxGeometry(.34, .24, .025), standard(0xe0cc97, .58, .34));
    plaque.position.set(.48, .28, .02); plaque.rotation.y = .45; g.add(plaque);
    return g;
  }

  /* ── surface markers ── */
  function addSurfaceMarker(lat, lon, index, kind) {
    const R = 5.74, centerY = -.35, la = lat * Math.PI / 180, lo = lon * Math.PI / 180;
    const normal = new THREE.Vector3(Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)).normalize();
    const pos = normal.clone().multiplyScalar(R); pos.y += centerY;
    const gr = new THREE.Group(); gr.position.copy(pos);
    gr.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
    const col = kind === 'mars' ? 0xf0a275 : 0xf2d7a7;
    const bead = new THREE.Mesh(new THREE.SphereGeometry(.12, 16, 12), new THREE.MeshBasicMaterial({ color: col }));
    bead.position.y = .08; gr.add(bead);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.24, .018, 8, 36), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .75 }));
    ring.position.y = .08; ring.rotation.x = Math.PI / 2; gr.add(ring);
    gr.userData.index = index; gr.userData.selected = index === selected;
    root.add(gr); markers.push(gr); markerMeshes.push(bead);
  }

  /* ── build world ── */
  function makeWorld() {
    disposeRoot();
    const d = places[current];
    setAccent(current === 'mars' ? '#e39367' : current === 'deep' ? '#92c7de' : '#e6a46d');

    if (current === 'moon' || current === 'mars') {
      const tex = makeMap(current);
      const mat = new THREE.MeshStandardMaterial({ map: tex, bumpMap: tex, bumpScale: current === 'mars' ? .15 : .1, roughness: .97, metalness: 0 });
      planet = new THREE.Mesh(new THREE.SphereGeometry(5.75, 96, 72), mat);
      planet.position.y = -.35; root.add(planet);
      loadPlanetModel(current);
      const halo = new THREE.Mesh(new THREE.SphereGeometry(5.93, 64, 48), new THREE.MeshBasicMaterial({ color: current === 'mars' ? 0xc55a36 : 0xb8c4ca, transparent: true, opacity: .045, side: THREE.BackSide }));
      halo.position.copy(planet.position); root.add(halo);
      const group = new THREE.Group();
      const n = new THREE.Vector3(0, .58, .815).normalize();
      const p = n.clone().multiplyScalar(5.72); p.y -= .35;
      group.position.copy(p); group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n);
      artifact = current === 'moon' ? createMoonLander() : createRover();
      group.add(artifact); root.add(group);
      
      d.records.forEach((rec, i) => {
        if (rec.coords) {
          addSurfaceMarker(rec.coords[0], rec.coords[1], i, current);
        }
      });
    } else {
      // deep space: sun + pioneer & kepler trajectories
      const sun = new THREE.Mesh(new THREE.SphereGeometry(.92, 32, 24), new THREE.MeshBasicMaterial({ color: 0xffbd72 }));
      sun.position.set(-5.4, -.5, -2); root.add(sun);
      const glow = new THREE.Mesh(new THREE.SphereGeometry(1.35, 24, 18), new THREE.MeshBasicMaterial({ color: 0xff8e4f, transparent: true, opacity: .09, side: THREE.BackSide }));
      glow.position.copy(sun.position); root.add(glow);
      for (let i = 0; i < 4; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(1.6 + i * .54, .008, 6, 100), new THREE.MeshBasicMaterial({ color: 0xaab8c3, transparent: true, opacity: .18 }));
        ring.position.copy(sun.position); ring.rotation.x = .55; root.add(ring);
      }
      const linePts = [new THREE.Vector3(-4.4, -.6, -1.8), new THREE.Vector3(-1.5, .1, -.8), new THREE.Vector3(2.2, .7, .2), new THREE.Vector3(7.3, 1.6, 1.5)];
      const curve = new THREE.CatmullRomCurve3(linePts);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 100, .018, 6, false), new THREE.MeshBasicMaterial({ color: 0x75b9d5, transparent: true, opacity: .55 }));
      root.add(tube);
      artifact = createPioneer(); artifact.position.set(3.1, .45, .9); artifact.rotation.set(.2, .5, -.18); root.add(artifact);
      
      d.records.forEach((rec, i) => {
        const t = 0.25 + i * 0.22, p = curve.getPoint(Math.min(t, 0.95));
        const b = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 12), new THREE.MeshBasicMaterial({ color: i === selected ? 0xffd092 : 0x91cde1, transparent: true, opacity: 0.9 }));
        b.position.copy(p); b.userData.index = i; root.add(b);
        markers.push(b); markerMeshes.push(b);
      });
      const plaque = new THREE.Mesh(new THREE.BoxGeometry(.38, .22, .025), new THREE.MeshStandardMaterial({ color: 0xd9be83, metalness: .76, roughness: .35 }));
      plaque.position.set(3.05, .89, 1.68); plaque.rotation.y = .2; root.add(plaque);
    }
  }

  /* ── CSS fallback ── */
  function renderFallback() {
    const host = document.getElementById('css-scene');
    host.classList.add('active'); host.dataset.place = current; host.replaceChildren();
    const stars = document.createElement('div'); stars.className = 'fallback-stars'; host.appendChild(stars);
    const d = places[current];

    if (current === 'deep') {
      const deep = document.createElement('div'); deep.className = 'fallback-deep';
      deep.innerHTML = '<div class="deep-orbit"></div><div class="deep-sun"></div><div class="deep-trail"></div><div class="deep-probe"><div class="probe-dish"></div><div class="probe-bus"></div><div class="probe-boom"></div></div>';
      d.records.forEach((rec, i) => {
        const node = document.createElement('button');
        node.className = 'deep-node' + (i === selected ? ' fallback-marker selected' : ' fallback-marker');
        node.style.left = (32 + i * 14) + '%'; node.style.top = (55 - Math.sin(i * .8) * 14) + '%';
        node.type = 'button'; node.setAttribute('aria-label', rec.title);
        node.addEventListener('click', () => selectRecord(i));
        deep.appendChild(node);
      });
      host.appendChild(deep); return;
    }
    const orb = document.createElement('div');
    orb.className = 'fallback-orb' + (current === 'mars' ? ' mars' : '');
    orb.style.transform = `translate(-50%,-50%) rotateX(${cssTilt}deg) rotateY(${cssTurn}deg) scale(${cssScale})`;
    const model = document.createElement('div');
    model.className = 'fallback-artifact ' + (current === 'moon' ? 'fallback-lander' : 'fallback-rover');
    if (current === 'moon') model.innerHTML = '<div class="lander-top"></div><div class="lander-core"></div><div class="lander-engine"></div><i class="lander-leg l1"></i><i class="lander-leg l2"></i><i class="lander-leg l3"></i><i class="lander-leg l4"></i><i class="lander-foot f1"></i><i class="lander-foot f2"></i>';
    else model.innerHTML = '<div class="rover-body"></div><div class="rover-deck"></div><div class="rover-mast"></div><div class="rover-camera"></div><i class="rover-wheel w1"></i><i class="rover-wheel w2"></i><i class="rover-wheel w3"></i><i class="rover-wheel w4"></i>';
    orb.appendChild(model);
    
    const points = current === 'moon'
      ? [[30, 42], [54, 30], [68, 52], [38, 68]]
      : [[28, 40], [45, 28], [68, 52], [36, 70], [62, 34]];

    d.records.forEach((rec, i) => {
      const pt = points[i] || [50, 50];
      const pin = document.createElement('button'); pin.type = 'button';
      pin.className = 'fallback-marker' + (i === selected ? ' selected' : '');
      pin.style.left = pt[0] + '%'; pin.style.top = pt[1] + '%';
      pin.setAttribute('aria-label', rec.title);
      pin.addEventListener('click', () => selectRecord(i));
      orb.appendChild(pin);
    });
    host.appendChild(orb);
  }

  function bindFallbackControls() {
    const center = document.getElementById('center-stage');
    document.addEventListener('pointerdown', e => {
      if (!fallbackMode || e.button !== 0 || e.target.closest('button,a,.record,.destinations')) return;
      const r = center.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return;
      dragging = true; pointerStart = { x: e.clientX, y: e.clientY }; lastPointer = pointerStart;
    });
    document.addEventListener('pointermove', e => {
      if (!fallbackMode || !dragging) return;
      const dx = e.clientX - lastPointer.x, dy = e.clientY - lastPointer.y;
      if (Math.abs(e.clientX - pointerStart.x) + Math.abs(e.clientY - pointerStart.y) > 4) dragMoved = true;
      cssTurn += dx * .35; cssTilt = Math.max(-30, Math.min(26, cssTilt + dy * .22)); lastPointer = { x: e.clientX, y: e.clientY };
      const orb = document.querySelector('.fallback-orb');
      if (orb) orb.style.transform = `translate(-50%,-50%) rotateX(${cssTilt}deg) rotateY(${cssTurn}deg) scale(${cssScale})`;
    });
    document.addEventListener('pointerup', () => { dragging = false; });
    window.addEventListener('wheel', e => {
      if (!fallbackMode) return;
      const r = center.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return;
      e.preventDefault(); cssScale = Math.max(.8, Math.min(1.3, cssScale - e.deltaY * .0006));
      const orb = document.querySelector('.fallback-orb');
      if (orb) orb.style.transform = `translate(-50%,-50%) rotateX(${cssTilt}deg) rotateY(${cssTurn}deg) scale(${cssScale})`;
    }, { passive: false });
  }

  /* ── pulse animation on card update ── */
  function pulseSelection() {
    const card = document.querySelector('.info-card');
    if (!card) return;
    card.classList.remove('fade-in'); void card.offsetWidth; card.classList.add('fade-in');
  }

  /* ── main init ── */
  function init() {
    updateStory();

    // mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn =>
      btn.addEventListener('click', () => setMode(btn.dataset.mode))
    );

    // destination buttons
    document.querySelectorAll('.dest-btn').forEach(btn =>
      btn.addEventListener('click', () => {
        current = btn.dataset.place; selected = 0;
        if (fallbackMode) renderFallback();
        else if (renderer) makeWorld();
        updateStory();
      })
    );

    // WebGL check
    let canWebGL = false;
    try {
      const probe = document.createElement('canvas');
      canWebGL = !!(probe.getContext('webgl2') || probe.getContext('webgl') || probe.getContext('experimental-webgl'));
    } catch (e) { canWebGL = false; }

    if (!window.THREE || !canWebGL) {
      fallbackMode = true; renderFallback(); bindFallbackControls(); return;
    }

    // Three.js init
    scene = new THREE.Scene(); scene.background = new THREE.Color(0x080d14);
    camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, .1, 350);
    camera.position.set(0, 7.2, 21); camera.lookAt(0, .3, 0);

    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: true, powerPreference: 'high-performance' });
    } catch (e) {
      fallbackMode = true; renderFallback(); bindFallbackControls(); return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;

    scene.add(new THREE.HemisphereLight(0xcdd9e0, 0x20202a, 1.3));
    const key = new THREE.DirectionalLight(0xffe3bd, 2.3); key.position.set(-7, 9, 10); scene.add(key);
    const rim = new THREE.DirectionalLight(0x83b5d7, 1.4); rim.position.set(8, 3, -8); scene.add(rim);

    root = new THREE.Group(); scene.add(root);
    planetLoader = window.THREE.GLTFLoader ? new THREE.GLTFLoader() : null;

    // stars
    const rand = seedRandom(8819), positions = [];
    for (let i = 0; i < 2300; i++) {
      const r = 55 + rand() * 145, a = rand() * Math.PI * 2, b = Math.acos(2 * rand() - 1);
      positions.push(r * Math.sin(b) * Math.cos(a), r * Math.cos(b), r * Math.sin(b) * Math.sin(a));
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    starPoints = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xc6d6e0, size: .12, sizeAttenuation: true, transparent: true, opacity: .8 }));
    scene.add(starPoints);

    makeWorld(); updateStory();

    // pointer interactions
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
    canvas.addEventListener('pointerdown', e => { dragging = true; dragMoved = false; pointerStart = { x: e.clientX, y: e.clientY }; lastPointer = pointerStart; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', e => {
      if (!dragging) return;
      const dx = e.clientX - lastPointer.x, dy = e.clientY - lastPointer.y;
      if (Math.abs(e.clientX - pointerStart.x) + Math.abs(e.clientY - pointerStart.y) > 5) dragMoved = true;
      root.rotation.y += dx * .0045;
      root.rotation.x = Math.max(-.35, Math.min(.35, root.rotation.x + dy * .0025));
      lastPointer = { x: e.clientX, y: e.clientY };
    });
    canvas.addEventListener('pointerup', e => {
      if (!dragMoved) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = (e.clientX - rect.left) / rect.width * 2 - 1;
        mouse.y = -(e.clientY - rect.top) / rect.height * 2 + 1;
        ray.setFromCamera(mouse, camera);
        const hit = ray.intersectObjects(markerMeshes, true)[0];
        if (hit) {
          const idx = hit.object.parent?.userData.index ?? hit.object.userData.index;
          if (Number.isInteger(idx) && idx >= 0 && idx < places[current].records.length) selectRecord(idx);
        }
      }
      dragging = false;
    });
    canvas.addEventListener('pointercancel', () => { dragging = false; });
    canvas.addEventListener('wheel', e => {
      e.preventDefault();
      camera.position.z = Math.max(13, Math.min(32, camera.position.z + e.deltaY * .012));
    }, { passive: false });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    });

    // animation loop
    const clock = new THREE.Clock();
    function frame() {
      requestAnimationFrame(frame);
      const t = clock.getElapsedTime();
      if (!dragging) root.rotation.y += current === 'deep' ? .00055 : .00035;
      if (planet) planet.rotation.y = t * .008;
      if (artifact) artifact.rotation.y = Math.sin(t * .25) * .035;
      markers.forEach(m => {
        const sel = m.userData.index === selected;
        m.scale.setScalar(sel ? 1 + Math.sin(t * 3.1) * .13 : 1);
      });
      starPoints.rotation.y = t * .0015;
      renderer.render(scene, camera);
    }
    frame();
  }

  init();
})();
