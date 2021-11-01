// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

// function returns everything in order, without the head of the array
const tail = function(arr) {
 
  // new variable for new array
  let newArr = [];

  // loops through and adds each item (except for the head) to newArr
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
};

module.exports = tail;