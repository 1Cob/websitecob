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

  /* ---- Otomatik haberler + dünyadan duyurular (tek çağrı) ---- */
  function renderFeed(wrap, items) {
    wrap.innerHTML = items.map((it) => `
      <a class="haber-item" href="${it.link}" target="_blank" rel="noopener">
        <span class="haber-item__title">${esc(it.title)}</span>
        <span class="haber-item__meta">${esc(it.source || "Kaynak")}${it.date ? " · " + fmtShort(it.date) : ""} ↗</span>
      </a>`).join("");
  }
  (async function loadAuto() {
    const sektor = document.getElementById("sektor");
    const sektorState = document.getElementById("sektor-state");
    const duyuru = document.getElementById("duyuru");
    const duyuruState = document.getElementById("duyuru-state");
    const fallback = "Bu bölüm yayındaki sitede (canokanbicer.com) otomatik yüklenir.";
    try {
      const res = await fetch("/.netlify/functions/haberler", { cache: "no-store" });
      if (!res.ok) throw new Error("yok");
      const data = await res.json();
      const news = data.news || data.items || [];
      const ann = data.duyurular || [];
      if (news.length) { sektorState.style.display = "none"; renderFeed(sektor, news); }
      else sektorState.textContent = "Şu an haber alınamadı, biraz sonra tekrar dene.";
      if (ann.length) { duyuruState.style.display = "none"; renderFeed(duyuru, ann); }
      else duyuruState.textContent = "Şu an duyuru alınamadı, biraz sonra tekrar dene.";
    } catch (e) {
      sektorState.textContent = fallback;   // yerelde fonksiyon yok
      duyuruState.textContent = fallback;
    }
  })();
})();
