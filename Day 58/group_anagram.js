// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // create a empty object to store grouped words
  let res = {};
  // iterate over str array of strings
  for (let str of strs) {
    // sort str string in ascending order
    let s = str.split("").sort().join("");
    //check s as a key present in the res object
    if (!res[s]) {
      // if not present in the res object then assign a empty arr to res[s]
      res[s] = [];
    }
    // push the str in the res[s] array
    res[s].push(str);
  }
  // get a res object values
  return Object.values(res);
};
// Input:
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Time Complexity:O(m∗nlogn)
// Space Complexity:O(m*n)
