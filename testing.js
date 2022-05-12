// let sol = (N) => {
//   // Answer array
//   let answer = [];

//   // Check if the number is not an even number. If it isn't we return an empty array
//   if (N % 2 != 0) {
//     return [];
//   }

//   // Create a sum, even counter, and answer total
//   let sum = 0;
//   let even = 2;
//   let ansTotal = 0;

//   // Keep looping while sum is less than N.
//   while (sum < N) {
//     // Increment sum by an even number
//     sum += even;
//     // Push it into our array
//     answer.push(even);

//     // Increment by 2 since we want to find maximal number of positive even ints that are different
//     even += 2;
//   }

//   // We want to get rid of the values that exceed our input.
//   // For ex, 22. [2,4,6,8,10] = 30 --> AnsTotal.
//   ansTotal = sum - N;
//   console.log("ANS TOTAL : ", ansTotal)

//   if (ansTotal > 0) {
//     return answer.filter((test) => test !== ansTotal);
//   }

//   return answer;
// };

// console.log(sol(22));
let sol = (S) => {
  let strArray = S.split("");
  let tempLength = 0;
  let max = 0;

  let counter = {};

  let num = 1;

  // Keep track of window and it's counters
  for(let i = 0; i < num; i++){
    counter[strArray[i]] = (counter[strArray[i]] || 0) + 1;
    
  }


  for(let i = num; i < strArray.length; i++){
    tempLength = tempLength - strArray[i - num] + strArray[i];
    max = Math.max(max,tempLength);

    num++;
    console.log(num);
  }

  return 0;
};

console.log(sol("ababbcbc"));
