const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const utils = require("../cours/utils")
const server = http.createServer((req, res) => {
  res.statusCode = 200;
 
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World');
  res.send(
    `<html>
      <body>
        <h1> première page ${utils.getRandom(0,10)}</>
      </body>
    </html>
    `
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
