//Function eqArrays checks and compares 2 arrays, if they are ideticle it will return as true, if not false
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
//-----------------------------------------------------------------------------------------------------------

// middle function returns middle item/items in an array
const middle = function(arr) {
  let newArr = [];
  let midNum = arr.length / 2
  
  // outputs a blank array if there are only 2 or less items in the array
  if (arr.length <= 2) {
    
    return newArr;
    
    // outputs the middle item if there is an odd amount of items 
  } else if (arr.length % 2 !== 0) {
    
    newArr.push(arr[midNum + .5]); 
    return newArr;

    // outputs the 2 middle items if there is an even amount of items
  } else {
    
    newArr.push(arr[midNum] - 1, arr[midNum]); 
    return newArr;
  }

}
