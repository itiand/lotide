// FUNCTION IMPLEMENTATION
const countLetters = function(string) {
  let result = {};

  let trimmedLowerStr = string.toLowerCase().trim().split(' ').join('');  // lowercase and remove the space;
  let onlyAlphaStr = trimmedLowerStr.replace(/[^a-z]/gi, ""); //remove any non alphabetic characters
  
  //split them to make an array;
  let strArr = onlyAlphaStr.split('');
  
  //loop through that array
  for (let letter of strArr) {
    //if there's already an existing key in the result, means letter was already counted, so just += 1;
    if (result[letter]) {
      result[letter] += 1;
    } else {  //else initialize first count --> result[item] = 1;
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;