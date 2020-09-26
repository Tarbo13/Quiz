var scoreEl = document.getElementById("score");
var timerEl = document.getElementById("timer");
var startButtonEl = document.getElementById("start-button");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");


var myQuestions = [
    {
        question: "What are inputs into functions called?",
        answers: [
             "parameters",
             "variables",
             "loops",
],
        correctAnswer: "parameters"
    },
    {
        question: "Lists of ordered, stored data are called?",
        answers: [
             "Lists",
             "variables",
             "arrays",
        ],
        correctAnswer: "arrays"
    },
    {
        question: "What does DOM stand for?",
        answers: [
            "Dominate Option Moduel",
           "Document Object Model",
            "Dancing On Memphis"
        ],
        correctAnswer: "Document Object Model"
    }
];

var timer = 25;
var questionIndex = 0;
var score = 0;




// start button to begin - starts timer - displays first question
startButtonEl.addEventListener("click",function(){

    var currObj =myQuestions[questionIndex]
    var question = currObj.question
    var answersArray = currObj.answers
    var correctAnswer = currObj.correctAnswer

    // ask user first question
    questionEl.textContent = question;    
    // user selects from a list of answers
    for(var i = 0; i < answersArray.length; i++){
        var newLi = document.createElement("li")
        newLi.textContent = answersArray[i]
        newLi.classList.add("li-button")
        answersEl.appendChild(newLi);
        newLi.addEventListener("click", (compare));
    }
    
        // if answer correct, 
     function compare(event) {
         var element = event.target;

         if (element.matches("li")) {

            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "createDiv");

            if (element.textContent == correctAnswer) {
                score++;
                createDiv.textContent = "Correct!"
            }
         }
     }
            //add 1 point to score,

            // move to next question
                //questionIndex++
    
        // if answer wrong,
            // 10 sec penalty ,
            // move to the next question
                //questionIndex++

})



// after last question answered post score to highscores page





