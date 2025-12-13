console.log("Rock-Paper-Scissor! ");

let humanScore = 0;
let computerScore = 0;

const scoreDisplay = document.querySelector("#score");
const messageDisplay = document.querySelector("#message");
const buttons = document.querySelectorAll("button");
const btnRestart = document.querySelector("#btnRestart");

function getComputerChoice() 
{
    const randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "rock";
    }else if (randomNumber < 2/3) {
        return "paper";
    }else {
        return "scissor";
    }
}

function playRound(humanChoice) 
{
    if (humanScore >= 5 || computerScore >= 5) return;

    const computerChoice = getComputerChoice();

    if(humanChoice === computerChoice) {
        messageDisplay.textContent = `Tie! you both chose ${humanChoice}`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        messageDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        messageDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    scoreDisplay.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    checkWinner();

}

function checkWinner() {
    if (humanScore === 5) {
        messageDisplay.textContent = `You win the game! you reached 5 points`;
        messageDisplay.style.color = `green`;
        endGame();
    } else if (computerScore === 5) {
        messageDisplay.textContent = `You lose! computer reached 5 points`;
        messageDisplay.style.color = "red";
        endGame();
    }
}

function endGame() {
    buttons.forEach(btn => btn.disabled = true);
    btnRestart.style.display = `block`;

    btnRestart.disabled = false;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    scoreDisplay.textContent = "Player: 0 - Computer: 0";
    messageDisplay.textContent = "";
    messageDisplay.style.color = "black";

    buttons.forEach(btn => btn.disabled = false);

    btnRestart.style.display = `none`;
}

document.querySelector("#btnRock").addEventListener("click", () => {
    playRound("rock");
});

document.querySelector("#btnPaper").addEventListener("click", () => {
    playRound("paper");
});

document.querySelector("#btnScissor").addEventListener("click", () => {
    playRound("scissor");
});

document.querySelector("#btnRestart").addEventListener("click", () => {
    resetGame();
});


