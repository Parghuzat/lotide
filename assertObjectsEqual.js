const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let ele of Object.keys(obj1)) {
    if ( !(ele in obj2) || obj1[ele] !== obj2[ele]) {
      return false;
    }
  }
  return true;
};



const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if(eqObjects(obj1, obj2)){
    console.log(`Assertion Passed: ${inspect(obj1)}  ===  ${inspect(obj2)}`);
  }else{
    console.log(`Assertion Failed: ${inspect(obj1)}  ===  ${inspect(obj2)}`);
  }
};


assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 });

