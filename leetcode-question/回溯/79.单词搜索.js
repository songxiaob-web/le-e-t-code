/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  let entryFun = function () {
    if (board.length <= 0) return false;
    if (word.length <= 0) return true;
    let row = board.length;
    let column = board[0].length;
    for (let i = 0; i <= row - 1; i++) {
      for (let j = 0; j <= column - 1; j++) {
        let result = boardStarck(i, j, 0);
        if (result) return true;
      }
    }

    return false;
  }

  let boardStarck = function (i, j, wordIndex) {
    if (j < 0 || i > board.length - 1) return false;
    if (i < 0 || j > board[i].length - 1) return false;
    let letter = board[i][j];
    if (letter !== word[wordIndex]) return false;
    if (wordIndex >= word.length - 1) return true;

    board[i][j] = null;
    const result = boardStarck(i, j + 1, wordIndex + 1) ||
      boardStarck(i, j - 1, wordIndex + 1) ||
      boardStarck(i + 1, j, wordIndex + 1) ||
      boardStarck(i - 1, j, wordIndex + 1);
    board[i][j] = letter;
    return result
  }

  return entryFun()
};
// @lc code=end

