// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using freq Counter pattern OR multiple pointers pattern

let areThereDuplicates = () => {
  let counter = {};

  // Very important to use arguments
  // It applies to anything compared to naming it
  // a random variable name
  for (let element in arguments) {
    counter[arguments[element]] = (counter[arguments[element]] || 0) + 1;
  }

  for (let key in counter) {
    if (counter[key] > 1) {
      console.log(true);
      return true;
    }
  }

  console.log(false);
  return false;
};

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true
