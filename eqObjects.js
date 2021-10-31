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