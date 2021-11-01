const assertEqual = require('./assertEqual');

// function checks returns head of the array
const head = function(arr) {
  // if arr is empty, it will return as undefined
  if (arr === "") {
    return undefined;
    // if arr is not an array and only has 1 value, it will return the 1 value
  } else if (Array.isArray(arr) === false) {
    return arr;
  }
  
  // returns the head of the array
  return arr[0];
}
module.exports = head;