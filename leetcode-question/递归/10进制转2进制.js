// 10进制 => 2进制
// 100 
// num 是一个整数
let tenToTow = (num) => {
  let two = (num) => {
    if (num <= 1) {
      return '1';
    }
    let a = ~~(num / 2); // 50 25 12 6 3 1 
    let b = num % 2; // 0 1 0 1 0 1 0 1
    return two(a) + '' + b
  }
  return two(num)
}

console.log(tenToTow(100));