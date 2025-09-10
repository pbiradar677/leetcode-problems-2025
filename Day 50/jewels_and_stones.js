// 771. Jewels and Stones

// Hint
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// Brute force approach
// const numJewelsInStones = function (jewels, stones) {
//   let count = 0;
//   for (let s of stones) {
//     if (jewels.includes(s)) {
//       count++;
//     }
//   }
//   return count;
// };
// Time Complexity: O(n+m)
// Space Complexity: O(1)

// Using hash map
const numJewelsInStones = function (jewels, stones) {
  const jewelSet = new Set(jewels);
  let count = 0;
  for (const s of stones) {
    if (jewelSet.has(s)) count++;
  }
  return count;
};
// Input:
const jewels = "aA",
  stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));
// Output: 3
// Time Complexity: O(n)
// Space Complexity: O(1)
