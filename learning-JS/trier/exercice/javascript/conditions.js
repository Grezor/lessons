var number1 = 2, number2 = 2, number3 = 4, result;

result = number1 == number2; // On spécifie deux variables avec l'opérateur de comparaison entre elles
//alert(result); // Affiche « true », la condition est donc vérifiée car les deux variables contiennent bien la même valeur

result = number1 == number3;
//alert(result); // Affiche « false », la condition n'est pas vérifiée car 2 est différent de 4

result = number1 < number3; 
//alert(result); // Affiche « true », la condition est vérifiée car 2 est bien inférieur à 4




if (2 < 8 && 8 >= 4) { // Cette condition renvoie « true », le code est donc exécuté
    // alert('La condition est bien vérifiée.');
}

if (2 > 8 || 8 <= 4) { // Cette condition renvoie « false », le code n'est donc pas exécuté
    // alert("La condition n'est pas vérifiée mais vous ne le saurez pas vu que ce code ne s'exécute pas.");
}


/**
 * Popup confirm 
 */
// if (confirm('Voulez-vous exécuter le code JavaScript de cette page ?')) {
    // alert('Le code a bien été exécuté !');
// }

// if (confirm('Pour acceder a ce site, vous devez avoir 18 ans ou plus, cliquez sur "ok" su c\'est le cas')) {
//     alert('Vous allez être redirigé vers le site.');
// } else {
//     alert("Désolé, vous n'avez pas accès à ce site.");
// }


// var floor = parseInt(prompt("Entrez l'étage où l'ascenseur doit se rendre (de -2 à 30) :"));
// if (floor == 0) {
//     alert('Vous vous trouvez déjà au rez-de-chaussée.');
// } else if (-2 <= floor && floor <= 30) {
//     alert("Direction l'étage n°" + floor + ' !');
// } else {
//     alert("L'étage spécifié n'existe pas.");
// }

/**
 * La conditions switch
 */

// var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));

// if (drawer == 1) {
//     alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
// } else if (drawer == 2) {
//     alert('Contient du matériel informatique : des câbles, des composants, etc.');
// } else if (drawer == 3) {
//     alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
// } else if (drawer == 4) {
//     alert('Contient des vêtements : des chemises, des pantalons, etc.');
// } else {
//     alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
// }


var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));

switch (drawer) {
    case 1:
        alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
    break;

    case 2:
        alert('Contient du matériel informatique : des câbles, des composants, etc.');
    break;

    case 3:
        alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
    break;

    case 4:
        alert('Contient des vêtements : des chemises, des pantalons, etc.');
    break;

    default:
        alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
}


