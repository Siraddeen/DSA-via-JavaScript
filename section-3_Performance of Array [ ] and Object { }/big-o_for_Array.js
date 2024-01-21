/*
Array basic operation like to add , remove

• push- 0(1)  ----> to add extra elements @ last of array
• pop- 0(1)   ----> to remove last elelment of array
• shift- O(N) ----> used to remove the first element from array
• unshift- O(N) --> used to add one or more elements to the beginning of an array
• concat- O(N) ---> used to concatenate two or more arrays, creating a new array without modifying the original arrays
• slice- O(N) ----> used to extract a portion of an array and create a new array containing the extracted elements
• splice- O(N) ---> no idea

• sort- O(N * log N)


*/

/*
let a = [1, 2, 3, 4, 5];
let b = a.shift();
console.log(b);  // shift
console.log(a);
*/

/*
let a = [1, 2, 3, 4, 5];
let newLength = a.unshift(45);
console.log(a);
console.log(newLength);      // unshift
*/

/*
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

// Using concat to concatenate arrays
let newArray = array1.concat(array2, array3);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array1); // Output: [1, 2, 3] (original array1 remains unchanged)
*/

/*
let originalArray = [1, 2, 3, 4, 5];

// Using slice to extract a portion of the array
let slicedArray = originalArray.slice(1, 4);

console.log(slicedArray); // Output: [2, 3, 4]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
*/

/*  sorted

let fruits = ['banana', 'apple', 'orange', 'grape'];

// Using sort to sort the elements in place
fruits.sort();

console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']
*/
