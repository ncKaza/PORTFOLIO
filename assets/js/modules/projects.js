/* assets/js/modules/projects.js — Section Projets : fiches générées depuis js/data/projects.js */
(function (P) {
  "use strict";
  var u = P.utils;

  /** Lien externe avec un texte complété pour les lecteurs d'écran. */
  function externalLink(href, label, projectTitle, isTitle) {
    var hint = isTitle ? " (nouvel onglet)" : " de « " + projectTitle + " » (nouvel onglet)";
    return u.el("a", { href: href, target: "_blank", rel: "noopener noreferrer" }, [
      document.createTextNode(label),
      u.el("span", { class: "sr-only", text: hint }),
    ]);
  }

  function buildTags(tags) {
    if (tags.length === 0) {
      return null;
    }
    var list = u.el("ul", { class: "tags", "aria-label": "Technologies utilisées" });
    tags.forEach(function (tag) {
      list.appendChild(u.el("li", { text: tag }));
    });
    return list;
  }

  /** Capture d'écran : affichée seulement si une image est renseignée. */
  function buildScreenshot(project) {
    if (!project.image) {
      return null;
    }
    return u.el("div", { class: "project__shot" }, [
      u.el("img", {
        src: project.image,
        alt: project.imageAlt || "Capture d’écran du projet " + project.title,
        width: "1280",
        height: "800",
        loading: "lazy",
        decoding: "async",
      }),
    ]);
  }

  function buildCard(project) {
    var profileUrl = "https://github.com/" + P.config.github;
    var repoUrl = project.repo ? profileUrl + "/" + project.repo : profileUrl; // sans dépôt précisé : profil GitHub
    var mainUrl = project.demo || repoUrl; // cible du clic sur la carte

    var title = u.el("h3", { class: "project__title" }, [
      externalLink(mainUrl, project.title, project.title, true),
    ]);
    var links = u.el("div", { class: "project__links" }, [
      externalLink(repoUrl, project.repo ? "Code source" : "Voir sur GitHub", project.title),
    ]);
    if (project.demo) {
      links.appendChild(externalLink(project.demo, "Démo en ligne", project.title));
    }

    var body = u.el("div", { class: "project__body" }, [
      title,
      u.el("p", { text: project.description }),
    ]);
    var tags = buildTags(project.tags);
    if (tags) {
      body.appendChild(tags);
    }
    body.appendChild(links);

    var shot = buildScreenshot(project);
    return u.el("article", { class: "card project" }, shot ? [shot, body] : [body]);
  }

  function init() {
    var grid = u.$("#projects");
    P.projects.forEach(function (project) {
      grid.appendChild(buildCard(project));
    });

    var all = u.$("#projects-all");
    all.href = "https://github.com/" + P.config.github;
  }

  P.projectsView = { init: init };
})((window.Portfolio = window.Portfolio || {}));
