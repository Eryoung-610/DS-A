// PIVOT HELPER
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

console.log(quickSort([4, 6, 9, 1, 2, 5, 3, 8, 7]));
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
// 3,2,1    ,6,9,5
//     3       6
// 2,1       5   9
//   2
// 1
