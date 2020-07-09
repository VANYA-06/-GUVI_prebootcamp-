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
var r = parseInt(userInput[0]);
var vol = parseFloat((4*Math.PI*r*r*r)/3);

console.log(vol);

//end-here
});









