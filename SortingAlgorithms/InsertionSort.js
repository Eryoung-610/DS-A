// // Builds up the sort by gradually creating a larger left half which is always sorted

// [3,44,38,5,47,15] // Looking at 3 and 44, no swaps needed
// [3,44,38,5,47,15] // Looking at 3, 44, and 38, Swap the 38 and 44
// [3,38,44,5,47,15] // Looking at 3, 38, 44, and 5. Swap between 3 and 38.
// [3,5,38,44,47,15] // Looking at 3,5,38,44, and 47. No swaps here.
// [3,5,38,44,47,15] // Looking at 3,5,38,44,47, and 15. Swap 15 between 5 and 38

// Insertion Sort Pseudocode
// Start by picking the second element int he array
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted potion(i.e. the left side) to place the element in the correct place.
// Repeat until the array is sorted.

// Best Time Complexity O(n)
// Avg Time Complexity O(n^2)
// Worst Time Complexity O(n^2)
// Space Complexity O(1)

let insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
      console.log(arr);
    }
    // console.log(arr);
  }

  return arr;
};

insertionSort([2, 1, 9, 76, 4]);
