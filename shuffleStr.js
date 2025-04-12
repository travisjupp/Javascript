const shuffleStr = str => {
  const arr = str.split('');
  let currIdx = arr.length, randIdx;
  while (currIdx) {
    randIdx = Math.floor(Math.random() * currIdx);
    currIdx--;
    [arr[currIdx], arr[randIdx]] = [arr[randIdx], arr[currIdx]];
  }
  console.log(str, '=>', arr.join(''));
  return arr.join('');
}
const testStr = '♡♢♤♧';
shuffleStr(testStr);
export default shuffleStr;

