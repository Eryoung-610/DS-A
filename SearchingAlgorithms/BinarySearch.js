// Binary search is a much faster form of search
// Rather than eliminating one element at a time
// you can eliminate half of the reamining elements at a time
// ONLY WORKS ON SORTED ARRAYS

let binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] != num) {
    if (num < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] == num){
      console.log(middle);
      return middle;
  }
  
  console.log(-1)
return -1

};

//            S        M           E
binarySearch([2, 5, 6, 9, 13, 15, 28], 15); // 5
