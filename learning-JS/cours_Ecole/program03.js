

let x = 45;
x =20;
console.log(x, typeof x);
x = "hello";
console.log(x, typeof x);
x = true;
console.log(x, typeof x)
x = ["BIBE", "SLAM"];
console.log(x, typeof x);
x = new Date();
console.log(x, typeof x);

fucntion showValue (value) {
  console.log(value);
}
showValue(x);
showValue(undefined);
showValue(true)
showValue("bientot la pause");
showValue(null);
showValue(21.2);

let count = 10;
// setInterval lance un traitement asynchrone qui se repete touts
// les 100ms (voir 2 eme parametre)
const timerId = setInterval(() => {
  showValue(count)
  count -= 1;
  if (count = 0) {
    clearInterval(timerId)
  }
}, 1000);
Console.log("timerId")