/* =========================================================
   Yılan (Snake)
   ========================================================= */
(function () {
  const canvas = document.getElementById("snake");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const scoreEl = document.getElementById("s-score");
  const bestEl  = document.getElementById("s-best");
  const msgEl   = document.getElementById("s-msg");
  const startBtn= document.getElementById("s-start");

  const CELL = 22, COLS = canvas.width / CELL, ROWS = canvas.height / CELL;
  const BEST_KEY = "yilan_best";
  let best = Number(localStorage.getItem(BEST_KEY) || 0);
  bestEl.textContent = best;

  let snake, dir, nextDir, food, score, running, timer, speed;

  function placeFood() {
    do {
      food = { x: (Math.random() * COLS) | 0, y: (Math.random() * ROWS) | 0 };
    } while (snake.some((s) => s.x === food.x && s.y === food.y));
  }

  function reset() {
    snake = [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }];
    dir = { x: 1, y: 0 };
    nextDir = dir;
    score = 0; speed = 130;
    scoreEl.textContent = 0;
    placeFood();
    draw();
  }

  function cell(x, y, color, r = 5) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(x * CELL + 1, y * CELL + 1, CELL - 2, CELL - 2, r);
    ctx.fill();
  }

  function draw() {
    ctx.fillStyle = "#0c0f17";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(40,49,83,0.35)";
    for (let i = 0; i <= COLS; i++) { ctx.beginPath(); ctx.moveTo(i * CELL, 0); ctx.lineTo(i * CELL, canvas.height); ctx.stroke(); }
    for (let j = 0; j <= ROWS; j++) { ctx.beginPath(); ctx.moveTo(0, j * CELL); ctx.lineTo(canvas.width, j * CELL); ctx.stroke(); }
    // yem
    cell(food.x, food.y, "#ff6b9d", 11);
    // yılan
    snake.forEach((s, i) => cell(s.x, s.y, i === 0 ? "#38e1c4" : "#6c8cff"));
  }

  function step() {
    dir = nextDir;
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
    // duvar / kendine çarpma
    if (head.x < 0 || head.y < 0 || head.x >= COLS || head.y >= ROWS ||
        snake.some((s) => s.x === head.x && s.y === head.y)) {
      return gameOver();
    }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      scoreEl.textContent = score;
      placeFood();
      if (speed > 60) { speed -= 3; clearInterval(timer); timer = setInterval(step, speed); }
    } else {
      snake.pop();
    }
    draw();
  }

  function start() {
    reset();
    running = true;
    msgEl.textContent = "Bol şans!";
    startBtn.textContent = "Yeniden";
    clearInterval(timer);
    timer = setInterval(step, speed);
  }

  function gameOver() {
    running = false;
    clearInterval(timer);
    if (score > best) {
      best = score; localStorage.setItem(BEST_KEY, best); bestEl.textContent = best;
      msgEl.textContent = `🏆 Yeni rekor: ${score}!`;
    } else {
      msgEl.textContent = `Oyun bitti! Skor: ${score}`;
    }
    startBtn.textContent = "Tekrar Oyna";
  }

  const KEYS = {
    ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 },
    KeyW: { x: 0, y: -1 }, KeyS: { x: 0, y: 1 },
    KeyA: { x: -1, y: 0 }, KeyD: { x: 1, y: 0 },
  };
  document.addEventListener("keydown", (e) => {
    const d = KEYS[e.code];
    if (!d || !running) return;
    e.preventDefault();
    // 180° dönüşe izin verme
    if (d.x === -dir.x && d.y === -dir.y) return;
    nextDir = d;
  });

  startBtn.addEventListener("click", start);
  reset();
})();
