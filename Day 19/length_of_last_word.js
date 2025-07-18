// 58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */
// Using built-in functions
// var lengthOfLastWord = function (s) {
//   return s.trim().split(" ").at(-1).length;
// };
// Without using built-in function
const lengthOfLastWord = function (s) {
  let end = s.length - 1;
  let count = 0;
  while (end >= 0 && s[end] === " ") {
    end--;
  }
  while (end >= 0 && s[end] !== " ") {
    count++;
    end--;
  }
  return count;
};
// Input:
const s = "Hello World";
console.log(lengthOfLastWord(s));
// Output: 5
// Time Complexity: O(n)
// Space Complexity: O(1)
