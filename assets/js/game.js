// TODO: Start Button, Questions, right, wrong, timer, high score page
const question = document.getElementById("question")
const choices = Array.from(document.getElementsByClassName("choice-text"))
const timer = document.getElementById('timer')
const scoreText =document.getElementById('score')

var currentQuestion = {};
var acceptingAnswer = false;
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
const MAX_QUESTIONS = 8;

function startGame() {
    questionCounter = 0;
    score = 0;
    getNewQuestion();
};

function getNewQuestion() {
    if (questions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("recentScore", score);

        return window.location.assign("/finalscore.html")
    } 

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswer = true;

};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswer) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }
        
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
        
        getNewQuestion();
    });
} );

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();