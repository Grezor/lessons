// découverte des functions

function direBonjour() {
  console.log("Bonjour !");
}

console.log('debut du programme');
direBonjour() // l'apel d'une function
console.log('fin programme')


// passage de paramètres 
function direBonneNuit(prenom){
  const message = `Bonne nuit, ${prenom} !`
  return message;
}

console.log(direBonneNuit('Batiste'));

// passage de plusieurs parametres

function presentation(prenom, age){
  console.log(`Je me presente ${prenom}, et j'ai ${age} ans`)
}
presentation("Gabriel", 20)

// function anonymes

const superHero = function(hero) {
  const message = `Bonjour, ${hero} !`;
  return message;
}

console.log(superHero("Super-Man")); // "Bonjour, Super-Man !"

// équivalent a au dessus
const marque = (voiture) => {
  const message = `J ai acheter une ${voiture} !`
  return message;
}

console.log(marque('ferrari'))

