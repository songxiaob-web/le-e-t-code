/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length <= 1) return nums
  let s = 0;
  let f = 0;
  while (f < nums.length) {
    if (nums[f]) {
      [nums[s], nums[f]] = [nums[f], nums[s]];
      s += 1;
    }
    f += 1;
  }

  return nums
};
// @lc code=end

