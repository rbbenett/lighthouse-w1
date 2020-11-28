const sum = function(num1, num2) {
  const args = process.argv;
  args.slice(2,4);
  return num1 + num2;
};
console.log(sum(Number(process.argv[2]), Number(process.argv[3])));