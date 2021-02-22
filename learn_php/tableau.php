<?php
// ancienne notation
// $note = array(10,20);

/*------- -------- --------
 Exemples :
 -------- -------- --------*/
// $note = [10,20, 10, 9, 8];
// echo $note[3];

/*------- -------- --------
 exercice :
 -------- -------- --------*/
//$eleve = ['marc', 'doe', [10,20,40]];
//echo $eleve[2][1];
// affiche 20

$eleve = [
	'nom' => 'Du',
	'prenom' => 'Geoffrey',
	'notes' => [10, 20, 15]
];

$eleve['prenom'] ='Jean'; // enleve geoffrey et remplace jean a la place
$eleve['notes'][3] = 16;
$eleve[]='CM2-A';

//echo $eleve['nom'] .' '. $eleve['prenom']; // affiche Du Geoffrey
// afficher l'ensemble des notes => print_r($eleve['note']);

//print_r($eleve); 
/* Array ( 
	[nom] => Du 
	[prenom] => Jean 
	[notes] => Array ( 
		[0] => 10 
		[1] => 20 
		[2] => 15 
		[3] => 16 
	) 
	[0] => CM2-A )
*/

/*------- -------- --------
 exemples 2:
 -------- -------- --------*/

$classe = [
	[
		'nom' => 'Du',
		'prenom' => 'Geoffrey',
		'notes' => [16,1,16]
	],
	[
		'nom' => 'Du',
		'prenom' => 'Joeffrey',
		'notes' => [0,1,5],
	]
];
echo $classe[1]['notes'][2]; // affiche 5










?> 
</pre>