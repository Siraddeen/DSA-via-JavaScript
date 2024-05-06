// sum up the all num

function sumR(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumR(n - 1);
}

let a = sumR(4);
console.log(a);
