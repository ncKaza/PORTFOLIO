/* assets/js/modules/timeline.js — Section Parcours : frise chronologique et filtres */
(function (P) {
  "use strict";
  var u = P.utils;

  var FILTERS = [
    { id: "all", label: "Tout" },
    { id: "pro", label: "Professionnel" },
    { id: "formation", label: "Formation" },
  ];

  function buildStep(step) {
    var top = u.el("div", { class: "tl__top" }, [
      u.el("h3", { class: "tl__title", text: step.title }),
    ]);
    if (step.live) {
      top.appendChild(u.el("span", { class: "tl__live", text: step.live }));
    }

    var tags = u.el(
      "ul",
      { class: "tl__tags" },
      step.tags.map(function (tag) {
        return u.el("li", { text: tag });
      }),
    );

    var card = u.el("article", { class: "tl__card" }, [
      top,
      u.el("p", { class: "tl__org", text: step.org }),
      u.el("p", { class: "tl__pi", text: step.period }),
      u.el("p", { class: "tl__desc", text: step.desc }),
      tags,
      u.el("span", {
        class: "tl__kind",
        text: step.kind === "pro" ? "Professionnel" : "Formation",
      }),
    ]);

    return u.el("li", { class: "tl tl--" + step.kind, "data-kind": step.kind }, [
      u.el("div", { class: "tl__period", text: step.period }),
      u.el("div", { class: "tl__marker", "aria-hidden": "true" }, [
        u.el("span", { class: "tl__dot" }),
      ]),
      card,
    ]);
  }

  function countFor(filterId) {
    if (filterId === "all") {
      return P.steps.length;
    }
    return P.steps.filter(function (s) {
      return s.kind === filterId;
    }).length;
  }

  function applyFilter(filterId) {
    u.$$(".tl").forEach(function (item) {
      item.hidden = !(filterId === "all" || item.getAttribute("data-kind") === filterId);
    });
  }

  function buildFilterButton(filter, isFirst, box) {
    var button = u.el(
      "button",
      {
        type: "button",
        class: "fb" + (isFirst ? " on" : ""),
        "aria-pressed": String(isFirst),
      },
      [
        document.createTextNode(filter.label + " "),
        u.el("em", { text: String(countFor(filter.id)) }),
      ],
    );

    button.addEventListener("click", function () {
      u.$$(".fb", box).forEach(function (b) {
        b.classList.remove("on");
        b.setAttribute("aria-pressed", "false");
      });
      button.classList.add("on");
      button.setAttribute("aria-pressed", "true");
      applyFilter(filter.id);
    });
    return button;
  }

  function init() {
    var list = u.$("#timeline");
    var box = u.$("#filters");
    P.steps.forEach(function (step) {
      list.appendChild(buildStep(step));
    });
    FILTERS.forEach(function (filter, index) {
      box.appendChild(buildFilterButton(filter, index === 0, box));
    });
  }

  P.timeline = { init: init };
})((window.Portfolio = window.Portfolio || {}));
