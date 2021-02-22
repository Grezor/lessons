function f(x, callback) {
  if(x){
    console.log("x tru")
    callback
  }else{
    console.log("x falsy")
  }
  return true;
}

f(10, (y) => console.log(y));
console.log("f done");

function g(callback) {
  setTimeout(() => {
    console.log("finished");
    callback(10)
  }, 1000);
}