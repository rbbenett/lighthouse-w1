const rollDice = function(number) {
  let rollArray = [];
  for (let i = 0; i < number; i++) {
    if (i < number - 1) {
      rollArray += Math.ceil(Math.random() * Math.floor(6)) + ", ";
    } else {
      rollArray += Math.ceil(Math.random() * Math.floor(6))
    }
    
  }
  return `Rolled ${number} dice: ${rollArray}`
}

const diceNumber = process.argv.splice(2)
console.log(rollDice(diceNumber))