/** EXERCICE 1
 * Crée uen fonction en JS qui prend deux entiers en parametre et retourne
 * un entier aléatoire compris entre ces deux nombres
 */

function getRandom(min, max) {
  const r = Math.random(); //changement d'echelle 0 -> min et 1 max
  const newRandom = min + r * (max - min);
  return Math.floor(newRandom);
}
console.log(getRandom(10, 20))


/** EXERCICE 2
 * Utilise la function setTimeout pour afficher un nombre aléatoire après 1 secondes
 */

console.log('### EXO 2 ###');
const timerId = setTimeout(() => {
  console.log("exo 2 ====>", Math.random())
}, 1000);

/** EXERCICE 3
 * Utilise la function setTimeOut ou setInterval pour afficher
 * 10 nombres aléatoire chacun s'affiche au bout de 1 sec
 */

console.log('### EXO 3 ###');
let count = 10;
const timerId2 = setInterval(() => {
  console.log("exo 3 set interval", count, Math.random())
  count -= 1;
  if (count == 0) {
    clearInterval(timerId2); // arrete le timer
  }
}, 1000)

/**Exercice 4
* Utiliser la function SetTimeout ou setInterval
 pour afficher chaque seconde en entier aleatoire
 compris entre 4 et 10
 le programme s'arrete des que l'entier 8 est générer
*/
console.log('### EXO 4 ###');

const timerIdExo4 = setInterval(() => {
  const r = getRandom(4, 10)
  console.log("exo 4 set interval", r)
  if (r == 8) {
    console.log("fin exo 4 ======", r);
    clearInterval(timerIdExo4)
  }
}, 1000)


/** Exercice 5
* Crée un script en js qui affiche des entiers aléatoire entre 4 et 10
le script s'arrete des que l'entrier 8 est générer
*/
// let randomexo5;
// do {
//   randomexo5 = getRandom(4, 10);
//   console.log('exo 5', randomexo5)
// } while (randomexo5 != 8)

/**Exercice 6
Crée un script js qui affiche des entiers aléatoire entre 5et 15
le script s'arrete des qu'il généré duex fois le meme entier
 */

// generer des nombres aléatoires 
// il faut mémoriser les entiers precedements généré
// const exo6Items = [];
// let hasFinished = false;
// do {
//   const r = getRandom(5,15);
//   console.log("exo 6 =>", r);
//   if (exo6Items.includes(r)) {
//     console.log("exo 6", r, "à été généré")
//     hasFinished = true;
//   }
//   exo6Items.push(r)
// } while (hasFinished == false);

// console.log("exo6 data =>", exo6Items)
// //

// const  = [];
// let r = getRandom(5, 15);
// while(.includes(r)) {
//   console.log("exo 6 bis =>", r)
//   exo6Items.push(r);
//   r = getRandom(5,15);
// }
// console.log("exo 6 bis, element généré une deuxieme fois", r)

/** Exercice 7
* Crée un script qui affiche successivement dans entiers aléatoires entre 5 et 8
* Le script s'arrete des qu'il génére quatre fois le meme entier
*/
function getCount(items, itemToCount) {
  let count = 0;
  for (const item of items){
    if (item == itemToCount) {
      count += 1;
    }
  }
  console.log("count", itemToCount,  '=>', count);
  return count;
}

console.log("#### ecercice 7 solution 1 ##### ")
const exo7Items = [];
let exo7HasFinished = false;

do {
  const r = getRandom(5, 8);
  console.log("exo 7 =>", r);
  if (getCount(exo7Items, r) == 3) {
    console.log("exo 7:", r, "vient d'être généré 4 fois")
    exo7HasFinished = true;
  }
  exo7Items.push(r);
  console.log("exo 7 solituion 1", exo7Items);
}while(exo7HasFinished == false)


console.log("=============================== exxo 7 solution 2 ===============================")
exo7Items.splice(0, exo7Items.length);
let exo7Random = getRandom(5, 8);
while(getCount(exo7Items, exo7Random) < 3){
  exo7Items.push(exo7Random);
  console.log("exo 7 =>", exo7Items);
  exo7Random = getRandom(5,8);
  console.log("exo 7 =>", exo7Random);
}
console.log("exo 7, element généré quatre fois", exo7Random)

console.log("=============================== exxo 7 solution 3 Avec dictionnaire ===============================")
const generateNumbers = new Map();
exo7Random = getRandom(5,8)
while (
  generateNumbers.has(exo7Random) == false ||
  generateNumbers.get(exo7Random) < 3
  ){
  if (generateNumbers.has(exo7Random)) {
    generateNumbers.set(exo7Random, generateNumbers.get(exo7Random) + 1)
  } else {
    generateNumbers.set(exo7Random, 1)
  }
  console.log(generateNumbers);
  exo7Random = getRandom(5,8)
  console.log("exo 7 avec dico =>", exo7Random);

}
console.log("exo 7 avec dico, element généré quatre fois", exo7Random);
console.log("#### en exercice exo 7 solution 3 avec les dictionnaires et do while")