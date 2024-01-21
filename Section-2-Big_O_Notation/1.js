/*hello man all about             O       big O


*/

// 3 examples

// a)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// b)
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// now which one is faster    a    or   b

/* 
in option b  you have only  one n with * + / which has 
no significant change in computuing so it is
        O(1) ----> Always 3 operations


in option a  you have many computation with a loop,
if n = 20 you have 20 loop if every operation as + = ++
& so on     so it can be computed as 
      O(n) ----> Number of operations is (eventually) bounded
                   by a multiple of n (say, 20n)
                   we simplify them to   n
                   as  O(n)

*/

// b.1
function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}
/*
Number of operations is (eventually) bounded by a
 multiple of n (say, 10n)

               O(n)    */

// C  example
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
/*
O(n) operation inside of an O(n) operation.

O(n * n)------> O(n^2)  */

//   summary
// as n grows   n^2 or n^3  computation time increase rapidly
// so is O(n)   is easy to compute
// O(1) is even easier
