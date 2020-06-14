var scoreHolderEl = document.querySelector("#scores");
console.log(scoreHolderEl);

var loadScoreEl = function() {
     localStorage.getItem("initials", JSON.parse(initials));
     localStorage.getItem("score", JSON.parse(timeLeft));
}

var loadScoreValueEl = loadScoreEl.value;

scoreHolderEl.appendChild(loadScoreValueEl);


