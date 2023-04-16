# Projet VueJS pour MNS (DFS)

Ce projet est un devoir en VueJS et express pour MNS.

## Prérequis
- [Node.js](https://nodejs.org/) (v18 ou supérieur)
- [Nodemon](https://www.npmjs.com/package/nodemon) (pour le back-end)

## Installation

1. Clonez le projet sur votre machine.
2. Installez les dépendances pour le front-end avec la commande `npm install` depuis le dossier `bill-app`.
3. Installez les dépendances pour le back-end avec la commande `npm install` depuis le dossier `bill-backend-app`.
4. Créez un fichier `.env` à la racine du dossier `bill-backend-app` et renseignez-y les variables d'environnement nécessaires.
5. Lancez l'application front-end avec la commande `npm run dev`.
6. Lancez l'API back-end avec la commande `npm run watch` ou `npm run dev`.

## Variables d'environnement

Les variables d'environnement suivantes doivent être renseignées dans le fichier `.env` :

- `PORT`: le port sur lequel le backend doit tourner
- `VERSION` : 1.0.0
- `MONGO_CLUSTER`: l'hôte de votre base de données
- `MONGO_DB`: le nom de votre base de données
- `MONGO_USER`: le nom d'utilisateur pour la base de données
- `MONGO_PASS`: le mot de passe pour la base de données

Assurez-vous que ces variables sont correctement renseignées pour que l'API fonctionne correctement.
## Frontend

Pour installer les dépendances et lancer l'application frontend, exécutez les commandes suivantes :

```sh
cd bill-app
npm install
npm run dev
```

>L'application sera disponible à l'adresse http://localhost:5173.

## Backend 

Pour installer les dépendances et lancer l'application backend, exécutez les commandes suivantes :

```sh
cd bill-backend-app
npm install
npm run watch
# ou
npm run dev
```

>L'application sera disponible à l'adresse http://localhost:3000.

## Auteurs

• Arthur VIETTI
