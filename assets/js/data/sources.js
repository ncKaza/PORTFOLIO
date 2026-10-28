/* assets/js/data/sources.js — Sources de ma veille sur les cyberattaques
   lang : langue de la source ("FR" ou "EN") */
(function (P) {
  "use strict";

  P.sources = [
    {
      name: "CERT-FR (ANSSI)",
      url: "https://cert.cyber.gouv.fr/",
      description:
        "Alertes, avis de sécurité et rapports sur les menaces, publiés par le centre gouvernemental français de réponse aux incidents.",
      lang: "FR",
    },
    {
      name: "Cybermalveillance.gouv.fr",
      url: "https://www.cybermalveillance.gouv.fr/",
      description:
        "Dispositif national d’assistance aux victimes : hameçonnage, piratage de comptes, fuites de données et arnaques.",
      lang: "FR",
    },
    {
      name: "ZATAZ",
      url: "https://www.zataz.com/",
      description:
        "Actualité française sur les fuites de données, les rançongiciels, les logiciels malveillants et le piratage.",
      lang: "FR",
    },
    {
      name: "BleepingComputer",
      url: "https://www.bleepingcomputer.com/news/security/",
      description:
        "Actualité sur les failles, les fuites de données et les campagnes de logiciels malveillants.",
      lang: "EN",
    },
    {
      name: "The Hacker News",
      url: "https://thehackernews.com/",
      description:
        "Actualité et analyses sur les cyberattaques et les vulnérabilités, pour les professionnels de la sécurité.",
      lang: "EN",
    },
    {
      name: "CISA — Known Exploited Vulnerabilities",
      url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
      description:
        "Catalogue officiel américain des failles de sécurité déjà exploitées par des attaquants.",
      lang: "EN",
    },
  ];
})((window.Portfolio = window.Portfolio || {}));
