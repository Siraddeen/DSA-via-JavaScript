// define 3 helper functions

/*

1 for  knowing its  value in mean of it's given index

2 for  knowing its its  log10 value os actual number

3 for  knowing its count value  ex: if [23,4556,3,456] ---->  4

 


then use all these functions in RANDIX function 

*/

// 1 function

function ind(num: number, i: number) {
  return Math.floor(num / Math.pow(10, i)) % 10;
}

// 2 function

function logValue(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

// 3 function

interface ok {
  [index: number]: number;
  length: number;
}

function mostOne(nums: ok) {
  let maxD = 0;
  for (let i = 0; i < nums.length; i++) {
    maxD = Math.max(maxD, logValue(nums[i]));
  }
  return maxD;
}

//  implement RADIX sort

interface Bucket {
  [key: number]: number[];
}

function radixSort(arr: ok) {
  let eve = mostOne(arr);
  for (let j = 0; j < eve; j++) {
    let bucket: Bucket = Array.from({ length: 10 }, () => []);

    for (let p = 0; p < arr.length; p++) {
      let dig = ind(arr[p], j);
      bucket[dig].push(arr[p]);
    }
    arr = [].concat(...Object.values(bucket));
  }
  return arr;
}

let amon = radixSort([45, 2, 236, 55, 4548, 1, 232]);
console.log(amon);
