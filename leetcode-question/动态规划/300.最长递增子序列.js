/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLISs = function (nums) {
  // 二分 + 贪心 查找
  //  每次获得一个 然后找到需要放的位置
  //  没有比他大的 放最后
  //  有比他大的 找到 第一个比他大的替换掉
  if (nums.length <= 0) return 1;
  const arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (arr[arr.length - 1] < nums[i]) {
      arr.push(nums[i])
    } else {
      // 如果 arr的最后一个 比挡圈 nums[i] 大
      // 则向上寻找 找到前面第一个 比nums[i] 大的
      // 然后替换掉 
      let left = 0;
      let right = arr.length - 1;
      let mid;
      while (left < right) {
        mid = (left + right) >> 1;
        if (arr[mid] < nums[i]) {
          left = mid + 1
        } else {
          right = mid
        }
      }

      arr[left] = nums[i]
    }
  }

  return arr.length
};

var lengthOfLIS = function (nums) {
  // 二分 + 贪心 查找
  //  每次获得一个 然后找到需要放的位置
  //  没有比他大的 放最后
  //  有比他大的 找到 第一个比他大的替换掉
  // dp[n] = Math.max(dp[n],dp[j] + 1);
  // 获取刚好小于当前值的 dp + 1 就得出来 当前的dp值
  if (nums.length <= 0) return 1;
  const dp = Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
  // dp 动态规划的 公式
  // dp[n] = Math.max(dp[n],dp[i] + 1)  //dp[i] 大+1 dp[i]  小不动
};
// @lc code=end

