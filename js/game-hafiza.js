/* =========================================================
   Hafıza Kartları (Memory)
   ========================================================= */
(function () {
  const gridEl = document.getElementById("grid");
  if (!gridEl) return;
  const movesEl = document.getElementById("h-moves");
  const timeEl  = document.getElementById("h-time");
  const bestEl  = document.getElementById("h-best");
  const msgEl   = document.getElementById("h-msg");
  const levelEl = document.getElementById("h-level");

  const SYMBOLS = ["🎲","🎮","🎵","🚀","⚙️","🧠","🖼️","📰","🎯","🍀","⭐","🔥","🎧","🛸","🏆","🐍","💎","🎹"];

  let first, second, lock, moves, matched, total, timer, seconds, started;

  const fmt = (s) => `${(s/60)|0}:${String(s%60).padStart(2,"0")}`;
  const bestKey = () => "hafiza_best_" + levelEl.value;

  function showBest() {
    const b = localStorage.getItem(bestKey());
    bestEl.textContent = b ? b + " hamle" : "—";
  }

  function startTimer() {
    seconds = 0; started = true;
    clearInterval(timer);
    timer = setInterval(() => { seconds++; timeEl.textContent = fmt(seconds); }, 1000);
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function build() {
    const n = Number(levelEl.value);          // 4 -> 4x4, 6 -> 6x6
    total = (n * n) / 2;
    const picks = shuffle(SYMBOLS.slice()).slice(0, total);
    const deck = shuffle([...picks, ...picks]);

    moves = 0; matched = 0; first = second = null; lock = false; started = false; seconds = 0;
    movesEl.textContent = 0; timeEl.textContent = "0:00"; msgEl.textContent = "";
    clearInterval(timer);
    showBest();

    gridEl.style.setProperty("--cols", n);
    gridEl.innerHTML = deck.map((s, i) => `
      <button class="mcard" data-i="${i}" data-sym="${s}">
        <span class="mcard__inner">
          <span class="mcard__face mcard__face--back">?</span>
          <span class="mcard__face mcard__face--front">${s}</span>
        </span>
      </button>`).join("");
    gridEl.querySelectorAll(".mcard").forEach((c) => c.addEventListener("click", () => flip(c)));
  }

  function flip(card) {
    if (lock || card.classList.contains("flip") || card.classList.contains("done")) return;
    if (!started) startTimer();
    card.classList.add("flip");

    if (!first) { first = card; return; }
    second = card;
    moves++; movesEl.textContent = moves;
    lock = true;

    if (first.dataset.sym === second.dataset.sym) {
      setTimeout(() => {
        first.classList.add("done"); second.classList.add("done");
        first = second = null; lock = false;
        if (++matched === total) win();
      }, 350);
    } else {
      setTimeout(() => {
        first.classList.remove("flip"); second.classList.remove("flip");
        first = second = null; lock = false;
      }, 750);
    }
  }

  function win() {
    clearInterval(timer);
    const prev = Number(localStorage.getItem(bestKey()) || 0);
    let rec = "";
    if (!prev || moves < prev) { localStorage.setItem(bestKey(), moves); rec = " 🏆 Yeni rekor!"; }
    showBest();
    msgEl.textContent = `Tebrikler! ${moves} hamle, ${fmt(seconds)} sürede bitirdin.${rec}`;
  }

  document.getElementById("h-new").addEventListener("click", build);
  levelEl.addEventListener("change", build);
  build();
})();
