// Like merge sort, explots the fact that arrays of 0 or 1 element are always sorted
// Works by selecting one element(called the "pivot") and finding the index where the pivot should end up in the sorted array

// [5,2,1,8,4,7,6,3]

// Pick an index, every value less than the value of that index gets shifted behind that index.

// For example, we pick 5. All numbers in the array less than 5 are moved to the left. All numbers greater than 5 are moved to the right of 5.

// [3,2,1,4,5,7,6,8]

// We recursively repeat the process on the left and right side.

// We pick 3 this time.

// [2,1,3,4,5,7,6,8]. 

// [1,2,3,4,5,7,6,8]. Left side is all sorted. Next pivot spot is 7

// [1,2,3,4,5,6,7,8]. All sorted