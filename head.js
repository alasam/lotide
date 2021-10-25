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

// TEST CODE

console.log(head());
console.log(head(3));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
