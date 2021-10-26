const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("Assertion Passed: " + actual + " === " + expected);
  }
  else if (actual !== expected) {
    return console.log("Assertion Failed: " + actual + " !== " + expected);
  }
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(3, 3);