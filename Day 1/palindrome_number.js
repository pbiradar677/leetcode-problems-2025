// 9. Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Brute force String Conversion Approach
// function isPalindromeNumber(number) {
//   if (number < 0) return false; // Negative numbers are not palindromes

//   const str = number.toString();
//   const reversedStr = str.split("").reverse().join("");

//   return str === reversedStr;
// }
// Time complexity: O(n)
// Space complexity: O(n)

// Brute Force (Math-Based) Palindrome Check
function isPalindromeNumber(number) {
  if (number < 0) return false; // Negative numbers are not palindromes
  let temp = number;
  let reverse = 0;
  while (temp > 0) {
    const digit = temp % 10;
    temp = Math.trunc(temp / 10);
    reverse = reverse * 10 + digit;
  }
  return number === reverse;
}

// Input:
const x = 121;
console.log(isPalindromeNumber(x));
// Output: true

// Time complexity: O(log n)
// Space complexity: O(1)
