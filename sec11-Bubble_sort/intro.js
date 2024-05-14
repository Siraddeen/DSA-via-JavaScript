/*                    What is sorting?

Sorting is the process of rearranging the
items in a collection (e.g. an array) so that
the items are in some kind of order.


examples

• Sorting numbers from smallest to largest
• Sorting names alphabetically
• Sorting movies based on release year
• Sorting movies based on revenue



*/
function sor(arr) {
  if (typeof arr[0] === "string") {
    return arr.sort();
  } else {
    return arr.sort((a, b) => a - b);
  }
}

let a = sor([23, 45, 6, 12, 13]);
let b = sor(["hi", "anna", "ruby"]);
console.log(a);
console.log(b);
