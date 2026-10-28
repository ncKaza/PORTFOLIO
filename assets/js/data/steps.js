/* assets/js/data/steps.js — Parcours, du plus récent au plus ancien
   kind : "pro" (expérience) ou "formation" ; live : badge facultatif (ex. "En cours") */
(function (P) {
  "use strict";

  P.steps = [
    {
      kind: "pro",
      title: "Stage de 2e année de BTS",
      org: "Seritex NC",
      live: "",
      period: "2e année de BTS",
      desc: "Stage de deuxième année du BTS SIO option SLAM.",
      tags: ["Stage", "BTS SIO"],
    },
    {
      kind: "pro",
      title: "Job d’été",
      org: "BNP Paribas",
      live: "",
      period: "2026",
      desc: "Job d’été au sein de la banque en 2026.",
      tags: ["Job d’été", "Banque"],
    },
    {
      kind: "formation",
      title: "BTS SIO option SLAM",
      org: "Formation · Nouméa",
      live: "En cours",
      period: "En cours",
      desc: "Solutions Logicielles et Applications Métiers : développement, bases de données, réseaux et cybersécurité.",
      tags: ["Développement", "Bases de données", "Réseaux", "Cybersécurité"],
    },
    {
      kind: "pro",
      title: "Stage de 1re année de BTS",
      org: "SF2I · Nouméa",
      live: "",
      period: "1re année de BTS",
      desc: "Premier stage en entreprise du BTS SIO option SLAM.",
      tags: ["Stage", "BTS SIO"],
    },
    {
      kind: "formation",
      title: "Baccalauréat STMG option SIG",
      org: "Lycée Dick Ukeiwe",
      live: "",
      period: "Lycée",
      desc: "Sciences et technologies du management et de la gestion, option Systèmes d’information de gestion.",
      tags: ["Gestion", "Systèmes d’information", "Management"],
    },
    {
      kind: "pro",
      title: "Stage de 1re",
      org: "Mr Bricolage",
      live: "",
      period: "Classe de 1re",
      desc: "Stage en tant qu’aide vendeur en magasin.",
      tags: ["Vente"],
    },
    {
      kind: "pro",
      title: "Stage de 3e",
      org: "DPASS · Province Sud",
      live: "",
      period: "Classe de 3e",
      desc: "Stage d’observation de troisième.",
      tags: ["Découverte"],
    },
    {
      kind: "formation",
      title: "Collège de Normandie",
      org: "Collège",
      live: "",
      period: "Collège",
      desc: "Études au collège.",
      tags: ["Collège"],
    },
  ];
})((window.Portfolio = window.Portfolio || {}));
