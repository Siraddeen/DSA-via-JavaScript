// regular way of getting Factorial

function fact(n) {
  let d = 1;
  for (let i = 1; i <= n; i++) {
    d *= i;
  }
  return d;
}
let a = fact(4);

// Factorial in Recursive way

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

let b = factorial(6); // 6*5*4*3*2*1
console.log(b);
