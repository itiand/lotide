let eqArrays = function(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object2);

  if (keysObj1.length !== keysObj2.length) return false;

  for(let key of keysObj1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line

  if(eqObjects(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;


assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })