/**
 * Exemple : Typeof
 */
var number = 2;
// alert(typeof number); // affiche number

var text = 'mon texte';
// alert(typeof text); // affiche string 

var aBoolean = false;
// alert(typeof aBoolean); // affiche : un boolean

/**
 * Exemple de caluls simple : 
 */

var exemple1 = 3 + 2;
// alert(exemple1);



var divisor = 3, result1, result2, result3;
result1 = (16 + 8) / 2 - 2 ; // 10
result2 = result1 / divisor;
result3 = result1 % divisor;

// alert(result2); // Résultat de la division : 3,33
// alert(result3); // Reste de la division : 1


/**
 * Exemple la concaténation :
 */

 var hi ='Bonjour ', name = 'toi', result;
 result = hi + name;
// alert(result);


/**
 * Intéragir avec l'utilisateur : 
 */
// la concaténation avec la fonction prompt()
// 
// var userName = prompt('Entrer votre prenom :');
// alert(userName);


var startVisiteur = 'Bonjour ', name, end = ' !', result;
// name = prompt('Quel est votre prénom ?');
result = startVisiteur + name + end;

// alert(result);


/**
 * Convertir une chaine de caractère en nombre
 */

 var fisrt, second, result;

 fisrt = prompt('Entrez le premier chiffre : ');
 second = prompt('entrer le deuxieme chiffre : ');
 result = fisrt + second;

 alert(result);