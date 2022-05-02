// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

let isSubsequence = (str1, str2) => {
    let i = 0;
    let j = 0;

    // Check if str1 exists
    if(!str1) {
        console.log(true)
        return true;
    }

    // While 0 is less than str2 length
    // We check if str1[i] === str2[j]
    // If it is then we increment i,
    // If i is equal to the str1.length
    // Then we good
    while(j < str2.length) {
        if (str2[j] === str1[i]){
            i++;
        }

        // If i is equal to str1.length
        // That means str1 is within str2
        // 
        if(i === str1.length) {
            console.log(true)
            return true
        }

        // Increment j
        j++;
    }

    console.log(false)
    return false;
}

isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'abracadabra') // true
isSubsequence('abc', 'acb') // false