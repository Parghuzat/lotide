const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 === 0){
    return [array[(array.length/2)-1],array[array.length/2]];
  }
  return [array[Math.floor((array.length/2))]]
}
  


console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2]))
console.log(middle([1]))