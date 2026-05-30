/* =========================================================
   Tavla Zarı — 2 oyunculu zar atıcı
   - Sınırsız atış
   - Her oyuncu kendi zar rengini seçer
   - Atış geçmişi + atılan zarlara göre kazanma oranı
   ========================================================= */
(function () {
  // Zar renkleri (zemin gradyanı + nokta rengi)
  const COLORS = [
    { id: "siyah",   name: "Siyah",   bg: "linear-gradient(145deg,#3b4150,#11141d)", pip: "#f2f4fa" },
    { id: "beyaz",   name: "Beyaz",   bg: "linear-gradient(145deg,#ffffff,#d7ddec)", pip: "#1a1f2e" },
    { id: "kirmizi", name: "Kırmızı", bg: "linear-gradient(145deg,#ff7a6e,#c0392b)", pip: "#ffffff" },
    { id: "mavi",    name: "Mavi",    bg: "linear-gradient(145deg,#7d9bff,#2c4fb0)", pip: "#ffffff" },
    { id: "ahsap",   name: "Ahşap",   bg: "linear-gradient(145deg,#d8ab78,#a9794a)", pip: "#2a1c10" },
  ];

  // Bir yüzdeki nokta yerleşimleri (3x3 ızgara indexleri)
  const PIPS = {
    1: [4], 2: [0, 8], 3: [0, 4, 8],
    4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8],
  };

  const rnd = () => 1 + Math.floor(Math.random() * 6);

  function drawDie(el, face, color) {
    el.style.background = color.bg;
    el.innerHTML = Array.from({ length: 9 }, (_, i) => {
      const on = PIPS[face].includes(i);
      return `<span class="pip ${on ? "pip--on" : ""}"${on ? ` style="background:${color.pip}"` : ""}></span>`;
    }).join("");
  }

  function makePlayer(root, onChange) {
    const dice      = root.querySelectorAll("[data-die]");
    const rollBtn   = root.querySelector("[data-roll]");
    const colorsEl  = root.querySelector("[data-colors]");
    const lastEl    = root.querySelector("[data-last]");
    const rollsEl   = root.querySelector("[data-rolls]");
    const avgEl     = root.querySelector("[data-avg]");
    const maxEl     = root.querySelector("[data-max]");
    const historyEl = root.querySelector("[data-history]");
    const nameEl    = root.querySelector("[data-name]");

    let color = COLORS.find((c) => c.id === root.dataset.default) || COLORS[0];
    let history = [];   // { a, b, sum }
    let rolling = false;

    function lastFaces() {
      const h = history[history.length - 1];
      return h ? [h.a, h.b] : [1, 1];
    }
    function drawBoth(a, b) { drawDie(dice[0], a, color); drawDie(dice[1], b, color); }

    function renderColors() {
      colorsEl.innerHTML = COLORS.map((c) =>
        `<button class="swatch ${c.id === color.id ? "swatch--on" : ""}" data-c="${c.id}" title="${c.name}" style="background:${c.bg}"></button>`
      ).join("");
      colorsEl.querySelectorAll(".swatch").forEach((b) =>
        b.addEventListener("click", () => {
          color = COLORS.find((c) => c.id === b.dataset.c);
          renderColors();
          drawBoth(...lastFaces());
        })
      );
    }

    function refreshStats() {
      const n = history.length;
      const sum = history.reduce((s, h) => s + h.sum, 0);
      const avg = n ? sum / n : 0;
      const max = n ? Math.max(...history.map((h) => h.sum)) : 0;
      rollsEl.textContent = n;
      avgEl.textContent = n ? avg.toFixed(1) : "0";
      maxEl.textContent = max;
      return { n, avg };
    }

    function renderHistory() {
      historyEl.innerHTML = history.slice(-14).reverse().map((h) =>
        `<span class="hchip ${h.a === h.b ? "hchip--dbl" : ""}">${h.a}+${h.b}=<b>${h.sum}</b></span>`
      ).join("");
    }

    function roll() {
      if (rolling) return;
      rolling = true;
      rollBtn.disabled = true;
      dice.forEach((d) => d.classList.add("rolling"));
      lastEl.textContent = "Yuvarlanıyor...";
      lastEl.className = "zar__msg";

      const spin = setInterval(() => drawBoth(rnd(), rnd()), 70);
      setTimeout(() => {
        clearInterval(spin);
        const a = rnd(), b = rnd();
        drawBoth(a, b);
        dice.forEach((d) => d.classList.remove("rolling"));
        const sum = a + b, dbl = a === b;
        history.push({ a, b, sum });
        lastEl.textContent = dbl ? `✨ ÇİFT! ${a}+${b} = ${sum}` : `${a} + ${b} = ${sum}`;
        lastEl.className = "zar__msg" + (dbl ? " zar__msg--win" : "");
        refreshStats();
        renderHistory();
        rolling = false;
        rollBtn.disabled = false;
        onChange();
      }, 800);
    }

    function reset() {
      history = [];
      rolling = false;
      rollBtn.disabled = false;
      drawBoth(1, 1);
      lastEl.textContent = "Hazır";
      lastEl.className = "zar__msg";
      refreshStats();
      renderHistory();
    }

    rollBtn.addEventListener("click", roll);
    nameEl.addEventListener("input", onChange);
    renderColors();
    drawBoth(1, 1);
    refreshStats();

    return { roll, reset, getStats: refreshStats, getName: () => nameEl.value.trim() || "Oyuncu" };
  }

  const roots = document.querySelectorAll(".player");
  if (roots.length < 2) return;

  // Kazanma oranı çubuğu
  const w1fill = document.getElementById("w1-fill");
  const w2fill = document.getElementById("w2-fill");
  const w1pct  = document.getElementById("w1-pct");
  const w2pct  = document.getElementById("w2-pct");
  const w1name = document.getElementById("w1-name");
  const w2name = document.getElementById("w2-name");

  function updateWin() {
    const a = p1.getStats().avg, b = p2.getStats().avg;
    let p1Pct = 50;
    if (a + b > 0) p1Pct = Math.round((a / (a + b)) * 100);
    const p2Pct = 100 - p1Pct;
    w1fill.style.width = p1Pct + "%";
    w2fill.style.width = p2Pct + "%";
    w1pct.textContent = p1Pct + "%";
    w2pct.textContent = p2Pct + "%";
    w1name.textContent = p1.getName();
    w2name.textContent = p2.getName();
  }

  const p1 = makePlayer(roots[0], updateWin);
  const p2 = makePlayer(roots[1], updateWin);
  updateWin();

  document.getElementById("z-reset").addEventListener("click", () => {
    p1.reset(); p2.reset(); updateWin();
  });

  // Klavye kısayolları: 1 → oyuncu 1, 2 → oyuncu 2
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input")) return;
    if (e.key === "1") p1.roll();
    if (e.key === "2") p2.roll();
  });
})();
