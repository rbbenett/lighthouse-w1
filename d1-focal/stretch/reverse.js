const strRev = function(str) {
  let newStr = "";
  for (let i = 1; i <= str.length; i++) {
    newStr += str[str.length - i];
  }
  return newStr;
};
process.argv.slice(2).forEach(str => {
  console.log(strRev(str))});