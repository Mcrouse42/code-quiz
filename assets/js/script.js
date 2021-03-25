var timer = 75;
var i = 0;
var initialScores = JSON.parse(localStorage.getItem("initialScores")) || [];
var countdown;

var viewHighScoresEl = document.querySelector(".view-high-scores");
var timerEl = document.querySelector("#time-left");
var startBtnEl = document.querySelector(".start-btn");
var timerContentEl = document.querySelector(".timer-container");
var headerContentEl = document.querySelector(".header-content");
var pageContentEl = document.querySelector("#page-content");

// Array for questions
var questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["1. <script>", "2. <js>", "3. <javascript>", "4. <scripting>"],
    answer: "1. <script>",
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    choices: [
      "1. The <head> section",
      "2. Both the <head> and <body> section",
      "3. The <body> section",
    ],
    answer: "3. The <body> section",
  },
  {
    title: "How do you create a function in JavaScript?",
    choices: [
      "1. function: myFunction()",
      "2. function myFunction()",
      "3. function = myFunction()",
    ],
    answer: "3. function = myFunction()",
  },
  {
    title: "How do you call a function named 'myFunction'? ",
    choices: [
      "1. call myFunction()",
      "2. myFunction()",
      "3. Call function myFunction()",
    ],
    answer: "2. myFunction()",
  },
  {
    title: "How does a for loop start?",
    choices: [
      "1. for (i<=5; i++)",
      "2. for i =1 to 5",
      "3. for (i = 0; i<= 5)",
      "4. for (i=0; i<=5; i++)",
    ],
    answer: "4. for (i=0; i<=5; i++)",
  },
];

// Function to load the landing page for the quiz
function loadLandingPage() {
    var quizTitleEl = document.createElement("h2");
    quizTitleEl.className = "title-question";
    quizTitleEl.textContent = "Coding Quiz Challenge";
    pageContentEl.appendChild(quizTitleEl);

    var quizDescriptionEl = document.createElement("p");
    quizDescriptionEl.className = "quiz-description";
    quizDescriptionEl.textContent = 'Answer all of the following coding-related questions within the time limit. If you choose the incorrect answer your score/time will be reduced by ten seconds!'
    pageContentEl.appendChild(quizDescriptionEl);

    var startBtnContainerEl = document.createElement("div");
    startBtnContainerEl.className = "start-btn-container";
    startBtnContainerEl.innerHTML = "<button class='start-btn'>Start Quiz</button>";
    pageContentEl.appendChild(startBtnContainerEl);
}

// Function to view High Scores when 'View High Scores' is clicked
function viewHighScores() {
  highScoresPage();
}

// This function runs when 'Start Quiz' is clicked in order to run startQuiz function
function startQuizClick(event) {
    var targetEl = event.target;
    if (targetEl.matches(".start-btn")) {
        startQuiz();
    }
}

function printQuestion() {
  // Clear landing page/main content
  document.getElementById("page-content").innerHTML = "";
  // Display question
  var questionEl = document.createElement("h2");
  questionEl.className = "title-question";
  questionEl.textContent = questions[i].title;
  pageContentEl.appendChild(questionEl);
  // Display choices
  var answersContainerEl = document.createElement("div");
  answersContainerEl.className = "answers-container";
  pageContentEl.appendChild(answersContainerEl);
  var answer1El = document.createElement("button");
  answer1El.className = "answers";
  answer1El.value = "1";
  answer1El.textContent = questions[i].choices[0];
  answersContainerEl.appendChild(answer1El);
  var answer2El = document.createElement("button");
  answer2El.className = "answers";
  answer2El.value = "2";
  answer2El.textContent = questions[i].choices[1];
  answersContainerEl.appendChild(answer2El);
  var answer3El = document.createElement("button");
  answer3El.className = "answers";
  answer3El.value = "3";
  answer3El.textContent = questions[i].choices[2];
  answersContainerEl.appendChild(answer3El);
  var answer4El = document.createElement("button");
  answer4El.className = "answers";
  answer4El.value = "4";
  answer4El.textContent = questions[i].choices[3];
  answersContainerEl.appendChild(answer4El);
}

// Function to start the quiz/timer and display the first question
function startQuiz() {
    timerEl.textContent = timer;
    countdown = setInterval(function() {
        timer--
        timerEl.textContent = timer;
        if (timer <= 0) {
            clearInterval(countdown);
            displayScore();
        }  
    },1000);
    printQuestion();
}

// Function to check answer
function checkAnswer(event) {
    var targetEl = event.target;
    if (targetEl.matches(".answers")) {
        console.log(questions[i].answer.charAt(0) === targetEl.value);
        if (questions[i].answer.charAt(0) === targetEl.value) {
            //print correct on screen for 1 second 
            i++;
            if (i < questions.length) {
                printQuestion();
                var correct = document.createElement("p");
                correct.className = "correct";
                correct.textContent = "Correct!";
                pageContentEl.appendChild(correct);
                setTimeout(function() {
                    correct.className = "hide";
                }, 2000);
                // clear p tag
            } else {
                clearInterval(countdown);
                displayScore();
                var correct = document.createElement("p");
                correct.className = "correct";
                correct.textContent = "Correct!";
                pageContentEl.appendChild(correct);
                setTimeout(function() {
                    correct.className = "hide";
                }, 2000);
            }
        } else {
            timer -= 10
            i++;
            if (i < questions.length) {
                printQuestion();
                var wrong = document.createElement("p");
                wrong.className = "wrong";
                wrong.textContent = "Wrong!";
                pageContentEl.appendChild(wrong);
                setTimeout(function() {
                    wrong.className = "hide";
                }, 2000);
            } else {
                clearInterval(countdown);
                displayScore();
                var wrong = document.createElement("p");
                wrong.className = "wrong";
                wrong.textContent = "Wrong!";
                pageContentEl.appendChild(wrong);
                setTimeout(function() {
                    wrong.className = "hide";
                }, 2000);
            }
        }
    }
}

// Function to finish quiz and display results
function displayScore() {
    document.getElementById("header-content").innerHTML = "";
    document.getElementById("page-content").innerHTML = "";
    var completedEl = document.createElement("h2");
    completedEl.className = "title-question";
    completedEl.textContent = "Quiz Completed!";
    pageContentEl.appendChild(completedEl);
    var finalScoreEl = document.createElement("p");
    finalScoreEl.className = "final-score";
    if (timer < 0) {
        timer = 0;
    }
    finalScoreEl.textContent = "Your final score is " + timer + "!";
    pageContentEl.appendChild(finalScoreEl);
    var initialsFormEl = document.createElement("form");
    initialsFormEl.className = "initials-form";
    initialsFormEl.innerHTML = '<label class="initials-label" for="name">Enter initials:</label>'
    pageContentEl.appendChild(initialsFormEl);
    var initialsInputEl = document.createElement("input");
    initialsInputEl.className = "initials-input";
    initialsFormEl.appendChild(initialsInputEl);
    var submitBtnEl = document.createElement("button");
    submitBtnEl.className = "submit-btn";
    submitBtnEl.textContent = "Submit";
    initialsFormEl.appendChild(submitBtnEl);
}

// Function to handle when user submits their initials for High Score
function initialSubmitHandler(event) {
    event.preventDefault();
    var initialsInput = document.querySelector(".initials-input").value.toUpperCase();
    var score = {
        initials: initialsInput,
        score: timer
    }
    initialScores.push(score);
    localStorage.setItem("initialScores", JSON.stringify(initialScores));
    highScoresPage();
}
