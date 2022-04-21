// Write a function called maxSubarraySum which accepts an array of integers and a number called n
// the function should calculate the maximum sum of n conseqcutive elements in the array

// Run time of O(n^2)
function maxSubarraySum(arr, num) {
  // If num is greater than the length of array
  // return null
  if (num > arr.length) {
    console.log(null);
    return null;
  }

  // Array could be filled with negative numbers, so we want to start there
  let max = -Infinity;

  // Goes to almost the end of the array
  // " - num + 1" --> hits the end of the array
  // for ex [1,2,5,2,8,1,5],2
  // i < 7 - 2 + 1
  // This means the last place we can start this array is at
  //  [...,...,...,...,...,1,5]
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;

    for (let j = 0; j < num; j++) {
      // Way of summing up from arr[i] through arr[j]
      temp += arr[i + j];
    }

    // Check if temp is higher than max,
    // if so, reassign max to temp
    if (temp > max) {
      max = temp;
    }
  }

  console.log(max);
  return max;
}

// REFACTORED RUNS IN O(n)
function maxSumarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  // Num > array.length check
  if (arr.length < num) {
    console.log(null);
    return null;
  }

  // Iterate through until num
  // maxSum is the sum of arr[i] up until num
  //   For ex. num = 3
  // [2,6,9,2,1,8,5,6,3],3
  // Sum up first 3. [2,6,9,...,...,...,..]
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  //   Set tempSum to maxSum
  tempSum = maxSum;

  //   Another loop but instead of starting from 0
  // We start from num
  // [2,6,9,2,1,8,5,6,3],3
  // [...,...,...,2,1,8,5,6,3]
  // We drop the first index and add the next index
  // So currently we have [2,6,9,...,...,...]
  // The next iteration is now
  // [...,6,9,2,...,...]
  let counter = 1;
  for (let i = num; i < arr.length; i++) {

    // First iteration : tempSum = 17
    // [2,6,9,2,1,8,5,6,3],3
    // (tempSum = 17) (i = num) (num = 3)
    // arr[i - num] = arr[3 - 3] = arr[0] = 2
    // arr[i] = 2
    // tempSum = 17 - 2 + 2
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);

    // Testing purposes
    counter++;
  }

  console.log(maxSum);
  return maxSum;
}

// 2,8 are the two consecutive numbers that have the greatest sum in 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
// 2,5,2,8 --> 17
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
// maxSubarraySum([4, 2, 1, 6], 1); // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
// maxSubarraySum([], 4); // null

maxSumarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); // 19
