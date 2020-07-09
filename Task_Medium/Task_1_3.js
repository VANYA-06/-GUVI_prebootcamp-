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
let name = "Vanya";
let lastName = "Sinha,";
let maritalStatus = "Single,";
let country = "India,";
let age = 25;

console.log(name);
console.log(lastName);
console.log(maritalStatus);
console.log(country);
console.log(age);
//end-here
});

