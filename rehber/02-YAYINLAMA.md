# 🚀 Yayınlama (Güncelleme) Kılavuzu

Site **Netlify**'da barınıyor, domain **Squarespace**'te. Yayında: **https://canokanbicer.com**

## Bir değişikliği yayına almak (en basit yol)
1. Dosyaları düzenle (genelde sadece `js/data.js`).
2. Müzik eklediysen: `node tools/generate-music.mjs`
3. Yerelde kontrol et: `python3 devserver.py` → http://localhost:8765
4. **Netlify'a yükle:**
   - app.netlify.com → projen (**teal-kashata-bdf168**) → **Deploys** sekmesi
   - Sayfadaki **"Drag and drop your site output folder here"** alanına
     `websitecob` klasörünü **sürükle-bırak**.
   - Birkaç saniyede yeni sürüm canlıya geçer.

> İpucu: Her zaman **klasörün tamamını** sürükle (tek dosya değil).

## Otomatik yayın (opsiyonel, daha pratik)
GitHub deposu bağlarsan, her değişiklikte elle yükleme gerekmez — `git push`
yapınca Netlify otomatik yayınlar. Kurmak istersen yardım isteyebilirsin.

## Domain / DNS (kurulum bitti — referans için)
Squarespace DNS'te girili kayıtlar:
| Tür | Ad | Veri |
|---|---|---|
| A | @ | 75.2.60.5 |
| CNAME | www | teal-kashata-bdf168.netlify.app. |

Bunlara normalde dokunmana gerek yok. HTTPS sertifikası Netlify tarafından otomatik yenilenir.

## Tarayıcı eskiyi gösterirse
CSS/JS bağlantılarında `?v=2` sürüm etiketi var. Büyük bir görsel değişiklikte
kullanıcılar eskisini görürse, tüm HTML'lerde `?v=2` → `?v=3` yapılır (toplu işlem).
Gerekirse birlikte yaparız.
