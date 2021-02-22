var assert = require('assert')

describe('test de text', () => {
  it('should do something', () => {
    const a = 3
    assert.equal(a *2, 6, 'la multiplication n\'a pas fontionner')
  })
})

describe('Array', () => {
  it('should return -1 when the value is not present', () => {
    assert.equal([1,2,3].indexOf(4), -1, 'erreur produite')
  })
})

describe('code Asynchrone', () =>{
  describe('User', () => {
    // il doit enregistrer sans erreur
    it('should save without error', (done) => {
      const user = new User('Luna')
      user.save((err)=> {
        if (err) done(err)
        else done()
      })
    })
  })
})