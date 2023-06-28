function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split("").reverse().join("");
  if (word === reverseWord) {
    return true;
  }else {
    return false;
  }
}

/* 
  Split the word into an array, saving it into a variable.
  Reverse the array.
  Put it back together.
  Compare the initial string to the reversed one
*/

/*
  Add written explanation of your solution here
  reverseWord is the reverse of the word. The word is treated as an array of characters.
  The characters are separated using split, then reversed using the reverse function.
  Join is used to reconnect the characters to a reversed word.
  if is used to compare the word and its reverse.
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
