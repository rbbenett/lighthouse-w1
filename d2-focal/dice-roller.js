const rollDice = function(number) {
  let rollArray = [];
  // while (rollArray.length < number)
  for (let i = 0; i < number; i++) {
    const randomRoll = Math.ceil(Math.random() * 6)
    rollArray.push(randomRoll)
  }
  return `Rolled ${number} dice: ${rollArray.join(", ")}`
}

const diceNumber = process.argv.splice(2)
console.log(rollDice(diceNumber))