/* ECHOES OF SPACE — interactive canvas starfield: 3 parallax layers, floating cosmic dust, shooting stars. */
(function () {
  const cv = document.getElementById('starfield');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W = 0, H = 0, dpr = 1;
  let layers = [], dust = [], shooting = null, nextShot = 4000;
  let px = 0, py = 0, tx = 0, ty = 0;      // eased / target pointer offsets (-0.5..0.5)
  let scrollY = 0;
  let tint = [0, 240, 255], tintTarget = [0, 240, 255];
  let last = performance.now();

  const rand = (a, b) => a + Math.random() * (b - a);

  function build() {
    const area = W * H;
    const defs = [
      { n: Math.round(area / 7000), depth: 0.12, size: [0.35, 0.9], alpha: [0.25, 0.6] },
      { n: Math.round(area / 16000), depth: 0.35, size: [0.7, 1.3], alpha: [0.4, 0.8] },
      { n: Math.round(area / 42000), depth: 0.8, size: [1.1, 2.1], alpha: [0.6, 1] }
    ];
    layers = defs.map(d => ({
      depth: d.depth,
      stars: Array.from({ length: d.n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: rand(d.size[0], d.size[1]), a: rand(d.alpha[0], d.alpha[1]),
        tw: Math.random() * Math.PI * 2, sp: rand(0.4, 1.6),
        warm: Math.random() < 0.16
      }))
    }));
    dust = Array.from({ length: Math.round(area / 90000) + 8 }, () => ({
      x: Math.random() * W, y: Math.random() * H, r: rand(40, 160),
      vx: rand(-6, 6), vy: rand(-4, 4), a: rand(0.015, 0.045), depth: rand(0.2, 0.6),
      mix: Math.random()
    }));
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    build();
    if (reduce) draw(0);
  }

  function wrap(v, m) { return ((v % m) + m) % m; }

  function draw(dt) {
    ctx.clearRect(0, 0, W, H);

    // cosmic dust (soft tinted blobs)
    for (const d of dust) {
      d.x += d.vx * dt; d.y += d.vy * dt;
      const x = wrap(d.x + px * d.depth * 80, W + 2 * d.r) - d.r;
      const y = wrap(d.y + py * d.depth * 80 - scrollY * d.depth * 0.15, H + 2 * d.r) - d.r;
      const g = ctx.createRadialGradient(x, y, 0, x, y, d.r);
      const c = d.mix < 0.5 ? tint : [150, 160, 255];
      g.addColorStop(0, 'rgba(' + (c[0] | 0) + ',' + (c[1] | 0) + ',' + (c[2] | 0) + ',' + d.a + ')');
      g.addColorStop(1, 'rgba(' + (c[0] | 0) + ',' + (c[1] | 0) + ',' + (c[2] | 0) + ',0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - d.r, y - d.r, d.r * 2, d.r * 2);
    }

    // stars
    const tms = performance.now() / 1000;
    for (const L of layers) {
      for (const s of L.stars) {
        const x = wrap(s.x + px * L.depth * 60, W);
        const y = wrap(s.y + py * L.depth * 60 - scrollY * L.depth * 0.25, H);
        const tw = reduce ? 1 : 0.7 + 0.3 * Math.sin(tms * s.sp + s.tw);
        ctx.globalAlpha = s.a * tw;
        ctx.fillStyle = s.warm ? '#ffe9c4' : '#dfe9ff';
        if (s.r > 1.2) { ctx.beginPath(); ctx.arc(x, y, s.r, 0, 6.2832); ctx.fill(); }
        else ctx.fillRect(x, y, s.r * 1.4, s.r * 1.4);
      }
    }
    ctx.globalAlpha = 1;

    // shooting star
    if (shooting) {
      const s = shooting;
      s.life += dt;
      const k = s.life / s.dur;
      if (k >= 1) shooting = null;
      else {
        const x = s.x + s.vx * s.life, y = s.y + s.vy * s.life;
        const len = 120;
        const nx = s.vx / Math.hypot(s.vx, s.vy), ny = s.vy / Math.hypot(s.vx, s.vy);
        const g = ctx.createLinearGradient(x, y, x - nx * len, y - ny * len);
        g.addColorStop(0, 'rgba(255,255,255,' + (0.9 * (1 - k)) + ')');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - nx * len, y - ny * len); ctx.stroke();
      }
    }
  }

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    px += (tx - px) * Math.min(1, dt * 3);
    py += (ty - py) * Math.min(1, dt * 3);
    for (let i = 0; i < 3; i++) tint[i] += (tintTarget[i] - tint[i]) * Math.min(1, dt * 2);
    nextShot -= dt * 1000;
    if (nextShot <= 0 && !shooting) {
      const fromLeft = Math.random() < 0.5;
      shooting = {
        x: fromLeft ? rand(0, W * 0.5) : rand(W * 0.5, W), y: rand(0, H * 0.4),
        vx: (fromLeft ? 1 : -1) * rand(500, 800), vy: rand(200, 400), life: 0, dur: rand(0.7, 1.2)
      };
      nextShot = rand(6000, 14000);
    }
    draw(dt);
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', e => { tx = (e.clientX / W - 0.5) * -1; ty = (e.clientY / H - 0.5) * -1; }, { passive: true });
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  resize();
  if (!reduce) requestAnimationFrame(frame);

  window.Starfield = {
    setTint(rgb) { tintTarget = rgb.slice(); if (reduce) { tint = rgb.slice(); draw(0); } }
  };
})();
