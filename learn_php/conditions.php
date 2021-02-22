<?php
$note = 10;
//$note = (int)readline('entrer votre note :'); // Lit une ligne

// simple exemple 
// if($note > 10){ // note strictement supérieur ou egal a 10
// 	echo 'bravo vous avez la moyenne';
// }else{
// 	echo 'Dommage vous n\'avez pas la moyenne';
// }	


// avec une autre conditions

// if($note > 10){ // note strictement supérieur ou egal a 10
// 	 // pour tester une double égaliter, le double == permet de dire que la valeur $ note et identique a 10
// 	if ($note == 10) {
// 		echo 'bravo vous juste la moyenne';
// 	}else{
// 		echo 'bravo vous avez la moyenne';
// 	}
// }else{
// 	echo 'Dommage vous n\'avez pas la moyenne';
// }


// autre methode : 

/*if($note > 10){ // note strictement supérieur a 10
	echo 'bravo vous avez la moyenne';
}elseif ($note === 10) { 
	echo 'Vous avez juste la moyenne';
}else{
	echo 'Dommage vous n\'avez pas la moyenne';
}	*/

// triple egale : verifie en plus le type de la variable est identique


// autre exemple 
/*
$action = (int)readline('entrer votre action :(1: attaquer, 2: se defendre, 3: passer mon tour)');

if ($action === 1) {
	echo "attaque";
}elseif ($action === 2) {
	echo "se defendre";
}elseif ($action === 3) {
	echo "passer sont tour";
}else{
	echo "commande inconnue";
}*/


// switch case

/*$action = (int)readline('entrer votre action :(1: attaquer, 2: se defendre, 3: passer mon tour)');


switch ($action) {
	case 1: 
		echo "j\'attaque";
		break;
	case 2: 
		echo "je defend";
		break;
	case 3: 
		echo "je ne fait rien";
		break;
	default;
		echo "commande inconnue";

		
}*/


// operation logique : 
// && => ET 
// || => OU

$heure = (int)readline('entrer une heure :');

if((9 <= $heure && $heure <= 12) || (14 <= $heure && $heure <= 17)){
	echo 'le magasins sera ouvert';
}else{
	echo 'le magasins sera fermer';
}

// VRAI && VRAI  = VRAI
// VRAI && FAUX = FAUX
// FAUX && FAUX = FAUX

// VRAI || VRAI = VRAI 
// VRAI || FAUX = FAUX
// FAUX || FAUX = FAUX

if(!((9 <= $heure && $heure <= 12) || (14 <= $heure && $heure <= 17))){
	echo 'le magasins sera ouvert';
}else{
	echo 'le magasins sera fermer';
}