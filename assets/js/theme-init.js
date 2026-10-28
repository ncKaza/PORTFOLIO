/* assets/js/theme-init.js — Applique le thème enregistré (ou celui de l'appareil) avant le premier affichage */
(function () {
  "use strict";
  var theme;
  try {
    theme = localStorage.getItem("theme");
  } catch (e) {
    /* stockage indisponible */
  }
  if (theme !== "light" && theme !== "dark") {
    theme =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  }
  document.documentElement.setAttribute("data-theme", theme);
})();
