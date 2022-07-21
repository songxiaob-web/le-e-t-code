let ary = [1, 9, 2, 3, 4, 1, 4, 11, 24, 2, 1];


function sort(ary) {
  for (let i = 0; i < ary.length - 1; i++) {
    for (let k = i + 1; k < ary.length; k++) {
      [ary[i], ary[k]] = [ary[k], ary[i]]
    }
  }

  return ary;
}

sort(ary)