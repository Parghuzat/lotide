const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed:  ${actual}  ===   ${expected}`);
  }
  else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !==  ${expected}`);
  }
}


const head = function(A) {
  return A[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "gello");

