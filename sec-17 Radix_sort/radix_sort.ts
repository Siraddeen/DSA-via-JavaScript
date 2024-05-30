function getDigits(num: number, i: number): number {
  return Math.floor(num / Math.pow(10, i)) % 10;
}

function digitcount(num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

interface axe {
  [index: number]: number;
  length: number;
}

function mostCount(num: axe) {
  let maxDigit: number = 0;
  for (let i = 0; i < num.length; i++) {
    maxDigit = Math.max(maxDigit, digitcount(num[i]));
  }
  return maxDigit;
}

interface DigitBucket {
  [key: number]: number[];
}
function radix(number: axe) {
  let maximumDigit = mostCount(number);
  console.log(maximumDigit);

  for (let k = 0; k < maximumDigit; k++) {
    // introduce sub arrays from 1 -10
    let digitBucket: DigitBucket = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < number.length; i++) {
      let digit = getDigits(number[i], k);
      digitBucket[digit].push(number[i]);
    }
    //console.log(digitBucket);
    number = [].concat(...Object.values(digitBucket));
    //console.log(number);
  }
  return number;
}

let g = radix([45, 12, 2, 5, 786, 3, 56]);
console.log(g);
