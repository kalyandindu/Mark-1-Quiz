var readlinesync = require("readline-sync");
var score = 0;

console.log("Welcome " + readlinesync.question("What is your name? "));
console.log("Quick quiz, Let's see how much you know me :) ");
console.log("Note: Please enter all answers in small letters");
 console.log("-----------------------------");
function play(question, answer){
 var userAnswer = readlinesync.question(question);
 
 if(userAnswer === answer){
  console.log("Yes you are right");
  score++;
 }
 else {
  console.log("No you are Wrong");
 }
 console.log("Your current score :" + score);
 console.log("-----------------------------");
}

var questionOne = {
question: "What is my full name? ",
answer: "pavan kalyan dindu"
}
var questionTwo = {
question: "Where do i live? ",
answer: "guntur"
}
var questionThree = {
question: "What is my favorite sport? ",
answer:"cricket"
}
var questionFour = {
question: "What is my pet name? ",
answer:"pandu"
}
var question = [questionOne, questionTwo, questionThree, questionFour];

for(var i = 0; i<question.length; i++){
  current = question[i];
  play(current.question, current.answer);
}
 
 console.log("Your final score is:" + score);
 console.log("Thanks for your participation in Quiz, Wishing you good day :)");



