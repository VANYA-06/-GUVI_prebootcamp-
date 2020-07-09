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

var meter = userInput[0];
var mile = parseFloat(meter/1609);

console.log(mile);

//end-here
});


