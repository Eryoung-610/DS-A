# Objectives

- Describe what a searching algorithm is
- Implement linear search on arrays
- Implement binary search on sorted arrays
- Implement a naive string searching algorithm
- Implement the KMP string searching algorithm

## Linear Search -> O(n)

- Accept an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is not found, return -1

## Binary Search -> O(log n)

- Faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
- Binary search only works on SORTED arrays