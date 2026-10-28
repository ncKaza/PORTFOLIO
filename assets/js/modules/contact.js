/* assets/js/modules/contact.js — Liens de contact, CV et formulaire de message */
(function (P) {
  "use strict";
  var u = P.utils;

  function setupLinks() {
    var c = P.config;
    u.$("#gh-link").href = "https://github.com/" + c.github;
    u.$("#li-link").href = c.linkedin;
    u.$("#mail-link").href = "mailto:" + c.email;

    var mailText = u.$("#mail-text");
    mailText.href = "mailto:" + c.email;
    mailText.textContent = c.email;
  }

  function setupCv() {
    var link = u.$("#cv-link");

    if (P.config.cv) {
      var fileName = P.config.cv.split("/").pop();
      link.href = P.config.cv;
      link.setAttribute("download", fileName); // le navigateur télécharge le fichier au lieu de l'ouvrir
      link.setAttribute("type", "application/pdf");
      return;
    }

    link.textContent = "CV bientôt disponible";
    link.setAttribute("aria-disabled", "true");
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  }

  /* Formulaire en construction : il reste désactivé, on affiche seulement l'adresse e-mail. */
  function setupForm() {
    var mail = u.$("#form-mail");
    mail.href = "mailto:" + P.config.email;
    mail.textContent = P.config.email;
  }

  function init() {
    setupLinks();
    setupCv();
    setupForm();
  }

  P.contact = { init: init };
})((window.Portfolio = window.Portfolio || {}));
