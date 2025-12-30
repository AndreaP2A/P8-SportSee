<div align="center">
    <img src="./Front/src/assets/logo.png" alt="Logo SportSee" width="150">
    <h1>SportSee — Tableau de Bord d'Analytics Sportive</h1>
    <p>
        <img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
        <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
        <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass">
        <img src="https://img.shields.io/badge/Recharts-222222?style=for-the-badge&logo=recharts&logoColor=white" alt="Recharts">
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    </p>
</div>

SportSee est une application web de coaching sportif permettant aux utilisateurs de visualiser leurs performances quotidiennes via un tableau de bord analytique complet. Le projet met l'accent sur la visualisation de données complexes et la gestion flexible des sources d'information.

## 📌 Présentation du Projet

L'objectif de SportSee est de fournir une interface fluide et intuitive où les sportifs peuvent suivre leurs statistiques : calories brûlées, poids, durée des sessions, et types d'activités pratiquées. Le projet a été développé avec **React** et utilise la bibliothèque **Recharts** pour générer des graphiques interactifs et dynamiques.

Une attention particulière a été portée à la **normalisation des données** via un système de formatage (Pattern Factory/Formatter), permettant de basculer facilement entre des données locales (mocks) et une API réelle.

## 🎯 Objectifs techniques

*   **Visualisation de données** : Intégration avancée de Recharts pour créer des graphiques de type barres, lignes, radar et jauges.
*   **Architecture Modulaire** : Organisation rigoureuse du code en composants réutilisables, services et layouts.
*   **Data Management** : Mise en place d'un service de récupération de données capable de gérer deux sources distinctes (API REST ou fichiers JSON locaux).
*   **Performance & SEO** : Utilisation de Vite pour une compilation ultra-rapide et respect des bonnes pratiques HTML5/CSS3.

## ✨ Fonctionnalités clés

📊 **Graphiques Interactifs**
Visualisation de l'activité quotidienne (Poids/Calories), de la durée moyenne des sessions, et des performances par catégorie (Cardio, Energie, etc.).

⚡ **Double Source de Données**
Système de switch permettant de choisir entre les données du backend ou des données simulées (Mocks) pour le développement.

📱 **Design Responsive**
Interface optimisée pour différents formats d'écran, garantissant une lisibilité maximale des statistiques.

🔥 **Indicateurs de Santé**
Suivi en temps réel des macro-nutriments (Calories, Protéines, Glucides, Lipides).

## 🚀 Installation et Utilisation

### Prérequis
*   [NodeJS](https://nodejs.org/) (Version 12.18+ pour le Backend)
*   [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

### Étape 1 : Lancer le Backend (Micro API)
Le backend fournit les données nécessaires à l'application.
```bash
cd Back
# Installation des dépendances
yarn # ou npm install
# Lancement du serveur (port 8000 par défaut)
yarn dev
```

### Étape 2 : Lancer le Frontend
```bash
cd Front
# Installation des dépendances
npm install
# Lancement de l'application
npm run dev
```
L'application sera accessible sur `http://localhost:5173`.

> 💡 **Astuce** : Pour basculer entre l'API et les Mocks, changez la valeur dans `Front/src/services/config.js`.

## 🛠️ Structure du Projet

```text
.
├── Back/               # Micro API Node.js (Serveur de données)
├── Front/              # Application React (Vite)
│   ├── src/
│   │   ├── components/ # Composants graphiques et UI
│   │   ├── layouts/    # Structures de pages (Header, Nav, etc.)
│   │   ├── pages/      # Pages principales (Profil, etc.)
│   │   ├── services/   # Logique API et Formatage de données
│   │   └── sass/       # Styles globaux et variables
└── README.md           # Documentation principale
```

## 🎓 Contexte Pédagogique

Ce projet constitue le **9ème projet pratique** du parcours **Développeur d'application JavaScript / React** chez OpenClassrooms. Il m'a permis de maîtriser l'intégration de bibliothèques tierces de visualisation de données et de renforcer mes compétences en architecture logicielle pour la gestion asynchrone des données.

## 👨‍💻 Auteur
**Andréa PORCHE**

*   GitHub : [@AndreaP2A](https://github.com/AndreaP2A)
*   LinkedIn : [Andrea Porche](https://www.linkedin.com/in/andrea-porche/)
*   Email : andrea.porche2a@gmail.com
