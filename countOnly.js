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

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

//------------------------------------------------------------------------------------------------------

// Tried my own way of approaching it

// // allItems: an array of strings that we need to look through
// // itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {
//   let newObj = {}; //new object to output

//   // loops through itemsToCount and adds those with the value to True to the new object
//   for (let items in itemsToCount) {
//     if (itemsToCount[items] === true) {
//       newObj[items] = 0;
//     }
//   }

//   // Loops through the items toAdd and adds those that come up in the tally in newObj
//   for (let toAdd in newObj) {
//     for (let i in allItems) {
//       if (allItems[i] === toAdd) {
//         newObj[toAdd] = newObj[toAdd] + 1
//       }
//     }
//   }

//   // Loops through newObj and finds those with a value of 0. If found, deletes the key from the object
//   for (let toRemove in newObj) {
//     if (newObj[toRemove] === 0) {
//       delete newObj[toRemove]
//     }
//   }
//   return newObj;
//}

//-------------------------------------------------------------------------------------------------------------

// TEST
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
