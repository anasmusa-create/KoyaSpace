/* ECHOES OF SPACE — persistence layer.
 *  - Prefs / quiz scores / custom JSON artifacts  -> localStorage
 *  - Uploaded images and .glb models (blobs)      -> IndexedDB (falls back to memory if unavailable) */
(function () {
  const KEYS = { prefs: 'echoes.prefs.v1', custom: 'echoes.custom.v1', scores: 'echoes.scores.v1' };

  function read(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
  }

  /* ------------------------- media (IndexedDB) ------------------------- */
  const DB_NAME = 'echoes-media', STORE = 'media';
  let dbPromise = null;
  let memory = [];            // fallback when IndexedDB is unavailable
  let memSeq = 1;
  let items = [];             // [{key, artifactId, kind, name, type, url}]
  let persistent = true;

  function openDB() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      try {
        if (!('indexedDB' in window)) throw new Error('IndexedDB unavailable');
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = () => {
          const os = req.result.createObjectStore(STORE, { keyPath: 'key', autoIncrement: true });
          os.createIndex('artifactId', 'artifactId');
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      } catch (e) { reject(e); }
    }).catch(() => { persistent = false; return null; });
    return dbPromise;
  }

  function tx(db, mode, fn) {
    return new Promise((resolve, reject) => {
      const t = db.transaction(STORE, mode);
      const os = t.objectStore(STORE);
      const out = fn(os);
      t.oncomplete = () => resolve(out && out.result !== undefined ? out.result : undefined);
      t.onerror = () => reject(t.error);
      t.onabort = () => reject(t.error);
    });
  }

  function toItem(rec) {
    return { key: rec.key, artifactId: rec.artifactId, kind: rec.kind, name: rec.name, type: rec.type, url: URL.createObjectURL(rec.blob) };
  }

  const Media = {
    get persistent() { return persistent; },
    async init() {
      const db = await openDB();
      let recs = [];
      if (db) {
        recs = await new Promise((resolve) => {
          const out = [];
          const req = db.transaction(STORE, 'readonly').objectStore(STORE).openCursor();
          req.onsuccess = () => { const c = req.result; if (c) { out.push(c.value); c.continue(); } else resolve(out); };
          req.onerror = () => resolve(out);
        });
      } else {
        recs = memory.slice();
      }
      items = recs.map(toItem);
      return items;
    },
    all() { return items.slice(); },
    forArtifact(id) {
      const mine = items.filter(i => i.artifactId === id);
      return { images: mine.filter(i => i.kind === 'image'), models: mine.filter(i => i.kind === 'model') };
    },
    async add(artifactId, kind, file) {
      const rec = { artifactId, kind, name: file.name, type: file.type || '', blob: file };
      const db = await openDB();
      if (db) {
        const key = await new Promise((resolve, reject) => {
          const t = db.transaction(STORE, 'readwrite');
          const req = t.objectStore(STORE).add(rec);
          req.onsuccess = () => resolve(req.result);
          t.onerror = () => reject(t.error);
          t.onabort = () => reject(t.error);
        });
        rec.key = key;
      } else {
        rec.key = memSeq++;
        memory.push(rec);
      }
      const item = toItem(rec);
      items.push(item);
      return item;
    },
    async remove(key) {
      const i = items.findIndex(x => x.key === key);
      if (i >= 0) { URL.revokeObjectURL(items[i].url); items.splice(i, 1); }
      const db = await openDB();
      if (db) await tx(db, 'readwrite', os => os.delete(key));
      else memory = memory.filter(r => r.key !== key);
    },
    async clear() {
      items.forEach(i => URL.revokeObjectURL(i.url));
      items = [];
      const db = await openDB();
      if (db) await tx(db, 'readwrite', os => os.clear());
      memory = [];
    }
  };

  window.Store = {
    prefs: {
      get: () => read(KEYS.prefs, {}),
      set(patch) { write(KEYS.prefs, Object.assign(read(KEYS.prefs, {}), patch)); }
    },
    custom: {
      get: () => { const v = read(KEYS.custom, []); return Array.isArray(v) ? v : []; },
      set: arr => write(KEYS.custom, arr),
      clear: () => { try { localStorage.removeItem(KEYS.custom); } catch (e) { /* ignore */ } }
    },
    scores: {
      get: () => read(KEYS.scores, {}),
      set(id, score) {
        const all = read(KEYS.scores, {});
        all[id] = Math.max(all[id] || 0, score);
        write(KEYS.scores, all);
      }
    },
    media: Media
  };
})();
