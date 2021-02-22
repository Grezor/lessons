## Les erreurs a éviter en production

Toutes les erreurs en javascript sont gérées comme des exceptions qui créent et lance (throw) une erreur via le mécanisme Javascript.

Dans la construction try/catch, une erreur est lancée dans le programme, et plus rien ne s'éxecute jusqu'a ce que l'erreur sois résolu.

```js
$ node app.js 
j'ecoute sur 8080
/home/user/openclassrooms/example/app.js:6
 visiteurs++;
 ^

ReferenceError: visiteurs is not defined
 at Server.<anonymous> (/home/user/test/openclassrooms/example/app.js:6:3)
 at emitTwo (events.js:106:13)
 at Server.emit (events.js:191:7)
 at parserOnIncoming (_http_server.js:562:12)
 at HTTPParser.parserOnHeadersComplete (_http_common.js:99:23)
```

On constate que la variable visiteurs n'est jamais définie, et l'application va planter. En NodeJS, contairement a du php, si il y a la moindre erreur survient et n'est pas gérée l'application meurt. 

## la bonne pratique :

C'est de loguer l'erreur quelque part pour avoir une trace, puis de redémarrer l'application. Cela permet de revoir l'erreur passées et de tenter de la reproduire, tout en assurant une bonne qualité de service.