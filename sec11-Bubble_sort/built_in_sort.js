/*
1)The built-in sort method accepts an optional comparator function
2)You can use this comparator function to tell JavaScript how you want it to sort
3)The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
• If it returns a negative number, a should come before b
• If it returns a positive number, a should come after b,
• If it returns O, a and b are the same as far as the sort is concerned
*/

// sort ascending
function numincr(n1, n2) {
  return n1 - n2;
}
let a = [4, 12, 45, 2, 10].sort(numincr);
console.log(a);
//sort descending
function numdecr(n1, n2) {
  return n2 - n1;
}
let b = [4, 12, 45, 2, 10].sort(numdecr);
console.log(b);

// sort by length       in ascending
function bylenAsc(str1, str2) {
  return str1.length - str2.length;
}
let len = ["ok", "you", "i", "how are", "hi", "fadfaesfasdf"].sort(bylenAsc);
console.log(len);

// sort by length       in descending
function bylenDes(str1, str2) {
  return str2.length - str1.length;
}
let len2 = ["ok", "you", "i", "how are", "hi", "fadfaesfasdf"].sort(bylenDes);
console.log(len2);
