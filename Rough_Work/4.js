function cud(n) {
  console.log("go up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("@ the up ! now going down");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log(" noq @ the bottom");
}
console.log(cud(12));

// O(n)
