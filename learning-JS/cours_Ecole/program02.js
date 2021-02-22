// javascript est implicitement typé => on ne donne pas le type de la variable est déduit
// une variable : emplacement en mémoire qu'on a réservé pour stocker uen donnée
var x = 10;
let y = 'hello';
const z = 23;

// var et let sont mutable 
x = "bonjour"
y = 11;

// const est immuable 
// z = 11; //erreur

//Bonne pratique: le nom d'une fonction est un verbe
// un ensemble de bonne pratiques => convention
// 
function add(x, y) {
  let somme = x + y;
  return somme;
}

// avec var la déclaration est valable dans tout le cors de la fonction
// avec let la variable est dispo après let
console.log(add(2, 5))