// console.log(window.innerHeight) => non dispo sur node
// fs => file system
const fs = require("fs");

// fs.rename("file2.txt", "file.txt", (err) => {
//   console.log("rename complete")
//   if (err) {
//     console.log("an error has occured")
//     console.log(err)
//   }  
// })

 // pour ouvrir un fichier
// fs.open("file.txt", "r", (err, fd) => {
//   console.log(fd)
//   fs.close(fd, (err) =>{
//     if(err) throw err;
//   })
// })

console.log(process.argv);
console.log(process.argv[2]);

const content = fs.readFileSync("file.txt","utf8");
console.log(content)

// Argments de la ligne de commande
console.argv(process.argv);
