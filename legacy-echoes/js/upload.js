/* ECHOES OF SPACE — "Upload / Attach NASA Media & JSON" manager.
 * Lets the team add NSSDCA JSON datasets, NASA archival photos and .glb 3D models live,
 * persisted in this browser (localStorage + IndexedDB). */
(function () {
  'use strict';
  const App = window.EchoesApp;
  const { t, L, esc, toast } = App;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  const overlay = $('#upload');
  let tab = 'json';
  let lastFocus = null;

  const TEMPLATE = [{
    id: 'my-probe',
    num: 14,
    sector: 'deep',
    icon: '🛰️',
    name: { en: 'My Custom Spacecraft', ku: 'فەزاگەمەکەی من' },
    tagline: { en: 'I am a spacecraft added during the demo.', ku: 'من فەزاگەمەیەکم کە لە کاتی نیشاندانەکەدا زیادکرام.' },
    status: { en: 'DORMANT', ku: 'نوستوو' },
    statusType: 'dormant',
    passport: {
      nssdca: '0000-000A',
      launch: { en: 'Jan 1, 2000', ku: '1 کانوونی دووەم 2000' },
      arrival: { en: 'Jan 2, 2001', ku: '2 کانوونی دووەم 2001' },
      end: { en: 'Jan 3, 2002', ku: '3 کانوونی دووەم 2002' },
      location: { en: 'Somewhere in space', ku: 'لە شوێنێک لە فەزا' },
      coords: '0° N, 0° E',
      mass: { en: '100 kg', ku: '100 kg' },
      power: { en: 'Solar panels', ku: 'پانێڵی خۆری' },
      dormancy: { en: 'Fuel depleted', ku: 'سووتەمەنی تەواو بوو' },
      discovery: { en: 'Key discovery goes here', ku: 'دۆزینەوەی سەرەکی لێرە دەنووسرێت' }
    },
    sites: [{ label: { en: 'Resting place', ku: 'شوێنی حەسانەوە' }, au: 3, angle: 300 }],
    funFacts: [{ en: 'Fun fact 1', ku: 'زانیاری 1' }],
    story: {
      junior: { en: 'Hello! I am a spacecraft. 🚀\n\nThis is my story for young explorers.', ku: 'سڵاو! من فەزاگەمەیەکم. 🚀\n\nئەمە چیرۆکی منە بۆ گەڕێدە بچووکەکان.' },
      specialist: { en: 'I am a spacecraft. Engineering details go here.', ku: 'من فەزاگەمەیەکم. وردەکارییە ئەندازیارییەکان لێرەن.' }
    },
    specs: [{ k: { en: 'Mass', ku: 'کێش' }, v: '100 kg' }],
    tradeoffs: [{ en: 'A design trade-off', ku: 'ڕێککەوتنێکی دیزاین' }],
    radio: { en: 'S-band, 2.2 GHz', ku: 'S-band، 2.2 GHz' },
    quiz: [{ q: { en: 'Example question?', ku: 'پرسیاری نموونە؟' }, options: [{ en: 'Yes', ku: 'بەڵێ' }, { en: 'No', ku: 'نەخێر' }, { en: 'Maybe', ku: 'لەوانەیە' }], answer: 0, why: { en: 'Because.', ku: 'چونکە.' } }],
    pingReply: { en: 'Thank you for remembering me.', ku: 'سوپاس کە لەبیرت کردم.' },
    media: { image: null, model: null }
  }];

  /* ------------------------------ helpers ------------------------------ */
  function download(name, text) {
    const blob = new Blob([text], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function setTab(name) {
    tab = name;
    $$('#upTabs button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.tab === name)));
    $$('.tabpanel', overlay).forEach(p => { p.hidden = p.dataset.panel !== name; });
    if (name === 'library') renderLibrary();
  }

  function fillTargets(preselect) {
    const arts = App.getArtifacts();
    const opts = arts.map(a => '<option value="' + esc(a.id) + '">#' + String(a.num).padStart(2, '0') + ' · ' + esc(L(a.name)) + '</option>').join('');
    ['#targetImages', '#targetModels'].forEach(sel => {
      const el = $(sel), prev = preselect || el.value;
      el.innerHTML = opts;
      if (prev && arts.some(a => a.id === prev)) el.value = prev;
    });
  }

  /* -------------------------------- JSON -------------------------------- */
  function applyJson(text) {
    let data;
    try { data = JSON.parse(text); } catch (e) { toast(t('upload.err.json', { e: e.message }), 'warn', 7000); return; }
    let list = Array.isArray(data) ? data : (data && Array.isArray(data.artifacts) ? data.artifacts : (data && data.id ? [data] : []));
    list = list.filter(r => App.normalize(r));
    if (!list.length) { toast(t('upload.err.empty'), 'warn', 7000); return; }
    const byId = new Map();
    Store.custom.get().forEach(r => { const n = App.normalize(r); if (n) byId.set(n.id, r); });
    list.forEach(r => { r = JSON.parse(JSON.stringify(r)); delete r.custom; byId.set(App.normalize(r).id, r); });
    Store.custom.set(Array.from(byId.values()));
    App.refreshData();
    fillTargets();
    renderLibrary();
    toast('✅ ' + t('upload.ok.json', { n: list.length }));
  }

  function readFileText(file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(String(fr.result));
      fr.onerror = () => reject(fr.error);
      fr.readAsText(file);
    });
  }

  /* -------------------------------- media ------------------------------- */
  const isImage = f => /^image\//.test(f.type) || /\.(jpe?g|png|webp|gif|avif|svg)$/i.test(f.name);
  const isModel = f => /\.(glb|gltf)$/i.test(f.name) || /^model\//.test(f.type);

  async function attachFiles(files, kind) {
    const target = $(kind === 'image' ? '#targetImages' : '#targetModels').value;
    let ok = 0;
    for (const f of files) {
      const valid = kind === 'image' ? isImage(f) : isModel(f);
      if (!valid) { toast(t('upload.err.type', { f: f.name }), 'warn'); continue; }
      try { await Store.media.add(target, kind, f); ok++; }
      catch (e) { toast(t('upload.err.store', { f: f.name }), 'warn'); }
    }
    if (ok) {
      toast('✅ ' + t('upload.ok.media', { n: ok }));
      App.refreshMedia();
      renderLibrary();
    }
  }

  function wireDrop(zoneSel, inputSel, handler) {
    const zone = $(zoneSel), input = $(inputSel);
    input.addEventListener('change', () => { handler(Array.from(input.files)); input.value = ''; });
    ['dragenter', 'dragover'].forEach(ev => zone.addEventListener(ev, e => { e.preventDefault(); zone.classList.add('over'); }));
    ['dragleave', 'drop'].forEach(ev => zone.addEventListener(ev, e => { e.preventDefault(); zone.classList.remove('over'); }));
    zone.addEventListener('drop', e => handler(Array.from(e.dataTransfer.files || [])));
  }

  /* ------------------------------- library ------------------------------ */
  function renderLibrary() {
    const box = $('#library');
    const media = Store.media.all();
    const custom = Store.custom.get().map(r => App.normalize(r)).filter(Boolean);
    if (!media.length && !custom.length) {
      box.innerHTML = '<p class="muted">' + esc(t('upload.empty')) + '</p>';
      return;
    }
    const nameOf = id => { const a = App.getById(id); return a ? L(a.name) : id; };
    let h = '';
    custom.forEach(a => {
      h += '<div class="lib-row"><span class="lib-ico">🗂️</span><div class="lib-t"><b>' + esc(L(a.name)) + '</b><small class="mono">' + esc(a.id) + ' · JSON</small></div>' +
        '<button type="button" class="btn-ghost small" data-rm-art="' + esc(a.id) + '">' + esc(t('upload.remove')) + '</button></div>';
    });
    media.forEach(m => {
      const thumb = m.kind === 'image' ? '<img src="' + esc(m.url) + '" alt="">' : '<span class="lib-ico">🧊</span>';
      h += '<div class="lib-row"><span class="lib-thumb">' + thumb + '</span><div class="lib-t"><b>' + esc(m.name) + '</b><small class="mono">' + esc(nameOf(m.artifactId)) + ' · ' + m.kind.toUpperCase() + '</small></div>' +
        '<button type="button" class="btn-ghost small" data-rm-media="' + m.key + '">' + esc(t('upload.remove')) + '</button></div>';
    });
    box.innerHTML = h;
  }

  /* ----------------------------- open / close --------------------------- */
  function open(opts) {
    opts = opts || {};
    lastFocus = document.activeElement;
    fillTargets(opts.artifactId);
    setTab(opts.tab || 'json');
    overlay.hidden = false;
    document.body.classList.add('modal-open');
    const f = $('.close', overlay); if (f) f.focus({ preventScroll: true });
  }

  function close() {
    overlay.hidden = true;
    if (App.state.openId == null) document.body.classList.remove('modal-open');
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
  }

  /* -------------------------------- wiring ------------------------------ */
  $('[data-close]', overlay).addEventListener('click', close);
  overlay.addEventListener('mousedown', e => { if (e.target === overlay) close(); });
  $('#upTabs').addEventListener('click', e => { const b = e.target.closest('button[data-tab]'); if (b) setTab(b.dataset.tab); });

  wireDrop('#dzJson', '#fileJson', async files => {
    if (!files.length) return;
    try { const txt = await readFileText(files[0]); $('#jsonText').value = txt; applyJson(txt); }
    catch (e) { toast(t('upload.err.json', { e: e.message }), 'warn'); }
  });
  wireDrop('#dzImages', '#fileImages', files => attachFiles(files, 'image'));
  wireDrop('#dzModels', '#fileModels', files => attachFiles(files, 'model'));

  $('#jsonApply').addEventListener('click', () => { const v = $('#jsonText').value.trim(); if (v) applyJson(v); });
  $('#jsonTemplate').addEventListener('click', () => download('echoes-artifact-template.json', JSON.stringify(TEMPLATE, null, 2)));
  $('#jsonExport').addEventListener('click', () => {
    const data = App.getArtifacts().map(a => { const c = JSON.parse(JSON.stringify(a)); delete c.custom; return c; });
    download('echoes-of-space-dataset.json', JSON.stringify({ artifacts: data }, null, 2));
  });

  $('#library').addEventListener('click', async e => {
    const m = e.target.closest('[data-rm-media]');
    const a = e.target.closest('[data-rm-art]');
    if (m) {
      await Store.media.remove(Number(m.dataset.rmMedia));
      App.refreshMedia(); renderLibrary(); toast(t('upload.removed'));
    } else if (a) {
      const id = a.dataset.rmArt;
      Store.custom.set(Store.custom.get().filter(r => { const n = App.normalize(r); return !n || n.id !== id; }));
      App.refreshData(); fillTargets(); renderLibrary(); toast(t('upload.removed'));
    }
  });

  $('#resetAll').addEventListener('click', async () => {
    if (!window.confirm(t('upload.reset.confirm'))) return;
    await Store.media.clear();
    Store.custom.clear();
    App.refreshData(); fillTargets(); renderLibrary();
    toast(t('upload.reset.done'));
  });

  // Don't let a stray file drop outside a drop-zone navigate away from the app while the manager is open.
  ['dragover', 'drop'].forEach(ev => window.addEventListener(ev, e => { if (!overlay.hidden && !e.target.closest('.dropzone')) e.preventDefault(); }));

  window.EchoesUpload = {
    open, close,
    refresh() { fillTargets(); if (!overlay.hidden && tab === 'library') renderLibrary(); }
  };
})();
