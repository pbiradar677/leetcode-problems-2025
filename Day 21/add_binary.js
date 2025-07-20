// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// Using built-in functions
// const addBinary = function (a, b) {
//   return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
// };

// Without using built-in functions
const addBinary = function (a, b) {
  let i = a.length - 1,
    j = b.length - 1,
    carry = 0,
    res = "";
  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += +a[i--];
    if (j >= 0) sum += +b[j--];
    res = (sum % 2) + res;
    carry = Math.floor(sum / 2);
  }
  return res;
};

// Input:
const a = "11",
  b = "1";
console.log(addBinary(a, b));
// Output: "100"
// Time Complexity: O(max(a.length, b.length))
// Space Complexity: O(n)
