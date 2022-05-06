# Sorting Algorithms

| Sorting Algorithm | Best Time Complexity | Average Time Complexity | Worst Time Complexity | Space Complexity |
| :--- | :----: | :----: | :----: | :----: |
| Bubble Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n^2) | O(log n) |
| Radix Sort | O(nk) | O(nk) | O(nk) | O(n + k) |

***

## Bubble Sort

Sorting algorithm where the largest values bubble up to the top. Before we sort, we need to implement a swap function.

```[5,3,4,1,2]``` - Comparing 5,3. 5 is larger, we swap with the next index since it's larger than 3.

```[3,5,4,1,2]``` - Comparing 5,4. 5 is larger, we swap with the next index since it's larger than 4.

```[3,4,5,1,2]``` - Comparing 5,1. 5 is larger, we swap with the next index since it's larger than 1.

```[3,4,1,5,2]``` - Comparing 5,2. 5 is larger, we swap with the next index since it's larger than 2.

```[3,4,1,2,5]```  - 5 is at it's intended place. It locks there. Our next comparison is 3 and 4.

```[3,4,1,2,5]``` - So forth until the whole array is sorted.

Swap Function

```
let swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];

  arr[idx1] = arr[idx2];

  arr[idx2] = temp;
};
```

__Bubble Sort Pseudocode__

1. Start looping from i at the END OF THE ARRAY towards the beginning
2. Start an inner loop with a variable called j from the beginning until i - 1
3. If arr[ j ] is greater than arr[j + 1], swap those two values
4. Return the sorted array

```
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
```

Input : ``` [37,45,29,8,12,-3] ```

Output :

```

[ 37, 45, 29, 8, 12, -3 ] 37 45
[ 37, 45, 29, 8, 12, -3 ] 45 29
[ 37, 29, 45, 8, 12, -3 ] 45 8
[ 37, 29, 8, 45, 12, -3 ] 45 12
[ 37, 29, 8, 12, 45, -3 ] 45 -3
[ 37, 29, 8, 12, -3, 45 ] 37 29
[ 29, 37, 8, 12, -3, 45 ] 37 8
[ 29, 8, 37, 12, -3, 45 ] 37 12
[ 29, 8, 12, 37, -3, 45 ] 37 -3
[ 29, 8, 12, -3, 37, 45 ] 29 8
[ 8, 29, 12, -3, 37, 45 ] 29 12
[ 8, 12, 29, -3, 37, 45 ] 29 -3
[ 8, 12, -3, 29, 37, 45 ] 8 12
[ 8, 12, -3, 29, 37, 45 ] 12 -3
[ 8, -3, 12, 29, 37, 45 ] 8 -3
[ -3, 8, 12, 29, 37, 45 ]

```

***

## Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted.

```[3,44,38,5,47,15]```  - Comparing 3 and 44. No swaps needed

```[3,44,38,5,47,15]``` - Comparing 3, 44, and 38. We swap the 38 and 44.

```[3,38,44,47,15]``` - Comparing 3,5,38,44,and 47. No swaps here

```[3,38,44,47,15]``` - Comparing the whole array. Swap the 15 between the 3 and 38.

__Insertion Code Pseudocode__

1. Start by picking the second element in the array
2. Now compare the second element with the one before it and swap if necessary.
3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e the left side) to place the element in the correct place.
4. Repeat until the array is sorted.
5. Return the array.

```
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
```

Input : ``` [2,1,9,46,4] ```

Output :

```
[ 2, 1, 9, 46, 4 ]
[ 1, 2, 9, 46, 4 ] 2 1
[ 1, 2, 9, 4, 46 ] 46 4
[ 1, 2, 4, 9, 46 ] 9 4
```

***

## Merge Sort

### Merging Arrays

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.

- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays

- This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.

```[8,3,5,4,7,6,1,2]```

```[8,3,5,4] [7,6,1,2]``` - Split array

``` [8,3] [5,4] [7,6] [1,2] ```- Split array

``` [8] [3] [5] [4] [7] [6] [1] [2] ``` - Compare the values. Comparing 8 to 3. Since it is larger, we will push the value from the second array into our results/solution array

``` [3,8] [4,5] [6,7] [1,2] ``` - Repeat the process and merge.

``` [3,4,5,8] [1,2,6,7] ```- Compare values and merge

``` [1,2,3,4,5,6,7,8] ``` - Sorted array

__Merging Array Pseudocode__

1. Create an empty array, take a look at the smallest values in each input array
2. While there are still values we haven't looked at
    1. If the value in the first array is smaller than the value in the second array, push the value in the __first array__ into our results and move on to the next value in the first array.
    2. If the value in the first array is larger than the value in the second array, push the value in the __second array__ into our results and move on to the next value in the second array.
    3. Once we exhaust one array, push in all remaining values from the other array.

```
// Merge helper function
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
```

__Merge Sort Pseudocode__

1. Break up the array into halves until you have arrays that are empty or have one element
2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
3. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
4. Once the array has been merged back together, return the merged (and sorted) array.

```
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
```

Input : ``` [10,24,76,73,72,1,9] ```

Output :

```
[1, 9, 10, 24, 72, 73, 76]
```

***

## Quick Sort

Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted. Works by selecting one element(called the "pivot") and finding the index where the pivot should end up in the sorted array

Pick an index, every value less than the value of that index gets shifted behind that index.

For example, ``` [5,2,1,8,4,7,6,3] ```, we can pick 5 as our pivot. All numbers in the array less than 5 are moved to it's left. ALl numbers greater than 5 are moved to the right of 5.

``` [3,2,1,4,5,7,6,8] ```

Recursively repeat the process on the left and right side. Next pivot is 3.

```[3,2,1,4,5,7,6,8]```

```[2,1,3,4,5,7,6,8]```. Next pivot is 2

```[1,2,3,4,5,7,6,8]```. Next pivot is 7, since the left is already sorted.

```[1,2,3,4,5,6,7,8]```. All sorted now

__Pivot Helper__

1. In order to implement quick sort, it's useful to first implement a function responsible for arranging elements in an array on either side of the pivot.
2. Given an array, this helper function should designate an element as the pivot.
3. It should then rearrange elements in the array so that __all values less than the pivot are moved to the left of the pivot__, and __all values greater than the pivot are moved to the right of the pivot__.
4. The order of the elements on either side of the pivot does not matter
5. The helper should do this in place, that is, __should not create a new array__
6. When complete, the helper should return the index of the pivot.
7. The runtime of quick sort depends in part of how one selects the pivot.
8. Ideall, the pivot should be chosen so that it's roughly the median value in the data set we are sorting.
9. For simplicity, we'll choose the pivot to be the first element (Although there are consequences)

__Pivot Helper Pseudocode__

1. Helps to accept 3 arguments : array, start idx, end idx. (These can default to 0 and the array length - 1, respectively)
2. Grab the pivot from the start of the array
3. Store the current pivot index in a variable (this will keep track of where the pivot should end up)
4. Loop through the array from the start until the end.
    1. If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
5. Swap the starting element(i.e the pivot) with the pivot index
6. Return the pivot index.

```
let pivot = (arr, start = 0, end = arr.length - 1) => {
  let swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];

    arr[idx1] = arr[idx2];

    arr[idx2] = temp;
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      //   console.log(arr);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};
```

__Quick Sort Pseudocode__

1. Call the pivot helper on the array
2. When the helper returns the updated pivot index, recursively call the pivor helper on the subarray to the left of the index, and the subarray to the right of that index.
3. Base case occurs when you consider a subarray with less than 2 elements

```
let quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right); // 3

    // left
    quickSort(arr, left, pivotIdx - 1);

    //   right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};
```

Input : ``` [4,6,9,1,2,5,3,8,7] ```

Output :

```
[1,2,3,4,5,6,7,8,9]
```

***

## Radix Sort

Special sorting algorithm that works on lists of numbers. It never makes comparisons between elements. Exploits the fact that information about the size of a number is encoded in the number of digits. More digits means a bigger number.

__Radix Sort Helpers__

1. getDigit(num,place) - returns the digit in num at the given place value.

```
let getDigit = (num, i) => {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
};
```

2. digitCount(num) - returns the number of digits in num

```
let digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};
```

3. mostDigits(num) - Given an array of numbers, returns the number of digits in the largest numbers in the list

```
let mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};
```

__Radix Sort Pseudocode__

1. Define a function that accepts list of numbers
2. Figure out how many digits the largest number has
3. Loop from i = 0 up to this largest number of digits
4. For each iteration of the loop :
    1. Create buckets for each digit (0 to 9)
    2. Place each number in the corresponding bucket based on it's i-th digit
5. Return list at the end.

```
let radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    //   This just created 10 arrays, each array designated for the digit bucket
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }
    console.table(digitBuckets);
    // ... allows to pass in all the arguments or every element in digitBuckets as an individual argument
    // Puts all of digitBucket arrays, into one singular array
    nums = [].concat(...digitBuckets);
  }

  return nums;
};
```

Input : ``` [23,345,5467, 12, 2345, 9852] ```

Output (With console.tables to help visualize the buckets): 

```
<!-- Last Digit Place -->
┌─────────┬──────┬──────┐
│ (index) │  0   │  1   │
├─────────┼──────┼──────┤
│    0    │      │      │
│    1    │      │      │
│    2    │  12  │ 9852 │
│    3    │  23  │      │
│    4    │      │      │
│    5    │ 345  │ 2345 │
│    6    │      │      │
│    7    │ 5467 │      │
│    8    │      │      │
│    9    │      │      │
└─────────┴──────┴──────┘

<!-- Second to last Digit Place -->
┌─────────┬──────┬──────┐
│ (index) │  0   │  1   │
├─────────┼──────┼──────┤
│    0    │      │      │
│    1    │  12  │      │
│    2    │  23  │      │
│    3    │      │      │
│    4    │ 345  │ 2345 │
│    5    │ 9852 │      │
│    6    │ 5467 │      │
│    7    │      │      │
│    8    │      │      │
│    9    │      │      │
└─────────┴──────┴──────┘

<!-- Third to last Digit Place -->
┌─────────┬──────┬──────┐
│ (index) │  0   │  1   │
├─────────┼──────┼──────┤
│    0    │  12  │  23  │
│    1    │      │      │
│    2    │      │      │
│    3    │ 345  │ 2345 │
│    4    │ 5467 │      │
│    5    │      │      │
│    6    │      │      │
│    7    │      │      │
│    8    │ 9852 │      │
│    9    │      │      │
└─────────┴──────┴──────┘

<!-- Fourth to Digit Place -->
┌─────────┬──────┬────┬─────┐
│ (index) │  0   │ 1  │  2  │
├─────────┼──────┼────┼─────┤
│    0    │  12  │ 23 │ 345 │
│    1    │      │    │     │
│    2    │ 2345 │    │     │
│    3    │      │    │     │
│    4    │      │    │     │
│    5    │ 5467 │    │     │
│    6    │      │    │     │
│    7    │      │    │     │
│    8    │      │    │     │
│    9    │ 9852 │    │     │
└─────────┴──────┴────┴─────┘

Sorted Array : [ 12, 23, 345, 2345, 5467, 9852 ]
```