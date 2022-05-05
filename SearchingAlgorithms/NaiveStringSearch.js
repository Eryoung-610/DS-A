// We want to find if a substring exist within an original string

let naiveStringSearch = (str, search) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {

    for (let j = 0; j < search.length; j++) {
      
      console.log(search[j], str[i + j]);
      if (search[j] !== str[i + j]) {
        console.log("BREAK!");
        break;
      }

      if (j === search.length - 1) {
        console.log("substring found");
        count++;
      }
    }
  }

  return count;
};

console.log(naiveStringSearch("lorie loled", "lol"));
