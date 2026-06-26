/* =========================================================
   3B arka plan — dönen nokta-ağı (network), scroll + fare etkili
   - Harici kütüphane yok (saf canvas), hafif ve performanslı
   - Tüm sayfada sabit, SPA'da kalıcı (data-persist)
   - prefers-reduced-motion: hareketi durdurur
   ========================================================= */
(function () {
  if (window.__bg) return;
  window.__bg = true;

  const canvas = document.createElement("canvas");
  canvas.id = "bg-canvas";
  canvas.setAttribute("data-persist", "");
  canvas.setAttribute("aria-hidden", "true");
  (document.body || document.documentElement).appendChild(canvas);
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  let W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
  const small = innerWidth < 768;
  const COUNT = small ? 46 : 92;       // nokta sayısı
  const LINK = small ? 95 : 125;       // bağlantı çizgisi mesafesi (px)
  let pts = [];

  function resize() {
    W = innerWidth; H = innerHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  function init() {
    pts = [];
    for (let i = 0; i < COUNT; i++) {
      pts.push({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: Math.random() * 2 - 1 });
    }
  }
  resize(); init();
  window.addEventListener("resize", () => { DPR = Math.min(window.devicePixelRatio || 1, 2); resize(); });

  // yumuşatılmış kontrol değerleri
  let ay = 0;                 // otomatik dönüş
  let scrollN = 0, scrollT = 0;
  let mx = 0, my = 0, mxT = 0, myT = 0;

  window.addEventListener("scroll", () => {
    const max = (document.documentElement.scrollHeight - innerHeight) || 1;
    scrollT = Math.min(1, Math.max(0, window.scrollY / max));
  }, { passive: true });
  window.addEventListener("pointermove", (e) => {
    mxT = e.clientX / innerWidth - 0.5;
    myT = e.clientY / innerHeight - 0.5;
  }, { passive: true });

  function frame() {
    ay += 0.0009;
    scrollN += (scrollT - scrollN) * 0.06;
    mx += (mxT - mx) * 0.05;
    my += (myT - my) * 0.05;

    const angY = ay + mx * 0.6;
    const angX = scrollN * 1.4 + my * 0.4 - 0.2;   // scroll → eğim
    const cy = Math.cos(angY), sy = Math.sin(angY);
    const cx = Math.cos(angX), sx = Math.sin(angX);
    const scale = Math.min(W, H) * 0.45;

    ctx.clearRect(0, 0, W, H);

    const proj = new Array(pts.length);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      let x = p.x * cy - p.z * sy;
      let z = p.x * sy + p.z * cy;
      let y2 = p.y * cx - z * sx;
      let z2 = p.y * sx + z * cx;
      const persp = 2.4 / (2.4 + z2);
      proj[i] = { x: W / 2 + x * scale * persp, y: H / 2 + y2 * scale * persp, s: persp };
    }

    // bağlantı çizgileri
    for (let i = 0; i < proj.length; i++) {
      for (let j = i + 1; j < proj.length; j++) {
        const dx = proj[i].x - proj[j].x, dy = proj[i].y - proj[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK) {
          const a = (1 - d / LINK) * 0.20 * ((proj[i].s + proj[j].s) / 2);
          ctx.strokeStyle = "rgba(108,140,255," + a.toFixed(3) + ")";
          ctx.beginPath();
          ctx.moveTo(proj[i].x, proj[i].y);
          ctx.lineTo(proj[j].x, proj[j].y);
          ctx.stroke();
        }
      }
    }
    // noktalar
    for (let i = 0; i < proj.length; i++) {
      const p = proj[i];
      ctx.fillStyle = "rgba(56,225,196," + (0.55 * p.s).toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.6, p.s * 1.8), 0, Math.PI * 2);
      ctx.fill();
    }

    if (!reduce) requestAnimationFrame(frame);
  }
  frame();
})();
