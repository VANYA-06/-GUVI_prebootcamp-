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
let name = "vanya"; //string
console.log(name);
true  ? console.log(true) : console.log(false); //boolean
var age; //undefined
console.log(age);
var amount = null; //null
console.log(amount);


//end-here
});


