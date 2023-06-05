const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {//if item is in itemstocount object
      if (results[item]) { //if there's already a key value
        results[item] += 1;
      } else { //if not then assign one with a value of one. First count
        results[item] = 1;
      }
    }
  }
  return results;
};



module.exports = countOnly;