//Modules
const eqArrays = require('./eqArrays')
const assertArraysEquals = require('./assertArraysEqual')

//-----------------------------------------------------------------------------------------------------------

// middle function returns middle item/items in an array
const middle = function(arr) {
  let newArr = [];
  let midNum = Math.floor(arr.length / 2);
  
  // outputs a blank array if there are only 2 or less items in the array
  if (arr.length <= 2) {
    
    return [];
    
    // outputs the middle item if there is an odd amount of items 
  } else if (arr.length % 2 !== 0) {
    
    newArr.push(arr[midNum]); 
    return newArr;

    // outputs the 2 middle items if there is an even amount of items
  } else {
    
    newArr.push(arr[midNum] - 1, arr[midNum]); 
    return newArr;
  }

}

module.exports = middle;

