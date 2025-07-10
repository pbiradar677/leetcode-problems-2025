// 2094. Finding 3-Digit Even Numbers
// You are given an integer array digits, where each element is a digit. The array may contain duplicates.

// You need to find all the unique integers that follow the given requirements:

// The integer consists of the concatenation of three elements from digits in any arbitrary order.
// The integer does not have leading zeros.
// The integer is even.
// For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.

// Return a sorted array of the unique integers.

// Example 1:

// Input: digits = [2,1,3,0]
// Output: [102,120,130,132,210,230,302,310,312,320]
// Explanation: All the possible integers that follow the requirements are in the output array.
// Notice that there are no odd integers or integers with leading zeros.
// Example 2:

// Input: digits = [2,2,8,8,2]
// Output: [222,228,282,288,822,828,882]
// Explanation: The same digit can be used as many times as it appears in digits.
// In this example, the digit 8 is used twice each time in 288, 828, and 882.
// Example 3:

// Input: digits = [3,7,5]
// Output: []
// Explanation: No even integers can be formed using the given digits.

// Constraints:

// 3 <= digits.length <= 100
// 0 <= digits[i] <= 9

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Time Complexity: O(n^3 + M log M)
// Space Complexity: O(n)
// var findEvenNumbers = function (digits) {
//   const nums = new Set();
//   const n = digits.length;
//   // Traverse the indices of three digits
//   for (let i = 0; i < n; ++i) {
//     for (let j = 0; j < n; ++j) {
//       for (let k = 0; k < n; ++k) {
//         // Determine whether it meets the condition of the target even number
//         if (i === j || j === k || i === k) {
//           continue;
//         }
//         const num = digits[i] * 100 + digits[j] * 10 + digits[k];
//         if (num >= 100 && num % 2 === 0) {
//           nums.add(num);
//         }
//       }
//     }
//   }
//   // Converted to an array sorted in ascending order
//   const res = Array.from(nums).sort((a, b) => a - b);
//   return res;
// };
// Input:
var findEvenNumbers = function (digits) {
  const freq = new Array(10).fill(0);
  for (const digit of digits) freq[digit]++;

  const result = [];

  // Only even 3-digit numbers from 100 to 998
  for (let num = 100; num <= 999; num += 2) {
    const a = Math.floor(num / 100);
    const b = Math.floor((num % 100) / 10);
    const c = num % 10;

    const count = new Array(10).fill(0);
    count[a]++;
    count[b]++;
    count[c]++;

    let valid = true;
    for (let d = 0; d < 10; d++) {
      if (count[d] > freq[d]) {
        valid = false;
        break;
      }
    }

    if (valid) result.push(num);
  }

  return result;
};

const digits = [2, 1, 3, 0];
console.log(findEvenNumbers(digits));

// Output: [102, 120, 130, 132, 210, 230, 302, 310, 312, 320]

// Time Complexity: O(1)
// Space Complexity: O(1)
