# Portfolio d’Alexis Pidjo

Portfolio personnel BTS SIO option SLAM : profil, parcours, compétences, projets, veille technologique et contact.

Site statique : HTML, CSS et JavaScript, sans framework ni outil de compilation.

## Arborescence

```text
portfolio/
├── index.html                  Page unique : structure et contenu des sections
├── README.md
├── .editorconfig               Règles d’indentation communes aux éditeurs
├── .prettierrc                 Réglages de mise en forme du code
├── .gitignore
└── assets/
    ├── css/
    │   ├── base/               Fondations
    │   │   ├── tokens.css      Couleurs, ombres, polices (thèmes jour et nuit)
    │   │   ├── base.css        Reset, accessibilité, mouvement réduit
    │   │   └── layout.css      Conteneur, sections, grilles, cartes
    │   ├── components/         Éléments réutilisables
    │   │   ├── topbar.css      Barre de navigation, menu mobile, bouton de thème
    │   │   ├── hero.css        Bandeau d’accueil et fenêtre de terminal
    │   │   └── section-head.css  En-tête commun des sections
    │   └── sections/           Une feuille par section de la page
    │       ├── profile.css
    │       ├── timeline.css    Parcours (filtres et frise)
    │       ├── skills.css
    │       ├── projects.css
    │       ├── veille.css
    │       ├── contact.css
    │       └── footer.css
    ├── js/
    │   ├── main.js             Point d’entrée : démarre chaque module
    │   ├── config.js           Réglages personnels (liens, e-mail, CV)
    │   ├── theme-init.js       Thème appliqué avant l’affichage
    │   ├── core/
    │   │   └── utils.js        Fonctions partagées
    │   ├── data/               Contenu modifiable sans toucher au code
    │   │   ├── steps.js        Parcours
    │   │   ├── projects.js     Projets
    │   │   └── sources.js      Sources de la veille
    │   └── modules/            Un module par fonctionnalité
    │       ├── theme.js        Bouton jour / nuit
    │       ├── navigation.js   Menu mobile et lien actif
    │       ├── reveal.js       Animations au défilement
    │       ├── timeline.js     Frise et filtres
    │       ├── projects.js     Fiches projets
    │       ├── veille.js       Lien de la présentation et sources
    │       └── contact.js      Liens, CV et formulaire
    ├── img/
    │   ├── favicon.svg         Icône de l’onglet
    │   └── projects/           Captures d’écran des projets (1280 × 800 conseillé)
    └── docs/
        └── CV_PIDJO_ALEXIS.pdf CV téléchargé par le bouton du site
```

## Personnaliser le site

| Je veux modifier…                                          | Fichier                         |
| ---------------------------------------------------------- | ------------------------------- |
| Mon e-mail, GitHub, LinkedIn, CV, lien Canva de la veille  | `assets/js/config.js`           |
| Mon parcours (stages, études)                              | `assets/js/data/steps.js`       |
| Mes projets (texte, liens, capture d’écran)                | `assets/js/data/projects.js`    |
| Mes sources de veille                                      | `assets/js/data/sources.js`     |
| Mon texte de profil, mes compétences, ma veille            | `index.html`                    |
| Les couleurs                                               | `assets/css/base/tokens.css`    |

Pour changer le CV : remplace le fichier dans `assets/docs/` (ou ajoute-en un nouveau) et vérifie son chemin dans `assets/js/config.js`. Le bouton « Télécharger mon CV » l’enregistre directement sur l’ordinateur du visiteur.

## Lancer en local

Ouvre simplement `index.html` dans un navigateur. Aucune installation n’est nécessaire.

## Mettre en ligne (GitHub Pages)

1. Crée un dépôt GitHub (par exemple `PORTFOLIO`) et envoie-y le contenu de ce dossier.
2. Dans **Settings → Pages**, choisis la branche `main` et le dossier `/ (root)`.
3. Le site est disponible à l’adresse `https://ncKaza.github.io/portfolio/`.

## Mise en forme du code

Le code suit les règles de `.editorconfig` et `.prettierrc` (indentation de 2 espaces, lignes de 100 caractères au plus). Avec Node.js installé, la commande suivante remet tout en forme :

```bash
npx prettier --write "assets/**/*.{css,js}" index.html
```

## Principes suivis

- **Accessibilité** : lien d’évitement, navigation au clavier, contrastes soignés, libellés de formulaire, respect de `prefers-reduced-motion`.
- **Responsive** : conçu pour mobile, tablette et ordinateur (menu repliable sur petit écran).
- **Performance** : aucune image lourde, animations légères, une seule police web de titres.
- **Sécurité** : aucun mot de passe, clé ou secret dans le code.
- **Maintenance** : les données (parcours, projets) sont séparées de l’affichage.

## Conventions de commit

Messages courts et explicites, par exemple : `feat: ajoute la section veille`, `fix: corrige le menu mobile`, `docs: met à jour le README`.
