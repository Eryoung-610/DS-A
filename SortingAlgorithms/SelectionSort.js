// Similar to bubble sort, but instead of first placing large values into sorted position, we place small values into sorted position

// [5,3,4,1,2] // Comparing 5 to 3. 3 is the new min
// [5,3,4,1,2] // Comparing 5 to 4. 3 is still min
// [5,3,4,1,2] // Comparing 5 to 1. 1 is new min
// [5,3,4,1,2] // Comparing 5 to 2. 1 is still min.
// [1,3,4,5,2] // Reached the end of first loop. Since 1 is the min, we swap with our first index. Next iteration compares 3 to 4 and so forth.

// Selection Sort Pseudocode
// THE MIN IS THE INDEX, NOT THE VALUE OF THE INDEX
// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array.
// If the 'minimum' is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

// Best Time complexity O(n^2)
// Avg Time complexity O(n^2)
// Worst Time Complexity O(n^2)
// Space Complexity O(1)

let selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      console.log("*********");
      console.log(arr);
      console.log("SWAPPING TO: ");
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      console.log(arr);
      console.log("*********");
    }
  }

  return arr;
};

selectionSort([34, 22, 10, 19, 17]);
