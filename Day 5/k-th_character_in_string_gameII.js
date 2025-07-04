// 3307. Find the K-th Character in String Game II
// Attempted
// Alice and Bob are playing a game. Initially, Alice has a string word = "a".

// You are given a positive integer k. You are also given an integer array operations, where operations[i] represents the type of the ith operation.

// Now Bob will ask Alice to perform all operations in sequence:

// If operations[i] == 0, append a copy of word to itself.
// If operations[i] == 1, generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word. For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".
// Return the value of the kth character in word after performing all the operations.

// Note that the character 'z' can be changed to 'a' in the second type of operation.

// Example 1:

// Input: k = 5, operations = [0,0,0]

// Output: "a"

// Explanation:

// Initially, word == "a". Alice performs the three operations as follows:

// Appends "a" to "a", word becomes "aa".
// Appends "aa" to "aa", word becomes "aaaa".
// Appends "aaaa" to "aaaa", word becomes "aaaaaaaa".
// Example 2:

// Input: k = 10, operations = [0,1,0,1]

// Output: "b"

// Explanation:

// Initially, word == "a". Alice performs the four operations as follows:

// Appends "a" to "a", word becomes "aa".
// Appends "bb" to "aa", word becomes "aabb".
// Appends "aabb" to "aabb", word becomes "aabbaabb".
// Appends "bbccbbcc" to "aabbaabb", word becomes "aabbaabbbbccbbcc".

// Constraints:

// 1 <= k <= 1014
// 1 <= operations.length <= 100
// operations[i] is either 0 or 1.
// The input is generated such that word has at least k characters after all operations.

/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
// 1st approach using nested array but this approach time limit exceeding for a large data sets
// const kthCharacter = function (k, operations) {
//   let word = "a";

//   while (word.length < k) {
//     for (let i = 0; i < operations.length && word.length < k; i++) {
//       let str = "";
//       if (operations[i]) {
//         for (let j = 0; j < word.length && word.length < k; j++) {
//           str += String.fromCharCode(word.charCodeAt(j) + 1);
//         }
//       } else {
//         str += word;
//       }
//       word += str;
//     }
//   }
//   return word[k - 1];
// };

// 2nd approach using reverse simulation - length tracking

var kthCharacter = function (k, operations) {
  let shift = 0;
  let lengths = [];
  let len = 1;
  // Step 1: Simulate only lengths of string per operation
  for (let op of operations) {
    len *= 2;
    lengths.push(len);
    if (len >= k) break;
  }
  // Step 2: Work backwards from final operation
  // If k is within the left (original) part, we move to previous op.
  // If it's in the right (new) part, we:
  // Subtract left length

  for (let i = lengths.length - 1; i >= 0; i--) {
    let half = lengths[i] / 2;
    if (k > half) {
      k -= half;
      if (operations[i] === 1) shift++;
    }
  }

  const baseCharCode = "a".charCodeAt(0);
  return String.fromCharCode((shift % 26) + baseCharCode);
};
const operations = [
  0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1,
];
const k = 26642561;
console.log(kthCharacter(k, operations));
// Time complexity: O(n)
// Space complexity: O(n)
