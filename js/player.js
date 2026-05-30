/* =========================================================
   Kalıcı müzik oynatıcı (global)
   - assets/music/ klasörünü OTOMATİK tarar; dosyaları kendi listeler
   - Tek bir Audio nesnesi yönetir, durum localStorage'da saklanır
   - Her sayfada altta mini oynatıcı gösterir, sayfa değişince devam eder
   ========================================================= */
(function () {
  const inPages = /\/pages\//.test(location.pathname);
  const musicDir = inPages ? "../assets/music/" : "assets/music/";
  const AUDIO_EXT = [".mp3", ".m4a", ".ogg", ".wav", ".flac", ".aac"];

  // Dosya adından { title, artist } çıkar ("Sanatçı - Şarkı" desteklenir)
  function metaFromName(file) {
    const name = file.replace(/\.[^.]+$/, "").replace(/_/g, " ").trim();
    if (name.includes(" - ")) {
      const p = name.split(" - ");
      return { artist: p[0].trim(), title: p.slice(1).join(" - ").trim() };
    }
    return { artist: "COB", title: name };
  }

  // Klasörü tara (sunucu dizin listelemesi açıksa çalışır)
  async function discover() {
    try {
      const res = await fetch(musicDir, { cache: "no-store" });
      if (!res.ok) return [];
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const seen = new Set();
      const list = [];
      doc.querySelectorAll("a").forEach((a) => {
        const href = a.getAttribute("href");
        if (!href) return;
        if (!AUDIO_EXT.some((e) => href.toLowerCase().endsWith(e))) return;
        const file = decodeURIComponent(href.split("/").pop());
        if (seen.has(file)) return;
        seen.add(file);
        list.push(Object.assign(metaFromName(file), { src: musicDir + href.replace(/^\.\//, "") }));
      });
      list.sort((a, b) => a.title.localeCompare(b.title, "tr"));
      return list;
    } catch (e) { return []; }
  }

  // Üretilmiş manifest (tools/generate-music.mjs çıktısı) — yayında en güvenilir yol
  async function loadManifest() {
    try {
      const res = await fetch(musicDir + "tracks.json", { cache: "no-store" });
      if (!res.ok) return [];
      const data = await res.json();
      return (data.tracks || []).map((t) => ({
        title: t.title || t.file,
        artist: t.artist || "COB",
        src: musicDir + encodeURI(t.file),
      }));
    } catch (e) { return []; }
  }

  async function init() {
    let tracks = await loadManifest();            // 1) manifest (yayın)
    if (!tracks.length) tracks = await discover(); // 2) dizin taraması (yerel geliştirme)
    if (!tracks.length && typeof TRACKS !== "undefined") tracks = TRACKS; // 3) elle yedek

    const KEY = "cob_player";
    const audio = new Audio();
    audio.preload = "metadata";
    let cur = -1;
    const subs = [];
    let saveTick = 0;

    const state = () => ({ cur, playing: !audio.paused, time: audio.currentTime, dur: audio.duration });
    const emit = () => subs.forEach((f) => f(state()));
    function save() {
      try { localStorage.setItem(KEY, JSON.stringify({ cur, time: audio.currentTime, playing: !audio.paused })); } catch (e) {}
    }

    function load(i, autoplay) {
      if (!tracks.length) return;
      cur = (i + tracks.length) % tracks.length;
      audio.src = tracks[cur].src;
      if (autoplay) play();
      emit(); save(); updateMini();
    }
    function play() { audio.play().catch(() => {}); }
    function pause() { audio.pause(); }
    function toggle() { if (cur < 0) load(0, true); else audio.paused ? play() : pause(); }
    function next() { load(cur + 1, true); }
    function prev() { load(cur - 1, true); }

    audio.addEventListener("timeupdate", () => {
      emit(); updateMiniProgress();
      if (++saveTick % 8 === 0) save();
    });
    audio.addEventListener("ended", next);
    audio.addEventListener("play", () => { emit(); save(); updateMini(); });
    audio.addEventListener("pause", () => { emit(); save(); updateMini(); });
    audio.addEventListener("loadedmetadata", emit);
    window.addEventListener("beforeunload", save);

    // ---- Mini oynatıcı ----
    let mini, miniFill, miniTitle, miniPlay, miniArt;
    if (tracks.length) {
      mini = document.createElement("div");
      mini.className = "mini";
      mini.innerHTML = `
        <a class="mini__art" href="#" title="Müzik sayfası">🎵</a>
        <div class="mini__meta">
          <div class="mini__title">—</div>
          <div class="mini__bar"><div class="mini__fill"></div></div>
        </div>
        <button class="mini__btn" data-act="prev" aria-label="Önceki">⏮</button>
        <button class="mini__btn mini__btn--play" data-act="toggle" aria-label="Çal/Duraklat">▶</button>
        <button class="mini__btn" data-act="next" aria-label="Sonraki">⏭</button>`;
      document.body.appendChild(mini);
      miniFill  = mini.querySelector(".mini__fill");
      miniTitle = mini.querySelector(".mini__title");
      miniPlay  = mini.querySelector(".mini__btn--play");
      miniArt   = mini.querySelector(".mini__art");
      mini.querySelectorAll("[data-act]").forEach((b) =>
        b.addEventListener("click", () => ({ prev, next, toggle }[b.dataset.act]()))
      );
    }
    function updateMini() {
      if (!mini) return;
      // Müzik sayfasındayken (tam oynatıcı varken) mini gizlenir
      const hide = cur < 0 || document.querySelector(".player");
      if (hide) { mini.classList.remove("show"); return; }
      mini.classList.add("show");
      miniArt.href = /\/pages\//.test(location.pathname) ? "muzik.html" : "pages/muzik.html";
      miniTitle.textContent = tracks[cur].title;
      miniPlay.textContent = audio.paused ? "▶" : "⏸";
    }
    function updateMiniProgress() {
      if (miniFill && audio.duration) miniFill.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    }

    // ---- Kaydedilmiş durumu geri yükle ----
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "null");
      if (saved && saved.cur >= 0 && saved.cur < tracks.length) {
        cur = saved.cur;
        audio.src = tracks[cur].src;
        audio.addEventListener("loadedmetadata", function once() {
          if (saved.time) audio.currentTime = saved.time;
          audio.removeEventListener("loadedmetadata", once);
        });
        updateMini();
        if (saved.playing) play();
      }
    } catch (e) {}

    window.Player = {
      audio, tracks,
      load, play, pause, toggle, next, prev,
      get cur() { return cur; },
      subscribe(f) { subs.push(f); f(state()); },
      resetSubs() { subs.length = 0; },          // SPA geçişinde eski abonelikleri temizle
      refresh() { updateMini(); updateMiniProgress(); },
    };
    document.dispatchEvent(new Event("player:ready"));
  }

  init();
})();
