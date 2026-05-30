/* =========================================================
   Tetris — canvas tabanlı klasik
   ========================================================= */
(function () {
  const canvas = document.getElementById("board");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const nextCanvas = document.getElementById("next");
  const nctx = nextCanvas.getContext("2d");

  const COLS = 10, ROWS = 20, CELL = 33;
  const scoreEl = document.getElementById("t-score");
  const linesEl = document.getElementById("t-lines");
  const levelEl = document.getElementById("t-level");
  const bestEl  = document.getElementById("t-best");
  const msgEl   = document.getElementById("t-msg");
  const startBtn= document.getElementById("t-start");

  const COLORS = {
    I: "#38e1c4", J: "#6c8cff", L: "#ff9f43",
    O: "#ffd166", S: "#06d6a0", T: "#c77dff", Z: "#ff6b9d",
  };
  const SHAPES = {
    I: [[1, 1, 1, 1]],
    J: [[1, 0, 0], [1, 1, 1]],
    L: [[0, 0, 1], [1, 1, 1]],
    O: [[1, 1], [1, 1]],
    S: [[0, 1, 1], [1, 1, 0]],
    T: [[0, 1, 0], [1, 1, 1]],
    Z: [[1, 1, 0], [0, 1, 1]],
  };
  const TYPES = Object.keys(SHAPES);

  const BEST_KEY = "tetris_best";
  let grid, current, next, pos, score, lines, level, dropMs, lastTime, acc, running, raf;
  let best = Number(localStorage.getItem(BEST_KEY) || 0);
  bestEl.textContent = best;

  function newGrid() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  }
  function randPiece() {
    const t = TYPES[Math.floor(Math.random() * TYPES.length)];
    return { type: t, shape: SHAPES[t].map((r) => r.slice()) };
  }
  function rotate(shape) {
    const rows = shape.length, cols = shape[0].length;
    const res = Array.from({ length: cols }, () => Array(rows).fill(0));
    for (let y = 0; y < rows; y++)
      for (let x = 0; x < cols; x++)
        res[x][rows - 1 - y] = shape[y][x];
    return res;
  }
  function collides(shape, p) {
    for (let y = 0; y < shape.length; y++)
      for (let x = 0; x < shape[y].length; x++) {
        if (!shape[y][x]) continue;
        const nx = p.x + x, ny = p.y + y;
        if (nx < 0 || nx >= COLS || ny >= ROWS) return true;
        if (ny >= 0 && grid[ny][nx]) return true;
      }
    return false;
  }
  function merge() {
    current.shape.forEach((row, y) => row.forEach((v, x) => {
      if (v) {
        const ny = pos.y + y, nx = pos.x + x;
        if (ny >= 0) grid[ny][nx] = current.type;
      }
    }));
  }
  function clearLines() {
    let cleared = 0;
    for (let y = ROWS - 1; y >= 0; y--) {
      if (grid[y].every((c) => c)) {
        grid.splice(y, 1);
        grid.unshift(Array(COLS).fill(null));
        cleared++;
        y++;
      }
    }
    if (cleared) {
      const pts = [0, 100, 300, 500, 800][cleared] * level;
      score += pts;
      lines += cleared;
      level = 1 + Math.floor(lines / 10);
      dropMs = Math.max(80, 800 - (level - 1) * 70);
      scoreEl.textContent = score;
      linesEl.textContent = lines;
      levelEl.textContent = level;
    }
  }
  function spawn() {
    current = next || randPiece();
    next = randPiece();
    pos = { x: Math.floor((COLS - current.shape[0].length) / 2), y: -1 };
    drawNext();
    if (collides(current.shape, pos)) endGame();
  }
  function endGame() {
    running = false;
    cancelAnimationFrame(raf);
    if (score > best) {
      best = score; localStorage.setItem(BEST_KEY, best); bestEl.textContent = best;
      msgEl.textContent = `🏆 Yeni rekor: ${score}!`;
    } else {
      msgEl.textContent = `Oyun bitti! Skor: ${score}`;
    }
    startBtn.textContent = "Tekrar Oyna";
    startBtn.disabled = false;
  }

  function drop() {
    const np = { x: pos.x, y: pos.y + 1 };
    if (collides(current.shape, np)) {
      merge();
      clearLines();
      spawn();
    } else {
      pos = np;
    }
  }
  function move(dx) {
    const np = { x: pos.x + dx, y: pos.y };
    if (!collides(current.shape, np)) pos = np;
  }
  function tryRotate() {
    const r = rotate(current.shape);
    // duvar itme (wall kick) basit deneme
    for (const dx of [0, -1, 1, -2, 2]) {
      if (!collides(r, { x: pos.x + dx, y: pos.y })) {
        current.shape = r; pos.x += dx; return;
      }
    }
  }
  function hardDrop() {
    while (!collides(current.shape, { x: pos.x, y: pos.y + 1 })) pos.y++;
    drop();
  }

  function cell(x, y, color, ctx2 = ctx, size = CELL) {
    ctx2.fillStyle = color;
    ctx2.fillRect(x * size + 1, y * size + 1, size - 2, size - 2);
    ctx2.fillStyle = "rgba(255,255,255,0.12)";
    ctx2.fillRect(x * size + 1, y * size + 1, size - 2, 4);
  }
  function draw() {
    ctx.fillStyle = "#0c0f17";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ızgara çizgileri
    ctx.strokeStyle = "rgba(40,49,83,0.4)";
    for (let x = 0; x <= COLS; x++) { ctx.beginPath(); ctx.moveTo(x * CELL, 0); ctx.lineTo(x * CELL, canvas.height); ctx.stroke(); }
    for (let y = 0; y <= ROWS; y++) { ctx.beginPath(); ctx.moveTo(0, y * CELL); ctx.lineTo(canvas.width, y * CELL); ctx.stroke(); }
    // yerleşmiş bloklar
    grid.forEach((row, y) => row.forEach((t, x) => { if (t) cell(x, y, COLORS[t]); }));
    // aktif parça
    if (current) current.shape.forEach((row, y) => row.forEach((v, x) => {
      if (v && pos.y + y >= 0) cell(pos.x + x, pos.y + y, COLORS[current.type]);
    }));
  }
  function drawNext() {
    nctx.fillStyle = "#0c0f17";
    nctx.fillRect(0, 0, nextCanvas.width, nextCanvas.height);
    if (!next) return;
    const s = next.shape, size = 12;
    const ox = (nextCanvas.width - s[0].length * size) / 2;
    const oy = (nextCanvas.height - s.length * size) / 2;
    s.forEach((row, y) => row.forEach((v, x) => {
      if (v) {
        nctx.fillStyle = COLORS[next.type];
        nctx.fillRect(ox + x * size + 1, oy + y * size + 1, size - 2, size - 2);
      }
    }));
  }

  function loop(time) {
    if (!running) return;
    if (!lastTime) lastTime = time;
    acc += time - lastTime;
    lastTime = time;
    if (acc > dropMs) { drop(); acc = 0; }
    draw();
    raf = requestAnimationFrame(loop);
  }

  function start() {
    grid = newGrid();
    score = 0; lines = 0; level = 1; dropMs = 800;
    acc = 0; lastTime = 0; running = true;
    next = randPiece();
    scoreEl.textContent = 0; linesEl.textContent = 0; levelEl.textContent = 1;
    msgEl.textContent = "Bol şans!";
    startBtn.textContent = "Yeniden";
    spawn();
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(loop);
  }

  document.addEventListener("keydown", (e) => {
    if (!running) return;
    switch (e.code) {
      case "ArrowLeft":  e.preventDefault(); move(-1); draw(); break;
      case "ArrowRight": e.preventDefault(); move(1); draw(); break;
      case "ArrowUp":    e.preventDefault(); tryRotate(); draw(); break;
      case "ArrowDown":  e.preventDefault(); drop(); acc = 0; draw(); break;
      case "Space":      e.preventDefault(); hardDrop(); draw(); break;
    }
  });

  startBtn.addEventListener("click", start);

  // ilk çizim (boş tahta)
  grid = newGrid();
  draw();
})();
