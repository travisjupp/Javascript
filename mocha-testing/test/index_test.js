// import modules
const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Setup: Define expected output
      const expected = 'cock-a-doodle-doo!';
      
      // Exercise: Call Rooster.announceDawn and store result in variable
      const actual = Rooster.announceDawn();
      
      // Verify: Use an assert method to compare actual and expected result
      assert.strictEqual(actual, expected);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // Setup: Define expected output data-type
      const inputNumber = 5;
      const expected = '5';
      // Exercise: Call Rooster.timeAtDawn() and store result in variable
      const actual = Rooster.timeAtDawn(5);
      // Verify: Use an assert method to compare actual and expected result
      assert.strictEqual(actual, expected);
    });
    it('throws an error if passed a number less than 0', () => {
      // Setup
      const hour = -1;
      const expected = RangeError;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(hour); // Exercise
      },expected);

    });
    it('throws an error if passed a number greater than 23', () => {
      // Setup
      const hour = 24;
      const expected =  RangeError;
      
      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(hour); // Exercise
      },expected);
    });
  });
});