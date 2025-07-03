// 1800. Maximum Ascending Subarray Sum

// Given an array of positive integers nums,
// return the maximum possible sum of an strictly increasing subarray in nums.

// A subarray is defined as a contiguous sequence of numbers in an array.

// Example 1:

// Input: nums = [10,20,30,5,10,50]
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
// Example 2:

// Input: nums = [10,20,30,40,50]
// Output: 150
// Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
// Example 3:

// Input: nums = [12,17,15,13,10,11,12]
// Output: 33
// Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentSum += nums[i];
    } else {
      currentSum = nums[i];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

// Input:
const nums = [10, 20, 30, 5, 10, 50];
console.log(maxAscendingSum(nums));
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

// Time complexity: O(n)
// Space complexity: O(1)
