// hello 13 0 ;
// 补0
function leftPad(str, length, ch) {
  let len = length - str.length;
  let total = '';
  while (true) {
    // 10  
    // 是奇数 可能会是1  要算total得结果
    // 是偶数 后续还会翻倍 不需要提前获取total
    if (len & 1) {
      total += ch; // 00 000000 
    }
    if (len === 1) {
      return total += str
    }
    ch += ch; // 10: 00 => 5: 0000  3: 00000000  1:  
    len = len >> 1;
  }
}

console.log(leftPad('hello', 15, '0'));