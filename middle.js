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

  //get array length.
  let middleIndex = Math.floor(array.length/2);

  //iterate through array
  if (array.length % 2 === 0) {
    const middleLeft = array[middleIndex - 1];
    const middleRight = array[middleIndex];
    return [middleLeft, middleRight];
  } else {
    const middleElement = array[middleIndex];
    return [middleElement];
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);