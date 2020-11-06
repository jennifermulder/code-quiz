var scoreHolderEl = document.querySelector("#initials");
var scoreHolderE2 = document.querySelector("#scores");
var goBackEl = document.querySelector("#go-back");
var clearStorageEl = document.querySelector("#clear");

//load high scores to the view high scores page
var loadHighScores = function () {
    scoreHolderEl.innerHTML = `<h3>1.${localStorage.getItem("initials")}</h3>`;
    scoreHolderE2.innerHTML = `<h3>-${localStorage.getItem("score")}</h3>`;
}

goBackEl.innerHTML = `<button class='btn' onclick="window.location.href='./index.html';">Go Back</button>`;
clearStorageEl.innerHTML = `<button class='btn' onclick="deleteItems()">Clear Items</button>`;

function deleteItems() {
    localStorage.clear();
}

loadHighScores();

