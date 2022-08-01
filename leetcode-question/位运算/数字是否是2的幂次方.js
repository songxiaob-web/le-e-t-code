var isPowerOfTwo = function (n) {
  // 2的幂次方, 除了1  都是2的倍数
  // n % 2 === 0;
  // 16 : 10000 
  if (n === 1) return true;
  if (n % 2 !== 0) return false;
  n = n >> 1;
  if (n === 1) return true;
  if (n % 2 !== 0) return false;
  return isPowerOfTwo(n)
};

var isPowerOfTwos = function (n) {
  // 2的幂次方, 除了1  都是2的倍数 
  // n % 2 === 0;
  // 16 : 10000 
  if (n === 1) return true;
  if (n === 0) return false;
  return n & (n - 1) === 0
};

let result = isPowerOfTwo(16);