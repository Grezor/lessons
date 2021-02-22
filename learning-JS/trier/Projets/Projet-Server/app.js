var url = require('url');
var url = require('fs');

function renderHTML(path, response){
    fs.readFile('./CreateServer/index.html', (err, data)=> {
            if (err) {
                response.writeHead(404)
                response.end("ce fichier n'existe pas")
            }else{
                response.writeHead(200, {
                    'Content-type': 'text/html; charset=utf-8'
                })
                response.end(data)
            }
        })
}

module.exports = {
    handleReqyest: function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});

        var path = url.parse(request.url).pathname;
        switch(path){
            case '/':
                renderHTML('./CreateServer/index.html', response);
                break;
            case '/api':
                renderHTML('./CreateServer/api', response);
                break;
            default:
                response.write(404);
                response.writr('Route indefini');
                response.end();
        }
    }
};