const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const result = input.map(num => {
  let sqX = (num.x * num.x);
  let sqY = (num.y * num.y);
  return Math.sqrt(sqX + sqY);

  
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);