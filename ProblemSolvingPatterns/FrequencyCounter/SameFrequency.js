// Write a function called sameFrequency. Given two positive integers, fid out if the two numbers have the same frequency of digits. Must run in O(n)

let sameFrequency = (num1,num2) => {

    // Turn numbers into arrays
    let test = num => Number(num);

    let arr1 = Array.from(String(num1),test)
    let arr2 = Array.from(String(num2),test)

    // If numbers aren't equal length, false
    if(num1.length != num2.length) {
        console.log(false)
        return false
    }

    let freqCounter1 = {}
    let freqCounter2 = {}

    for(let element in arr1) {
        freqCounter1[arr1[element]] = (freqCounter1[arr1[element]] || 0) + 1
    }
    for(let element in arr2) {
        freqCounter2[arr2[element]] = (freqCounter2[arr2[element]] || 0) + 1
    }

    // console.log(freqCounter1)
    // console.log(freqCounter2)

    for(let key in freqCounter1) {
        if(freqCounter1[key] != freqCounter2[key]){
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true;

}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578,5879385) //true
sameFrequency(22,222) // false