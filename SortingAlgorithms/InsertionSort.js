let insertionSort = (arr) => {
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
      console.log(arr, arr[j + 1], arr[j]);
    }
    console.log(arr);
  }

  return arr;
};

insertionSort([5,1,4,6,2,3]);
