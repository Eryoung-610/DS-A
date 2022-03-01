// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// Naive --> O(n). Linear Search
let search = (arr, num) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num) {
            console.log(i)
            return i;
        }
    }
    console.log(-1)
    return -1;
}

// Refactor --> O(Log(n) ) Binary Search 
let search2 = (arr,num) => {
    let min = 0;
    let max = arr.length - 1

    while(min <= max) {
        let middle = Math.floor((min+max) / 2);
        let currentElement = arr[middle];

        if(currentElement < num) {
            min = middle + 1;
        }
        else if (currentElement > num) {
            max = middle - 1;
        } else {
            console.log(middle)
            return middle
        }
    }
    console.log(-1)
    return -1
}

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1

search2([1,2,3,5,6,8,9,12,15,16,29],15) // 8
