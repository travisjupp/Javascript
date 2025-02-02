// get Xth smallest number (mergeSort)
function getX(x, nums) {
  if (nums.length === 0) return undefined;
  if (x === 0 || x > nums.length) return 0;

  function mergeSort(arr) {
    // console.log('\n(mergeSort)');
    const l = arr.length;
    if (l === 1) {
      // console.log('mergeSort =>', arr);
      return arr
    };
    const mid = Math.floor(l/2);
    const larr = arr.slice(0, mid);
    const rarr = arr.slice(mid, l);
    // console.log('SPLIT', larr, ' ✂️ ', rarr);
    return merge(mergeSort(larr), mergeSort(rarr));
  }

  function merge(larr, rarr) {
    // console.log('\n(merge)', larr, '⛙', rarr);
    const sortedArr = [];
    while (larr.length > 0 && rarr.length > 0) {
      if (larr[0] < rarr[0]) {
        // console.log('REM', larr[0], 'FROM LEFT, ADD TO SORTED');
        sortedArr.push(larr.shift());
        // console.log('LEFT IS NOW', larr);
      } else {
        // console.log('REM', rarr[0], 'FROM RIGHT, ADD TO SORTED');
        sortedArr.push(rarr.shift());
        // console.log('RIGHT IS NOW', rarr);
      }
    }
    // console.log('S', sortedArr, '<-(', 'L', larr, 'R', rarr, ')');
    return sortedArr.concat(larr).concat(rarr);
  }

  const sorted = mergeSort(nums);
  return sorted[x-1];
}

export default getX;

getX(2, [4, 3, 2, 1]);
