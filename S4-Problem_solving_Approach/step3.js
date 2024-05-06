/*
            BREAK IT DOWN


        Explicitly write out the steps you need to take.

        This forces you to think about the code you'll write
           before you write it, and helps you catch any
         lingering conceptual issues or misunderstandings
           before you dive in and have to worry about details
                  (e.g. language syntax) as well. 



*/

function charCount(str) {
  let char = {};
  for (let i = 0; i < str.length; i++) {
    let c = str[i];

    if (char[c]) {
      char[c]++;
    } else {
      char[c] = 1;
    }
  }
  return char;
}
let t = charCount("aa s grgrhhhh 112113");
console.log(t);
