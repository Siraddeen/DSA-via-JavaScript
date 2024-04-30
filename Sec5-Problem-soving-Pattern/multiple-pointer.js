/*
                         MULTIPLE POINTERS

           Creating pointers or values that correspond to an index or position and move towards the beginning,
                    end or middle based on a certain condition


    Very efficient for solving problems with minimal space complexity as well

*/

// Question    --->   Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
//sumZero ( [—3, —2,-1,0,1,2,3])     like  [-3,3]

// function pai(arr) {
//   // create a sorted array
//   // pair up with corresponding number get zero
//   // return array that includes first zero values of main values

//   let sorArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr < arr[i]) {
//       arr[i] == arr;
//     }
//   }
//   if (arr[i] != i) {
//     i + i;
//   }
//   sorArr.push(i);
// }

function sumz(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}

let d = sumz([-1, -2, 0, 3, 1, 2]);
console.log(d);
