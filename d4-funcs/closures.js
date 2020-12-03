function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let i = 0;
  
  
  return function() {
    let loadedRoll = list[i];
    i++;
    return loadedRoll;
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

const countdownGenerator = function (x) {
  let timeToLiftoff = x;
  return function() {
    if(!timeToLiftoff) {
      timeToLiftoff--;
      return "Blast Off"
    } 
    if (timeToLiftoff < 0) {
      timeToLiftoff--;
      return "Rockets already gone, bub!";
    }
      timeToLiftoff--;
      return `T-minus ${timeToLiftoff}...`
  }
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!