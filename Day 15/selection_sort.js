function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j;
      }
    }
    [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
  }
  return nums;
}
const nums = [20, 12, 10, 15, 2];
console.log(selectionSort(nums));

// Time Complexity: O(n^2)
// Space Complexity: O(1)
