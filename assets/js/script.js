var quizIdCounter = 0;
var highScoresEl = document.querySelector("#high-scores");

var timerEl = document.querySelector("#timer");

var quizBodyEl = document.querySelector("#quiz-body");

var resultEl = document.querySelector("#result");

var currentQuestion = 0

let questionArr = [{
    id: "1",
    title: "Commonly used data types DO Not Include:",
    option: ["3. alerts", "2. booleans", "3. alerts", "4. numbers"],
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



var endQuiz = function() {
    quizBodyEl.innerHTML = "";

    var endStatusEl = document.createElement("div");
    endStatusEl.innerHTML = "<h3>" + "All done!" + "</h3><span>" + "Your final score is" + timerEl + "</span>";
    quizBodyEl.appendChild(endStatusEl);

    var enterInitialsEl = document.createElement("div");
    enterInitialsEl.innerHTML = "<input type='text' name='initials' class='text-input' placeholder='Enter Initials'/><button id='save-initials' type='submit' class='btn'>Submit</button>";
    quizBodyEl.appendChild(enterInitialsEl);
    console.log("quiz ended");
}

//timer
var startTimer = function() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        timerEl.textContent = `Time: ${timeLeft}`;
        timeLeft--;

        // if (correctEl.textContent = "Incorrect!") {
        //     timeLeft = timeLeft - 10;
        // }

        if (timeLeft === 0 || currentQuestion === questionArr.length) {
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

    var questionWrapperEl = document.createElement("div");
    questionWrapperEl.className = "question-wrapper";
    questionWrapperEl.setAttribute('data-answer', `${questionArr[currentQuestion].answer}`);
    optionWrapperEl.appendChild(questionWrapperEl);

    //buttons
    var buttonOneEl = document.createElement("button");
    buttonOneEl.className = "btn";
    buttonOneEl.textContent = questionArr[currentQuestion].option[0];
    questionWrapperEl.appendChild(buttonOneEl);
    
    var buttonTwoEl = document.createElement("button");
    buttonTwoEl.className = "btn";
    buttonTwoEl.textContent = questionArr[currentQuestion].option[1];
    questionWrapperEl.appendChild(buttonTwoEl);
    
    var buttonThreeEl = document.createElement("button");
    buttonThreeEl.className = "btn";
    buttonThreeEl.textContent = questionArr[currentQuestion].option[2];
    questionWrapperEl.appendChild(buttonThreeEl);
    
    var buttonFourEl = document.createElement("button");
    buttonFourEl.className = "btn";
    buttonFourEl.textContent = questionArr[currentQuestion].option[3];
    questionWrapperEl.appendChild(buttonFourEl);
    
    


 buttonOneEl.addEventListener("click", answerQuestion);
buttonTwoEl.addEventListener("click", answerQuestion);
buttonThreeEl.addEventListener("click", answerQuestion);
buttonFourEl.addEventListener("click", answerQuestion);
}




answerQuestion = function() {

    var dataAnswer = document.querySelector(".question-wrapper");
    console.log(dataAnswer.dataset.answer);
    
    var userValue = document.querySelector(".btn");
    console.log(userValue.textContent);

    
           
    if (dataAnswer === userValue) {
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
        
        
     }
    currentQuestion++;
     if (currentQuestion === questionArr.length) {
         endQuiz();
         
        
    } else {
        loadQuestion();
    }
  }

  





    //how does it switch to the next question?
//}

//var storeScore = function() {
    //localStorage.setItem("initials", JSON.stringify(initials));
    //localStorage.setItem("score" , JSON.stringify(timerEL.value));

    //load highscore page
    //window.location.href
//}


           








startButtonEl.addEventListener("click", startQuiz);
//delay to loading question. delay to event listener response


//submitButtonEl.addEventListener("click", storeScore);