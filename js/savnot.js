/* =========================================================
   Savnot sayfası — App Store butonu
   App Store linkini aldığında AŞAĞIDAKİ değişkene yapıştır:
   ========================================================= */
(function () {
  const APPSTORE_URL = "https://apps.apple.com/tr/app/savnot/id6756543392?l=tr";

  const btn = document.getElementById("appstore");
  if (!btn) return;

  const apple = `<svg viewBox="0 0 384 512" width="18" height="18" fill="currentColor" aria-hidden="true" style="margin-right:8px;vertical-align:-3px;">
    <path d="M318.7 268c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 16.4 184.8 16.4 268c0 24.6 4.5 50 13.5 76.2 12 34.4 55.4 118.8 100.6 117.4 23.6-.6 40.3-16.8 71-16.8 29.8 0 45.2 16.8 76.4 16.8 45.6-.7 84.9-77.4 96.3-111.9-61.2-28.8-58.5-84.4-58.5-86zM256.6 84.5c21.6-25.6 19.6-48.9 19-57.3-19.1 1.1-41.2 13-53.8 27.7-13.9 15.8-22 35.3-20.3 56.4 20.7 1.6 39.6-9 55.1-26.8z"/>
  </svg>`;

  if (APPSTORE_URL) {
    btn.href = APPSTORE_URL;
    btn.innerHTML = apple + "App Store'dan İndir";
    btn.classList.remove("btn--disabled");
  } else {
    btn.href = "#";
    btn.innerHTML = apple + "App Store linki yakında";
    btn.classList.add("btn--disabled");
    btn.addEventListener("click", (e) => e.preventDefault());
  }
})();
