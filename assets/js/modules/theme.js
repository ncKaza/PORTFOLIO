/* assets/js/modules/theme.js — Bouton jour / nuit (le thème initial est posé par theme-init.js) */
(function (P) {
  "use strict";
  var u = P.utils;

  function init() {
    var root = document.documentElement;
    var button = u.$("#theme-toggle");

    function apply(theme) {
      root.setAttribute("data-theme", theme);
      button.setAttribute(
        "aria-label",
        theme === "dark" ? "Passer en mode jour" : "Passer en mode nuit",
      );
    }

    apply(root.getAttribute("data-theme") || "light");

    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* stockage indisponible : on ignore */
      }
    });
  }

  P.theme = { init: init };
})((window.Portfolio = window.Portfolio || {}));
