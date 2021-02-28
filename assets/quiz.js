//quiz hame that starts with button click, runs a timer 
// has 5 quesitons, multipule choice, each answer moves to the net question 
//incorrect aswers detract time 
// shows high score 
// use localstorage to save high scores 
//boiler plate html link to bootstrap css jss 
// eventListener, jquery. setTime
//on.click 
//display none Display: block

var startButton = document.getElementById('clickMe')
startButton.addEventListener("click", StartQuiz);

function StartQuiz() {
    setNextQuestion()
}

function NextQuestion() {

}

var question = [
    {
        question: "A property of an object that is a function is called a",
        answer: [
            { text: "method", correct: true},
            { text: "string", correct: false},
            { text: "stylesheet", correct: false},
            { text: "child", correct:false}
        ]
    },
    {
        question: "What does DOM stand for", 
        answer: [
            { text: "Document Object Model", correct: true},
            { text: "Desktop Oriented Mode", correct: false},
            { text: "Digital Ordinance Model", correct: false},
            { text: "Do Orangutans Moo", correct: false}
        ]
    },
    {
        question: "What HTML attribute references and external JavaScript Files?",
        answer: [
            { text: "index", correct: false},
            { text: "src", correct: true},
            { text: "href", correct: false},
            { text: "id", correct: false}
        ]
    },
    {
        question: "Arrays in Javascript can be used to store?",
        answer: [
            { text: "numbers and strings", correct: false},
            { text: "other arrays", correct: false},
            { text: "Booleans", correct: false},
            { text: "All of the above", correct: true}
        ]
    },
    {
        question: "Which of these values is NOT considered false? "
        answer: [
            { text: "0", correct: false },
            { text: "'0'", correct: true},
            { text:"null", correct:false},
            { text:"''", correct:false}
        ]
    }

]