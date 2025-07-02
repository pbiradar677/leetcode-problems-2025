// 414. Third Maximum Number

// Given an integer array nums,
//  return the third distinct maximum number in this array.
// If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// 1st approach using sort + set
// const thirdMax = (nums) => {
//   let distinct = [...new Set(nums)].sort((a, b) => b - a);
//   return distinct.length >= 3 ? distinct[2] : distinct[0];
// };
// Time Complexity: O(n log n)
// Space Complexity: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
// 2nd approach using 3 pointers
const thirdMax = (nums) => {
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (let num of nums) {
    if ([first, second, third].includes(num)) continue;

    if (num > first) {
      [first, second, third] = [num, first, second];
    } else if (num > second) {
      [second, third] = [num, second];
    } else if (num > third) {
      third = num;
    }
  }

  return third === -Infinity ? first : third;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

// Input:
const nums = [1, 2, 5, 3];
console.log(thirdMax(nums));
// Output: 1
