/* =========================================================
   Müzik sayfası — global kalıcı oynatıcıyı (window.Player) kullanır
   Liste, klasör otomatik taranarak Player tarafından sağlanır.
   ========================================================= */
(function () {
  function init() {
    const listEl = document.getElementById("playlist");
    const emptyEl = document.getElementById("empty");
    if (!listEl || !window.Player) return;

    const P = window.Player;
    const tracks = P.tracks;
    if (!tracks.length) { emptyEl.style.display = "block"; return; }

    const audio   = P.audio;
    const titleEl = document.getElementById("p-title");
    const artistEl= document.getElementById("p-artist");
    const playBtn = document.getElementById("p-play");
    const prevBtn = document.getElementById("p-prev");
    const nextBtn = document.getElementById("p-next");
    const curEl   = document.getElementById("p-cur");
    const durEl   = document.getElementById("p-dur");
    const fill    = document.getElementById("p-fill");
    const track   = document.getElementById("p-track");
    const art     = document.getElementById("art");

    const fmt = (s) => {
      if (!s || isNaN(s)) return "0:00";
      const m = Math.floor(s / 60), sec = Math.floor(s % 60);
      return `${m}:${sec < 10 ? "0" : ""}${sec}`;
    };

    function renderList() {
      listEl.innerHTML = tracks.map((t, i) => `
        <button class="ptrack ${i === P.cur ? "ptrack--on" : ""}" data-i="${i}">
          <span class="ptrack__no">${i === P.cur ? "♪" : i + 1}</span>
          <span class="ptrack__meta">
            <span class="ptrack__title">${t.title}</span>
            <span class="ptrack__artist">${t.artist || ""}</span>
          </span>
        </button>`).join("");
      listEl.querySelectorAll(".ptrack").forEach((b) =>
        b.addEventListener("click", () => P.load(Number(b.dataset.i), true))
      );
    }

    playBtn.addEventListener("click", () => P.toggle());
    prevBtn.addEventListener("click", () => P.prev());
    nextBtn.addEventListener("click", () => P.next());
    track.addEventListener("click", (e) => {
      if (!audio.duration) return;
      const r = track.getBoundingClientRect();
      audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
    });

    P.subscribe((s) => {
      const t = s.cur >= 0 ? tracks[s.cur] : null;
      titleEl.textContent = t ? t.title : "Bir parça seç";
      artistEl.textContent = t ? (t.artist || "—") : "—";
      playBtn.textContent = s.playing ? "⏸" : "▶";
      curEl.textContent = fmt(s.time);
      durEl.textContent = fmt(s.dur);
      fill.style.width = (s.dur ? (s.time / s.dur) * 100 : 0) + "%";
      art.classList.toggle("art--spin", s.playing);
      art.classList.toggle("art--active", !!t);
      renderList();
    });
  }

  if (window.Player) init();
  else document.addEventListener("player:ready", init);
})();
