// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.
/**
 * @param {string[]} strs
 * @return {string}
 */
// Using sort method
// const longestCommonPrefix = function (strs) {
//   if (strs.length < 1) return "";
//   strs.sort();
//   let lcp = "";
//   let firstWord = strs[0];
//   let lastWord = strs[strs.length - 1];
//   for (let i = 0; i < firstWord.length; i++) {
//     if (firstWord[i] === lastWord[i]) lcp += firstWord[i];
//     else return lcp;
//   }
//   return lcp;
// };
// Input:
// const strs = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strs));
// Output: "fl"
// Time Complexity : O(n log n)
// Space Complexity: O(1)
const longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
};

// Input:
const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
// Output: "fl"
// Time Complexity : O(n * m)
// Space Complexity: O(1)
