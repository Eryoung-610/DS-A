// Write a function called sumZero which accepts a SORTED array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

// Naive Solution O(n^2)
function sumZero(arr) {
    // Left pointer iterates only when there is no match throughout the rest
    // Of the array
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i])
        // Iterates only from i+1
        for(let j = i+1; j < arr.length; j++){
            // console.log(arr[j]);

            // Check if both pointers added up is equal to 0
            // Log if if true
            if(arr[i] + arr[j] === 0){
                console.log([arr[i], arr[j]])
                return [arr[i], arr[j]];
            }
        }
    }
}


// Refactored Solution O(n)
function sumZero2(arr) {
    // Make left pointer
    let left = 0;
    // Make right pointer
    let right = arr.length - 1;

    // Loop through the array with a while loop
    // [left, ..., ..., ..., right]
    // [left, ..., ..., right, ...]
    // [..., left, ..., right, ...]
    while(left < right) {
        let sum = arr[left] + arr[right];

        if(sum === 0){
            console.log([arr[left], arr[right]])
            return [arr[left], arr[right]]
            // If sum is still greater than 0, move right pointer down
            // Remember this is a SORTED array
        } else if (sum > 0){
            right--;
            // Same principle, if sum is less than 0, move left pointer up.
        } else {
            left++;
        }
    }
}

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero2([-3,-2,-1,0,1,2,3]) // [-3,3]

// i = -3, j = -2
// i = -3, j = -1
// i = -3, j = -0
// i = -3, j = 1
// i = -3, j = 2
// i = -3, j = 3


// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined