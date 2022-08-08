/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 执行事件 3500ms
var reverseStrings = function (s) {
  // 字符串后面补0 牛B的写法
  let len = s.length
  for (let i = 0; i < len - 1; i++) {
    let flag = i;

    for (let k = i + 1; k < len; k++) {
      [s[flag], s[k]] = [s[k], s[flag]];
      flag += 1;
    }

    i -= 1;
    len -= 1;
  }

  return s
};

// 执行事件 88ms
var reverseString = function (s) {
  // 字符串后面补0 牛B的写法
  let r = s.length - 1;
  let l = 0;
  while (l <= r) {
    [s[l], s[r]] = [s[r], s[l]];
    l += 1;
    r -= 1;
  }

  return s
};
// ["h","e","l","l","o"]

// @lc code=end

