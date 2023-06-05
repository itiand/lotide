const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("return an empty array if given array is just one item", () => {
    assert.deepEqual(middle([1]), []);
  }),

    it("return an empty array if given an empty array", () => {
      assert.deepEqual(middle([]), []);
    });

  it("reutrn [2] if given [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("return [3] if given [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("return two of middle item of a even-length array, eg [1, 2, 3, 4] --> [2,3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});



// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);