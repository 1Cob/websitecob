/* =========================================================
   Dünyaca ünlü projeler — kart listesi + etiket filtresi
   ========================================================= */
(function () {
  const listEl = document.getElementById("project-list");
  const filtersEl = document.getElementById("filters");
  const emptyEl = document.getElementById("empty");
  if (!listEl || typeof PROJECTS === "undefined") return;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  if (!PROJECTS.length) { emptyEl.style.display = "block"; return; }

  const tags = ["Tümü", ...new Set(PROJECTS.map((p) => p.tag).filter(Boolean))];
  let active = "Tümü";

  function renderFilters() {
    if (!filtersEl) return;
    filtersEl.innerHTML = tags.map((t) =>
      `<button class="chip ${t === active ? "chip--on" : ""}" data-tag="${t}">${t}</button>`
    ).join("");
    filtersEl.querySelectorAll(".chip").forEach((b) =>
      b.addEventListener("click", () => { active = b.dataset.tag; renderFilters(); renderList(); })
    );
  }

  function renderList() {
    const items = active === "Tümü" ? PROJECTS : PROJECTS.filter((p) => p.tag === active);
    listEl.innerHTML = items.map((p) => `
      <article class="card wproj reveal in">
        <div class="wproj__top">
          <span class="wproj__icon">${p.icon || "🏗️"}</span>
          ${p.tag ? `<span class="pill">${esc(p.tag)}</span>` : ""}
        </div>
        <h3 class="card__title">${esc(p.name)}</h3>
        <div class="wproj__meta">${esc(p.loc || "")}${p.year ? " · " + esc(p.year) : ""}${p.stat ? " · " + esc(p.stat) : ""}</div>
        <p class="card__text">${esc(p.desc || "")}</p>
      </article>`).join("");
  }

  renderFilters();
  renderList();
})();
