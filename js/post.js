/* =========================================================
   Tek yazı okuma sayfası — ?id= ile yazıyı bulur
   ========================================================= */
(function () {
  const el = document.getElementById("post");
  if (!el || typeof POSTS === "undefined") return;

  const id = new URLSearchParams(location.search).get("id");
  const post = POSTS.find((p) => p.id === id);

  const fmt = (iso) => {
    try {
      return new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul" });
    } catch { return iso; }
  };

  if (!post) {
    el.innerHTML = `
      <div class="article__head">
        <h1>Yazı bulunamadı</h1>
        <p style="color:var(--text-dim)">Aradığın yazı taşınmış ya da silinmiş olabilir.</p>
        <a class="btn btn--primary" href="blog.html">← Tüm yazılar</a>
      </div>`;
    document.title = "Bulunamadı — COB";
    return;
  }

  document.title = `${post.title} — COB`;

  // okuma süresi tahmini
  const words = post.content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));

  el.innerHTML = `
    <a class="article__back" href="blog.html">← Tüm yazılar</a>
    <div class="article__head">
      <span class="card__tag">${post.tag}</span>
      <h1 class="article__title">${post.title}</h1>
      <div class="article__meta">${fmt(post.date)} · ${mins} dk okuma</div>
    </div>
    ${post.cover ? `<img class="article__cover" src="${post.cover}" alt="">` : ""}
    <div class="article__body">${post.content}</div>
  `;
})();
