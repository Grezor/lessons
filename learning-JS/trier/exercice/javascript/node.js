// console.log('Bienvenue dans Node.js !');

// effectue un appel a la bibliotheque de nodejs, qui permet de crée un serveur web/
var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query)
    // var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});

    if ('prenom' in params && 'nom' in params) {
        res;write('Vous vous appelez' + params['prenom'] + ' ' + params['nom'])
    }else{
        res.write('vous devez avoir un nom et prenon non ? apart si vous venez de mars')
    }
    // if(page == '/'){
    //     res.write('page de l acceuil');
    // }

    // else if(page == '/home'){
    //     res.write('page homeeeee');
    // }
    // else if(page == '/test/1/test1'){
    //     res.write('hé ho')
    // }
    // res.write('Bien le bonjour');
    res.end();
});
server.listen(8080);