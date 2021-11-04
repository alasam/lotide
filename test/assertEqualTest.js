// Modules
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // should fail
assertEqual(1, 1);                          // should pass
assertEqual("Bootcamp", "Bootcamp");        // should pass
assertEqual(1, 2);                          // should fail