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

module.exports = middle;