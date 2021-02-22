<?php

/**
 * Les variables 
 */

// $nom = "Marc";
// echo $nom;

// $note = 10;
// $note2 = 15;
// echo ($note + $note2)/2;

// $prenom = 'jeff' ;
// $nom = 'doe';
// echo $prenom . ' ' .$nom;
// echo "$prenom $nom";


/**
 * les boolean 
 * true (vrai) ou false(fuaux)
 */

// $prenom = false;
// $prenom = null; // une variable qui n'a pas de valeur



$prenom = 'marc';
$nom = 'does';
$note1 = 10;
$note2 = 20;
$moyenne = ($note1 + $note2) /2;
// bonjour marc does vous avez eu 15 de moyenne
echo 'Bonjour ' . $prenom . ' ' . $nom . ' Vous avez eu ' . (($note1 + $note2) /2) .' de moyenne';
echo "\nBonjour $prenom $nom vous avez eu $moyenne de moyenne" ;






?>