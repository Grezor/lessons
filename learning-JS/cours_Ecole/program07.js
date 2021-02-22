// programmation fonctionnel
// https://medium.com/@hkairi/programmation-fonctionnelle-avec-javascript-df4dafdbecda

function sum(a, b){
  return a + b;
}

function multiply(a, b){
  return a * b;
}
// variable =>emplacement pour stocker une donnée
// en js la données, ca peux être une valeur ou un traitement


//manipulation les fonctions comme des variables
const x = sum;
const f = multiply;
console.log(x, f, sum, multiply);

// appel des fonctions
console.log(x(10, 12));
console.log(f(10, 12));
console.log(sum(10,12));
console.log(multiply(10,12))
console.log('partie 2 ===================')

function runMethod(func) {
  console.log(func);
  // j'assume que func est une function qui prend deux number et returne un number
  const result = func(10,20);
  console.log(result);
}

runMethod(sum)
runMethod(multiply)
runMethod(f)
runMethod(x)
// function anonyme
runMethod(function(x, y) {
  return x - y;
})

//function fleche 
runMethod((x, y) => {
  return x - y;
})

//je peux abreger une function flèche en une ligne 
runMethod((x, y) => x / y);

// recommandation: si définit la function ligne (directement comme valeur du parametre)
// utiliser une function fleche
setTimeout(function() {
  console.log("coucou")
}, 1000);

// avec la function fleché
setTimeout(() => console.log("function fleché de setTimeout"), 1000);

function printmessage() {
  console.log("message");
}

setTimeout(printmessage, 1000);
