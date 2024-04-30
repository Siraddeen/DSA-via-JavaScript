/*

                   SOME PATTERNS 
                   
                   
            • Frequency Counter
            • Multiple Pointers
            • Sliding Window
            • Divide and Conquer
            • Dynamic Programming
            • Greedy Algorithms
            • Backtracking        &   Many more!     
                               
           
                   
*/

//                Frequency Counters

/*

This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
*/

// function same(arr1) {
//   let arr2 = arr1.map((n) => n * n);
//   if (arr1 == (aar2 = arr1 * 2)) {
//     console.log(true);
//   }
//   return [arr1, arr2];
// }

// let a = same([12, 6]);
// console.log(a);

function as(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }
  for (let o = 0; o < a1.length; o++) {
    let ci = a2.indexOf(a1[o] ** 2);
    if (ci === -1) {
      return false;
    }
    console.log(a2);
    a2.splice(ci, 1);
  }
  return true;
}

let y = as([1, 4, 3], [16, 1, 9]);
console.log(y);
