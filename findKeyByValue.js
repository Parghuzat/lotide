const findKeyByValue = function (obj,name) {
  for (let ele of Object.keys(obj)) {
    if (obj[ele] === name) {
      return ele;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


findKeyByValue(bestTVShowsByGenre, "The Wire");