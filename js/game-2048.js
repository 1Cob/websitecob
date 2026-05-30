/* =========================================================
   2048
   ========================================================= */
(function () {
  const boardEl = document.getElementById("board");
  if (!boardEl) return;
  const gridEl  = document.getElementById("grid");
  const tilesEl = document.getElementById("tiles");
  const scoreEl = document.getElementById("g-score");
  const bestEl  = document.getElementById("g-best");
  const overEl  = document.getElementById("over");
  const overMsg = document.getElementById("over-msg");

  const N = 4;
  const BEST_KEY = "g2048_best";
  let best = Number(localStorage.getItem(BEST_KEY) || 0);
  bestEl.textContent = best;

  let grid, score, busy;

  // Arka plan kareleri
  gridEl.innerHTML = "";
  for (let i = 0; i < N * N; i++) {
    const c = document.createElement("div");
    c.className = "g2048__cell";
    gridEl.appendChild(c);
  }

  const empty = () => {
    const cells = [];
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!grid[r][c]) cells.push([r, c]);
    return cells;
  };
  function addTile() {
    const cells = empty();
    if (!cells.length) return;
    const [r, c] = cells[(Math.random() * cells.length) | 0];
    grid[r][c] = Math.random() < 0.9 ? 2 : 4;
  }

  function render() {
    tilesEl.innerHTML = "";
    const size = boardEl.clientWidth;
    const gap = size * 0.03;
    const cell = (size - gap * (N + 1)) / N;
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      const v = grid[r][c];
      if (!v) continue;
      const t = document.createElement("div");
      t.className = "g2048__tile v" + (v > 2048 ? "big" : v);
      t.textContent = v;
      t.style.width = t.style.height = cell + "px";
      t.style.left = gap + c * (cell + gap) + "px";
      t.style.top = gap + r * (cell + gap) + "px";
      tilesEl.appendChild(t);
    }
    scoreEl.textContent = score;
  }

  // Bir satırı sola kaydır+birleştir
  function slide(row) {
    let arr = row.filter((v) => v);
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) { arr[i] *= 2; score += arr[i]; arr.splice(i + 1, 1); }
    }
    while (arr.length < N) arr.push(0);
    return arr;
  }
  const transpose = (g) => g[0].map((_, c) => g.map((row) => row[c]));
  const mirror = (g) => g.map((row) => row.slice().reverse());

  function move(dir) {
    if (busy) return;
    const before = JSON.stringify(grid);
    // her yönü "sola kaydır" mantığına indirgeyerek çöz
    let g = grid.map((r) => r.slice());
    if (dir === "up")        { g = transpose(g); g = g.map(slide); g = transpose(g); }
    else if (dir === "down") { g = transpose(g); g = mirror(g); g = g.map(slide); g = mirror(g); g = transpose(g); }
    else if (dir === "left") { g = g.map(slide); }
    else if (dir === "right"){ g = mirror(g); g = g.map(slide); g = mirror(g); }
    grid = g;

    if (JSON.stringify(grid) !== before) {
      addTile();
      render();
      if (score > best) { best = score; localStorage.setItem(BEST_KEY, best); bestEl.textContent = best; }
      checkEnd();
    }
  }

  function movesLeft() {
    if (empty().length) return true;
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      if (c < N - 1 && grid[r][c] === grid[r][c + 1]) return true;
      if (r < N - 1 && grid[r][c] === grid[r + 1][c]) return true;
    }
    return false;
  }
  function checkEnd() {
    const won = grid.flat().includes(2048);
    if (won) { overMsg.textContent = "🎉 2048! Kazandın!"; overEl.classList.add("show"); }
    else if (!movesLeft()) { overMsg.textContent = "Oyun bitti!"; overEl.classList.add("show"); }
  }

  function newGame() {
    grid = Array.from({ length: N }, () => Array(N).fill(0));
    score = 0; busy = false;
    overEl.classList.remove("show");
    addTile(); addTile();
    render();
  }

  document.addEventListener("keydown", (e) => {
    const map = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" };
    if (map[e.code]) { e.preventDefault(); move(map[e.code]); }
  });

  // dokunmatik kaydırma
  let sx, sy;
  boardEl.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  boardEl.addEventListener("touchend", (e) => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
    move(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up"));
    sx = sy = null;
  });

  document.getElementById("g-new").addEventListener("click", newGame);
  document.getElementById("g-retry").addEventListener("click", newGame);
  window.addEventListener("resize", () => grid && render());

  newGame();
})();
