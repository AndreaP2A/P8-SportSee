<div align="center">
    <img src="./Front/src/assets/logo.png" alt="Logo SportSee">
    <h3 align="center">SportSee</h3>
    <p align="center">SportSee est un site web qui met à disposition un tableau de bord d'analytics de coaching sportif.</p>
</div>

## Contexte du projet

SportSee est un projet fictif, constituant le 8ème projet pratique dans le cadre du cursus que je suis chez OpenClassrooms. <br />
Celui-ci m'a amené à travailler sur :

- Le développement d'une page profil d'utilisateur avec React, avec récupération des données via une API.
- L'intégration de graphiques avancés et de diagrammes pour présenter des données d'analyse sportive via Recharts.

## Technologies utilisées

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Test du projet

1. Cloner ce dépôt de code sur votre machine locale via la commande `git clone https://github.com/AndreaP2A/P9-SportSee`.
2. Rendez-vous dans le dossier du backend via `cd Back`, installer nvm via `nvm install 12.18`, puis yarn via `yarn`.
3. Lancer la commande `yarn dev`, après quelques instants, le message "Magic happens on port 8000" devrait s'afficher : la micro api bien lancée !
4. Dans un second terminal (ou second VSCode), rendez-vous dans le dossier du backend via `cd Front`, installer nvm via `nvm install 22.2.0` puis npm via `npm install`.
5. Enfin, lancer la commande `npm run dev` : après quelques instants, un message "➜ Local: http://localhost:5173/" devrait s'afficher avec le lien de l'application. La micro api et le serveur étants lancées, vous pourrez alors aller sur le lien donné pour afficher le projet dans votre navigateur.

Pour tester les deux sources de données possibles : ouvrer le fichier Front/src/services/config.js. A la ligne 1, vous pouvez alors alterner entre la valeur booléene `true` pour utiliser les données mock et `false` pour utiliser le backend/l'api.

## Site en ligne

A venir !

## Contact

andrea.porche2a@gmail.com

Lien du repo: [https://github.com/AndreaP2A/P8-SportSee](https://github.com/AndreaP2A/P8-SportSee)
