function sumToOne(n) {
  if (n === 1) {
    return 1;
  }
  // if n > 1: (recursive case)
    // return n + sum of all numbers from 1 to(n-1)
  // if n === 1: (base case)
    // return 1

    return n + sumToOne(n - 1);
}

console.log(sumToOne(4))