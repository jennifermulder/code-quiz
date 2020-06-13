var quizIdCounter = 0;
var highScoresEl = document.querySelector("#high-scores");

var timerEl = document.querySelector("#timer");

var quizBodyEl = document.querySelector("#quiz-body");


let questionArr = [{
    id: "1",
    title: "Commonly used data types DO Not Include:",
    option: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: ["3. alerts"]
}, {
    id: "2",
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    option: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console,log"],
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
    title: "Commonly used data types DO Not Include:",
    option: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: ["3. alerts"]
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



var endQuiz = function() {
    quizBodyEl.innerHTML = "";

    var endStatusEl = document.createElement("div");
    endStatusEl.innerHTML = "<h3>" + "All done!" + "</h3><span>" + "Your final score is" + timerEl + "</span>";
    quizBodyEl.appendChild(endStatusEl);

    var enterInitialsEl = document.createElement("div");
    enterInitialsEl.innerHTML = "<input type='text' name='initials' class='text-input' placeholder='Enter Initials'/><button id='save-initials' type='submit' class='btn'>Submit</button>";
    quizBodyEl.appendChild(enterInitialsEl);
}

//timer
var startTimer = function() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        timerEl.textContent = `Time: ${timeLeft}`;
        timeLeft--;

        if (timeLeft === 0) {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}


//when I click the start quiz button, load the first question
var startQuiz = function() {

    startTimer();

    loadQuestion();

    
}

var loadQuestion = function() {

    for (var i = 0; i < questionArr.length; i++){
    
    quizBodyEl.innerHTML = "";

    var quizWrapperEl = document.createElement("div");
    quizWrapperEl.className = "quiz-wrapper";
    quizBodyEl.appendChild(quizWrapperEl);

    var optionWrapperEl = document.createElement("div");
    optionWrapperEl.className = "option-wrapper";
    quizWrapperEl.appendChild(optionWrapperEl);

    var addQuestionEl = document.createElement("h3");
    addQuestionEl.textContent = questionArr[i].title;
    optionWrapperEl.appendChild(addQuestionEl);

    var questionWrapperEl = document.createElement("div");
    questionWrapperEl.className = "question-wrapper";
    optionWrapperEl.appendChild(questionWrapperEl);

    var buttonOneEl = document.createElement("button");
    buttonOneEl.setAttribute('type', "radio");
    buttonOneEl.className = "btn";
    buttonOneEl.textContent = questionArr[i].option[0];
    questionWrapperEl.appendChild(buttonOneEl);
    buttonOneEl.addEventListener("click", answerQuestion);
    console.log(buttonOneEl);

    var buttonTwoEl = document.createElement("button");
    buttonTwoEl.setAttribute('type', "radio");
    buttonTwoEl.className = "btn";
    buttonTwoEl.textContent = questionArr[i].option[1];
    questionWrapperEl.appendChild(buttonTwoEl);
    buttonTwoEl.addEventListener("click", answerQuestion);

    var buttonThreeEl = document.createElement("button");
    buttonThreeEl.setAttribute('type', "radio");
    buttonThreeEl.className = "btn";
    buttonThreeEl.textContent = questionArr[i].option[2];
    questionWrapperEl.appendChild(buttonThreeEl);
    buttonThreeEl.addEventListener("click", answerQuestion);

    var buttonFourEl = document.createElement("button");
    buttonFourEl.setAttribute('type', "radio");
    buttonFourEl.className = "btn";
    buttonFourEl.textContent = questionArr[i].option[3];
    questionWrapperEl.appendChild(buttonFourEl);
    buttonFourEl.addEventListener("click", answerQuestion);
        
    }
   
}

var userAnswer = [],


answerQuestion = function() {

       userAnswer.push(questionArr.option);

    if (userAnswer === questionArr.answer) {
        var correctEl = document.createElement("h2");
        correctEl.textContent = "Correct!";
        quizBodyEl.appendChild(correctEl);
    } else {
        var incorrectEl = document.createElement("h2");
        incorrectEl.textContent = "Incorrect!";
        quizBodyEl.appendChild(incorrectEl);
           
        timerEl = timerEl - 10;
    }
    
  }

  





    //how does it switch to the next question?
//}

//var storeScore = function() {
    //localStorage.setItem("initials", JSON.stringify(initials));
    //localStorage.setItem("score" , JSON.stringify(timerEL.value));
//}


           








startButtonEl.addEventListener("click", startQuiz);
//delay to loading question. delay to event listener response

quizBodyEl.addEventListener("click", loadQuestion);

//submitButtonEl.addEventListener("click", storeScore);