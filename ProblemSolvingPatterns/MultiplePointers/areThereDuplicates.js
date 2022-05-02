// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using freq Counter pattern OR multiple pointers pattern

let areThereDuplicates = (...args) => {
    // I want to sort the data
    // Then I can use multiple pointers to verify if i and i++ are equal or not
    // args.sort((a, b) => a > b);
    args.sort()

    // if(arguments.length === 0) {
    //     console.log(false)
    //     return false;
    // }

    // Set first pointer
    let i = 0
    let j = 1;

    while (j < args.length) {
        if (args[i] === args[j]) {
            console.log(true)
            return true
        }
        i++;
        j++;
    }

    console.log(false)
    return false

}

// OR UTILIZING SETS
let areThereDuplicates2 = () => {
    return new Set(arguments).size !== arguments.length;
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates("a", "b", "c", "a") // true