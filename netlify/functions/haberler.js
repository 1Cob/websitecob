/* =========================================================
   Netlify Function: Güncel inşaat & mühendislik haberleri
   Kaynak: Google News RSS (yalnızca BAŞLIK + KAYNAK + LİNK).
   Haber metni kopyalanmaz; kullanıcı kaynağa yönlendirilir.
   Çağrı: /.netlify/functions/haberler
   ========================================================= */

const FEEDS = [
  { q: '"inşaat mühendisliği" OR "inşaat sektörü"', hl: "tr", gl: "TR", ceid: "TR:tr" },
  { q: '"civil engineering"', hl: "en-US", gl: "US", ceid: "US:en" },
  { q: '"construction technology" OR "structural engineering"', hl: "en-US", gl: "US", ceid: "US:en" },
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

exports.handler = async () => {
  const results = await Promise.all(FEEDS.map((f) => fetchFeed(feedUrl(f))));
  const seen = new Set();
  let items = [];
  for (const arr of results) {
    for (const it of arr) {
      if (!it.title || !it.link) continue;
      const key = it.title.toLowerCase().slice(0, 60);
      if (seen.has(key)) continue;
      seen.add(key);
      items.push(it);
    }
  }
  items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  items = items.slice(0, 24);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=1800, s-maxage=1800",
    },
    body: JSON.stringify({ updated: new Date().toISOString(), items }),
  };
};
