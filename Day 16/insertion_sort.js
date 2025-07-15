function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

// Input:
const arr = [3, 4, 5, 7, 1, 2];
console.log(insertionSort(arr));
// Output:
//   [1, 2, 3, 4, 5, 7]

// Time Complexity: O(n^2)
// Space Complexity: O(1)
