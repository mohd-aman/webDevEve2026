// Create a function reverseWords(sentence) that:
//     Takes a string sentence.
//     Returns a new string where the order of words is reversed.
//     Example: "Hello world" → "world Hello".
// Approach: Think of a way to convert the string into an array of words.

function reverseWords(sentence) {
  // Write code here
  let arr = sentence.split(" ");
  let i = arr.length - 1;
  let ans = [];
  while(i>=0){
    ans.push(arr[i]);
    i--;
  }
  return ans.join(" ");
}

console.log(reverseWords("Hello world")); // "world Hello"
console.log(reverseWords("JavaScript is fun")); // "fun is JavaScript"