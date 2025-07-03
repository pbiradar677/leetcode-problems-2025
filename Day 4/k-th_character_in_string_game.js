// 3304. Find the K-th Character in String Game I

// Alice and Bob are playing a game. Initially, Alice has a string word = "a".

// You are given a positive integer k.

// Now Bob will ask Alice to perform the following operation forever:

// Generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word.
// For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".

// Return the value of the kth character in word, after enough operations have been done for word to have at least k characters.

// Note that the character 'z' can be changed to 'a' in the operation.

// Example 1:

// Input: k = 5

// Output: "b"

// Explanation:

// Initially, word = "a". We need to do the operation three times:

// Generated string is "b", word becomes "ab".
// Generated string is "bc", word becomes "abbc".
// Generated string is "bccd", word becomes "abbcbccd".
// Example 2:

// Input: k = 10

// Output: "c"

// Constraints:

// 1 <= k <= 500

/**
 * @param {number} k
 * @return {character}
 */
// // 1st approach using array
// const kthCharacter = function (k) {
//   let asc = [0];
//   while (asc.length < k) {
//     const len = asc.length;
//     for (let i = 0; i < len; i++) {
//       asc.push((asc[i] + 1) % 26);
//     }
//   }
//   return String.fromCharCode(asc[k - 1] + "a".charCodeAt(0));
// };

// 2nd approach using string
const kthCharacter = function (k) {
  let word = "a";
  let len, str;
  while (word.length < k) {
    len = word.length;
    str = "";
    for (let i = 0; i < len; i++)
      str += String.fromCharCode(word.charCodeAt(i) + 1);
    word += str;
  }
  return word[k - 1];
};
console.log(kthCharacter(5));

// Input: k = 5
// Output: "b"

// Time complexity: O(k)
// Space complexity: O(k)
