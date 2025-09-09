// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"

// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"

// Output: false

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
  let words = s.split(" ");
  if (words.length !== pattern.length) return false;
  const charToWord = new Map();
  const wordToChar = new Map();
  for (let i = 0; i < pattern.length; i++) {
    let c = pattern[i];
    let w = words[i];

    if (charToWord.has(c)) {
      if (charToWord.get(c) !== w) return false;
    } else {
      charToWord.set(c, w);
    }

    if (wordToChar.has(w)) {
      if (wordToChar.get(w) !== c) return false;
    } else {
      wordToChar.set(w, c);
    }
  }
  return true;
};
// Input:
const pattern = "abba",
  s = "dog cat cat dog";

console.log(wordPattern(pattern, s));
// Output: true
