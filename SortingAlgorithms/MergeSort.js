// [8,3,5,4,7,6,1,2]

// [8,3,5,4] [7,6,1,2]

// [8,3] [5,4] [7,6] [1,2]

// [8] [3] [5] [4] [7] [6] [1] [2]

// [3,8] [4,5] [6,7] [1,2]

// [3,4,5,8] [1,2,6,7]

// [1,2,3,4,5,6,7,8]

// Merging arrays
// In order to implement merge sort, it's useful to first implement a  function responsible for merging two sorted arrays.
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays
// This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it

// Merging array pseudocode
// Create an empty array, take a look at the smallest values in each input array
// While there are stil lvalues we haven't looked at...
//    - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
//    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
//    - Once we exhaust one array, push in all remaining values from the other array.

// mergeSort([1,10,50], [2,14,99,100])

// [1,10.50]    [2,14,99,100]

// First pass. Compare 1 to 2. Since it is smaller than the first value in second array, push to solution array.

// [1]

// Second pass. Compare 10 to 2. Since it is larger than the first value in the second array, we pass in the first value from the second array.

// [1,2]

// Third pass. Compare 10 to 14. Since it is smaller than the first value in the second array, we push it to the solution array and so forth. Remember to increase the index every time we push into array

// [1,2,10]

// This only works with two SORTED ARRAYS
let merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// MergeSort Pseudocode
// Break up the array into halves until you have arrays that are empty or have one element.
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted) array.

// Time Complexity Best = O(n log n)
// Time Complexity Avg = O(n log n)
// Time Complexity Worst = O(n log n)
// Space Complexity = O(n)

// O(n log n) --> Each time we split the array, it is O(log n) decompositions
// We then do O(n) comparisons per decomposition, thus O(n log n)

let mergeSort = (arr) => {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array
  let midpoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint));

  return merge(left, right);
};

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
