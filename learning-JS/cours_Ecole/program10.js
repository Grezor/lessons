// on import le module utils
// les module avec require et module.exports =>technique ou synthaxe common.js
// module ES (modules Ecmascript)
const sayPika = require("./pika")
const Pokemon = require("./pokemon")
const pi = require("./pi")
const utils = require("./utils")

sayPika();
const p = new Pokemon();
console.log(p, p.level);
console.log(pi)
console.log(utils[0](2,4));


