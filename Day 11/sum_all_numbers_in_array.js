function sumOfAllNumbers(nums) {
  if (nums.length === 1) return nums[0];
  return nums[0] + sumOfAllNumbers(nums.slice(1));
}
const nums = [10, 20, 30, 40, 50];
console.log(sumOfAllNumbers(nums));
// Output: 150

const sum = (n) => (n > 1 ? n + sum(n - 1) : 1);
console.log(sum(5)); // Output: 15

const factorial = (n) => (n > 1 ? n * factorial(n - 1) : 1);
console.log(factorial(5)); // Output: 15

function sumOfOddNumbers(nums) {
  if (!nums.length) return 0;
  return (nums[0] % 2 === 1 ? nums[0] : 0) + sumOfOddNumbers(nums.slice(1));
}
const arr = [10, 25, 30, 45, 50];
console.log(sumOfOddNumbers(arr));
