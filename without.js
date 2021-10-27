// Function eqArrays checks and compares 2 arrays, if they are ideticle it will return as true, if not false
const eqArrays = function(arr1, arr2) {

  // checks if both arrays are the same length; if not then returns false.
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    // first loop goes over the each item in the first array
    for (let i = 0; i < arr1.length; i++) {
      // second loop goes and compares if each val
      for (let x = 0; x < arr2.length; x++)
        if (arr1[i] !== arr2[i]) {
          return false;
        }
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2) === true) {
    return console.log(`😃Array Assertion Passed😃: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`😡Array Assertion Failed😡:  [${arr1}]  !==  [${arr2}]`);
  }
};

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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3, 4, 5], [2, 4, 6]));
console.log(without(['one', 'two', 'three', 'four', 'five'], ['four', 'two', 6]));
