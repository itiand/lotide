const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("return everythin in the given array except for the first item. eg ['Yo Yo', 'Lighthouse', 'Labs'] --> ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),['Lighthouse', 'Labs']);
  })

  it("should not change the original array", () => {
    const originalArray = ["Yo Yo", "Lighthouse", "Labs"];
    tail(originalArray);
    assert.deepEqual(originalArray, ["Yo Yo", "Lighthouse", "Labs"]);
  });

})
// Test Case: Check the original array
// const words = ['Lighthouse', 'Labs'];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!