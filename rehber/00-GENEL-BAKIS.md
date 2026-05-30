# 📘 Genel Bakış — canokanbicer.com

Bu site **saf HTML/CSS/JS** ile yazıldı (kurulum/derleme yok). Koyu, teknolojik tema.
Yayında: **https://canokanbicer.com** (Netlify + Squarespace domain).

## 🗺️ Klasör haritası

```
websitecob/
├─ index.html              → Anasayfa
├─ favicon.svg             → Site simgesi
├─ netlify.toml            → Netlify ayarları (önbellek başlıkları)
├─ devserver.py            → Yerel test sunucusu (önbelleğe almaz)
│
├─ pages/                  → Tüm alt sayfalar
│   ├─ blog.html / post.html         → Blog (liste + tek yazı okuyucu)
│   ├─ makaleler.html / makale.html  → Makaleler (liste + okuyucu)
│   ├─ projeler.html                 → Projeler
│   ├─ muhendislik.html              → Mühendislik (ders notları + teori + projeler)
│   ├─ ders.html                     → Tek ders notu okuyucu (?id=statik1)
│   ├─ oyunlar.html + oyun-*.html    → Oyun merkezi + 6 oyun
│   ├─ galeri.html                   → Fotoğraf galerisi (lightbox)
│   ├─ muzik.html                    → Müzik çalar
│   ├─ haberler.html                 → Haberler (zaman tüneli)
│   ├─ hesap.html                    → Bilimsel hesap makinesi
│   └─ savnot.html                   → Savnot tanıtım sayfası
│
├─ css/
│   ├─ style.css           → Ana tasarım sistemi (renkler, bileşenler)
│   ├─ games.css           → Oyun stilleri
│   └─ calc.css            → Hesap makinesi stilleri
│
├─ js/
│   ├─ data.js             → ⭐ TÜM İÇERİK BURADA (yazı, makale, proje, ders, haber...)
│   ├─ main.js             → Ortak: menü, yıl, Türkiye saati, animasyon
│   ├─ player.js           → Kalıcı müzik çalar (sayfalar arası kesintisiz)
│   ├─ spa.js              → Sayfa geçişlerini hızlandırır (baştan yüklemez)
│   ├─ counter.js          → Ziyaretçi/çevrim içi sayacı (sol üst)
│   ├─ blog.js, post.js, makaleler.js, makale.js, projeler.js,
│   │  muhendislik.js, ders.js, galeri.js, muzik.js, haberler.js,
│   │  savnot.js, hesap.js → Her sayfanın kendi mantığı
│   └─ game-*.js           → Oyunların mantığı
│
├─ assets/
│   ├─ img/                → Görseller (galeri vb.)
│   └─ music/             → 🎵 mp3'ler + tracks.json (otomatik üretilir)
│
├─ tools/
│   └─ generate-music.mjs  → Müzik listesini üreten script
│
└─ rehber/                 → 📘 BU KLASÖR (kılavuzlar)
```

## 🔑 En önemli kural
**Neredeyse tüm içerik `js/data.js` dosyasındadır.** Yeni yazı/makale/proje/haber/ders
eklemek = `data.js` içindeki ilgili listeye bir nesne eklemek. Detaylar:
👉 `rehber/01-ICERIK-EKLEME.md`

## 💻 Yerel test (bilgisayarında denemek)
Terminalde proje klasöründe:
```
python3 devserver.py
```
Sonra tarayıcıda: **http://localhost:8765**
(Bu sunucu önbelleğe almaz, değişiklikler hemen görünür.)

## 🚀 Değişikliği yayına alma
1. Dosyaları düzenle (genelde `js/data.js`).
2. Müzik eklediysen: `node tools/generate-music.mjs` çalıştır.
3. Netlify'a klasörü tekrar **sürükle-bırak** (app.netlify.com → projen → Deploys → "Drag and drop").
👉 Detay: `rehber/02-YAYINLAMA.md`
```
