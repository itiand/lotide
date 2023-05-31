let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


//modulo === 0 means even number -> two elements in the middle
//means array[array.length / 2] and array[(array.length / 2) - 1] are the middle items
//modulo !== 0 means odd number -> one element in the middle
//middle = Math.floor(array.length) eg. Mathfloor(11/2) = 5 -- means index 5 is the middle.
const middle = function(array) {
  if (array.length <= 2) return [];

  let result = [];
  //get array length.
  let length = array.length;

  //iterate through array
  if (length % 2 === 0) {
    result.push(array[length / 2 - 1]);
    result.push(array[length / 2]);
  } else {
    result.push(array[Math.floor(length / 2)]);
  }
  return result;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);