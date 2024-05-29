//             QUICK SORT

/*
Call the pivot helper on the array

hen the helper returns to you the updated pivot index, recursively
call the pivot helper on he subarray to the left of that index,
and the subarray to the right of that index

Your base case occurs when you consider a
subarray with less than 2 elements

*/

function prac(array, start = 0, end = array.length - 1) {
  const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]; //swapping indexes
  };

  let startind = start;

  let pivot = array[start];

  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      startind++;
      swap(array, startind, i);
    }
  }
  swap(array, start, startind);
  console.log(array);
  return startind;
}

function qS(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = prac(arr, left, right);
    // left 1
    qS(arr, left, pivotIndex - 1);
    //right
    qS(arr, pivotIndex + 1, right);
  }
  return arr;
}

let a = qS([4, 5, 1, 3, 6, 2, 8, 7]);
console.log(a);
