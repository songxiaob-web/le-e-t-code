/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
let total = 0;
var g = [10, 9, 8, 7]
var s = [5, 6, 7, 8]
var findContentChildren = function (g, s) {
  if (g.length <= 0) return 0;
  if (s.length <= 0) return 0;
  g.sort((a, b) => b - a);
  s.sort((a, b) => a - b);
  let index = 0;
  let total = 0;
  // 利用一个 循环就可以代替两个循环的
  for (let k = g.length - 1; k >= 0 && index <= s.length - 1; k--) {
    let item = g[k];
    if (item <= s[index]) {
      total += 1;
    }else{
      k += 1;
    }
    index += 1;
  }

  return total;
};

// @lc code=end

