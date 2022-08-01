function fbnq(num) {
  let ary = [1, 1];
  let index = 2;
  while (index <= num) {
    ary[index] = ary[index - 1] + ary[index - 2];
    index += 1
  }
  return ary
}

console.log(fbnq(5));