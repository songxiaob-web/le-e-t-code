/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let ary = path.split('/');
  let stack = [];
  for (let i = 0; i <= ary.length; i++) {
    let item = ary[i];
    switch (item) {
      case '.':
        break;
      case '..':
        stack.pop();
        break;
      default:
        item && stack.push('/' + item);
        break;
    }
  }
  return stack.length > 0 ? stack.join('') : '/'
};
// @lc code=end

