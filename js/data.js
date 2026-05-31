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
  { id: "statik2", title: "Statik 2", subtitle: "Kafes, sürtünme, atalet, iç kuvvetler", soon: true, topics: [] },
  { id: "mukavemet1", title: "Mukavemet 1", subtitle: "Gerilme, şekil değiştirme, burulma, eğilme", soon: true, topics: [] },
  { id: "mukavemet2", title: "Mukavemet 2", subtitle: "Gerilme dönüşümü, burkulma, sehim", soon: true, topics: [] },
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
