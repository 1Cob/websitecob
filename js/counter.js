/* =========================================================
   Ziyaretçi sayacı (sol üst rozet)
   - Veri kaynağı: Abacus (ücretsiz, kurulumsuz sayaç API'si)
   - Toplam ziyaret: oturum başına 1 kez artırılır
   - SPA'da tekrar çalıştırılmaz, rozet sayfalar arası kalır
   ========================================================= */
(function () {
  if (window.__cobCounter) return;
  window.__cobCounter = true;

  const NS = "canokanbicer-com";
  const API = "https://abacus.jasoncameron.dev";
  const hit = (k) => fetch(`${API}/hit/${NS}/${k}`).then((r) => r.json()).catch(() => null);
  const get = (k) => fetch(`${API}/get/${NS}/${k}`).then((r) => r.json()).catch(() => null);

  // --- Rozet ---
  const badge = document.createElement("div");
  badge.className = "site-stats";
  badge.setAttribute("data-persist", "");
  badge.innerHTML = `
    <div class="site-stats__row">
      <span class="site-stats__eye">👁</span>
      <b id="ss-total">—</b> ziyaret
    </div>`;
  document.body.appendChild(badge);
  const totalEl = badge.querySelector("#ss-total");

  const fmt = (n) => Number(n).toLocaleString("tr-TR");

  async function init() {
    let total = null;
    if (!sessionStorage.getItem("cob_visited")) {
      sessionStorage.setItem("cob_visited", "1");
      const r = await hit("visits");   // yeni ziyaret
      total = r && r.value;
    } else {
      const r = await get("visits");   // aynı oturum: sadece oku
      total = r && r.value;
    }
    if (total != null) totalEl.textContent = fmt(total);
  }

  init();
})();
