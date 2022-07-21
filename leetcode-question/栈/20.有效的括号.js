/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let item = s[i];
    if (['(', '{', '['].includes(item)) {
      stack.push(item)
    } else {
      let nowStr = stack.pop();
      if (!nowStr) return false;
      switch (nowStr) {
        case ')':
          if (item != '(') return false
          break;
        case '}':
          if (item != '{') return false
          break;
        case ']':
          if (item != '[') return false
          break;
      }
    }
  }

  return stack.length > 0 ? false : true
};
// @lc code=end

