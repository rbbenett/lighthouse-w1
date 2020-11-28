function sumToOne(n) {
  let sum = 0;
  for (let i = n; i >= 1; i--) {
    sum += i;
  }
  return sum;
}

console.log(sumToOne(4));