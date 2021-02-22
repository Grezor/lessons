const dico = new Map();
dico.set("nom", "mario");
dico.set("vies", 4);

console.log(dico.get("nom"));
console.log(dico.get("vies"));
console.log(dico.get("luigi"));
console.log(dico.has("luigi"));
console.log(dico.get("luigi") === undefined);

