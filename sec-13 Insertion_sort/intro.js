/*    INSERTION SORT

Builds up the sort by gradually creating a larger left
 half which is always sorted


*/

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }

  return arr;
}
let a = insertion([12, 3, 15, 8, 43, 6]);
console.log(a);

/*
all 3    bubble , insertion , selection   are easy once

use bubble   and  insertion sort  when array is almost sorted as [ 10,12,18,25,5,31]

selection sort is worst   but can perform well at only few time if array is small one
*/
