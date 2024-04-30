function sum(arr) {
  let lef = 0;
  let rig = arr.length - 1;
  while (lef < rig) {
    let sum = arr[lef] + arr[rig];
    if (sum === 0) {
      return [arr[lef], arr[rig]];
    } else if (sum > 0) {
      rig--;
    } else {
      left++;
    }
    return undefined;
  }
}

let a = sum([-2, -1, 0, 1, 2]);
console.log(a);
