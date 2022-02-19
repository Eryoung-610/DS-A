// Idea behind frequency counter pattern.
// 1. Usually use an object
// 2. Use said object to construct a profile/ way of breaking down contents of array or string
// 3. Able quickly to compare objects


// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's
// corresponding value squared in the second array.
// The frequency of values must be the same.

// same([1,2,3], [4,1,9]) --> true
// same([1,2,3], [1,9]) --> false
// same([1,2,1], [4,4,1]) --> false

let ar1 = [1,2,3];
let ar2 = [4,1,9];
let ar3 = [1,9];
let ar4 = [1,2,1];
let ar5 = [4,4,1];

// Naive O(n^2)
const same = (a,b) => {
    
    if(a.length != b.length) {
        console.log(false);
        return false;
    }

    for(let i = 0; i < a.length; i++) {

        // indexOf returns the index of the searchString. ex. indexOf(searchString)
        let correctIndex = b.indexOf(a[i] ** 2);

        // -1 represents that there is no index.
        // if there is no index, we return false since the squared value of a[i] does not exist
        if(correctIndex === -1){
            console.log(false);
            return false;
        }

        // Remove the correct index
        b.splice(correctIndex,1);
    }

    console.log(true);
    return true;
}

// Refactored O(n)
const same2 = (a,b) => {
    if(a.length != b.length){
        console.log(false);
        return false;
    }

    // Create frequency objects
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // We want to add a value if it does not exist, if it does already exist, we +1.
    for (let val of a){
        console.log(a[val])
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of b){
        // console.log(b[val])
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    // console.log(frequencyCounter1)
    // console.log(frequencyCounter2)

    // Iterate over every element in frequencyCounter1
    for(let key in frequencyCounter1) {
        // If there does not exist a key^2 within frequencyCounter2, return false
        if(!(key ** 2 in frequencyCounter2)){
            console.log(false)
            return false;
        }

        // If the frequencyCounter[key] **2 does not equal to frequencyCounter1[key], return false 
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            console.log(false)
            return false
        }
    }
    
    // All conditions met, return true
    console.log(true)
    return true

}

// same(ar1,ar2);
// same(ar1,ar3);
// same(ar4,ar5);

same2(ar1,ar2);
// Explanation : Keys match
// {1: 1, 2: 1, 3: 1}
// {1: 1, 4: 1, 9: 1}
// true


// same2(ar1,ar3);
// Array length does not match

// same2(ar4,ar5);
// Explanation : Keys of FrequencyCounter1 & FrequencyCounter2 do not match
// {1: 2, 2: 1}
// {1: 1, 4: 2}
// false