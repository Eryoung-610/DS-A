let minNum = (arr) => {
  let counter = 1;

  if (arr.length === 1) return counter;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) counter++;

    console.log("ARR[i] : ", arr[i]);
    console.log("ARR[i+1] :", arr[i + 1]);
  }

  return counter;
};

console.log(minNum([5, 4, 3, 6, 1]));
