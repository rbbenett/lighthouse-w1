const obfuscate = function(currentPass) {
  let newPassword = '';
  for (let i = 0; i < currentPass.length; i++) {
    let currChar = currentPass[i];
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
  console.log(newPassword);
};


obfuscate(process.argv[2]);
