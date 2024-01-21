// see timr difference among code performance

let add = (n) => {
  let a = 0;
  for (let i = 0; i <= n; i++) {
    a += i;
  }
  return a;
};
let val1 = performance.now();

add(12312312);

let val2 = performance.now();

console.log(`time difference ${(val2 - val1) / 1000} seconds`);
