var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

var questions = [
    {
        title: "What are inputs into functions called?",
        choices: [
             "parameters",
             "variables",
             "loops",
             "statements",
],
        answer: "parameters"
    },
    {
        title: "Lists of ordered, stored data are called?",
        choices: [
             "Lists",
             "variables",
             "arrays",
             "loops",
        ],
        answer: "arrays"
    },
    {
        title: "What does DOM stand for?",
        choices: [
            "Dominate Option Moduel",
           "Document Object Model",
            "Dancing On Memphis",
            "Document Ordered Moduel",
        ],
        answer: "Document Object Moduel"
    },
    {
        title: "A tool for debugging code?",
        choices: [
            "console log",
            "functions",
            "strings",
            "operators",
        ],
        answer: "console log"
    },
    {
        title: "MathRandom() returns a value of?",
        choices: [
            "Numbers between 1-10",
            "Numbers between 0-1",
            "The number 10",
            "The value of a dollor",
        ],
        answer: "Numbers between 0-1"
    }
];

var score = 0;
var questionIndex = 0;
var secondsLeft = 30;
var holdInterval = 0;
var penalty = 5;
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function() {
    if(holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

function render(questionIndex) {
    questionDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }

        userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
    

    if(element.textContent == questions[questionIndex].answer) {
        score++;
        createDiv.textContent = "Your are correct.";
    } else {
        secondsLeft = secondsLeft - penalty;
        createDiv.textContent = "That is not correct.";
    }
}


questionIndex++;

if (questionIndex >= questions.length) {
    allDone();
    createDiv.textContent = "End of Quiz" + " " + "You got " + score + "/" + auestions.length + "Correct!";    
} else {
    render(questionIndex);
}
questionDiv.appendChild(createDiv);
}

function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Finished!";

    questionsDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your score is:" + timeRemaining;

        questionsDiv.appendChild(createP2);
    }








