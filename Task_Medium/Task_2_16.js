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
var ActualCost = userInput[0];
var SoldCost = userInput[1];

var Discount = parseFloat(ActualCost- SoldCost);//in Rupees
console.log(Discount);//in Rupees
//end-here
});











