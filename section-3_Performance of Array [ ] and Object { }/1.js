let instructor = {
  fname: "sir",
  lname: "tun",
  fnumbers: [1, 2, 3, 4],
};

/*
  Big   O   of objects

  insertion -  O(1)
  removal   -  O(1)
  serching  -  O(N)
  access    -  O(1)
 
  when you don't need any order, objects are excellent
   choice


*/

/* for objects we prefer
Object.keys- O(N)
Object.values- O(N)
Object.entries- O(N)
hasOwnProperty- 0(1)
*/

/*
for   Arrays  we have

  Insertion - It depends
  Removal   - It depends 

  Searching - O(N)
  Access    - 0(1)



  here i  mentioned it depends,  to understand this let you insert new item @ 0th  index of array
  then other item needs to reposition their index 
  so it will take both time for computation &
  space in ram for allocation of value or reference

  */
