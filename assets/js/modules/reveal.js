/* assets/js/modules/reveal.js — Animation d'apparition des éléments .reveal au défilement */
(function (P) {
  "use strict";
  var u = P.utils;

  function init() {
    var items = u.$$(".reveal");

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("is-revealed");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  P.reveal = { init: init };
})((window.Portfolio = window.Portfolio || {}));
