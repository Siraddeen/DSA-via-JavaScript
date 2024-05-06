/*      BINARY SEARCH 

1)Binary search is a much faster form of search

2)Rather than eliminating one element at a time,
you can eliminate half of the remaining
elements at a time

3)Binary search only works on sorted arrays!

*/

function checkMid(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      i++;
    } else if (arr[i] < n) {
      i--;
    } else if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}

let a = checkMid([1, 2, 3, 4, 5, 6], 4);
console.log(a);
