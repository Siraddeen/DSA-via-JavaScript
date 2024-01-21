function double(arr) {
  let nearr = [];
  for (let i = 0; i < arr.length; i++) {
    nearr.push(2 * arr[i]);
  }
  return nearr;
}

console.log(double([2, 5, 6]));

// here space  as   O(n) space
