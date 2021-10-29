const findKey = function(obj, callback) {
  let a = Object.keys(obj);
  
  for (const item of a) {
    if (callback(obj[item])){
      return item;
    }
  }
}


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"