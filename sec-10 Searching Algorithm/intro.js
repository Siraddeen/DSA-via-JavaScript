/*
     JavaScript   Linear Search    

     built in examples

     indexOf  ----->   tells about the index of element in the array

     includes ----->  true if pass element inside the array

     find   ------->  

     findIndex ----> 

*/

// indexOf
let a = [1, 2, 3, 4, 5, 88, 45];
let b = a.indexOf(45);
console.log(b); //  answer : 6

// includes
let aa = [1, 2, 3, 4, 5, 88, 45];
let b2 = aa.includes(45);
console.log(b2); // answer : true

//find
let a3 = [1, 2, 3, 4, 5, 88, 45];
let b3 = a3.find((element) => element === 45);
console.log(b3); // answer : 45

// findIndex
let a4 = [1, 2, 3, 4, 5, 88, 45];
let b4 = a4.findIndex((e) => e === 45);
console.log(b4); // answer : 6
