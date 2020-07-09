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
userInput[0] = "*****" ;
userInput[1] = "*****" ;
userInput[2] = "*****" ;
userInput[3] = "*****" ;
userInput[4] = "*****" ;

console.log(userInput[0]);
console.log(userInput[1]);
console.log(userInput[2]);
console.log(userInput[3]);
console.log(userInput[4]);
//end-here
});











