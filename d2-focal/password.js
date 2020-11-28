const obfuscate = function(args) {
  let string = args[2];
  let newPassword = '';
  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];
    if (currChar === "a") {
      newPassword += "4";
    } else if (currChar === "e") {
      newPassword += "3";
    } else if (currChar === "o") {
      newPassword += "0";
    } else if (currChar === "l") {
      newPassword += "1";
    } else {
      newPassword += currChar;
    }
  }
  return newPassword;
};

let args = process.argv;

console.log(obfuscate(args));