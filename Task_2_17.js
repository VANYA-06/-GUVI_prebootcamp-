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
var rad = parseInt(userInput[0]);
var dia = parseFloat(2*rad);
var circum = parseFloat(2*Math.PI*rad);
var area = parseFloat(Math.PI*rad*rad);

console.log(dia, circum.toFixed(2), area.toFixed(2));
//end-here
});












