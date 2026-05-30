/* =========================================================
   Ders notu okuma sayfası — ?id= ile COURSES'tan bulur
   ========================================================= */
(function () {
  const el = document.getElementById("ders");
  if (!el || typeof COURSES === "undefined") return;

  const id = new URLSearchParams(location.search).get("id");
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    el.innerHTML = `
      <a class="article__back" href="muhendislik.html">← Mühendislik</a>
      <div class="article__head"><h1>Ders bulunamadı</h1>
      <p style="color:var(--text-dim)">Bu ders henüz eklenmemiş olabilir.</p></div>`;
    document.title = "Bulunamadı — COB";
    return;
  }

  document.title = `${course.title} — COB`;

  const slug = (s, i) => "k" + i;

  if (course.soon || !course.topics || !course.topics.length) {
    el.innerHTML = `
      <a class="article__back" href="muhendislik.html">← Mühendislik</a>
      <div class="ders__head">
        <span class="eyebrow">// ders notu</span>
        <h1 class="ders__title">${course.title}</h1>
        <p class="ders__sub">${course.subtitle || ""}</p>
      </div>
      <div class="ders__soon">
        <p>🛠️ Bu dersin notları hazırlanıyor.</p>
        <p style="color:var(--text-dim)">Planlanan konular: ${course.subtitle || ""}.</p>
      </div>`;
    return;
  }

  const toc = course.topics.map((t, i) =>
    `<li><a href="#${slug(t.title, i)}">${i + 1}. ${t.title}</a></li>`).join("");

  const sections = course.topics.map((t, i) => `
    <section class="ders__topic" id="${slug(t.title, i)}">
      <h2 class="ders__h2"><span class="ders__num">${i + 1}</span> ${t.title}</h2>
      ${t.body}
    </section>`).join("");

  el.innerHTML = `
    <a class="article__back" href="muhendislik.html">← Mühendislik</a>
    <div class="ders__head">
      <span class="eyebrow">// ders notu · ${course.topics.length} konu</span>
      <h1 class="ders__title">${course.title}</h1>
      <p class="ders__sub">${course.subtitle || ""}</p>
    </div>
    <nav class="ders__toc">
      <div class="ders__toc-title">İçindekiler</div>
      <ol>${toc}</ol>
    </nav>
    ${sections}
    <a class="article__back" href="muhendislik.html" style="margin-top:30px;display:inline-block;">← Mühendislik</a>`;
})();
