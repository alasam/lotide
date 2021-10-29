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

// function that finds a value in an object and returns the key it is in.
const findKeyByValue = function(object, value) {
  const arr = Object.keys(object); // assignes keys in object to an array
  for (const item of arr) {
    if (object[item] === value) { // if the value patches the value provided, the key is returned
      return item;
    }
  }
  return undefined;
};

// TEST
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);