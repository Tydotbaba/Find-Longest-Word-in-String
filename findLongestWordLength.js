/*
  This function returns the longest word in a string.
*/

function findLongestWordLength(str) {
  let count = 0;
  let strs = str.split(" ");
  console.log(strs);
  for(let s = 0; s < strs.length; s++){
    console.log(strs[s]);
    if(count < strs[s].length){
      count = strs[s].length;
    }
    else continue;
  }
  return count;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
