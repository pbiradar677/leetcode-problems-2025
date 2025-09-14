// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
// Using Extra space
// const isPalindrome = function (s) {
//   let str = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
//   return str.split("").reverse().join("") === str;
// };

// Using Two Pointer approach

// const isPalindrome = function (s) {
//   s = s.toLowerCase();
//   let left = 0,
//     right = s.length - 1;
//   let regex = /[a-z0-9]/;
//   while (left < right) {
//     let leftChar = s[left];
//     let rightChar = s[right];
//     let isLeftChar = regex.test(leftChar);
//     let isRightChar = regex.test(rightChar);
//     if (isLeftChar && isRightChar) {
//       if (leftChar !== rightChar) {
//         return false;
//       }
//       left++, right--;
//     } else if (!isLeftChar) {
//       left++;
//     } else if (!isRightChar) {
//       right--;
//     }
//   }
//   return true;
// };
const isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;

    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }
  return true;
};

function isAlphaNum(c) {
  return (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
}
// Input:
const s = "race a car";
console.log(isPalindrome(s));
// Output: false
// Explanation: "raceacar" is not a palindrome
