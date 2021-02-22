/**
Crée une function compute (x, y, f)
ou x et y sont des nombres et f est une function (qui prend deux nombre et return un nombre) .
- la function compute affiche le résultat de l'apel de f en lui passant x et y 
- Définir la compute
- Apeler la function "compute" avec les techniques suivantes: 
    - en lui passant une fonction fleches
    - en lui passant une référence vers une fonction nommée
    - en lui passant une function anonyme
*/

function compute(x, y, f) {
  const result = f(x, y);
  console.log(result);
}

function getMax(a, b) {
  return a > b ? a : b;
}

console.log("==== reponse 1 ====")
compute(3, 4, (a, b) => Math.pow(Math.log(a), b) );
console.log("==== reponse 2 ====")
compute(10, 20, getMax);
console.log("==== reponse 3 ====")
compute(40, 1, Math.max);
console.log("==== reponse 4 ====")
compute(8.0, 10, function (i, j) {
  return Math.LN2 + i + j;
});
// reponse dans la console
// reponse 1
// 1.4567257940065708
// reponse 2
// 20
// reponse 3
// 40
// reponse 4
// 18.693147180559947


/**
 * En javascript, les tableaux ont une méthode forEach qui prend une fonction en paramètre. La méthode forEach appelle cette méthode
 * pour chaque élément du tableau. Pour plus de documentation, chercher sur internet "javascript array foreach".
 * Créer une tableau "items" contenant 30 entiers aléatoires entre 100 et 150.
 * Répondre aux questions suivantes en utilisant forEach .
 * 3- Trouver la somme, le minium et le maximum du tableau "items", sans Utiliser les méthodes min et max.
 * 4- Créer un dictionnaire dont la clé est un entier entre 100 et 150 et la valeur et le nombre de répétitions de clé dans le tableau "items".
 *   Si la clé n'existe pas dans "items", sa valeur est 0 dans le dictionnaire.
 * 5- Créer un tableau "uniqueItems" qui contient les éléments uniques de "items" (sans les répétitions).
 * ex. [100, 150, 100] => [100, 150]
 */
function getRandom(min, max) {
  const r = Math.random();
  const newRandom = min + r * (max -min)
  return Math.floor(newRandom);
}

const items = [];
const uniqueItems = [];
for (let i = 0; i < 30; i++) {
  items.push(getRandom(100, 150));
}

const repetitions = new Map();
for (let i = 100; i <= 150; i++) {
  repetitions.set(i, 0); // initialiser a 0  
}

console.log("#### partie 2 ### ")
console.log("items =>", items);
let min = items[0];
let max = items[0];
let sum = 0;

items.forEach((v) => {
  min = v < min ? v : min;
  max = v > max ? v : max;
  sum += v;
  repetitions.set(v, repetitions.get(v) + 1);

  if (!uniqueItems.includes(v)) {
    uniqueItems.push(v);
  }
});

// backtick ou accent grave 
console.log(`3) max => ${max}, min => ${min}, sum => ${sum} `)
console.log(`4) repetition =>`, repetitions)
console.log(`5) UniquesItems =>`, uniqueItems)
/**
 * En javascript, les tableaux ont une méthode filter qui prend un prédicat en paramètre. La méthode filter appelle le prédicat pour chaque
 * élément du tableau. Le résultat de filter est un tableau contenant les éléments qui satisfont le prédicat.
 * Pour plus de documentation, chercher sur internet "javascript array filter".
 * Utiliser filter pour la suite :
 * En utilisant le tableau "items" de l'exercice précédent, répondre aux questions suivantes en utilisant filter.
 * 6- Qu'est-ce qu'un prédicat ? 
 *     reponse : function qui retourne vrai ou faux
 * 7- Créer un tableau contenant les éléments pairs de items.
 * 8- Créer un tableau contenant les éléments > 125 de items. (greater than)
 * 9- Créer un tableau contenant les éléments non > 125 et non paires.
 * 10- Créer un tableau contenant les éléments soit > 125, soit paires.
 */

const evenItems = items.filter(v => v % 2 == 0);
console.log("7)", evenItems);

const greaterThan125Items = items.filter((v) => v > 125);
console.log("8)", greaterThan125Items);

const questions9 = items.filter((v) => v <= 125 && v % 2 != 0);
console.log("9) ", questions9)

const questions10 = items.filter((v) => v > 125 || v % 2 == 0);
console.log("10) ", questions10)


const q10bis = items
  .filter((v) => v > 125);