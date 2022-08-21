numArr = ['1a',2,'1b',2,'1c',2,'1d',2,'1e'];
console.log(numArr)

for (let i = numArr.length - 1; i >= 0; i--) {
    console.log(`numArr.length - 1 (${numArr.length - 1}) - i (${i}) = ${numArr.length - 1 - i}`)
    if ((numArr.length - 1 - i) % 2 === 1) {
      console.log('returns: ', numArr[i],'at index: ',i);
        }
  }
