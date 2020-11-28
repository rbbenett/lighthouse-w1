
const raisinAlarm = function(cookie) {
  // Put your solution here

  // input: array of chocolate chips, with potential raisins in it
  // output: if raisin detected, alert message: "Raisin Alert" , else "All good!"

  /*PSEUDOCODE:
    1) Iterate through the input array, and check each element to see if chocolate chip or raisin.Alert
    2) If current element is (raisin) - alert message , else do nothing.
    3) If everything is good at end of iteration, alert message.
  */

  for(let i = 0; i < cookie.length; i++) {
  if (cookie[i] !== "🍫") return 'Raisin alert!'
  } return 'All good!'
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


 // input: array of chocolate chips, with potential raisins in it
  // output: if raisin detected, alert message: "Raisin Alert" , else "All good!"

  /*PSUEDOCODE:
  1) Iterate through the input array and check each element [] if raisins are present or not
  2) If raisins are present, push the 'Raisins alert!' message to the result array
  3) After checking the current element, if no raisins are present, push 'All good!' msg to the result array
  4) Return the result array

  */



const raisinAlarmArray = function(cookies) {
  let result = [];
  let tempMessage = "";
  for (let i = 0; i < cookies.length; i++) {
    tempMessage = raisinAlarm(cookies[i]);
    result.push(tempMessage);
  }
  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));

