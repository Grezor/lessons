let http = require('http')
let fs = require('fs')
let url = require('url')

var app = require('./app')

let server = http.createServer()
server.on('request', (request, response) => {
    response.writeHead(200)
    // prendre les params get dans l'url
    let query = url.parse(request.url, true).query

    if (query.name === undefined) {
        response.write('Bonjour anonyme')
    }else{
        //recuperer les informations des url, et afficher dans la page
        response.write('Bonjour ' + query.name)
    }

    response.end()

    // fs.readFile('./CreateServer/index.html', (err, data)=> {
    //     if (err) {
    //         response.writeHead(404)
    //         response.end("ce fichier n'existe pas")
    //     }else{
    //         response.writeHead(200, {
    //             'Content-type': 'text/html; charset=utf-8'
    //         })
    //         response.end(data)
    //     }
    // })
        // console.log('il y a eu une requete')
});

server.listen(1595)

