var Percentage = require('../lib/percentage')
var assert = require('assert')

describe('Percentage', () => {
  describe('#evolution', () => {
    it('should give an evolution', () => {
      // assert.equal(Percentage.evolution(100,200), 100)
      // assert.equal(Percentage.evolution(100,150), 150)
      // assert.equal(Percentage.evolution(100,50), -50)
    })

    it('should handle 0 evolution', () => {
      // assert.equal(Percentage.evolution(0,100), Infinity)
    })
  }) 
})