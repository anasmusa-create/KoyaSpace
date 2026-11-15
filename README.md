# KoyaSpace — Echoes of Space (NASA Space Apps Challenge 2026)

An interactive, museum-grade 3D storytelling web application documenting abandoned and historic NASA exploration hardware across the Moon, Mars, and Deep Space.

---

## 🌟 Key Features

1. **Museum-Grade 3D Planetary Dashboard (`index.html`)**
   - Clean, minimalist aesthetic matching scientific exhibits.
   - Procedural WebGL planet textures and glTF model loaders with zero broken image requests.
   - Interactive celestial rotation, marker raycasting, and smooth camera zoom.
   - 100% English, clean LTR design (zero Kurdish text or legacy RTL toggles).
   - Strict 13 NASA exploration devices: 4 Moon, 5 Mars, 4 Deep Space.

2. **Modular Interactive 3D Storytelling Engine (`models/story-extras.js`)**
   - Seamlessly plugs into any Three.js / WebGL interactive model page without touching shaders or geometry.
   - **Zero White Screen Flash:** Instant `#05070B` dark space overlay + link prefetching.
   - **100% Synchronized Narration:** What you see on screen is word-for-word what the speech synthesis voice speaks. Single source of truth with no duplicate or overlapping quote boxes.
   - **Verified NASA NSSDCA Citations:** Every step card displays the official NASA Master Catalog ID and mission archive badge.

3. **Auto-Scroll Journey ("Start Journey") Driven by Voice**
   - Prominent "▶ Start Interactive Journey" hero button and bottom controller bar.
   - Voice reads the active chapter card; upon finishing, the page smoothly auto-scrolls to the next step, triggering Three.js camera animations across the 3D spacecraft.
   - Intelligent user pause: manual mouse wheel or touch interaction pauses the journey instantly.
   - Bottom controller bar: `⏮ Prev Step`, `⏯ Play / Pause Journey`, `⏭ Next Step`, `⏹ Stop`, and `Step X of N` indicator.

4. **Dynamic Junior vs. Specialist Modes**
   - **🌟 Junior (Ages 6–12):** Wonder-filled, first-person narrative storytelling ("I am...") with warmer voice rate and pitch.
   - **🔬 Specialist (Ages 13+):** NASA telemetry, thrust specifications, frequencies, sensors, and aerospace engineering precision.
   - Instant text swap and TTS re-trigger on mode toggle, preserved in `localStorage`.

5. **🚀 End-of-Story Mission Debrief Quizzes**
   - Interactive telemetry quizzes at the end of each 3D journey.
   - Instant score calculation, detailed educational explanations, and retake capability.

---

## 🚀 Running Locally

Because the application uses WebGL, glTF loaders, and web workers, serve the repository using any local HTTP server:

```powershell
python -m http.server 8000
```

Then open your browser to:
```
http://localhost:8000
```

### Direct URLs for all 7 Working 3D Model Tours:
- **🌕 Surveyor 3 (Moon):** `http://localhost:8000/models/surveyor3.html`
- **🌕 Apollo 11 Lunar Module & EASEP (Moon):** `http://localhost:8000/models/apollo11.html`
- **🔴 Ingenuity Mars Helicopter (Mars):** `http://localhost:8000/models/ingenuity.html`
- **🔴 Mars Pathfinder & Sojourner (Mars):** `http://localhost:8000/models/pathfinder.html`
- **🔴 Opportunity Rover MER-B (Mars):** `http://localhost:8000/models/opportunity.html`
- **🌌 Pioneer 10 Deep Space Probe (Deep Space):** `http://localhost:8000/models/pioneer10.html`
- **🌌 Kepler Space Telescope (Deep Space):** `http://localhost:8000/models/kepler.html`

---

## 📁 Project Architecture

```
NasaChallenge/
├── index.html                   # Simplified museum-grade main dashboard
├── styles.css                   # Global dashboard styles & responsive breakpoints
├── app.js                       # Dashboard state, Three.js world & 13 NASA device records
├── README.md                    # Project documentation & reference
├── assets/
│   ├── moon/                    # Moon glTF 3D model & textures
│   └── mars/                    # Mars glTF 3D model & textures
└── models/
    ├── story-extras.js          # Shared drop-in engine (TTS sync, Auto-scroll, Mode switcher, Quiz)
    ├── surveyor3.html           # Surveyor 3 interactive 3D model & story
    ├── apollo11.html            # Apollo 11 Lunar Module & EASEP 3D model & story
    ├── ingenuity.html           # Ingenuity Mars Helicopter 3D model & story
    ├── pathfinder.html          # Mars Pathfinder & Sojourner 3D model & story
    ├── opportunity.html         # Opportunity (MER-B) rover 3D model & story
    ├── pioneer10.html           # Pioneer 10 deep-space probe 3D model & story
    └── kepler.html              # Kepler space telescope 3D model & story
```

---

## 📡 NASA Space Apps Challenge Device Catalog (13 Total)

| Destination | Craft Name | Status / Type | 3D Story Tour | NSSDCA ID |
|---|---|---|---|---|
| **Moon** | **Surveyor 3** | Soft Lander | `[3D STORY]` | `1967-035A` |
| **Moon** | **Apollo 11 Lunar Module** | Eagle Descent & EASEP | `[3D STORY]` | `1969-059C` |
| **Moon** | **Lunar Roving Vehicles** | LRV-1, 2, 3 Moon Buggies | Telemetry Dossier | `1971-063C` |
| **Moon** | **ALSEP Packages** | Apollo 12–17 Science | Telemetry Dossier | `1969-099C` |
| **Mars** | **Ingenuity** | Mars Helicopter | `[3D STORY]` | `2020-052B` |
| **Mars** | **Mars Pathfinder** | Sojourner Microrover | `[3D STORY]` | `1996-068A` |
| **Mars** | **Opportunity Rover** | MER-B 14-Year Marathon | `[3D STORY]` | `2003-032A` |
| **Mars** | **Viking 1 & 2** | Surface Biology Landers | Telemetry Dossier | `1975-075C` |
| **Mars** | **Phoenix & InSight** | Arctic Ice & Seismology | Telemetry Dossier | `2007-034A` |
| **Deep Space** | **Pioneer 10** | Jupiter & Outer Planets | `[3D STORY]` | `1972-012A` |
| **Deep Space** | **Kepler Telescope** | Exoplanet Transit Hunter | `[3D STORY]` | `2009-011A` |
| **Deep Space** | **Dawn Spacecraft** | Orbit of Vesta & Ceres | Telemetry Dossier | `2007-043A` |
| **Deep Space** | **NEAR Shoemaker** | First Asteroid Landing | Telemetry Dossier | `1996-008A` |

---

## 🏆 Submission Note
Developed for the **2026 NASA Space Apps Challenge** (Sulaymaniyah). All scientific values, orbital elements, masses, coordinates, and instrument designations are derived from the official **NASA National Space Science Data Center (NSSDCA)** master catalogs.
