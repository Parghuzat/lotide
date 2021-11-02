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

module.exports = eqArrays;


