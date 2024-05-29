// Pivot Helper

/*
consider pivot is a random value in array let say index of 2  in where value
is 23 now 
quick sort tries to pass   any value less than this pivot point 23 

so if less than 23 appear it will move left side of 23 &
vise versa for greater value of 23

The order of elements on either side of the pivot doesn't matter!

The helper should do this in place, that is, it should not create 
a new array

When complete, the helper should return the index of the pivot
*/

function pivo(arr, start, end) {
  start = 0;
  end = arr.length - 1;

  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  // or you can use this

  const swap1 = (arr1, ind1, ind2) => {
    [arr1[ind1], arr1[ind2]] = [arr1[ind2], arr1[ind1]];
  };

  let swapInd = start;

  let pivot = arr[start];

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapInd++;
      // let swap = indexp;
      // indexp = indexp + 1(indexp + 1) == swap;
      // it won't work so i included new swap function above

      swap1(arr, swapInd, i);
      console.log(arr);
    }
  }
  swap1(arr, start, swapInd);
  console.log(arr);
  return swapInd;
}

let a = pivo([5, 6, 2, 1, 3, 7, 4, 8]);
console.log(a);
