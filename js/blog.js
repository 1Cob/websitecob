/* =========================================================
   Blog liste sayfası — kart listesi + etiket filtresi
   ========================================================= */
(function () {
  const listEl = document.getElementById("post-list");
  const filtersEl = document.getElementById("filters");
  const emptyEl = document.getElementById("empty");
  if (!listEl || typeof POSTS === "undefined") return;

  const fmt = (iso) => {
    try {
      return new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul" });
    } catch { return iso; }
  };

  const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
  const tags = ["Tümü", ...new Set(sorted.map((p) => p.tag))];
  let active = "Tümü";

  function renderFilters() {
    filtersEl.innerHTML = tags.map((t) =>
      `<button class="chip ${t === active ? "chip--on" : ""}" data-tag="${t}">${t}</button>`
    ).join("");
    filtersEl.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => { active = btn.dataset.tag; renderFilters(); renderList(); });
    });
  }

  function renderList() {
    const items = active === "Tümü" ? sorted : sorted.filter((p) => p.tag === active);
    emptyEl.style.display = items.length ? "none" : "block";
    listEl.innerHTML = items.map((p) => `
      <a class="card reveal" href="post.html?id=${encodeURIComponent(p.id)}">
        <span class="card__tag">${p.tag}</span>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__text">${p.excerpt}</p>
        <div class="card__meta">${fmt(p.date)}</div>
      </a>
    `).join("");
    // yeni eklenen .reveal'ları görünür yap
    listEl.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }

  renderFilters();
  renderList();
})();
