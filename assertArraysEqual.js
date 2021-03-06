const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("Assertion Passed: " + actual + " === " + expected);
  }
  else if (actual !== expected) {
    return console.log("Assertion Failed: " + actual + " !== " + expected);
  }
}

const eqArrays = function (A, B){
  if(A.length !== B.length){
    return false;
  }
  for (var i = 0; i < A.length; i++){
    if(A[i] !== B[i]){
      return false;
    }    
  }
  return true;
}


const assertArraysEqual = function (A, B) {

assertEqual(eqArrays(A, B), true);

}


