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

var p = parseInt(userInput[0]);
var r = parseInt(userInput[1]);
var t = parseInt(userInput[2]);

var SI = parseFloat((p*r*t)/100);
console.log(SI);

});









