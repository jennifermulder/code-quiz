var quizIdCounter = 0;
var highScoresEl = document.querySelector("#high-scores");

var timerEl = document.querySelector("#timer");

var quizBodyEl = document.querySelector("#quiz-body");

// var questionPrompt = ["Commonly used data types DO Not Include:", "A very useful tool used during development and debugging for printing content to the debugger is:", "Arrays in JavaScript can be used to store:", "String values must be enclosed within _______ when being assigned to variables.", "The condition in an if / else statement is enclosed with:"];
// var optionOne = ["1. strings", "1. JavaScript", "1. numbers and strings", "1. commas", "1. quotes"];
// var optionTwo = ["2. booleans", "2. terminal/bash", "2. other arrays", "2. curly brackets", "curly brackets"];
// var optionThree = ["3. alerts", "3. for loops", "3. booleans", "3. quotes", "3. parenthesis"];
// var optionFour = ["4. numbers", "4. console,log", "4. all of the above", "4. square brackets"];
// console.log(optionFour);


// var questionObj = {
//     question : questionPrompt,
//     option1: optionOne,
//     option2: optionTwo,
//     option3: optionThree,
//     option4: optionFour,
//     };


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
var quizDescripEl = document.createElement("h3");
quizDescripEl.textContent = "Coding Quiz Challenge";
quizBodyEl.appendChild(quizDescripEl);

var quizTitleEl = document.createElement("div");
quizTitleEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
quizBodyEl.appendChild(quizTitleEl);
console.log(quizTitleEl);

var startButtonEl = document.createElement("button");
startButtonEl.textContent = "Start Quiz";
quizBodyEl.appendChild(startButtonEl);



var endQuiz = function() {
    quizBodyEl.innerHTML = "";

    var endStatusEl = document.createElement("div");
    endStatusEl.innerHTML = "<h3>" + "All done!" + "</h3><span>" + "Your final score is" + timerEl + "</span>";
    quizBodyEl.appendChild(endStatusEl);

    var enterInitialsEl = document.createElement("div");
    enterInitialsEl.innerHTML = "<input type='text' name='initials' class='text-input' placeholder='Enter Initials'/><button id='save-initials' type='submit'>Submit</button>";
    quizBodyEl.appendChild(enterInitialsEl);
}

//timer
var startTimer = function() {
    var timeLeft = 30;

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

    var addQuestion = document.createElement("h3");
    addQuestion.textContent = questionArr[i].title;
    quizBodyEl.appendChild(addQuestion);

    var buttonOne = document.createElement("button");
    buttonOne.textContent = questionArr[i].option[0];
    quizBodyEl.appendChild(buttonOne);

    var buttonTwo = document.createElement("button");
    buttonTwo.textContent = questionArr[i].option[1];
    quizBodyEl.appendChild(buttonTwo);

    var buttonThree = document.createElement("button");
    buttonThree.textContent = questionArr[i].option[2];
    quizBodyEl.appendChild(buttonThree);

    var buttonFour = document.createElement("button");
    buttonFour.textContent = questionArr[i].option[3];
    quizBodyEl.appendChild(buttonFour);
        
    }
    let answerQuestion = function() {
        if (questionArr[i].option[i] === questionArr[i].answer) {
            var correctEl = document.createElement("h2");
            correctEl.textContent = "Correct!";
            quizBodyEl.appendChild(correctEl);
        } else {
            var incorrectEl = document.createElement("h2");
            incorrectEl.textContent = "Incorrect!";
            quizBodyEl.appendChild(incorrectEl);
               
            timerEl = timerEl - 10;
        }
        console.log(questionArr[i].option[i]);
      }
      answerQuestion();
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