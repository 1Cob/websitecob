/* =========================================================
   Galeri ızgarası + lightbox
   ========================================================= */
(function () {
  const grid = document.getElementById("gallery");
  const emptyEl = document.getElementById("empty");
  if (!grid || typeof GALLERY === "undefined") return;

  if (!GALLERY.length) { emptyEl.style.display = "block"; return; }

  grid.innerHTML = GALLERY.map((g, i) => `
    <button class="gallery__item reveal in" data-i="${i}">
      <img src="${g.src}" alt="${g.caption || ""}" loading="lazy" />
      ${g.caption ? `<span class="gallery__cap">${g.caption}</span>` : ""}
    </button>
  `).join("");

  // --- Lightbox ---
  const lb     = document.getElementById("lightbox");
  const lbImg  = document.getElementById("lb-img");
  const lbCap  = document.getElementById("lb-cap");
  const closeB = document.getElementById("lb-close");
  const prevB  = document.getElementById("lb-prev");
  const nextB  = document.getElementById("lb-next");
  let idx = 0;

  function show(i) {
    idx = (i + GALLERY.length) % GALLERY.length;
    const g = GALLERY[idx];
    lbImg.src = g.src;
    lbImg.alt = g.caption || "";
    lbCap.textContent = g.caption || "";
  }
  function open(i) { show(i); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); }
  function close() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); }

  grid.querySelectorAll(".gallery__item").forEach((btn) =>
    btn.addEventListener("click", () => open(Number(btn.dataset.i)))
  );
  closeB.addEventListener("click", close);
  prevB.addEventListener("click", () => show(idx - 1));
  nextB.addEventListener("click", () => show(idx + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
})();
