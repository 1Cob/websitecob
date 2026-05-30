/* =========================================================
   Makaleler liste sayfası (blog ile aynı yapı, ARTICLES verisi)
   ========================================================= */
(function () {
  const listEl = document.getElementById("post-list");
  const filtersEl = document.getElementById("filters");
  const emptyEl = document.getElementById("empty");
  if (!listEl || typeof ARTICLES === "undefined") return;

  const fmt = (iso) => {
    try {
      return new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul" });
    } catch { return iso; }
  };

  const sorted = [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));
  const tags = ["Tümü", ...new Set(sorted.map((p) => p.tag))];
  let active = "Tümü";

  function renderFilters() {
    if (!sorted.length) return;
    filtersEl.innerHTML = tags.map((t) =>
      `<button class="chip ${t === active ? "chip--on" : ""}" data-tag="${t}">${t}</button>`
    ).join("");
    filtersEl.querySelectorAll(".chip").forEach((btn) =>
      btn.addEventListener("click", () => { active = btn.dataset.tag; renderFilters(); renderList(); })
    );
  }

  function renderList() {
    const items = active === "Tümü" ? sorted : sorted.filter((p) => p.tag === active);
    emptyEl.style.display = items.length ? "none" : "block";
    if (!items.length && active === "Tümü") emptyEl.textContent = "Henüz makale eklenmedi.";
    listEl.innerHTML = items.map((p) => `
      <a class="card reveal in" href="makale.html?id=${encodeURIComponent(p.id)}">
        <span class="card__tag">${p.tag}</span>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__text">${p.excerpt}</p>
        <div class="card__meta">${fmt(p.date)}${p.author ? " · " + p.author : ""}</div>
      </a>`).join("");
  }

  renderFilters();
  renderList();
})();
