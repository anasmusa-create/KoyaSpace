/* ECHOES OF SPACE — main application: state, rendering, dossier + radio terminal,
 * speed-of-light ping simulator, quiz, hardware passport and media slot. */
(function () {
  "use strict";

  const { t, L } = I18N;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) =>
    String(s == null ? "" : s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const pad = (n) => String(n).padStart(2, "0");
  const html = document.documentElement;
  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const SECTORS = {
    moon: { n: 1, emoji: "🌕", rgb: [0, 240, 255] },
    mars: { n: 2, emoji: "🔴", rgb: [255, 87, 34] },
    deep: { n: 3, emoji: "🌌", rgb: [168, 85, 247] },
  };
  const AU = 149597870.7; // km
  const C = 299792.458; // km/s

  const prefs = Store.prefs.get();
  const state = {
    sector: "moon",
    mode: prefs.mode === "specialist" ? "specialist" : "junior",
    lang: prefs.lang === "ku" ? "ku" : "en",
    view: "flat",
    openId: null,
    lastFocus: null,
  };
  let ARTIFACTS = [];

  /* ====================================================================== */
  /*  DATA                                                                   */
  /* ====================================================================== */
  function arr(v) {
    return Array.isArray(v) ? v : [];
  }

  /** Make any (possibly uploaded, partial) artifact safe to render. */
  function normalize(raw) {
    if (!raw || typeof raw !== "object" || !raw.id || !raw.name) return null;
    const a = Object.assign({}, raw);
    a.id = String(raw.id).trim().toLowerCase().replace(/\s+/g, "-");
    a.sector = SECTORS[raw.sector] ? raw.sector : "deep";
    a.num = Number.isFinite(Number(raw.num)) ? Number(raw.num) : 99;
    a.icon = raw.icon || "🛰️";
    a.tagline = raw.tagline || "";
    a.status = raw.status || "";
    a.statusType =
      ["dormant", "partial", "drifting"].indexOf(raw.statusType) >= 0
        ? raw.statusType
        : "dormant";
    a.passport =
      raw.passport && typeof raw.passport === "object" ? raw.passport : {};
    a.sites = arr(raw.sites);
    a.funFacts = arr(raw.funFacts);
    a.story = raw.story && typeof raw.story === "object" ? raw.story : {};
    a.specs = arr(raw.specs).filter((r) => r && r.k);
    a.tradeoffs = arr(raw.tradeoffs);
    a.quiz = arr(raw.quiz).filter(
      (q) =>
        q && q.q && arr(q.options).length >= 2 && Number.isInteger(q.answer),
    );
    return a;
  }

  function rebuild() {
    const map = new Map();
    arr(window.ECHOES && window.ECHOES.artifacts).forEach((r) => {
      const a = normalize(r);
      if (a) map.set(a.id, a);
    });
    Store.custom.get().forEach((r) => {
      const a = normalize(r);
      if (a) {
        a.custom = true;
        map.set(a.id, a);
      }
    });
    ARTIFACTS = Array.from(map.values()).sort((x, y) => x.num - y.num);
  }
  const bySector = (s) => ARTIFACTS.filter((a) => a.sector === s);
  const byId = (id) => ARTIFACTS.find((a) => a.id === id);
  const nameOf = (a) => L(a.name);
  const shortName = (a) => nameOf(a).split(" (")[0];

  /* ====================================================================== */
  /*  TOASTS & FOCUS TRAP                                                    */
  /* ====================================================================== */
  function toast(msg, kind, ms) {
    const box = $("#toasts");
    const el = document.createElement("div");
    el.className = "toast " + (kind || "");
    el.textContent = msg;
    box.appendChild(el);
    requestAnimationFrame(() => el.classList.add("in"));
    setTimeout(() => {
      el.classList.remove("in");
      setTimeout(() => el.remove(), 400);
    }, ms || 5200);
  }

  function trapFocus(overlay, e) {
    if (e.key !== "Tab") return;
    const f = $$(
      'button:not([disabled]), [href], input:not([disabled]):not([type=hidden]), select, textarea, [tabindex]:not([tabindex="-1"])',
      overlay,
    ).filter((el) => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0],
      last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  /* ====================================================================== */
  /*  HERO + FEED                                                            */
  /* ====================================================================== */
  function countUp(el, target) {
    if (reduceMotion) {
      el.textContent = I18N.num(target);
      return;
    }
    const t0 = performance.now(),
      dur = 1400;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      el.textContent = I18N.num(Math.round(target * (1 - Math.pow(1 - k, 3))));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function renderHero() {
    $("#heroLede").textContent = t("hero.lede." + state.mode);
    const items = [
      [ARTIFACTS.length, "hero.stat.artifacts"],
      [3, "hero.stat.sectors"],
      [2, "hero.stat.langs"],
      [new Date().getFullYear() - 1967, "hero.stat.years"],
    ];
    $("#stats").innerHTML = items
      .map(
        (i) =>
          '<div><dt data-n="' +
          i[0] +
          '">0</dt><dd>' +
          esc(t(i[1])) +
          "</dd></div>",
      )
      .join("");
    $$("#stats dt").forEach((el) => countUp(el, Number(el.dataset.n)));
  }

  let feedTimer = null,
    feedOrder = [],
    feedI = 0;
  function feedStep() {
    const body = $("#feedBody");
    if (!ARTIFACTS.length) return;
    if (feedI >= feedOrder.length) {
      feedOrder = ARTIFACTS.map((_, i) => i).sort(() => Math.random() - 0.5);
      feedI = 0;
    }
    const a = ARTIFACTS[feedOrder[feedI++]];
    const line = document.createElement("div");
    line.className = "feed-line";
    const ico = a.statusType === "drifting" ? "◌" : "◉";
    line.innerHTML =
      '<span class="pfx">' +
      ico +
      " SIG-" +
      pad(a.num) +
      "</span> " +
      esc(
        t("feed.line", {
          name: shortName(a).toUpperCase(),
          end: L(a.passport.end),
        }),
      );
    body.appendChild(line);
    while (body.children.length > 6) body.firstElementChild.remove();
  }
  function startFeed() {
    clearInterval(feedTimer);
    $("#feedBody").innerHTML = "";
    feedOrder = [];
    feedI = 0;
    for (let i = 0; i < 4; i++) feedStep();
    feedTimer = setInterval(feedStep, 2600);
  }

  /* ====================================================================== */
  /*  SECTORS, MAP PANEL, CARDS                                              */
  /* ====================================================================== */
  function renderTabs() {
    $("#sectorTabs").innerHTML = Object.keys(SECTORS)
      .map((k) => {
        const s = SECTORS[k];
        return (
          '<button type="button" role="tab" class="sector-tab" data-sector="' +
          k +
          '" aria-selected="' +
          (k === state.sector) +
          '">' +
          '<span class="st-emoji" aria-hidden="true">' +
          s.emoji +
          "</span>" +
          '<span class="st-text"><small class="mono">' +
          t("sector.label") +
          " " +
          pad(s.n) +
          "</small>" +
          "<b>" +
          esc(t("sector." + k + ".name")) +
          "</b><em>" +
          esc(t("artifacts.n", { n: bySector(k).length })) +
          "</em></span></button>"
        );
      })
      .join("");
  }

  function renderSectorHeader() {
    const s = state.sector;
    $("#sectorEyebrow").textContent =
      t("sector.label") + " " + pad(SECTORS[s].n);
    $("#sectorTitle").textContent = t("sector." + s + ".name");
    $("#sectorDesc").textContent = t("sector." + s + ".desc");
    $("#viewSeg").hidden = s === "deep";
    $$("#viewSeg button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.view === state.view));
    });
    $("#mapCap").textContent =
      s === "deep"
        ? t("map.cap.deep")
        : state.view === "globe"
          ? t("map.cap.globe") +
            " · " +
            t("sector." + s + ".name").toUpperCase()
          : t("map.cap." + s);
    $("#radarNote").textContent = t("radar.note." + s);
  }

  function coordText(pin) {
    if (!pin) return "";
    if (pin.kind === "sys") return pin.au + " AU";
    const ns = pin.lat >= 0 ? "N" : "S",
      ew = pin.lon >= 0 ? "E" : "W";
    return (
      Math.abs(pin.lat).toFixed(3) +
      "° " +
      ns +
      ", " +
      Math.abs(pin.lon).toFixed(3) +
      "° " +
      ew
    );
  }

  function renderPreview(pin) {
    const el = $("#preview");
    if (!pin) {
      if (!el.dataset.id)
        el.innerHTML =
          '<span class="pv-idle mono">' + esc(t("preview.idle")) + "</span>";
      return;
    }
    const a = byId(pin.artId);
    if (!a) return;
    el.dataset.id = a.id;
    el.classList.add("active");
    el.innerHTML =
      '<div class="pv-ico" aria-hidden="true">' +
      a.icon +
      "</div>" +
      '<div class="pv-body"><div class="pv-name">' +
      esc(nameOf(a)) +
      "</div>" +
      '<div class="pv-tag">“' +
      esc(L(a.tagline)) +
      "”</div>" +
      '<div class="pv-meta mono"><span class="chip ' +
      a.statusType +
      '">' +
      esc(L(a.status)) +
      "</span>" +
      "<span>" +
      esc(t("preview.coords")) +
      ' <bdi dir="ltr">' +
      esc(coordText(pin)) +
      "</bdi></span>" +
      (pin.label
        ? '<span class="pv-site">' + esc(L(pin.label)) + "</span>"
        : "") +
      "</div></div>" +
      '<button type="button" class="pv-open" data-open="' +
      esc(a.id) +
      '">' +
      esc(t("preview.open")) +
      "</button>";
  }

  function resetPreview() {
    const el = $("#preview");
    delete el.dataset.id;
    el.classList.remove("active");
    renderPreview(null);
  }

  function renderGrid() {
    const scores = Store.scores.get();
    $("#cardGrid").innerHTML = bySector(state.sector)
      .map((a) => {
        const sc = scores[a.id] || 0;
        return (
          '<article class="card glass-card" tabindex="0" role="button" data-id="' +
          esc(a.id) +
          '" aria-label="' +
          esc(t("card.open") + ": " + nameOf(a)) +
          '">' +
          '<div class="card-top"><span class="card-num mono">#' +
          pad(a.num) +
          "</span>" +
          '<span class="chip ' +
          a.statusType +
          '">' +
          esc(L(a.status)) +
          "</span></div>" +
          '<div class="card-ico" aria-hidden="true">' +
          a.icon +
          "</div>" +
          "<h4>" +
          esc(nameOf(a)) +
          "</h4>" +
          '<p class="card-tag">“' +
          esc(L(a.tagline)) +
          "”</p>" +
          '<div class="card-foot"><span class="mono tiny" dir="ltr">' +
          esc(L(a.passport.nssdca)) +
          "</span>" +
          (a.custom
            ? '<span class="chip ghost mono">' +
              esc(t("upload.custom")) +
              "</span>"
            : "") +
          (sc
            ? '<span class="stars" title="' +
              esc(t("card.stars")) +
              '">' +
              "⭐".repeat(sc) +
              "</span>"
            : "") +
          '<span class="open">' +
          esc(t("card.open")) +
          " →</span></div></article>"
        );
      })
      .join("");
  }

  function setSector(s) {
    state.sector = s;
    html.dataset.sector = s;
    Starfield.setTint(SECTORS[s].rgb);
    renderTabs();
    renderSectorHeader();
    MapView.setSector(s, bySector(s));
    resetPreview();
    renderGrid();
  }

  function renderAll() {
    renderHero();
    startFeed();
    renderTabs();
    renderSectorHeader();
    renderGrid();
    resetPreview();
  }

  function refreshData() {
    rebuild();
    renderHero();
    renderTabs();
    MapView.setSector(state.sector, bySector(state.sector));
    renderGrid();
    resetPreview();
    if (state.openId) {
      if (byId(state.openId)) renderDossier();
      else closeDossier();
    }
  }

  /* ====================================================================== */
  /*  WAVEFORM VISUALIZER                                                    */
  /* ====================================================================== */
  const Wave = {
    cv: null,
    c: null,
    raf: 0,
    level: 0.06,
    target: 0.06,
    pulseV: 0,
    N: 72,
    start(cv) {
      this.stop();
      this.cv = cv;
      this.c = cv.getContext("2d");
      const loop = (now) => {
        this.raf = requestAnimationFrame(loop);
        this.draw(now);
      };
      this.raf = requestAnimationFrame(loop);
    },
    stop() {
      cancelAnimationFrame(this.raf);
      this.raf = 0;
    },
    set(v) {
      this.target = v;
    },
    pulse() {
      this.pulseV = 1;
    },
    draw(now) {
      const cv = this.cv,
        c = this.c;
      if (!cv || !cv.isConnected) return this.stop();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = cv.clientWidth,
        h = cv.clientHeight;
      if (!w || !h) return;
      if (cv.width !== Math.round(w * dpr)) {
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
      }
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, w, h);
      this.level += (this.target - this.level) * 0.08;
      this.pulseV *= 0.9;
      const rgb =
        getComputedStyle(html).getPropertyValue("--accent-rgb").trim() ||
        "0,240,255";
      const gap = w / this.N,
        bw = Math.max(1.5, gap * 0.52),
        mid = h / 2;
      for (let i = 0; i < this.N; i++) {
        const env = Math.sin((i / this.N) * Math.PI); // taper at edges
        const noise =
          (Math.sin(now * 0.004 * (1 + (i % 5) * 0.3) + i * 1.7) * 0.5 + 0.5) *
          (0.45 + Math.random() * 0.55);
        const amp =
          0.03 +
          (this.level + this.pulseV * 0.35) * noise * (0.45 + env * 0.55);
        const bh = Math.max(1.5, amp * h);
        const g = c.createLinearGradient(0, mid - bh / 2, 0, mid + bh / 2);
        g.addColorStop(0, "rgba(" + rgb + ",0.95)");
        g.addColorStop(0.5, "rgba(255,255,255,0.9)");
        g.addColorStop(1, "rgba(" + rgb + ",0.95)");
        c.fillStyle = g;
        const x = i * gap + (gap - bw) / 2;
        if (c.roundRect) {
          c.beginPath();
          c.roundRect(x, mid - bh / 2, bw, bh, bw / 2);
          c.fill();
        } else c.fillRect(x, mid - bh / 2, bw, bh);
      }
    },
  };

  /* ====================================================================== */
  /*  TRANSMISSION (typewriter + speech)                                     */
  /* ====================================================================== */
  const Tx = {
    timers: [],
    typing: false,
    done: false,
    full: "",
    typedEl: null,
    bodyEl: null,
  };

  function txClear() {
    Tx.timers.forEach(clearTimeout);
    Tx.timers = [];
    Tx.typing = false;
    Tx.done = false;
  }
  const later = (ms, fn) => {
    const id = setTimeout(fn, ms);
    Tx.timers.push(id);
    return id;
  };

  function storyText(a) {
    const s = a.story || {};
    const v =
      state.mode === "junior"
        ? s.junior || s.specialist
        : s.specialist || s.junior;
    return L(v) || t("dossier.noStory");
  }

  function updateWave() {
    Wave.set(Voice.speaking ? 0.78 : Tx.typing ? 0.38 : 0.06);
  }

  function addLog(text, ok) {
    const log = $("#termLog");
    if (!log) return;
    const d = document.createElement("div");
    d.innerHTML =
      '<span class="ok">' + (ok ? "[OK]" : "[··]") + "</span> " + esc(text);
    log.appendChild(d);
  }

  function finishTyping() {
    Tx.typing = false;
    Tx.done = true;
    const cur = $("#termBody .cursor");
    if (cur) cur.classList.add("idle");
    addLog(t("term.end"), true);
    updateWave();
    const rp = $("#btnReplay");
    if (rp) rp.disabled = false;
    const sk = $("#btnSkip");
    if (sk) sk.disabled = true;
  }

  function typeStory(text) {
    const typed = $("#typed"),
      body = $("#termBody");
    if (!typed) return;
    const chars = Array.from(text);
    let i = 0,
      buf = "";
    Tx.typing = true;
    Tx.full = text;
    const sk = $("#btnSkip");
    if (sk) sk.disabled = false;
    updateWave();
    const base = reduceMotion ? 4 : state.mode === "junior" ? 24 : 15;
    const step = () => {
      if (!Tx.typing) return;
      if (i >= chars.length) return finishTyping();
      const ch = chars[i++];
      buf += ch;
      typed.textContent = buf;
      if (i % 3 === 0) Sound.tick();
      body.scrollTop = body.scrollHeight;
      let d = base;
      if (".!?؟…".indexOf(ch) >= 0) d = base * 9;
      else if (",،;:—".indexOf(ch) >= 0) d = base * 4;
      else if (ch === "\n") d = base * 12;
      Tx.timers.push(setTimeout(step, d));
    };
    step();
  }

  function skipTyping() {
    if (!Tx.typing) return;
    Tx.timers.forEach(clearTimeout);
    Tx.timers = [];
    $("#typed").textContent = Tx.full;
    finishTyping();
  }

  function startTransmission(a) {
    txClear();
    const typed = $("#typed"),
      log = $("#termLog");
    if (typed) typed.textContent = "";
    if (log) log.innerHTML = "";
    const cur = $("#termBody .cursor");
    if (cur) cur.classList.remove("idle");
    const rp = $("#btnReplay");
    if (rp) rp.disabled = true;
    const sk = $("#btnSkip");
    if (sk) sk.disabled = true;
    Sound.static(1.2, 0.05);
    const lines = [
      t("term.carrier"),
      t("term.source", { name: shortName(a).toUpperCase() }),
    ];
    if (state.mode === "specialist" && a.radio) {
      let r = L(a.radio);
      if (r.length > 110) r = r.slice(0, 107) + "…";
      lines.push(t("term.freq", { radio: r }));
    }
    lines.push(t("term.decode"), t("term.begin"));
    lines.forEach((ln, i) => later(250 + i * 380, () => addLog(ln, true)));
    later(250 + lines.length * 380 + 150, () => typeStory(storyText(a)));
    Wave.set(0.3);
  }

  function setSpeaking(on) {
    const b = $("#btnListen");
    if (!b) return;
    b.classList.toggle("speaking", on);
    b.textContent = on ? t("term.stop") : t("term.listen");
    updateWave();
  }

  function toggleListen(a) {
    if (Voice.speaking) {
      Voice.stop();
      setSpeaking(false);
      return;
    }
    if (!Voice.supported) {
      toast(t("voice.unsupported"), "warn");
      return;
    }
    const res = Voice.speak(storyText(a), state.lang, {
      rate: state.mode === "junior" ? 0.92 : 1,
      pitch: state.mode === "junior" ? 1.1 : 1,
      onstart: () => setSpeaking(true),
      onend: () => setSpeaking(false),
      onpulse: () => Wave.pulse(),
    });
    if (!res.ok) {
      toast(
        res.reason === "novoice" ? t("voice.none") : t("voice.unsupported"),
        "warn",
        8000,
      );
      return;
    }
    if (res.approx) toast(t("voice.approx"), "warn", 8000);
    Sound.click();
  }

  /* ====================================================================== */
  /*  SPEED-OF-LIGHT PING SIMULATOR                                          */
  /* ====================================================================== */
  const D = (en, ku) => ({ en, ku });
  const PING_SECTOR = {
    moon: [
      { key: D("Closest (perigee)", "نزیکترین (پێریجی)"), km: 363300 },
      { key: D("Average distance", "دووریی تێکڕا"), km: 384400 },
      { key: D("Farthest (apogee)", "دووترین (ئاپۆجی)"), km: 405500 },
    ],
    mars: [
      { key: D("Closest approach", "نزیکترین کات"), km: 54.6e6 },
      { key: D("Average distance", "دووریی تێکڕا"), km: 225e6 },
      {
        key: D("Farthest (solar conjunction)", "دووترین (هاوگرتنی خۆری)"),
        km: 401e6,
      },
    ],
    deep: [
      {
        key: D("Asteroid belt (~3 AU)", "پشتێنی ئەستێرۆییدەکان (~3 AU)"),
        km: 3 * AU,
      },
      {
        key: D("Outer planets (~30 AU)", "هەسارە دەرەکییەکان (~30 AU)"),
        km: 30 * AU,
      },
      {
        key: D(
          "Interstellar space (~140 AU)",
          "فەزای نێوان ئەستێرەکان (~140 AU)",
        ),
        km: 140 * AU,
      },
    ],
  };
  const PING_ID = {
    dawn: {
      def: 1,
      list: [
        { key: D("Closest (~1.6 AU)", "نزیکترین (~1.6 AU)"), km: 1.6 * AU },
        { key: D("Average (~2.8 AU)", "تێکڕا (~2.8 AU)"), km: 2.8 * AU },
        { key: D("Farthest (~3.9 AU)", "دووترین (~3.9 AU)"), km: 3.9 * AU },
      ],
    },
    near: {
      def: 1,
      list: [
        { key: D("Closest (~0.15 AU)", "نزیکترین (~0.15 AU)"), km: 0.15 * AU },
        { key: D("Average (~1.5 AU)", "تێکڕا (~1.5 AU)"), km: 1.5 * AU },
        { key: D("Farthest (~2.8 AU)", "دووترین (~2.8 AU)"), km: 2.8 * AU },
      ],
    },
    pioneer: {
      def: 0,
      list: [
        {
          key: D(
            "Pioneer 10 today (estimated)",
            "Pioneer 10 ئەمڕۆ (خەمڵێنراو)",
          ),
          est: true,
          au0: 80,
          epoch: "2003-01-23",
          rate: 2.52,
        },
        {
          key: D(
            "Pioneer 11 today (estimated)",
            "Pioneer 11 ئەمڕۆ (خەمڵێنراو)",
          ),
          est: true,
          au0: 44.4,
          epoch: "1995-09-30",
          rate: 2.4,
        },
        {
          key: D(
            "Pioneer 10 at last contact (80 AU)",
            "Pioneer 10 لە دوایین پەیوەندی (80 AU)",
          ),
          km: 80 * AU,
        },
      ],
    },
    kepler: {
      def: 1,
      list: [
        {
          key: D("Mid-mission (~0.5 AU)", "ناوەڕاستی ئەرک (~0.5 AU)"),
          km: 0.5 * AU,
        },
        {
          key: D(
            "At retirement, 2018 (~1 AU)",
            "لە خانەنشینبوون، 2018 (~1 AU)",
          ),
          km: 1.0 * AU,
        },
      ],
    },
  };

  function pingList(a) {
    let list,
      def = 1;
    if (a.ping && arr(a.ping.distances).length) {
      list = a.ping.distances;
      def = a.ping.default || 0;
    } else if (PING_ID[a.id]) {
      list = PING_ID[a.id].list;
      def = PING_ID[a.id].def;
    } else {
      list = PING_SECTOR[a.sector] || PING_SECTOR.deep;
    }
    const out = list.map((d) => {
      let km = d.km;
      if (d.au0 != null) {
        const yrs = (Date.now() - Date.parse(d.epoch)) / (365.25 * 864e5);
        km = (d.au0 + yrs * d.rate) * AU;
      }
      return { key: d.key, km, est: !!d.est };
    });
    return { items: out, def: Math.min(def, out.length - 1) };
  }

  function fmtDur(s) {
    if (s < 60)
      return (s < 10 ? s.toFixed(2) : s.toFixed(1)) + " " + t("unit.s");
    if (s < 3600) return (s / 60).toFixed(1) + " " + t("unit.min");
    if (s < 172800) return (s / 3600).toFixed(1) + " " + t("unit.h");
    return (s / 86400).toFixed(1) + " " + t("unit.d");
  }
  const fmtKm = (km) => I18N.num(Math.round(km)) + " km";

  const Ping = {
    a: null,
    items: [],
    idx: 0,
    fast: false,
    running: false,
    raf: 0,
    t0: 0,
    dur: 0,
    arrivedAt: 0,
    cv: null,
    c: null,
    typeTimer: 0,

    init(a) {
      this.cancel();
      this.a = a;
      const pl = pingList(a);
      this.items = pl.items;
      this.idx = pl.def;
      this.cv = $("#pingCv");
      this.c = this.cv.getContext("2d");
      this.fast = this.oneWay() > 6;
      this.renderChips();
      this.updateStats();
      $("#pingSend").onclick = () =>
        this.running ? this.cancel(true) : this.send();
      $$("#pingSpeed button").forEach(
        (b) =>
          (b.onclick = () => {
            this.fast = b.dataset.speed === "fast";
            this.updateSpeed();
          }),
      );
      this.updateSpeed();
      this.drawFrame(-1);
    },

    oneWay() {
      return this.items[this.idx].km / C;
    },

    renderChips() {
      const box = $("#pingDist");
      box.innerHTML = this.items
        .map(
          (d, i) =>
            '<button type="button" class="chip-btn' +
            (i === this.idx ? " on" : "") +
            '" data-i="' +
            i +
            '">' +
            esc(L(d.key)) +
            "</button>",
        )
        .join("");
      $$("button", box).forEach(
        (b) =>
          (b.onclick = () => {
            this.cancel();
            this.idx = Number(b.dataset.i);
            this.fast = this.oneWay() > 6;
            this.renderChips();
            this.updateStats();
            this.updateSpeed();
            this.drawFrame(-1);
          }),
      );
    },

    updateSpeed() {
      $$("#pingSpeed button").forEach((b) =>
        b.setAttribute(
          "aria-pressed",
          String((b.dataset.speed === "fast") === this.fast),
        ),
      );
    },

    updateStats() {
      const d = this.items[this.idx],
        ow = this.oneWay();
      $("#pdKm").textContent = (d.est ? "≈ " : "") + fmtKm(d.km);
      $("#pdOne").textContent = (d.est ? "≈ " : "") + fmtDur(ow);
      $("#pdRound").textContent = (d.est ? "≈ " : "") + fmtDur(ow * 2);
      $("#pingNote").textContent = d.est ? t("ping.est") : "";
      let an;
      if (state.mode === "junior") {
        if (ow < 3) an = t("ping.an1");
        else if (ow < 1800) an = t("ping.an2", { rt: fmtDur(ow * 2) });
        else if (ow < 6 * 3600) an = t("ping.an3", { t: fmtDur(ow) });
        else an = t("ping.an4", { t: fmtDur(ow) });
      } else {
        an = t(this.a.sector === "moon" ? "ping.spec.moon" : "ping.spec", {
          rt: fmtDur(ow * 2),
          km: I18N.num(Math.round(d.km)),
        });
      }
      $("#pingAn").textContent = an;
      $("#pingClock").textContent =
        t("ping.travelled") + ": 0 km · 0 " + t("unit.s");
      $("#pingBar").style.width = "0%";
      $("#pingReply").hidden = true;
      $("#pingStatus").textContent = "";
    },

    send() {
      const ow = this.oneWay();
      cancelAnimationFrame(this.raf);
      clearTimeout(this.typeTimer);
      this.running = true;
      this.dur = this.fast
        ? Math.min(9000, Math.max(3500, ow * 220))
        : ow * 1000;
      if (!this.fast && this.dur < 1200) this.dur = 1200;
      this.t0 = performance.now();
      this.arrivedAt = 0;
      Sound.pingSend();
      $("#pingSend").textContent = t("ping.cancel");
      $("#pingSend").classList.add("danger");
      $("#pingReply").hidden = true;
      $("#pingStatus").textContent = t("ping.sending");
      const loop = (now) => {
        if (!this.running && !this.arrivedAt) return;
        this.raf = requestAnimationFrame(loop);
        const p = Math.min(1, (now - this.t0) / this.dur);
        if (this.running) {
          const ts = p * ow;
          $("#pingClock").textContent =
            t("ping.travelled") +
            ": " +
            fmtKm(C * ts) +
            " · " +
            fmtDur(ts) +
            " / " +
            fmtDur(ow);
          $("#pingBar").style.width = (p * 100).toFixed(1) + "%";
          if (p >= 1) this.arrive(now);
        }
        this.drawFrame(this.arrivedAt ? 1 : p, now);
        if (this.arrivedAt && now - this.arrivedAt > 2200) {
          cancelAnimationFrame(this.raf);
          this.raf = 0;
        }
      };
      this.raf = requestAnimationFrame(loop);
    },

    arrive(now) {
      this.running = false;
      this.arrivedAt = now;
      Sound.pingArrive();
      $("#pingSend").textContent = t("ping.btn");
      $("#pingSend").classList.remove("danger");
      $("#pingStatus").textContent = t("ping.delivered");
      const rep = $("#pingReply");
      rep.hidden = false;
      const txt = L(this.a.pingReply) || "";
      rep.innerHTML =
        '<span class="mono tiny">' + esc(t("ping.reply")) + "</span><p></p>";
      const p = $("p", rep);
      if (!txt) return;
      const chars = Array.from(txt);
      let i = 0;
      const step = () => {
        if (!rep.isConnected) return;
        p.textContent = chars.slice(0, ++i).join("");
        if (i < chars.length) this.typeTimer = setTimeout(step, 22);
      };
      clearTimeout(this.typeTimer);
      step();
    },

    cancel(redraw) {
      this.running = false;
      this.arrivedAt = 0;
      cancelAnimationFrame(this.raf);
      this.raf = 0;
      clearTimeout(this.typeTimer);
      const b = $("#pingSend");
      if (b) {
        b.textContent = t("ping.btn");
        b.classList.remove("danger");
      }
      if (redraw && this.a) {
        this.updateStats();
        this.drawFrame(-1);
      }
    },

    drawFrame(p, now) {
      const cv = this.cv,
        c = this.c;
      if (!cv || !cv.isConnected) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = cv.clientWidth,
        h = cv.clientHeight;
      if (!w || !h) return;
      if (cv.width !== Math.round(w * dpr)) {
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
      }
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, w, h);
      const rgb =
        getComputedStyle(html).getPropertyValue("--accent-rgb").trim() ||
        "0,240,255";
      const y = h / 2 - 6,
        x0 = 36,
        x1 = w - 36;
      c.lineWidth = 1.5;
      c.setLineDash([3, 7]);
      c.strokeStyle = "rgba(" + rgb + ",0.35)";
      c.beginPath();
      c.moveTo(x0, y);
      c.lineTo(x1, y);
      c.stroke();
      c.setLineDash([]);
      if (p > 0) {
        const xp = x0 + (x1 - x0) * Math.min(1, p);
        c.strokeStyle = "rgba(" + rgb + ",0.9)";
        c.beginPath();
        c.moveTo(x0, y);
        c.lineTo(xp, y);
        c.stroke();
        // broadcast arcs at Earth
        if (p < 0.3 && now) {
          for (let i = 0; i < 3; i++) {
            const q = (now / 500 + i / 3) % 1;
            c.strokeStyle = "rgba(" + rgb + "," + 0.6 * (1 - q) + ")";
            c.beginPath();
            c.arc(x0, y, 14 + q * 26, -0.9, 0.9);
            c.stroke();
          }
        }
        if (p < 1) {
          const g = c.createRadialGradient(xp, y, 0, xp, y, 16);
          g.addColorStop(0, "rgba(255,255,255,1)");
          g.addColorStop(0.35, "rgba(" + rgb + ",0.8)");
          g.addColorStop(1, "rgba(" + rgb + ",0)");
          c.fillStyle = g;
          c.beginPath();
          c.arc(xp, y, 16, 0, 6.2832);
          c.fill();
        }
      }
      // arrival ripple
      if (this.arrivedAt && now) {
        const q = Math.min(1, (now - this.arrivedAt) / 1800);
        for (let i = 0; i < 3; i++) {
          const qq = Math.min(1, Math.max(0, q - i * 0.15));
          c.strokeStyle = "rgba(255,255,255," + 0.8 * (1 - qq) + ")";
          c.beginPath();
          c.arc(x1, y, 14 + qq * 34, 0, 6.2832);
          c.stroke();
        }
      }
      // Earth
      const eg = c.createRadialGradient(x0 - 4, y - 4, 2, x0, y, 14);
      eg.addColorStop(0, "#9fd0ff");
      eg.addColorStop(0.6, "#2a74d6");
      eg.addColorStop(1, "#10316b");
      c.fillStyle = eg;
      c.beginPath();
      c.arc(x0, y, 12, 0, 6.2832);
      c.fill();
      c.fillStyle = "rgba(80,200,120,0.75)";
      c.beginPath();
      c.arc(x0 - 3, y - 2, 4, 0, 6.2832);
      c.arc(x0 + 4, y + 4, 3, 0, 6.2832);
      c.fill();
      // craft
      c.font =
        '22px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.fillText(this.a.icon, x1, y);
      c.font = '10px "JetBrains Mono", monospace';
      c.fillStyle = "rgba(255,255,255,0.65)";
      c.textBaseline = "alphabetic";
      c.direction = "ltr";
      c.fillText("EARTH", x0, h - 8);
      let nm = shortName(this.a).toUpperCase();
      if (nm.length > 22) nm = nm.slice(0, 21) + "…";
      c.direction = state.lang === "ku" ? "rtl" : "ltr";
      c.fillText(nm, Math.min(w - 50, Math.max(50, x1)), h - 8);
    },
  };

  /* ====================================================================== */
  /*  QUIZ                                                                   */
  /* ====================================================================== */
  function runQuiz(a) {
    const body = $("#quizBody");
    if (!body) return;
    const qs = a.quiz;
    let i = 0,
      score = 0,
      locked = false;

    function render() {
      if (i >= qs.length) return end();
      const q = qs[i];
      locked = false;
      body.innerHTML =
        '<p class="mono tiny q-count">' +
        esc(t("quiz.q", { i: i + 1, n: qs.length })) +
        "</p>" +
        '<p class="q">' +
        esc(L(q.q)) +
        "</p>" +
        '<div class="opts">' +
        arr(q.options)
          .map(
            (o, k) =>
              '<button type="button" class="opt" data-k="' +
              k +
              '"><span class="opt-l">' +
              "ABC"[k] +
              "</span>" +
              esc(L(o)) +
              "</button>",
          )
          .join("") +
        "</div>" +
        '<div class="q-fb" aria-live="polite"></div>' +
        '<button type="button" class="btn-primary q-next" hidden>' +
        esc(i === qs.length - 1 ? t("quiz.finish") : t("quiz.next")) +
        "</button>";
      $$(".opt", body).forEach(
        (b) => (b.onclick = () => pick(Number(b.dataset.k))),
      );
      $(".q-next", body).onclick = () => {
        i++;
        render();
      };
    }

    function pick(k) {
      if (locked) return;
      locked = true;
      const q = qs[i],
        ok = k === q.answer;
      if (ok) score++;
      $$(".opt", body).forEach((b, idx) => {
        b.disabled = true;
        if (idx === q.answer) b.classList.add("right");
        else if (idx === k) b.classList.add("wrong");
      });
      const fb = $(".q-fb", body);
      fb.className = "q-fb " + (ok ? "ok" : "no");
      fb.innerHTML =
        "<b>" +
        esc(t(ok ? "quiz.correct" : "quiz.wrong")) +
        "</b> " +
        esc(L(q.why));
      $(".q-next", body).hidden = false;
      if (ok) Sound.pingArrive();
      else Sound.click();
    }

    function end() {
      Store.scores.set(a.id, score);
      const badge = t("badge." + Math.min(3, score));
      body.innerHTML =
        '<div class="q-end"><div class="q-stars" aria-hidden="true">' +
        [0, 1, 2]
          .map((n) => '<span class="' + (n < score ? "on" : "") + '">★</span>')
          .join("") +
        "</div>" +
        '<p class="q-score">' +
        esc(t("quiz.score", { s: score, n: qs.length })) +
        "</p>" +
        '<p class="q-badge">' +
        esc(badge) +
        "</p>" +
        '<button type="button" class="btn-ghost q-retry">' +
        esc(t("quiz.retry")) +
        "</button></div>";
      $(".q-retry", body).onclick = () => {
        i = 0;
        score = 0;
        render();
      };
      if (score >= 2) confetti(body);
      renderGrid();
    }
    render();
  }

  function confetti(host) {
    if (reduceMotion) return;
    const box = document.createElement("div");
    box.className = "confetti";
    const em = ["✨", "⭐", "🚀", "🌟", "🛰️", "☄️"];
    for (let n = 0; n < 26; n++) {
      const s = document.createElement("span");
      s.textContent = em[n % em.length];
      s.style.setProperty("--x", (Math.random() * 100).toFixed(1) + "%");
      s.style.setProperty("--dx", (Math.random() * 120 - 60).toFixed(0) + "px");
      s.style.setProperty("--d", (1.4 + Math.random() * 1.4).toFixed(2) + "s");
      s.style.setProperty(
        "--r",
        (Math.random() * 540 - 270).toFixed(0) + "deg",
      );
      s.style.animationDelay = (Math.random() * 0.4).toFixed(2) + "s";
      box.appendChild(s);
    }
    host.appendChild(box);
    setTimeout(() => box.remove(), 3500);
  }

  /* ====================================================================== */
  /*  MEDIA SLOT (photos, diagrams, <model-viewer> .glb)                     */
  /* ====================================================================== */
  let mediaToken = 0,
    mvPromise = null;

  function loadModelViewer() {
    if (window.customElements && customElements.get("model-viewer"))
      return Promise.resolve(true);
    if (!mvPromise) {
      mvPromise = new Promise((res) => {
        const s = document.createElement("script");
        s.type = "module";
        s.src =
          "https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js";
        s.onload = () => res(true);
        s.onerror = () => res(false);
        document.head.appendChild(s);
        setTimeout(() => res(!!customElements.get("model-viewer")), 12000);
      }).then((ok) => {
        if (!ok) mvPromise = null;
        return ok;
      });
    }
    return mvPromise;
  }

  function probeImage(id) {
    const exts = ["jpg", "jpeg", "png", "webp"];
    return new Promise((resolve) => {
      let i = 0;
      const next = () => {
        if (i >= exts.length) return resolve(null);
        const src = "assets/images/" + id + "." + exts[i++];
        const im = new Image();
        im.onload = () => resolve(src);
        im.onerror = next;
        im.src = src;
      };
      next();
    });
  }

  function probeModel(id) {
    const src = "assets/models/" + id + ".glb";
    return fetch(src, { method: "HEAD" })
      .then((r) => (r.ok ? src : null))
      .catch(() => null);
  }

  function renderMedia(a) {
    const box = $("#media");
    if (!box) return;
    const token = ++mediaToken;
    const up = Store.media.forArtifact(a.id);
    const images = up.images.map((i) => ({
      src: i.url,
      name: i.name,
      up: true,
    }));
    const models = up.models.map((i) => ({
      src: i.url,
      name: i.name,
      up: true,
    }));
    const m = a.media || {};
    []
      .concat(m.image || [])
      .forEach(
        (s) => s && images.push({ src: s, name: String(s).split("/").pop() }),
      );
    []
      .concat(m.model || [])
      .forEach(
        (s) => s && models.push({ src: s, name: String(s).split("/").pop() }),
      );
    let cur = images.length
      ? { type: "image", idx: 0 }
      : models.length
        ? { type: "model", idx: 0 }
        : { type: "none", idx: 0 };

    function draw() {
      if (token !== mediaToken) return;
      let stage;
      if (cur.type === "image" && images[cur.idx]) {
        const im = images[cur.idx];
        stage =
          '<img src="' +
          esc(im.src) +
          '" alt="' +
          esc(nameOf(a)) +
          '">' +
          '<span class="fig mono">FIG. ' +
          pad(cur.idx + 1) +
          (im.up ? " · " + esc(t("media.uploaded")).toUpperCase() : "") +
          "</span>";
      } else if (cur.type === "model" && models[cur.idx]) {
        stage =
          '<div class="mv-host" id="mvHost"><p class="mono tiny muted mv-msg">' +
          esc(t("media.loading")) +
          '</p></div><span class="fig mono">GLB · 3D</span>';
      } else {
        stage =
          '<div class="ph"><div class="ph-rings" aria-hidden="true"><i></i><i></i><i></i></div><div class="ph-ico" aria-hidden="true">' +
          a.icon +
          "</div>" +
          '<p class="ph-t">' +
          esc(t("media.empty")) +
          '</p><p class="mono tiny muted">' +
          esc(t("media.hint", { id: a.id })) +
          "</p></div>";
      }
      const thumbs =
        images.length > 1
          ? '<div class="thumbs">' +
            images
              .map(
                (im, i) =>
                  '<button type="button" class="thumb' +
                  (cur.type === "image" && cur.idx === i ? " on" : "") +
                  '" data-i="' +
                  i +
                  '" style="background-image:url(\'' +
                  esc(im.src) +
                  '\')" aria-label="' +
                  (i + 1) +
                  '"></button>',
              )
              .join("") +
            "</div>"
          : "";
      const tabs =
        images.length || models.length
          ? '<div class="seg compact media-tabs">' +
            '<button type="button" data-type="image" aria-pressed="' +
            (cur.type === "image") +
            '"' +
            (images.length ? "" : " disabled") +
            ">📷 " +
            esc(t("media.image")) +
            " · " +
            images.length +
            "</button>" +
            '<button type="button" data-type="model" aria-pressed="' +
            (cur.type === "model") +
            '"' +
            (models.length ? "" : " disabled") +
            ">🧊 " +
            esc(t("media.model")) +
            " · " +
            models.length +
            "</button></div>"
          : "";
      box.innerHTML =
        '<div class="media-stage corners">' +
        stage +
        "</div>" +
        '<div class="media-bar">' +
        tabs +
        thumbs +
        '<button type="button" class="btn-ghost small" id="mediaAttach">⬆ ' +
        esc(t("media.attach")) +
        "</button></div>";

      $$(".thumb", box).forEach(
        (b) =>
          (b.onclick = () => {
            cur = { type: "image", idx: Number(b.dataset.i) };
            draw();
          }),
      );
      $$(".media-tabs button", box).forEach(
        (b) =>
          (b.onclick = () => {
            if (!b.disabled) {
              cur = { type: b.dataset.type, idx: 0 };
              draw();
            }
          }),
      );
      $("#mediaAttach", box).onclick = () => {
        if (window.EchoesUpload)
          EchoesUpload.open({
            artifactId: a.id,
            tab: cur.type === "model" ? "models" : "images",
          });
      };

      if (cur.type === "model" && models[cur.idx]) {
        const host = $("#mvHost", box);
        loadModelViewer().then((ok) => {
          if (token !== mediaToken || !host.isConnected) return;
          if (!ok) {
            host.innerHTML =
              '<p class="mono tiny muted mv-msg">' +
              esc(t("media.modelfail")) +
              "</p>";
            return;
          }
          host.innerHTML = "";
          const mv = document.createElement("model-viewer");
          mv.setAttribute("src", models[cur.idx].src);
          mv.setAttribute("alt", nameOf(a));
          mv.setAttribute("camera-controls", "");
          mv.setAttribute("auto-rotate", "");
          mv.setAttribute("shadow-intensity", "1");
          mv.setAttribute("exposure", "1.1");
          mv.style.cssText =
            "width:100%;height:100%;background:transparent;--poster-color:transparent";
          host.appendChild(mv);
        });
      }
    }
    draw();

    probeImage(a.id).then((src) => {
      if (!src || token !== mediaToken || images.some((i) => i.src === src))
        return;
      images.push({ src, name: src.split("/").pop() });
      if (cur.type === "none") cur = { type: "image", idx: 0 };
      draw();
    });
    if (location.protocol !== "file:") {
      probeModel(a.id).then((src) => {
        if (!src || token !== mediaToken || models.some((i) => i.src === src))
          return;
        models.push({ src, name: src.split("/").pop() });
        if (cur.type === "none") cur = { type: "model", idx: 0 };
        draw();
      });
    }
  }

  /* ====================================================================== */
  /*  DOSSIER MODAL                                                          */
  /* ====================================================================== */
  function ppRows(a, j) {
    const pp = a.passport || {};
    return [
      ["nssdca", pp.nssdca],
      ["launch", pp.launch],
      ["arrival", pp.arrival],
      ["end", pp.end],
      ["location", pp.location],
      ["coords", pp.coords],
      ["mass", pp.mass],
      ["power", pp.power],
      ["dormancy", pp.dormancy],
      ["discovery", pp.discovery],
    ]
      .filter((r) => r[1])
      .map((r) => {
        const plain = typeof r[1] === "string";
        const mono = r[0] === "nssdca" || r[0] === "coords";
        return (
          '<div class="pp-row"><dt>' +
          esc(t("pp." + r[0] + (j ? ".j" : ""))) +
          '</dt><dd class="' +
          (mono ? "mono" : "") +
          '" dir="' +
          (plain ? "ltr" : "auto") +
          '">' +
          esc(L(r[1])) +
          "</dd></div>"
        );
      })
      .join("");
  }

  function dossierHTML(a) {
    const j = state.mode === "junior";
    const sec = SECTORS[a.sector];
    const pp = a.passport || {};

    const head =
      '<button type="button" class="close" data-close aria-label="' +
      esc(t("dossier.close")) +
      '">✕</button>' +
      '<header class="dos-head"><div class="dos-ico" aria-hidden="true">' +
      a.icon +
      '</div><div class="dos-titles">' +
      '<p class="eyebrow mono">' +
      esc(
        t("dossier.sector", {
          n: pad(sec.n),
          name: t("sector." + a.sector + ".name"),
        }),
      ) +
      " · #" +
      pad(a.num) +
      "</p>" +
      '<h2 id="dosTitle">' +
      esc(nameOf(a)) +
      "</h2>" +
      '<p class="dos-tag">“' +
      esc(L(a.tagline)) +
      "”</p>" +
      '<div class="chips"><span class="chip ' +
      a.statusType +
      '">' +
      esc(L(a.status)) +
      "</span>" +
      (pp.nssdca
        ? '<span class="chip ghost mono" dir="ltr">' +
          esc(L(pp.nssdca)) +
          "</span>"
        : "") +
      '<span class="chip mode">' +
      (j ? "🚀" : "🛰️") +
      " " +
      esc(t("mode." + state.mode)) +
      "</span></div></div></header>";

    const media =
      '<section class="panel media glass-in" id="media" aria-label="media"></section>';
    const passport =
      '<section class="panel"><h3>🪪 ' +
      esc(t("passport.title")) +
      '</h3><dl class="pp">' +
      ppRows(a, j) +
      "</dl></section>";

    let leftExtra = "",
      rightExtra = "";
    if (!j) {
      if (a.specs.length) {
        leftExtra +=
          '<section class="panel"><h3>📊 ' +
          esc(t("specs.title")) +
          '</h3><table class="specs mono"><tbody>' +
          a.specs
            .map(
              (r) =>
                '<tr><th scope="row">' +
                esc(L(r.k)) +
                "</th><td>" +
                esc(L(r.v)) +
                "</td></tr>",
            )
            .join("") +
          "</tbody></table></section>";
      }
      if (a.radio)
        leftExtra +=
          '<section class="panel"><h3>📻 ' +
          esc(t("radio.title")) +
          '</h3><p class="mono radio-line">' +
          esc(L(a.radio)) +
          "</p></section>";
      if (a.tradeoffs.length) {
        rightExtra +=
          '<section class="panel"><h3>⚙️ ' +
          esc(t("tradeoffs.title")) +
          '</h3><ul class="tradeoffs">' +
          a.tradeoffs.map((x) => "<li>" + esc(L(x)) + "</li>").join("") +
          "</ul></section>";
      }
    } else {
      if (a.funFacts.length) {
        rightExtra +=
          '<section class="panel"><h3>🤩 ' +
          esc(t("facts.title")) +
          '</h3><ul class="facts">' +
          a.funFacts.map((x) => "<li>" + esc(L(x)) + "</li>").join("") +
          "</ul></section>";
      }
      if (a.quiz.length)
        rightExtra +=
          '<section class="panel quiz" id="quiz"><h3>🧠 ' +
          esc(t("quiz.title")) +
          '</h3><div id="quizBody"></div></section>';
    }

    const terminal =
      '<section class="terminal" id="term" aria-label="' +
      esc(t("term.title")) +
      '">' +
      '<div class="term-bar mono"><span class="lights" aria-hidden="true"><i></i><i></i><i></i></span><span>' +
      esc(t("term.title")) +
      "</span>" +
      '<span class="sig" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div>' +
      '<div class="term-log mono" id="termLog"></div>' +
      '<canvas id="wave" class="wave" aria-hidden="true"></canvas>' +
      '<div class="term-body" id="termBody"><span class="typed" id="typed"></span><span class="cursor" aria-hidden="true">▌</span></div>' +
      '<div class="term-ctrls"><button type="button" class="btn-primary" id="btnListen">' +
      esc(t("term.listen")) +
      "</button>" +
      '<button type="button" class="btn-ghost" id="btnSkip" disabled>' +
      esc(t("term.skip")) +
      "</button>" +
      '<button type="button" class="btn-ghost" id="btnReplay" disabled>' +
      esc(t("term.replay")) +
      "</button></div></section>";

    const ping =
      '<section class="panel ping" id="ping"><h3>📡 ' +
      esc(t("ping.title")) +
      '</h3><p class="muted small-p">' +
      esc(t("ping.sub")) +
      "</p>" +
      '<div class="chip-row" id="pingDist" role="group" aria-label="' +
      esc(t("ping.dist")) +
      '"></div>' +
      '<div class="ping-stats mono"><div><small>' +
      esc(t("ping.dist")) +
      '</small><b id="pdKm" dir="ltr"></b></div>' +
      "<div><small>" +
      esc(t("ping.oneway")) +
      '</small><b id="pdOne"></b></div><div><small>' +
      esc(t("ping.round")) +
      '</small><b id="pdRound"></b></div></div>' +
      '<canvas id="pingCv" class="ping-cv" aria-hidden="true"></canvas>' +
      '<div class="ping-hud mono"><span id="pingClock"></span><div class="bar"><i id="pingBar"></i></div></div>' +
      '<div class="ping-ctrls"><button type="button" class="btn-primary" id="pingSend">' +
      esc(t("ping.btn")) +
      "</button>" +
      '<div class="seg compact" id="pingSpeed" role="group" aria-label="' +
      esc(t("ping.speed")) +
      '"><button type="button" data-speed="real" aria-pressed="false">' +
      esc(t("ping.real")) +
      '</button><button type="button" data-speed="fast" aria-pressed="false">' +
      esc(t("ping.fast")) +
      "</button></div></div>" +
      '<p class="ping-status mono" id="pingStatus" aria-live="polite"></p>' +
      '<p class="ping-an" id="pingAn"></p><p class="tiny muted mono" id="pingNote"></p>' +
      '<div class="ping-reply" id="pingReply" hidden></div></section>';

    return (
      head +
      '<div class="dos-grid"><div class="col">' +
      media +
      passport +
      leftExtra +
      '</div><div class="col">' +
      terminal +
      ping +
      rightExtra +
      "</div></div>"
    );
  }

  function teardownDossier() {
    txClear();
    Voice.stop();
    Wave.stop();
    Ping.cancel();
    mediaToken++;
  }

  function renderDossier() {
    const a = byId(state.openId);
    if (!a) return;
    const overlay = $("#dossier"),
      box = $("#dossierBox");
    const scroll = overlay.scrollTop;
    teardownDossier();
    box.innerHTML = dossierHTML(a);
    overlay.scrollTop = scroll;

    $("[data-close]", box).onclick = closeDossier;
    Wave.start($("#wave"));
    startTransmission(a);
    $("#btnListen").onclick = () => toggleListen(a);
    $("#btnSkip").onclick = skipTyping;
    $("#btnReplay").onclick = () => {
      Voice.stop();
      setSpeaking(false);
      startTransmission(a);
    };
    Ping.init(a);
    if (state.mode === "junior" && a.quiz.length) runQuiz(a);
    renderMedia(a);
  }

  function openDossier(id) {
    const a = byId(id);
    if (!a) return;
    Sound.unlock();
    state.lastFocus = document.activeElement;
    state.openId = id;
    renderDossier();
    $("#dossier").hidden = false;
    document.body.classList.add("modal-open");
    $("#dossier").scrollTop = 0;
    const c = $("#dossierBox [data-close]");
    if (c) c.focus({ preventScroll: true });
    try {
      history.replaceState(null, "", "#a=" + encodeURIComponent(id));
    } catch (e) {
      /* ignore */
    }
  }

  function closeDossier() {
    teardownDossier();
    $("#dossier").hidden = true;
    $("#dossierBox").innerHTML = "";
    state.openId = null;
    document.body.classList.remove("modal-open");
    try {
      history.replaceState(null, "", location.pathname + location.search);
    } catch (e) {
      /* ignore */
    }
    if (state.lastFocus && state.lastFocus.focus) {
      try {
        state.lastFocus.focus({ preventScroll: true });
      } catch (e) {
        /* ignore */
      }
    }
  }

  /* ====================================================================== */
  /*  CONTROLS                                                               */
  /* ====================================================================== */
  function setMode(m, silent) {
    state.mode = m;
    html.dataset.mode = m;
    $$("#modeSeg button").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.mode === m)),
    );
    Store.prefs.set({ mode: m });
    $("#heroLede").textContent = t("hero.lede." + m);
    if (!silent) toast(t("mode.toast." + m), "", 4200);
    if (state.openId) renderDossier();
  }

  function setLang(l) {
    state.lang = l;
    I18N.setLang(l);
    $$("#langSeg button").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === l)),
    );
    Store.prefs.set({ lang: l });
    updateSoundBtn();
    renderAll();
    if (state.openId) renderDossier();
    if (window.EchoesUpload && EchoesUpload.refresh) EchoesUpload.refresh();
  }

  function updateSoundBtn() {
    const b = $("#soundBtn"),
      on = Sound.enabled;
    b.textContent = on ? "🔊" : "🔇";
    b.setAttribute("aria-pressed", String(on));
    b.title = t(on ? "sound.on" : "sound.off");
    b.setAttribute("aria-label", b.title);
  }

  function bindControls() {
    $("#modeSeg").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-mode]");
      if (b) setMode(b.dataset.mode);
    });
    $("#langSeg").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-lang]");
      if (b) setLang(b.dataset.lang);
    });
    $("#viewSeg").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-view]");
      if (!b) return;
      state.view = b.dataset.view;
      MapView.setView(state.view);
      renderSectorHeader();
    });
    $("#soundBtn").addEventListener("click", () => {
      Sound.setEnabled(!Sound.enabled);
      Store.prefs.set({ sound: Sound.enabled });
      updateSoundBtn();
      if (Sound.enabled) Sound.beep(state.sector);
      else setSpeaking(false);
    });
    $("#uploadBtn").addEventListener("click", () => {
      if (window.EchoesUpload) EchoesUpload.open();
    });
    $("#sectorTabs").addEventListener("click", (e) => {
      const b = e.target.closest("[data-sector]");
      if (!b || b.dataset.sector === state.sector) return;
      Sound.beep(b.dataset.sector);
      setSector(b.dataset.sector);
    });
    $("#scanBtn").addEventListener("click", () => {
      Sound.unlock();
      Sound.static(0.7, 0.035);
      $("#sectors").scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      const p = $("#mapPanel");
      p.classList.remove("flash");
      void p.offsetWidth;
      p.classList.add("flash");
    });
    $("#randomBtn").addEventListener("click", () => {
      Sound.unlock();
      const a = ARTIFACTS[Math.floor(Math.random() * ARTIFACTS.length)];
      if (!a) return;
      if (a.sector !== state.sector) setSector(a.sector);
      openDossier(a.id);
    });

    const grid = $("#cardGrid");
    grid.addEventListener("click", (e) => {
      const c = e.target.closest(".card");
      if (c) openDossier(c.dataset.id);
    });
    grid.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const c = e.target.closest(".card");
      if (c) {
        e.preventDefault();
        openDossier(c.dataset.id);
      }
    });
    const hoverCard = (e, on) => {
      const c = e.target.closest(".card");
      if (!c || (e.relatedTarget && c.contains(e.relatedTarget))) return;
      MapView.highlight(on ? c.dataset.id : null);
      if (on) {
        const pins = bySector(state.sector).find((a) => a.id === c.dataset.id);
        if (pins) renderPreview(mapPinFor(pins));
      }
    };
    grid.addEventListener("mouseover", (e) => hoverCard(e, true));
    grid.addEventListener("mouseout", (e) => hoverCard(e, false));
    grid.addEventListener("focusin", (e) => {
      const c = e.target.closest(".card");
      if (c) MapView.highlight(c.dataset.id);
    });
    grid.addEventListener("focusout", () => MapView.highlight(null));

    $("#preview").addEventListener("click", (e) => {
      const b = e.target.closest("[data-open]");
      if (b) openDossier(b.dataset.open);
    });
    $("#dossier").addEventListener("mousedown", (e) => {
      if (e.target.id === "dossier") closeDossier();
    });

    document.addEventListener("keydown", (e) => {
      const up = $("#upload");
      if (e.key === "Escape") {
        if (!up.hidden) {
          if (window.EchoesUpload) EchoesUpload.close();
        } else if (!$("#dossier").hidden) closeDossier();
        return;
      }
      if (!up.hidden) trapFocus(up, e);
      else if (!$("#dossier").hidden) trapFocus($("#dossier"), e);
    });
    document.addEventListener("pointerdown", () => Sound.unlock(), {
      once: true,
    });
  }

  /** Build a minimal "pin-like" object for card hover previews. */
  function mapPinFor(a) {
    const s = a.sites[0];
    if (!s) return { artId: a.id, kind: "sys", au: 0, label: null };
    if (typeof s.au === "number")
      return {
        artId: a.id,
        kind: "sys",
        au: s.au,
        angle: s.angle,
        label: s.label,
      };
    return {
      artId: a.id,
      kind: "sphere",
      lat: s.lat,
      lon: s.lon,
      label: s.label,
    };
  }

  /* ====================================================================== */
  /*  BOOT                                                                   */
  /* ====================================================================== */
  function boot() {
    I18N.setLang(state.lang);
    html.dataset.mode = state.mode;
    Sound.setEnabled(prefs.sound !== false);
    rebuild();

    $$("#modeSeg button").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.mode === state.mode)),
    );
    $$("#langSeg button").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)),
    );
    updateSoundBtn();

    MapView.init({
      mapCanvas: $("#mapCanvas"),
      radarCanvas: $("#radarCanvas"),
      getName: (id) => {
        const a = byId(id);
        return a ? nameOf(a) : id;
      },
      onHover: (pin) => {
        if (!pin) return;
        Sound.beep(pin.sector);
        renderPreview(pin);
      },
      onSelect: (id) => openDossier(id),
    });

    bindControls();
    setSector("moon");
    renderAll();

    Store.media
      .init()
      .then(() => {
        if (state.openId) renderMedia(byId(state.openId));
      })
      .catch(() => {
        /* media is optional */
      });

    const m = /#a=([\w-]+)/.exec(location.hash);
    if (m && byId(decodeURIComponent(m[1]))) {
      const a = byId(decodeURIComponent(m[1]));
      setSector(a.sector);
      openDossier(a.id);
    }
  }

  window.EchoesApp = {
    t,
    L,
    esc,
    toast,
    trapFocus,
    getArtifacts: () => ARTIFACTS.slice(),
    getById: byId,
    normalize,
    state,
    refreshData,
    refreshMedia() {
      if (state.openId) renderMedia(byId(state.openId));
    },
    openDossier,
  };

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
