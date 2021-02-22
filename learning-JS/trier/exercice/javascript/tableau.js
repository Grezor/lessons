const films = [
    "THOR",
    "Iron Man",
    "James Bond"
];

// obtenir la taille du tableau
//console.log(films.length); // affiche 3


// afficher la liste du tableau films
// console.log(films[0]);
// console.log(films[1]);
// console.log(films[2]);



// Pour modifier le contenu d'un tableau
films.push("Les bronzés");

// autre option pour afficher 
for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
}
 // Ou
for(const film of films){
   // console.log(film);
}


 