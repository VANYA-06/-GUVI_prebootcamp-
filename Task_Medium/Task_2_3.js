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

let sum= +userInput[0] + +userInput[1] + +userInput[2];
console.log(sum);
//end-here
});


