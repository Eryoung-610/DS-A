// Accepts a SORTED array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer: 
//  - Create a pointer in the middle
//  - If you find the value you want, return the index
//  - If the value is too small, move the left pointer up
// If value is never found, return -1

let binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2)

    while (arr[middle] !== val && left <= right) {
        if (val < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }

        middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2))
console.log(binarySearch([1, 2, 3, 4, 5], 3))
console.log(binarySearch([1, 2, 3, 4, 5], 5))
console.log(binarySearch([1, 2, 3, 4, 5], 6))
console.log(binarySearch([1, 2, 3, 4, 5], 1))