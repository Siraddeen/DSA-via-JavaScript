//   let arr1 = arr.sort();
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr == arr1[i]) {
//       count++;
//     }
//   }
//   return count;

function countU(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let uv = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      uv.add(arr[i]);
    }
  }
  return uv.size;
}
let a = countU([1, 3, 8, 3, 8, 4, 9, 3, 3]);
console.log(a);
