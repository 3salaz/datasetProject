const fs = require("fs");

let rawData = fs.readFileSync("../data/pokemon.csv", "utf-8");
let csvArray = rawData.split("\n");

let heading = csvArray[0].split(",");
let pokemon1 = csvArray[1].split(",");

let pokemonObject = {
    [heading[0]]: pokemon1[0],
    [heading[1]]: pokemon1[1],
    [heading[1]]: pokemon1[2]
}
console.log(pokemonObject);