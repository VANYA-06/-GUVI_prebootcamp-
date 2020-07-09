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
var side = parseInt(userInput[0]);
var area = parseFloat(Math.sqrt(3)*side*side/4) ;

console.log(area);

//end-here
});








