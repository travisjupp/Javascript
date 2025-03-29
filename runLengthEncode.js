// count consecutive occurrences of same data value (run-length encoding)
// 'aaaabbbcca' should return [[a, 4], [b, 3], [c, 2], [a, 1]]

const rle = str => {
  const result = [];
  let count = 1;
  str.split('')
    .forEach((l, idx, a) => {
      const next = a[idx + 1];
      const sameNext = l === next;
      if (!sameNext) {
        const lcountsub = new Array(l, count);
        count = 1;
        if (lcountsub.length) result.push(lcountsub);
      } else {
        count++
      }
    });
  return result;
}

export default rle;

