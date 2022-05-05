// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

let findLongestSubstring = (str) => {
    // First step is to turn the string into an array
    let strArray = Array.from(String(str));

    let counter = 0;
    let start = 0;
    let seen = {}

    for(let i = 0; i < strArray.length; i++){
        let char = strArray[i];

        if(seen[char]) {
            start = Math.max(start,seen[char]);
        }

        counter = Math.max(counter, i - start + 1);
        seen[char] = i + 1;
    }
    return counter;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); //7
console.log(findLongestSubstring('bbbbbb')); //1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
