/*
                    How recursive functions work?     

        Invoke the same function with a different input until you
        reach your base case!


                    Base Case
                    
        The condition, when to end the recursion
*/

// example

function countDo(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDo(num); // recursive part
  console.log(num);
}
countDo(5);
