// 557. Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
// Using built-in functions
// const reverseWords = function (s) {
//   return s
//     .split(" ")
//     .map((w) => w.split("").reverse().join(""))
//     .join(" ");
// };
const reverseWords = function (s) {
  let res = "";
  let word = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char !== " ") {
      word = char + word;
    } else {
      res += word + " ";
      word = "";
    }
  }
  return res + word;
};
// Input:
const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
// Output: "s'teL ekat edoCteeL tsetnoc"
// Time Complexity: O(n)
// Space Complexity: O(n)
