// get Xth smallest number
function getX(x, nums) {
  if (nums.length === 0) return undefined;
  if (x === 0 || x > nums.length) return 0;

  function mergeSort(arr) {
    const l = arr.length;
    if (l === 1) {
      return arr
    };
    const mid = Math.floor(l/2);
    const larr = arr.slice(0, mid);
    const rarr = arr.slice(mid, l);
    return merge(mergeSort(larr), mergeSort(rarr));
  }

  function merge(larr, rarr) {
    const sortedArr = [];
    while (larr.length > 0 && rarr.length > 0) {
      if (larr[0] < rarr[0]) {
        sortedArr.push(larr.shift());
      } else {
        sortedArr.push(rarr.shift());
      }
    }
    return sortedArr.concat(larr).concat(rarr)
  }

  const sorted = mergeSort(nums);
  return sorted[x-1];
}

export default getX;

