var highScoresEl = document.querySelector("#high-scores");
var timerEl = document.querySelector("#timer");
var quizBodyEl = document.querySelector("#quiz-body");
var resultEl = document.querySelector("#result");

var timeInterval;
var enterInitialsEl;
var timeLeft = 60;
var currentQuestion = 0;


// All questions
let questionArr = [{
    id: "1",
    title: "Commonly used data types DO Not Include:",
    option: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: ["3. alerts"]
}, {
    id: "2",
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    option: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    answer: ["4. console,log"]
}, {
    id: "3",
    title: "Arrays in JavaScript can be used to store:",
    option: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: ["4. all of the above"]
}, {
    id: "4",
    title: "String values must be enclosed within _______ when being assigned to variables.",
    option: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    answer: ["3. quotes"]
}, {
    id: "5",
    title: "The condition in an if / else statement is enclosed with:",
    option: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    answer: ["3. parenthesis"]
}]

//start page set up
var instructionWrapperEl = document.createElement("div");
instructionWrapperEl.className = "instruction-wrapper";
quizBodyEl.appendChild(instructionWrapperEl);

var quizDescripEl = document.createElement("h3");
quizDescripEl.textContent = "Coding Quiz Challenge";
instructionWrapperEl.appendChild(quizDescripEl);

var quizTitleEl = document.createElement("div");
quizTitleEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
instructionWrapperEl.appendChild(quizTitleEl);

var startButtonEl = document.createElement("button");
startButtonEl.className = "btn";
startButtonEl.textContent = "Start Quiz";
instructionWrapperEl.appendChild(startButtonEl);


// end quiz and setup score input
var endQuiz = function() {
    quizBodyEl.innerHTML = "";

    timerEl.textContent = "";

    var endStatusEl = document.createElement("div");
    endStatusEl.innerHTML = `<h3> All done! </h3><span> Your final score is ${timeLeft} </span>`;
    quizBodyEl.appendChild(endStatusEl);

    enterInitialsEl = document.createElement("div");
    enterInitialsEl.innerHTML = `<input type='text' name='initials' id='initials' class='text-input' placeholder='Enter Initials'/>`;
    console.log(enterInitialsEl);
    quizBodyEl.appendChild(enterInitialsEl);

    var submitButtonEl = document.createElement("button");
    submitButtonEl.className = "btn";
    submitButtonEl.textContent = "Submit";
    submitButtonEl.addEventListener("click", storeScore);
    enterInitialsEl.appendChild(submitButtonEl);
    
    clearInterval(timeInterval);
}

//timer
var startTimer = function() {
    
    timeInterval = setInterval(function() {
        timerEl.textContent = `Time: ${timeLeft}`;
        timeLeft--;      

        if (timeLeft <= 0) {
            endQuiz();
        };      
    }, 1000);
}


//when I click the start quiz button, start the timer and load the first question
var startQuiz = function() {

    startTimer();

    loadQuestion();

    
}

var loadQuestion = function() {
     
    quizBodyEl.innerHTML = "";

    var quizWrapperEl = document.createElement("div");
    quizWrapperEl.className = "quiz-wrapper";
    quizBodyEl.appendChild(quizWrapperEl);

    var optionWrapperEl = document.createElement("div");
    optionWrapperEl.className = "option-wrapper";
    quizWrapperEl.appendChild(optionWrapperEl);

    var addQuestionEl = document.createElement("h3");
    addQuestionEl.textContent = questionArr[currentQuestion].title;
    optionWrapperEl.appendChild(addQuestionEl);

    //assigns the correct answer as an attribute to be used in conditional below
    var questionWrapperEl = document.createElement("div");
    questionWrapperEl.className = "question-wrapper";
    questionWrapperEl.setAttribute('data-answer', `${questionArr[currentQuestion].answer}`);
    
    optionWrapperEl.appendChild(questionWrapperEl);

    //buttons
    var buttonOneEl = document.createElement("button");
    buttonOneEl.className = "btn";
    buttonOneEl.textContent = questionArr[currentQuestion].option[0];
    buttonOneEl.setAttribute('value', `${questionArr[currentQuestion].option[0]}`);
    questionWrapperEl.appendChild(buttonOneEl);
    
    var buttonTwoEl = document.createElement("button");
    buttonTwoEl.className = "btn";
    buttonTwoEl.textContent = questionArr[currentQuestion].option[1];
    buttonTwoEl.setAttribute('value', `${questionArr[currentQuestion].option[1]}`);
    questionWrapperEl.appendChild(buttonTwoEl);
    
    var buttonThreeEl = document.createElement("button");
    buttonThreeEl.className = "btn";
    buttonThreeEl.textContent = questionArr[currentQuestion].option[2];
    buttonThreeEl.setAttribute('value', `${questionArr[currentQuestion].option[2]}`);
    questionWrapperEl.appendChild(buttonThreeEl);
    
    var buttonFourEl = document.createElement("button");
    buttonFourEl.className = "btn";
    buttonFourEl.textContent = questionArr[currentQuestion].option[3];
    buttonFourEl.setAttribute('value', `${questionArr[currentQuestion].option[3]}`);
    questionWrapperEl.appendChild(buttonFourEl);
    
    //event listeners for buttons
    buttonOneEl.addEventListener("click", answerQuestion);
    buttonTwoEl.addEventListener("click", answerQuestion);
    buttonThreeEl.addEventListener("click", answerQuestion);
    buttonFourEl.addEventListener("click", answerQuestion);
}

// compares the user answer to the correct answer
answerQuestion = function(event) {
    
    var dataAnswer = document.querySelector(".question-wrapper").dataset.answer;
    var userValue = event.target.value;
          
    if (dataAnswer == userValue) {
        resultEl.innerHTML = "";
        console.log("correct")
        var correctEl = document.createElement("h2");
        correctEl.textContent = "Correct!";
        resultEl.appendChild(correctEl);
    } else { 
        resultEl.innerHTML = "";
        console.log("incorrect")
        var correctEl = document.createElement("h2");
        correctEl.textContent = "Incorrect!";
        resultEl.appendChild(correctEl);
        
        if (correctEl.textContent = "Incorrect!") {
            timeLeft = timeLeft - 10;
            if (timeLeft < 0) {
                timeLeft = 0;
            }
        }
     }

    currentQuestion++;
     if (currentQuestion === questionArr.length) {
         endQuiz();  
    } else {
        loadQuestion();
    }
  }

  
   
//store high score
var storeScore = function() {
    var initials = document.getElementById("initials").value;
    console.log(initials);

    localStorage.setItem("initials", initials);
    localStorage.setItem("score" , JSON.stringify(timeLeft));
}



//start quiz when button is clicked
startButtonEl.addEventListener("click", startQuiz);



