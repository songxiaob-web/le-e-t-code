/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 * // [-4,-1,0,3,10] 数组 
 * 返回每个数字的平方,
 * 得出结果也需要是非递减的顺序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums = [-4, -4, -3];
var sortedSquares_s = function (nums) {
  let s = 0;
  let f = nums.length - 1;
  if (nums.length == 1) {
    nums[0] = Math.pow(nums[0], 2)
    return nums
  };

  let sorts = (nums) => {
    console.log('nums', nums)
    for (let i = 0; i < nums.length; i++) {
      nums[i] = Math.pow(nums[i], 2)
    }
    return nums
  }

  if (nums[0] >= 0) {
    return sorts(nums);
  }

  if (nums[f] < 0) {
    while (nums[s] < nums[f]) {
      nums[s] = Math.pow(nums[s], 2);
      nums[f] = Math.pow(nums[f], 2);
      [nums[s], nums[f]] = [nums[f], nums[s]];
      s += 1;
      f -= 1;
    }
    if (nums.length & 1) {
      let index = (nums.length >> 1)
      nums[index] = Math.pow(nums[index], 2);
    }
    return nums;
  }

  while (s < f) {
    let c_s = Math.abs(nums[s]);
    if (nums[f] < 0) nums[f] = Math.abs(nums[f]);
    if (c_s >= nums[f]) {
      nums[s] = c_s;
      [nums[s], nums[f]] = [nums[f], nums[s]];
      f -= 1;
    } else {
      s += 1;
    }
  }

  return sorts(nums)
};

/**
 * @lc app=leetcode.cn id=977 lang=javascript
 * @param {*} nums 
 * @returns 
 */
var sortedSquares = function (nums) {
  let s = 0;
  let f = nums.length - 1;
  let index = nums.length - 1
  if (nums.length == 1) {
    nums[0] = Math.pow(nums[0], 2)
    return nums
  };
  const ary = Array(nums.length);
  while (s <= f) {
    nums[f] = nums[f] >= 0 ? nums[f] : Math.abs(nums[f])
    nums[s] = nums[s] >= 0 ? nums[s] : Math.abs(nums[s])
    if (nums[f] >= nums[s]) {
      ary[index] = (Math.pow(nums[f], 2));
      f -= 1
    } else {
      ary[index] = (Math.pow(nums[s], 2));
      s += 1
    }
    index -= 1;
  }

  return ary;
}

console.log(sortedSquares(nums))
// @lc code=end

