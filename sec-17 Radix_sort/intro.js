/*
up until now we see comparison  sorts based on
how quick they are


            COMPARISON SORTS
        (Average Time Complexity)

Bubble Sort - O(n^2)
Insertion Sort - O(n^2)
Selection Sort - O(n^2)

Quick Sort - O(n log (n))
Merge Sort - O(n log (n))

so Quick & Merge sort are useful compared with B,I,S sorts  in general 
*/

/*
                        RADIX SORT


    we sort via
    Radix sort is a special sorting algorithm that works on lists 
    of numbers
    It never makes comparisons between elements! 
    which means it don't compare if it is smaller or larger
*/

function as(num, i) {
  return Math.floor(num / Math.pow(10, i)) % 10;
}

let o = as(4524, 1);
console.log(o);

function digitCount(num) {
  // using for knowing if number is hundred or thousand using log10
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}
let a = digitCount(45644);
console.log(a);

// now let build function for getting most valued number from array

function mostDigit(num) {
  if (num === 0) return1;
  let maxDigit = 0;
  for (let i = 0; i < num.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(num[i])); // using above function
  }
  return maxDigit;
}

let v = mostDigit([12, 2, 23, 235]);
console.log(v);

// Actually these are helper code for Radix sort
