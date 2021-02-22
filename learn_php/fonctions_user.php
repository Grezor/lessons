<?php 
/***********************************
 * Function qui permet d'afficher un nom et un prenom dans une fonctions
 * Afficher bonjour et le mon de la personne
 * le mot return, renvoyer le resultat
 **********************************/
$nom = 'marc';
function bonjour($prenom = null, $nom = null){
    global $nom;

    if ($prenom === null) {
        return 'bonjour\n';
    }
    return 'BONJOUR ' . $prenom . " ". $nom. "\n";

}
echo bonjour('jean', $nom);

/*********************************
 * FUNCTION REPONDRE OUI OU NON
 *********************************/

 function repondre_oui_non(string $phrase):bool{
     while (true) {
        $reponse = readline($phrase . " - (o)ui/(n)on : ");
        if($reponse === "o"){
            return true;
        }elseif($reponse === "n") {
            return false;
        }
     }
 }

function demander_creneau($phrase = "Veuillez entreer un crenau"){
    echo $phrase . "\n";
    while(true){
        $ouverture = (int)readline('heure d\'ouverture : ');
        if ($ouverture >= 0 && $ouverture <= 23) {
            break;
        }
    }

    while(true){
        $fermeture = (int)readline('heure de fermeture : ');
        if ($fermeture >= 0 && $fermeture <= 23 && $fermeture > $ouverture) {
            break;
        }
    }
    return [$ouverture, $fermeture];
}
/**
 * [
 *   [0,19]
 *   [2,18]
 * ]
 */
function demander_creneaux(string $phrase = "veuillez entrer vos creneaux"):array {
    $creneaux = [];
    $continuer = true;
    while ($continuer) {
        $creneaux[] = demander_creneau();
        $continuer = repondre_oui_non('voulez vous continuez ? ');
    }
    return $creneaux;
}


// $creneaux = demander_creneaux('entrer vvos crenaux');
// var_dump($creneaux);

// $resultat = repondre_oui_non('Voulez vous continuer ?');
$creneau = demander_creneau(); // [8,9]
$creneau2 = demander_creneau('veuillez entrer votre creneau');
 // si l'utilisateur tape 'o' => true
 // si l'utilisateur tape 'n' => false

var_dump($resultat);
var_dump($creneau, $creneau2);



/********************************************* */