// modules
const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];

it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
  assert.deepEqual(tail(words), ["Lighthouse", "Labs"]); 
});
it("returns '3' for the length of the array", () => {
  assert.strictEqual(words.length, 3); 
});

console.log(tail(words));