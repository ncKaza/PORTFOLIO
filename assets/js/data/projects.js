/* assets/js/data/projects.js — Projets présentés
   repo     : nom du dépôt GitHub, ou URL complète s'il est sur un autre compte (vide : renvoie vers le profil GitHub)
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
      title: "Site d’une auto-école",
      description: "Site web pour une auto-école, avec des pages en HTML et CSS et une partie en PHP.",
      tags: ["HTML5", "CSS3", "PHP"],
      image: "",
      imageAlt: "",
      repo: "ProjetAlexisAutoEcole",
      demo: "",
    },
    {
      title: "Annonces étudiantes",
      description:
        "Site d’annonces destiné aux étudiants, réalisé en équipe avec Mika et May grâce au framework Angular.",
      tags: ["Angular", "TypeScript", "HTML5", "CSS3"],
      image: "",
      imageAlt: "",
      repo: "https://github.com/joyjoy-ops/Site_Mika-alexis-may_Annonce_etudiant",
      demo: "",
    },
    {
      title: "Application de tourisme (POO)",
      description:
        "Application mobile de tourisme développée en binôme avec Mika, pour mettre en pratique la programmation orientée objet.",
      tags: ["Dart", "Flutter", "POO"],
      image: "",
      imageAlt: "",
      repo: "POO-Mika-Alexis",
      demo: "",
    },
    {
      title: "Dataviz Challenge",
      description: "Challenge de visualisation de données : présenter des données sous forme de graphiques.",
      tags: [],
      image: "",
      imageAlt: "",
      repo: "Dataviz-challenge",
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
