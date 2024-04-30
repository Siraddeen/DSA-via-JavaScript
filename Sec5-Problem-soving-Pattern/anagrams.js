// 1) The regular one

function ana(a1, a2) {
  let ar1 = a1.toLowerCase().split("").sort().join("");
  let ar2 = a2.toLowerCase().split("").sort().join("");
  if (ar1 == ar2) {
    console.log("the given inputs are anagram");
    return true;
  } else {
    console.log("it is not anagram");
  }
}

// ana("cinema", "icEman")       this is example of   O(n * log(n))

//------------------------------------------------------------------------------------------------------------------------------------------------

// 2) The best one

function samm(first, sec) {
  if (first.length !== sec.length) {
    return false;
  }

  const look = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    look[letter] ? (look[letter] += 1) : (look[letter] = 1);
  }
  console.log(look);
  for (let i = 0; i < sec.length; i++) {
    let lett = sec[i];

    if (!look[lett]) {
      return false;
    } else {
      look[lett] -= 1;
    }
  }
  return true;
}

let g = samm("okasa", "asoka");
console.log(g); // here time complexity is    O(n)

//-----------------------------------------------------------------------------------------------------------------------

/*
from 2   example from above    
if data is small one    use 1 option   O(n*log(n))

if data is large   use second one   O(n)


because computational time is less in    O(n)  compared to   O(n * log(n))

*/
