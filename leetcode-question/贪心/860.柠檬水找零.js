/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  var valfive = 0;
  var valTen = 0;
  for (let i = 0; i < bills.length; i++) {
    const item = bills[i];
    if (item === 5) {
      valfive += 1;
    } else if (item === 10) {
      if (!valfive) return false;
      valfive -= 1;
      valTen += 1;
    } else {
      if (!valfive) return false;
      if (!valTen) {
        if (valfive < 3) return false;
        valfive -= 3;
      } else {
        valfive -= 1;
        valTen -= 1;
      }
    }
  }
  return true
};
// @lc code=end

