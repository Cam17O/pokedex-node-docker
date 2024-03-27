# API pokedex

___

L'api permet d'obtenir de trouver des pokémon grâcent à différentes méthodes.

___

### Mettre en marche l'API

lancer le serveur express.
Dans un terminal du dossier Back
```js
nodemon index.js
```
___

### Accées à l'interface graphique

Il faut avoir lancé apache2

Adresse ip : http://127.0.0.0/...

## Les routes sont disponnibles directement à ses adresse

*  Affiche tous les pokemon

http://127.0.0.1:5001/tout

* Affiche un pokémon au hasard

http://127.0.0.1:5001/random

* Affiche le pokemon qui à l'id choisi

http://127.0.0.1:5001/id/__{nombre}__

* Affiche le pokémon qui à le nom choisi

http://127.0.0.1:5001/nom/__{nom en français}__