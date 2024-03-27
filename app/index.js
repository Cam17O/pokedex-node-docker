/** 
 *  Serveur Backend Pokedex
*/


console.log("Démarage");

const fs= require('fs');
// Définir l'emplacement des fichiers bases de données

const POKEDEX = "./DATA/pokedex.json";

// Définir l'emplacement des images

const IMAGE_POKEMON = "./FILES/images";

// Définir un port 

const port = 5001;

// lancer un serveur express
const express = require('express');

const app = express();

// permet au serveur d'envoyer des images
app.use(express.static('FILES'));

// lancer le serveur et attendre
app.listen(port, '0.0.0.0',
    ()=>{
        console.log('Le serveur pokémon écoute sur le port : ' + port);
    }
);

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: '*'}));

/** Routes **/

// Crée la route qui renvoie tout
app.get('/tout', findAllPokemon);

// Crée la route pour un pokémon aléatoire
app.get('/random', RandomPokemon);

// Crée la route pour trouver un pokémon avec un id
app.get('/id/:id', IdPokemon);

// Crée la route pour trouver un pokemon avec un nom
app.get('/nom/:nom', NomPokemon);

/** fonctions **/

// fonction qui renvoie tous les pokemon
function findAllPokemon(request, response)
{
    // Lecture du fichier
    let data = fs.readFileSync(POKEDEX);

    // Analyse du JSON
    let pokedex = JSON.parse(data);

    // Renvoie tout le json interprété
    response.send(pokedex);
}

// fonction qui renvoie un pokemon aleatoire
function RandomPokemon(request, response)
{
    // Lecture du fichier
    let data = fs.readFileSync(POKEDEX);

    // Analyse du JSON
    let pokedex = JSON.parse(data);
    
    let random = Math.floor(Math.random() * pokedex.length) + 1;

    // Renvoie tout le json interprété
    response.send(pokedex[random]);
}

// fonction id pokemon
function IdPokemon(request, response)
{
    // Lecture du fichier
    let data = fs.readFileSync(POKEDEX);

    // Analyse du JSON
    let pokedex = JSON.parse(data);

    let id = request.params.id -1

    response.send(pokedex[id]);
}

// fonction 
function NomPokemon(request, response)
{
    // Lecture du fichier
    let data = fs.readFileSync(POKEDEX);

    // Analyse du JSON
    let pokedex = JSON.parse(data);

    let nom = request.params.nom;

    const result = pokedex.filter((pokemon) => pokemon.name.french === nom);

    response.send(result);
}