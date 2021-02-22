/* créer un script node qui affiche le contenu du fichier dont le chemin est passé en argument de la ligne de commande */
const fs = require("fs")
const filePath = process.argv[2];
const content = fs.readFileSync(filePath, "utf8")
console.log(content);