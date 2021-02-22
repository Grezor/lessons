//const myAnchor = document.getElementById('my-anchor');

// const content = document.getElementsByClassName('content');
// const firstContent = content[0];

// // Pour mettre plusieurs procédés
// const elt = document.querySelector("#myId p.article > a");

// pour modifier le contenu d'un element 
// let elt = document.getElementById('main');
// elt.innerHTML = "<ul><li>Elément 1</li><li>Elément 333</li></ul>";


/**
 * Modifier des classes
 */
// elt.classList.add("nouvelleClasse");    // Ajoute la classe nouvelleClasse à l'élément
// elt.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter
// elt.classList.contains("nouvelleClasse");   // Retournera false car on vient de la supprimer
// elt.classList.replace("oldClass", "newClass"); // Remplacera oldClass par newClass si oldClass était présente sur l'élément


/**
 * Changer le style d'un élément 
 */

elt.style.color = "#fff";      // Change la couleur du texte de l'élément à blanche
elt.style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir
elt.style.fontWeight = "bold"; // Met le texte de l'élément en gras

/**
 * Modifier les attributs 
 */

// elt.setAttribute("type", "password");   // Change le type de l'input en un type password
// elt.setAttribute("name", "my-password"); // Change le nom de l'input en my-password
// elt.getAttribute("name");               // Retourne my-password

/**
 * Ajouter des enfants
 */
// const newElt = document.createElement("div");
// let elt = document.getElementById("main");
// elt.appendChild(newElt);

/**
 * supprimez et remplacez des éléments 
 */

const newElt = document.createElement("div");
let elt = document.getElementById("main");
elt.appendChild(newElt);

elt.removeChild(newElt);    // Supprime l'élément newElt de l'élément elt
elt.replaceChild(document.createElement("article"), newElt);    // Remplace l'élément newElt par un nouvel élément de type article