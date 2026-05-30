/* =========================================================
   Mayın Tarlası (Minesweeper)
   ========================================================= */
(function () {
  const boardEl = document.getElementById("board");
  if (!boardEl) return;
  const minesEl = document.getElementById("m-mines");
  const timeEl  = document.getElementById("m-time");
  const msgEl   = document.getElementById("m-msg");
  const levelEl = document.getElementById("m-level");
  const flagBtn = document.getElementById("m-flag");

  const LEVELS = { easy: { n: 9, m: 10 }, medium: { n: 16, m: 40 } };
  const NUM_COLORS = ["", "#6c8cff", "#38e1c4", "#ff6b9d", "#ffd166", "#ff9f43", "#a05cff", "#e7ecf5", "#9aa6c4"];

  let N, M, cells, revealedCount, flags, over, started, timer, seconds, flagMode = false;

  function reset() {
    const L = LEVELS[levelEl.value];
    N = L.n; M = L.m;
    cells = [];
    revealedCount = 0; flags = 0; over = false; started = false; seconds = 0;
    minesEl.textContent = M; timeEl.textContent = "0"; msgEl.textContent = "";
    clearInterval(timer);

    boardEl.style.setProperty("--n", N);
    boardEl.innerHTML = "";
    for (let i = 0; i < N * N; i++) {
      const c = { mine: false, revealed: false, flag: false, around: 0, i };
      const el = document.createElement("button");
      el.className = "mcell";
      el.dataset.i = i;
      c.el = el;
      cells.push(c);
      boardEl.appendChild(el);
    }
  }

  function neighbors(i) {
    const r = (i / N) | 0, c = i % N, out = [];
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
      if (!dr && !dc) continue;
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < N && nc >= 0 && nc < N) out.push(nr * N + nc);
    }
    return out;
  }

  function placeMines(safe) {
    const pool = [];
    for (let i = 0; i < N * N; i++) if (i !== safe) pool.push(i);
    for (let k = 0; k < M; k++) {
      const j = (Math.random() * pool.length) | 0;
      cells[pool[j]].mine = true;
      pool.splice(j, 1);
    }
    cells.forEach((c, i) => { c.around = neighbors(i).filter((n) => cells[n].mine).length; });
  }

  function startTimer() {
    started = true;
    timer = setInterval(() => { seconds++; timeEl.textContent = seconds; }, 1000);
  }

  function reveal(i) {
    const c = cells[i];
    if (c.revealed || c.flag || over) return;
    c.revealed = true; revealedCount++;
    c.el.classList.add("open");
    if (c.mine) { c.el.classList.add("mine"); c.el.textContent = "💣"; return boom(); }
    if (c.around) {
      c.el.textContent = c.around;
      c.el.style.color = NUM_COLORS[c.around];
    } else {
      neighbors(i).forEach(reveal);   // boş kareleri yay
    }
    if (revealedCount === N * N - M) win();
  }

  function toggleFlag(i) {
    const c = cells[i];
    if (c.revealed || over) return;
    c.flag = !c.flag;
    c.el.classList.toggle("flag", c.flag);
    c.el.textContent = c.flag ? "🚩" : "";
    flags += c.flag ? 1 : -1;
    minesEl.textContent = M - flags;
  }

  function boom() {
    over = true; clearInterval(timer);
    cells.forEach((c) => { if (c.mine && !c.flag) { c.el.classList.add("open", "mine"); c.el.textContent = "💣"; } });
    msgEl.textContent = "💥 Mayına bastın! Tekrar dene.";
  }
  function win() {
    over = true; clearInterval(timer);
    const key = "mayin_best_" + levelEl.value;
    const prev = Number(localStorage.getItem(key) || 0);
    let rec = "";
    if (!prev || seconds < prev) { localStorage.setItem(key, seconds); rec = " 🏆 En iyi süren!"; }
    msgEl.textContent = `🎉 Kazandın! Süre: ${seconds}sn.${rec}`;
  }

  boardEl.addEventListener("click", (e) => {
    const el = e.target.closest(".mcell"); if (!el) return;
    const i = Number(el.dataset.i);
    if (!started) { placeMines(i); startTimer(); }
    if (flagMode) toggleFlag(i); else reveal(i);
  });
  boardEl.addEventListener("contextmenu", (e) => {
    const el = e.target.closest(".mcell"); if (!el) return;
    e.preventDefault();
    if (!started) { placeMines(Number(el.dataset.i)); startTimer(); }
    toggleFlag(Number(el.dataset.i));
  });

  flagBtn.addEventListener("click", () => {
    flagMode = !flagMode;
    flagBtn.textContent = flagMode ? "🚩 Mod: Açık" : "🚩 Mod: Kapalı";
    flagBtn.classList.toggle("btn--primary", flagMode);
    flagBtn.classList.toggle("btn--ghost", !flagMode);
  });
  document.getElementById("m-new").addEventListener("click", reset);
  levelEl.addEventListener("change", reset);

  reset();
})();
