const pigLatin = function(strArray) {
  let pigSentence = '';
  for (let i = 0; i < strArray.length; i++) {
    let firstWord = strArray[i];
    let firstLetter = firstWord.substring(0,1);
    let restOfWord = firstWord.substring(1);
    let newWord = restOfWord + firstLetter + "ay";
    pigSentence += newWord + " ";
  }console.log(pigSentence);
};
let newWord = process.argv.splice(2);
pigLatin(newWord);