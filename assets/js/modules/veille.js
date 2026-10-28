/* assets/js/modules/veille.js — Lien vers la présentation Canva de la veille */
(function (P) {
  "use strict";
  var u = P.utils;

  function buildSource(source) {
    var link = u.el(
      "a",
      { href: source.url, target: "_blank", rel: "noopener noreferrer", text: source.name },
      [u.el("span", { class: "sr-only", text: " (nouvel onglet)" })],
    );
    return u.el("li", { class: "card source" }, [
      u.el("h4", { class: "source__name" }, [link]),
      u.el("p", { text: source.description }),
      u.el("span", {
        class: "source__lang",
        text: source.lang === "FR" ? "En français" : "En anglais",
      }),
    ]);
  }

  function renderSources() {
    var list = u.$("#sources");
    P.sources.forEach(function (source) {
      list.appendChild(buildSource(source));
    });
  }

  function init() {
    renderSources();

    var link = u.$("#veille-link");

    if (P.config.veilleCanva) {
      link.href = P.config.veilleCanva;
      return;
    }

    link.textContent = "Présentation bientôt disponible";
    link.setAttribute("aria-disabled", "true");
    link.removeAttribute("target");
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  }

  P.veille = { init: init };
})((window.Portfolio = window.Portfolio || {}));
