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

const without = function (X, Y){
  for(var i = 0; i < X.length; i++){
    for (var j = 0; j < Y.length; j++){
      if(X[i] === Y[j]){
        X.splice(i,1);
      }
    }
  }
  return X;
}

console.log(without([1, 2, 3], [1,2])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
