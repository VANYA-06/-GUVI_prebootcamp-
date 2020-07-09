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

let celsius = userInput[0];
var fahrenheit= parseFloat((celsius*9/5)+32);
console.log(fahrenheit.toFixed(2));

//end-here
});

