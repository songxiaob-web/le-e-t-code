/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 指针同向 
// var nums = [1,1,2,3,3]
var removeDuplicatess = function (nums) {
  let f = 0;
  let s = 1;
  while (s <= nums.length - 1) {
    if (nums[f] !== nums[s]) {
      f += 1;
      nums[f] = nums[s];
    }
    s += 1;
  }
  return f + 1
};

// 原地交换位置  不一样的自己和自己交换
// 一样的 下一个和 快指针交换
var removeDuplicates = function (nums) {
  let s = 0;
  let f = 1;
  while (f < nums.length) {
    if (nums[s] !== nums[f]) {
      s += 1;
      nums[s] = nums[f]
    }
    f += 1
  }

  return s + 1
};
// @lc code=end

