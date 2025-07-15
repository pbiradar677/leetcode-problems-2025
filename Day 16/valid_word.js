// 3136. Valid Word
// A word is considered valid if:

// It contains a minimum of 3 characters.
// It contains only digits (0-9), and English letters (uppercase and lowercase).
// It includes at least one vowel.
// It includes at least one consonant.
// You are given a string word.

// Return true if word is valid, otherwise, return false.

// Notes:

// 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
// A consonant is an English letter that is not a vowel.

// Example 1:

// Input: word = "234Adas"

// Output: true

// Explanation:

// This word satisfies the conditions.

// Example 2:

// Input: word = "b3"

// Output: false

// Explanation:

// The length of this word is fewer than 3, and does not have a vowel.

// Example 3:

// Input: word = "a3$e"

// Output: false

// Explanation:

// This word contains a '$' character and does not have a consonant.

// Constraints:

// 1 <= word.length <= 20
// word consists of English uppercase and lowercase letters, digits, '@', '#', and '$'.
/**
 * @param {string} word
 * @return {boolean}
 */
const isValid = function (word) {
  if (word.length < 3) return false;

  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let hasVowel = false;
  let hasConsonant = false;

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const lowerCh = ch.toLowerCase();

    // Check for invalid characters
    if (!/[a-zA-Z0-9]/.test(ch)) return false;

    // Check vowel
    if (/[a-zA-Z]/.test(ch)) {
      if (vowels.has(lowerCh)) {
        hasVowel = true;
      } else {
        hasConsonant = true;
      }
    }
  }

  return hasVowel && hasConsonant;
};
// Input:
const word = "234Adas";
console.log(isValid(word));
// Output: true

// Time Complexity: O(n)
// Space Complexity: O(1)
