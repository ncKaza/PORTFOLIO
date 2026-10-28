/* assets/js/main.js — Point d'entrée : démarre chaque module */
(function (P) {
  "use strict";

  document.documentElement.classList.add("js");

  [P.timeline, P.projectsView, P.theme, P.navigation, P.reveal, P.veille, P.contact].forEach(
    function (module) {
      module.init();
    },
  );
})((window.Portfolio = window.Portfolio || {}));
