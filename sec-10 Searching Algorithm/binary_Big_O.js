//     // this is just rough work

//  // im Big O      O(log n)  is average case used one   &   O(1) is best case one

// function binSearch(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;
//   let subarrayCount = 0; // Initialize a counter for subarray creations

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     subarrayCount++; // Increment the counter for each subarray creation

//     if (arr[mid] === val) {
//       console.log("Subarray count:", subarrayCount); // Log the subarray count before returning
//       return mid;
//     } else if (arr[mid] < val) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   console.log("Subarray count:", subarrayCount); // Log the subarray count before returning
//   return -1;
// }

// // Example usage:
// const arr = [1, 3, 5, 7, 9, 11, 13, 25, 26, 56, 78, 89, 91, 92];
// const val = 24;
// console.log("Index:", binSearch(arr, val)); // Output: Index: 3
function binSearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let subarrayCount = 0; // Initialize a counter for subarray creations

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    subarrayCount++; // Increment the counter for each subarray creation
    let startVal = arr[left]; // Start value of the subarray
    let endVal = arr[right]; // End value of the subarray
    console.log(`Subarray ${subarrayCount}: [${startVal}, ${endVal}]`);

    if (arr[mid] === val) {
      console.log("Subarray count:", subarrayCount); // Log the subarray count before returning
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log("Subarray count:", subarrayCount); // Log the subarray count before returning
  return -1;
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 25, 26, 56, 78, 89, 91, 92];
const val = 91;
console.log("Index:", binSearch(arr, val)); // Output: Index: 3
