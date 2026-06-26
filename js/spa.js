/* =========================================================
   Basit SPA yönlendirici
   - İç bağlantıları yakalar, sayfayı BAŞTAN YÜKLEMEDEN içeriği değiştirir
   - Böylece müzik (Player) kesintisiz çalmaya devam eder
   - player.js / spa.js / data.js tekrar çalıştırılmaz (kalıcıdır)
   ========================================================= */
(function () {
  if (window.__spa) return;
  window.__spa = true;

  const PERSIST = ["player.js", "spa.js", "data.js", "counter.js", "bg.js"];
  let root;
  const baseName = (src) => (src || "").split("/").pop().split("?")[0];   // sürüm etiketini (?v=) yok say

  function setupRoot() {
    root = document.createElement("div");
    root.id = "spa-root";
    // kalıcı öğeler (mini oynatıcı, sayaç rozeti) dışındaki her şeyi spa-root'a taşı
    [...document.body.childNodes].forEach((n) => {
      if (n.nodeType === 1 && (n.classList.contains("mini") || n.hasAttribute("data-persist"))) return;
      root.appendChild(n);
    });
    document.body.insertBefore(root, document.body.firstChild);
  }

  function mergeCSS(doc) {
    const have = [...document.querySelectorAll('link[rel="stylesheet"]')]
      .map((l) => baseName(l.getAttribute("href")));
    doc.querySelectorAll('link[rel="stylesheet"]').forEach((l) => {
      const href = l.getAttribute("href");
      if (!href) return;
      if (!have.includes(baseName(href))) {
        const nl = document.createElement("link");
        nl.rel = "stylesheet";
        nl.href = href;
        document.head.appendChild(nl);
      }
    });
  }

  function runScript(src) {
    return new Promise((res) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.onload = s.onerror = () => res();
      root.appendChild(s);
    });
  }

  async function navigate(href, push) {
    let res;
    try { res = await fetch(href); } catch { location.href = href; return; }
    if (!res.ok) { location.href = href; return; }
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");

    if (push) history.pushState({}, "", href);   // önce URL'i güncelle (göreli yollar doğru çözülsün)
    document.title = doc.title;
    mergeCSS(doc);
    if (window.Player && window.Player.resetSubs) window.Player.resetSubs();

    // İçeriği değiştir (scriptleri ve mini'yi çıkar)
    const clone = doc.body.cloneNode(true);
    clone.querySelectorAll("script, .mini").forEach((n) => n.remove());
    root.innerHTML = clone.innerHTML;
    window.scrollTo(0, 0);

    // Sayfaya özel scriptleri sırayla çalıştır (kalıcı olanlar hariç)
    const scripts = [...doc.body.querySelectorAll("script[src]")]
      .map((s) => s.getAttribute("src"))
      .filter((src) => src && !PERSIST.includes(baseName(src)));
    for (const src of scripts) await runScript(src);

    if (window.Player && window.Player.refresh) window.Player.refresh();
  }

  // İç bağlantı tıklamalarını yakala
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest("a");
    if (!a) return;
    const raw = a.getAttribute("href");
    if (!raw || raw.startsWith("#") || a.target === "_blank" || a.hasAttribute("download")) return;
    let url;
    try { url = new URL(a.href); } catch { return; }
    if (url.origin !== location.origin) return;
    // Gerçek dosyaları (görsel, pdf, ses, vb.) SPA dışında bırak; .html ve uzantısız
    // (Netlify "Pretty URLs") sayfaları yakala.
    if (/\.(png|jpe?g|gif|svg|webp|avif|ico|pdf|zip|rar|7z|mp3|m4a|wav|ogg|flac|mp4|mov|json|xml|txt|csv|css|js|woff2?|ttf)($|\?)/i.test(url.pathname)) return;
    e.preventDefault();
    if (url.href === location.href) return;
    navigate(url.href, true);
  });

  window.addEventListener("popstate", () => navigate(location.href, false));

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupRoot);
  } else {
    setupRoot();
  }
})();
