// Sift the Two's and Sift the Three's:
// The Sieve of Eratosthenes.
// When the multiples sublime,
// The numbers that remain are Prime.

const sieveOfEratosthenes = n => {
  let p = 2;
  const arr = new Array(false, false);
  arr.length = n + 1;
  arr.fill(true, 2, n + 1);
  // boundary optimization (sqrt of n)
  while (p < sqrt(n)) {
    if (arr[p]) {
      // first multiple optimization (p^2)
      for (let i = pow(p, 2); i <= n; i = i + p) {
        arr[i] = false; // mark composites
      }
    }
    p++;
  }
  const primes = [];
  const res = arr.forEach((el, i) => {
    if (el) primes.push(i);
  });
  return primes;
};

const {sqrt, pow} = Math;

export default sieveOfEratosthenes;

