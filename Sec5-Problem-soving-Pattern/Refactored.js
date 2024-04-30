/*
        we can use  2 separate loop of  each 100 iterations
        then, using one nested loop where we will loop inside other loop 
        
        
        for contradiction in
        first scenario we have only 200 iterations     O(n)
        but in second case   we will get 10,000 iterations     O(n^2)

*/

// example

function equals(ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }
  let f1 = {};
  let f2 = {};
  for (let val of ar1) {
    f1[val] = (f1[val] || 0) + 1; // 2 seperate
  }
  for (let val of ar2) {
    f2[val] = (f2[val] || 0) + 1; //  loops
  }

  for (let key in f1) {
    if (!(key ** 2 in f2)) {
      return false;
    }
    if (f2[key ** 2] !== f1[key]) {
      return false;
    }
  }
  console.log(f1);
  console.log(f2);
  return true;
}

let das = equals([4, 2, 6, 2, 3], [36, 4, 9, 4, 16]);
console.log(das);
