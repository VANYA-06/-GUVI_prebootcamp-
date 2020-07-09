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

var score1 = (parseInt(userInput[0]));

var score2 = (parseInt(userInput[1]));

var score3 = (parseInt(userInput[2]));

var score4 = (parseInt(userInput[3]));

var score5 = (parseInt(userInput[4]));

var sum =(score1 + score2 + score3 + score4 + score5 );

var avScore = parseFloat(sum/5);
console.log(avScore);

});





