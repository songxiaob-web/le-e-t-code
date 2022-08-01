/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0
  let x = 0, y = 1;
  let temp;
  for (let i = 2; i <= n; i++) {
    temp = y;
    y += x;
    x = temp;
  }

  return y
};
// @lc code=end

