/*
Créer un fichier node qui enregistre créé 50 des entiers aléroires entre 0 et 20
Enregistrer ces entiers dans un fichier avec ce format
eniter1 entier2
entier3 entier4
.
*/
const fs = require("fs");
const utils = require("../utils");

let fileContent = "";
for (let i = 0; i < 25; i++) {
  fileContent  += `${utils.getRandom(0,20)} ${utils.getRandom(0,20)} \n`;
  // max.push(generateRandomNumber(0, 20));
}
// console.log("items =>", line);
console.log(fileContent);
fs.writeFileSync("nombres.txt", fileContent);
console.log("bonjour");
/*
Créer un script node qui fait la somme des entiers de chaque ligne du fichier précédent
*/

/* créer un script node qui enregistre les données de  le boite à outils de l'exo bricolage dans un fichier au format CSV */

