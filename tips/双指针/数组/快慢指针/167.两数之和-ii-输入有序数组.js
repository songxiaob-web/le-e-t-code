/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 * 有序数组 得到 两数之和 为target
 * 
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * // 愚蠢的方法
 */
var twoSums = function (numbers, target) {
  let s = 0;
  let f = 1;
  while (s < numbers.length - 1) {
    let ori = target - numbers[f]
    if (ori === numbers[s]) {
      return [s + 1, f + 1];
    }

    if (s < numbers.length - 2 && f == numbers.length - 1) {
      s += 1;
      f = s + 1;
    } else {
      f += 1;
    }
  }

  return [s + 1, f + 1]
};

// 前后指针 
var twoSum = function (numbers, target) {
  let s = 0;
  let f = numbers.length - 1;

  while (s < f) {
    if (target > numbers[f] + numbers[s]) {
      s += 1;
    } else if (target < numbers[f] + numbers[s]) {
      f -= 1;
    } else {
      return [s + 1, f + 1]
    }
  }
};
// @lc code=end

