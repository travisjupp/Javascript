var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if the output of 5! is equal to 120', () => {
      // setup
      const expected = 120;
      const factor = 5;
      // exercise
      const actual = Calculate.factorial(factor);
      
      // verify
      assert.equal(actual, expected);  
    });
    it('test if the output of 3! is equal to 6', () => {
      // setup
      const expected = 6;
      const factor = 3;
      //exercise
      const actual = Calculate.factorial(factor);
      // verify
      assert.equal(actual, expected);
    });
    it('test if the output of 0! is equal to 1', () => {
      // setup
      const expected = 1;
      const factor = 0;
      // exercise
      const actual = Calculate.factorial(factor);
      // verify
      assert.equal(actual, expected);
    });
  });
});