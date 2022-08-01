/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function backStack(list, temp, ary) {
  if (ary.length === temp.length) {
    return list.push([...temp]);
  }

  for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (temp.includes(item)) {
      continue;
    }
    temp.push(item);
    backStack(list, temp, ary)
    temp.pop();
  }
}

var permute = function (nums) {
  let list = [];
  backStack(list, [], nums);
  return list
};
// @lc code=end

