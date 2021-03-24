var timer = 75;

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
