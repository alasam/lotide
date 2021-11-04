// Module
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// without function pulls two arrays, the array to be modified, and the array with what to remove
const without = function(array, remove) {
  // copy array into newArr variable
  let newArr = array;
  
  // first loop goes through each item in the array
  for (let i = 0; i < array.length; i++) {
      
    // second compares each number in the remove array to the current array index and see if it matches
    for (let x = 0; x < remove.length; x++) {

      // if the two numbers matches, it splices and removes that entry in newArr
      if (array[i] === remove[x]) {
        newArr.splice(i,1);
      }

    }

  }

  return newArr;
};

module.exports = without;

