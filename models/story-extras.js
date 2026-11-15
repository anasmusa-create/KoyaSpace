/* story-extras.js — Shared Engine for all 3D Interactive Story Models
 * NASA Space Apps Challenge 2026 — Echoes of Space
 * Features:
 *   - Zero White Screen Flash (instant #05070B dark-space overlay + graceful fadeout)
 *   - Single Source of Truth for Text & Speech Synthesis (100% word-for-word sync)
 *   - Dynamic Junior (6–12) vs Specialist (13+) Modes with persistent state
 *   - Auto-Scroll Journey ("Start Journey") driven by sound & SpeechSynthesis
 *   - Bottom Floating Journey Controller Bar (Prev, Play/Pause, Next, Stop, Step counter)
 *   - User interaction detection (mouse wheel / touch pause)
 *   - Verified NASA NSSDCA Citations on every card
 *   - Interactive Mission Debrief Quiz
 *   - Fullscreen 3D Canvas
 *   - 100% English Only — Zero Kurdish — Zero Wake-Up Ping
 */
(function (global) {
  'use strict';

  /* ── DOM Helper Functions ── */
  const qs  = (s, r) => (r || document).querySelector(s);
  const qsa = (s, r) => Array.from((r || document).querySelectorAll(s));
  const mk  = (tag, cls, html) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (html != null) el.innerHTML = html;
    return el;
  };

  /* ── Speech Synthesis (TTS) Engine ── */
  const TTS = (() => {
    let utt = null;
    let paused = false;
    let speaking = false;
    let currentEndCallback = null;
    const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

    function speak(text, onEnd, mode = 'junior') {
      stop();
      if (!synth || !text) {
        if (typeof onEnd === 'function') setTimeout(onEnd, 1000);
        return;
      }

      currentEndCallback = onEnd;
      speaking = true;
      paused = false;

      // Clean speech text (strip markdown symbols, emoticons, hashtags)
      const clean = text
        .replace(/[\u{1F300}-\u{1FAFF}]/gu, '')
        .replace(/[#*`_~]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      utt = new SpeechSynthesisUtterance(clean);
      utt.lang = 'en-US';

      // Pitch and rate adjusted to audience mode
      if (mode === 'junior') {
        utt.rate = 0.95;
        utt.pitch = 1.05;
      } else {
        utt.rate = 1.0;
        utt.pitch = 0.95;
      }

      // Best effort English voice selection
      const voices = synth.getVoices ? synth.getVoices() : [];
      const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('David') || v.name.includes('Zira'))) ||
                      voices.find(v => v.lang.startsWith('en'));
      if (enVoice) utt.voice = enVoice;

      utt.onend = () => {
        speaking = false;
        paused = false;
        const cb = currentEndCallback;
        currentEndCallback = null;
        if (typeof cb === 'function') cb();
      };

      utt.onerror = (e) => {
        speaking = false;
        paused = false;
        currentEndCallback = null;
      };

      try {
        synth.speak(utt);
      } catch (err) {
        speaking = false;
      }
    }

    function pause() {
      if (synth && speaking && !paused) {
        synth.pause();
        paused = true;
      }
    }

    function resume() {
      if (synth && paused) {
        synth.resume();
        paused = false;
      }
    }

    function stop() {
      currentEndCallback = null;
      if (synth) {
        try { synth.cancel(); } catch (e) {}
      }
      paused = false;
      speaking = false;
      utt = null;
    }

    function isSpeaking() { return speaking || (synth && synth.speaking); }
    function isPaused()   { return paused; }

    return { speak, pause, resume, stop, isSpeaking, isPaused };
  })();

  /* ── Fullscreen Support ── */
  function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
  }

  function toggleFullscreen(target) {
    const el = target || qs('#c') || document.documentElement;
    if (isFullscreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    } else {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    }
  }

  /* ══════════════════════════════════════════════════════════════════
     State Management
  ══════════════════════════════════════════════════════════════════ */
  let cfg = {};
  let currentMode = 'junior'; // 'junior' | 'specialist'
  let currentSection = 0;
  let totalSections = 0;
  let journeyActive = false;
  let journeyPaused = false;
  let journeyTimeout = null;

  /* ══════════════════════════════════════════════════════════════════
     Main Entry Point
  ══════════════════════════════════════════════════════════════════ */
  function init(config) {
    cfg = Object.assign({
      craftName: 'Spacecraft',
      craftType: 'probe',
      nssdcaId: 'NASA-NSSDCA',
      archiveName: 'NASA Mission Archive',
      distanceAU: 0,
      juniorSteps: [],
      specialistSteps: [],
      quiz: []
    }, config || {});

    // Restore mode preference from localStorage
    try {
      const savedMode = localStorage.getItem('echoes_mode');
      if (savedMode === 'specialist' || savedMode === 'junior') {
        currentMode = savedMode;
      }
    } catch (e) {}

    injectStyles();
    removeLoaderGracefully();
    buildTopBar();
    hookSections();
    buildJourneyBar();
    buildQuiz();
    observeModePreservation();
    hookInspectTransitions();
    hookUserScrollInteraction();
    updateCardTexts();
    setMode(currentMode, false);
  }

  /* ── 1. Graceful Loader Removal ── */
  function removeLoaderGracefully() {
    function dismiss() {
      const loader = qs('#se-loader');
      if (!loader) return;
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      setTimeout(() => { if (loader.parentNode) loader.remove(); }, 600);
    }
    if (document.readyState === 'complete') {
      requestAnimationFrame(() => setTimeout(dismiss, 120));
    } else {
      window.addEventListener('load', () => {
        requestAnimationFrame(() => setTimeout(dismiss, 120));
      });
    }
    // Safety fallback
    setTimeout(dismiss, 3500);
  }

  /* ── 2. Injected CSS Stylesheet ── */
  function injectStyles() {
    if (qs('#se-styles')) return;
    const s = document.createElement('style');
    s.id = 'se-styles';
    s.textContent = `
/* ── Museum-Grade Space Palette & Typography ── */
:root {
  --se-space-black: #05070B;
  --se-card-bg: rgba(14, 10, 11, 0.78);
  --se-ink: #f6e9da;
  --se-dim: #d3bba6;
  --se-rust: #c2693c;
  --se-gold: #e6a46d;
  --se-blue: #9db2c7;
  --se-line: rgba(255, 214, 170, 0.2);
}

/* ── Eliminate any top clipping ── */
section:first-of-type {
  padding-top: calc(env(safe-area-inset-top, 0px) + 85px) !important;
  min-height: 100vh;
}
section:first-of-type .card {
  margin-top: 25px;
}

/* ── Topbar ── */
#se-topbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 50;
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 24px; gap: 14px;
  background: rgba(8, 5, 7, 0.88);
  backdrop-filter: blur(20px) saturate(1.25);
  -webkit-backdrop-filter: blur(20px) saturate(1.25);
  border-bottom: 1px solid var(--se-line);
  font: 400 13px/1 "IBM Plex Sans", system-ui, sans-serif;
  color: var(--se-dim);
}
#se-topbar .se-brand {
  display: flex; align-items: center; gap: 10px;
  white-space: nowrap; font-size: 13px;
}
#se-topbar .se-brand b {
  color: var(--se-ink); font-weight: 600; letter-spacing: 0.02em;
}
#se-topbar .se-brand span {
  color: var(--se-blue); font-size: 12px;
}
#se-topbar .se-controls {
  display: flex; align-items: center; gap: 9px; flex-wrap: wrap;
}
.se-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 15px; border-radius: 999px;
  border: 1px solid var(--se-line);
  background: rgba(24, 11, 7, 0.65);
  color: var(--se-ink); font: inherit; font-size: 12px; font-weight: 500;
  cursor: pointer; transition: all 0.2s ease;
  white-space: nowrap; text-decoration: none;
}
.se-btn:hover {
  border-color: var(--se-rust);
  background: rgba(194, 105, 60, 0.32);
  color: #fff;
  transform: translateY(-1px);
}
.se-btn.active {
  background: rgba(194, 105, 60, 0.6);
  border-color: var(--se-rust);
  color: #fff;
}

/* ── Mode Toggle Button ── */
#se-mode-toggle {
  display: flex; border: 1px solid var(--se-line);
  border-radius: 999px; overflow: hidden; background: rgba(24, 11, 7, 0.55);
}
#se-mode-toggle button {
  padding: 7px 14px; border: 0; background: transparent;
  color: var(--se-dim); font: 500 12px/1 "IBM Plex Sans", system-ui, sans-serif;
  cursor: pointer; transition: all 0.2s ease; white-space: nowrap;
}
#se-mode-toggle button:hover {
  color: #fff;
}
#se-mode-toggle button.active {
  background: rgba(194, 105, 60, 0.7);
  color: #fff; font-weight: 600;
}

/* ── Hero Start Journey Button ── */
.se-hero-journey-btn {
  display: inline-flex; align-items: center; gap: 8px;
  margin-top: 18px; padding: 12px 22px; border-radius: 999px;
  border: 1px solid var(--se-gold);
  background: linear-gradient(135deg, rgba(194, 105, 60, 0.85), rgba(140, 60, 25, 0.9));
  color: #ffffff; font: 600 14px/1 "IBM Plex Sans", system-ui, sans-serif;
  letter-spacing: 0.02em; cursor: pointer;
  box-shadow: 0 8px 24px rgba(194, 105, 60, 0.45);
  transition: all 0.25s ease;
}
.se-hero-journey-btn:hover {
  filter: brightness(1.15);
  box-shadow: 0 12px 30px rgba(194, 105, 60, 0.65);
  transform: translateY(-2px);
}

/* ── Single Source of Truth Card Text & Citation ── */
.se-story-body {
  margin: 14px 0 10px;
}
.se-story-text {
  font-size: 15.5px;
  line-height: 1.68;
  color: var(--se-ink);
  margin: 0;
  transition: opacity 0.25s ease;
}
body.specialist .se-story-text {
  font-size: 14.5px;
  line-height: 1.65;
  color: #e6edf4;
}
.se-citation {
  display: inline-flex; align-items: center; gap: 6px;
  margin-top: 14px; padding: 5px 11px; border-radius: 6px;
  background: rgba(255, 214, 170, 0.07);
  border: 1px solid rgba(255, 214, 170, 0.14);
  font-size: 11px; color: var(--se-blue);
  letter-spacing: 0.02em;
}
.se-citation strong {
  color: var(--se-gold); font-weight: 500;
}

/* ── Bottom Floating Journey Controller Bar ── */
#se-journey-bar {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 20px);
  left: 50%; transform: translateX(-50%);
  z-index: 45; display: flex; align-items: center; gap: 10px;
  padding: 8px 18px;
  background: rgba(8, 5, 7, 0.92);
  backdrop-filter: blur(20px) saturate(1.25);
  -webkit-backdrop-filter: blur(20px) saturate(1.25);
  border: 1px solid var(--se-line);
  border-radius: 999px;
  font: 13px "IBM Plex Sans", system-ui, sans-serif;
  color: var(--se-ink); white-space: nowrap;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
}
#se-journey-bar .j-btn {
  background: rgba(255, 214, 170, 0.08); border: 1px solid var(--se-line);
  color: var(--se-ink); font-size: 13px; font-weight: 500;
  cursor: pointer; line-height: 1; padding: 7px 12px;
  border-radius: 999px; transition: all 0.2s ease;
  display: inline-flex; align-items: center; gap: 5px;
}
#se-journey-bar .j-btn:hover {
  background: rgba(194, 105, 60, 0.4);
  border-color: var(--se-rust);
  color: #fff;
  transform: translateY(-1px);
}
#se-journey-bar .j-btn-primary {
  background: linear-gradient(135deg, rgba(194, 105, 60, 0.9), rgba(150, 70, 30, 0.95));
  border-color: var(--se-gold);
  color: #fff; font-weight: 600;
}
#se-journey-bar .j-btn-primary:hover {
  filter: brightness(1.15);
}
#se-step-indicator {
  font-size: 12px; font-weight: 600; color: var(--se-gold);
  padding: 0 4px; min-width: 80px; text-align: center;
}

/* ── Mission Debrief Quiz Section ── */
.se-quiz-wrap {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  padding: 80px 6vw; position: relative; z-index: 2;
}
#se-quiz {
  max-width: 580px; width: 100%;
  padding: 38px 40px;
  background: rgba(14, 10, 11, 0.92);
  backdrop-filter: blur(22px) saturate(1.3);
  -webkit-backdrop-filter: blur(22px) saturate(1.3);
  border: 1px solid var(--se-line);
  border-radius: 24px 6px 24px 6px;
  box-shadow: 0 35px 90px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 230, 200, 0.12);
}
#se-quiz h2 {
  font: 300 36px/1.1 Fraunces, Georgia, serif; margin: 0 0 10px; color: var(--se-ink);
}
#se-quiz .quiz-sub {
  color: var(--se-dim); font-size: 14.5px; margin: 0 0 24px; line-height: 1.55;
}
.qcard {
  margin-bottom: 22px; padding: 20px 22px;
  border: 1px solid rgba(255, 214, 170, 0.14);
  border-radius: 14px 4px 14px 4px;
  background: rgba(8, 5, 7, 0.65);
}
.qcard p { color: var(--se-ink); font-size: 15px; margin: 0 0 14px; font-weight: 500; }
.qcard .opts { display: flex; flex-direction: column; gap: 8px; }
.qcard button {
  text-align: left; padding: 11px 16px;
  border: 1px solid var(--se-line);
  border-radius: 8px 4px 8px 4px;
  background: rgba(24, 11, 7, 0.65);
  color: var(--se-dim); font: 14px "IBM Plex Sans", system-ui, sans-serif;
  cursor: pointer; transition: all 0.2s ease;
}
.qcard button:hover:not(:disabled) {
  border-color: var(--se-rust); background: rgba(194, 105, 60, 0.24); color: #fff;
}
.qcard button.correct {
  border-color: #9cc47d !important; background: rgba(156, 196, 125, 0.25) !important; color: #fff !important;
}
.qcard button.wrong {
  border-color: #d46b6b !important; background: rgba(212, 107, 107, 0.25) !important; color: #fff !important;
}
.qcard .explain {
  font-size: 13.5px; color: var(--se-dim); margin: 12px 0 0; padding: 10px 14px;
  border-radius: 6px; background: rgba(255, 230, 200, 0.08); display: none; line-height: 1.55;
}
.qcard .explain.show { display: block; }
#se-quiz-score {
  text-align: center; padding: 24px 0 0;
  font: 300 48px/1 Fraunces, Georgia, serif; color: var(--se-ink);
}
#se-quiz-score span {
  display: block; font: 14px "IBM Plex Sans", system-ui, sans-serif;
  color: var(--se-dim); margin-top: 8px;
}
#se-quiz-retry {
  display: none; margin: 20px auto 0; width: 100%;
}

/* ── Fullscreen Canvas Reset ── */
#c:fullscreen, #c:-webkit-full-screen, #c:-moz-full-screen {
  width: 100vw !important; height: 100vh !important;
}

@media (max-width: 768px) {
  #se-topbar { padding: 8px 14px; }
  #se-topbar .se-brand span { display: none; }
  #se-journey-bar { max-width: calc(100vw - 24px); padding: 7px 12px; gap: 6px; }
  #se-step-indicator { min-width: 60px; font-size: 11px; }
  #se-quiz { padding: 24px 20px; }
}
    `;
    document.head.appendChild(s);
  }

  /* ── 3. Museum-Grade Topbar ── */
  function buildTopBar() {
    const origHeader = qs('header');
    if (origHeader) origHeader.style.display = 'none';

    const bar = mk('div', '', '');
    bar.id = 'se-topbar';

    const brand = mk('div', 'se-brand', `
      <b>NASA Space Apps 2026</b>
      <span>· ${cfg.craftName}</span>
    `);

    const controls = mk('div', 'se-controls', '');

    // Return to main dashboard button
    const backDash = mk('button', 'se-btn', '← Dashboard');
    backDash.title = 'Return to main dashboard';
    backDash.onclick = () => {
      TTS.stop();
      window.location.href = '../index.html';
    };
    controls.appendChild(backDash);

    // 3D Inspection Mode Toggle button
    const inspectBtn = mk('button', 'se-btn', '🔍 Inspect 3D');
    inspectBtn.id = 'se-inspect-toggle';
    inspectBtn.onclick = () => {
      stopJourney();
      TTS.stop();
      if (document.body.classList.contains('insp')) {
        const goBtn = qs('#go');
        if (goBtn) goBtn.click();
        else {
          document.body.className = 'story';
          if (currentMode === 'specialist') document.body.classList.add('specialist');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        const backBtn = qs('#back');
        if (backBtn) backBtn.click();
        else {
          document.body.className = 'insp';
          if (currentMode === 'specialist') document.body.classList.add('specialist');
        }
      }
      updateInspectButton();
    };
    controls.appendChild(inspectBtn);

    // Fullscreen 3D button
    const fsBtn = mk('button', 'se-btn', '⛶ Fullscreen');
    fsBtn.id = 'se-fs-btn';
    fsBtn.onclick = () => toggleFullscreen(qs('#c'));
    document.addEventListener('fullscreenchange', () => {
      fsBtn.textContent = isFullscreen() ? '✕ Exit Fullscreen' : '⛶ Fullscreen';
    });
    controls.appendChild(fsBtn);

    // Dual-Age Mode Toggle
    const modeWrap = mk('div', '', '');
    modeWrap.id = 'se-mode-toggle';
    const jBtn = mk('button', currentMode === 'junior' ? 'active' : '', '🌟 Junior');
    const sBtn = mk('button', currentMode === 'specialist' ? 'active' : '', '🔬 Specialist');
    jBtn.title = 'Ages 6–12: Narrative story & wonder';
    sBtn.title = 'Ages 13+: NASA telemetry, sensors, and technical precision';
    jBtn.onclick = () => setMode('junior', true);
    sBtn.onclick = () => setMode('specialist', true);
    modeWrap.appendChild(jBtn);
    modeWrap.appendChild(sBtn);
    controls.appendChild(modeWrap);

    bar.appendChild(brand);
    bar.appendChild(controls);
    document.body.prepend(bar);

    updateInspectButton();
  }

  function updateInspectButton() {
    const btn = qs('#se-inspect-toggle');
    if (!btn) return;
    const isInsp = document.body.classList.contains('insp');
    btn.innerHTML = isInsp ? '📖 Tour Story' : '🔍 Inspect 3D';
    btn.classList.toggle('active', isInsp);
  }

  /* ── 4. Hook Sections (Single Source of Truth & Citation) ── */
  function hookSections() {
    const sections = qsa('section');
    totalSections = sections.length;
    if (!totalSections) return;

    sections.forEach((sec, i) => {
      const card = sec.querySelector('.card');
      if (!card) return;

      // Clean existing secondary extra paragraphs if any
      const existingExtra = card.querySelector('.se-extra-box');
      if (existingExtra) existingExtra.remove();

      // Check for story text container
      let storyBody = card.querySelector('.se-story-body');
      if (!storyBody) {
        // Find existing main <p> elements
        const oldPs = qsa('p', card);
        oldPs.forEach(p => p.style.display = 'none'); // hide un-synchronized static paragraphs

        storyBody = mk('div', 'se-story-body', `<p class="se-story-text" id="se-text-${i}"></p>`);
        card.appendChild(storyBody);

        // Citation badge
        const citation = mk('div', 'se-citation', `
          <span>Source: NASA NSSDCA ID: <strong>${cfg.nssdcaId}</strong> (${cfg.archiveName})</span>
        `);
        card.appendChild(citation);

        // On first section, append prominent "Start Journey" button
        if (i === 0) {
          const heroBtn = mk('button', 'se-hero-journey-btn', '▶ Start Interactive Journey');
          heroBtn.id = 'se-hero-journey-btn';
          heroBtn.onclick = () => startJourney(1);
          card.appendChild(heroBtn);
        }
      }
    });

    // IntersectionObserver to sync current section on scroll
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = sections.indexOf(e.target);
          if (idx >= 0) {
            currentSection = idx;
            updateStepIndicator();
          }
        }
      });
    }, { threshold: 0.45 });

    sections.forEach(s => obs.observe(s));
  }

  /* ── 5. Dynamic Mode Switching & Text Update ── */
  function updateCardTexts() {
    const steps = currentMode === 'specialist' ? cfg.specialistSteps : cfg.juniorSteps;
    for (let i = 0; i < totalSections; i++) {
      const p = qs(`#se-text-${i}`);
      if (p) {
        p.textContent = steps[i] || '';
      }
    }
  }

  function setMode(mode, restartSpeech = false) {
    currentMode = mode;
    try {
      localStorage.setItem('echoes_mode', mode);
    } catch (e) {}

    document.body.classList.toggle('specialist', mode === 'specialist');
    const btns = qsa('#se-mode-toggle button');
    if (btns.length >= 2) {
      btns[0].classList.toggle('active', mode === 'junior');
      btns[1].classList.toggle('active', mode === 'specialist');
    }

    updateCardTexts();

    if (restartSpeech && (journeyActive || TTS.isSpeaking())) {
      speakActiveCard();
    }
  }

  function observeModePreservation() {
    // Preserve specialist class if underlying script resets body.className
    const observer = new MutationObserver(() => {
      if (currentMode === 'specialist' && !document.body.classList.contains('specialist')) {
        document.body.classList.add('specialist');
      }
      updateInspectButton();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

  /* ── 6. Bottom Floating Journey Controller Bar ── */
  function buildJourneyBar() {
    if (qs('#se-journey-bar')) return;
    const bar = mk('div', '', '');
    bar.id = 'se-journey-bar';
    bar.innerHTML = `
      <button class="j-btn" id="se-j-prev" title="Previous Step">⏮ Prev</button>
      <button class="j-btn j-btn-primary" id="se-j-play" title="Play or Pause Interactive Journey">▶ Start Journey</button>
      <button class="j-btn" id="se-j-next" title="Next Step">Next ⏭</button>
      <span id="se-step-indicator">Step 1 of ${totalSections}</span>
      <button class="j-btn" id="se-j-read" title="Read Step Aloud">🔊 Read</button>
      <button class="j-btn" id="se-j-stop" title="Stop Journey">⏹ Stop</button>
    `;
    document.body.appendChild(bar);

    qs('#se-j-prev').onclick = () => navigateStep(currentSection - 1);
    qs('#se-j-next').onclick = () => navigateStep(currentSection + 1);
    qs('#se-j-play').onclick = toggleJourney;
    qs('#se-j-read').onclick = speakActiveCard;
    qs('#se-j-stop').onclick = stopJourney;

    updateStepIndicator();
  }

  function updateStepIndicator() {
    const ind = qs('#se-step-indicator');
    if (ind) {
      ind.textContent = currentSection === 0 ? `Overview` : `Step ${currentSection} of ${totalSections - 1}`;
    }
  }

  /* ── 7. Auto-Scroll Journey Engine ── */
  function startJourney(targetIndex = 1) {
    if (document.body.classList.contains('insp')) {
      const goBtn = qs('#go');
      if (goBtn) goBtn.click();
      else document.body.className = 'story';
      updateInspectButton();
    }

    journeyActive = true;
    journeyPaused = false;
    updateJourneyPlayButton();

    navigateStep(targetIndex, true);
  }

  function pauseJourney() {
    if (!journeyActive) return;
    journeyPaused = true;
    if (journeyTimeout) clearTimeout(journeyTimeout);
    TTS.pause();
    updateJourneyPlayButton();
  }

  function resumeJourney() {
    if (!journeyActive) {
      startJourney(currentSection > 0 ? currentSection : 1);
      return;
    }
    journeyPaused = false;
    updateJourneyPlayButton();
    if (TTS.isPaused()) {
      TTS.resume();
    } else {
      speakActiveCard();
    }
  }

  function toggleJourney() {
    if (!journeyActive) {
      startJourney(currentSection > 0 ? currentSection : 1);
    } else if (journeyPaused) {
      resumeJourney();
    } else {
      pauseJourney();
    }
  }

  function stopJourney() {
    journeyActive = false;
    journeyPaused = false;
    if (journeyTimeout) clearTimeout(journeyTimeout);
    TTS.stop();
    updateJourneyPlayButton();
  }

  function updateJourneyPlayButton() {
    const btn = qs('#se-j-play');
    if (!btn) return;
    if (!journeyActive) {
      btn.innerHTML = '▶ Start Journey';
      btn.classList.add('j-btn-primary');
    } else if (journeyPaused) {
      btn.innerHTML = '▶ Resume Journey';
      btn.classList.remove('j-btn-primary');
    } else {
      btn.innerHTML = '⏸ Pause Journey';
      btn.classList.remove('j-btn-primary');
    }
  }

  function navigateStep(targetIndex, fromJourney = false) {
    const sections = qsa('section');
    const maxIdx = sections.length - 1;
    const clamped = Math.max(0, Math.min(maxIdx, targetIndex));
    currentSection = clamped;
    updateStepIndicator();

    sections[clamped].scrollIntoView({ behavior: 'smooth' });

    if (fromJourney || journeyActive) {
      // Allow scroll to settle, then speak
      if (journeyTimeout) clearTimeout(journeyTimeout);
      journeyTimeout = setTimeout(() => {
        if (journeyActive && !journeyPaused) {
          speakActiveCard();
        }
      }, 700);
    }
  }

  /* ── 8. Speak Active Card with 100% Text Sync ── */
  function speakActiveCard() {
    const p = qs(`#se-text-${currentSection}`);
    const text = p ? p.textContent : '';
    if (!text) return;

    TTS.speak(text, () => {
      // On speech finish: if journey is active, auto-advance!
      if (journeyActive && !journeyPaused) {
        if (currentSection < totalSections - 1) {
          journeyTimeout = setTimeout(() => {
            if (journeyActive && !journeyPaused) {
              navigateStep(currentSection + 1, true);
            }
          }, 800);
        } else {
          // Reached quiz
          const quizWrap = qs('.se-quiz-wrap');
          if (quizWrap) quizWrap.scrollIntoView({ behavior: 'smooth' });
          TTS.speak(`Mission debrief quiz for ${cfg.craftName}. Test your knowledge!`, null, currentMode);
          stopJourney();
        }
      }
    }, currentMode);
  }

  /* ── 9. Pause Journey on Manual User Scroll ── */
  function hookUserScrollInteraction() {
    const onUserScroll = () => {
      if (journeyActive && !journeyPaused) {
        pauseJourney();
      }
    };
    window.addEventListener('wheel', onUserScroll, { passive: true });
    window.addEventListener('touchmove', onUserScroll, { passive: true });
  }

  /* ── 10. Inspect Mode Transition Hooks ── */
  function hookInspectTransitions() {
    const back = qs('#back');
    if (back) back.addEventListener('click', () => {
      stopJourney();
      TTS.stop();
      updateInspectButton();
    });
    const go = qs('#go');
    if (go) go.addEventListener('click', () => {
      updateInspectButton();
      updateStepIndicator();
    });
  }

  /* ── 11. Interactive Mission Quiz ── */
  function buildQuiz() {
    if (!cfg.quiz || !cfg.quiz.length) return;

    const sections = qsa('section');
    const lastSection = sections[sections.length - 1];
    if (!lastSection) return;

    const quizWrap = mk('div', 'se-quiz-wrap', '');
    const quiz = mk('div', '', '');
    quiz.id = 'se-quiz';
    quiz.innerHTML = `
      <h2>🚀 Mission Debrief Quiz</h2>
      <p class="quiz-sub">Verify your knowledge of ${cfg.craftName}. Complete all ${cfg.quiz.length} telemetry questions.</p>
    `;

    let score = 0;
    let answered = 0;

    cfg.quiz.forEach((q, qi) => {
      const card = mk('div', 'qcard', '');
      card.innerHTML = `<p>${qi + 1}. ${q.q}</p><div class="opts"></div><p class="explain"></p>`;
      const opts = card.querySelector('.opts');
      const expl = card.querySelector('.explain');

      q.options.forEach((opt, oi) => {
        const btn = mk('button', '', opt);
        btn.onclick = () => {
          opts.querySelectorAll('button').forEach(b => (b.disabled = true));
          if (oi === q.answer) {
            btn.classList.add('correct');
            score++;
          } else {
            btn.classList.add('wrong');
            opts.querySelectorAll('button')[q.answer].classList.add('correct');
          }
          if (q.explain) {
            expl.textContent = q.explain;
            expl.classList.add('show');
          }
          answered++;
          if (answered === cfg.quiz.length) showScore();
        };
        opts.appendChild(btn);
      });
      quiz.appendChild(card);
    });

    const scoreEl = mk('div', '', '');
    scoreEl.id = 'se-quiz-score';
    scoreEl.style.display = 'none';
    quiz.appendChild(scoreEl);

    const retryBtn = mk('button', 'se-hero-journey-btn', '↺ Retake Mission Quiz');
    retryBtn.id = 'se-quiz-retry';
    retryBtn.onclick = () => location.reload();
    quiz.appendChild(retryBtn);

    quizWrap.appendChild(quiz);
    lastSection.after(quizWrap);

    function showScore() {
      scoreEl.style.display = 'block';
      retryBtn.style.display = 'block';
      const pct = Math.round((score / cfg.quiz.length) * 100);
      let badge = pct >= 80 ? '🏆 Mission Specialist Qualified!' : pct >= 50 ? '🌟 Mission Completed!' : '📚 Review Telemetry & Try Again';
      scoreEl.innerHTML = `${score} / ${cfg.quiz.length}<span>${badge} Final Score: ${pct}%</span>`;
    }
  }

  /* ── Export Global API ── */
  global.StoryExtras = {
    init,
    TTS,
    setMode,
    startJourney,
    pauseJourney,
    resumeJourney,
    stopJourney,
    isFullscreen,
    toggleFullscreen
  };
})(window);
