/* assets/js/data/projects.js — Projets présentés
   repo     : nom du dépôt GitHub (vide : renvoie vers le profil GitHub)
   demo     : lien de la démonstration en ligne (facultatif ; sinon un clic mène au dépôt)
   image    : capture d'écran, ex. "assets/img/projects/mon-projet.png" (1280 × 800, PNG ou WebP compressé)
   imageAlt : description de la capture pour les lecteurs d'écran
   tags     : technologies utilisées */
(function (P) {
  "use strict";

  P.projects = [
    {
      title: "BTS SIO",
      description: "Dépôt de travaux et d’entraînement réalisés pendant le BTS SIO.",
      tags: ["Python"],
      image: "",
      imageAlt: "",
      repo: "BTS-SIO",
      demo: "",
    },
    {
      title: "SLAM",
      description: "Travaux de l’option SLAM (Solutions Logicielles et Applications Métiers).",
      tags: ["Python"],
      image: "",
      imageAlt: "",
      repo: "SLAM",
      demo: "",
    },
    {
      title: "Cours de Java (SLAM)",
      description: "Exercices et travaux de programmation Java réalisés en cours de SLAM.",
      tags: ["Java"],
      image: "",
      imageAlt: "",
      repo: "SLAMCOURSJAVA",
      demo: "",
    },
    {
      title: "Portfolio",
      description:
        "Site statique sans framework, avec thème jour / nuit et menu fixe. Il s’adapte au mobile, à la tablette et à l’ordinateur grâce à des grilles flexibles et des media queries.",
      tags: ["HTML5", "CSS3", "JavaScript", "SVG", "Google Fonts"],
      image: "",
      imageAlt: "",
      repo: "PORTFOLIO",
      demo: "",
    },
  ];
})((window.Portfolio = window.Portfolio || {}));
