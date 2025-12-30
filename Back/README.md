<div align="center">
    <h1>SportSee — Micro API Backend</h1>
    <p>
        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
        <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
        <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn">
    </p>
</div>

## 📑 Description
Ce dépôt contient le code source de la micro API utilisée par le tableau de bord SportSee. Il s'agit d'un serveur **Node.js** qui expose plusieurs points de terminaison pour récupérer les données sportives des utilisateurs.

## 🚀 Installation & Lancement

### Sans Docker
1.  **Prérequis** : Node.js (v12.18+) et Yarn.
2.  Installez les dépendances :
    ```bash
    yarn install
    ```
3.  Lancez le serveur :
    ```bash
    yarn dev
    ```
    Le serveur sera lancé sur le port **8000**.

### Avec Docker
*   Construire l'image : `docker image build -t micro-api .`
*   Lancer le container : `docker container run --name micro-api -p 8000:3000 -dt micro-api yarn dev`

## 📡 Endpoints (Points de terminaison)
L'API expose les routes suivantes (utilisables avec `userId` 12 ou 18) :

*   `GET /user/:userId` : Informations générales (Prénom, poids, calories du jour).
*   `GET /user/:userId/activity` : Activité quotidienne (Poids et calories brûlées).
*   `GET /user/:userId/average-sessions` : Durée moyenne des sessions par jour.
*   `GET /user/:userId/performance` : Données de performance (Cardio, Energie, etc.).

## 🧪 Exemples de requêtes
*   `http://localhost:8000/user/12`
*   `http://localhost:8000/user/18/performance`
