const p = new Promise((resolve, reject) => {
  const a = 1 + 20
  if (a === 2) {
    resolve('sucess')
  } else {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('failed')
  }
})

p.then((message) => {
  return console.log('this is the then' + message)
}).catch((message) => {
  return console.log('this is the erro' + message)
})