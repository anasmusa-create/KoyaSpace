/* ECHOES OF SPACE — Web Audio radio effects + Web Speech API narration. */
(function () {
  let ctx = null;
  let enabled = true;
  let lastBeep = 0;

  function ensure() {
    if (!enabled) return null;
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch (e) { return null; }
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(o) {
    const c = ensure();
    if (!c) return;
    const f = o.freq || 880, dur = o.dur || 0.08, vol = o.vol == null ? 0.04 : o.vol;
    const t0 = c.currentTime + (o.when || 0);
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = o.type || 'sine';
    osc.frequency.setValueAtTime(f, t0);
    if (o.slideTo) osc.frequency.exponentialRampToValueAtTime(o.slideTo, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g); g.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.03);
  }

  const BASE = { moon: 1320, mars: 880, deep: 660 };

  const Sound = {
    get enabled() { return enabled; },
    setEnabled(v) { enabled = !!v; if (!enabled) Voice.stop(); },
    unlock() { ensure(); },

    /** Soft two-note radio blip when hovering a ghost-signal pin. */
    beep(sector) {
      const now = performance.now();
      if (now - lastBeep < 140) return;
      lastBeep = now;
      const f = BASE[sector] || 880;
      tone({ freq: f, dur: 0.07, type: 'sine', vol: 0.035 });
      tone({ freq: f * 1.5, dur: 0.09, type: 'triangle', vol: 0.025, when: 0.09 });
    },

    /** Very short typewriter / teletype tick. */
    tick() { tone({ freq: 2200 + Math.random() * 600, dur: 0.012, type: 'square', vol: 0.006 }); },

    /** Radio static burst. */
    static(dur, vol) {
      const c = ensure();
      if (!c) return;
      dur = dur || 0.9; vol = vol == null ? 0.05 : vol;
      const len = Math.floor(c.sampleRate * dur);
      const buf = c.createBuffer(1, len, c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len * 0.4);
      const src = c.createBufferSource(); src.buffer = buf;
      const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = 0.7;
      const g = c.createGain();
      const t0 = c.currentTime;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(vol, t0 + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      src.connect(bp); bp.connect(g); g.connect(c.destination);
      src.start(t0);
    },

    /** Sonar-like transmit sweep for the wake-up ping. */
    pingSend() {
      tone({ freq: 500, slideTo: 1600, dur: 0.35, type: 'sine', vol: 0.05 });
      tone({ freq: 250, slideTo: 800, dur: 0.35, type: 'triangle', vol: 0.03 });
    },

    /** Gentle arrival chime. */
    pingArrive() {
      [660, 880, 1320].forEach((f, i) => tone({ freq: f, dur: 0.5, type: 'sine', vol: 0.04, when: i * 0.14 }));
    },

    click() { tone({ freq: 520, dur: 0.05, type: 'triangle', vol: 0.03 }); }
  };

  /* ------------------------------ Voice ------------------------------ */
  const synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
  let voices = [];
  let speaking = false;
  let session = 0;

  function loadVoices() { if (synth) voices = synth.getVoices() || []; }
  if (synth) {
    loadVoices();
    if (synth.addEventListener) synth.addEventListener('voiceschanged', loadVoices);
    else synth.onvoiceschanged = loadVoices;
  }

  function score(v) {
    const n = (v.name || '').toLowerCase();
    let s = 0;
    if (/natural|neural|premium|enhanced/.test(n)) s += 4;
    if (/google|microsoft|samantha|daniel|karen|serena|aria|jenny/.test(n)) s += 2;
    if (v.localService) s += 1;
    return s;
  }

  function pickVoice(lang) {
    if (!voices.length) loadVoices();
    const find = prefixes => voices
      .filter(v => prefixes.some(p => (v.lang || '').toLowerCase().replace('_', '-').startsWith(p)))
      .sort((a, b) => score(b) - score(a))[0];
    if (lang === 'ku') {
      const ku = find(['ckb', 'ku']);
      if (ku) return { voice: ku, approx: false };
      const ar = find(['ar']);
      return ar ? { voice: ar, approx: true } : { voice: null, approx: false };
    }
    const en = find(['en-us', 'en-gb', 'en']);
    return { voice: en || null, approx: false };
  }

  function chunk(text) {
    const clean = text
      .replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '')
      .replace(/[ \t]+/g, ' ');
    const out = [];
    clean.split(/\n+/).forEach(par => {
      const sentences = par.match(/[^.!?؟۔…]+[.!?؟۔…]*\s*/g) || [par];
      let cur = '';
      sentences.forEach(s => {
        if ((cur + s).length > 170 && cur) { out.push(cur.trim()); cur = s; } else cur += s;
      });
      if (cur.trim()) out.push(cur.trim());
    });
    return out.filter(Boolean);
  }

  const Voice = {
    get supported() { return !!synth; },
    get speaking() { return speaking; },

    /** Returns {ok, reason, approx}. Callbacks: onstart, onend, onpulse. */
    speak(text, lang, opts) {
      opts = opts || {};
      if (!synth) return { ok: false, reason: 'unsupported' };
      const pick = pickVoice(lang);
      if (lang === 'ku' && !pick.voice) return { ok: false, reason: 'novoice' };
      Voice.stop();
      const my = ++session;
      const parts = chunk(text);
      let i = 0;
      const next = () => {
        if (my !== session) return;
        if (i >= parts.length) { speaking = false; if (opts.onend) opts.onend(); return; }
        const u = new SpeechSynthesisUtterance(parts[i++]);
        if (pick.voice) { u.voice = pick.voice; u.lang = pick.voice.lang; }
        else u.lang = 'en-US';
        u.rate = opts.rate || 0.95;
        u.pitch = opts.pitch || 1;
        u.volume = 1;
        u.onboundary = () => { if (opts.onpulse && my === session) opts.onpulse(); };
        u.onend = next;
        u.onerror = () => { if (my === session) { speaking = false; if (opts.onend) opts.onend(); } };
        synth.speak(u);
      };
      speaking = true;
      if (opts.onstart) opts.onstart();
      setTimeout(next, 60);   // small delay avoids Chrome dropping speak() right after cancel()
      return { ok: true, approx: pick.approx };
    },

    stop() {
      session++;
      if (synth) synth.cancel();
      if (speaking) speaking = false;
    }
  };

  window.Sound = Sound;
  window.Voice = Voice;
})();
