const buttons = document.querySelectorAll('button');
const resultEl = document.querySelector('#result');
const playerScoreEl = document.querySelector('#user-score');
const computerScoreEl = document.querySelector('#computer-score');




buttons.forEach(button => {
    button.addEventListener('click', () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
    });
});


function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const comRandomChoice = Math.floor(Math.random() * choices.length);

    return choices[comRandomChoice];

    // let computerSelection = Math.floor(Math.random() * 3);
    // switch (computerSelection) {
    //     case 0:
    //         return "rock";
    //     case 1:
    //         return "paper";
    //     case 2:
    //         return "scissors";
    // }
}
    let playerScore = 0;
    let computerScore = 0;

function playRound(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
      ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return `You win! ${player} beats ${computer}"`
      } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return `You lose! ${computer} beats ${player}"`
      }
    }