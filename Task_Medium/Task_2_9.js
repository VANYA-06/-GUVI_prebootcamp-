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

var a = (parseInt(userInput[0]));
var b = (parseInt(userInput[1]));

var power = Math.pow(a,b);
console.log(power);

});







