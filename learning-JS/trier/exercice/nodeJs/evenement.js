var http = require('http');
var server = http.createServer();
server.on('request', function(req,res){
// var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});

server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})




// var EventEmitter = require('events').EventEmitter;

// var jeu = new EventEmitter();

// jeu.on('gameover', function(message){
//     console.log(message);
// });

// jeu.emit('gameover', 'Vous avez perdu !');

server.listen(8080); // Démarre le serveur

server.close(); // Arrête le serveur. Déclenche l'évènement close