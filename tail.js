const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed:  ${actual}  ===   ${expected}`);
  }
  else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !==  ${expected}`);
  }
}

const tail = function(A) {
  return A.slice(1)
}


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"