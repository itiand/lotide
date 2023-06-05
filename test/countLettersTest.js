const countLetters = require('../countLetters');
const assert = require('chai').assert;


describe("#countLetters", () => {
  it('should return an object with letters as the properties and the count as the values. Space characters should also not be included', () => {
    assert.deepEqual(countLetters('Lighthouse Labs is great!'), {
      l: 2,
      i: 2,
      g: 2,
      h: 2,
      t: 2,
      o: 1,
      u: 1,
      s: 3,
      e: 2,
      a: 2,
      b: 1,
      r: 1
    });
  });
});