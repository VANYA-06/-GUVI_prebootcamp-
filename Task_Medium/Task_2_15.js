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
var side1 = parseInt(userInput[0]); 
var side2 = parseInt(userInput[1]); 
var side3 = parseInt(userInput[2]); 

var perimeter = parseFloat((side1 + side2 + side3)/2);

var area =  parseFloat(Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3))));
console.log(area);
//end-here
});










