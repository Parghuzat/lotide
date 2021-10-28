const countLetters = function(str) {

  const count = {};

  for(var i = 0; i < str.length; i++){
  
    if (!(str[i] in count)){
      count[str[i]] = 1; 
    }
    else {
      count[str[i]] = count[str[i]]+1;
    }
  }
  
  return count;


}

console.log(countLetters('abac'));