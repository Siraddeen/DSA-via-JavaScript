/*
Write a function called maxSubarraySum which accepts
an array of integers and a number called n. The function
should calculate the maximum sum of n consecutive
elements in the array.

*/
function maxSub(arr, n) {
  if (arr.length === 0 && n > arr.length) {
    return null;
  }
  let msum = 0;
  let temps = 0;

  for (let i = 0; i < n; i++) {
    msum += arr[i];
  }
  temps = msum;

  for (let i = n; i < arr.length; i++) {
    temps = temps - arr[i - n] + arr[i];
    msum = Math.max(msum, temps);
  }
  return msum;
}

let a = maxSub([1, 1, 2, 3, 4, 5, 3], 3);
console.log(a);
