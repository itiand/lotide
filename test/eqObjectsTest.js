const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


describe('#eqObjects', () => {
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

  it("returns true if the two objects being compared have the same, and amount of, properties, and the same values", () => {
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });

  it("returns false if one object contains all properties with same values that second object has but one object has extra properties", () => {
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });
});