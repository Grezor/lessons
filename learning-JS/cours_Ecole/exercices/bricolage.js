// exo: Dans un fichier Javascript appelé "bricolage" les classes suivantes en utilisant les classes ES6
// Outil: avec le propriétés "poids" et "usage" initialisées dans le constructeur et la méthode utiliser()
// Enclume: hérite de Outil et définit la méthode "tomberDuCiel()"
// Tournevis: hérite de Outil et définir la propriété diamètre
// BoiteRangement: contient une propriété "outils" initialisée à une tableau vide
// En utilisant commonJS, exporter les classes: BoiteRangement, Tournevis et Enclume
// Dans un noveau fichier JS: importer les classes BoiteRangement, Tournevis et Enclume. 
//   Puis, créer une BoiteRangement avec deux tournievis et une enclume

class Outil {
  constructor(poids, usage) {
    this.poids = poids;
    this.usage = usage;
  }
  utiliser(){}
}

class Enclume extends Outil {
  tomberduciel(){}
}

class Tournevis extends Outil {
  constructor(poids, usage, diametre){
    super(poids, usage);
    this.diametre = diametre;
  }
}

class BoiteRangement {
  constructor(){
    this.outils = [];
  }
}

module.exports = {
  Outil: Outil,
  Enclume,
  Tournevis, 
  BoiteRangement, 
}
