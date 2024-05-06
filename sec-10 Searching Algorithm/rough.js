// let a4 = [1, 2, 3, 4, 5, 88, 45];
// let b4 = a4.findIndex((e) => e === 45);
// console.log(b4);

// function linearSearch(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == n) {
//       return i;
//     }
//   }
//   return -1;
// }

// let a = linearSearch([1, 23, , 8, 5, 45, 6, 3, 4], 783);
// console.log(a);

function na(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        break;
      }

      if (j === str2.length - 1) {
        count++;
      }
    }
  }
  return count;
}
// function na(str1, str2) {
//   let count = 0;
//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i + j] !== str2[j]) {
//         break;
//       }
//       // Check if we've found a complete match for str2
//       if (j === str2.length - 1) {
//         count++; // Increment count before continuing the search
//         break; // Exit the inner loop to continue searching from the next position in str1
//       }
//     }
//   }
//   return count; // Return the count after all searches are complete
// }

let b = na("ois isabel is alright", "is");
console.log(b);
