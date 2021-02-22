<?php 
// boucle tant que
// boucle pour 
// boucle pour chaque 


/**
Tant que 
*/

$chiffre = null;
// $chiffres et différents
// while($chiffre !== 10){
// 	$chiffre = (int)readline('entrer une valeur : ');
// 	break;
// }

// echo 'Bravo vous avez gagné!';


/*============================================================================
    > Boucle for
=============================================================================*/

/* pour incrementer 2 en 2 : remplacer $i++ => $i = $i + 2
* 
+= permet d'incrementer la valeur 
-= de décrementer la valeur
 */ 

// for ($i=0; $i < 10; $i++) { 
// 	echo "- $i \n";
// }


/*============================================================================
> Exercices
=============================================================================*/

// $notes = [10,15,16];

// for ($i=0; $i < 3; $i++) { 
// 	//echo '-' . $notes[$i] . "\n";
// }


/*============================================================================
    > Boucle POUR CHAQUE 
=============================================================================*/


// $notes = [10,15,16];

// foreach ($notes as $note ) {
// 	echo "- $note \n";
// }

// $eleves = [
// 	'cm2' => 'Jean',
// 	'cm1' => 'Marc'
// ];


// foreach ($eleves as $classe => $eleve ) {
// 	echo "$eleve est dans la classe - $classe \n";
// }



/** exercice 2 : */
/*
la classe cm2 :
- Jean
- marc
- Benjamin
- Marion

la classe cm1 :
- Emilie
- Margaux
*/


// $eleves = [
// 	'cm2' => ['Jean', 'marc', 'Benjamin', 'Marion'],
// 	'cm1' => ['Emilie', 'Margaux']
// ];


// foreach ($eleves as $classe => $listEleves) {
// 	echo "la classe $classe : \n";
// 	foreach ($listEleves as $eleve) {
// 		echo "- $eleve \n";
// 	}
// 	echo "\n";
// }


/*==== > EXERCICE : ==*/

/*

Demande a l'utilisateur de rentrer une note ou de taper "fin"
chaque note est sauvegarder dans un tableau $notes (penser $note[])
a la fin on affiche le tableau de note sous forme de list

*/

// $notes = [];
// $action = null;

// TANT QUE l'utilisateur ne tape pas 'fin'
// while ($action !== 'fin') {
// 	$action = readline('entrer une nouvelle notes (ou \'fin\' pour terminer la saisie) :');
// 	// on ajoute la note tapée au tableau notes
// 	if($action !== 'fin'){
// 		$notes[] = (int)$action;
// 	}
// }
// // pour chaque note dans notes
// foreach ($notes as $note) {
// 	// on affiche "- note"
// 	echo "- $note \n";
// }


// Meme exemple au dessus mais avec true
// while (true) {
// 	$action = readline('entrer une nouvelle notes (ou \'fin\' pour terminer la saisie) :');
// 	if($action !== 'fin'){
// 		break; 
// 	}else{
// 		$notes[] = (int)$action;
// 	}
// }

// foreach ($notes as $note) {
// 	echo "- $note \n";
// }

/*==== > EXERCICE 3: ==*/

/*

On veut demander à l'utilisateur de rentrer les horaires d'ouvertures d'un magasins
On demande a l'utilisateur de rentrer une heure, et on lui dira si le magasin est ouvert.
*/


// on demande à l'utilisateur de rentrer un crenaux 
	// on demande l'heure de début 
	// on demande l'heure de fin
	// on vérifie que l'heure de début < l'heure de fin
	// on demande si on veux rajouter un nouveaux crenaux (o/n)
// On demande a l'utilisateur de rentrer une heure 
// on affiche l'etat d'ouverture du magasin

$creneaux = [];
while (true) {
 $debut = (int)readline('heure de d\'ouverture : ');
 $fin = (int)readline('heure de fermeture : ');
 if ($debut >= $fin) {
 	echo "le crenaux ne peut pas être enregistré car l'heure de d\'ouverture ($debut) est supérieur à l'heure de fermeture ($fin)";
 }else{
 	$creneaux[] = [$debut, $fin];
 	$action = readline('Voulez vous enregistrer un nouveaux crénaux (0 / N) :');
 	if ($action === 'n') {
 		break;
 	}
  }
}

$heure = (int)readline(' A quel heure voulez vous visitez le magasin ? ');
$creneauTrouve = false;


echo 'le magasin est ouvert de ';
foreach ($creneaux as $creneau) {
	echo "{$creneau[0]}h à $creneau[1]h ";
}


// foreach ($creneaux as $creneau) {
// 	if ($heure >= $creneau[0] && $heure <= $creneau[1]) {
// 		$creneauTrouve = true;
// 		break;
// 	}
// }


// if ($creneauTrouve) {
// 	echo "magazin ouvert";
// }else{
// 	echo "magazin fermer";
// }





