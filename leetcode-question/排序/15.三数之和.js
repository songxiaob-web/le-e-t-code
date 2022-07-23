/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]];
 * 
 * /**
   * 找一个first 后两个数的和为 result - first
   * 设定 指针start  end
   * nums[start] + nums[end] > result - first
   * end--
   * nums[start] + nums[end] < result - first
   * start++
   * 
   * nums[start] + nums[end] = result - first
   * ary.push([a,b,c])
   * start++,
   * end--,
   * 
   * end <= start  打断循环
   */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums.length) return [];
  if (nums.length < 3) return [];

  nums.sort((a, b) => {
    return a - b
  });
  let index = 0;
  let ary = [];
  let temp = new Set();
  while (index <= nums.length - 2) {
    index += 1;
    if (index > 0 && temp.has(nums[index])) {} else {
      temp.add(nums[index]);
      mySorts(index, ary, nums);
    }
  }
  return ary
};

function mySorts(index, ary, nums) {
  let first = index;
  let start = index + 1;
  let end = nums.length - 1;
  while (start < end) {
    let result = 0 - nums[first];
    if (nums[start] + nums[end] > result) {
      end -= 1;
    } else if (nums[end] + nums[start] < result) {
      start += 1;
    } else {
      ary.push([nums[first], nums[start], nums[end]]);
      start += 1;
      end -= 1;
    }
  }
}

// @lc code=end

