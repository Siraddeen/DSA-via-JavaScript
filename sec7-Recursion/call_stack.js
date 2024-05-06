/* In almost all program languages,there is a built in data structure that
manages what happens when functions are invoked

It's named the CALL STACK !

*/

/*          Call Stack

always from top    of list   or bottle   remove (or) add

• It's a stack data structure - we'll talk about that later!
• Any time a function is invoked it is placed (pushed)on the top
    of the call stack
• When JavaScript sees the return keyword or when the function ends,
     the compiler will remove (pop)


*/

// example

function takeShower() {
  console.log("from take shower");
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  console.log("from eat");
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  console.log("from make food");
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

wakeUp();
