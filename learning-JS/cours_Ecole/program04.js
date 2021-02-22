const items = [
  "Kebab",
  "Nan",
  "Fromage",
  6,
  true
]


console.log('element 3 :',items[3]);


// pour parcourir le tableau

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

items.push("kethup"); // ajoute un element
items.splice(0,1); // supprime des elements

console.log("boucle 2")

//foreach
for(const item of items) {
  console.log(item)
}

console.log(Math.random()) // genere un nombre aleatoire
// il est compris entre 0 et 1

const x = 2.6;
console.log('floor =>', Math.floor(x)) // int inférieur le plus proche
console.log('ceil =>', Math.ceil(x)) // int

