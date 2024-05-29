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

let a = prac([4, 2, 5, 6, 3, 1, 8, 7]);
console.log(a);
