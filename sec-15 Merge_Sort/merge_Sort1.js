let dummyArray = Array.from({ length: 20000 }, (_, i) => i + 1);
dummyArray.sort(() => Math.random() - 0.5);

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
//let p = merge([4, 5, 6, 23], [7, 8, 9, 45]);
//console.log(p);

function merge_sort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = merge_sort(arr.slice(0, mid));

  //console.log(left);

  let right = merge_sort(arr.slice(mid));

  // console.log(right);
  return merge(left, right);
}

let k = merge_sort(dummyArray);
console.log(k);
