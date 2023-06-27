const btnEl = document.getElementById('btn');
const diceEl = document.getElementById('dice');
const historyEl = document.getElementById('history');

let historyList = [];

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceImage = getDiceImage(randomNumber);
    diceEl.innerHTML = diceImage;
    historyList.push(randomNumber);
    updateRollHistory();
}

function updateRollHistory() {
    historyEl.innerHTML = '';
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceImage(historyList[i])}</span>`;
        historyEl.appendChild(listItem);
    }
  
}

function getDiceImage(randomNumber) {
    switch (randomNumber) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

btnEl.addEventListener('click', () => {
    diceEl.classList.add('roll-animation');
    setTimeout(() => {
        diceEl.classList.remove('roll-animation');
        rollDice();
    }, 1000);
});

