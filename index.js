'use strict';
const fs = require('fs');


let rawdata = fs.readFileSync('./assets/data/pokedex.json');  
let pokedex = JSON.parse(rawdata); 

console.log(pokedex.pokemon[0]);

// // for ( let i = 0; i < pokemon.length; i++) {
// //     console.log(`${i}  Name: ${pokemon[i].name}`);
// // }