// 118. Pascal's Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generatePascalTriangle = function (numRows) {
  let result = [[1]];
  for (let i = 1; i < numRows; i++) {
    let prev = [0, ...result.at(-1), 0];
    let row = [];
    for (let j = 0; j < prev.length - 1; j++) {
      row.push(prev[j] + prev[j + 1]);
    }
    result.push(row);
  }
  return result;
};
// Input:
const numRows = 5;
console.log(generatePascalTriangle(5));
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Time Complexity: O(n^2)
// Space Complexity: O(n)
