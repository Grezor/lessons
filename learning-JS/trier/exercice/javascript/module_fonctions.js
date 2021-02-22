function DireBonjour(){
    // console.log('Bonjour ! ')
    const message1 ="Bonjour"
    return message1
}

// console.log("Début du programme");
// DireBonjour();
// console.log("fin du programme");


/**
 * Exemple 2 :
 */

 function direAurevoir(){
     const message = "Aurevoir ! "
     return message
 }

 // console.log(DireBonjour())
 // console.log(direAurevoir())


 /**==========================================================
  * Exemple 3 :
  * Passage de paramètres
  ==========================================================*/

 function direBonAppetit(prenom) {
    const message = `Bon Appetit, ${prenom} !`;
    return message;
  }
  
 // console.log(direBonAppetit("Jade"));


 /**==========================================================
  * Exemple 4 :
  * Passage de plusieurs parametre dans la function
  ==========================================================*/

  function Crier(couleur, passion, humeur){
      const info = `ma couleur préférer, ${couleur}, j'aime ${passion}, mon humeur aujourd'hui => ${humeur} `;
      return info
  }

  let couleur = "bleu"
  let passion = "equitation"
  let humeur = "ennervé"

 // console.log(Crier(couleur, passion, humeur));



   /**==========================================================
  * Exemple 5 :
  * function anonymes
  ==========================================================*/

  const Cafe = function(type){
      const degresCafe = `Votre café est de type, ${type} ! Si vous n'aimer pas veuillez nous le dire`;
      return degresCafe
  }

  // console.log(Cafe("fort"));

  // ==== le meme que celui au dessus mais différent. 
  // function fléchée

  const Pates = (type, aimePas) => {
    const typesPates = `les pates de type ${type} sont meilleur que les pates ${aimePas}`
    return typesPates;
  }

  // console.log(Pates("Macaroni", "Penne"));


  /**==========================================================
  * Exemple 6 :
  * function anonymes simplifié
  ==========================================================*/

  const probleme = problemevoiture => `J\'ai un probleme avec ma voiture, a cause du ${problemevoiture}, est ce que le je peux le résoudre`
  // console.log(probleme("Moteur"));