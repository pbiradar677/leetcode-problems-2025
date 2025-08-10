// 869. Reordered Power of 2

// You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

// Return true if and only if we can do this so that the resulting number is a power of two.

// Example 1:

// Input: n = 1
// Output: true
// Example 2:

// Input: n = 10
// Output: false

// Constraints:

// 1 <= n <= 109
/**
 * @param {number} n
 * @return {boolean}
 */
const reorderedPowerOf2 = function (n) {
  const sortNum = (num) => num.toString().split("").sort().join("");
  const target = sortNum(n);
  for (let i = 0; i < 31; i++) {
    const powOfTwo = 1 << i;
    if (sortNum(powOfTwo) === target) return true;
  }
  return false;
};

console.log(reorderedPowerOf2(1)); // true
console.log(reorderedPowerOf2(10)); // false
// Time Complexity: O(log n)
// Space Complexity: O(log n)
