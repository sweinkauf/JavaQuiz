// TODO: Start Button, Questions, right, wrong, timer, high score page
const question = document.getElementById("question")
const choices = Array.from(document.getElementsByClassName("choice-text"))
console.log(choices)

var currentQuestion = {};
var acceptingAnswer = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: "Inside which HTML element do we put JavaScript?",
        choice1: "<scipt>",
        choice2: "<./js>",
        choice3: "<javascript>",
        choice4: "<java>",
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called 'game.js'",
        choice1: "<script href='game.js'",
        choice2: "<link href='game.js'",
        choice3: "<script link='game.js'",
        choice4: "<script src='gmae.js'",
        answer: 4
    },
    {
        question: "How do you write 'Hello, It's Me' in an alert box",
        choice1: "alertBox('Hello, It's Me')",
        choice2: "alert('Hello, It's Me')",
        choice3: "alertMsg(Hello, It's Me')",
        choice4: "alert='Hello, It's Me'",
        answer: 2
    },  
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    console.log(availableQuestions)
    getNewQuestion();
};

function getNewQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

};

startGame();