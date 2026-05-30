/* =========================================================
   Mühendislik bölümü — teoriler, çelik, çatı, izolasyon, projeler
   ========================================================= */
(function () {
  const wrap = document.getElementById("eng-content");
  if (!wrap) return;

  // Teoriler: isim + ne işe yarar
  const theories = (typeof ENG_THEORIES !== "undefined" ? ENG_THEORIES : []).map((t) => `
    <article class="card reveal in eng-theory">
      <h3 class="eng-theory__name">${t.name}</h3>
      <p class="card__text">${t.use}</p>
    </article>`).join("");

  // Basit konu kartları (başlık + metin)
  const topicCards = (arr) => (arr || []).map((i) => `
    <article class="card reveal in">
      <h3 class="card__title">${i.title}</h3>
      <p class="card__text">${i.text}</p>
    </article>`).join("");

  // Dev projeler (görselli)
  const projects = (typeof ENG_PROJECTS !== "undefined" ? ENG_PROJECTS : []).map((p) => `
    <article class="eng-proj reveal in">
      <div class="eng-proj__media">
        <span class="eng-proj__icon">${p.icon || "🏗️"}</span>
        ${p.img ? `<img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'">` : ""}
        <span class="eng-proj__tag">${p.tag || ""}</span>
      </div>
      <div class="eng-proj__body">
        <h3 class="eng-proj__title">${p.title}</h3>
        <div class="eng-proj__loc">${p.loc || ""}</div>
        <p class="card__text">${p.note || ""}</p>
      </div>
    </article>`).join("");

  // Ders notları kartları
  const courses = (typeof COURSES !== "undefined" ? COURSES : []).map((c) => `
    <a class="card feature reveal in ${c.soon ? "card--soon" : ""}" href="${c.soon ? "muhendislik.html#" : "ders.html?id=" + c.id}"${c.soon ? ' onclick="return false"' : ""}>
      <div class="feature__icon">📚</div>
      <div class="card__title">${c.title}</div>
      <p class="card__text">${c.subtitle || ""}</p>
      <span class="feature__arrow">${c.soon ? "Hazırlanıyor" : (c.topics ? c.topics.length : 0) + " konu →"}</span>
    </a>`).join("");

  function section(eyebrow, title, desc, inner, gridClass = "grid grid--3") {
    return `
      <div class="eng-section">
        <div class="section__head">
          <span class="eyebrow">// ${eyebrow}</span>
          <h2 class="section__title">${title}</h2>
          ${desc ? `<p class="section__desc">${desc}</p>` : ""}
        </div>
        <div class="${gridClass}">${inner}</div>
      </div>`;
  }

  wrap.innerHTML =
    section("ders notları", "Ders Notları", "Statik, Mukavemet ve Betonarme — özet, formül ve örneklerle.", courses) +
    section("teori", "Mühendislik Teorileri", "Hangi teori neye yarar?", theories) +
    section("çelik", "Çelik Yapılar", "Çelikte bilinmesi gerekenler.", topicCards(typeof ENG_STEEL !== "undefined" ? ENG_STEEL : [])) +
    section("çatı", "Çatılarda Bilinmesi Gerekenler", "Su, yük, yalıtım ve havalandırma.", topicCards(typeof ENG_ROOF !== "undefined" ? ENG_ROOF : [])) +
    section("izolasyon", "İzolasyonun Önemi", "Enerji, konfor ve yapı ömrü.", topicCards(typeof ENG_INSULATION !== "undefined" ? ENG_INSULATION : [])) +
    section("projeler", "Dünyadan Dev Projeler", "Mühendisliğin sınırlarını zorlayan yapılar.", projects, "grid grid--3 eng-projects");
})();
