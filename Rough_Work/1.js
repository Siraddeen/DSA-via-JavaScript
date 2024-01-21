//reverse   a   string

let a = (str) => {
  return str.split("").reverse().join("");
};

let j = "armor";
let o = a(j);
console.log(o);

console.log(a("amazon"));
