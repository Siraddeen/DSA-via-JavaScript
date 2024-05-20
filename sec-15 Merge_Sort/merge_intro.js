/*      MERGE sort 

It's a combination of two things - merging and sorting!

a combination of 3 things splitting , sorting , merging in general

Works by decomposing an array into smaller arrays of
O or 1 elements, then building up a newly sorted array

*/

// Problem 1 )merge 2 sorted arrays

function merge(arr1, arr2) {
  let m = [];
  let a = 0;
  let b = 0;

  while (a < arr1.length || b < arr2.length) {
    if (a < arr1.length && (b >= arr2.length || arr1[a] <= arr2[b])) {
      m.push(arr1[a]);
      a++;
    } else {
      m.push(arr2[b]);
      b++;
    }
  }
  return m;
}
let a = merge([1, 4, 12, 20, 28], [3, 5, 16]);
console.log(a);
