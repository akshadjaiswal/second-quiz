var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("what's your name?")

console.log("-------------------")
console.log("Welcome " + userName + "  :Let play the quiz about Naruto Anime ");
console.log("-------------------")

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right !")
    score = score + 1;


  } else {
    console.log("wrong !")



  }
  console.log("current score : ", score)
  console.log("-------------------")
}


//array of the objects
var questions = [
  {
    question: "1)What is the name of Naruto mother ?",
    answer: "Kushina"
  }, {
    question: "2)Who was naruto's teacher at ninja academy ?",
    answer: "Iruka"
  },
  {
    question: "3)Who gave kakashi his sharingan eye ?",
    answer: "Obito"
  },
  {
    question: "4)What is the real name of 'Nine-Tails'?",
    answer: "Kurama"
  },
  {
    question: "5)Which clan possesses the power of Sharingan eye ?",
    answer: "Uchiha"
  },
  {
    question: "6)What is the name of third hokage ?",
    answer: "Hiruzen Sarutobi"
  }
]

//loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

//final score
console.log("YAYY! You  Final Score is : ", score)