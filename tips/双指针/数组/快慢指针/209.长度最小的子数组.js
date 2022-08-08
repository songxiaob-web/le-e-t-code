/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// [1,4,4];
// 求最小就能 达到target  从大减小 从小减大
// 无序数组
// 执行时间 980ms
var minSubArrayLens = function (target, nums) {
  let sums = nums.reduce((pre, cur) => { return cur + pre }, 0);
  let ret = sums;
  let s = 0;
  let f = nums.length - 1;
  let len = 0;
  if (sums === target) return nums.length;
  if (sums < target) return 0;
  if (sums > target) len = nums.length;

  while (s <= nums.length - 1) {
    if (nums[f] === target || nums[s] === target) return 1;
    if (ret < target) return len;
    if (nums[f] + nums[s] === target) return len = 2;
    if (ret > target) len = Math.min(len, f - s + 1)
    ret -= nums[f];
    if (ret >= target) {
      f -= 1;
      len = Math.min(len, f - s + 1);
    } else {
      sums -= nums[s];
      ret = sums;
      s += 1;
      f = nums.length - 1;
    }
  }

  return len
};

// 执行时间 70ms
var minSubArrayLen = function (target, nums) {
  if (nums.length <= 1) {
    return nums[0] >= target ? 1 : 0
  }
  let s = 0;
  let f = 1;
  let len = 0
  let ret = nums[0]; // 数字 -hf9uo-9unc
  // 第一次 正常 执行 没有缓存
  // [1,2,3,4,5]  11 
  // 第二次 可以实现缓存
  // 这也是一次遍历, 不是俩for 俩while就一定是两层循环
  while (f < nums.length) {
    if (nums[s] >= target || nums[f] >= target) return 1
    ret += nums[f];
    while (ret >= target) {
      if (nums[s] >= target) return 1
      len = len ? Math.min(len, f - s + 1) : f - s + 1;
      ret -= nums[s];
      s += 1;
    }
    f += 1;
  }
  return len
};

// @lc code=end

console.log(minSubArrayLen(6, [10, 2, 3]));