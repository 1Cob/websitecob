/* =========================================================
   Ortak site davranışları
   (IIFE ile sarılı — SPA her geçişte güvenle yeniden çalıştırır)
   ========================================================= */
(function () {
  const TZ = "Europe/Istanbul";

  // --- Yıl (Türkiye saatine göre) ---
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().toLocaleDateString("tr-TR", { year: "numeric", timeZone: TZ });
  }

  // --- Mobil menü ---
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  // --- Tarih biçimlendirme (TR, Türkiye saat dilimi) ---
  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleDateString("tr-TR", {
        day: "numeric", month: "long", year: "numeric", timeZone: TZ,
      });
    } catch { return iso; }
  }

  // --- Anasayfa: son yazılar ---
  const latestEl = document.getElementById("latest-posts");
  if (latestEl && typeof POSTS !== "undefined") {
    const recent = [...POSTS]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
    latestEl.innerHTML = recent.map((p) => `
      <article class="card reveal">
        <span class="card__tag">${p.tag}</span>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__text">${p.excerpt}</p>
        <div class="card__meta">${formatDate(p.date)}</div>
      </article>
    `).join("");
  }

  // --- Scroll reveal animasyonu ---
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // --- Footer: canlı Türkiye tarih-saati ---
  const host = document.querySelector(".footer__inner");
  if (host) {
    let clock = host.querySelector(".tr-clock");
    if (!clock) {
      clock = document.createElement("div");
      clock.className = "tr-clock";
      host.appendChild(clock);
    }
    const tick = () => {
      clock.textContent = "🇹🇷 " + new Date().toLocaleString("tr-TR", {
        timeZone: TZ, dateStyle: "medium", timeStyle: "medium",
      });
    };
    tick();
    clearInterval(window.__cobClock);          // SPA geçişinde eski sayacı temizle
    window.__cobClock = setInterval(tick, 1000);
  }
})();
