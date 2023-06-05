const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// ******** They have the same number of keys
// ******** The value for each key in one object is the same as the value for that same key in the other object
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

module.exports = eqObjects;