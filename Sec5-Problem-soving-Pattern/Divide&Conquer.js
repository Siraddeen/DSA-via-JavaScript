// Time Complexity - Log(N) - Binary Search!

function find(arr, n) {
  if (n > arr.length) {
    return null;
  }
  //   let num = 0;
  //   for (let i = 0; i < n; i++) {
  //     num += arr[i];
  //   }
  //   for (let i = n; i < arr.length; i++) {
  //     if (n == num) {
  //       return num[i];
  //     }
  //   }
  //   return num;

  let left = 0;
  let rig = arr.length - 1;
  while (left < rig) {
    let mid = Math.floor((left + rig) / 2);
    let curr = arr[mid];

    if (curr === n) {
      return mid;
    } else if (curr < n) {
      left = mid + 1;
    } else {
      rig = mid - 1;
    }
  }
  return -1;
}

let a = find([1, 2, 3, 5, 4], 5);
console.log(a);
