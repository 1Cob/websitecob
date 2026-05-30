# 📰 Otomatik Haberler — Nasıl Aktif Edilir?

Haberler sayfasındaki **"İnşaat & Mühendislik Haberleri"** ve **"Dünyadan Gelişmeler & Duyurular"**
bölümleri bir **Netlify Function** ile otomatik dolar (`netlify/functions/haberler.js`).
Kaynak: Google News RSS → yalnızca **başlık + kaynak adı + kaynağa link** (metin kopyalanmaz, yasal).

> ⚠️ Bu özellik **sadece yayındaki sitede** çalışır. Yerelde (python sunucu) "yayındaki sitede
> otomatik yüklenir" notu görünür — bu normaldir.

## Çalışması için tek seferlik kurulum: GitHub → Netlify bağlama
Fonksiyonlar sürükle-bırak ile değil, **Git'ten yayınla** ile çalışır. Kod zaten GitHub'da:
**github.com/1Cob/websitecob** (dal: `main`).

1. Netlify → projen (**teal-kashata-bdf168**) → **Project configuration**
   → **Build & deploy** → **Continuous deployment**.
2. **"Link repository"** / **"Link to a Git repository"**.
3. **GitHub**'ı seç → yetkilendir → depo: **1Cob/websitecob**, dal: **main**.
4. Ayarlar:
   - Build command: **boş**
   - Publish directory: **.** (nokta)
   - Functions: otomatik (`netlify/functions`, netlify.toml'da ayarlı)
5. **Deploy**.

## Doğrulama
- `https://canokanbicer.com/.netlify/functions/haberler` → JSON (news + duyurular) dönmeli.
- `https://canokanbicer.com/pages/haberler.html` → iki otomatik bölüm dolu görünür.

## Bağladıktan sonra güncelleme
Artık sürükle-bırak gerekmez. Değişiklik yapınca:
```
git add -A
git commit -m "açıklama"
git push
```
Netlify otomatik yayınlar (~1 dk).

## Haber kaynaklarını/konularını değiştirmek
`netlify/functions/haberler.js` içinde:
- `FEEDS_NEWS` → genel sektör haberleri sorguları
- `FEEDS_DUYURU` → dünyadan gelişme/duyuru sorguları
Sorgular Google News arama dilidir. Örnekler:
- Belirli site: `site:imo.org.tr`
- Konu: `"deprem yönetmeliği"`, `"betonarme"`, `"köprü projesi"`
Değiştir → `git push` → otomatik canlıya geçer.
