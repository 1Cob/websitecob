/* =========================================================
   Spor — başlangıç bilgileri + antrenman programları
   ========================================================= */
(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const basEl = document.getElementById("spor-baslangic");
  if (basEl && typeof SPOR_BASLANGIC !== "undefined") {
    basEl.innerHTML = SPOR_BASLANGIC.map((b) => `
      <article class="card reveal in">
        <h3 class="card__title">${esc(b.title)}</h3>
        <p class="card__text">${esc(b.text)}</p>
      </article>`).join("");
  }

  const progEl = document.getElementById("spor-programlar");
  if (progEl && typeof SPOR_PROGRAMLAR !== "undefined") {
    progEl.innerHTML = SPOR_PROGRAMLAR.map((p) => `
      <article class="card spor-prog reveal in">
        <div class="spor-prog__top">
          <span class="spor-prog__icon">${p.icon || "🏋️"}</span>
          <span class="badge badge--ok">${esc(p.level || "")}</span>
        </div>
        <h3 class="card__title">${esc(p.title)}</h3>
        <div class="spor-prog__meta">⏱ ${esc(p.sure || "")} · 📅 ${esc(p.siklik || "")}</div>
        <p class="card__text">${esc(p.desc || "")}</p>
        <ul class="spor-list">
          ${(p.hareketler || []).map((h) => `<li>${esc(h)}</li>`).join("")}
        </ul>
      </article>`).join("");
  }
})();
