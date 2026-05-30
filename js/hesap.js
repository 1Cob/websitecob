/* =========================================================
   Mühendis / Bilimsel Hesap Makinesi
   - Güvenli (eval'sız) ayrıştırıcı: operatör önceliği, parantez,
     sağ-birleşen üs, tekli eksi, faktöriyel, çok argümanlı fonksiyonlar
   - DER / RAD / GRAD açı modları
   - Bellek (MC/MR/MS/M+/M−), son 50 işlem geçmişi
   ========================================================= */
(function () {
  const exprEl = document.getElementById("expr");
  if (!exprEl) return;

  const resultEl = document.getElementById("result");
  const histEl   = document.getElementById("history");
  const histHint = document.getElementById("histHint");
  const histCount= document.getElementById("histCount");
  const modeBtn  = document.getElementById("modeBtn");
  const memInd   = document.getElementById("memInd");

  const KEY = "hesap_history";
  const MEM_KEY = "hesap_mem";
  const MODES = ["DER", "RAD", "GRA"];     // derece / radyan / grad
  let mode = "DER";
  let lastResult = null;
  let memory = Number(localStorage.getItem(MEM_KEY) || 0);
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { hist = []; }

  /* ---------- Yardımcı matematik ---------- */
  function gamma(z) {                        // Lanczos yaklaşımı
    const g = 7, c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,
      771.32342877765313, -176.61502916214059, 12.507343278686905,
      -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
    z -= 1; let x = c[0];
    for (let i = 1; i < g + 2; i++) x += c[i] / (z + i);
    const t = z + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
  }
  function factorial(n) {
    if (Number.isInteger(n) && n >= 0) { let r = 1; for (let k = 2; k <= n; k++) r *= k; return r; }
    return gamma(n + 1);
  }
  function gcd(a, b) { a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b)); while (b) { [a, b] = [b, a % b]; } return a; }
  function lcm(a, b) { const g = gcd(a, b); return g ? Math.abs(Math.round(a) * Math.round(b)) / g : 0; }
  function nthroot(x, n) {
    if (x < 0) return (Number.isInteger(n) && n % 2 !== 0) ? -Math.pow(-x, 1 / n) : NaN;
    return Math.pow(x, 1 / n);
  }
  function angFactor() { return mode === "RAD" ? 1 : mode === "GRA" ? Math.PI / 200 : Math.PI / 180; }

  /* ---------- Ayrıştırıcı ---------- */
  function tokenize(s) {
    const toks = []; let i = 0;
    const dig = (c) => c >= "0" && c <= "9";
    const alpha = (c) => (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
    while (i < s.length) {
      const c = s[i];
      if (c === " ") { i++; continue; }
      if (c === "π") { toks.push({ t: "const", v: "pi" }); i++; continue; }
      if (c === "φ") { toks.push({ t: "const", v: "phi" }); i++; continue; }
      if (c === "√") { toks.push({ t: "func", v: "sqrt" }); i++; continue; }
      if (dig(c) || c === ".") {
        let j = i + 1;
        while (j < s.length && (dig(s[j]) || s[j] === ".")) j++;
        toks.push({ t: "num", v: parseFloat(s.slice(i, j)) }); i = j; continue;
      }
      if (alpha(c)) {                                   // tanımlayıcı: harf + sonra harf/rakam (log2, exp10...)
        let j = i + 1;
        while (j < s.length && (alpha(s[j]) || dig(s[j]))) j++;
        const name = s.slice(i, j).toLowerCase(); i = j;
        if (name === "pi" || name === "e" || name === "phi") toks.push({ t: "const", v: name });
        else toks.push({ t: "func", v: name });
        continue;
      }
      if ("+-*/^%!(),".includes(c)) { toks.push({ t: "op", v: c }); i++; continue; }
      throw new Error("Geçersiz karakter: " + c);
    }
    return toks;
  }

  function applyFunc(name, a) {
    const x = a[0], y = a[1], k = angFactor();
    switch (name) {
      case "sin": return Math.sin(x * k);
      case "cos": return Math.cos(x * k);
      case "tan": return Math.tan(x * k);
      case "asin": return Math.asin(x) / k;
      case "acos": return Math.acos(x) / k;
      case "atan": return Math.atan(x) / k;
      case "sinh": return Math.sinh(x);
      case "cosh": return Math.cosh(x);
      case "tanh": return Math.tanh(x);
      case "asinh": return Math.asinh(x);
      case "acosh": return Math.acosh(x);
      case "atanh": return Math.atanh(x);
      case "ln": return Math.log(x);
      case "log": case "log10": return Math.log10(x);
      case "log2": return Math.log2(x);
      case "logb": return Math.log(x) / Math.log(y);
      case "exp": return Math.exp(x);
      case "exp10": return Math.pow(10, x);
      case "exp2": return Math.pow(2, x);
      case "sqrt": return Math.sqrt(x);
      case "cbrt": return Math.cbrt(x);
      case "nthroot": return nthroot(x, y);
      case "inv": return 1 / x;
      case "abs": return Math.abs(x);
      case "sign": return Math.sign(x);
      case "floor": return Math.floor(x);
      case "ceil": return Math.ceil(x);
      case "round": return Math.round(x);
      case "trunc": return Math.trunc(x);
      case "gamma": return gamma(x);
      case "fact": return factorial(x);
      case "ncr": return factorial(x) / (factorial(y) * factorial(x - y));
      case "npr": return factorial(x) / factorial(x - y);
      case "gcd": return gcd(x, y);
      case "lcm": return lcm(x, y);
      case "mod": return x % y;
      case "rand": return Math.random();
      case "max": return Math.max(...a);
      case "min": return Math.min(...a);
      default: throw new Error("Bilinmeyen fonksiyon: " + name);
    }
  }

  function evaluate(input) {
    const toks = tokenize(input);
    let pos = 0;
    const peek = () => toks[pos];
    const next = () => toks[pos++];
    const expect = (ch) => { const t = next(); if (!t || t.v !== ch) throw new Error("'" + ch + "' bekleniyordu"); };

    function parseExpr() { return parseAddSub(); }
    function parseAddSub() {
      let v = parseMulDiv();
      while (peek() && (peek().v === "+" || peek().v === "-")) { const op = next().v; const r = parseMulDiv(); v = op === "+" ? v + r : v - r; }
      return v;
    }
    function parseMulDiv() {
      let v = parseUnary();
      while (peek() && (peek().v === "*" || peek().v === "/" || peek().v === "%")) {
        const op = next().v; const r = parseUnary(); v = op === "*" ? v * r : op === "/" ? v / r : v % r;
      }
      return v;
    }
    function parseUnary() {
      if (peek() && (peek().v === "+" || peek().v === "-")) { const op = next().v; const r = parseUnary(); return op === "-" ? -r : r; }
      return parsePower();
    }
    function parsePower() {
      const v = parsePostfix();
      if (peek() && peek().v === "^") { next(); const r = parseUnary(); return Math.pow(v, r); }
      return v;
    }
    function parsePostfix() {
      let v = parsePrimary();
      while (peek() && peek().v === "!") { next(); v = factorial(v); }
      return v;
    }
    function parsePrimary() {
      const t = peek();
      if (!t) throw new Error("Eksik ifade");
      if (t.t === "num") { next(); return t.v; }
      if (t.t === "const") { next(); return t.v === "pi" ? Math.PI : t.v === "e" ? Math.E : (1 + Math.sqrt(5)) / 2; }
      if (t.t === "func") {
        next(); expect("(");
        const args = [];
        if (peek() && peek().v !== ")") { args.push(parseExpr()); while (peek() && peek().v === ",") { next(); args.push(parseExpr()); } }
        expect(")");
        return applyFunc(t.v, args);
      }
      if (t.v === "(") { next(); const v = parseExpr(); expect(")"); return v; }
      throw new Error("Beklenmeyen: " + t.v);
    }

    const r = parseExpr();
    if (pos < toks.length) throw new Error("Fazla giriş");
    return r;
  }

  function fmt(n) {
    if (typeof n !== "number" || Number.isNaN(n)) return "Hata";
    if (!isFinite(n)) return n > 0 ? "∞" : "−∞";
    return String(parseFloat(n.toPrecision(12)));
  }

  /* ---------- Giriş ---------- */
  function insert(text) {
    const s = exprEl.selectionStart ?? exprEl.value.length;
    const e = exprEl.selectionEnd ?? exprEl.value.length;
    exprEl.value = exprEl.value.slice(0, s) + text + exprEl.value.slice(e);
    const p = s + text.length;
    exprEl.setSelectionRange(p, p);
    exprEl.focus();
  }
  function backspace() {
    const s = exprEl.selectionStart, e = exprEl.selectionEnd;
    if (s === e && s > 0) { exprEl.value = exprEl.value.slice(0, s - 1) + exprEl.value.slice(e); exprEl.setSelectionRange(s - 1, s - 1); }
    else { exprEl.value = exprEl.value.slice(0, s) + exprEl.value.slice(e); exprEl.setSelectionRange(s, s); }
    exprEl.focus();
  }
  function currentValue() { try { return evaluate(exprEl.value); } catch (e) { return lastResult; } }
  function equals() {
    const raw = exprEl.value.trim();
    if (!raw) return;
    try {
      const r = evaluate(raw);
      const out = fmt(r);
      resultEl.textContent = out;
      resultEl.classList.remove("calc__result--err");
      if (out !== "Hata") { lastResult = r; pushHistory(raw, out); }
    } catch (err) {
      resultEl.textContent = "Hata: " + err.message;
      resultEl.classList.add("calc__result--err");
    }
  }

  /* ---------- Bellek ---------- */
  function saveMem() { try { localStorage.setItem(MEM_KEY, String(memory)); } catch (e) {} updateMemInd(); }
  function updateMemInd() { if (memInd) memInd.textContent = memory ? "M = " + fmt(memory) : ""; }

  /* ---------- Geçmiş ---------- */
  function save() { try { localStorage.setItem(KEY, JSON.stringify(hist)); } catch (e) {} }
  function pushHistory(expr, result) {
    hist.unshift({ expr, result, t: Date.now() });
    hist = hist.slice(0, 50);
    save(); render();
  }
  function render() {
    histCount.textContent = `(${hist.length}/50)`;
    histHint.style.display = hist.length ? "none" : "block";
    histEl.innerHTML = hist.map((h, i) => `
      <li class="hitem" data-i="${i}" title="Tıkla: bu işleme dön">
        <span class="hitem__expr">${escapeHtml(h.expr)}</span>
        <span class="hitem__eq">= ${escapeHtml(h.result)}</span>
      </li>`).join("");
  }
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

  histEl.addEventListener("click", (e) => {
    const li = e.target.closest(".hitem");
    if (!li) return;
    if (window.getSelection && window.getSelection().toString()) return;
    const h = hist[Number(li.dataset.i)];
    if (!h) return;
    exprEl.value = h.expr; exprEl.focus();
    exprEl.setSelectionRange(exprEl.value.length, exprEl.value.length);
  });
  document.getElementById("clearHist").addEventListener("click", () => {
    if (!hist.length) return;
    if (confirm("Tüm işlem geçmişi silinsin mi?")) { hist = []; save(); render(); }
  });

  /* ---------- Tuşlar ---------- */
  document.querySelectorAll(".ckey").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.ins != null) { insert(btn.dataset.ins); return; }
      const v = currentValue();
      switch (btn.dataset.act) {
        case "eq": equals(); break;
        case "clear": exprEl.value = ""; resultEl.textContent = "0"; resultEl.classList.remove("calc__result--err"); exprEl.focus(); break;
        case "back": backspace(); break;
        case "ans": if (lastResult != null) insert(fmt(lastResult)); break;
        case "mode":
          mode = MODES[(MODES.indexOf(mode) + 1) % MODES.length];
          modeBtn.textContent = mode;
          modeBtn.title = "Açı modu: " + (mode === "DER" ? "Derece" : mode === "RAD" ? "Radyan" : "Grad") + " (tıkla: değiştir)";
          break;
        case "ms": if (v != null) { memory = v; saveMem(); } break;
        case "mplus": if (v != null) { memory += v; saveMem(); } break;
        case "mminus": if (v != null) { memory -= v; saveMem(); } break;
        case "mr": insert(fmt(memory)); break;
        case "mc": memory = 0; saveMem(); break;
      }
    });
  });

  /* ---------- İpucu baloncukları ---------- */
  const TIPS = {
    "ins:sin(": "Sinüs · örn. sin(30) = 0.5 (DER modunda)",
    "ins:cos(": "Kosinüs · örn. cos(60) = 0.5",
    "ins:tan(": "Tanjant · örn. tan(45) = 1",
    "ins:asin(": "Ters sinüs (arcsin) · asin(0.5) = 30°",
    "ins:acos(": "Ters kosinüs (arccos)",
    "ins:atan(": "Ters tanjant (arctan)",
    "ins:sinh(": "Hiperbolik sinüs · sinh(1) ≈ 1.175",
    "ins:cosh(": "Hiperbolik kosinüs",
    "ins:tanh(": "Hiperbolik tanjant",
    "ins:asinh(": "Ters hiperbolik sinüs",
    "ins:acosh(": "Ters hiperbolik kosinüs",
    "ins:atanh(": "Ters hiperbolik tanjant",
    "ins:ln(": "Doğal logaritma (taban e) · ln(e) = 1",
    "ins:log(": "10 tabanında logaritma · log(1000) = 3",
    "ins:log2(": "2 tabanında logaritma · log2(1024) = 10",
    "ins:exp(": "e üzeri x · exp(1) = e ≈ 2.718",
    "ins:exp10(": "10 üzeri x · exp10(3) = 1000",
    "ins:exp2(": "2 üzeri x · exp2(10) = 1024",
    "ins:^2": "Karesi · 5'e basıp x² → 5^2 = 25",
    "ins:^3": "Küpü · 3^3 = 27",
    "ins:^": "Üs alma · 2^10 = 1024",
    "ins:sqrt(": "Karekök · sqrt(16) = 4",
    "ins:cbrt(": "Küpkök · cbrt(27) = 3",
    "ins:nthroot(": "n. dereceden kök · nthroot(32,5) = 2",
    "ins:inv(": "Tersi (1/x) · inv(4) = 0.25",
    "ins:abs(": "Mutlak değer · abs(-7) = 7",
    "ins:!": "Faktöriyel · sayıdan sonra: 5! = 120",
    "ins:gamma(": "Gama fonksiyonu · gamma(5) = 24 (= 4!)",
    "ins:ncr(": "Kombinasyon C(n,r) · ncr(6,2) = 15",
    "ins:npr(": "Permütasyon P(n,r) · npr(5,2) = 20",
    "ins:%": "Mod — bölmeden kalan · 10%3 = 1",
    "ins:sign(": "İşaret · negatif −1, sıfır 0, pozitif 1",
    "ins:floor(": "Aşağı yuvarla · floor(3.7) = 3",
    "ins:ceil(": "Yukarı yuvarla · ceil(3.2) = 4",
    "ins:round(": "En yakına yuvarla · round(2.5) = 3",
    "ins:trunc(": "Ondalığı at · trunc(3.9) = 3",
    "ins:pi": "Pi sayısı ≈ 3.14159",
    "ins:e": "Euler sayısı ≈ 2.71828",
    "ins:phi": "Altın oran φ ≈ 1.61803",
    "ins:rand()": "0 ile 1 arası rastgele sayı",
    "ins:gcd(": "OBEB · en büyük ortak bölen · gcd(48,36) = 12",
    "ins:lcm(": "OKEK · en küçük ortak kat · lcm(4,6) = 12",
    "ins:(": "Parantez aç (işlem önceliğini belirler)",
    "ins:)": "Parantez kapat",
    "ins:,": "Argüman ayırıcı · ncr(6,2) gibi fonksiyonlarda",
    "ins:/": "Bölme",
    "ins:*": "Çarpma",
    "ins:-": "Çıkarma",
    "ins:+": "Toplama",
    "ins:*10^": "Bilimsel gösterim · 2.5×10³ → 2.5*10^3",
    "act:mode": "Açı modu: Derece → Radyan → Grad (tıkla)",
    "act:mc": "Belleği temizle (M = 0)",
    "act:mr": "Bellekteki değeri ekrana ekle",
    "act:ms": "Sonucu belleğe kaydet",
    "act:mplus": "Sonucu belleğe ekle (M+)",
    "act:mminus": "Sonucu bellekten çıkar (M−)",
    "act:clear": "Temizle — her şeyi sil",
    "act:back": "Son karakteri sil",
    "act:ans": "Son hesaplanan sonucu ekle",
    "act:eq": "Hesapla (= veya Enter)",
  };
  document.querySelectorAll(".ckey").forEach((btn) => {
    const key = btn.dataset.ins != null ? "ins:" + btn.dataset.ins : "act:" + btn.dataset.act;
    if (TIPS[key]) btn.setAttribute("data-tip", TIPS[key]);
  });

  exprEl.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); equals(); } });

  modeBtn.textContent = mode;
  updateMemInd();
  render();
  exprEl.focus();
})();
