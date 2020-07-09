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
var kwh= parseInt(userInput[0])*24*30;
//console.log(kwh);
var cost = parseFloat((kwh/1000)*userInput[1]);
console.log(cost);

//end-here
});
