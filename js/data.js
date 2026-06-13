/* =========================================================
   İçerik verisi — yeni yazı/makale/proje eklemek için
   sadece buraya bir nesne ekle. Sunucu gerekmez.

   Bir yazının "content" alanı HTML kabul eder:
     <p>...</p>  paragraf
     <h2>...</h2> ara başlık
     <ul><li>...</li></ul> liste
     <blockquote>...</blockquote> alıntı
     <pre><code>...</code></pre> kod
   ========================================================= */

const POSTS = [
  {
    id: "merhaba",
    title: "Merhaba! Bu site neden var?",
    tag: "Günlük",
    date: "2024-01-15",
    excerpt: "Kendime ait bir köşe açtım: yazılarım, projelerim ve oyunlarım hep burada olacak.",
    cover: "",
    content: `
      <p>Uzun zamandır aklımda olan bir şeyi nihayet yaptım: kendime ait bir köşe.
      Sosyal medyada her şey kayboluyor, oysa yazdıklarımın, yaptıklarımın
      tek bir yerde durmasını istedim.</p>
      <h2>Burada ne olacak?</h2>
      <ul>
        <li>Aklımdan geçenleri yazdığım <strong>blog yazıları</strong></li>
        <li>Daha uzun, derinlemesine <strong>makaleler</strong></li>
        <li>Üzerinde çalıştığım <strong>projeler</strong> ve mühendislik notları</li>
        <li>Kendi yaptığım <strong>mini oyunlar</strong> (Zar Atma 2024 dahil!)</li>
        <li>Fotoğraflar ve belki biraz müzik</li>
      </ul>
      <p>Acele etmeden, bitire bitire büyüteceğim. Hoş geldin.</p>
    `,
  },
  {
    id: "ilk-oyun",
    title: "Zar Atma 2024'ü nasıl yaptım?",
    tag: "Oyun",
    date: "2024-02-10",
    excerpt: "Basit bir zar oyunundan yola çıkıp küçük bir oyun nasıl ortaya çıktı, anlatıyorum.",
    cover: "",
    content: `
      <p>Her şey "acaba ekranda gerçekçi bir zar yuvarlanır mı?" sorusuyla başladı.
      Önce tek bir zar, sonra animasyon, sonra skor...</p>
      <blockquote>En sevdiğim kısım: rastgeleliğin bile bir his vermesi.</blockquote>
      <p>Oyunun kendisini <a href="oyunlar.html">Oyunlar</a> bölümünden deneyebilirsin.</p>
    `,
  },
  {
    id: "muhendislik-notu",
    title: "Mühendislikte öğrendiğim ilk şey",
    tag: "Mühendislik",
    date: "2024-03-02",
    excerpt: "Teoriyle pratiğin buluştuğu yer ve aradaki farkı kapatmak üzerine kısa bir not.",
    cover: "",
    content: `
      <p>Okulda öğrendiğimiz her formül, sahada bir "ama" ile karşılaşıyor.
      Mühendislik biraz da o "ama"ları yönetmek demek.</p>
      <p>Detayları <a href="muhendislik.html">Mühendislik</a> bölümünde paylaşacağım.</p>
    `,
  },
];

/* MAKALELER — blog'dan daha uzun, derinlemesine yazılar.
   Yapısı POSTS ile aynı; ek olarak "author" alanı vardır.
   Not: Ünlü mühendislere ait yazılar, onların çalışmalarından
   DERLENMİŞ açıklayıcı metinlerdir; birebir çeviri değildir. */
const ARTICLES = [
  {
    id: "fazlur-khan-tup-sistemi",
    title: "Fazlur Khan: Gökdelenleri Mümkün Kılan Tüp Sistemi",
    tag: "Çelik",
    author: "Konu: Fazlur R. Khan · derleme",
    date: "2024-05-02",
    excerpt: "Modern gökdelenin babası sayılan Fazlur Khan'ın 'tüp' fikri, binaları hem daha yükseğe hem daha ekonomik taşıdı.",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Sears_Tower%2C_Wacker_Drive_and_Jackson_Boulevard%2C_Chicago%2C_IL_-_54189600901.jpg/1280px-Sears_Tower%2C_Wacker_Drive_and_Jackson_Boulevard%2C_Chicago%2C_IL_-_54189600901.jpg",
    content: `
      <p><strong>Fazlur Rahman Khan</strong> (1929–1982), Bangladeş doğumlu Amerikalı inşaat mühendisidir ve sıkça "modern gökdelenin babası" olarak anılır. SOM firmasında geliştirdiği fikirler, yüksek binaların hem daha yükseğe çıkmasını hem de daha az çelikle, daha ekonomik yapılmasını sağladı.</p>
      <h2>Asıl sorun: yatay yük</h2>
      <p>Bir bina yükseldikçe asıl zorluk düşey yük değil, rüzgâr ve deprem gibi yatay yüklerdir. Geleneksel çerçevelerde bina yükseldikçe gereken çelik miktarı hızla artıyordu.</p>
      <h2>Fikir: binayı içi boş bir tüp gibi düşün</h2>
      <p>Khan'ın önerisi, yatay yüke binanın <em>dış kabuğunun</em> içi boş bir tüp gibi bütün olarak direnmesiydi; böylece bina, rüzgârda eğilen ankastre bir konsol gibi davranır.</p>
      <ul>
        <li><strong>Çerçeveli tüp:</strong> Sık dış kolonlar ve güçlü lento kirişleri.</li>
        <li><strong>Kafesli tüp:</strong> Dev çaprazlar — John Hancock Center'ın ünlü X'leri.</li>
        <li><strong>Demet tüp:</strong> Yan yana birden çok tüp — Willis (Sears) Tower; tüpler farklı yüksekliklerde biter.</li>
      </ul>
      <p>Bu sistemler hem çeliği azalttı hem mimariye yeni bir dil kazandırdı. Khan aynı zamanda bilgisayarı yapısal tasarıma erken getiren isimlerdendir.</p>
      <blockquote>Mühendis, malzemeyi en doğal çalıştığı yerde kullanmalı.</blockquote>
      <h2>Sayısal tasarımın şafağı</h2>
      <p>Khan, 1960'larda yapısal hesapları bilgisayara taşıyan ilk mühendislerdendir. O dönemde elle aylar süren çözümler bilgisayarla saatlere indi; bu sayede çok daha karmaşık tüp geometrileri güvenle çözülebildi. Onun yaklaşımı, mühendisliği "formülü uygula" anlayışından çıkarıp davranışı anlamaya dayalı bir tasarım sürecine taşıdı.</p>
      <h2>İki simge yapı</h2>
      <p>108 katlı <strong>Willis (Sears) Tower</strong> (1973), demet tüp sistemiyle inşa edildi ve 1998'e dek dünyanın en yüksek binasıydı; dokuz ayrı tüpün bir araya gelmesiyle hem rijitlik hem de farklı yüksekliklerde sonlanan estetik bir siluet elde edildi. 100 katlı <strong>John Hancock Center</strong> ise dışarıdan görünen dev çelik çaprazlarıyla kafesli tüpün ders kitabı örneğidir; bu çaprazlar hem rüzgârı taşır hem iç kolon sayısını azaltarak kullanılabilir alanı artırır.</p>
      <figure class="article__fig">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Chicago_in_2022_John_Hancock_Center_%2852054925135%29.jpg/1280px-Chicago_in_2022_John_Hancock_Center_%2852054925135%29.jpg" alt="John Hancock Center" loading="lazy" onerror="this.closest('figure').style.display='none'">
        <figcaption>John Hancock Center — kafesli tüpün simgesi (Chicago).</figcaption>
      </figure>
      <h2>Neden önemli?</h2>
      <p>Tüp sistemleri, gökdeleni hem teknik hem ekonomik olarak yeniden mümkün kıldı: aynı yüksekliği daha az çelikle geçmek, hem maliyeti hem de yapının kendi ağırlığını düşürür. Khan'ın mirası yalnızca daha yüksek binalar değil; mühendislik ile mimariyi, hesap ile estetiği aynı masada buluşturan bütüncül bir tasarım anlayışıdır.</p>
      <p class="article__note">Not: Bu yazı, F. R. Khan'ın çalışmaları ve mühendislik literatüründen derlenmiş açıklayıcı bir metindir; ona ait, birebir çevrilmiş bir makale değildir.</p>
    `,
  },
  {
    id: "hardy-cross-moment-dagitma",
    title: "Hardy Cross ve Moment Dağıtma Yöntemi",
    tag: "Statik",
    author: "Konu: Hardy Cross · derleme",
    date: "2024-05-06",
    excerpt: "Bilgisayar öncesi çağda karmaşık çerçeveleri elle çözmeyi mümkün kılan, hâlâ sezgi kazandıran yöntem.",
    cover: "",
    content: `
      <p><strong>Hardy Cross</strong> (1885–1959), Amerikalı inşaat mühendisidir. 1930'da yayımladığı <em>Moment Dağıtma Yöntemi</em>, bilgisayar öncesi çağda hiperstatik (çözümü zor) çerçevelerin elle, adım adım çözülmesini mümkün kıldı.</p>
      <h2>Neden devrimdi?</h2>
      <p>Çok açıklıklı sürekli kirişler ve çerçeveler, denklemleri elle çözülemeyecek kadar karmaşıktı. Cross'un yöntemi, düğümleri sırayla "dengeleyerek" sonuca yaklaşan sezgisel ve tekrarlı bir süreçti.</p>
      <ul>
        <li>Bir düğümde moment, elemanlara <strong>rijitlikleri oranında</strong> dağılır.</li>
        <li>Birkaç tur dengeleme ile sonuç yeterince doğrulaşır.</li>
      </ul>
      <h2>Yöntem nasıl işler?</h2>
      <p>Önce tüm düğümler kilitli (ankastre) varsayılır ve her açıklıkta "uç-tutma momentleri" hesaplanır. Sonra düğümler tek tek serbest bırakılıp dengelenir: dengelenmemiş moment, o düğüme bağlanan elemanlara rijitlikleri oranında dağıtılır; her dağıtımın yarısı (taşıma katsayısı) elemanın diğer ucuna aktarılır. Bu adımlar dengesizlik ihmal edilebilir olana dek tekrarlanır.</p>
      <ul>
        <li><strong>Dağıtım katsayısı:</strong> Bir elemanın rijitliğinin, düğümdeki toplam rijitliğe oranı.</li>
        <li><strong>Taşıma katsayısı:</strong> Sabit kesitli elemanda genellikle 1/2.</li>
        <li><strong>Yakınsama:</strong> Birkaç tur sonra sonuç pratikte kesinleşir.</li>
      </ul>
      <h2>Neden bugün hâlâ değerli?</h2>
      <p>Bugün her şeyi bilgisayar çözse de yöntem hâlâ öğretilir; çünkü rijitlik ve moment dağılımına dair güçlü bir <em>sezgi</em> kazandırır. Bir mühendis, programın verdiği sonucun makul olup olmadığını ancak bu sezgiyle denetleyebilir. Cross aynı "ağda denge" mantığını su şebekelerindeki debi dağılımına da uyguladı; bu yaklaşım da onun adıyla anılır.</p>
      <blockquote>Hesabın amacı sayı üretmek değil, davranışı anlamaktır.</blockquote>
      <p class="article__note">Not: Bu yazı, Hardy Cross'un çalışmalarından derlenmiş açıklayıcı bir metindir; birebir çeviri değildir.</p>
    `,
  },
  {
    id: "freyssinet-ongerilmeli-beton",
    title: "Freyssinet ve Öngerilmeli Betonun Doğuşu",
    tag: "Betonarme",
    author: "Konu: E. Freyssinet · derleme",
    date: "2024-05-10",
    excerpt: "Betonu yük almadan önce sıkıştırmak: çekmede zayıf betonu uzun açıklıklara taşıyan dahiyane fikir.",
    cover: "https://upload.wikimedia.org/wikipedia/commons/2/27/Eug%C3%A8ne_Freyssinet_uniforme_%C3%A9cole_polytechnique.jpg",
    content: `
      <p><strong>Eugène Freyssinet</strong> (1879–1962), Fransız mühendis ve <em>öngerilmeli beton</em>un babasıdır.</p>
      <h2>Betonun zayıf noktası</h2>
      <p>Beton basınca çok dayanıklı, çekmeye ise zayıftır; yük altında çatlar. Freyssinet'in fikri, beton daha yük almadan onu önceden sıkıştırmaktı: gerilen yüksek dayanımlı çelik halatlar betonu sürekli basınç altında tutar, böylece çekme bölgesi hiç çatlamaz.</p>
      <h2>Sürünme (creep) keşfi</h2>
      <p>Freyssinet, betonun zamanla yavaşça şekil değiştirdiğini (sürünme) fark etti ve yüksek dayanımlı çelik kullanarak öngerilmenin kalıcı olmasını sağladı; aksi halde kuvvet zamanla kaybolurdu.</p>
      <h2>Öngerme ile sonradan germe</h2>
      <p>İki temel yöntem vardır. <strong>Öngerme</strong>de (pre-tensioning) çelik teller beton dökülmeden gerilir; beton sertleşince teller bırakılır ve aderansla betonu sıkıştırır — fabrikada üretilen prekast elemanlar için idealdir. <strong>Sonradan germe</strong>de (post-tensioning) beton içinde bırakılan kılıflardan geçen halatlar, beton sertleştikten sonra kriko ile gerilip uçlardan ankrajlanır — köprü ve geniş açıklıklı döşemelerde yaygındır.</p>
      <h2>Ankraj ve kriko</h2>
      <p>Freyssinet yalnızca fikri ortaya atmadı; onu uygulanabilir kılan kriko ve ankraj sistemlerini de geliştirdi. Halatı güvenle gerip kilitleyebilen konik ankrajlar, öngerilmenin sahada güvenilir biçimde uygulanmasını sağladı.</p>
      <h2>Mirası</h2>
      <p>Sonuç: çok daha ince, hafif ve uzun açıklıklı kirişler, köprüler ve döşemeler. Plougastel Köprüsü gibi yapılarla yöntemini kanıtladı. Öngerilme bugün otoyol köprülerinden katlı otoparklara, stadyum tribünlerinden köprü tablalarına kadar her yerdedir.</p>
      <p class="article__note">Not: Bu yazı, Freyssinet'in çalışmalarından derlenmiş açıklayıcı bir metindir; birebir çeviri değildir.</p>
    `,
  },
  {
    id: "nervi-beton",
    title: "Pier Luigi Nervi: Kuvvetin İzinden Giden Beton",
    tag: "Betonarme",
    author: "Konu: P. L. Nervi · derleme",
    date: "2024-05-14",
    excerpt: "Nervürleri kuvvet çizgilerini izleyen, hem ekonomik hem zarif betonarme yapılar.",
    cover: "https://upload.wikimedia.org/wikipedia/commons/2/28/Pier_Luigi_Nervi.jpg",
    content: `
      <p><strong>Pier Luigi Nervi</strong> (1891–1979), İtalyan mühendistir; betonu hem ekonomik hem estetik kullanmasıyla tanınır.</p>
      <h2>Form, kuvveti izler</h2>
      <p>Nervi'nin yapılarında nervürler (kaburgalar) rastgele değil, kuvvetlerin aktığı yolları (izostatik çizgiler) takip eder. Böylece malzeme yalnızca gerektiği yerde kullanılır; yapı hem hafif hem güzel olur.</p>
      <h2>Ferrocemento</h2>
      <p>İnce çelik hasır katmanları ve harçla geliştirdiği <em>ferrocement</em>, ince ama dayanıklı kabuklar üretmesini sağladı. Roma Olimpiyatları için yaptığı spor salonları (Palazzetto dello Sport) bu yaklaşımın simgesidir.</p>
      <figure class="article__fig">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Le_Palazzetto_dello_Sport_en_vue_a%C3%A9rienne.png/1280px-Le_Palazzetto_dello_Sport_en_vue_a%C3%A9rienne.png" alt="Palazzetto dello Sport" loading="lazy" onerror="this.closest('figure').style.display='none'">
        <figcaption>Palazzetto dello Sport (Roma) — kubbeyi taşıyan ışınsal nervürler.</figcaption>
      </figure>
      <h2>Prekast + yerinde döküm</h2>
      <p>Nervi, kubbeyi binlerce küçük prekast (önceden dökülmüş) parçadan kurar, sonra üzerine ince bir beton tabaka dökerek hepsini bütünleştirirdi. Bu yöntem hem kalıbı azaltır hem de işçiliği hızlandırır; sonuçta hafif, ekonomik ve aynı zamanda görsel olarak çarpıcı bir tavan ortaya çıkar.</p>
      <h2>Mühendis-mimar</h2>
      <p>Nervi, prefabrikasyon ile yerinde dökümü ustaca birleştirerek maliyeti düşürdü ve mühendisliği bir tasarım sanatına dönüştürdü. Onun yapılarında strüktür gizlenmez; aksine tavanın kendisi süslemedir. "Doğru olan, aynı zamanda güzeldir" düşüncesi tüm işlerine sinmiştir.</p>
      <blockquote>Sağlamlık, ekonomi ve güzellik aynı çözümün üç yüzüdür.</blockquote>
      <p class="article__note">Not: Bu yazı, Nervi'nin çalışmalarından derlenmiş açıklayıcı bir metindir; birebir çeviri değildir.</p>
    `,
  },
  {
    id: "leonhardt-koprular",
    title: "Fritz Leonhardt: İnce, Hafif ve Zarif Köprüler",
    tag: "Köprü",
    author: "Konu: F. Leonhardt · derleme",
    date: "2024-05-18",
    excerpt: "Öngerilmeli beton ve eğik askılı köprülerin öncüsü; ona göre bir köprü güvenli olduğu kadar güzel de olmalı.",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Stuttgarter_Fernsehturm6.jpg/1280px-Stuttgarter_Fernsehturm6.jpg",
    content: `
      <p><strong>Fritz Leonhardt</strong> (1909–1999), Alman inşaat mühendisidir; modern köprü ve kuleleriyle tanınır.</p>
      <h2>İnce ve zarif</h2>
      <p>Leonhardt, öngerilmeli beton ve eğik askılı (cable-stayed) köprülerin gelişiminde öncüydü. Yapılarında hafifliği ve estetiği mühendislik kadar önemsedi; ona göre bir köprü aynı zamanda güzel olmalıydı.</p>
      <h2>Stuttgart TV Kulesi</h2>
      <p>1956'da tamamlanan kule, dünyanın ilk betonarme televizyon kulesi olarak sonraki tüm kulelere örnek oldu — ince, zarif ve ekonomik.</p>
      <h2>Eğik askılı köprünün yükselişi</h2>
      <p>Leonhardt, II. Dünya Savaşı sonrası Almanya'sında çelik kıtlığı koşullarında, az malzemeyle uzun açıklık geçen eğik askılı (cable-stayed) köprülerin gelişimine öncülük etti. Bu sistemde tabla, kuleden inen çelik halatlarla noktasal olarak askıya alınır; böylece kiriş ince kalır, açıklık büyür.</p>
      <h2>Estetik bir mühendislik</h2>
      <p>Ona göre orantı, incelik ve çevreyle uyum, taşıyıcı hesap kadar önemliydi. Köprü estetiği üzerine yazdığı <em>Brücken</em> (Köprüler) kitabı, bir yapının nasıl hem güvenli hem güzel olabileceğini anlatan, hâlâ kullanılan bir başvuru kaynağıdır.</p>
      <blockquote>İyi bir köprü, hesabı doğru olduğu kadar gözü de dinlendirir.</blockquote>
      <p class="article__note">Not: Bu yazı, Leonhardt'ın çalışmalarından derlenmiş açıklayıcı bir metindir; birebir çeviri değildir.</p>
    `,
  },
  {
    id: "timoshenko-mekanik",
    title: "Timoshenko: Mühendislik Mekaniğinin Babası",
    tag: "Mekanik",
    author: "Konu: S. Timoshenko · derleme",
    date: "2024-05-22",
    excerpt: "Malzeme mukavemeti, elastisite, titreşim ve burkulma... Nesiller boyu mühendis yetiştiren kitapların yazarı.",
    cover: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Timoshenko_Stephen.jpg",
    content: `
      <p><strong>Stephen Timoshenko</strong> (1878–1972), Ukrayna doğumlu Amerikalı bilim insanıdır; "modern mühendislik mekaniğinin babası" sayılır.</p>
      <h2>Kitaplarıyla bir çağı eğitti</h2>
      <p>Malzeme mukavemeti, elastisite teorisi, titreşim ve stabilite (burkulma) üzerine yazdığı kitaplar dünyada nesiller boyu mühendis yetiştirdi.</p>
      <h2>Timoshenko kiriş teorisi</h2>
      <p>Klasik (Euler–Bernoulli) kiriş teorisi kayma şekil değiştirmesini ihmal eder. Timoshenko, kalın kirişlerde ve yüksek frekanslı titreşimde önemli olan kayma etkisini hesaba katan daha genel bir teori geliştirdi.</p>
      <h2>Rusya'dan ABD'ye uzanan bir yol</h2>
      <p>Timoshenko, Rusya İmparatorluğu'nda yetişti; devrim sonrası önce Avrupa'ya, ardından ABD'ye göç etti ve Michigan ile Stanford üniversitelerinde ders verdi. Avrupa'daki güçlü teorik geleneği Amerikan mühendislik eğitimine taşıması, bütün bir kıtanın mühendislik kültürünü değiştirdi.</p>
      <h2>Neyi çözer?</h2>
      <p>Klasik (Euler–Bernoulli) kiriş teorisi, kesitlerin eğilme sırasında düzlem kaldığını ve kaymanın ihmal edilebilir olduğunu varsayar. Bu, ince kirişlerde iyi çalışır; ancak kısa/kalın kirişlerde ve yüksek frekanslı titreşimde kayma şekil değiştirmesi önemlidir. Timoshenko kiriş teorisi, kaymayı ve dönme ataletini hesaba katarak bu durumlarda çok daha doğru sonuç verir.</p>
      <p>Malzeme mukavemeti, elastisite teorisi, plak-kabuk, titreşim ve elastik stabilite (burkulma) üzerine yazdığı kitaplar; bugün statik ve dinamik analizin temelini oluşturan bilgiyi derleyip sistemleştirdi.</p>
      <blockquote>Sağlam bir teori, en pratik araçtır.</blockquote>
      <p class="article__note">Not: Bu yazı, Timoshenko'nun çalışmalarından derlenmiş açıklayıcı bir metindir; birebir çeviri değildir.</p>
    `,
  },
  {
    id: "ustalardan-ogrendiklerim",
    title: "Ustalardan Öğrendiklerim: Statikten Çeliğe ve Betonarmeye",
    tag: "Derleme",
    author: "Can Okan Biçer",
    date: "2024-05-26",
    excerpt: "Khan, Cross, Freyssinet, Nervi, Leonhardt ve Timoshenko'nun fikirlerini kendi bakışımla harmanladım.",
    cover: "",
    content: `
      <p>Bu altı ismi okudukça aralarında ortak bir düşünce gördüm: <strong>malzemeyi ve formu, kuvvetin doğasına saygı göstererek kullanmak.</strong> Aşağıda kendi cümlelerimle harmanladım.</p>
      <h2>1. Malzemeyi güçlü olduğu yerde çalıştır</h2>
      <p>Freyssinet betonu basınçta tutmak için öngermeyi buldu; Khan yatay yükü binanın dış kabuğuna taşıttı. İkisi de aynı şeyi söylüyor: malzemeyle savaşma, onunla çalış.</p>
      <h2>2. Form, kuvveti izlesin</h2>
      <p>Nervi'nin nervürleri kuvvet çizgilerini takip eder. Gereksiz malzeme dayanıklılık değil, israftır.</p>
      <h2>3. Önce sezgi, sonra hesap</h2>
      <p>Hardy Cross karmaşık çerçeveleri elle, sezgiyle çözdü; Timoshenko bu sezginin altındaki teoriyi sağlamlaştırdı. İyi mühendis ikisini birden taşır.</p>
      <h2>4. Güvenlik kadar zarafet</h2>
      <p>Leonhardt bize bir yapının hem güvenli hem güzel olabileceğini gösterdi.</p>
      <blockquote>Mühendislik, kuvvetle kavga etmek değil; ona en kısa ve en dürüst yolu açmaktır.</blockquote>
      <p>— Can Okan Biçer</p>
    `,
  },
  {
    id: "ogrenme-yolculugu",
    title: "Bir şeyi gerçekten öğrenmek ne demek?",
    tag: "Öğrenme",
    author: "Can Okan Biçer",
    date: "2024-04-12",
    excerpt: "Bilgiyi ezberlemek ile onu kullanabilmek arasındaki uçurum ve bu uçurumu kapatmanın yolları üzerine bir deneme.",
    cover: "",
    content: `
      <p>Çoğumuz bir konuyu "biliyorum" sanırız; ta ki onu birine anlatmamız ya da
      gerçek bir problemde kullanmamız gerekene kadar. İşte o an, bilmek ile
      tanımak arasındaki farkı yüzümüze çarpar.</p>
      <h2>Üç aşama</h2>
      <ul>
        <li><strong>Tanıma:</strong> Konuyu duydum, ne olduğunu kabaca biliyorum.</li>
        <li><strong>Anlama:</strong> Neden öyle olduğunu açıklayabiliyorum.</li>
        <li><strong>Uygulama:</strong> Yeni bir durumda kullanabiliyorum.</li>
      </ul>
      <p>Gerçek öğrenme üçüncü aşamada başlar. Geri kalanı hazırlıktır.</p>
      <blockquote>Bir şeyi basitçe anlatamıyorsan, yeterince anlamamışsındır.</blockquote>
      <p>Bu yüzden bu siteyi de bir öğrenme aracı gibi görüyorum: yazdıkça anlıyorum.</p>
    `,
  },
];

/* PROJELER — dünyaca ünlü yapılar (özet bilgi kartları).
   Yeni yapı eklemek için: { name, loc, year, stat, icon, tag, desc }
   Veriler yaklaşık/genel kabuldür; kesin rakamları kaynaktan teyit et. */
const PROJECTS = [
  { name: "Eyfel Kulesi", loc: "Paris, Fransa", year: "1889", stat: "330 m", icon: "🗼", tag: "Kule",
    desc: "1889 Dünya Fuarı için Gustave Eiffel'in ekibi yaptı. ~18.000 dövme demir parça, ~2,5 milyon perçinle birleştirildi; o dönemde dünyanın en yüksek yapısıydı." },
  { name: "Kolezyum", loc: "Roma, İtalya", year: "MS 80", stat: "~48 m / 50.000 kişi", icon: "🏟️", tag: "Stadyum",
    desc: "Travertin taş, tüf ve tuğla kaplı betonla inşa edilen antik amfitiyatro. Kemerli galeriler ve vomitoria sayesinde on binlerce kişi hızla yerleşebiliyordu." },
  { name: "Anıtkabir", loc: "Ankara, Türkiye", year: "1953", stat: "Atatürk'ün anıt mezarı", icon: "🏛️", tag: "Anıt",
    desc: "Mimarlar Emin Onat ve Orhan Arda tasarladı (1944–1953). Sade, anıtsal taş kütleleri ve aslanlı yolu ile 2. Ulusal Mimarlık akımının simgesi." },
  { name: "Burj Khalifa", loc: "Dubai, BAE", year: "2010", stat: "828 m", icon: "🏙️", tag: "Gökdelen",
    desc: "Dünyanın en yüksek binası. 'Destekli çekirdek' (buttressed core) ve Y-plan, rüzgâr girdaplarını kıracak kademeli formla birleşir (SOM / Adrian Smith)." },
  { name: "Özgürlük Heykeli", loc: "New York, ABD", year: "1886", stat: "93 m (kaide dahil)", icon: "🗽", tag: "Anıt",
    desc: "Fransa'nın hediyesi. Bakır levha dış kabuk, içte Gustave Eiffel'in tasarladığı esnek demir iskelete oturur; parçalar Fransa'da üretilip gemiyle taşındı." },
  { name: "Çin Seddi", loc: "Çin", year: "MÖ 7. yy–", stat: "~21.000 km", icon: "🧱", tag: "Sur",
    desc: "Yüzyıllar boyunca taş, sıkıştırılmış toprak ve tuğlayla yapılan savunma duvarları dizisi. Tek değil, farklı hanedanların eklediği hatların toplamı." },
  { name: "Tac Mahal", loc: "Agra, Hindistan", year: "~1653", stat: "~73 m", icon: "🕌", tag: "Anıt",
    desc: "Şah Cihan'ın eşi için yaptırdığı beyaz mermer anıt mezar. Simetrik bahçe, yansıma havuzu ve kakma taş işçiliğiyle Babür mimarisinin zirvesi." },
  { name: "Pisa Kulesi", loc: "Pisa, İtalya", year: "1372", stat: "~57 m, ~4° eğik", icon: "🗼", tag: "Kule",
    desc: "Çan kulesi; yumuşak, dengesiz zemin nedeniyle inşaat sırasında eğilmeye başladı. Yıllar süren yapım ve sonradan zemin müdahaleleriyle dengelendi." },
  { name: "Ayasofya", loc: "İstanbul, Türkiye", year: "537", stat: "Kubbe ~31 m çap", icon: "🕌", tag: "Tapınak",
    desc: "Bizans mühendisliğinin başyapıtı. Pandantiflerle taşınan büyük kubbe, kâgir yapıda devasa açıklık geçmenin öncü örneğidir." },
  { name: "Sydney Opera Binası", loc: "Sidney, Avustralya", year: "1973", stat: "Kabuk çatılar", icon: "🏛️", tag: "Kültür",
    desc: "Jørn Utzon'un yelken benzeri betonarme kabuk çatıları; karmaşık geometrisi bilgisayar destekli yapısal hesabın öncü uygulamalarından." },
  { name: "Golden Gate Köprüsü", loc: "San Francisco, ABD", year: "1937", stat: "Açıklık 1.280 m", icon: "🌉", tag: "Köprü",
    desc: "Çelik asma köprü; 227 m kuleler ve ana kabloları rüzgâr ile depreme karşı esneyecek şekilde tasarlandı. İkonik turuncu rengi görünürlük için seçildi." },
  { name: "Empire State Building", loc: "New York, ABD", year: "1931", stat: "381 m (443 m anten)", icon: "🏙️", tag: "Gökdelen",
    desc: "Çelik çerçeve gökdelen; olağanüstü bir organizasyonla yaklaşık 410 günde tamamlandı, uzun yıllar dünyanın en yüksek binası oldu." },
  { name: "Gize Büyük Piramidi", loc: "Gize, Mısır", year: "~MÖ 2560", stat: "Orijinal ~146 m", icon: "🔺", tag: "Anıt",
    desc: "Firavun Keops için yapıldı. Milyonlarca kireçtaşı ve granit blok, hâlâ tartışılan rampa/kaldıraç yöntemleriyle hassas biçimde yerleştirildi." },
  { name: "Petronas İkiz Kuleleri", loc: "Kuala Lumpur, Malezya", year: "1998", stat: "452 m", icon: "🏙️", tag: "Gökdelen",
    desc: "İki kuleyi bağlayan gökyüzü köprüsüyle ünlü. Yüksek dayanımlı beton çekirdek kullanıldı; bir dönem dünyanın en yüksek binalarıydı (César Pelli)." },
  { name: "Millau Viyadüğü", loc: "Millau, Fransa", year: "2004", stat: "Kule 343 m", icon: "🌉", tag: "Köprü",
    desc: "Vadiyi geçen eğik askılı (cable-stayed) köprü; kuleleri dünyanın en yükseklerinden. Tabla, kademeli itme yöntemiyle yerine sürüldü." },
  { name: "CN Kulesi", loc: "Toronto, Kanada", year: "1976", stat: "553 m", icon: "🗼", tag: "Kule",
    desc: "Betonarme iletişim/gözlem kulesi; kayar kalıp (slipform) tekniğiyle sürekli döküm yapılarak yükseltildi. Cam tabanlı gözlem katıyla bilinir." },
  { name: "Tokyo Skytree", loc: "Tokyo, Japonya", year: "2012", stat: "634 m", icon: "🗼", tag: "Kule",
    desc: "Çelik kafes kule; geleneksel pagodadan esinlenen merkezi sönümleyici kolon, depremde sallanmayı azaltır. Dünyanın en yüksek kulelerinden." },
  { name: "Hoover Barajı", loc: "ABD (Nevada/Arizona)", year: "1936", stat: "221 m", icon: "🌊", tag: "Baraj",
    desc: "Colorado Nehri üzerinde kemer-ağırlık barajı. Devasa beton kütlesi, soğuması yıllar süreceği için soğutma borularıyla bloklar hâlinde döküldü." },
  { name: "Akashi Kaikyō Köprüsü", loc: "Kobe, Japonya", year: "1998", stat: "Açıklık ~1.991 m", icon: "🌉", tag: "Köprü",
    desc: "Uzun süre dünyanın en uzun açıklıklı asma köprüsü. İnşaat sırasında bir deprem kuleler arası mesafeyi değiştirdi; tasarım buna uyarlandı." },
  { name: "Selimiye Camii", loc: "Edirne, Türkiye", year: "1575", stat: "Kubbe ~31,5 m çap", icon: "🕌", tag: "Tapınak",
    desc: "Mimar Sinan'ın 'ustalık eserim' dediği yapı. Sekizgen taşıyıcı sistemle Ayasofya kubbesini aşma hedefiyle tasarlanmış, ince yapısal denge örneği." },
  { name: "Sagrada Família", loc: "Barselona, İspanya", year: "1882–", icon: "⛪", stat: "Hâlâ inşa ediliyor", tag: "Tapınak",
    desc: "Antoni Gaudí'nin bazilikası; ağaç gibi dallanan kolonlar ve hiperbolik geometriler, yükü doğal biçimde taşır. Bağışlarla onlarca yıldır sürüyor." },
  { name: "Şanghay Kulesi", loc: "Şanghay, Çin", year: "2015", stat: "632 m", icon: "🏙️", tag: "Gökdelen",
    desc: "Burgu gibi ~120° dönen formu rüzgâr yükünü ciddi azaltır. Çift cidarlı cephesi ve gökyüzü bahçeleriyle dünyanın en yüksek ikinci binası." },
  { name: "Pekin Ulusal Stadı (Kuş Yuvası)", loc: "Pekin, Çin", year: "2008", stat: "~42.000 ton çelik", icon: "🏟️", tag: "Stadyum",
    desc: "Olimpiyat stadı; iç içe geçmiş örgü biçimli çelik taşıyıcı kabuk hem strüktür hem cephe işlevi görür. Estetik ve mühendisliğin birleşimi." },
  { name: "Burj Al Arab", loc: "Dubai, BAE", year: "1999", stat: "321 m", icon: "🏨", tag: "Otel",
    desc: "Yelken formlu lüks otel; yapay ada üzerinde, dış cephede çelik exoskeleton ve büyük tekstil cepheyle tasarlandı." },
  { name: "Marina Bay Sands", loc: "Singapur", year: "2010", stat: "3 kule + SkyPark", icon: "🏨", tag: "Otel",
    desc: "Üç eğimli kule üzerine oturan 340 m'lik gökyüzü terası; konsol uçları ve karmaşık yatay yük taşıma sistemiyle dikkat çeker." },
  { name: "Panama Kanalı", loc: "Panama", year: "1914", stat: "~82 km", icon: "🚢", tag: "Altyapı",
    desc: "İki okyanusu bağlayan kanal. Gemileri kademeli olarak yükseltip indiren dev kilit (lock) havuzları sayesinde yükseklik farkı aşılır." },
  { name: "Galata Kulesi", loc: "İstanbul, Türkiye", year: "~1348", stat: "~67 m", icon: "🗼", tag: "Kule",
    desc: "Cenevizlilerin yaptığı taş gözetleme kulesi. Kalın duvarları ve konik külahıyla yüzyıllardır İstanbul siluetinin simgelerinden." },
  { name: "Machu Picchu", loc: "Peru", year: "~15. yy", stat: "İnka şehri", icon: "🏔️", tag: "Tarihi",
    desc: "And Dağları'nda taş şehir. Harçsız, hassas taş işçiliği (ashlar) ve teraslama, deprem ve eğimli araziye karşı olağanüstü dayanıklı." },
];

/* MÜHENDİSLİK — teknik notlar / konular.
   category ile gruplanır. */
/* MÜZİK
   Artık ELLE liste tutmana gerek YOK.
   Sadece mp3 dosyalarını "assets/music/" klasörüne at — oynatıcı
   klasörü otomatik tarayıp listeler. Dosya adından başlık/sanatçı
   çıkarır; "Sanatçı - Şarkı.mp3" gibi isimlendirirsen ikisini ayırır.

   Aşağıdaki TRACKS yalnızca YEDEK listedir: klasör boşken ya da
   sunucu klasör listelemeye izin vermiyorsa bunlar gösterilir.
   İstersen burayı boşaltabilirsin: const TRACKS = []; */
const TRACKS = [
  { title: "Demo Parça 1", artist: "SoundHelix", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "Demo Parça 2", artist: "SoundHelix", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
];

/* GALERİ — fotoğraflar.
   Kendi resimlerini "assets/img/" klasörüne koyup
   src'yi "../assets/img/dosya.jpg" yapabilirsin.
   Şimdilik örnek (placeholder) görseller kullanılıyor. */
const GALLERY = [
  { src: "https://picsum.photos/seed/cob1/800/600", caption: "Örnek görsel 1" },
  { src: "https://picsum.photos/seed/cob2/600/800", caption: "Örnek görsel 2" },
  { src: "https://picsum.photos/seed/cob3/800/600", caption: "Örnek görsel 3" },
  { src: "https://picsum.photos/seed/cob4/800/800", caption: "Örnek görsel 4" },
  { src: "https://picsum.photos/seed/cob5/600/800", caption: "Örnek görsel 5" },
  { src: "https://picsum.photos/seed/cob6/800/600", caption: "Örnek görsel 6" },
];

/* HABERLER — kısa duyuru/güncelleme akışı (zaman tüneli).
   type: "oyun" | "yazi" | "duyuru" | "guncelleme"
   link (opsiyonel): ilgili sayfaya bağlantı */
const NEWS = [
  {
    date: "2024-04-20",
    type: "oyun",
    title: "Tavla Zarı yayında!",
    body: "İki oyunculu, renk seçilebilen, geçmiş ve kazanma oranı gösteren zar atıcı eklendi.",
    link: "oyun-zar.html",
  },
  {
    date: "2024-04-05",
    type: "oyun",
    title: "Tetris eklendi",
    body: "Klasik Tetris artık oyunlar bölümünde. Skorunu kırmaya çalış!",
    link: "oyun-tetris.html",
  },
  {
    date: "2024-03-15",
    type: "duyuru",
    title: "Site yayında",
    body: "Kişisel sitemin ilk sürümü hazır. Blog, projeler ve oyunlarla başlıyoruz.",
    link: "../index.html",
  },
];

/* ===== DERS NOTLARI =====
   Her ders: { id, title, subtitle, soon?, topics:[{title, body(HTML)}] }
   body içinde:
     <p>...</p>                        açıklama
     <div class="ders-f">FORMÜL</div>  formül kutusu
     <p class="ders-ex"><b>Örnek:</b> ...</p>  örnek
   Not: Özgün özet notlardır. Sayısal katsayı/yönetmelik maddelerini
   (TS 500, TBDY 2018, Eurocode) güncel kaynaktan teyit et. */
const COURSES = [
  {
    id: "statik1",
    title: "Statik 1",
    subtitle: "Kuvvet sistemleri ve denge",
    topics: [
      {
        title: "Temel kavramlar",
        body: `
          <p>Statik, dengede (hareketsiz ya da sabit hızda) olan cisimlere etkiyen kuvvetleri inceler. Skaler büyüklüğün yalnız değeri (kütle, zaman), vektörel büyüklüğün ise değeri <em>ve</em> yönü vardır (kuvvet, moment).</p>
          <div class="ders-f">Newton 2. yasa: F = m · a &nbsp;|&nbsp; SI birimleri: kuvvet [N], kütle [kg], uzunluk [m]</div>
          <p>1 N = 1 kg·m/s². Yer çekimi ivmesi g ≈ 9,81 m/s²; bir kütlenin ağırlığı W = m·g.</p>
          <p class="ders-ex"><b>Örnek:</b> 50 kg kütlenin ağırlığı W = 50 · 9,81 = 490,5 N.</p>`,
      },
      {
        title: "Kuvvet vektörleri ve bileşenler",
        body: `
          <p>Bir kuvvet, dik eksenlerdeki bileşenlerine ayrılabilir. Yatayla θ açısı yapan F kuvveti için:</p>
          <div class="ders-f">Fₓ = F·cosθ &nbsp;&nbsp; F_y = F·sinθ &nbsp;&nbsp; F = √(Fₓ² + F_y²) &nbsp;&nbsp; θ = arctan(F_y / Fₓ)</div>
          <p>Bileşenlerle çalışmak, vektörleri toplamayı basit cebire indirger.</p>
          <p class="ders-ex"><b>Örnek:</b> F = 100 N, θ = 30° → Fₓ = 100·cos30° ≈ 86,6 N, F_y = 100·sin30° = 50 N.</p>`,
      },
      {
        title: "Bileşke kuvvet",
        body: `
          <p>Bir noktaya etkiyen birden çok kuvvetin yerini tek bir <strong>bileşke (R)</strong> alır. Bileşke, bileşenlerin eksen bazında toplanmasıyla bulunur:</p>
          <div class="ders-f">Rₓ = ΣFₓ &nbsp;&nbsp; R_y = ΣF_y &nbsp;&nbsp; R = √(Rₓ² + R_y²)</div>
          <p class="ders-ex"><b>Örnek:</b> Fₓ toplamı 120 N, F_y toplamı 90 N ise R = √(120² + 90²) = 150 N.</p>`,
      },
      {
        title: "Moment",
        body: `
          <p>Moment, bir kuvvetin bir nokta etrafında döndürme etkisidir. Büyüklüğü, kuvvet ile kuvvetin etki çizgisinin noktaya <strong>dik uzaklığının</strong> çarpımıdır.</p>
          <div class="ders-f">M = F · d &nbsp;&nbsp; (d: dik uzaklık) &nbsp;|&nbsp; Vektörel: M = r × F &nbsp;|&nbsp; Birim: [N·m]</div>
          <p>Varignon teoremi: Bir kuvvetin bir noktaya momenti, bileşenlerinin o noktaya momentleri toplamına eşittir.</p>
          <p class="ders-ex"><b>Örnek:</b> 200 N kuvvet, dönme noktasına 0,4 m dik uzaklıkta → M = 200 · 0,4 = 80 N·m.</p>`,
      },
      {
        title: "Kuvvet çifti (couple)",
        body: `
          <p>Eşit büyüklükte, zıt yönlü ve paralel iki kuvvet bir <strong>kuvvet çifti</strong> oluşturur. Net kuvvet sıfırdır ama saf bir döndürme momenti üretir; bu moment <em>serbest vektördür</em> (her noktaya göre aynıdır).</p>
          <div class="ders-f">M = F · d &nbsp;&nbsp; (d: iki kuvvet arasındaki dik mesafe)</div>
          <p class="ders-ex"><b>Örnek:</b> 50 N'luk iki zıt kuvvet 0,3 m arayla → çift momenti M = 50 · 0,3 = 15 N·m.</p>`,
      },
      {
        title: "Parçacık dengesi",
        body: `
          <p>Boyutu ihmal edilebilen bir cisim (parçacık) dengede ise üzerine etkiyen tüm kuvvetlerin bileşkesi sıfırdır.</p>
          <div class="ders-f">ΣFₓ = 0 &nbsp;&nbsp; ΣF_y = 0 &nbsp;&nbsp; (3B'de ayrıca ΣF_z = 0)</div>
          <p>Bu iki denklemle en çok iki bilinmeyen (ör. iki ip gerilmesi) çözülür.</p>
          <p class="ders-ex"><b>Örnek:</b> Bir yük iki iple asılıysa, yatay ve düşey denge denklemleri yazılıp ip kuvvetleri bulunur.</p>`,
      },
      {
        title: "Rijit cisim dengesi",
        body: `
          <p>Boyutu olan (rijit) bir cismin dengesi için kuvvet dengesine ek olarak <strong>moment dengesi</strong> de sağlanmalıdır:</p>
          <div class="ders-f">ΣFₓ = 0 &nbsp;&nbsp; ΣF_y = 0 &nbsp;&nbsp; ΣM = 0</div>
          <p>Düzlemde 3 denklem → en çok 3 bilinmeyen tepki çözülür. Moment denklemini bilinmeyenlerin kesiştiği noktaya göre yazmak çözümü kolaylaştırır.</p>
          <p class="ders-ex"><b>Örnek:</b> Basit kirişte ΣM_A = 0 yazılıp B mesnedi tepkisi, sonra ΣF_y = 0 ile A tepkisi bulunur.</p>`,
      },
      {
        title: "Mesnetler ve serbest cisim diyagramı",
        body: `
          <p>Çözümün ilk adımı <strong>serbest cisim diyagramı (SCD)</strong>: cismi ayırıp üzerine etkiyen tüm dış kuvvet ve tepkileri çizmek. Mesnet tipi, kaç tepki bileşeni olduğunu belirler:</p>
          <div class="ders-f">Kayıcı (rulo): 1 tepki &nbsp;·&nbsp; Sabit mafsal: 2 tepki &nbsp;·&nbsp; Ankastre: 3 tepki (2 kuvvet + 1 moment)</div>
          <p>Bilinmeyen sayısı = denklem sayısı ise sistem <em>statik belirli</em>dir; fazlaysa <em>hiperstatik</em>tir (Mukavemet'te çözülür).</p>
          <p class="ders-ex"><b>Örnek:</b> Bir ucu mafsal (2), diğer ucu rulo (1) olan basit kiriş → 3 bilinmeyen, 3 denklem → statik belirli.</p>`,
      },
    ],
  },
  {
    id: "statik2",
    title: "Statik 2",
    subtitle: "Kafes sistemler, sürtünme, atalet momenti ve iç kuvvetler",
    topics: [
      {
        title: "Kafes sistemler ve düğüm yöntemi",
        body: `
          <p>Kafes (truss), uçlarından mafsallı birleşen ve yalnızca <strong>eksenel kuvvet</strong> (çekme veya basınç) taşıyan çubuklardan oluşan sistemdir. Yükler düğüm noktalarına etki eder; çubuklar eğilme almaz.</p>
          <p>Temel varsayımlar: çubuklar ağırlıksız, birleşimler sürtünmesiz mafsal, dış yükler yalnızca düğümlerde.</p>
          <div class="ders-f">Her düğümde: ΣFₓ = 0 &nbsp;&nbsp; ΣF_y = 0 &nbsp;(düğüm başına 2 denklem)</div>
          <p>Çözüme, bilinmeyen çubuk kuvveti en az (1–2) olan düğümden başlanır. Çubuktan uzağa doğru çıkan kuvvet <em>çekme</em> (+), düğüme doğru olan <em>basınç</em> (−) kabul edilir.</p>
          <p class="ders-ex"><b>Örnek:</b> Üçgen bir kafeste, yük uygulanan düğümde ΣF_y = 0 yazılıp ilk çubuk kuvveti, ardından ΣFₓ = 0 ile ikinci çubuk bulunur.</p>`,
      },
      {
        title: "Kafeste kesim (kesit) yöntemi",
        body: `
          <p>Belirli bir çubuğun kuvvetini doğrudan bulmak için kafes, hayalî bir <strong>kesitle</strong> ikiye ayrılır ve bir parçanın dengesi yazılır. Tüm rijit cisim denge denklemleri kullanılabilir.</p>
          <div class="ders-f">Kesilen parça için: ΣFₓ = 0 &nbsp;&nbsp; ΣF_y = 0 &nbsp;&nbsp; ΣM = 0</div>
          <p>İdeal kesim en çok 3 bilinmeyen çubuğu keser. <strong>Moment merkezi</strong>ni, diğer iki bilinmeyenin kesiştiği noktaya alırsan aradığın çubuğu tek denklemde çözersin.</p>
          <p class="ders-ex"><b>Örnek:</b> Köprü kafesinde ortadaki bir alt başlık çubuğunun kuvvetini bulmak için o bölgeden kesip, üst düğüme göre ΣM = 0 yazmak yeterlidir.</p>`,
      },
      {
        title: "Çerçeveler ve makineler",
        body: `
          <p>Çerçeve (frame), en az bir <strong>çok-kuvvetli eleman</strong> içeren ve sabit yük taşıyan yapıdır; makine ise kuvvet iletmek/çoğaltmak için hareketli parçalar içerir.</p>
          <p>Çözümde sistem elemanlara ayrılır, her elemanın serbest cisim diyagramı çizilir ve birleşim noktalarında <strong>etki–tepki</strong> (Newton 3) uygulanır.</p>
          <div class="ders-f">Her eleman için: ΣFₓ = 0 · ΣF_y = 0 · ΣM = 0</div>
          <p class="ders-ex"><b>Örnek:</b> Bir kıskaçta (makine) tutma kuvvetini bulmak için kollar ayrı ayrı çözülüp mafsaldaki tepkiler ortak alınır.</p>`,
      },
      {
        title: "Ağırlık merkezi (centroid)",
        body: `
          <p>Bir alanın ya da cismin ağırlık merkezi, alanın "dengelendiği" noktadır. Bileşik şekiller, basit parçalara bölünerek bulunur.</p>
          <div class="ders-f">x̄ = Σ(x_i·A_i) / ΣA_i &nbsp;&nbsp; ȳ = Σ(y_i·A_i) / ΣA_i</div>
          <p>Boşluk (delik) negatif alan olarak işleme katılır. Simetri ekseni varsa ağırlık merkezi o eksen üzerindedir.</p>
          <p class="ders-ex"><b>Örnek:</b> L kesitini iki dikdörtgene böl; her birinin alanı ve kendi merkezini bulup formülde topla.</p>`,
      },
      {
        title: "Atalet momenti (ikinci alan momenti)",
        body: `
          <p>Atalet momenti, bir kesitin eğilmeye karşı direncinin ölçüsüdür; malzeme eksene ne kadar uzaksa katkısı o kadar büyüktür.</p>
          <div class="ders-f">I = ∫ y² dA &nbsp;|&nbsp; Dikdörtgen: I = b·h³/12 &nbsp;|&nbsp; Paralel eksen: I = I_c + A·d²</div>
          <p>Yükseklik (h) küpsel etki ettiği için kiriş yüksekliğini artırmak direnci en çok büyüten yoldur. Paralel eksen teoremi, kendi merkezinden uzaktaki parçaların katkısını ekler.</p>
          <p class="ders-ex"><b>Örnek:</b> 100×300 mm dikdörtgen kesit: I = 100·300³/12 = 2,25×10⁸ mm⁴.</p>`,
      },
      {
        title: "Sürtünme",
        body: `
          <p>Kuru (Coulomb) sürtünme, temas eden yüzeyler arasında harekete karşı koyan kuvvettir. Cisim kaymadan önce sürtünme, dengeyi sağlayacak değeri alır (statik); kayma anında en yüksek değere ulaşır.</p>
          <div class="ders-f">Kaymadan önce: F ≤ μ_s·N &nbsp;&nbsp; Kayma anında: F = μ_k·N &nbsp;(μ_k &lt; μ_s)</div>
          <p>Sürtünme açısı φ = arctan(μ). Eğik düzlemde cisim, eğim açısı bu değeri aşınca kaymaya başlar.</p>
          <p class="ders-ex"><b>Örnek:</b> μ_s = 0,3 ve N = 200 N ise cismi kaydırmak için gereken en küçük yatay kuvvet F = 0,3·200 = 60 N.</p>`,
      },
      {
        title: "İç kuvvetler: Normal, Kesme, Moment",
        body: `
          <p>Bir elemanı herhangi bir kesitten ayırdığında, denge için o kesitte üç iç tesir bulunur: <strong>normal kuvvet (N)</strong>, <strong>kesme kuvveti (V)</strong> ve <strong>eğilme momenti (M)</strong>.</p>
          <div class="ders-f">Kesimden sonra bir parça için: ΣFₓ=0 → N · ΣF_y=0 → V · ΣM=0 → M</div>
          <p>İşaret kuralı: çekme N pozitif; kesiti saat yönünde döndüren V pozitif; alt lifte çekme oluşturan M pozitif (yaygın kabul).</p>
          <p class="ders-ex"><b>Örnek:</b> Ucundan P yükü taşıyan konsolun ankastre kesitinde V = P, M = P·L olur.</p>`,
      },
      {
        title: "Kesme kuvveti ve moment diyagramları (V–M)",
        body: `
          <p>Kesme kuvveti (V) ve eğilme momentinin (M) kiriş boyunca değişimi diyagramlarla gösterilir; tasarımda en kritik kesitleri bulmak için kullanılır.</p>
          <div class="ders-f">dV/dx = −w(x) &nbsp;&nbsp; dM/dx = V(x)</div>
          <p>Yani yayılı yük V eğrisinin eğimini, V de M eğrisinin eğimini verir. M, V'nin sıfır olduğu yerde en büyük/küçük değerini alır. Diyagram altındaki alan, bir sonraki büyüklüğün değişimini verir.</p>
          <p class="ders-ex"><b>Örnek:</b> Ortadan tekil yük P alan, L açıklıklı basit kirişte mesnet tepkileri P/2; orta kesitte M_max = P·L/4.</p>`,
      },
    ],
  },
  {
    id: "mukavemet1",
    title: "Mukavemet 1",
    subtitle: "Gerilme, şekil değiştirme, eksenel yük, burulma ve eğilme",
    topics: [
      {
        title: "Gerilme (stress)",
        body: `
          <p>Gerilme, bir kesitte birim alana düşen iç kuvvettir. İki temel türü vardır: kesite <strong>dik</strong> normal gerilme (σ) ve kesite <strong>paralel</strong> kayma gerilmesi (τ).</p>
          <div class="ders-f">Normal: σ = N / A &nbsp;&nbsp; Kayma: τ = V / A &nbsp;&nbsp; Birim: 1 Pa = 1 N/m², pratikte MPa = N/mm²</div>
          <p>Çekme gerilmesi (+), basınç (−) kabul edilir. Aynı kuvvet altında kesit alanı küçükse gerilme büyür — kırılma çoğu zaman en küçük kesitte başlar.</p>
          <p class="ders-ex"><b>Örnek:</b> 20 kN çekme kuvveti, 100 mm² kesitli çubukta → σ = 20000 N / 100 mm² = 200 MPa.</p>`,
      },
      {
        title: "Şekil değiştirme ve Hooke yasası",
        body: `
          <p>Birim şekil değiştirme (ε), boydaki değişimin ilk boya oranıdır (birimsiz). Elastik bölgede gerilme ile orantılıdır; orantı sabiti <strong>elastisite modülü E</strong>'dir.</p>
          <div class="ders-f">ε = ΔL / L &nbsp;&nbsp; Hooke: σ = E·ε &nbsp;&nbsp; (çelik E ≈ 200 GPa, alüminyum ≈ 70 GPa, beton ≈ 30 GPa)</div>
          <p>Gerilme–şekil değiştirme eğrisinde: orantı sınırı, akma noktası, en büyük dayanım ve kopma yer alır. Akmaya kadar yük kaldırılırsa eleman eski boyuna döner (elastik); akma aşılırsa kalıcı şekil değiştirme olur.</p>
          <p class="ders-ex"><b>Örnek:</b> σ = 200 MPa, E = 200 GPa → ε = 200/200000 = 0,001 = %0,1.</p>`,
      },
      {
        title: "Eksenel yükleme ve uzama",
        body: `
          <p>Eksenel yüklü bir çubuğun toplam uzaması, gerilme ve Hooke yasasından türetilir. Kesit/kuvvet boyunca değişiyorsa parçalara bölünür ya da integral alınır.</p>
          <div class="ders-f">δ = N·L / (A·E) &nbsp;&nbsp; Birden çok parça: δ = Σ NᵢLᵢ / (AᵢEᵢ)</div>
          <p>A·E çarpımı "eksenel rijitlik"tir; büyükse aynı yük altında uzama küçük olur. Kademeli çubuklarda her bölümün uzaması ayrı hesaplanıp toplanır.</p>
          <p class="ders-ex"><b>Örnek:</b> N=20 kN, L=2 m, A=100 mm², E=200 GPa → δ = (20000·2000)/(100·200000) = 2 mm.</p>`,
      },
      {
        title: "Poisson oranı ve kayma modülü",
        body: `
          <p>Bir çubuk eksende uzarken yanal olarak incelir. Yanal şekil değiştirmenin eksenele oranı <strong>Poisson oranı (ν)</strong>'dır (çelik için ≈ 0,3). Kayma için karşılığı <strong>kayma modülü G</strong>'dir.</p>
          <div class="ders-f">ν = −ε_yanal / ε_eksenel &nbsp;&nbsp; τ = G·γ &nbsp;&nbsp; G = E / [2(1+ν)]</div>
          <p>γ kayma şekil değiştirmesidir (açısal). Bu üç sabit (E, G, ν) birbirine bağlıdır; ikisi bilinince üçüncüsü bulunur.</p>
          <p class="ders-ex"><b>Örnek:</b> E=200 GPa, ν=0,3 → G = 200/[2(1,3)] ≈ 76,9 GPa.</p>`,
      },
      {
        title: "Sıcaklık (termal) gerilmeleri",
        body: `
          <p>Sıcaklık değişimi cismi serbestçe uzatır/kısaltır. Eleman engellenmemişse gerilme oluşmaz, sadece boy değişir. Ama iki ucu tutulu (engelli) ise uzayamadığı için <strong>termal gerilme</strong> doğar.</p>
          <div class="ders-f">Serbest uzama: δ_T = α·ΔT·L &nbsp;&nbsp; Tam engelli: σ = E·α·ΔT &nbsp;(çelik α ≈ 12×10⁻⁶/°C)</div>
          <p>Bu yüzden köprü, ray ve uzun yapılarda <strong>genleşme derzi</strong> bırakılır; aksi halde sıcakta büyük basınç gerilmeleri ve burkulma olur.</p>
          <p class="ders-ex"><b>Örnek:</b> İki ucu tutulu çelik çubuk ΔT=+30°C → σ = 200000·12×10⁻⁶·30 = 72 MPa (basınç).</p>`,
      },
      {
        title: "Burulma (torsion)",
        body: `
          <p>Bir mili kendi ekseni etrafında döndüren momente <strong>burulma momenti (T)</strong> denir. Dairesel kesitte kayma gerilmesi merkezde sıfır, dış yüzeyde en büyüktür.</p>
          <div class="ders-f">τ = T·ρ / J &nbsp;&nbsp; Dönme açısı: φ = T·L / (G·J) &nbsp;&nbsp; Dolu daire: J = π·d⁴/32</div>
          <p>J polar atalet momentidir. İçi boş mil, aynı malzemeyle daha hafif olup yüksek burulma direnci verir (malzeme dışta toplanır).</p>
          <p class="ders-ex"><b>Örnek:</b> d=40 mm dolu mil, T=500 N·m → J=π·40⁴/32 ≈ 2,51×10⁵ mm⁴; τ_max = 500000·20/251000 ≈ 39,8 MPa.</p>`,
      },
      {
        title: "Eğilmede normal gerilme",
        body: `
          <p>Eğilen kirişte üst lifler kısalır (basınç), alt lifler uzar (çekme); ortada gerilmenin sıfır olduğu <strong>tarafsız eksen</strong> bulunur. Gerilme, tarafsız eksenden uzaklıkla doğrusal artar.</p>
          <div class="ders-f">σ = M·y / I &nbsp;&nbsp; En büyük: σ_max = M / W &nbsp;&nbsp; (W = I / y_max: mukavemet momenti)</div>
          <p>Kiriş yüksekliğini artırmak I'yı küpsel büyüttüğü için eğilme direncini en çok artıran yoldur. Bu yüzden kirişler "yüksek" tasarlanır (I, kutu, T profilleri).</p>
          <p class="ders-ex"><b>Örnek:</b> 50×150 mm dikdörtgen, M=6 kN·m. I=50·150³/12=1,40×10⁷ mm⁴; y=75 → σ_max=6×10⁶·75/1,40×10⁷ ≈ 32,1 MPa.</p>`,
      },
      {
        title: "Kirişte kayma gerilmesi",
        body: `
          <p>Eğilen kirişte, kesme kuvveti (V) kesit içinde kayma gerilmesi de oluşturur. Bu gerilme tarafsız eksende en büyük, dış liflerde sıfırdır.</p>
          <div class="ders-f">τ = V·Q / (I·b) &nbsp;&nbsp; Dikdörtgende: τ_max = 1,5 · V / A</div>
          <p>Q, kesilen alanın tarafsız eksene göre statik momentidir. I-profillerinde kaymayı çoğunlukla gövde taşır; bu yüzden kesme kontrolünde gövde alanı önemlidir.</p>
          <p class="ders-ex"><b>Örnek:</b> Dikdörtgen kesit, V=30 kN, A=7500 mm² → τ_max = 1,5·30000/7500 = 6 MPa.</p>`,
      },
      {
        title: "Emniyet gerilmesi ve tasarım",
        body: `
          <p>Belirsizliklere (malzeme, yük, üretim) karşı, izin verilen gerilme malzeme dayanımının altında tutulur. Oran <strong>emniyet katsayısı (n)</strong>'dır.</p>
          <div class="ders-f">σ_emniyet = σ_akma / n &nbsp;&nbsp; Tasarım: σ_çalışma ≤ σ_emniyet &nbsp;(yapılarda n ≈ 1,5–3)</div>
          <p>Kesit boyutlandırma: önce iç kuvvet (N, M, V) bulunur, sonra σ ≤ σ_emniyet koşulundan gerekli alan/kesit seçilir. Modern yönetmelikler bunu yük ve dayanım faktörleriyle (LRFD) yapar.</p>
          <p class="ders-ex"><b>Örnek:</b> σ_akma=240 MPa, n=2 → σ_emniyet=120 MPa. 30 kN çekme için gereken alan: A ≥ 30000/120 = 250 mm².</p>`,
      },
    ],
  },
  {
    id: "mukavemet2",
    title: "Mukavemet 2",
    subtitle: "Bileşik yük, gerilme dönüşümü, burkulma, sehim ve enerji",
    topics: [
      {
        title: "Bileşik yükleme",
        body: `
          <p>Gerçek elemanlar genelde aynı anda birden çok etki taşır (eksenel + eğilme, eğilme + burulma...). Doğrusal davranışta etkiler <strong>üst üste eklenir</strong> (süperpozisyon).</p>
          <div class="ders-f">Eksenel + eğilme: σ = N/A ± M·y/I &nbsp;&nbsp; (aynı noktada toplam gerilme)</div>
          <p>İşaretlere dikkat: eğilmenin çekme tarafı ile eksenel çekme aynı yönde toplanır. Eksantrik (merkez dışı) yük de N/A + M/W olarak çözülür (M = N·e).</p>
          <p class="ders-ex"><b>Örnek:</b> Kolona N=100 kN basınç, e=50 mm dışmerkez. M=100·0,05=5 kN·m; gerilme bir kenarda artar, diğerinde azalır (σ = N/A ± M/W).</p>`,
      },
      {
        title: "Düzlem gerilme ve dönüşüm",
        body: `
          <p>Bir noktadaki gerilme durumu, baktığın <strong>açıya göre</strong> değişir. Dönüşüm denklemleri, σx, σy, τxy bilindiğinde herhangi bir θ açısındaki gerilmeleri verir.</p>
          <div class="ders-f">σθ = (σx+σy)/2 + (σx−σy)/2·cos2θ + τxy·sin2θ<br>τθ = −(σx−σy)/2·sin2θ + τxy·cos2θ</div>
          <p>Amaç: malzemenin en çok zorlandığı yönü (en büyük gerilme) bulmak. Çünkü kırılma, en yüksek gerilmenin olduğu düzlemde başlar.</p>
          <p class="ders-ex"><b>Örnek:</b> σx=80, σy=20, τxy=30 MPa için θ=30°'de σθ ve τθ formüllere konup hesaplanır.</p>`,
      },
      {
        title: "Asal gerilmeler ve maksimum kayma",
        body: `
          <p><strong>Asal gerilmeler</strong> (σ₁, σ₂), kayma gerilmesinin sıfır olduğu düzlemlerdeki en büyük ve en küçük normal gerilmelerdir. Tasarımda kritik değerlerdir.</p>
          <div class="ders-f">σ₁,₂ = (σx+σy)/2 ± √[((σx−σy)/2)² + τxy²]<br>τ_max = √[((σx−σy)/2)² + τxy²] = (σ₁−σ₂)/2</div>
          <p>Sünek malzemeler genelde maksimum kaymada, gevrek malzemeler maksimum çekmede göçer.</p>
          <p class="ders-ex"><b>Örnek:</b> σx=80, σy=20, τxy=30 → ortalama=50, yarıçap=√(30²+30²)=42,4 → σ₁=92,4, σ₂=7,6 MPa; τ_max=42,4 MPa.</p>`,
      },
      {
        title: "Mohr dairesi",
        body: `
          <p>Mohr dairesi, gerilme dönüşümünü görselleştiren bir çemberdir. Merkezi (σx+σy)/2'de, yarıçapı τ_max kadardır. Çember üzerindeki her nokta bir düzlemdeki (σ, τ) çiftini verir.</p>
          <div class="ders-f">Merkez C = (σx+σy)/2 &nbsp;&nbsp; Yarıçap R = √[((σx−σy)/2)² + τxy²]<br>σ₁ = C+R · σ₂ = C−R · τ_max = R</div>
          <p>Asal gerilmeler çemberin yatay eksenle kesiştiği noktalar; en büyük kayma çemberin tepe noktasıdır. Açıların gerçekte yarısı çemberde gösterilir (2θ).</p>
          <p class="ders-ex"><b>Örnek:</b> Yukarıdaki durumda çember merkezi 50, yarıçapı 42,4; soldan/sağdan kesişimler σ₂=7,6 ve σ₁=92,4 MPa.</p>`,
      },
      {
        title: "Kolon burkulması (Euler)",
        body: `
          <p>Narin (uzun-ince) basınç çubukları, malzeme ezilmeden çok önce yana atarak (burkularak) göçer. Kritik yük Euler formülüyle bulunur.</p>
          <div class="ders-f">P_cr = π²·E·I / (L_k)² &nbsp;&nbsp; L_k = K·L (mesnet katsayısı)<br>K: iki ucu mafsallı=1 · ankastre-serbest=2 · iki ucu ankastre=0,5</div>
          <p>Burkulma yükü kesitin <strong>en küçük</strong> atalet momentine bağlıdır (çubuk zayıf eksenden atar). Narinlik arttıkça (uzun, ince) kritik yük hızla düşer.</p>
          <p class="ders-ex"><b>Örnek:</b> İki ucu mafsallı, L=3 m, E=200 GPa, I=2×10⁶ mm⁴ → P_cr = π²·200000·2×10⁶/3000² ≈ 438 kN.</p>`,
      },
      {
        title: "Kirişlerde sehim (deflection)",
        body: `
          <p>Yük altında kirişin düşey yer değiştirmesine <strong>sehim</strong> denir. Servis (kullanım) açısından sınırlanır; çok sehen kiriş çatlatır, titreşir, kötü görünür.</p>
          <div class="ders-f">Elastik eğri: EI·y'' = M(x) &nbsp;&nbsp; (iki kez integralle y(x) bulunur)<br>Tipik: ortadan tekil yük P, basit kiriş → δ_max = P·L³/(48·EI)<br>Yayılı yük w → δ_max = 5·w·L⁴/(384·EI)</div>
          <p>EI "eğilme rijitliği"dir. Açıklık (L) dördüncü kuvvetle girer; bu yüzden açıklığı büyütmek sehimi çok artırır.</p>
          <p class="ders-ex"><b>Örnek:</b> P=20 kN, L=4 m, EI=2×10¹³ N·mm² → δ = 20000·4000³/(48·2×10¹³) ≈ 1,33 mm.</p>`,
      },
      {
        title: "Statik belirsiz (hiperstatik) sistemler",
        body: `
          <p>Bilinmeyen tepki sayısı denge denklemlerinden fazlaysa sistem <strong>hiperstatiktir</strong>; tek başına denge yetmez. Ek olarak <strong>uygunluk (deformasyon) koşulları</strong> yazılır.</p>
          <div class="ders-f">Çözüm: Denge denklemleri + uygunluk (ör. mesnette sehim = 0) → tüm bilinmeyenler</div>
          <p>Süperpozisyon yöntemi: fazla mesneti kaldır, sehimi hesapla; sonra o mesnedin kuvvetinin tek başına yaptığı ters sehimi eşitle. Hiperstatik sistemler daha rijit ve güvenlidir (yük yolu çoktur).</p>
          <p class="ders-ex"><b>Örnek:</b> Üç mesnetli sürekli kiriş: orta mesnet tepkisi, orta noktada sehim=0 koşuluyla bulunur.</p>`,
      },
      {
        title: "Enerji yöntemleri",
        body: `
          <p>Bir elemanda biriken şekil değiştirme enerjisi, yer değiştirme hesabında güçlü bir araçtır. <strong>Castigliano teoremi</strong> ile karmaşık sistemlerde sehim/dönme kolayca bulunur.</p>
          <div class="ders-f">Eksenel enerji: U = N²L/(2AE) · Eğilme: U = ∫ M²/(2EI) dx<br>Castigliano: δ = ∂U/∂P (yük yönündeki yer değiştirme)</div>
          <p>Virtüel iş yöntemi de benzer mantıkla, birim sanal yük uygulayıp gerçek deformasyonla çarparak yer değiştirme verir. Kafes ve çerçevelerde çok pratiktir.</p>
          <p class="ders-ex"><b>Örnek:</b> Ucundan P yüklü konsolun uç sehimi, U = ∫M²/(2EI)dx alınıp ∂U/∂P ile δ = P·L³/(3EI) olarak bulunur.</p>`,
      },
      {
        title: "Göçme kriterleri",
        body: `
          <p>Çok eksenli gerilme altında malzeme ne zaman göçer? Tek eksenli akma dayanımını çok eksenli duruma bağlayan kriterler kullanılır.</p>
          <div class="ders-f">von Mises (sünek): σ_eş = √(σ₁²−σ₁σ₂+σ₂²) ≤ σ_akma<br>Tresca (maks. kayma): (σ₁−σ₂) ≤ σ_akma</div>
          <p>Sünek metaller için von Mises gerçeğe daha yakındır; Tresca daha güvenli (muhafazakâr) tarafta kalır. Gevrek malzemelerde ise maksimum normal gerilme kriteri kullanılır.</p>
          <p class="ders-ex"><b>Örnek:</b> σ₁=92,4, σ₂=7,6 MPa → σ_eş=√(92,4²−92,4·7,6+7,6²) ≈ 89 MPa; σ_akma=240 ise güvenli.</p>`,
      },
    ],
  },
  { id: "betonarme1", title: "Betonarme 1", subtitle: "Malzeme, eğilme, kesme, kenetlenme", soon: true, topics: [] },
  { id: "betonarme2", title: "Betonarme 2", subtitle: "Kolon, temel, döşeme, detaylandırma", soon: true, topics: [] },
];

/* ===== MÜHENDİSLİK İÇERİĞİ ===== */

/* Teoriler — hangi teori neye yarar? */
const ENG_THEORIES = [
  { name: "Hooke Yasası (σ = E·ε)", use: "Elastik bölgede gerilme (σ) ile birim şekil değiştirme (ε) doğru orantılıdır; orantı sabiti elastisite modülü E'dir (çelik ≈ 200 GPa, beton ≈ 30 GPa). Sehim, rijitlik ve geri-dönüşlü deformasyon hesaplarının temelidir." },
  { name: "Euler Burkulması (P_cr = π²EI / Lₖ²)", use: "Narin bir basınç çubuğu, dayanımına ulaşmadan kritik yükte yana atıp göçer. Bu yüzden çelik kolon/dikmede kesitin atalet momenti (I), serbest boy (Lₖ) ve mesnet koşulları belirleyicidir." },
  { name: "Eğilme Teorisi (σ = M·y / I)", use: "Eğilme momenti (M) kesit boyunca gerilme oluşturur; en uzak life (y) en büyük gerilme düşer. Kiriş yüksekliğini artırmak I'yı üçüncü kuvvetle büyüttüğü için en etkili güçlendirmedir." },
  { name: "Kesme & Kayma Gerilmesi", use: "Kesme kuvveti kesitte kayma gerilmesi yaratır; bunu kiriş-kolon birleşimleri, kaynak/cıvata ve betonarmede etriyeler karşılar. Ani ve gevrek olabildiği için eğilmeden daha tehlikelidir." },
  { name: "Mohr Dairesi", use: "Bir noktadaki normal ve kayma gerilmelerini açıya göre gösterir; asal gerilmeleri ve maksimum kaymayı verir. Malzemenin akma/göçme kontrolünde (ör. von Mises) kullanılır." },
  { name: "Limit Durum / Emniyet (LRFD)", use: "Belirsizlikler yük tarafında artırılarak (ör. 1.2G + 1.6Q) ve dayanım tarafında azaltılarak karşılanır. Amaç hem güvenli hem ekonomik tasarım; fazla katsayı israf, az katsayı risktir." },
  { name: "Yük İniş Yolu (Load Path)", use: "Yük döşeme → kiriş → kolon → temel → zemin sırasıyla kesintisiz akmalıdır. Yoldaki kopukluk (askıda kolon, kaldırılan taşıyıcı duvar) ani göçme yapar; bu yüzden tadilatlar statik onayı ister." },
  { name: "Termal Genleşme (ΔL = α·L·ΔT)", use: "Sıcaklık değişimi boyu değiştirir (çelik α ≈ 12×10⁻⁶/°C). Engellenirse büyük gerilme doğar; bu yüzden binalara derz, köprülere kayar mesnet, uzun çatılara genleşme detayı konur." },
  { name: "Fourier Isı İletimi (U = 1/ΣR)", use: "Isı, iletkenliği (k) yüksek ve ince malzemeden hızlı geçer. Bir yapı elemanının U-değeri katman dirençlerinin toplamının tersidir; izolasyon kalınlığı bununla seçilir (TS 825)." },
  { name: "Rüzgâr & Deprem (Yatay Yükler)", use: "Yapıya yatay kuvvet ve devrilme momenti uygular; bina kütlesi ve titreşim periyoduyla ilişkilidir. Çapraz (bracing), perde duvar ve sünek çerçeveler bu yükü taşıyıp enerji yutar." },
];

/* Çelik yapılar */
const ENG_STEEL = [
  { title: "Yüksek dayanım / ağırlık", text: "Çeliğin akma dayanımı (S235–S460) betona göre çok yüksektir; aynı yükü daha hafif taşıyıcıyla, uzun açıklık ve az kolonla geçer. Fabrikada üretilip sahada birleştirildiği için kalite ve montaj hızı yüksektir." },
  { title: "Süneklik", text: "Çelik kopmadan önce belirgin şekilde uzar; depremde bu davranış enerjiyi yutar ve ani/gevrek göçme yerine uyarı verir. 'Güçlü kolon – zayıf kiriş' ilkesi modern deprem tasarımının temelidir." },
  { title: "Bağlantılar", text: "Cıvatalı birleşimler hızlı, denetlenebilir ve sökülebilir; kaynaklı birleşimler sürekli ve rijittir ama işçilik/denetim ister. Çelik yapı göçmelerinin çoğu bağlantı hatasından olur — detay elemandan önemlidir." },
  { title: "Burkulma & yanal mesnet", text: "Narin başlık ve gövdeler basınç altında yerel ya da yanal burkulabilir. Bu yüzden uygun profil, rijitleştirme levhaları ve yanal tutuşlar (aşık, döşeme bağlantısı) gerekir." },
  { title: "Korozyon koruması", text: "Çelik nemle paslanıp kesit kaybeder; sıcak daldırma galvaniz, epoksi boya veya paslanmaz çelikle korunur. Deniz/endüstri ortamında koruma sınıfı (ISO 12944) ömrü belirler." },
  { title: "Yangın koruması", text: "Çelik ~550 °C'de dayanımının yaklaşık yarısını yitirir; korumasız çelik yangında erken göçer. Şişen (intumescent) yangın boyası, püskürtme kaplama veya beton sargı ile R30–R120 direnç sağlanır." },
];

/* Çatılarda bilinmesi gerekenler */
const ENG_ROOF = [
  { title: "Eğim ve su tahliyesi", text: "Su biriken çatı er geç sızar; eğim suyu derelere ve süzgeçlere yönlendirir. Kiremitte ~%30–45, membranlı teras çatıda en az ~%2 eğim tipiktir." },
  { title: "Kar & rüzgâr yükü", text: "Kar yükü bölgeye ve yüksekliğe, rüzgâr ise konuma ve çatı formuna bağlıdır (TS EN 1991). Hafif çelik çatılarda rüzgâr emişi (uplift) çoğu zaman kar yükünden daha kritiktir." },
  { title: "Su yalıtımı (membran)", text: "Bitüm, TPO veya EPDM membranların bindirmeleri, parapet ve baca detayları en sık sızıntı noktasıdır; doğru detay ve işçilik malzemeden önemlidir. Ters teras çatıda yalıtım, su yalıtımını korur." },
  { title: "Havalandırma", text: "Soğuk çatıda saçaktan mahyaya hava akışı, çatı arası nemini ve yoğuşmayı dışarı atar, yazın ısıyı azaltır. Havasız çatıda küf ve ahşap çürümesi görülür." },
  { title: "Isı yalıtımı", text: "Sıcak hava yükseldiği için ısı kaybının önemli kısmı çatıdan olur; yeterli yalıtım hem faturayı düşürür hem de kışın 'buz birikmesini' (ice dam) azaltır." },
  { title: "Çatı tipleri", text: "Beşik/kırma (kiremit, konut), düz teras (kullanılabilir alan + membran) ve geniş açıklık için çelik makas, uzay kafes veya kabuk sistemler (hangar, fabrika, stadyum)." },
];

/* İzolasyonun önemi */
const ENG_INSULATION = [
  { title: "Enerji verimliliği", text: "Yalıtım ısıtma–soğutma enerjisini büyük oranda düşürür; binanın en hızlı geri ödeyen yatırımıdır ve karbon ayak izini azaltır. Türkiye'de TS 825 ile zorunludur." },
  { title: "Isı yalıtımı (U-değeri)", text: "U ne kadar düşükse o kadar az ısı kaçar (iyi bir dış duvar ~0,3 W/m²K altı). XPS/EPS, taşyünü veya PIR levhalar, ısı köprülerini de kapatacak biçimde sürekli uygulanmalıdır." },
  { title: "Su yalıtımı", text: "Betonarmenin en büyük düşmanı sudur; iyi su yalıtımı donatı korozyonunu, donma–çözülme hasarını ve küfü önler. Temel, ıslak hacimler ve teras çatıda kritiktir." },
  { title: "Yoğuşma & buhar dengesi", text: "Sıcak nemli hava soğuk yüzeyde su olur; katman sırası yanlışsa duvar içinde yoğuşma ve küf oluşur. Buhar kesici genelde sıcak (iç) tarafa konur, katmanlar dışa doğru daha geçirgen seçilir." },
  { title: "Ses yalıtımı", text: "Kütle, boşluk ve emici katmanlar gürültüyü azaltır; otel, ofis ve konutta akustik konfor ve mahremiyet için önemlidir." },
  { title: "Yangın sınıfı", text: "Yalıtım malzemesinin yanıcılık sınıfı (A1 yanmaz → F) güvenliği belirler; cephe yangınlarının hızla yayılmasında yalıtım seçimi belirleyici etkendir." },
];

/* Dünyadan dev projeler (görsel + mühendislik notu).
   Görseller Wikimedia'dan çekilir; yüklenemezse şık bir zemin gösterilir.
   Kendi proje görsellerini assets/img'e koyup img alanını değiştirebilirsin. */
const ENG_PROJECTS = [
  { title: "Burj Khalifa", loc: "Dubai · 2010 · 828 m", tag: "Gökdelen", icon: "🏙️",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg/1280px-Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg",
    note: "‘Buttressed core’ (destekli çekirdek) ve Y-plan; kademeli form rüzgâr girdaplarını kırar." },
  { title: "Marina Bay Sands", loc: "Singapur · 2010", tag: "Otel", icon: "🏨",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Marina_Bay_Sands_%28I%29.jpg/1280px-Marina_Bay_Sands_%28I%29.jpg",
    note: "Üç kule üzerinde 340 m'lik gökyüzü terası (SkyPark); karmaşık yatay yük taşıma sistemi." },
  { title: "Pekin Ulusal Stadı (Kuş Yuvası)", loc: "Çin · 2008", tag: "Çelik", icon: "🏟️",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Beijing_China_Beijing-National-Stadium-01.jpg/1280px-Beijing_China_Beijing-National-Stadium-01.jpg",
    note: "Örgü biçimli çelik taşıyıcı kabuk; ~42.000 ton çelik, estetik ve strüktürün birleşimi." },
  { title: "Golden Gate Köprüsü", loc: "San Francisco · 1937 · 2.7 km", tag: "Köprü", icon: "🌉",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg/1280px-Golden_Gate_Bridge_as_seen_from_Battery_East.jpg",
    note: "Çelik asma köprü; ana açıklık 1280 m. Rüzgâr ve deprem için esnek tasarım." },
  { title: "Empire State Building", loc: "New York · 1931 · 381 m", tag: "Çelik", icon: "🏙️",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/1280px-Empire_State_Building_%28aerial_view%29.jpg",
    note: "Çelik çerçeve gökdelen; sadece 410 günde inşa edilen bir hız ve organizasyon rekoru." },
  { title: "Sydney Opera Binası", loc: "Avustralya · 1973", tag: "Kabuk", icon: "🎭",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/1280px-Sydney_Australia._%2821339175489%29.jpg",
    note: "Betonarme kabuk (shell) çatılar; bilgisayar destekli yapısal hesabın öncü örneği." },
];

/* ===== SPOR =====
   Yeni başlayanlar için genel bilgilendirme amaçlı programlar.
   Tıbbi tavsiye değildir; sağlık sorunun varsa başlamadan önce doktora danış. */
const SPOR_BASLANGIC = [
  { title: "Önce sağlık", text: "Kronik bir rahatsızlığın, kalp/eklem sorunun veya uzun süredir hareketsizlik varsa başlamadan önce doktora danış. Egzersiz sırasında baş dönmesi, göğüs ağrısı veya keskin ağrı olursa hemen dur." },
  { title: "Isınma & soğuma", text: "Her antrenmana 5 dk hafif tempo + dinamik ısınmayla başla; sonunda 5 dk esneme/soğuma yap. Sakatlanmayı önlemenin en kolay yolu." },
  { title: "Kademeli ilerle", text: "Acele etme. Süreyi, tekrarı veya ağırlığı haftada en fazla ~%10 artır. 'Az ama düzenli', çok ama ara sıradan iyidir." },
  { title: "Form > ağırlık", text: "Doğru teknik, kaldırdığın ağırlıktan önemlidir. Hareketi yavaş ve kontrollü yap; aynaya bak ya da videoya çek." },
  { title: "Dinlenme & uyku", text: "Kaslar antrenmanda değil, dinlenirken gelişir. Haftada 1–2 tam dinlenme günü ve günde 7–8 saat uyku şart." },
  { title: "Su & beslenme", text: "Gün boyu yeterli su iç; yeterli protein (et, yumurta, baklagil), sebze ve karbonhidrat al. Hedefin kilo vermekse kalori dengesine dikkat." },
];

/* Antrenman ilkeleri — programları doğru uygulamak için temel bilimsel kurallar */
const SPOR_ILKELER = [
  { title: "Aşırı yükleme (progressive overload)", text: "Gelişimin tek şartı: zamanla kası daha çok zorlamak. Her hafta ağırlığı, tekrarı veya seti azar azar artır. İlerlemeyen program gelişim getirmez." },
  { title: "Tekrar aralıkları", text: "Hedefe göre seç: güç için 3–6 tekrar (ağır), kas büyümesi (hipertrofi) için 6–12, dayanıklılık için 12–20. Çoğu kişi için 6–12 ideal denge." },
  { title: "Bileşik hareket önceliği", text: "Squat, deadlift, bench press, row ve overhead press gibi çok eklemli hareketler en çok kas ve gücü verir; antrenmanın başına koy." },
  { title: "Efor (RPE) ve yedek tekrar", text: "Her seti, yedekte ~2 tekrar kalacak şekilde zorla (RPE 8). Her seti tam tükenene kadar yapmak toparlanmayı zorlaştırır." },
  { title: "Dinlenme süresi", text: "Güç setlerinde 2–3 dk, hipertrofi setlerinde 60–90 sn dinlen. Kardiyo/HIIT'te aktif dinlenme." },
  { title: "Periyotlama & deload", text: "4–6 hafta yüklen, ardından 1 hafta hafifle (deload). Bu, sakatlığı önler ve uzun vadeli ilerlemeyi sürdürür." },
  { title: "Protein & toparlanma", text: "Kas için günde vücut ağırlığının kilogramı başına ~1,6–2,2 g protein hedefle. Uyku (7–9 saat) ve dinlenme günleri gelişimin yarısıdır." },
  { title: "Tutarlılık", text: "8–12 haftalık düzenli bir program, ara sıra yapılan 'mükemmel' programdan kat kat iyidir. Süreklilik kazandırır." },
];

const SPOR_PROGRAMLAR = [
  {
    title: "Tüm Vücut Güç (Linear)",
    level: "Başlangıç → Orta", sure: "45–60 dk", siklik: "Haftada 3 gün (günaşırı)", icon: "🏋️",
    hedef: "Güç + kas temeli", ilerleme: "Tüm setleri tamamladıkça her antrenman küçük ağırlık ekle (alt vücut +2,5 kg, üst +1–2 kg).",
    desc: "Güç inşasının altın standardı: az hareket, ağır ve bileşik. Aralarda 2–3 dk dinlen.",
    hareketler: [
      "Squat (çömelme): 3 × 5",
      "Bench press / şınav: 3 × 5–8",
      "Bent-over row (bel açılı kürek): 3 × 6–8",
      "Overhead press (baş üstü itme): 3 × 5–8",
      "Romanian deadlift: 3 × 6–8",
      "Plank: 3 × 45 sn",
    ],
  },
  {
    title: "Push / Pull / Legs (PPL)",
    level: "Orta → İleri", sure: "60–75 dk", siklik: "Haftada 4–6 gün", icon: "🔁",
    hedef: "Kas hacmi (hipertrofi)", ilerleme: "Her kas grubu haftada toplam set sayısını ve ağırlığı kademeli artır.",
    desc: "İtiş–çekiş–bacak döngüsü; hacim isteyen orta-ileri seviye için en verimli bölünme.",
    hareketler: [
      "İTİŞ: Bench press 4×6–10 · Incline press 3×8–12 · Overhead press 3×8–10 · Yan kaldırış 3×12–15 · Triceps 3×10–12",
      "ÇEKİŞ: Barfiks/lat çekiş 4×6–10 · Kürek 4×8–12 · Yüz çekişi 3×12–15 · Biceps curl 3×10–12",
      "BACAK: Squat 4×6–10 · Romanian deadlift 3×8–10 · Lunge 3×10 · Calf raise 4×12–15 · Karın 3×15",
    ],
  },
  {
    title: "Üst / Alt Bölünme (Upper/Lower)",
    level: "Orta", sure: "50–65 dk", siklik: "Haftada 4 gün", icon: "🧱",
    hedef: "Güç + kas, dengeli", ilerleme: "Üst ve alt günleri haftada 2'şer kez; her hafta bir hareketinde yük artır.",
    desc: "Hem gücü hem kası dengeli geliştiren, sürdürülebilir 4 günlük şablon.",
    hareketler: [
      "ÜST GÜN: Bench press 4×6–8 · Kürek 4×6–8 · Overhead press 3×8–10 · Barfiks 3×maks · Biceps/Triceps 3×10–12",
      "ALT GÜN: Squat 4×5–8 · Deadlift 3×5 · Bulgarian split squat 3×8–10 · Calf raise 4×12 · Karın 3×15",
    ],
  },
  {
    title: "Dambıl Ev Programı — Tüm Vücut",
    level: "Başlangıç → Orta", sure: "40–50 dk", siklik: "Haftada 3 gün", icon: "💪",
    hedef: "Evde kas + güç", ilerleme: "Son 1–2 tekrarı zorlayan ağırlık seç; rahatladıkça ağırlığı/tekrarı artır.",
    desc: "Bir çift ayarlanabilir dambılla tüm vücut. Bileşik hareket ağırlıklı, güçlü bir ev rutini.",
    hareketler: [
      "Goblet squat: 4 × 10",
      "Tek kol dambıl kürek (row): 4 × 10 (her kol)",
      "Dambıl göğüs press (yerde/sehpada): 4 × 8–10",
      "Arnold press (omuz): 3 × 10",
      "Romanian deadlift (dambılla): 3 × 10",
      "Bulgarian split squat: 3 × 10 (her bacak)",
      "Çekiç curl + Plank: 3 × 12 / 3 × 45 sn",
    ],
  },
  {
    title: "Barfiks & Dips — Üst Vücut Gücü",
    level: "Başlangıç → İleri", sure: "25–35 dk", siklik: "Haftada 2–3 gün", icon: "🧗",
    hedef: "Vücut ağırlığıyla üst güç", ilerleme: "Önce destekli/negatif; haftada +1 tekrar. Kolaylaştıkça ağırlık (kemer) ekle.",
    desc: "Çekme ve itme gücünün temeli. Henüz çekemiyorsan kademeli sürümle başla.",
    hareketler: [
      "Ölü asılma (dead hang): 3 × 20–40 sn",
      "Negatif barfiks (yavaş in): 3 × 3–5 → güçlenince tam barfiks 4 × maks",
      "Dips (paralel bar / sandalye): 3 × 6–10",
      "Avustralya barfiksi (alçak bar row): 3 × 8–12",
      "Yüz çekişi / bant ile arka omuz: 3 × 15",
    ],
  },
  {
    title: "Koşuya Geçiş & HIIT",
    level: "Başlangıç → Orta", sure: "20–40 dk", siklik: "Haftada 3–4 gün", icon: "🏃",
    hedef: "Kondisyon + yağ yakımı", ilerleme: "Her hafta koşu aralıklarını uzat; HIIT'te tur sayısını artır.",
    desc: "Yürüyüşten koşuya kademeli geçiş ve yüksek yoğunluklu intervaller.",
    hareketler: [
      "Yürü-koş: 1 dk koşu / 2 dk yürü × 6–8 (haftada koşuyu uzat)",
      "Hedef: 5 km'yi kesintisiz koşmak",
      "HIIT seçeneği: 20–30 sn sprint / 60–90 sn dinlen × 6–10",
      "Isınma 5 dk + soğuma 5 dk (zorunlu)",
    ],
  },
  {
    title: "Ekipmansız Ev Programı",
    level: "Başlangıç", sure: "25–30 dk", siklik: "Haftada 3–4 gün", icon: "🤸",
    hedef: "Sıfır ekipman, her yerde", ilerleme: "Daireyi 3'ten 4–5'e çıkar; hareketin zor varyasyonuna geç.",
    desc: "Hiç ekipman yok — sadece vücut ağırlığı. Daireler hâlinde, aralarda 60 sn dinlen.",
    hareketler: [
      "Squat: 3 × 20",
      "Şınav (zorlaşınca ayak yükseltilmiş): 3 × 10–15",
      "Lunge: 3 × 12 (her bacak)",
      "Mountain climber: 3 × 30",
      "Glute bridge / tek bacak köprü: 3 × 15",
      "Plank + hollow hold: 3 × 45 sn",
    ],
  },
  {
    title: "Çekirdek & Karın",
    level: "Herkes", sure: "12–18 dk", siklik: "Haftada 3 gün", icon: "🎯",
    hedef: "Güçlü gövde (core)", ilerleme: "Süreleri ve tekrarları kademeli artır; ağırlık ekle.",
    desc: "Güçlü bir gövde, tüm kaldırışları ve duruşu iyileştirir, bel sağlığını korur.",
    hareketler: [
      "Plank (ön + yan): 3 × 30–45 sn",
      "Hollow hold: 3 × 20–30 sn",
      "Bacak kaldırma (leg raise): 3 × 12",
      "Dead bug: 3 × 10 (her taraf)",
      "Russian twist / Rus dönüşü: 3 × 20",
    ],
  },
  {
    title: "Esneklik & Mobilite",
    level: "Herkes", sure: "10–15 dk", siklik: "Her gün / antrenman sonrası", icon: "🧘",
    hedef: "Hareket açıklığı + toparlanma", ilerleme: "Esneme süresini ve derinliğini zamanla artır.",
    desc: "Esneklik ve hareket açıklığı; sakatlığı azaltır, kas ağrısını hafifletir.",
    hareketler: [
      "Arka bacak (hamstring) esnetme: 2 × 30 sn",
      "Kalça esnetme (figür-4): 2 × 30 sn (her taraf)",
      "Göğüs/omuz açma (kapı esnetmesi): 2 × 30 sn",
      "Kedi-deve (sırt mobilitesi): 1–2 dk",
      "Derin nefes + gevşeme: 2 dk",
    ],
  },
];
