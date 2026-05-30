/* =========================================================
   Haberler — otomatik sektör haberleri + elle duyurular
   ========================================================= */
(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (iso) => {
    try { return new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul" }); }
    catch { return iso; }
  };
  const fmtShort = (iso) => {
    try { return new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "short", timeZone: "Europe/Istanbul" }); }
    catch { return ""; }
  };

  /* ---- Elle duyurular (NEWS) ---- */
  (function renderNews() {
    const wrap = document.getElementById("news");
    const emptyEl = document.getElementById("empty");
    if (!wrap || typeof NEWS === "undefined") return;
    const TYPE = {
      oyun: { label: "Oyun", icon: "🎮" }, yazi: { label: "Yazı", icon: "✍️" },
      duyuru: { label: "Duyuru", icon: "📣" }, guncelleme: { label: "Güncelleme", icon: "🔧" },
    };
    if (!NEWS.length) { emptyEl.style.display = "block"; return; }
    const sorted = [...NEWS].sort((a, b) => new Date(b.date) - new Date(a.date));
    wrap.innerHTML = sorted.map((n) => {
      const t = TYPE[n.type] || TYPE.duyuru;
      return `
        <article class="tl-item reveal in">
          <div class="tl-dot">${t.icon}</div>
          <div class="tl-body">
            <div class="tl-meta"><span class="tl-type">${t.label}</span> · ${fmt(n.date)}</div>
            <h3 class="tl-title">${esc(n.title)}</h3>
            <p class="tl-text">${esc(n.body)}</p>
            ${n.link ? `<a class="tl-link" href="${n.link}">İncele →</a>` : ""}
          </div>
        </article>`;
    }).join("");
  })();

  /* ---- Otomatik sektör haberleri (Netlify Function) ---- */
  (async function loadSektor() {
    const wrap = document.getElementById("sektor");
    const state = document.getElementById("sektor-state");
    if (!wrap) return;
    try {
      const res = await fetch("/.netlify/functions/haberler", { cache: "no-store" });
      if (!res.ok) throw new Error("yok");
      const data = await res.json();
      if (!data.items || !data.items.length) throw new Error("boş");
      state.style.display = "none";
      wrap.innerHTML = data.items.map((it) => `
        <a class="haber-item" href="${it.link}" target="_blank" rel="noopener">
          <span class="haber-item__title">${esc(it.title)}</span>
          <span class="haber-item__meta">${esc(it.source || "Kaynak")}${it.date ? " · " + fmtShort(it.date) : ""} ↗</span>
        </a>`).join("");
    } catch (e) {
      // Yerelde (python sunucu) fonksiyon yok; canlı sitede çalışır
      state.textContent = "Güncel sektör haberleri yayındaki sitede (canokanbicer.com) otomatik yüklenir.";
    }
  })();
})();
