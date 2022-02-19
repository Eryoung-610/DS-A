// Solve this using frequency Pattern

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another,
// such as cinema, formed from iceman.

// validAnagram("", "") --> true
// validAnagram('aaz', 'zza') --> false
// validAnagram('anagram','nagaram') --> true
// validAnagram('rat','car') --> false
// validAnagram('awesome','awesom') --> false
// validAnagram('qwerty','qeywrt') --> true
// validAnagram('testtwisttime','timetwisttext') --> true


// Restate the problem : Since there are no further constraints,
// I'm being asked to find out if the amount of each element between two strings are equal to each other
// For ex : 'rat' 'tar' should be true bc t:1, a:1, r:1

// What are the inputs? : All lower case, no special characters, numbers, or spaces
// Do I have enough information to solve the problem? : Yes
// How should I label the important pieces of data : Develop frequencyCounter objects

// Pseudocode firstly

let validAnagram = (a,b) => {
// First condition is to check whether or not the lengths of the strings are equal
// If not equal, we return false
    if(a.length != b.length){
        console.log(false)
        return false;
    }
    
// Create frequencyCounter objects
    let freqCounter1 = {}
    let freqCounter2 = {}

// If [element] of array1 does not exist within freqCounter1, add it, otherwise +1 to said [element]
    for(let element in a){
        // console.log(a[element])
        // I want to populate the freqCounter Object with the characters I'm getting from the string
        // To do that, I need to do freqCounter1[a[element]] (a[element] = character)
        freqCounter1[a[element]] = (freqCounter1[a[element]] || 0) + 1
    }

// If [element] of array2 does not exist within freqCounter2, add it, otherwise +1 to said [element]
    for(let element in b){
        // console.log(b[element])
        freqCounter2[b[element]] = (freqCounter2[b[element]] || 0) + 1
    }

// TESTING PURPOSES
    console.log(freqCounter1)
    console.log(freqCounter2)

// Loop over array1, (Can use regular for loop, or an for-of loop)
    for(let key in freqCounter1) {
        if(freqCounter1[key] !== freqCounter2[key]){
            console.log(false)
            return false
        }
    }

// Check the contents of each freqCounter, if keys are not equal to each other, return false.

// Otherwise return true
    console.log(true)
    return true

}

validAnagram("", "") // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram','nagaram') // true
validAnagram('rat','car') // false
validAnagram('awesome','awesom') // false
validAnagram('qwerty','qeywrt') // true
validAnagram('testtwisttime','timetwisttext') // false

