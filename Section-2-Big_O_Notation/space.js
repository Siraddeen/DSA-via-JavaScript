// from perspective of time

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// here total space aquired is O(1) space
// look in picture for clarity     space example

// now an example with space aquiring of n
// with infinte space inside an array
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

/* here newArr may be consume space that is other than
  arr  
  so we have   n number of spaces

  O(n) spaces

example picture  :  space ex2
  */
