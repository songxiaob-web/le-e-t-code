/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var nums = [2, 2, 2, 3];
// var nums = [3,3]   2 
// [3,2,2,3];

var removeElements = function (nums, val) {
  if (nums.length === 1) {
    return nums[0] === val ? [] : 1
  }

  let s = 0;
  let f = nums.length - 1;

  while (f > s) {
    if (nums[f] === val) {
      f -= 1;
    } else {
      if (nums[s] === val) {
        [nums[s], nums[f]] = [nums[f], nums[s]];
        s += 1;
        f -= 1
      } else {
        s += 1;
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      return i === 0 ? 0 : i
    }
  }
  return nums.length
};

var removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index++] = nums[i]
    }
  }
  return index
};

// 如果遇到 相同的 不考虑顺序的情况下
// 就将 当前项目 变为不是val的
var removeElement_s = function (nums, val) {
  let s = 0;
  for (let index = 0; index < array.length; index++) {
    if (nums[index] !== val) {
      nums[s] = nums[index];
      s += 1;
    }
  }
  return s
};

console.log(removeElement_s([3, 2, 2, 3], 3))
// @lc code=end

