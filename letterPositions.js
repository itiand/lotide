let eqArrays = function(arr1, arr2) {
  if (!arr1 || !arr2) return false;
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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  let lettersArray = sentence.toLowerCase().split('');
  
  for (let i = 0; i < lettersArray.length; i ++) {
    let letter = lettersArray[i];
    if (!results[letter]) results[letter] = [];
    results[letter].push(i);
  }

  delete results[' '];

  return results;
};

let testing = letterPositions('hello');
assertArraysEqual(testing['h'], [0]);
assertArraysEqual(testing['e'], [1]);
assertArraysEqual(testing['l'], [2,3]);
assertArraysEqual(testing['o'], [4]);

console.log(letterPositions("lighthouse in the house"));
//EXPECTED
//{
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

//NOTE: edge cases where non alphabet chars included - not implemented.



