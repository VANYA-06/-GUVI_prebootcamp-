// Getting input via STDIN
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
var l = (userInput[0]);
var b = (userInput[1]);
var BaseArea = l*b ;

var h = userInput[2];

var vol = parseFloat(BaseArea*h);
console.log(vol);

//end-here
});









