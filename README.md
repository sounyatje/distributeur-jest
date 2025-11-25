# Distributeur de Desserts Japonais 🍡

Un projet React + Jest permettant de découvrir les desserts japonais sous forme de distributeur interactif.

## Fonctionnalités

- Affichage d’un distributeur avec des images de pâtisseries japonaises.
- Interaction : sélection des desserts via des boutons numériques.
- Gestion de stock : chaque dessert a une quantité limitée.
- Réaction animée de Nezuko selon la sélection (GIF happy/request/angry).
- Timer d’attente avant chaque nouvelle demande.
- Responsive design, animation, couleurs personnalisées.

## Installation

1. Clone le dépôt :
git clone []
cd distributeur-react


2. Installe les dépendances :
npm install


3. Lance en mode développement :
npm run dev

*(ou `npm start` avec Create React App)*

## Tests

Tests unitaires et UI avec **Jest** et **Testing Library** :

- Lancer :
npm test

- Exemples de tests :
- Fonctions JS (gestion stock)
- Affichage et interaction UI (boutons, timer, réactions Nezuko)

## Structure

src/
App.jsx -- Composant principal
App.css -- Styles principaux
assets/images/ -- Dossier des images/gif utilisés
utils.js -- Fonctions JS testables
App.test.jsx -- Tests du composant React
utils.test.js -- Tests des fonctions pures
mocks/
styleMock.js -- Mock CSS pour Jest
fileMock.js -- Mock fichiers images pour Jest
jest.config.cjs -- Config Jest
babel.config.cjs -- Config Babel
public/ -- Images utilisées en CSS (background etc)

text

## Démo

Image de fond, GIF et desserts s’affichent. Les quantités sont mises à jour selon la sélection.
Nezuko réagit selon votre choix : [translate:bonne sélection] ou [translate:mauvaise sélection] !

## Contribuer

Pull requests/tickets bienvenus.

## Auteurs

- Sounya Abattouy

---