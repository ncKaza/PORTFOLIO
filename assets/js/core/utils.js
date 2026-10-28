/* assets/js/core/utils.js — Petites fonctions partagées */
(function (P) {
  "use strict";

  /** Premier élément correspondant au sélecteur. */
  function $(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  /** Tous les éléments correspondants, sous forme de tableau. */
  function $$(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  /** Crée un élément : el("p", { "class": "x", text: "Salut" }, [enfants]). */
  function el(tag, props, children) {
    var node = document.createElement(tag);
    Object.keys(props || {}).forEach(function (key) {
      if (key === "text") {
        node.textContent = props[key];
      } else {
        node.setAttribute(key, props[key]);
      }
    });
    (children || []).forEach(function (child) {
      node.appendChild(child);
    });
    return node;
  }

  P.utils = { $: $, $$: $$, el: el };
})((window.Portfolio = window.Portfolio || {}));
