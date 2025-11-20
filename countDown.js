export function countDownIterative(count) {
  while (count > 0) {
    console.log(count);
    count--;
  }
  console.log('Blast Off~!');
}

console.log('Iterative Countdown:');
countDownIterative(3);

export function countDownRecursive(count) {
  if (count === 0) {
    console.log('Blast Off~!');
    return;
  }
  console.log(count);
  countDownRecursive(count - 1);
}
console.log('Recursive Countdown:');
countDownRecursive(3);


