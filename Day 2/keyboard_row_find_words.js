// 500. Keyboard Row

// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]

// Output: ["Alaska","Dad"]

// Explanation:

// Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

// Example 2:

// Input: words = ["omk"]

// Output: []

// Example 3:

// Input: words = ["adsdf","sfd"]

// Output: ["adsdf","sfd"]

// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase).

// 1st approach using set
// const findWords = function (words) {
//   const row1 = new Set("qwertyuiop");
//   const row2 = new Set("asdfghjkl");
//   const row3 = new Set("zxcvbnm");

//   const isFromOneRow = (word, row) =>
//     [...word.toLowerCase()].every((c) => row.has(c));

//   const result = words.filter(
//     (word) =>
//       isFromOneRow(word, row1) ||
//       isFromOneRow(word, row2) ||
//       isFromOneRow(word, row3)
//   );
//   return result;
// };

// 2nd approach using map
const findWords = function (words) {
  const keyboardMap = new Map();
  // Row one
  for (const c of "qwertyuiop") {
    keyboardMap.set(c, 1);
  }
  // Row two
  for (const c of "asdfghjkl") {
    keyboardMap.set(c, 2);
  }
  // Row 3
  for (const c of "zxcvbnm") {
    keyboardMap.set(c, 3);
  }
  return words.filter((word) => {
    const chars = word.toLowerCase().split("");
    const row = keyboardMap.get(chars[0]);
    return chars.every((c) => keyboardMap.get(c) === row);
  });
};

const words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));
