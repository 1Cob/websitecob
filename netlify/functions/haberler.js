/* =========================================================
   Netlify Function: İnşaat & mühendislik haberleri + dünyadan duyurular
   Kaynak: Google News RSS (yalnızca BAŞLIK + KAYNAK + LİNK).
   Haber metni kopyalanmaz; kullanıcı kaynağa yönlendirilir.
   Çağrı: /.netlify/functions/haberler  →  { news:[...], duyurular:[...] }
   ========================================================= */

// 1) Genel sektör haberleri (TR + dünya)
const FEEDS_NEWS = [
  { q: '"inşaat mühendisliği" OR "inşaat sektörü"', hl: "tr", gl: "TR", ceid: "TR:tr" },
  { q: '"civil engineering"', hl: "en-US", gl: "US", ceid: "US:en" },
  { q: '"construction technology" OR "structural engineering"', hl: "en-US", gl: "US", ceid: "US:en" },
];

// 2) Dünyadan gelişmeler & duyurular (yenilik, buluş, etkinlik — yabancı kaynaklar)
const FEEDS_DUYURU = [
  { q: '("civil engineering" OR construction) (innovation OR breakthrough OR "new technology")', hl: "en-US", gl: "US", ceid: "US:en" },
  { q: 'construction (megaproject OR "world record" OR landmark) (bridge OR tower OR tunnel)', hl: "en-US", gl: "US", ceid: "US:en" },
  { q: '"structural engineering" (award OR conference OR summit OR standard)', hl: "en-US", gl: "US", ceid: "US:en" },
];

function feedUrl(f) {
  const p = new URLSearchParams({ q: f.q, hl: f.hl, gl: f.gl, ceid: f.ceid });
  return "https://news.google.com/rss/search?" + p.toString();
}
function decode(s) {
  return (s || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}
function tag(block, name) {
  const m = block.match(new RegExp("<" + name + "[^>]*>([\\s\\S]*?)</" + name + ">", "i"));
  return m ? m[1] : "";
}
function parseItems(xml) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = re.exec(xml))) {
    const b = m[1];
    let title = decode(tag(b, "title"));
    const link = decode(tag(b, "link"));
    const pub = tag(b, "pubDate").trim();
    const sm = b.match(/<source[^>]*>([\s\S]*?)<\/source>/i);
    const source = sm ? decode(sm[1]) : "";
    if (source && title.endsWith(" - " + source)) title = title.slice(0, -(source.length + 3)).trim();
    items.push({ title, link, source, date: pub ? new Date(pub).toISOString() : null });
  }
  return items;
}
async function fetchFeed(url) {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 6000);
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" }, signal: ctrl.signal });
    clearTimeout(t);
    if (!res.ok) return [];
    return parseItems(await res.text());
  } catch (e) { return []; }
}
async function collect(feeds, seen, limit) {
  const results = await Promise.all(feeds.map((f) => fetchFeed(feedUrl(f))));
  const out = [];
  for (const arr of results) {
    for (const it of arr) {
      if (!it.title || !it.link) continue;
      const key = it.title.toLowerCase().slice(0, 60);
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(it);
    }
  }
  out.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  return out.slice(0, limit);
}

exports.handler = async () => {
  const seen = new Set();
  const news = await collect(FEEDS_NEWS, seen, 20);
  const duyurular = await collect(FEEDS_DUYURU, seen, 14);
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=1800, s-maxage=1800",
    },
    body: JSON.stringify({ updated: new Date().toISOString(), news, duyurular }),
  };
};
