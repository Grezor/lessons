

function sum (x, y){
  return x + y;
}

function multiply(x, y){
  return x * y;
}
function getRandom(min, max) {
  const r = Math.random(); //changement d'echelle 0 -> min et 1 max
  const newRandom = min + r * (max - min);
  return Math.floor(newRandom);
}
// on peux aussi exporter les functions dans un tableau
module.exports = {
  sum: sum,
  multiply: multiply,
  PI: 22/7,
  getRandom
}


