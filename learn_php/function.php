<?php 

/*$mot = readline('veuillez entrer un mot : ');
$reverse = strtolower(strrev($mot));

if(strtolower($mot) === $reverse){
    echo 'ce mot est un palyndrome';
}else{
    echo 'ce mot n\'est pas palyndrome';
}

*/

/**
 * Exercice 2
 */
/**
 * array_sum - calcule la somme des valeurs du tableau
 * Compte tous les élèments d'un tableau 
 * round permet d'arrondir après la virgule. 
 * Ici je met deux chiffres après la virgule
 */


/*$notes = [10, 20, 13];
$sum = array_sum($notes);
$count = count($notes);
echo "le tableau contient " . $count  . "élements \n";
var_dump($sum);

echo "vous avez " . round($sum / $count, 2) . " de moyenne";
*/

/**
 * Exercice 3
 */

//  while (true) {
//     $mot = readline('Entrer votre mot : ');     
//     if($mot === ""){
//         exit('fin du programme');

//     }
//     $reverse = strtolower(strrev($mot));
//     if (strtolower($mot) === $reverse) {
//         echo "ce mot est un polyndrone \n";
//     }else {
//         echo "ce mot n\'est pas un polyndrone \n";
//     }
// }


/**
 * execice 4 :
 * filtrer les insultes et mettres de * 
 * str_replace : remplace toutes les occurences par une chaine;
 * strlen : calcule la taille d'une chaine.
 */

$insultes = ['merde', 'con'];
$asterisque = [];
$phrase = readline('Entrer une phrase : ');
foreach ($insultes as $insulte ) {
    $asterisque[] = str_repeat('*', strlen($insulte));
}

// foreach ($insultes as $insulte) {
//     $replace = str_repeat('*',strlen($insulte));
// 	$phrase = str_replace($insulte, $replace, $phrase);
// }

// deuxième posssibilité : 
 $phrase = str_replace($insultes, $asterisque, $phrase);

echo $phrase;
?>