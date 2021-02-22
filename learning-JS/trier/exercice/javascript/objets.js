const stylo = {
    type: "bille",
    couleur : "bleu",
    marque : "Bic"
};

// console.log(stylo.type);    
// console.log(stylo.couleur);  
// console.log(stylo.marque);  

// console.log(`J'écris avec un stylo ${stylo.type} et comme couleur ${stylo.couleur} de marque ${stylo.marque}`);

  /**==========================================================
  * Exemple 2 :
  * Modifier un objet
  ==========================================================*/


const voiture = {
    moteur: "essence",
    nombreRoue: "4",
    interieurCouleur : "noir", 
    couleurExterieur : "noir",
    typeDeFeu : "LED",

}
// si on souhaite changer une propriété de l'objet
 voiture.couleurExterieur = "bleu"

// console.log(`La voiture que je possède, et de type ${voiture.moteur}, avec ${voiture.nombreRoue} roue, avec a l'intérieur un manifique
//  ${voiture.interieurCouleur} surpicure rouge, avec couleur extérieur ${voiture.couleurExterieur}. Ainsi que c'est feu à ${voiture.typeDeFeu}
// `);


/**==========================================================
 * Exemple 3 :
 * creation d'un personnage 
 ==========================================================*/

 const JohnSnow = {
     nom: "John",
     sante: 150,
     force: 200
 };

 // JohnSnow s'apprête a vivre une longue série d'aventure, Va t-il mourrir ?

 //console.log(`${JohnSnow.nom} a ${JohnSnow.sante} point de vie et ${JohnSnow.force} en force`)

 //console.log('John est blessée par une une flêche')
 JohnSnow.sante = JohnSnow.sante - 100;

 //console.log("John trouve une potion magique");
 JohnSnow.force = JohnSnow.force + 500;

 //console.log(`${JohnSnow.nom} a progresser et meilleur avec ${JohnSnow.sante} point de vie et ${JohnSnow.force} en force`);

 /**
 * la notion au dessus affiche les caractéristique du personnage est dupliquée, ce qui est mauvais
 * la meilleur en dessous.
 */

 const ironMan = {
     nom: "Tony Stark",
     sante : "100",
     force : "armure"
 };

 function decrirePersonnage(personnage){
      return `${personnage.nom} à ${personnage.sante} point de vie, et posséde une force grace a sont ${personnage.force}`;
 }
 // la function décrire n'utilise que les propriété d'un personnage. Qui est passé en paramétre
 //console.log(decrirePersonnage(ironMan));


 /**
  * On peux l'ajouter à la définition de notre objet sous la forme d'une nouvelle propriété dont la valeur est une fonction
  */

 const thor = {
    nom: "Thor",
    dieu: "tonnere",
    sante : "300",
    force : "marteau",

    decrire(){
        return `${this.nom} dieu du ${this.dieu} à ${this.sante} point de santé, et posséde un ${this.force} comme force`
    }
};
// la function décrire n'utilise que les propriété d'un personnage. Qui est passé en paramétre
// console.log(thor.decrire());






