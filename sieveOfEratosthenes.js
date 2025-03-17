// Sift the Two's and Sift the Three's:
// The Sieve of Eratosthenes.
// When the multiples sublime,
// The numbers that remain are Prime.

const sieveOfEratosthenes = n => {
  let p = 2; // hold prime
  const list = new Array(null, false);
  list.length = n + 1;
  list.fill(true, 2, n + 1);
  while (p < n) {
    if (list[p]) {
      // starting at p^2 mark composites
      for (let i = p * p; i <= n; i = i + p) {
        list[i] = false; // mark composites
      }
    }
    p++;
  }
  const res = list.map((p, i) => (p ? i : null)).filter(p => p);
  return res;
};

export default sieveOfEratosthenes;

