/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 * 
 * 钱 amount 11;
 * coins [1,2,5];
 * 11 => 1 => 10 : 1
 *       2  => 2 : 9 
 *       5  => 5 : 6
 * 要获得最优解 
 * 一定会路过 刚才的这几个解法
 * 对于 n => fn(n) 的最优解
 * 当11 - 5 => 6  得到6的最优解
 *   11 - 2 => 9  得到9的最优解
 *   11 - 1 => 10 得到10的最优解 
 *   
 * 6 => 2,3  1,5  4,2,  3,3
 * 9 => 3,3,3  4,5  1,8  2,7  3,6  
 * 10 => 9,1  2,8  3,7  4,6  5,5 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (coins.length <= 0) return 0;
  if (amount <= 0) return 0;
  coins.sort();
  // 先定义 dp这个 base 为所有内容 无穷大
  const dp = Array(amount + 1).fill(Infinity);
  // f(n = 0); 最优解为 0
  dp[0] = 0;
  // 公式为
  // 1 => 最开始 f(0)=> f(1) = f(0) + 1 
  // 2 => f(2) = f(1) + 1;
  // 1 => 是属于 当前硬币的一次 
  // 当前的 硬币 1  2  5 分别属于 一次 所以 + 1 

  // f(n) = f(n - coins[i]) + 1 为最优解
  // n => 从 硬币 1 => amount的 所有选项
  // f(2)的 最优解 f(2 - 2) + 1 =>  f(0) + 1 => 2
  // f(4)的 最优解 f(4 - 2) + 1 =>  f(2) + 1 => 2
  // f(6)的 最优解 f(6 - 5) + 1 =>  f(1) + 1 => 2
  for (let i = 0; i < coins.length; i++) {
    for (let k = coins[i]; k <= amount; k++) {
      dp[k] = Math.min(dp[k - coins[i]] + 1, dp[k])
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

