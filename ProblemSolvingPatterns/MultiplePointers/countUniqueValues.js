// Implement a function called countUniqueValues,
// which accepts a sorted Array, and counts the
// unique values in the Array. There can be negative
// numbers in the Array, but it will always be sorted

let countUniqueValues = (arr) => {
    // Self explanatory.
    // If array length is 0, return 0
    if(arr.length === 0){
        console.log(0)
        return 0;
    }

    // Establish first pointer
    let i = 0;
    // We make j equal to 1, increment j each loop
    for(let j = 1; j < arr.length; j++){

        // If arr[i] != to arr[j] then we want to increment i
        // so arr[0] is now arr[1],
        // Then replace arr[0] with the value of arr[j]
        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    
    // We return i+1 because the length of i + 1 indicates the total unique values
    // as we are replacing i with the value or arr[j] if arr[i] and arr[j] are NOT equal
    console.log(i + 1)
    return(i + 1);
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
