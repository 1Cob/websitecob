/* =========================================================
   Projeler listesi
   ========================================================= */
(function () {
  const listEl = document.getElementById("project-list");
  const emptyEl = document.getElementById("empty");
  if (!listEl || typeof PROJECTS === "undefined") return;

  const STATUS = {
    tamamlandi: { label: "Tamamlandı", cls: "badge--ok" },
    devam:      { label: "Devam ediyor", cls: "badge--wip" },
    fikir:      { label: "Fikir", cls: "badge--idea" },
  };
  const LINK_LABEL = { demo: "Dene →", repo: "Kod", site: "Siteye git →" };

  if (!PROJECTS.length) { emptyEl.style.display = "block"; return; }

  listEl.innerHTML = PROJECTS.map((p) => {
    const st = STATUS[p.status] || STATUS.fikir;
    const tags = (p.tags || []).map((t) => `<span class="pill">${t}</span>`).join("");
    const links = Object.entries(p.links || {})
      .map(([k, url]) => `<a class="proj__link" href="${url}">${LINK_LABEL[k] || k}</a>`)
      .join("");
    return `
      <article class="card reveal in">
        <div class="proj__top">
          <span class="badge ${st.cls}">${st.label}</span>
          <span class="card__meta" style="margin:0">${p.year || ""}</span>
        </div>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__text">${p.desc}</p>
        <div class="pills">${tags}</div>
        ${links ? `<div class="proj__links">${links}</div>` : ""}
      </article>`;
  }).join("");
})();
