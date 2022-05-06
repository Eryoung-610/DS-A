let getDigit = (num, i) => {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
};

let digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

let mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

let radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    //   This just created 10 arrays, each array designated for the digit bucket
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }
    console.table(digitBuckets);
    // ... allows to pass in all the arguments or every element in digitBuckets as an individual argument
    // Puts all of digitBucket arrays, into one singular array
    nums = [].concat(...digitBuckets);
  }

  return nums;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
