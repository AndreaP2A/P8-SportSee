<div align="center">
    <img src="./src/assets/logo.png" alt="Logo SportSee" width="100">
    <h1>SportSee — Interface Frontend</h1>
    <p>
        <img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
        <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
        <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass">
        <img src="https://img.shields.io/badge/Recharts-222222?style=for-the-badge&logo=recharts&logoColor=white" alt="Recharts">
    </p>
</div>

## 📑 Description
Cette partie du projet contient l'interface utilisateur développée avec **React 18** et **Vite**. Elle communique avec une micro API ou utilise des mock-data pour afficher un tableau de bord complet de coaching sportif.

## ✨ Fonctionnalités
*   **Profil Utilisateur** : Affichage personnalisé selon l'ID utilisateur (12 ou 18).
*   **Indicateurs clés** : Calories, Protéines, Glucides et Lipides.
*   **Graphiques Recharts** :
    *   `BarChart` : Activité quotidienne (Poids et Calories).
    *   `LineChart` : Durée moyenne des sessions.
    *   `RadarChart` : Type d'activité (Performance).
    *   `RadialBarChart` : Score de progression quotidien.

## 🛠️ Stack Technique
*   **Framework** : React
*   **Build Tool** : Vite
*   **Charts** : Recharts
*   **Styling** : SASS (Variables, Mixins, Architecture 7-1 simplifiée)
*   **Routing** : React Router v6

## 🚀 Installation
1.  Assurez-vous que le backend est lancé sur le port 8000.
2.  Installez les dépendances :
    ```bash
    npm install
    ```
3.  Lancez le projet :
    ```bash
    npm run dev
    ```

## ⚙️ Configuration (API vs Mock)
Dans le fichier `src/services/config.js`, modifiez la constante `useMockData` :
*   `true` : Utilise les données simulées (dossier `src/data/`).
*   `false` : Appelle le backend réel sur `http://localhost:8000`.

## 📂 Structure du code
*   `src/components` : Composants atomiques et graphiques Recharts.
*   `src/services/api.js` : Point d'entrée pour la récupération des données.
*   `src/services/mockService.js` & `backEndService.js` : Formatteurs de données (pattern Adapter).
*   `src/pages` : Pages de l'application (Profile, Error, Home).
