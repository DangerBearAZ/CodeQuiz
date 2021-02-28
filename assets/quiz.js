//quiz hame that starts with button click, runs a timer 
// has 5 quesitons, multipule choice, each answer moves to the net question 
//incorrect aswers detract time 
// shows high score 
// use localstorage to save high scores 
//boiler plate html link to bootstrap css jss 
// eventListener, jquery. setTime
//on.click 
//display none Display: block


var timeRemaining = 300000;
var timeTicks = 1000;
var timePenalty = 10000

//
var score = 0;


//set up 
var questionIndex = 0;

function updateTime() {
    timeRemaining -= timeTicks;
    startQuiz
    var timerText = document.getElementById("countdown");
    timerText.innerHTML = "Timer" + timeRemaining;

    if (timeRemaining <= 0) {
        window.clearInterval(timeTicks);
        window.alert("time expired");
    }
}

//buttons and listen 
var startButton = document.getElementById('clickMe')
startButton.addEventListener("click", startQuiz);
var submitButton = document.getElementById('answerButton')
submitButton.addEventListener("click", checkQuiz);

function startQuiz() {
    window.setInterval(updateTime, timeTicks);

    //show element by id 

    var quizArea = document.getElementById("quiz");
    quizArea.style.display = "block";

    displayNextQuestion();
}

function displayNextQuestion() {
    //set question text 
    var questionText = document.getElementById("question");
    questionText.innerHTML = question[questionIndex]["question"];

    //clear existing answer 
    var radioButtons = document.getElementsByName("answer");
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
    //populate radio button 
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");

    answer1.nextSibling.textContent = question[questionIndex]["answer"][0]["text"];
    answer2.nextSibling.textContent = question[questionIndex]["answer"][1]["text"];
    answer3.nextSibling.textContent = question[questionIndex]["answer"][2]["text"];
    answer4.nextSibling.textContent = question[questionIndex]["answer"][3]["text"];
}

function checkQuiz() {
    //determine correct answer
    var currentAnswers = question[questionIndex]["answer"];

    for (var i = 0; i < currentAnswers.length; i++) {
        if (currentAnswers[i]["correct"] === true) {
            var correctAnswer = currentAnswers[i]["text"];
        }
        console.log(correctAnswer);
    }

    //compare sel with correct 
    if (answer1.checked) {
        if (correctAnswer === answer1.nextSibling.textContent) {
            score += 1;
        }
        else {
            timeRemaining -= timePenalty;
        }
    }

   else if (answer2.checked) {
        if (correctAnswer === answer2.nextSibling.textContent) {
            score += 1;
        }
        else {
            timeRemaining -= timePenalty;
        }
    }

    else if (answer3.checked) {
        if (correctAnswer === answer3.nextSibling.textContent) {
            score += 1;
        }
        else {
            timeRemaining -= timePenalty;
        }
    }

   else if (answer4.checked) {
        if (correctAnswer === answer4.nextSibling.textContent) {
            score += 1;
        }
        else {
            timeRemaining -= timePenalty;
        }
    }


}

var question = [
    {
        question: "A property of an object that is a function is called a",
        answer: [
            { text: "method", correct: true },
            { text: "string", correct: false },
            { text: "stylesheet", correct: false },
            { text: "child", correct: false }
        ]
    },
    {
        question: "What does DOM stand for",
        answer: [
            { text: "Document Object Model", correct: true },
            { text: "Desktop Oriented Mode", correct: false },
            { text: "Digital Ordinance Model", correct: false },
            { text: "Do Orangutans Moo", correct: false }
        ]
    },
    {
        question: "What HTML attribute references and external JavaScript Files?",
        answer: [
            { text: "index", correct: false },
            { text: "src", correct: true },
            { text: "href", correct: false },
            { text: "id", correct: false }
        ]
    },
    {
        question: "Arrays in Javascript can be used to store?",
        answer: [
            { text: "numbers and strings", correct: false },
            { text: "other arrays", correct: false },
            { text: "Booleans", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of these values is NOT considered false? ",
        answer: [
            { text: "0", correct: false },
            { text: "'0'", correct: true },
            { text: "null", correct: false },
            { text: "''", correct: false }
        ]
    }

]