// bitwiseSwitchAnimation.js
// found on MDN AbortController documentation
// https://github.com/mdn/dom-examples/blob/main/abort-api/index.html

let animCount=0;
function runAnimation() {
    progressAnim = setInterval(() => {
      switch (animCount++ & 3) {
        case 0: console.log(' '); break;
        case 1: console.log('.'); break;
        case 2: console.log('..'); break;
        case 3: console.log('...'); break;
      }
    }, 300);
}
runAnimation();
// to stop `clearInterval(progressAnim)`

/**

Understanding the `(animCount++ & 3)` logic:
The bitwise AND (&) operator returns a number or BigInt whose binary representation has a 1 in each bit position for which the corresponding bits of both operands are 1.

zero & 3 returns 0
000000
000011

one & 3 returns 1
000001
000011

two & 3 returns 2
000010
000011

three & 3 returns 3
000011
000011

four & 3 returns 0 (so when animCount++ gets to 4 why does it restart?)
000100
000011

five & 3 returns 1 (It doesn't restart, `animCount` still increases)
000101 (unread bit position 4 plus 1)
000011

six & 3 returns 2
000110 (unread bit position 4 plus 2)
000011

seven & 3 returns 3
000111 (unread bit position 4 plus 3)
000011

eight & 3 returns 0
001000 (unread bit position 6 plus 0)
000011...

**/

// @tjupp
