/*              Selection Sort



Similar to bubble sort, but instead of first
placing large values into sorted position, it
places small values into sorted position


https://visualgo.net/en/sorting
*/

function sel(arr) {
  for (let i = 0; i < arr.length; i++) {
    let low = i;
    for (let j = i + 1; j < arr.length; j++) {
      // i+1  means    next index value of i
      console.log(i, j);
      if (arr[j] < arr[low]) {
        low = j;
      }
    }
    if (i !== low) {
      let temp = arr[i];
      arr[i] = arr[low];
      arr[low] = temp;
    }
  }
  return arr;
}

let a = sel([1, 34, 22, 10, 19, 17]);
console.log(a);
