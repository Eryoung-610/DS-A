// Sorting algorithm where the largest values bubble up to the top

// [5,3,4,1,2] -  Comparing 5,3 .5 is largest, swaps with next index since its larger than 3
// [3,5,4,1,2] -  Comparing 5,4. We swap here
// [3,4,5,1,2] -  Comparing 5,1. We swap here
// [3,4,1,5,2] -  Comparing 5,2. We swap here
// [3,4,1,2,5] -  We've reached the index where 5 is the largest

// Before sorting, we must swap. Many sorting algos involve some kind of swap function
// Best Time Complextiy is O(n)
// Avg Time Complexity is O(n^2)
// Worst Time Complexity is O(n^2)
// Space Complexity O(1)

let swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];

  arr[idx1] = arr[idx2];

  arr[idx2] = temp;
};

// Psuedocode
// Start looping from i at the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values
// Return the sorted array

let bubbleSort = (arr) => {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
};

console.log(bubbleSort([4,2,3,5,1]));
// bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
