# Hash Tables

Hash tables are used to store key-value pairs. They are like arrays, but the keys are not ordered. Unlike arrays, hash tables are fast for all of the following operations : finding values, adding new values, and removing values!

Nearly every programming language has some sort of hash table data structure

Because of their speed, hash tables are very commonly used

Different Languages and their Hash Tables 

- Python has Dictionaries
- JS has Objects and Maps* (Objects have some restrictions, but are basically hash tables)
- Java,Go & Scala have Maps
- Ruby has Hashes

## Big O

1. Insert : O(1)
2. Deletion : O(1)
3. Access : O(1)

### Example

Imagine we want to store some colors. We could use an array/list:

``` ["#ff69b4", "#ff4500", "#00ffff"] ```

Not super readable! What do these colors correspond to?

We can use more human-readable keys

pink --> #ff69b4
orangered --> #ff4500
cyan --> #00ffff

colors["cyan"] is way better than colors[2]

### What makes a good hash?

1. Fast(i.e constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly.
3. Deterministic (For a given input, it must always generate the same hash value)

__Bad Example of a fast hash__

```
function slowHash(key) {
    for(let i = 0; i < 10000; i++) {
        console.log("everyday I'm hashing");
    }
    return key[0].charCodeAt(0);
}
```

__Bad Example of a uniformly distributed value__

```
function sameHashedValue(key){
    return 0;
}
```

__Bad Example of a deterministic__

```
function randomHash(key){
    return Math.floor(Math.random() * 1000)
}
```

__Simple hash Example__

This hash only works on strings only

```
function hash(key,arrayLen){
    let total = 0;
    for(let char of key){
        //map "a" to 1, "b" to 2, "c" to 3, etc
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen
    }
    return total;
}

hash("pink", 10); // 0
hash("orangedred", 10) // 7
hash("cyan", 10); // 3
```

Current Problems with our current hash

1. Only hashes strings (we won't worry about this)
2. Not constant time - linear in key length
3. Could be a little more random

### Dealing with Collisions

Even with a large array and a great hash function, collisions are inevitable.

There are many strategies for dealing with collisions, but we'll focus on two :

1. Separate Chaining
    - With separate chaning, at each index in our array, we store values using a more sophisticated data structure(e.g an array or a linked list). This allows us to store multiple key-value pairs at the same index
    - Example
    ```
     0   1   2   3   4   5   6   7   8   9 
                     ^
                     |
            [ ["darkblue", "#00008b"],
              ["salmon", "#fa8072"] ]

    Hash : darkblue --> 4
    Hash : salmon --> 4
    ```

2. Linear Probing
    - With linear probing, when we find a collision, we search through the array to find the next empty slot. Unlike with separate chaining, this allows us to store a single key-value at each index.
    - Example
    ```
     0   1   2   3   4   5   6   7   8   9 
                     ^   ^   ^
                     |   |   ["tomato", "#ff6347"]
                     |   |
                     |   ["salmon", "#fa8072"]
                     |
            ["darkblue", "#00008b"]
              

    Hash : darkblue --> 4
    Hash : salmon --> 4
    Hash : tomato --> 4
    ```

**

### Set/Get

set
1. Accepts a key and a value
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining

get
1. Accepts a key
2. Hashes the key
3. Retrieve the key-value pair in the hash table
4. If the key isn't found, returns undefined

### Keys/Values

keys
1. Loops through the hash table array and returns an array of keys in the table

values
1. Loops through the hash table array and returns an array of values in the table
