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
var Eng = parseInt(userInput[0])/10;
var Hindi = parseInt(userInput[1])/10;
var Mathematics = parseInt(userInput[2])/10;
var Sci = parseInt(userInput[3])/10;
var PE = parseInt(userInput[4])/10;

var cgpa = parseFloat((Eng + Hindi + Mathematics + Sci + PE )/5);
console.log(cgpa);

//end-here
});
