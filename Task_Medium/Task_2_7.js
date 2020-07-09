const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

var RunScored = userInput[0];
var TimesOut = userInput[1];
var BattingAvg = parseFloat(RunScored/TimesOut);
console.log(BattingAvg);

//end-here
});




