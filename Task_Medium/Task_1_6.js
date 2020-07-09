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
let amount = 25; //parseInt
console.log(parseInt(amount)); //parseInt

let price = 100;
console.log(Number(price)); //Number

let rate = 55;
console.log(+rate);//PlusSign

//end-here
});


