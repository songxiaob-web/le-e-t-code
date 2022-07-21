// let ary = [1, 9, 2, 3, 4];
let ary = [1, 9, 2, 3, 4, 1, 4, 11, 24, 2, 1];

function quickSort(ary) {
  if (ary.length <= 1) return ary
  let left = [];
  let right = [];
  let centerNum = ary[0];
  for (let i = 1; i < ary.length; i++) {
    let item = ary[i];
    if (item <= centerNum) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return [...quickSort(left), centerNum, ...quickSort(right)]
}
//             i           j
let arys = [1, 0, 1, 0, 0, 1, 1, 0];
/**
 *  如果找到一样大的, 则右边动
 *  左边不动
 * 
 *   完成第一次 排序后,将当前游标停止的位置 返回 作为后续排序的分割线
 *   左边为一组, 右边为一组, 分别上述操作
 */

// 原地快排
function quickSort_unmove(ary, start, end) {
  if (start < end) {
    let index = doSort(ary, start, end);
    // console.log('index', index)
    // 0 1
    quickSort_unmove(ary, start, index - 1);
    quickSort_unmove(ary, index + 1, end);
  }

  return ary
}


function doSort(ary, start, end) {
  /**
   *                i        j    
   * let arys = [2, 3, 2, 7, 1, 5, 4, 6];
   *        ij  
   * [2, 1, 2, 7, 3, 5, 4, 6];
   */
  let startPoint = start;
  let first = ary[start];
  start += 1;
  while (start < end) {
    while (first < ary[end]) {
      end -= 1;
    }

    while (first > ary[start]) {
      start += 1;
    }

    if (start < end) {
      console.log('这里..', start, end);
      [ary[start], ary[end]] = [ary[end], ary[start]];
      start += 1;
      end -= 1;
    }
  }
  [ary[startPoint], ary[start - 1]] = [ary[start - 1], ary[startPoint]];
  return start;
}

console.log(quickSort_unmove(arys, 0, arys.length - 1));