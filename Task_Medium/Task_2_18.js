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
var sum = parseInt(userInput[0]) + parseInt(userInput[1]);
var sub = parseInt(userInput[0]) - parseInt(userInput[1]);
var div = parseFloat(parseInt(userInput[0]) / parseInt(userInput[1]));
var multi = parseFloat(parseInt(userInput[0])*parseInt(userInput[1]));

console.log(sum);
console.log(sub);
console.log(div);
console.log(multi);
//end-here
});










