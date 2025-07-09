/**
 * @param {number[]} num
 * @return {number}
 */
const sumOfFirstNumber = function (n) {
  if (n === 1) return n; // base case
  return n + sumOfFirstNumber(n - 1); // recursive call
};

// Input:
const num = 5;
console.log(sumOfFirstNumber(num));
// Output: 2
// Time Complexity: O(n)
// Space Complexity: O(n)
