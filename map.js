let eqArrays = function(arr1, arr2) {
  if (!arr1 || !arr2) return false; // Needs to be before testing arr1.length
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

const words = ["ground", "control", "to", "major", "tom"];
 
const map = function(arr, fn) {
  const results = [];
  for (let item of arr) {
    results.push(fn(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word.toUpperCase()), [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]);
assertArraysEqual(map(words, word => word.slice(1)), [ 'round', 'ontrol', 'o', 'ajor', 'om' ]);



// arr is actually an array
// fn is actually a function
//results actually returns an array

