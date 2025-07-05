// 344. Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

// Two pointer approach
// const reverseString = function (s) {
//   let left = 0,
//     right = s.length - 1;
//   while (left < right) {
//     [s[left], s[right]] = [s[right], s[left]];
//     left++;
//     right--;
//   }
// };

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  let len = s.length - 1;
  for (let i = 0; i < len / 2; i++) {
    [s[i], s[len - i]] = [s[len - i], s[i]];
  }
};
const s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
// Output: ["o","l","l","e","h"]

// Time Complexity: O(n)
// Space Complexity: O(1)
