// 20. Valid Parentheses
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
// Brute force approach
// var isValid = function (s) {
//   if (s.length < 1 || s.length % 2 == 1) return false;
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (char === "(" || char === "{" || char === "[") {
//       stack.push(char);
//     } else if (char === ")" || char === "}" || char === "]") {
//       if (!stack.length) return false;
//       let lastChar = stack.pop();
//       if (
//         (char === ")" && lastChar !== "(") ||
//         (char === "}" && lastChar !== "{") ||
//         (char === "]" && lastChar !== "[")
//       ) {
//         return false;
//       }
//     }
//   }
//   return stack.length == 0;
// };

var isValid = function (s) {
  if (s.length < 1 || s.length % 2 == 1) return false;
  let stack = [];
  let pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let char of s) {
    if (pairs[char]) {
      stack.push(pairs[char]);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return stack.length == 0;
};
// Input:
const s = "()[]{}";
console.log(isValid(s));
// Output: true
// Time Complexity: O(n)
// Space Complexity: O(n)
