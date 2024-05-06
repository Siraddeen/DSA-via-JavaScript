/*
              EXPLORE EXAMPLES

    Coming up with examples can help you understand the problem better

    Examples also provide sanity checks that your eventual solution works how it should

    User Stories!           Unit Tests!





            EXPLORE EXAMPLES

    • Start with Simple Examples
    • Progress to More Complex Examples
    • Explore Examples with Empty Inputs
    • Explore Examples with Invalid Inputs
*/

// Q. Write a function which takes in a string and returns counts of each character in the string.

function count(str) {
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    c++;
  }
  return c;
}
let a = count("ok man");

console.log(a);

// correct solution
function countCharacters(str) {
  let charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if the character is already in the charCount object
    if (charCount[char]) {
      charCount[char]++;
    } else {
      // If not, initialize the count to 1
      charCount[char] = 1;
    }
  }

  return charCount;
}

let result = countCharacters("ok man and woman");
console.log(result);

const conf = (str) => {
  let cha = {};
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (cha[c]) {
      cha[c]++;
    } else {
      cha[c] = 1;
    }
  }
  return cha;
};
let p = conf("how do you do Hi 787 ");
console.log(p);
