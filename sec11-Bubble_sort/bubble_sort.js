/*      Bubble Sort

A sorting algorithm where the largest values bubble up to the top!

 goto this this website
 for visually see how bubble sort work
 https://visualgo.net/en/sorting
*/

// generic code       not efficient
function bub(arr) {
  let d = arr.length;

  for (let i = 0; i < d; i++) {
    for (let j = 0; j < d - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let swa = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swa;
      }
    }
  }
  return arr;
}

let a = bub([4, 2, 1, 3, 5]);
console.log(a);

// good approach

function buble(arr) {
  let d = arr.length;

  for (let i = d; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let swa = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swa;
      }
    }
  }
  return arr;
}

let g = buble([12, 8, 23, 4, 11]);
console.log(g);
console.log("hdsvbfbfhadjhfnkjdshfvifvhsjkhvjsfhushfkjgvbhsadkjvcguao");

// optimized code           use no swap    when you know that there wont be swap among 2 elements

function bubleSwap(arr) {
  let noswap;
  let d = arr.length;

  for (let i = d; i > 0; i--) {
    noswap = true;

    for (let j = 0; j < i - 1; j++) {
      //console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let swa = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swa;
        noswap = false;
      }
    }
    if (noswap) break;
  }
  return arr;
}

let u = bubleSwap([12, 54, 2, 8, 45, 3]);
console.log(u);
