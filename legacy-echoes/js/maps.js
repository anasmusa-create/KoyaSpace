/* ECHOES OF SPACE — Holographic planetary maps & Ghost Signal Radar.
 *  - Procedurally generated Moon / Mars textures (no image downloads, works offline)
 *  - 2D equirectangular map, draggable 3D globe, log-scale Solar System map (deep space)
 *  - Circular radar scanner with sweeping beam and blinking "ghost signal" pins
 * Public API: window.MapView */
(function () {
  const D2R = Math.PI / 180,
    R2D = 180 / Math.PI,
    TAU = Math.PI * 2;
  const ACCENT = {
    moon: [0, 240, 255],
    mars: [255, 87, 34],
    deep: [168, 85, 247],
  };
  const ACCENT2 = {
    moon: [201, 214, 223],
    mars: [255, 179, 0],
    deep: [245, 158, 11],
  };
  const rgba = (c, a) =>
    "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")";
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (a, b, x) => {
    const t = clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
  };
  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------ noise ------------------------------ */
  function hash3(x, y, z) {
    let h =
      Math.imul(x, 374761393) ^
      Math.imul(y, 668265263) ^
      Math.imul(z, 2147483647);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967295;
  }
  function vnoise(x, y, z) {
    const xi = Math.floor(x),
      yi = Math.floor(y),
      zi = Math.floor(z);
    const xf = x - xi,
      yf = y - yi,
      zf = z - zi;
    const u = xf * xf * (3 - 2 * xf),
      v = yf * yf * (3 - 2 * yf),
      w = zf * zf * (3 - 2 * zf);
    const a = hash3(xi, yi, zi),
      b = hash3(xi + 1, yi, zi),
      c = hash3(xi, yi + 1, zi),
      d = hash3(xi + 1, yi + 1, zi);
    const e = hash3(xi, yi, zi + 1),
      f = hash3(xi + 1, yi, zi + 1),
      g = hash3(xi, yi + 1, zi + 1),
      h = hash3(xi + 1, yi + 1, zi + 1);
    return lerp(
      lerp(lerp(a, b, u), lerp(c, d, u), v),
      lerp(lerp(e, f, u), lerp(g, h, u), v),
      w,
    );
  }
  function fbm(x, y, z, oct) {
    let a = 0.5,
      f = 1,
      s = 0;
    for (let i = 0; i < oct; i++) {
      s += a * vnoise(x * f, y * f, z * f);
      f *= 2.03;
      a *= 0.5;
    }
    return s;
  }
  function seeded(seed) {
    let s = seed >>> 0;
    return () => {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  /* ------------------------- planetary features ------------------------ */
  // k: 1 = dark region, -1 = bright region. label shown on the 2D map.
  const FEATURES = {
    moon: [
      { n: "MARE IMBRIUM", lat: 34, lon: -16, r: 15, k: 1 },
      { n: "MARE SERENITATIS", lat: 28, lon: 18, r: 10, k: 1 },
      { n: "MARE TRANQUILLITATIS", lat: 8, lon: 31, r: 11, k: 1 },
      { n: "MARE CRISIUM", lat: 17, lon: 59, r: 7, k: 1 },
      { n: "MARE FECUNDITATIS", lat: -4, lon: 52, r: 9, k: 1 },
      { n: "", lat: -15, lon: 34, r: 5.5, k: 1 },
      { n: "MARE NUBIUM", lat: -21, lon: -15, r: 10, k: 1 },
      { n: "MARE HUMORUM", lat: -24, lon: -39, r: 6, k: 1 },
      { n: "OCEANUS PROCELLARUM", lat: 18, lon: -52, r: 22, k: 1 },
      { n: "MARE FRIGORIS", lat: 58, lon: -2, r: 7, k: 1 },
      { n: "", lat: 13, lon: 3, r: 5, k: 1 },
      { n: "", lat: 7, lon: -20, r: 8, k: 1 },
      { n: "TYCHO", lat: -43.3, lon: -11.4, r: 3.2, k: -1 },
      { n: "COPERNICUS", lat: 9.6, lon: -20, r: 2.6, k: -1 },
      { n: "ARISTARCHUS", lat: 23.7, lon: -47.4, r: 2.2, k: -1 },
    ],
    mars: [
      { n: "SYRTIS MAJOR", lat: 9, lon: 70, r: 10, k: 1 },
      { n: "ACIDALIA PLANITIA", lat: 47, lon: -22, r: 16, k: 1 },
      { n: "", lat: -2, lon: 0, r: 7, k: 1 },
      { n: "MARE SIRENUM", lat: -35, lon: -166, r: 11, k: 1 },
      { n: "MARE CIMMERIUM", lat: -25, lon: 145, r: 12, k: 1 },
      { n: "", lat: -26, lon: -90, r: 6, k: 1 },
      { n: "", lat: -10, lon: -25, r: 8, k: 1 },
      { n: "UTOPIA PLANITIA", lat: 45, lon: 112, r: 14, k: 1 },
      { n: "HELLAS", lat: -42, lon: 70, r: 12, k: -1 },
      { n: "ARGYRE", lat: -50, lon: -43, r: 7, k: -1 },
      { n: "ARABIA TERRA", lat: 22, lon: 5, r: 14, k: -1 },
      { n: "THARSIS", lat: 3, lon: -105, r: 16, k: -1 },
      { n: "OLYMPUS MONS", lat: 18, lon: -134, r: 5, k: -1 },
      { n: "ELYSIUM", lat: 25, lon: 147, r: 9, k: -1 },
    ],
  };

  /* ---------------------------- textures ------------------------------ */
  const textures = {};
  const building = {};

  function buildTexture(body) {
    const W = 1024,
      H = 512;
    const cv = document.createElement("canvas");
    cv.width = W;
    cv.height = H;
    const c = cv.getContext("2d");
    const img = c.createImageData(W, H);
    const d = img.data;
    const feats = FEATURES[body].map((f) => {
      const la = f.lat * D2R,
        lo = f.lon * D2R;
      return {
        v: [
          Math.cos(la) * Math.cos(lo),
          Math.sin(la),
          Math.cos(la) * Math.sin(lo),
        ],
        r: f.r,
        cr: Math.cos(Math.min(f.r * 1.6, 179) * D2R),
        k: f.k,
      };
    });
    const isMoon = body === "moon";
    const seed = isMoon ? 3.7 : 11.3;

    for (let y = 0; y < H; y++) {
      const lat = (90 - ((y + 0.5) / H) * 180) * D2R;
      const cl = Math.cos(lat),
        sl = Math.sin(lat);
      for (let x = 0; x < W; x++) {
        const lon = (((x + 0.5) / W) * 360 - 180) * D2R;
        const px = cl * Math.cos(lon),
          py = sl,
          pz = cl * Math.sin(lon);
        const n = fbm(px * 2.4 + seed, py * 2.4 + seed, pz * 2.4 + seed, 5);
        const dt = fbm(px * 10 + seed, py * 10, pz * 10, 3);
        let dark = 0,
          bright = 0;
        for (let i = 0; i < feats.length; i++) {
          const f = feats[i];
          const dot = px * f.v[0] + py * f.v[1] + pz * f.v[2];
          if (dot > f.cr) {
            const ang = Math.acos(Math.min(1, dot)) * R2D;
            const e = (ang / f.r) * (0.8 + 0.5 * dt);
            const m = 1 - smooth(0.55, 1.0, e);
            if (f.k > 0) dark = Math.max(dark, m);
            else bright = Math.max(bright, m);
          }
        }
        let r, g, b;
        if (isMoon) {
          let v = 108 + 90 * n + 46 * (dt - 0.35);
          v *= 1 - 0.46 * dark;
          v += 52 * bright;
          r = v * (1 - 0.07 * dark);
          g = v * (1 - 0.02 * dark);
          b = v * (1 + 0.04 * dark);
        } else {
          const t = clamp((n - 0.2) * 1.7, 0, 1);
          r = lerp(122, 202, t);
          g = lerp(52, 108, t);
          b = lerp(28, 62, t);
          const dv = (dt - 0.35) * 55;
          r += dv;
          g += dv * 0.7;
          b += dv * 0.5;
          r = lerp(r, 70, dark * 0.62);
          g = lerp(g, 44, dark * 0.62);
          b = lerp(b, 40, dark * 0.62);
          r = lerp(r, 232, bright * 0.5);
          g = lerp(g, 176, bright * 0.5);
          b = lerp(b, 124, bright * 0.5);
          // polar ice caps with noisy edges
          const capN = lat * R2D > 82 - 5 * n,
            capS = -lat * R2D > 76 - 6 * n;
          if (capN || capS) {
            r = lerp(r, 240, 0.9);
            g = lerp(g, 238, 0.9);
            b = lerp(b, 244, 0.9);
          }
        }
        const o = (y * W + x) * 4;
        d[o] = clamp(r, 0, 255);
        d[o + 1] = clamp(g, 0, 255);
        d[o + 2] = clamp(b, 0, 255);
        d[o + 3] = 255;
      }
    }
    c.putImageData(img, 0, 0);

    // craters
    const rnd = seeded(isMoon ? 77 : 99);
    const nC = isMoon ? 520 : 240;
    for (let i = 0; i < nC; i++) {
      const lat = Math.asin(rnd() * 2 - 1) * R2D;
      const lon = rnd() * 360 - 180;
      if (Math.abs(lat) > 78) continue;
      const cx = ((lon + 180) / 360) * W,
        cy = ((90 - lat) / 180) * H;
      const rr = Math.pow(rnd(), 2.6) * (isMoon ? 9 : 7) + 0.7;
      const sx = Math.min(4, 1 / Math.max(0.25, Math.cos(lat * D2R)));
      c.save();
      c.translate(cx, cy);
      c.scale(sx, 1);
      c.fillStyle = "rgba(0,0,0," + (isMoon ? 0.16 : 0.12) + ")";
      c.beginPath();
      c.arc(0, 0, rr, 0, TAU);
      c.fill();
      c.strokeStyle = "rgba(255,255,255," + (isMoon ? 0.18 : 0.12) + ")";
      c.lineWidth = Math.max(0.6, rr * 0.18);
      c.beginPath();
      c.arc(-rr * 0.12, -rr * 0.12, rr, Math.PI * 0.9, Math.PI * 1.9);
      c.stroke();
      c.restore();
    }

    if (!isMoon) {
      // Valles Marineris + Olympus Mons relief
      const X = (lon) => ((lon + 180) / 360) * W,
        Y = (lat) => ((90 - lat) / 180) * H;
      c.save();
      c.lineCap = "round";
      c.strokeStyle = "rgba(52,22,14,0.6)";
      c.lineWidth = 5;
      c.shadowColor = "rgba(40,15,8,0.8)";
      c.shadowBlur = 5;
      c.beginPath();
      c.moveTo(X(-95), Y(-6));
      c.quadraticCurveTo(X(-75), Y(-12), X(-52), Y(-12));
      c.stroke();
      c.restore();
      [
        [18, -134, 16],
        [1, -113, 10],
        [-9, -120, 10],
        [11, -104, 9],
      ].forEach((v) => {
        const g = c.createRadialGradient(
          X(v[1]),
          Y(v[0]),
          0,
          X(v[1]),
          Y(v[0]),
          v[2],
        );
        g.addColorStop(0, "rgba(240,190,150,0.55)");
        g.addColorStop(1, "rgba(240,190,150,0)");
        c.fillStyle = g;
        c.fillRect(X(v[1]) - v[2], Y(v[0]) - v[2], v[2] * 2, v[2] * 2);
      });
    }

    const out = { canvas: cv, data: c.getImageData(0, 0, W, H).data, W, H };
    textures[body] = out;
    return out;
  }

  function ensureTexture(body, cb) {
    if (textures[body]) return textures[body];
    if (!building[body] && FEATURES[body]) {
      building[body] = true;
      setTimeout(() => {
        buildTexture(body);
        building[body] = false;
        if (cb) cb();
      }, 30);
    }
    return null;
  }

  /* ------------------------------ globe ------------------------------- */
  const LIGHT = (() => {
    const l = [-0.45, 0.35, 0.82];
    const m = Math.hypot(l[0], l[1], l[2]);
    return l.map((v) => v / m);
  })();

  class Globe {
    constructor(n) {
      this.n = n;
      this.cv = document.createElement("canvas");
      this.cv.width = this.cv.height = n;
      this.c = this.cv.getContext("2d");
      this.img = this.c.createImageData(n, n);
      const N = n * n;
      this.vx = new Float32Array(N);
      this.vy = new Float32Array(N);
      this.vz = new Float32Array(N);
      this.light = new Float32Array(N);
      this.mask = new Uint8Array(N);
      for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
          const x = ((i + 0.5) / n) * 2 - 1,
            y = 1 - ((j + 0.5) / n) * 2,
            d2 = x * x + y * y,
            p = j * n + i;
          if (d2 <= 1) {
            const z = Math.sqrt(1 - d2);
            this.mask[p] = 1;
            this.vx[p] = x;
            this.vy[p] = y;
            this.vz[p] = z;
            this.light[p] = clamp(
              x * LIGHT[0] + y * LIGHT[1] + z * LIGHT[2],
              0,
              1,
            );
          }
        }
      }
    }
    render(tex, lat0, lon0, accent) {
      const n = this.n,
        d = this.img.data,
        td = tex.data,
        TW = tex.W,
        TH = tex.H;
      const sLo = Math.sin(lon0),
        cLo = Math.cos(lon0),
        sLa = Math.sin(lat0),
        cLa = Math.cos(lat0);
      const e0 = -sLo,
        e2 = cLo;
      const u0 = -sLa * cLo,
        u1 = cLa,
        u2 = -sLa * sLo;
      const c0 = cLa * cLo,
        c1 = sLa,
        c2 = cLa * sLo;
      for (let p = 0; p < n * n; p++) {
        const o = p * 4;
        if (!this.mask[p]) {
          d[o + 3] = 0;
          continue;
        }
        const x = this.vx[p],
          y = this.vy[p],
          z = this.vz[p];
        const wx = x * e0 + y * u0 + z * c0,
          wy = y * u1 + z * c1,
          wz = x * e2 + y * u2 + z * c2;
        const lat = Math.asin(clamp(wy, -1, 1)),
          lon = Math.atan2(wz, wx);
        let tu = (((lon + Math.PI) / TAU) * TW) | 0,
          tv = (((Math.PI / 2 - lat) / Math.PI) * TH) | 0;
        if (tu >= TW) tu = TW - 1;
        if (tv >= TH) tv = TH - 1;
        if (tu < 0) tu = 0;
        if (tv < 0) tv = 0;
        const ti = (tv * TW + tu) * 4;
        const l = this.light[p] * 0.92 + 0.1;
        const rim = Math.pow(1 - z, 3) * 70;
        d[o] = clamp(td[ti] * l + ((accent[0] * rim) / 255) * 1.2, 0, 255);
        d[o + 1] = clamp(
          td[ti + 1] * l + ((accent[1] * rim) / 255) * 1.2,
          0,
          255,
        );
        d[o + 2] = clamp(
          td[ti + 2] * l + ((accent[2] * rim) / 255) * 1.2,
          0,
          255,
        );
        d[o + 3] = 255;
      }
      this.c.putImageData(this.img, 0, 0);
      return this.cv;
    }
  }

  /* ------------------------------ state ------------------------------- */
  const AU_MAX = 100;
  const auLog = (au) =>
    clamp(Math.log(1 + au * 2) / Math.log(1 + 2 * AU_MAX), 0, 0.97);
  const WIN = {
    moon: {
      lonMin: -80,
      lonMax: 80,
      latMin: -50,
      latMax: 50,
      ratio: 1.6,
      grid: 20,
    },
    mars: {
      lonMin: -180,
      lonMax: 180,
      latMin: -90,
      latMax: 90,
      ratio: 2,
      grid: 30,
    },
    deep: { ratio: 1.7 },
  };
  const RADAR = { moon: { max: 60, step: 15 }, mars: { max: 180, step: 45 } };

  const S = {
    ready: false,
    visible: true,
    sector: "moon",
    view: "flat",
    pins: [],
    artifacts: [],
    mapCv: null,
    radarCv: null,
    mc: null,
    rc: null,
    mW: 0,
    mH: 0,
    rW: 0,
    rH: 0,
    dpr: 1,
    hoverArt: null,
    hits: { map: [], radar: [] },
    down: null,
    globe: null,
    g: { lat: 0.1, lon: 0, auto: true, target: null, idleTimer: null },
    onHover: null,
    onSelect: null,
    getName: null,
    scan: null,
    belt: null,
    lastT: 0,
  };

  function accent() {
    return ACCENT[S.sector] || ACCENT.moon;
  }

  function buildPins() {
    const pins = [];
    S.artifacts.forEach((a) => {
      (a.sites || []).forEach((s, idx) => {
        const base = {
          key: a.id + ":" + idx,
          artId: a.id,
          sector: a.sector,
          idx,
          primary: idx === 0,
          label: s.label,
          phase: (pins.length * 0.173) % 1,
        };
        if (
          a.sector === "deep" ||
          (typeof s.au === "number" && typeof s.angle === "number")
        ) {
          if (typeof s.au !== "number") return;
          pins.push(
            Object.assign(base, { kind: "sys", au: s.au, angle: s.angle || 0 }),
          );
        } else if (typeof s.lat === "number" && typeof s.lon === "number") {
          const la = s.lat * D2R,
            lo = s.lon * D2R;
          const dist =
            Math.acos(clamp(Math.cos(la) * Math.cos(lo), -1, 1)) * R2D;
          const bearing = Math.atan2(Math.sin(lo) * Math.cos(la), Math.sin(la));
          pins.push(
            Object.assign(base, {
              kind: "sphere",
              lat: s.lat,
              lon: s.lon,
              dist,
              bearing,
              vec: [
                Math.cos(la) * Math.cos(lo),
                Math.sin(la),
                Math.cos(la) * Math.sin(lo),
              ],
            }),
          );
        }
      });
    });
    S.pins = pins;
  }

  function centroid() {
    let x = 0,
      y = 0,
      z = 0;
    S.pins
      .filter((p) => p.kind === "sphere" && p.primary)
      .forEach((p) => {
        x += p.vec[0];
        y += p.vec[1];
        z += p.vec[2];
      });
    const m = Math.hypot(x, y, z);
    if (m < 1e-6) return { lat: 0.1, lon: 0 };
    return { lat: Math.asin(y / m) * 0.7, lon: Math.atan2(z, x) };
  }

  /* ----------------------------- projections --------------------------- */
  function flatXY(p, w, h) {
    const win = WIN[S.sector];
    return [
      ((p.lon - win.lonMin) / (win.lonMax - win.lonMin)) * w,
      ((win.latMax - p.lat) / (win.latMax - win.latMin)) * h,
    ];
  }
  function sysXY(au, angle, w, h) {
    const r = auLog(au),
      a = angle * D2R;
    return [
      w / 2 + Math.cos(a) * r * (w / 2 - 20),
      h / 2 - Math.sin(a) * r * (h / 2 - 16),
    ];
  }
  function globeXY(p, cx, cy, R) {
    const g = S.g;
    const sLo = Math.sin(g.lon),
      cLo = Math.cos(g.lon),
      sLa = Math.sin(g.lat),
      cLa = Math.cos(g.lat);
    const e = [-sLo, 0, cLo],
      u = [-sLa * cLo, cLa, -sLa * sLo],
      c = [cLa * cLo, sLa, cLa * sLo];
    const v = p.vec || [
      Math.cos(p.lat * D2R) * Math.cos(p.lon * D2R),
      Math.sin(p.lat * D2R),
      Math.cos(p.lat * D2R) * Math.sin(p.lon * D2R),
    ];
    const x = v[0] * e[0] + v[1] * e[1] + v[2] * e[2];
    const y = v[0] * u[0] + v[1] * u[1] + v[2] * u[2];
    const z = v[0] * c[0] + v[1] * c[1] + v[2] * c[2];
    return { x: cx + x * R, y: cy - y * R, z };
  }
  function radarXY(p, R) {
    if (p.kind === "sys") {
      const r = auLog(p.au) * R,
        a = p.angle * D2R;
      return [Math.cos(a) * r, -Math.sin(a) * r];
    }
    const cfg = RADAR[S.sector] || RADAR.moon;
    const r = Math.min(p.dist / cfg.max, 1) * R;
    return [Math.sin(p.bearing) * r, -Math.cos(p.bearing) * r];
  }

  /* ------------------------------ drawing ------------------------------ */
  function shortName(id) {
    const n = (S.getName ? S.getName(id) : id) || id;
    let s = n.split(" (")[0];
    if (s.length > 30) s = s.slice(0, 29) + "…";
    return s;
  }

  function drawPin(c, x, y, pin, t, hovered, dim) {
    const acc = accent(),
      acc2 = ACCENT2[S.sector] || acc;
    const k = pin.primary ? 1 : 0.72;
    const ph = (t / 1600 + pin.phase) % 1;
    const flicker = 0.8 + 0.2 * Math.sin(t / 90 + pin.phase * 40);
    const a = (dim ? 0.35 : 1) * flicker;
    c.save();
    // pulse rings
    for (let i = 0; i < 2; i++) {
      const q = (ph + i * 0.5) % 1;
      c.strokeStyle = rgba(acc, (1 - q) * 0.75 * a);
      c.lineWidth = 1.4;
      c.beginPath();
      c.arc(x, y, (4 + q * 17) * k * (hovered ? 1.4 : 1), 0, TAU);
      c.stroke();
    }
    // glow
    const g = c.createRadialGradient(x, y, 0, x, y, 14 * k);
    g.addColorStop(0, rgba(hovered ? [255, 255, 255] : acc2, 0.85 * a));
    g.addColorStop(1, rgba(acc, 0));
    c.fillStyle = g;
    c.beginPath();
    c.arc(x, y, 14 * k, 0, TAU);
    c.fill();
    // core
    c.fillStyle = hovered ? "#ffffff" : rgba(acc2, 1);
    c.beginPath();
    c.arc(x, y, (hovered ? 4.6 : 3.4) * k, 0, TAU);
    c.fill();
    c.restore();
  }

  function drawLabel(c, x, y, text, w, h) {
    c.save();
    c.font = '600 11px "JetBrains Mono", ui-monospace, monospace';
    c.direction = document.documentElement.dir === "rtl" ? "rtl" : "ltr";
    c.textAlign = "left";
    c.textBaseline = "middle";
    const tw = c.measureText(text).width + 16;
    let bx = x + 14,
      by = y - 26;
    if (bx + tw > w - 4) bx = x - 14 - tw;
    if (by < 4) by = y + 12;
    if (by + 22 > h - 4) by = h - 26;
    const acc = accent();
    c.fillStyle = "rgba(5,9,16,0.88)";
    c.strokeStyle = rgba(acc, 0.8);
    c.lineWidth = 1;
    c.beginPath();
    if (c.roundRect) c.roundRect(bx, by, tw, 22, 6);
    else c.rect(bx, by, tw, 22);
    c.fill();
    c.stroke();
    c.fillStyle = "#fff";
    c.fillText(text, bx + 8, by + 11);
    c.restore();
  }

  let scanPattern = null;
  function getScan(c) {
    if (scanPattern) return scanPattern;
    const p = document.createElement("canvas");
    p.width = 4;
    p.height = 4;
    const pc = p.getContext("2d");
    pc.fillStyle = "rgba(0,0,0,0.5)";
    pc.fillRect(0, 0, 4, 1);
    scanPattern = c.createPattern(p, "repeat");
    return scanPattern;
  }

  function hologramOverlay(c, w, h, acc) {
    c.save();
    c.globalCompositeOperation = "overlay";
    c.fillStyle = rgba(acc, 0.34);
    c.fillRect(0, 0, w, h);
    c.globalCompositeOperation = "source-over";
    c.fillStyle = "rgba(4,8,16,0.28)";
    c.fillRect(0, 0, w, h);
    c.globalAlpha = 0.16;
    c.fillStyle = getScan(c);
    c.fillRect(0, 0, w, h);
    c.globalAlpha = 1;
    const v = c.createRadialGradient(
      w / 2,
      h / 2,
      Math.min(w, h) * 0.35,
      w / 2,
      h / 2,
      Math.max(w, h) * 0.7,
    );
    v.addColorStop(0, "rgba(0,0,0,0)");
    v.addColorStop(1, "rgba(0,0,0,0.55)");
    c.fillStyle = v;
    c.fillRect(0, 0, w, h);
    c.restore();
  }

  function drawCalibrating(c, w, h, t) {
    c.fillStyle = "#070b14";
    c.fillRect(0, 0, w, h);
    c.fillStyle = rgba(accent(), 0.8);
    c.font = '12px "JetBrains Mono", monospace';
    c.textAlign = "center";
    c.direction = "ltr";
    c.fillText(
      "CALIBRATING HOLOGRAM" + ".".repeat(1 + (Math.floor(t / 300) % 3)),
      w / 2,
      h / 2,
    );
  }

  function drawFlat(t) {
    const c = S.mc,
      w = S.mW,
      h = S.mH,
      acc = accent();
    const win = WIN[S.sector];
    const tex = ensureTexture(S.sector);
    S.hits.map = [];
    if (!tex) return drawCalibrating(c, w, h, t);
    const sx = ((win.lonMin + 180) / 360) * tex.W,
      sw = ((win.lonMax - win.lonMin) / 360) * tex.W;
    const sy = ((90 - win.latMax) / 180) * tex.H,
      sh = ((win.latMax - win.latMin) / 180) * tex.H;
    c.imageSmoothingEnabled = true;
    c.drawImage(tex.canvas, sx, sy, sw, sh, 0, 0, w, h);
    hologramOverlay(c, w, h, acc);

    // graticule
    c.save();
    c.strokeStyle = rgba(acc, 0.22);
    c.lineWidth = 1;
    c.fillStyle = rgba(acc, 0.75);
    c.font = '10px "JetBrains Mono", monospace';
    c.direction = "ltr";
    for (
      let lon = Math.ceil(win.lonMin / win.grid) * win.grid;
      lon <= win.lonMax;
      lon += win.grid
    ) {
      const x = ((lon - win.lonMin) / (win.lonMax - win.lonMin)) * w;
      c.beginPath();
      c.moveTo(x, 0);
      c.lineTo(x, h);
      c.stroke();
      c.textAlign = "left";
      c.fillText(
        Math.abs(lon) + "°" + (lon < 0 ? "W" : lon > 0 ? "E" : ""),
        x + 3,
        h - 5,
      );
    }
    for (
      let lat = Math.ceil(win.latMin / win.grid) * win.grid;
      lat <= win.latMax;
      lat += win.grid
    ) {
      const y = ((win.latMax - lat) / (win.latMax - win.latMin)) * h;
      c.beginPath();
      c.moveTo(0, y);
      c.lineTo(w, y);
      c.stroke();
      c.textAlign = "left";
      c.fillText(
        Math.abs(lat) + "°" + (lat < 0 ? "S" : lat > 0 ? "N" : ""),
        4,
        y - 3,
      );
    }
    // feature labels
    c.fillStyle = "rgba(255,255,255,0.5)";
    c.font = '9px "JetBrains Mono", monospace';
    c.textAlign = "center";
    FEATURES[S.sector].forEach((f) => {
      if (!f.n) return;
      const x = ((f.lon - win.lonMin) / (win.lonMax - win.lonMin)) * w,
        y = ((win.latMax - f.lat) / (win.latMax - win.latMin)) * h;
      if (x < 30 || x > w - 30 || y < 12 || y > h - 12) return;
      c.fillText(f.n, x, y);
    });
    c.restore();

    // pins (dim others when one artifact is hovered)
    const order = S.pins
      .slice()
      .sort((a, b) => (a.artId === S.hoverArt) - (b.artId === S.hoverArt));
    let hoverLabel = null;
    order.forEach((p) => {
      if (p.kind !== "sphere") return;
      const xy = flatXY(p, w, h);
      if (xy[0] < -10 || xy[0] > w + 10 || xy[1] < -10 || xy[1] > h + 10)
        return;
      const hov = p.artId === S.hoverArt;
      drawPin(c, xy[0], xy[1], p, t, hov, S.hoverArt && !hov);
      S.hits.map.push({ x: xy[0], y: xy[1], pin: p });
      if (hov && p.primary) hoverLabel = [xy[0], xy[1], shortName(p.artId)];
    });
    if (hoverLabel)
      drawLabel(c, hoverLabel[0], hoverLabel[1], hoverLabel[2], w, h);
  }

  function drawGlobe(t, dt) {
    const c = S.mc,
      w = S.mW,
      h = S.mH,
      acc = accent(),
      g = S.g;
    const tex = ensureTexture(S.sector);
    S.hits.map = [];
    c.fillStyle = "rgba(4,8,16,0.55)";
    c.fillRect(0, 0, w, h);
    if (!tex) return drawCalibrating(c, w, h, t);

    // motion
    if (g.target) {
      g.lat += (g.target.lat - g.lat) * Math.min(1, dt * 5);
      let dl = g.target.lon - g.lon;
      dl = Math.atan2(Math.sin(dl), Math.cos(dl));
      g.lon += dl * Math.min(1, dt * 5);
    } else if (g.auto && !S.hoverArt && !reduceMotion) {
      g.lon += dt * 0.16;
    }
    const cx = w / 2,
      cy = h / 2,
      R = Math.min(h * 0.46, w * 0.46);
    if (!S.globe) S.globe = new Globe(340);

    // outer glow
    const glow = c.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.3);
    glow.addColorStop(0, rgba(acc, 0.35));
    glow.addColorStop(1, rgba(acc, 0));
    c.fillStyle = glow;
    c.beginPath();
    c.arc(cx, cy, R * 1.3, 0, TAU);
    c.fill();

    const buf = S.globe.render(tex, g.lat, g.lon, acc);
    c.imageSmoothingEnabled = true;
    c.drawImage(buf, cx - R, cy - R, R * 2, R * 2);

    // holographic tint on the sphere
    c.save();
    c.beginPath();
    c.arc(cx, cy, R, 0, TAU);
    c.clip();
    c.globalCompositeOperation = "overlay";
    c.fillStyle = rgba(acc, 0.28);
    c.fillRect(cx - R, cy - R, R * 2, R * 2);
    c.globalCompositeOperation = "source-over";
    c.globalAlpha = 0.14;
    c.fillStyle = getScan(c);
    c.fillRect(cx - R, cy - R, R * 2, R * 2);
    c.restore();
    c.strokeStyle = rgba(acc, 0.6);
    c.lineWidth = 1.5;
    c.beginPath();
    c.arc(cx, cy, R, 0, TAU);
    c.stroke();

    // graticule
    c.save();
    c.strokeStyle = rgba(acc, 0.2);
    c.lineWidth = 1;
    for (let lon = -180; lon < 180; lon += 30) {
      c.beginPath();
      let pen = false;
      for (let lat = -90; lat <= 90; lat += 6) {
        const q = globeXY({ lat, lon }, cx, cy, R);
        if (q.z > 0) {
          if (!pen) {
            c.moveTo(q.x, q.y);
            pen = true;
          } else c.lineTo(q.x, q.y);
        } else pen = false;
      }
      c.stroke();
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      c.beginPath();
      let pen = false;
      for (let lon = -180; lon <= 180; lon += 6) {
        const q = globeXY({ lat, lon }, cx, cy, R);
        if (q.z > 0) {
          if (!pen) {
            c.moveTo(q.x, q.y);
            pen = true;
          } else c.lineTo(q.x, q.y);
        } else pen = false;
      }
      c.stroke();
    }
    c.restore();

    // pins
    let hoverLabel = null;
    S.pins
      .filter((p) => p.kind === "sphere")
      .sort((a, b) => (a.artId === S.hoverArt) - (b.artId === S.hoverArt))
      .forEach((p) => {
        const q = globeXY(p, cx, cy, R);
        if (q.z < 0.04) return;
        const hov = p.artId === S.hoverArt;
        c.save();
        c.globalAlpha = clamp(q.z * 2.2, 0.25, 1);
        drawPin(c, q.x, q.y, p, t, hov, S.hoverArt && !hov);
        c.restore();
        S.hits.map.push({ x: q.x, y: q.y, pin: p });
        if (hov && p.primary) hoverLabel = [q.x, q.y, shortName(p.artId)];
      });
    if (hoverLabel)
      drawLabel(c, hoverLabel[0], hoverLabel[1], hoverLabel[2], w, h);

    // readouts
    c.save();
    c.font = '10px "JetBrains Mono", monospace';
    c.fillStyle = rgba(acc, 0.85);
    c.direction = "ltr";
    c.textAlign = "left";
    const la = g.lat * R2D,
      lo = ((g.lon * R2D + 540) % 360) - 180;
    c.fillText(
      "CTR " +
        Math.abs(la).toFixed(1) +
        "°" +
        (la >= 0 ? "N" : "S") +
        " " +
        Math.abs(lo).toFixed(1) +
        "°" +
        (lo >= 0 ? "E" : "W"),
      10,
      h - 10,
    );
    c.restore();
  }

  function drawSystem(t) {
    const c = S.mc,
      w = S.mW,
      h = S.mH,
      acc = accent(),
      cx = w / 2,
      cy = h / 2;
    S.hits.map = [];
    const bg = c.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.6);
    bg.addColorStop(0, "rgba(20,14,40,0.9)");
    bg.addColorStop(1, "rgba(4,6,12,0.9)");
    c.fillStyle = bg;
    c.fillRect(0, 0, w, h);
    c.fillStyle = getScan(c);
    c.globalAlpha = 0.1;
    c.fillRect(0, 0, w, h);
    c.globalAlpha = 1;

    const rings = [
      [1, "EARTH 1 AU"],
      [1.52, "MARS"],
      [5.2, "JUPITER 5.2"],
      [9.58, "SATURN"],
      [19.2, "URANUS"],
      [30.1, "NEPTUNE"],
      [100, "~100 AU · HELIOPAUSE"],
    ];
    c.save();
    c.font = '9px "JetBrains Mono", monospace';
    c.direction = "ltr";
    c.textAlign = "left";
    rings.forEach((r, i) => {
      const k = auLog(r[0]);
      c.strokeStyle = rgba(acc, i === rings.length - 1 ? 0.5 : 0.2);
      c.setLineDash(i === rings.length - 1 ? [4, 5] : []);
      c.lineWidth = 1;
      c.beginPath();
      c.ellipse(cx, cy, k * (w / 2 - 20), k * (h / 2 - 16), 0, 0, TAU);
      c.stroke();
      c.fillStyle = rgba(acc, 0.7);
      if (i !== 1)
        c.fillText(
          r[1],
          cx + k * (w / 2 - 20) * 0.7071 + 4,
          cy - k * (h / 2 - 16) * 0.7071 - 2,
        );
    });
    c.setLineDash([]);
    c.restore();

    // asteroid belt
    if (!S.belt) {
      const rnd = seeded(5);
      S.belt = Array.from({ length: 520 }, () => ({
        au: 2.1 + rnd() * 1.2,
        a: rnd() * 360,
        s: 0.4 + rnd() * 0.9,
      }));
    }
    c.fillStyle = rgba(ACCENT2.deep, 0.5);
    S.belt.forEach((b) => {
      const q = sysXY(b.au, b.a + t * 0.002, w, h);
      c.fillRect(q[0], q[1], b.s, b.s);
    });
    c.fillStyle = rgba(ACCENT2.deep, 0.65);
    c.font = '9px "JetBrains Mono", monospace';
    c.textAlign = "center";
    const lb = sysXY(2.8, 100, w, h);
    c.fillText("MAIN ASTEROID BELT", lb[0], lb[1] - 14);

    // sun + earth
    const sg = c.createRadialGradient(cx, cy, 0, cx, cy, 26);
    sg.addColorStop(0, "rgba(255,240,180,1)");
    sg.addColorStop(0.3, "rgba(255,190,70,0.8)");
    sg.addColorStop(1, "rgba(255,150,0,0)");
    c.fillStyle = sg;
    c.beginPath();
    c.arc(cx, cy, 26, 0, TAU);
    c.fill();
    const ea = (t * 0.00015) % TAU;
    const eq = sysXY(1, ea * R2D, w, h);
    c.fillStyle = "#4da3ff";
    c.beginPath();
    c.arc(eq[0], eq[1], 3.4, 0, TAU);
    c.fill();
    c.fillStyle = "rgba(180,215,255,0.9)";
    c.textAlign = "left";
    c.fillText("⊕", eq[0] + 6, eq[1] + 3);

    // pins
    let hoverLabel = null;
    S.pins
      .filter((p) => p.kind === "sys")
      .sort((a, b) => (a.artId === S.hoverArt) - (b.artId === S.hoverArt))
      .forEach((p) => {
        const xy = sysXY(p.au, p.angle, w, h);
        const hov = p.artId === S.hoverArt;
        drawPin(c, xy[0], xy[1], p, t, hov, S.hoverArt && !hov);
        S.hits.map.push({ x: xy[0], y: xy[1], pin: p });
        if (hov && p.primary) hoverLabel = [xy[0], xy[1], shortName(p.artId)];
      });
    if (hoverLabel)
      drawLabel(c, hoverLabel[0], hoverLabel[1], hoverLabel[2], w, h);
  }

  function lightTime(au) {
    const min = au * 8.317;
    return min < 60
      ? Math.round(min * 10) / 10 + " min"
      : Math.round(min / 6) / 10 + " h";
  }

  function drawRadar(t) {
    const c = S.rc,
      w = S.rW,
      h = S.rH,
      acc = accent();
    c.clearRect(0, 0, w, h);
    const cx = w / 2,
      cy = h / 2,
      R = Math.min(w, h) / 2 - 18;
    S.hits.radar = [];

    const bg = c.createRadialGradient(cx, cy, 0, cx, cy, R);
    bg.addColorStop(0, rgba(acc, 0.12));
    bg.addColorStop(1, "rgba(4,8,16,0.85)");
    c.fillStyle = bg;
    c.beginPath();
    c.arc(cx, cy, R, 0, TAU);
    c.fill();

    // rings
    c.save();
    c.font = '9px "JetBrains Mono", monospace';
    c.direction = "ltr";
    c.textAlign = "left";
    c.lineWidth = 1;
    let rings;
    if (S.sector === "deep")
      rings = [1, 5.2, 20, 100].map((au) => ({
        r: auLog(au) * R,
        label: au + " AU · " + lightTime(au),
      }));
    else {
      const cfg = RADAR[S.sector];
      rings = [1, 2, 3, 4].map((k) => ({
        r: (R * k) / 4,
        label: Math.round((cfg.max * k) / 4) + "°",
      }));
    }
    rings.forEach((rg, i) => {
      c.strokeStyle = rgba(acc, i === rings.length - 1 ? 0.55 : 0.26);
      c.beginPath();
      c.arc(cx, cy, rg.r, 0, TAU);
      c.stroke();
      c.fillStyle = rgba(acc, 0.7);
      c.fillText(rg.label, cx + 4, cy - rg.r + 11);
    });
    // crosshair + ticks
    c.strokeStyle = rgba(acc, 0.22);
    c.beginPath();
    c.moveTo(cx - R, cy);
    c.lineTo(cx + R, cy);
    c.moveTo(cx, cy - R);
    c.lineTo(cx, cy + R);
    c.stroke();
    for (let a = 0; a < 360; a += 10) {
      const rad = a * D2R,
        len = a % 30 === 0 ? 8 : 4;
      c.beginPath();
      c.moveTo(cx + Math.sin(rad) * R, cy - Math.cos(rad) * R);
      c.lineTo(cx + Math.sin(rad) * (R - len), cy - Math.cos(rad) * (R - len));
      c.stroke();
    }
    c.fillStyle = rgba(acc, 0.9);
    c.textAlign = "center";
    if (S.sector !== "deep") {
      c.fillText("N", cx, cy - R - 5);
      c.fillText("S", cx, cy + R + 12);
      c.fillText("E", cx + R + 9, cy + 3);
      c.fillText("W", cx - R - 9, cy + 3);
    }
    c.restore();

    // sweep wedge
    const sweep = ((t / 5200) * TAU) % TAU; // clockwise from "up"
    c.save();
    c.beginPath();
    c.arc(cx, cy, R, 0, TAU);
    c.clip();
    const slices = 34,
      step = 0.04;
    for (let i = 0; i < slices; i++) {
      const a1 = sweep - i * step - Math.PI / 2,
        a0 = a1 - step;
      c.fillStyle = rgba(acc, (1 - i / slices) * 0.3);
      c.beginPath();
      c.moveTo(cx, cy);
      c.arc(cx, cy, R, a0, a1 + 0.002);
      c.closePath();
      c.fill();
    }
    c.strokeStyle = rgba(acc, 0.95);
    c.lineWidth = 1.5;
    c.beginPath();
    c.moveTo(cx, cy);
    c.lineTo(cx + Math.sin(sweep) * R, cy - Math.cos(sweep) * R);
    c.stroke();
    c.restore();

    // pins
    let hoverLabel = null;
    S.pins.forEach((p) => {
      const rel = radarXY(p, R);
      const x = cx + rel[0],
        y = cy + rel[1];
      const bearing = ((Math.atan2(rel[0], -rel[1]) % TAU) + TAU) % TAU;
      const behind = (((sweep - bearing) % TAU) + TAU) % TAU; // radians since the beam passed
      const afterglow = Math.pow(1 - behind / TAU, 3);
      const hov = p.artId === S.hoverArt;
      const a = hov ? 1 : clamp(0.28 + afterglow * 0.85, 0, 1);
      const k = p.primary ? 1 : 0.72;
      c.save();
      const g = c.createRadialGradient(x, y, 0, x, y, 15 * k);
      g.addColorStop(0, rgba(hov ? [255, 255, 255] : acc, 0.9 * a));
      g.addColorStop(1, rgba(acc, 0));
      c.fillStyle = g;
      c.beginPath();
      c.arc(x, y, 15 * k, 0, TAU);
      c.fill();
      c.fillStyle = hov ? "#fff" : rgba(ACCENT2[S.sector] || acc, a);
      c.beginPath();
      c.arc(x, y, (hov ? 4.6 : 3.2) * k, 0, TAU);
      c.fill();
      if (hov) {
        c.strokeStyle = "rgba(255,255,255,0.8)";
        c.lineWidth = 1;
        c.beginPath();
        c.arc(x, y, 9, 0, TAU);
        c.stroke();
      }
      c.restore();
      S.hits.radar.push({ x, y, pin: p });
      if (hov && p.primary) hoverLabel = [x, y, shortName(p.artId)];
    });
    // centre dot
    c.fillStyle = rgba(acc, 0.9);
    c.beginPath();
    c.arc(cx, cy, 2.5, 0, TAU);
    c.fill();
    if (hoverLabel)
      drawLabel(c, hoverLabel[0], hoverLabel[1], hoverLabel[2], w, h);
  }

  /* ------------------------------ loop -------------------------------- */
  function frame(now) {
    requestAnimationFrame(frame);
    if (!S.ready || !S.visible || document.hidden) return;
    const dt = Math.min(0.05, (now - (S.lastT || now)) / 1000);
    S.lastT = now;
    if (S.mW < 10 || S.rW < 10) return;
    S.mc.clearRect(0, 0, S.mW, S.mH);
    if (S.sector === "deep") drawSystem(now);
    else if (S.view === "globe") drawGlobe(now, dt);
    else drawFlat(now);
    drawRadar(now);
  }

  /* ----------------------------- sizing ------------------------------- */
  function sizeCanvas(cv, which) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = cv.clientWidth,
      h = cv.clientHeight;
    if (!w || !h) return;
    cv.width = Math.round(w * dpr);
    cv.height = Math.round(h * dpr);
    const c = cv.getContext("2d");
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (which === "map") {
      S.mW = w;
      S.mH = h;
      S.mc = c;
    } else {
      S.rW = w;
      S.rH = h;
      S.rc = c;
    }
    S.dpr = dpr;
  }

  function applyRatio() {
    const ratio =
      S.sector === "deep"
        ? WIN.deep.ratio
        : S.view === "globe"
          ? 1.6
          : WIN[S.sector].ratio;
    S.mapCv.style.aspectRatio = String(ratio);
    sizeCanvas(S.mapCv, "map");
  }

  /* -------------------------- pointer handling ------------------------- */
  function nearest(list, x, y) {
    let best = null,
      bd = 18;
    for (const h of list) {
      const d = Math.hypot(h.x - x, h.y - y);
      if (d < bd) {
        bd = d;
        best = h;
      }
    }
    return best;
  }
  function pos(cv, e) {
    const r = cv.getBoundingClientRect();
    return [e.clientX - r.left, e.clientY - r.top];
  }

  function setHover(artId, pin) {
    if (S.hoverArt === artId) return;
    S.hoverArt = artId;
    if (S.onHover) S.onHover(pin ? pin : null);
  }

  function bind(cv, which) {
    const hits = () => (which === "map" ? S.hits.map : S.hits.radar);
    cv.addEventListener("pointerdown", (e) => {
      const p = pos(cv, e);
      S.down = {
        which,
        x: p[0],
        y: p[1],
        lat: S.g.lat,
        lon: S.g.lon,
        moved: false,
      };
      if (which === "map" && S.view === "globe" && S.sector !== "deep") {
        try {
          cv.setPointerCapture(e.pointerId);
        } catch (err) {
          /* ignore */
        }
      }
    });
    cv.addEventListener("pointermove", (e) => {
      const p = pos(cv, e);
      const d = S.down;
      if (
        d &&
        d.which === which &&
        which === "map" &&
        S.view === "globe" &&
        S.sector !== "deep"
      ) {
        const dx = p[0] - d.x,
          dy = p[1] - d.y;
        if (Math.hypot(dx, dy) > 4) d.moved = true;
        if (d.moved) {
          S.g.lon = d.lon - dx * 0.007;
          S.g.lat = clamp(d.lat + dy * 0.007, -1.35, 1.35);
          S.g.target = null;
          S.g.auto = false;
          clearTimeout(S.g.idleTimer);
          S.g.idleTimer = setTimeout(() => {
            S.g.auto = true;
          }, 4000);
        }
        return;
      }
      if (e.pointerType === "touch") return;
      const hit = nearest(hits(), p[0], p[1]);
      cv.style.cursor = hit
        ? "pointer"
        : which === "map" && S.view === "globe" && S.sector !== "deep"
          ? "grab"
          : "default";
      setHover(hit ? hit.pin.artId : null, hit ? hit.pin : null);
    });
    cv.addEventListener("pointerup", (e) => {
      const d = S.down;
      S.down = null;
      if (!d || d.moved) return;
      const p = pos(cv, e);
      const hit = nearest(hits(), p[0], p[1]);
      if (!hit) return;
      // touch: first tap previews (with beep), second tap opens
      if (e.pointerType === "touch" && S.hoverArt !== hit.pin.artId) {
        setHover(hit.pin.artId, hit.pin);
        return;
      }
      if (S.onSelect) S.onSelect(hit.pin.artId);
    });
    cv.addEventListener("pointerleave", () => {
      if (!S.down) setHover(null, null);
    });
  }

  /* ------------------------------ public ------------------------------ */
  const MapView = {
    init(opts) {
      S.mapCv = opts.mapCanvas;
      S.radarCv = opts.radarCanvas;
      S.onHover = opts.onHover;
      S.onSelect = opts.onSelect;
      S.getName = opts.getName;
      S.mc = S.mapCv.getContext("2d");
      S.rc = S.radarCv.getContext("2d");
      bind(S.mapCv, "map");
      bind(S.radarCv, "radar");
      const ro = new ResizeObserver(() => {
        sizeCanvas(S.mapCv, "map");
        sizeCanvas(S.radarCv, "radar");
      });
      ro.observe(S.mapCv);
      ro.observe(S.radarCv);
      const io = new IntersectionObserver(
        (es) => {
          S.visible = es[0].isIntersecting;
        },
        { threshold: 0 },
      );
      io.observe(S.mapCv);
      S.ready = true;
      applyRatio();
      sizeCanvas(S.radarCv, "radar");
      requestAnimationFrame(frame);
    },
    setSector(sector, artifacts) {
      S.sector = sector;
      S.artifacts = artifacts;
      S.hoverArt = null;
      buildPins();
      if (sector !== "deep") {
        const ct = centroid();
        S.g.lat = ct.lat;
        S.g.lon = ct.lon;
        S.g.target = null;
        S.g.auto = true;
        ensureTexture(sector);
      }
      applyRatio();
    },
    setArtifacts(artifacts) {
      S.artifacts = artifacts;
      buildPins();
    },
    setView(v) {
      S.view = v === "globe" ? "globe" : "flat";
      applyRatio();
    },
    get view() {
      return S.view;
    },
    /** Highlight an artifact's pins (from card hover). On the globe, rotate to face it. */
    highlight(artId) {
      S.hoverArt = artId || null;
      if (artId && S.view === "globe" && S.sector !== "deep") {
        const p = S.pins.find(
          (x) => x.artId === artId && x.primary && x.kind === "sphere",
        );
        if (p) {
          S.g.target = { lat: p.lat * D2R * 0.8, lon: p.lon * D2R };
        }
      } else if (!artId) S.g.target = null;
    },
    ratioFor(sector, view) {
      return sector === "deep"
        ? WIN.deep.ratio
        : view === "globe"
          ? 1.6
          : WIN[sector].ratio;
    },
  };
  window.MapView = MapView;
})();
