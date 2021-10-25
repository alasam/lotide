// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // if actual is equal to expected, then we will return a success message to the console
  if (actual === expected) {
    return console.log(`😃Assertion Passed😃: ${actual} === ${expected}`);
    // if actual is not equal to expected, we will return a failed message to console
  } else {
    return console.log(`😡Assertion Failed😡:  ${actual}  !==  ${expected}`);
  }
};

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

// TEST CODE
const words = [];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(tail(words));