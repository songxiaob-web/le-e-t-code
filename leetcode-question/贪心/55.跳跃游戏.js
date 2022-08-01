/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 贪心 
 * 
 * 下一步的行动 和 上一步的行动关系 不大
 * 
 * 
 */
var canJump = function (nums) {
  if (nums.length <= 0) return false;
  if (nums.length === 1) return true;
  let cover = 0;
  for (let i = cover; i <= cover; i++) {
    cover = Math.max(cover, nums[i] + i);
    if (cover >= nums.length - 1) {
      return true
    }
  }
  return false
};
// @lc code=end

