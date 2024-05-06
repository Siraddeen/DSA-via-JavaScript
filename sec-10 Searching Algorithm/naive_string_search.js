/*      Naive String Search



• Suppose you want to count the number of times a
smaller string appears in a longer string
• A straightforward approach involves checking
pairs of characters individually


*/

function naive(str1, str2) {
  let count = 0;

  for (let i = 0; i < str1.length - str2.length; i++) {
    let match = true;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      count++;
    }
  }
  return count;
}

let a = naive("hello all balb", "al");
console.log(a);
