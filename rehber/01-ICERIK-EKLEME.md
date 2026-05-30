# ➕ İçerik Ekleme Kılavuzu

Neredeyse her şey **`js/data.js`** dosyasındaki listelere (dizi) eklenir.
Bir listenin başına ekleme yaparsan en üstte/yeni görünür. Tarih biçimi: `"YYYY-AA-GG"`.

> ⚠️ Düzenlerken virgülleri ve tırnakları bozma. Eklemeden sonra kaydet,
> yerelde `python3 devserver.py` ile kontrol et, sonra yayına al.

---

## ✍️ 1) Blog yazısı  → `POSTS` listesi
```js
{
  id: "yeni-yazi-linki",          // adres: post.html?id=yeni-yazi-linki (boşluksuz)
  title: "Yazının başlığı",
  tag: "Günlük",                  // etiket (filtrede çıkar)
  date: "2026-06-01",
  excerpt: "Kısa özet, listede görünür.",
  cover: "",                      // istersen görsel URL'si
  content: `
    <p>Paragraf.</p>
    <h2>Ara başlık</h2>
    <ul><li>Madde</li></ul>
    <blockquote>Alıntı.</blockquote>
  `,
},
```

## 📝 2) Makale  → `ARTICLES` listesi
Blog ile aynı; ek olarak `author` alanı var:
```js
{
  id: "makale-linki",
  title: "Makale başlığı",
  tag: "Çelik",
  author: "Can Okan Biçer",
  date: "2026-06-01",
  excerpt: "Kısa özet.",
  cover: "https://...",           // üstte kapak görseli (opsiyonel)
  content: `
    <p>Metin...</p>
    <figure class="article__fig">
      <img src="https://..." alt="" onerror="this.closest('figure').style.display='none'">
      <figcaption>Görsel açıklaması</figcaption>
    </figure>
    <p class="article__note">Not: ...</p>
  `,
},
```

## 🚀 3) Proje  → `PROJECTS` listesi
```js
{
  title: "Proje adı",
  desc: "Kısa açıklama.",
  tags: ["HTML", "JavaScript"],
  status: "devam",                // "tamamlandi" | "devam" | "fikir"
  year: 2026,
  links: { demo: "...", repo: "...", site: "..." },  // gereksizleri sil
},
```

## 📰 4) Haber  → `NEWS` listesi
```js
{
  date: "2026-06-01",
  type: "duyuru",                 // "oyun" | "yazi" | "duyuru" | "guncelleme"
  title: "Haber başlığı",
  body: "Kısa metin.",
  link: "blog.html",              // opsiyonel
},
```

## 🖼️ 5) Galeri görseli  → `GALLERY` listesi
```js
{ src: "../assets/img/fotograf.jpg", caption: "Açıklama" },
```
(Önce fotoğrafı `assets/img/` klasörüne koy.)

## 🎵 6) Müzik  → klasöre at + script çalıştır
1. mp3'ü `assets/music/` klasörüne koy.
   - İsim ipucu: `Sanatçı - Şarkı.mp3` yazarsan ikisini ayırır.
2. Terminalde proje klasöründe:
   ```
   node tools/generate-music.mjs
   ```
   Bu `assets/music/tracks.json` dosyasını günceller.
3. Yayına al. (data.js'e elle yazmana gerek yok.)

## 🎓 7) Ders notu konusu  → `COURSES` içindeki `topics`
İlgili dersi bul (ör. `id: "statik2"`), `soon: true` varsa **sil**, `topics` dizisine ekle:
```js
{
  title: "Konu başlığı",
  body: `
    <p>Açıklama.</p>
    <div class="ders-f">FORMÜL = ...</div>
    <p class="ders-ex"><b>Örnek:</b> ...</p>
  `,
},
```

## ⚙️ 8) Mühendislik bilgisi
- **Teori** → `ENG_THEORIES`: `{ name: "Teori (formül)", use: "Ne işe yarar." }`
- **Çelik** → `ENG_STEEL`: `{ title: "...", text: "..." }`
- **Çatı** → `ENG_ROOF`: `{ title, text }`
- **İzolasyon** → `ENG_INSULATION`: `{ title, text }`
- **Dev proje** → `ENG_PROJECTS`:
  ```js
  { title, loc: "Yer · Yıl", tag: "Köprü", icon: "🌉", img: "https://...", note: "..." },
  ```

---

## 📌 Hatırlatmalar
- **Yeni sayfa/bölüm** eklemek (yepyeni bir menü maddesi) kod değişikliği ister — onu birlikte yapalım.
- Görseller için serbest/telifsiz kaynak kullan (kendi fotoğrafların en iyisi).
- Büyük bir görsel/JS değişikliğinde tarayıcı eskiyi gösterirse: HTML'lerdeki `?v=2` → `?v=3` yapılır (toplu). Takılırsan söyle.
