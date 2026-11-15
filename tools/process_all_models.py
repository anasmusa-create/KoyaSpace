import os
import json
import re

DOWNLOADS = r'C:\Users\hp\Downloads\Telegram Desktop'
MODELS_DIR = r'C:\AntigravityProjects\NasaChallenge\models'

# Configs for all 7 models
CONFIGS = {
    "surveyor3": {
        "src": os.path.join(MODELS_DIR, "surveyor3.html"),
        "dest": os.path.join(MODELS_DIR, "surveyor3.html"),
        "craftName": "Surveyor 3",
        "craftType": "lander",
        "nssdcaId": "1967-035A",
        "archiveName": "Surveyor 3 Archive, NASA/JPL",
        "distanceAU": 0.00257,
        "juniorSteps": [
            "I am Surveyor 3. I landed on the Moon in 1967, two years before Apollo. My mission was to prove that the lunar dust was strong enough to support human boots and heavy spacecraft.",
            "Before my flight, some scientists feared that the Moon was covered in deep dust quicksand that would swallow any landing probe. NASA built me to find out the truth firsthand.",
            "I launched on April 17, 1967, atop an Atlas-Centaur rocket from Cape Canaveral. Three days later, I was descending directly toward the lunar Ocean of Storms.",
            "During final descent, bright shiny rocks confused my radar altimeter, and my engines didn't shut down in time. I hit the surface, bounced 10 metres high, touched down again, bounced 3 metres, and finally came to rest. I landed three times in one mission!",
            "Within an hour of settling into my crater, I activated my television camera and transmitted the first clear, crisp panoramas of Oceanus Procellarum back to Earth.",
            "My most famous tool was an electric soil-mechanics scoop on an extendable pantograph arm. I reached out 1.5 metres, dug four deep trenches, and pushed down on the lunar soil.",
            "My telemetry proved the lunar soil had bearing strength comparable to wet coastal sand—about 10 psi. I gave NASA flight directors the green light for Apollo astronauts to land safely.",
            "On May 4, 1967, the long two-week lunar night fell over Oceanus Procellarum. Temperatures plummeted to -150°C, draining my batteries. I went quietly to sleep after completing my primary mission.",
            "More than two years later, on November 19, 1969, Apollo 12 astronauts Pete Conrad and Alan Bean executed a precision pinpoint landing just 180 metres away from me.",
            "Conrad and Bean walked over to my crater rim, examined my weathered frame, and clipped off my television camera, scoop, and tubing to take back to laboratories on Earth.",
            "I became the only robotic spacecraft ever visited by astronauts on another world. The parts brought home revealed how years of cosmic rays, solar radiation, and micrometeorites affect space hardware.",
            "My descent frame remains resting on the Moon forever, standing as an enduring testament to the robots that paved the path for human footsteps on another celestial body."
        ],
        "specialistSteps": [
            "NSSDCA ID: 1967-035A. I am Surveyor 3, third in NASA's unmanned lunar soft-landing series. Mass: 997.9 kg at launch; 294.3 kg dry touchdown mass. Prime contractor: Hughes Aircraft Company under JPL direction.",
            "Mission Objective: Determine mechanical bearing capacity, thermal characteristics, and radar reflectivity of lunar regolith in Oceanus Procellarum prior to Apollo lunar module descent.",
            "Trajectory & Propulsion: Launched 07:05:01 UT via Atlas-Centaur (AC-12) from LC-36B. Powered descent employed a 38-45 kN solid propellant retrorocket and three variable-thrust monopropellant hydrazine vernier engines.",
            "Dynamic Touchdown Anomaly: Lunar surface reflectivity fooled the Doppler radar altimeter beam. Verniers failed to cut off at 4.3 m radar gate, resulting in two rebound bounces (10 m and 3 m) before terminal touchdown at 00:04:17 UT.",
            "Optical Subsystem: Single vidicon TV camera equipped with 25-100 mm focal length zoom lens, variable focal aperture (f/4 to f/22), and color filter wheel. Transmitted 6,326 frame images over S-band link.",
            "Surface Sampler Mechanics: Pantograph arm articulated in azimuth (112°) and elevation (+32° to -42°). Scoop exerted 180 N bearing force and dug four trenches up to 17.5 cm deep into the regolith.",
            "Geotechnical Telemetry: Bearing capacity evaluated at ~0.55 N/cm² (~55 kPa) under static footpad loading, increasing to ~98 kPa at 5 cm depth. Cohesive shear strength confirmed adequate for LM-5 footpad landing gear.",
            "Terminal Cryogenic Quench: Survived 336 hours of continuous daylight surface operations. S-band telemetry cut off 00:04 UT on May 4, 1967, due to battery voltage drop below 16V during lunar night entry.",
            "Pinpoint Apollo 12 Rendezvous: On 19 November 1969, Apollo 12 LM-6 Intrepid touched down at 3.01° S, 23.42° W, exactly 183 m from my position, demonstrating targeted landing guidance.",
            "In-Situ Retrieval Operations: Conrad and Bean excised 10 kg of components, including the vidicon camera and scoop assembly, using specialized hand tools during EVA-2 (3.8-hour duration).",
            "Terrestrial Metallurgical Analysis: Returned components exhibited micrometeoroid pitting densities of ~10³ pits/m², optical solar reflector browning from UV radiation, and Streptococcus mitis bacterial spore survival controversy.",
            "Permanent Lunar Heritage Site: Listed under NASA Historic Preservation Guidelines. My frame remains preserved in the vacuum of Oceanus Procellarum as humanity's first robot-to-human extraterrestrial rendezvous site."
        ],
        "quiz": [
            {"q": "Why did Surveyor 3 bounce twice when it landed?", "options": ["It was intentionally designed to bounce", "Radar altimeter was confused by shiny rocks", "Hydrazine tanks exploded", "The Moon's gravity was too weak"], "answer": 1, "explain": "Highly reflective rocks confused the radar altimeter, preventing timely vernier cutoff."},
            {"q": "How many TV images did Surveyor 3 transmit to Earth?", "options": ["326", "1,000", "6,326", "63,260"], "answer": 2, "explain": "Surveyor 3 transmitted 6,326 frame images over its 14-day surface operational lifespan."},
            {"q": "What Apollo mission visited Surveyor 3 on the Moon?", "options": ["Apollo 11", "Apollo 12", "Apollo 13", "Apollo 14"], "answer": 1, "explain": "Apollo 12 astronauts Pete Conrad and Alan Bean landed 180 m away in November 1969."},
            {"q": "What major component did the astronauts retrieve and return to Earth?", "options": ["Solar battery", "Television camera", "Main engine nozzle", "Hydrazine tank"], "answer": 1, "explain": "Astronauts retrieved the TV camera, sample scoop, and tubing for laboratory analysis on Earth."}
        ]
    },

    "apollo11": {
        "src": os.path.join(DOWNLOADS, "apollo_11_lunar_module_easep_1969_059c.html"),
        "dest": os.path.join(MODELS_DIR, "apollo11.html"),
        "craftName": "Apollo 11 Lunar Module (Eagle)",
        "craftType": "lander",
        "nssdcaId": "1969-059C",
        "archiveName": "Apollo 11 Mission Archive, NASA NSSDCA",
        "distanceAU": 0.00257,
        "juniorSteps": [
            "I am Eagle, the Apollo 11 Lunar Module. On July 20, 1969, I carried Neil Armstrong and Buzz Aldrin down to the surface of the Moon for humanity's first lunar landing.",
            "I was built in two separate parts: a golden descent stage that functioned as my landing legs and rocket brake, and a top ascent cabin where the astronauts lived and piloted.",
            "After separating from the Command Module Columbia in lunar orbit, I fired my descent engine to slow down and begin my historic descent to Tranquility Base.",
            "As we descended, my guidance computer triggered alarms because it was receiving too much radar information at once! Armstrong took manual control and steered past a boulder crater to land safely.",
            "With less than 30 seconds of fuel remaining, my footpad probes touched the lunar dust: 'Contact light! Houston, Tranquility Base here. The Eagle has landed.'",
            "Six hours after touchdown, Neil Armstrong stepped down my ladder onto the lunar surface, declaring: 'That's one small step for man, one giant leap for mankind.'",
            "We planted an American flag supported by a metal crossbar, and left a stainless steel plaque that reads: 'Here men from the planet Earth first set foot upon the Moon. We came in peace for all mankind.'",
            "The crew deployed the Early Apollo Scientific Experiments Package (EASEP) on the surface, including a seismometer to listen for moonquakes and a laser reflector mirror.",
            "After 21 hours and 36 minutes on the lunar surface, Armstrong and Aldrin fired my ascent engine. My top half lifted off, using my gold descent stage as its launch pad.",
            "My ascent stage climbed smoothly back into lunar orbit and docked with Michael Collins aboard Columbia. After transferring moon rocks and crew, I was jettisoned.",
            "My gold descent stage and laser retroreflector still sit at Tranquility Base today. Scientists still shoot lasers at my mirror from Earth to measure the Moon's distance down to the millimetre!"
        ],
        "specialistSteps": [
            "NSSDCA ID: 1969-059C. I am LM-5 Eagle: 15,103 kg fuelled launch mass, manufactured by Grumman Aerospace. Two-stage crewed vehicle designed specifically for vacuum lunar descent and ascent.",
            "Descent Subsystems: 2,034 kg dry descent stage structure with four foldable legs and crushed aluminium honeycomb shock absorbers. Propelled by a 45 kN throttleable hypergolic Descent Propulsion System (DPS).",
            "Guidance & Powered Descent Initiation: At 15 km altitude, powered descent initiated using Apollo Guidance Computer (AGC) Block II with 2,048 words of RAM and 36,864 words of ROM.",
            "Overload Alarms & Touchdown Margin: At 1,800 m altitude, 1201 and 1202 executive overflow alarms occurred as rendezvous radar stole CPU cycles. Armstrong initiated P66 semi-manual steering, touching down with ~25 s fuel margin.",
            "Tranquility Base Emplacement: Touchdown confirmed at 20:17:40 UT on 20 July 1969 at 0.67416° N, 23.47314° E. 1.7 m long contact sensing probes on three footpads initiated engine shutdown.",
            "EVA Surface Protocol: At 02:56:15 UT on July 21, Armstrong stepped onto regolith. Over 2 hours and 31 minutes of EVA, the crew gathered 21.55 kg of pristine lunar core, bulk, and contingency samples.",
            "Commemorative Engineering: Deployed nylon American flag with horizontal telescoping rod, and affixed Apollo 11 commemorative plaque to descent ladder leg strut #1.",
            "EASEP Deployment: Deployed PSEP (Passive Seismic Experiment Package) powered by 34 W solar array, logging moonquakes until August 1969, and LRRR (Laser Ranging Retroreflector) with 100 quartz corner cubes.",
            "Ascent Propulsion System (APS): At 17:54 UT on July 21, the 16 kN constant-thrust hypergolic ascent engine fired with 100% reliability, consuming Aerozine-50 and nitrogen tetroxide propellant.",
            "Lunar Orbit Rendezvous & Disposal: Docked with CSM Columbia at 21:24 UT. Following crew and sample transfer, Eagle's ascent stage was jettisoned at 00:15 UT on July 22, eventually impacting the lunar surface.",
            "Ongoing Science Telemetry: Eagle's passive LRRR retroreflector array requires no electrical power and continues to bounce pulsed ruby and Nd:YAG lasers from observatories on Earth, verifying General Relativity."
        ],
        "quiz": [
            {"q": "What computer alarms sounded during Eagle's lunar descent?", "options": ["404 and 500 errors", "1201 and 1202 overload alarms", "Engine fire alarms", "Low oxygen alarms"], "answer": 1, "explain": "1201 and 1202 alarms indicated AGC CPU overload from the rendezvous radar radar interface."},
            {"q": "How much fuel margin was left when Eagle touched down?", "options": ["Under 30 seconds", "Over 10 minutes", "Empty — engine stalled", "Two hours"], "answer": 0, "explain": "Neil Armstrong landed Eagle with less than 30 seconds of propellant remaining in the descent tanks."},
            {"q": "What experiment left by Apollo 11 is still operational today?", "options": ["Solar wind collector", "Laser Ranging Retroreflector (LRRR)", "Television broadcast unit", "Passive seismometer"], "answer": 1, "explain": "The Laser Ranging Retroreflector uses passive quartz mirrors and still reflects Earth lasers today."},
            {"q": "What was the name of the Apollo 11 Command Module?", "options": ["Intrepid", "Columbia", "Endeavour", "Discovery"], "answer": 1, "explain": "The Command Module piloted in lunar orbit by Michael Collins was named Columbia."}
        ]
    },

    "ingenuity": {
        "src": os.path.join(DOWNLOADS, "Ingenuity__the_helicopter_that_flew_on_Mars.html"),
        "dest": os.path.join(MODELS_DIR, "ingenuity.html"),
        "craftName": "Ingenuity Mars Helicopter",
        "craftType": "helicopter",
        "nssdcaId": "2020-052B",
        "archiveName": "Mars 2020 Mission Archive, NASA/JPL",
        "distanceAU": 1.52,
        "juniorSteps": [
            "I am Ingenuity, the first aircraft to fly on another planet. I proved that powered, controlled flight is possible in the ultra-thin air of Mars!",
            "My name was chosen from high school student essays by Vaneeza Rupani of Alabama. I weighed only 1.8 kg on Earth—about as light as a toaster!",
            "I travelled to Mars tucked securely underneath the belly of the Perseverance rover. We launched on July 30, 2020, and landed in Jezero Crater on February 18, 2021.",
            "In April 2021, Perseverance dropped me onto the cold surface of Mars. For the first time, I had to survive the freezing Martian night (-90°C) with my own solar battery heater.",
            "On April 19, 2021, I made history! I spun my twin carbon-fiber blades at 2,400 RPM, climbed 3 metres into the Martian sky, hovered for 39 seconds, and landed gently.",
            "My initial goal was just five test flights over 30 days. But I performed so well that NASA kept extending my mission for almost three years!",
            "I became an aerial scout for Perseverance. I flew ahead to take aerial photos of rocky fields, sandy ridges, and river delta cliffs to plan safe driving routes.",
            "I even flew over the discarded parachute and backshell that protected Perseverance during landing, taking engineering photos to help design future Mars landers.",
            "With each flight, engineers tested my limits. I flew up to 24 metres high, reached speeds over 36 km/h, and travelled across distances greater than 700 metres in a single flight.",
            "On Flight 72 in January 2024, during a landing in featureless sandy terrain, one of my rotor blades struck a dune and broke. I landed safely, but could no longer fly.",
            "In total, I completed 72 flights, logged over 128 minutes aloft, and flew 17 kilometres. My mission opened the skies of other worlds forever!"
        ],
        "specialistSteps": [
            "NSSDCA ID: 2020-052B. I am Ingenuity (Mars Helicopter Scout): 1.8 kg total mass, developed by NASA/JPL with AeroVironment. Autonomous coaxial rotorcraft for Martian atmospheric flight.",
            "Aerodynamic Engineering: Two coaxial counter-rotating 1.2 m carbon-fiber rotor blades spinning at 2,400–2,700 RPM to generate lift in Mars atmospheric density (~1% of Earth sea-level, ~0.020 kg/m³).",
            "Cruise & Deployment Integration: Transported inside Mars 2020 aeroshell attached via Mars Helicopter Delivery System (MHDS) to Perseverance rover's belly pan.",
            "Autonomous Thermal Survival: Powered by six Sony Li-ion batteries (35–43 Wh usable capacity) recharged by mast-mounted 2.5 W solar panel. Electrical heaters prevent electronics from freezing below -90°C.",
            "Historic Flight 01 Telemetry: Executed on April 19, 2021. Vertical climb to 3.0 m, 96-degree yaw rotation, 39.1-second hover, and touchdown at Wright Brothers Field (0.64 G Martian gravity).",
            "Tech Demo Phase Transition: Completed nominal 30-sol/5-flight technology demonstration, validating visual-inertial odometry algorithms, Kalman filters, and tilt-rotor cyclic blade control.",
            "Operational Scout Operations: Transitioned to operational partner for rover Perseverance. Acquired high-resolution color RTE (Return-To-Earth) imaging of Jezero delta outcrops.",
            "Entry Debris Reconnaissance: On Flight 26 (April 19, 2022), captured 10 aerial images of Perseverance's backshell and supersonic parachute impact site from 8 m altitude.",
            "Envelope Expansion Telemetry: Reached maximum altitude of 24.0 m on Flight 61, maximum groundspeed of 10.0 m/s (36 km/h) on Flight 62, and maximum single-flight distance of 708.9 m on Flight 25.",
            "Flight 72 Terminal Incident: On 18 January 2024, visual odometry tracking degraded during descent over featureless sand ripples; nav camera shadows caused rotor-ground strike, damaging all four blade tips.",
            "Final Telemetry Synthesis: Logged 72 flights, 128.8 minutes total cumulative flight duration, and 17.0 km total ground track distance. Established aerospace benchmarks for Dragonfly and future aerial explorers."
        ],
        "quiz": [
            {"q": "How fast do Ingenuity's rotor blades spin to generate lift in Mars' thin air?", "options": ["400 RPM", "2,400–2,700 RPM", "10,000 RPM", "50 RPM"], "answer": 1, "explain": "Ingenuity spins its 1.2 m carbon-fiber blades at 2,400–2,700 RPM, about 5 times faster than Earth helicopters."},
            {"q": "How many flights was Ingenuity originally designed to complete?", "options": ["1 flight", "5 flights", "72 flights", "500 flights"], "answer": 1, "explain": "Ingenuity was built as a 30-day technology demonstration designed for only 5 flights, but achieved 72!"},
            {"q": "What piece of aviation history did Ingenuity carry beneath its solar panel?", "options": ["A coin from Apollo 11", "Fabric from the Wright Brothers' 1903 Flyer", "A piece of Sputnik 1", "A feather from a falcon"], "answer": 1, "explain": "Engineers taped a postage-stamp-sized piece of fabric from the Wright Brothers' 1903 Flyer wing to Ingenuity."},
            {"q": "What caused the end of Ingenuity's flight operations on Flight 72?", "options": ["The solar panel was completely covered in dust", "Rotor blade tips were damaged during landing in sand dunes", "Batteries failed during winter", "Computer memory was erased"], "answer": 1, "explain": "Navigational tracking over featureless sand dunes caused a hard touchdown that fractured the carbon-fiber blade tips."}
        ]
    },

    "pathfinder": {
        "src": os.path.join(DOWNLOADS, "mars_pathfinder_nasa_science.html"),
        "dest": os.path.join(MODELS_DIR, "pathfinder.html"),
        "craftName": "Mars Pathfinder & Sojourner",
        "craftType": "rover",
        "nssdcaId": "1996-068A",
        "archiveName": "Mars Pathfinder Mission Archive, NASA/JPL",
        "distanceAU": 1.52,
        "juniorSteps": [
            "I am Mars Pathfinder and my microrover Sojourner. On July 4, 1997, we landed on Mars and changed planetary exploration forever by demonstrating that small, affordable rovers could explore other worlds.",
            "I was designed as part of NASA's 'Faster, Better, Cheaper' Discovery program. My lander carried three triangular solar petals that opened up like a flower after touchdown.",
            "Instead of firing heavy retrorockets until touching the ground, I plummeted into the atmosphere and inflated huge, 24-lobed airbags that wrapped around me like giant bubble wrap!",
            "I hit the Martian plain at over 50 km/h, bounced 15 times into the sky—bouncing higher than a five-story building—and rolled for a full kilometre before coming to rest.",
            "Once stopped, my airbags deflated and retracted. My petal panels unfolded, righting the lander and revealing my little companion: the Sojourner rover!",
            "Our landing site was Ares Vallis, a massive ancient outflow channel carved by catastrophic floods billions of years ago. It was a giant rock garden full of diverse geological treasures.",
            "Sojourner was no bigger than a microwave oven and weighed just 11.5 kg! On July 5, 1997, it rolled down my ramp onto the red dirt, becoming the first wheeled rover ever driven on another planet.",
            "Sojourner had a six-wheeled rocker-bogie suspension that let it climb over rocks twice its wheel height without tipping over. It carried an APXS sensor to sniff the chemical elements in Martian stones.",
            "Over 83 days, Sojourner inspected famous Martian rocks nicknamed 'Barnacle Bill' and 'Yogi', proving that Martian rocks had chemical compositions similar to volcanic andesite on Earth.",
            "My lander was renamed the Carl Sagan Memorial Station. Together, we returned 16,500 photos and 8.5 million weather measurements of temperature, wind, and atmospheric pressure.",
            "Though built to last only a month, we operated for almost three times our design life until September 27, 1997. We proved that rovers were the future of Mars exploration!"
        ],
        "specialistSteps": [
            "NSSDCA ID: 1996-068A. I am Mars Pathfinder (Discovery 1 Mission) and microrover Sojourner. Total launch mass: 890 kg (lander 370 kg, rover 11.5 kg, cruise stage 570 kg). Managed by NASA/JPL.",
            "Cost-Effective Architectural Paradigm: Developed under NASA's 'Faster, Better, Cheaper' initiative with a total development cap of $265 million, proving non-orbital direct entry from hyperbolic trajectory.",
            "Direct Hyperbolic Entry Dynamics: Entered Martian atmosphere directly at 7.26 km/s on July 4, 1997. Decelerated via 70-degree sphere-cone aeroshell experiencing peak deceleration of 16.1 g.",
            "Airbag Attenuation Subsystem: Deployed four multi-lobed Vectran fabric airbags with 24 individual lobes. Rebounded 15 times up to 15 m altitude at initial impact of 14 m/s before settling.",
            "Petal Actuator Self-Righting: Three triangular structural petals actuated by stepper motors at 0.5 deg/s, establishing ground contact orientation at Ares Vallis (19.13° N, 33.22° W).",
            "Geological Context of Ares Vallis: Selected for high depositional rock diversity resulting from cataclysmic ancestral catastrophic flooding across Chryse Planitia basin.",
            "Sojourner Rover Mechanics: 65 cm long, 11.5 kg microrover employing patented 6-wheel rocker-bogie kinematic suspension. Powered by 0.22 m² GaAs solar array generating 16 W peak power.",
            "In-Situ Elemental Spectroscopy: Equipped with Alpha Proton X-ray Spectrometer (APXS) using curium-244 radioactive source to measure alpha backscatter, proton emission, and X-ray fluorescence.",
            "Petrological Findings: Analyzed rocks 'Barnacle Bill' (andesitic basalt with high silicon dioxide content) and 'Yogi' (basaltic rock indicating crustal differentiation).",
            "Atmospheric & Meteorological Telemetry: Deployed Atmospheric Structure Instrument/Meteorology Package (ASI/MET), logging diurnal thermal cycles and identifying repeated convective dust devils.",
            "Mission Completion & Legacy: Transmitted 2.3 billion bits of data, including 16,500 lander frames and 550 rover frames. Signal loss on sol 83 occurred from battery thermal depletion."
        ],
        "quiz": [
            {"q": "What novel technology did Mars Pathfinder use to cushion its landing?", "options": ["Water landing in a lake", "Giant inflatable multi-lobed airbags", "Solid sky-crane cables", "Spring-loaded pogo legs"], "answer": 1, "explain": "Pathfinder inflated 24-lobed Vectran airbags and bounced 15 times across the surface before coming to rest."},
            {"q": "What was the name of the microrover carried by Mars Pathfinder?", "options": ["Curiosity", "Sojourner", "Spirit", "Perseverance"], "answer": 1, "explain": "The 11.5 kg microrover was named Sojourner in honor of abolitionist Sojourner Truth."},
            {"q": "What type of suspension allowed Sojourner to climb rocks without tipping?", "options": ["Pneumatic pistons", "Rocker-bogie suspension", "Tread tracks like a tank", "Magnetic levitation"], "answer": 1, "explain": "The rocker-bogie kinematic mechanism balances the chassis across six wheels over rugged terrain."},
            {"q": "What was the Mars Pathfinder lander renamed after touchdown?", "options": ["Carl Sagan Memorial Station", "Tranquility Station", "Curie Outpost", "Armstrong Base"], "answer": 0, "explain": "NASA renamed the lander Carl Sagan Memorial Station in honor of astronomer Carl Sagan."}
        ]
    },

    "opportunity": {
        "src": os.path.join(MODELS_DIR, "opportunity.html"),
        "dest": os.path.join(MODELS_DIR, "opportunity.html"),
        "craftName": "Opportunity Rover (MER-B)",
        "craftType": "rover",
        "nssdcaId": "2003-032A",
        "archiveName": "Mars Exploration Rover Mission Archive, NASA/JPL",
        "distanceAU": 1.52,
        "juniorSteps": [
            "I am Opportunity, the rover that was built to last 90 days on Mars and kept going for nearly 15 years! My journey is one of the greatest endurance adventures in human history.",
            "A nine-year-old girl named Sofi Collis won the NASA naming contest for me and my twin sister Spirit. She wrote: 'In America, I can make all my dreams come true. Thank you for the Spirit and the Opportunity.'",
            "On January 25, 2004, I bounded onto Meridiani Planum inside giant airbags and rolled straight into a small crater. It was an interplanetary hole-in-one with ancient bedrock right at my wheels!",
            "When I ground into the rocks with my robotic arm, I made a revolutionary discovery: sulfate minerals called jarosite that only form in liquid water, and tiny grey hematite spheres nicknamed 'blueberries'!",
            "In January 2005, while driving across the vast sand plains, I discovered a dark, pitted lump of metal: 'Heat Shield Rock', the first meteorite ever identified on another planet.",
            "Not every sol was easy! In April 2005, my wheels got stuck deep into a soft sand dune called 'Purgatory Ripple'. It took my engineers on Earth five nerve-wracking weeks to carefully spin me free.",
            "In September 2006, I arrived at Victoria Crater—a massive bowl 730 metres wide with 70-metre cliffs. I drove along the edge and peered inside to read billions of years of layered Martian climate history.",
            "My scientists challenged me to drive toward Endeavour Crater, 21 kilometres away! The trek took three years. By the time I arrived, I had driven the distance of a full Olympic marathon on Mars.",
            "As years passed, I lost the steering on my right-front wheel, my heater was stuck on, and my flash memory grew forgetful. Yet dust-cleaning wind gusts kept sweeping my solar panels clean, keeping me alive sol after sol.",
            "In May 2018, a catastrophic global dust storm swept across Mars, blocking sunlight and turning the sky dark as night. My solar panels couldn't generate power to keep my batteries warm.",
            "On June 10, 2018, I sent my final telemetry signal from Perseverance Valley: my power was dropping critically low. For eight months, NASA sent hundreds of wake-up commands, but I never replied.",
            "Over 5,111 sols, I drove 45.16 kilometres—more than any wheeled vehicle has ever driven on another world—proving that ancient Mars was once warm, wet, and habitable for life!"
        ],
        "specialistSteps": [
            "NSSDCA ID: 2003-032A. I am MER-B (Opportunity): 185 kg landed mass, six-wheel solar-powered field geologist. Prime contractor: NASA/JPL. Designed for a 90-sol nominal surface baseline.",
            "Entry, Descent & Landing (EDL): Direct atmospheric entry at 5.4 km/s protected by ablative heat shield, 14.1 m disk-gap-band parachute, RAD retrorockets, and 24-lobe Vectran airbags.",
            "Eagle Crater Interplanetary Target: Bounced to rest at Meridiani Planum (1.95° S, 354.47° E), rolling into a 22 m impact crater and presenting layered outcrop bedrock within arm reach on Sol 1.",
            "Mineralogical Proof of Acidic Water: Mössbauer and APXS spectrometers confirmed jarosite—a hydrous potassium-iron sulfate—and hematite-rich concretion spherules ('blueberries') precipitated in acidic water.",
            "Extraterrestrial Iron Meteorite: Identified 'Heat Shield Rock' (Meridiani Planum meteorite) on Sol 346, composed of 93% iron, 7% nickel with traces of germanium, verifying preservation in vacuum-dry atmosphere.",
            "Purgatory Ripple Extraction: Trapped in soft sand ripple with 80% slip on Sol 446. JPL engineers recreated conditions in sandbox testbeds, commanding 192 m of wheel turns over five weeks to gain 1 metre of travel.",
            "Victoria Crater Stratigraphy: Traversed 750 m diameter crater rim (Cape Verde, Duck Bay) between Sols 951–1630, logging layered cross-bedding evidence of ancient windblown sand dunes saturated by groundwater.",
            "Endeavour Crater Long-Baseline Traverse: Completed 21 km trek to 22 km wide Noachian impact basin Endeavour (Sol 2652), analyzing phyllosilicate clay minerals indicating neutral-pH, habitable water.",
            "Off-World Marathon Milestone: Surpassed 42.195 km cumulative distance on Sol 3968 (March 24, 2015), establishing the all-time extraterrestrial driving record across 5,111 operational sols.",
            "Global Dust Storm Atmospheric Quench: Tau atmospheric opacity spiked above 10.8 in June 2018; solar array generation plunged from ~600 Wh/day to under 22 Wh/day, breaching survival threshold.",
            "Final Telemetry Broadcast: Last transmission received at 05:12 UT on June 10, 2018 from Perseverance Valley. Mission concluded February 13, 2019 following >1,000 recovery transmissions.",
            "Scientific Heritage Summary: Demonstrated ancient surface habitability, aqueous diagenesis, and logged 217,594 raw images, 45.16 km total odometer traverse, and 14 years, 136 days of continuous surface operation."
        ],
        "quiz": [
            {"q": "How many Martian days (sols) was Opportunity designed to operate versus how long it actually survived?", "options": ["90 sols designed, lasted 5,111 sols", "10 sols designed, lasted 100 sols", "1 year designed, lasted 2 years", "5,000 sols designed, lasted 5,111 sols"], "answer": 0, "explain": "Opportunity was designed for a 90-sol primary mission, but operated for 5,111 sols (over 14 years)!"},
            {"q": "What mineral did Opportunity discover that proved ancient Mars was soaked in liquid water?", "options": ["Jarosite", "Quartz crystals", "Pure gold", "Dry ice"], "answer": 0, "explain": "Jarosite is a hydrated sulfate mineral that forms only in the presence of acidic liquid water."},
            {"q": "What was the total distance Opportunity drove on Mars?", "options": ["5 kilometres", "15.2 kilometres", "45.16 kilometres", "120 kilometres"], "answer": 2, "explain": "Opportunity completed 45.16 km—the longest distance driven by any wheeled vehicle on another celestial body."},
            {"q": "What event finally silenced Opportunity in 2018?", "options": ["A software glitch", "A wheel snapped off", "A catastrophic planet-encircling dust storm blocked the Sun", "Its battery exploded"], "answer": 2, "explain": "A planet-wide dust storm blocked sunlight, preventing the solar arrays from recharging the rover's batteries."}
        ]
    },

    "pioneer10": {
        "src": os.path.join(MODELS_DIR, "pioneer10.html"),
        "dest": os.path.join(MODELS_DIR, "pioneer10.html"),
        "craftName": "Pioneer 10 Deep Space Probe",
        "craftType": "probe",
        "nssdcaId": "1972-012A",
        "archiveName": "Pioneer 10 Mission Archive, NASA Ames",
        "distanceAU": 118.8,
        "juniorSteps": [
            "I am Pioneer 10. Launched in 1972 for a 21-month flight to Jupiter, I kept flying for more than 30 years and became the first human-built machine to venture beyond the planets of our solar system.",
            "I launched on March 2, 1972, riding an Atlas-Centaur rocket fitted with a high-speed solid upper stage. I accelerated to over 51,000 km/h—faster than any human-made object before me!",
            "In July 1972, I became the first spacecraft to enter the asteroid belt. Many scientists feared that millions of floating rocks would smash me to bits, but space was vast and empty, and I crossed safely.",
            "As I neared Jupiter in November 1973, my instruments recorded intense bursts of electrons and protons. I had entered Jupiter's giant magnetosphere, a radiation field millions of times stronger than Earth's!",
            "On December 4, 1973, I made my closest approach to Jupiter, flying within 130,000 kilometres of its swirling cloud tops. I took the first close-up photos of the Great Red Spot and measured Jupiter's gravity.",
            "Because I was traveling far away from the Sun where solar panels cannot work, I was powered entirely by atomic heat! Four SNAP-19 nuclear batteries used decaying plutonium to generate steady electricity.",
            "Jupiter's massive gravity acted like a giant gravitational slingshot, hurling me onto an escape trajectory out of the solar system. In 1976, I crossed the orbit of Saturn, and in 1983, I crossed Neptune.",
            "Routine mission operations officially ended on March 31, 1997, due to NASA budget constraints. But I kept whispering across billions of kilometres whenever Earth's Deep Space Network listened.",
            "Tucked on my antenna frame, I carry an iconic gold-anodised aluminium plaque designed by Carl Sagan. It features diagrams of hydrogen atoms, human figures, and a map pointing back to Earth using cosmic pulsars.",
            "My very last, faint radio signal reached Earth on January 23, 2003, from a distance of 12.2 billion kilometres. It took over 11 hours for that final whisper to travel through the dark at light speed.",
            "Today, I am cruising silently into the deep interstellar void at 44,000 km/h. In about two million years, I will pass near the orange giant star Aldebaran in the constellation Taurus."
        ],
        "specialistSteps": [
            "NSSDCA ID: 1972-012A. I am Pioneer 10: 258 kg launch mass, spin-stabilized deep space exploration probe. Managed by NASA Ames Research Center, prime contractor TRW Systems.",
            "Hyperbolic Velocity Insertion: Launched 01:49:04 UT on 3 March 1972 on Atlas-Centaur with TE-M-364-4 solid-propellant upper stage, reaching direct Earth-escape velocity of 14.4 km/s (51,840 km/h).",
            "Main Asteroid Belt Characterization: First spacecraft to traverse 2.1 to 3.3 AU asteroid belt (July 1972–February 1973). Micrometeoroid sensor logged lower-than-anticipated spatial densities (<10⁻⁴ particles/m²).",
            "Jovian Magnetosphere Exploration: Traversed bow shock at 108 Jovian radii (Rj) on 26 November 1973. Trapped radiation belts exposed subsystems to 500,000 rads of gamma/electron radiation, near component damage threshold.",
            "Jovian Closest Approach Flyby: Swept to 132,252 km periapsis on 4 December 1973 at 36 km/s. Transmitted 300 photopolarimetric images, confirmed hydrogen-helium bulk composition, and measured 4.2 Gauss dipole field.",
            "Nuclear RTG Electrical Subsystem: Powered by four SNAP-19 radioisotope thermoelectric generators fuelled with plutonium-238 dioxide (PuO₂), delivering 155 W initial electrical power independent of solar flux.",
            "Heliocentric Escape Kinematics: Jovian gravity assist boosted orbital energy to hyperbolic excess (C3 > 0). Crossed Saturn's orbit (1976), Uranus (1979), and Neptune's orbital distance (13 June 1983).",
            "Pioneer Anomaly Investigation: Precision DSN Doppler tracking between 20–70 AU revealed an unexplained sunward deceleration of (8.74 ± 1.33) × 10⁻¹⁰ m/s², later confirmed as anisotropic thermal radiation recoil.",
            "Interstellar Plaque Artefact: Fitted with 152 × 229 mm 6061-T6 gold-anodised aluminium plaque engraved with hyperfine transition of neutral atomic hydrogen, pulsar timing coordinates, and binary scale of the Solar System.",
            "Deep Space Network Last Telemetry: Terminal S-band coherent carrier lock obtained at Goldstone station DSS-14 on 23 January 2003 at 82.1 AU (12.28 billion km), round-trip light time 22 hours 46 minutes.",
            "Interstellar Trajectory Projection: Coasts along galactic asymptotic vector (RA 4h 49m, Dec +26° 06') at 12.04 km/s (~2.54 AU/yr). Expected flyby within 3 light years of red giant Aldebaran in ~2,000,000 years."
        ],
        "quiz": [
            {"q": "What was Pioneer 10 the first spacecraft to navigate and cross?", "options": ["The rings of Saturn", "The Main Asteroid Belt", "The Kuiper Belt", "The Oort Cloud"], "answer": 1, "explain": "Pioneer 10 proved that spacecraft could safely navigate the Asteroid Belt between Mars and Jupiter."},
            {"q": "How was Pioneer 10 powered in deep space?", "options": ["Giant solar sails", "Four SNAP-19 nuclear radioisotope generators (RTGs)", "Hydrogen fuel cells", "Lithium-ion batteries"], "answer": 1, "explain": "Pioneer 10 was powered by plutonium-238 SNAP-19 RTGs, producing heat and electricity for decades."},
            {"q": "What is the famous golden plaque on Pioneer 10 meant for?", "options": ["To protect the antenna from cosmic rays", "A message from humanity to any extraterrestrial civilization that might find it", "A calibration target for the camera", "A heat shield"], "answer": 1, "explain": "Designed by Carl Sagan and Frank Drake, the gold plaque shows our location using 14 pulsars and figures of humanity."},
            {"q": "What mysterious force was discovered through Pioneer 10's tracking data?", "options": ["Pioneer Anomaly (tiny sunward deceleration from thermal recoil)", "Dark matter collisions", "Space warp", "Solar wind drag"], "answer": 0, "explain": "The Pioneer Anomaly was an unexpected sunward deceleration caused by uneven infrared heat radiating from the craft."}
        ]
    },

    "kepler": {
        "src": os.path.join(DOWNLOADS, "Kepler_ the planet hunter.html"),
        "dest": os.path.join(MODELS_DIR, "kepler.html"),
        "craftName": "Kepler Space Telescope",
        "craftType": "telescope",
        "nssdcaId": "2009-011A",
        "archiveName": "Kepler & K2 Mission Archive, NASA Ames",
        "distanceAU": 1.05,
        "juniorSteps": [
            "I am the Kepler Space Telescope. My mission was simple yet profound: to find out if Earth-sized worlds were rare or common in the Milky Way galaxy. I proved that the night sky is full of planets!",
            "I launched on March 6, 2009, into an Earth-trailing orbit around the Sun. I carried the largest digital camera ever flown in deep space—a massive 95-megapixel array of 42 light sensors.",
            "I didn't travel from planet to planet. Instead, I stared unblinkingly at one single patch of sky containing 150,000 stars in the constellations Cygnus and Lyra for four straight years.",
            "I detected planets using the transit method. Whenever a distant world crossed directly in front of its host star, it blocked a tiny fraction of starlight—like a flea crawling across a car headlight!",
            "In my first six weeks of observing, I found five new giant exoplanets. But my real goal was finding small, rocky worlds that could support liquid water—the building blocks of life.",
            "I found incredible alien worlds: Kepler-16b, a real-life Tatooine with two suns in the sky, and Kepler-11, a planetary system with six planets packed closer to their star than Mercury is to our Sun!",
            "I discovered that the most common planets in our galaxy are 'super-Earths' and 'mini-Neptunes'—sizes that don't even exist in our own Solar System!",
            "In May 2013, disaster struck: the second of my four reaction wheels broke down. Without three wheels, I could no longer hold my gaze steady. Many thought my mission was over.",
            "But NASA engineers had a brilliant idea! They balanced my telescope against the gentle pressure of sunlight hitting my solar panels like a sailboat. This began my second life: the K2 mission!",
            "On October 30, 2018, after nine and a half years in deep space, my thruster fuel was completely exhausted. NASA sent the final 'goodnight' command, and I drifted peacefully into retirement.",
            "In total, I discovered 2,662 confirmed exoplanets. My data proved that our galaxy holds more planets than stars—forever changing humanity's place in the universe!"
        ],
        "specialistSteps": [
            "NSSDCA ID: 2009-011A. I am the Kepler Space Telescope: 1,052 kg spacecraft bus with 0.95 m Schmidt telescope aperture and 1.4 m primary mirror. Managed by NASA Ames Research Center.",
            "Optoelectronic Photometer Subsystem: Focal plane array composed of 42 CCD sensors (2200 × 1024 pixels each), forming a 94.6-megapixel detector with 115-square-degree field of view.",
            "Heliocentric Earth-Trailing Orbit: Placed in a 372.5-day drift-away heliocentric orbit to eliminate Earth gravitational torques, occultations, and stray thermal emission.",
            "Transit Photometry Sensitivity: Designed to achieve photometric precision of 20 parts per million (ppm) at V=12 magnitude, sufficient to resolve Earth-analog transits (84 ppm starlight dip across 6.5-hour duration).",
            "Initial Exoplanet Detections: First five validated targets (Kepler-4b through 8b) announced within 43 days of commissioning, validating high-throughput automated light curve pipelines.",
            "Multi-Transiting Systems & Architecture: Uncovered complex architectures including Kepler-11 (six coplanar transiting planets within 0.5 AU) and Kepler-16b (first confirmed circumbinary planet around two stars).",
            "Statistical Demographics: Survey established planet occurrence frequency (eta-Earth): 20% to 50% of Sun-like stars host Earth-sized rocky planets in the habitable liquid-water zone.",
            "Attitude Control Wheel Failure: Loss of reaction wheel #2 (July 2012) and #4 (May 2013) compromised 3-axis fine stabilization, terminating the primary stare survey.",
            "K2 Solar Radiation Repurposing: Resumed operations in 2014 via K2 mission, using solar photon radiation pressure on symmetric solar panels as a virtual third reaction wheel to stabilize the ecliptic plane.",
            "Terminal Hydrazine Depletion: Fuel depletion confirmed October 2018 at 0.77 AU distance. 'Goodnight' decommission sequence sent November 15, 2018, shutting down S-band transmitters.",
            "Quantitative Mission Legacy: 2,662 confirmed exoplanets, 530,506 stars observed, and 678 scientific light-curve papers. Demonstrated mathematically that planetary systems are standard galactic architecture."
        ],
        "quiz": [
            {"q": "What method did Kepler use to discover thousands of alien worlds?", "options": ["Direct high-powered zoom photography", "Transit method (measuring tiny dips in starlight as planets cross their stars)", "Listening for radio signals", "Measuring cosmic ray echoes"], "answer": 1, "explain": "Kepler measured the tiny dip in brightness when a planet transits across the face of its parent star."},
            {"q": "How many confirmed exoplanets did the Kepler mission discover?", "options": ["12 planets", "300 planets", "2,662 planets", "50,000 planets"], "answer": 2, "explain": "Kepler discovered 2,662 confirmed exoplanets, more than half of all exoplanets known today."},
            {"q": "How did engineers keep Kepler pointing steady during the K2 mission after two reaction wheels broke?", "options": ["Using the gentle pressure of sunlight hitting its solar arrays like a sailboat", "Using giant magnets", "By spinning the entire telescope continuously", "Using electric ion thrusters"], "answer": 0, "explain": "Engineers balanced Kepler against the photon pressure of sunlight on its solar arrays as a third stabilizing wheel."},
            {"q": "What major conclusion did Kepler reach about planets in our Milky Way galaxy?", "options": ["Earth is the only planet in the galaxy", "Planets are very rare, occurring around only 1 in a million stars", "There are more planets than stars in our galaxy", "All other planets are gas giants"], "answer": 2, "explain": "Kepler proved statistically that planets outnumber the hundreds of billions of stars in our galaxy!"}
        ]
    }
}

# ── Function to inject configuration and link story-extras.js ──
def process_model(name, conf):
    src_path = conf["src"]
    dest_path = conf["dest"]
    print(f"Processing {name} from {src_path}...")
    with open(src_path, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    # 1. Apply dark theme inline tags and instant loader
    html = re.sub(
        r'<html[^>]*>',
        '<html lang="en" style="background-color: #05070B; color: #f5f5f7;">',
        html,
        count=1,
        flags=re.IGNORECASE
    )

    loader_div = f'''<div id="se-loader" style="position:fixed;inset:0;background:#05070B;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#f6e9da;font-family:'IBM Plex Sans',system-ui,sans-serif;transition:opacity 0.6s ease, visibility 0.6s ease;">
  <div style="width:48px;height:48px;border:3px solid rgba(255,214,170,0.18);border-top:3px solid #c2693c;border-radius:50%;animation:se-spin 1s linear infinite;margin-bottom:18px;"></div>
  <div style="font-family:Fraunces,Georgia,serif;font-size:26px;letter-spacing:-0.02em;margin-bottom:6px;">{conf["craftName"]}</div>
  <div style="font-size:12px;color:#9db2c7;letter-spacing:0.08em;text-transform:uppercase;">Establishing NSSDCA Telemetry Link...</div>
</div>
<style>
@keyframes se-spin {{ 0% {{ transform: rotate(0deg); }} 100% {{ transform: rotate(360deg); }} }}
</style>'''

    # Ensure body has dark background and loader
    if '<div id="se-loader"' not in html:
        html = re.sub(
            r'<body([^>]*)>',
            lambda m: f'<body{m.group(1)} style="background-color: #05070B; margin: 0;">\n{loader_div}',
            html,
            count=1,
            flags=re.IGNORECASE
        )
    else:
        # replace existing loader to make sure styling and craftName are up to date
        html = re.sub(r'<div id="se-loader"[\s\S]*?</style>', loader_div, html, count=1)

    # 2. Remove any previous story-extras script tag or call at the bottom
    html = re.sub(r'<script src="story-extras\.js"></script>[\s\S]*?StoryExtras\.init\([\s\S]*?\);?\s*</script>', '', html)

    # 3. Build StoryExtras.init call
    init_obj = {
        "craftName": conf["craftName"],
        "craftType": conf["craftType"],
        "nssdcaId": conf["nssdcaId"],
        "archiveName": conf["archiveName"],
        "distanceAU": conf["distanceAU"],
        "juniorSteps": conf["juniorSteps"],
        "specialistSteps": conf["specialistSteps"],
        "quiz": conf["quiz"]
    }
    init_json = json.dumps(init_obj, indent=2)

    script_injection = f'''
<script src="story-extras.js"></script>
<script>
StoryExtras.init({init_json});
</script>
'''

    # Insert script injection before </body> or at the end
    if '</body>' in html:
        html = html.replace('</body>', script_injection + '\n</body>')
    else:
        html += script_injection

    with open(dest_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Successfully written {dest_path} ({len(html)} bytes).")

for k, v in CONFIGS.items():
    process_model(k, v)

print("All 7 models processed successfully!")
