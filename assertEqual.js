// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // if actual is equal to expected, then we will return a success message to the console
  if (actual === expected) {
    return console.log("😃Assertion Passed😃: " + actual + " === " + expected);
    // if actual is not equal to expected, we will return a failed message to console
  } else {
    return console.log("😡Assertion Failed😡: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 2);