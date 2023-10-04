function isPalindrome(word) {
  // Write your algorithm here
// iterate from the beginning to the middle
// racecar 7/2 ==3.5
// aaaaaa 6/3 == 3
for (let i = 0; i < word.length / 2; i++){
// check each letter to the corresponding letter from the end
const j = word.length - 1 - i;
const startChar = word[i];
const endeChar = word[j];
// if any letters don't match, return false
if (startChar !== endeChar) return false;
}
// return true
return true;
}


//  make a function that returns true if a word is palindrome. that means if the first letter
// is the same as last letter, and the second letter is the same as the second to last letter,etc.
// until we reach the middle, return true.
 
// abba ->> true 
// robot ->> false
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
