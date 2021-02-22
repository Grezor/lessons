const exo3Class = require('./bricolage');

const enclume = new exo3Class.Enclume(10, "ca tape");
const t1 = new exo3Class.Tournevis(1, "sa visse", 5);
const t2 = new exo3Class.Tournevis(3, "ca visse 2", 7);

const boite = new exo3Class.BoiteRangement();
boite.outils.push(enclume);
boite.outils.push(t1);
boite.outils.push(t2);
console.log(boite)