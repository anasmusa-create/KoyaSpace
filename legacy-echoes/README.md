# ECHOES OF SPACE: Abandoned, Not Forgotten
**NASA Space Apps Challenge 2026.** Thirteen silent NASA machines tell their own first-person stories from a "Ghost Signal" mission control.

## Run it
No build step and no npm dependencies. Open `index.html` in a modern browser, or serve the folder for the best experience:

```
python -m http.server 8080      # then visit http://localhost:8080
```

Google Fonts load when online. Offline, the app falls back to system fonts. The 3D viewer (`<model-viewer>`) is only fetched the first time a `.glb` is shown.

## Feature map
| Brief item | Where |
|---|---|
| Junior Explorer / Mission Specialist toggle | header, `js/app.js` (`setMode`) |
| EN / Central Kurdish + RTL | header, `js/i18n.js` (UI) and `js/data-*.js` (stories) |
| 3 sector tabs, 2D map, 3D globe, solar-system map, radar, hover beeps | `js/maps.js`, `js/audio.js` |
| Radio terminal, typewriter, waveform, speech synthesis | `js/app.js` (`Tx`, `Wave`, `toggleListen`), `js/audio.js` (`Voice`) |
| Wake-up ping (speed-of-light simulator) | `js/app.js` (`Ping`) |
| Hardware Passport, media slot, `<model-viewer>` | `js/app.js` (`dossierHTML`, `renderMedia`) |
| Upload / Attach manager (JSON, photos, `.glb`) | `js/upload.js`, `js/store.js` |
| 13 artifacts, EN + KU, both modes | `js/data-moon.js`, `js/data-mars-1.js`, `js/data-mars-2.js`, `js/data-deep.js` |

## Adding media
* **Live (during judging):** header → **Media & JSON** → *Photos* / *3D models*. Files are stored in the browser (IndexedDB).
* **Permanent:** drop `assets/images/<artifact-id>.jpg|png|webp` and/or `assets/models/<artifact-id>.glb` (model auto-detect needs `http://`, not `file://`).
* Artifact ids: `apollo11, lrv, alsep, surveyor, sojourner, mer, viking, phoenix-insight, ingenuity, dawn, near, pioneer, kepler`.

## Adding / replacing data
Header → **Media & JSON** → *Dataset JSON* (drop, paste, or *Download template*). The schema is documented in `docs/DATA_SCHEMA.md`. An uploaded artifact with an existing `id` overrides the built-in one. *Export all data* downloads everything as JSON.

## Notes
* **Speech:** uses the browser's `speechSynthesis`. Most systems have no Central Kurdish voice, so the app falls back to an Arabic voice (approximate) or explains that none is available and keeps the text on screen.
* **Content review:** the Kurdish (Sorani) text and the engineering figures not listed in the original brief (e.g. Isp, throttle ranges, tip speeds) were drafted without a native or subject-matter review. Have both checked before publishing.
* **Textures:** the Moon and Mars surfaces are generated procedurally in canvas, so there are no image downloads. NASA imagery can be attached per artifact for the real thing.
* Not an official NASA product.
