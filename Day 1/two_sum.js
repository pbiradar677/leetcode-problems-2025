// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 *
 * @param {number[]} nums - array of numbers
 * @param {number} target -target number
 * @returns {number[]} Indices of two number
 */
// Brute force approach
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// }

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Using Hash Map

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diffNum = target - nums[i];
    if (map.has(diffNum)) {
      return [map.get(diffNum), i];
    }
    map.set(nums[i], i);
  }
}
// Time Complexity: O(n)
// Space Complexity: O(1)
// Input:
const nums = [2, 7, 11, 15],
  target = 9;
// Output: [0,1]
console.log(twoSum(nums, target));
