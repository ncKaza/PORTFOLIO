/* assets/js/modules/navigation.js — Menu mobile et mise en évidence du lien de la section visible */
(function (P) {
  "use strict";
  var u = P.utils;
  var DESKTOP_MIN_WIDTH = 760;

  function setupMobileMenu() {
    var burger = u.$("#burger");
    var menu = u.$("#menu");

    function setOpen(open) {
      menu.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    }

    burger.addEventListener("click", function () {
      setOpen(!menu.classList.contains("open"));
    });
    menu.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        setOpen(false);
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= DESKTOP_MIN_WIDTH) {
        setOpen(false);
      }
    });
  }

  function setupScrollSpy() {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    var linkById = {};
    u.$$("#menu a").forEach(function (link) {
      linkById[link.getAttribute("href").slice(1)] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          Object.keys(linkById).forEach(function (id) {
            linkById[id].removeAttribute("aria-current");
          });
          if (linkById[entry.target.id]) {
            linkById[entry.target.id].setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    Object.keys(linkById).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });
  }

  function init() {
    setupMobileMenu();
    setupScrollSpy();
  }

  P.navigation = { init: init };
})((window.Portfolio = window.Portfolio || {}));
