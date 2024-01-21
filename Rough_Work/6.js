function atleast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
atleast5(2); // now if you place less than 5 than also you get value till 5

// here O(n)

//---------------------------------------------------------------------------------------

function almost(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
almost(8); // now if you place more  than 5 than also you get value till 5
