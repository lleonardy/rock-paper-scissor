console.log("Rock-Paper-Scissor! ");

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() 
{
    const playerSelection = prompt("Enter your choice: [ rock | paper | scissor |");

    if (playerSelection === null){
        return null;
    }

    return playerSelection.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    
    const playerChoice = humanChoice;

    let result;

    if (playerChoice === computerChoice) {
        console.log(`Its a Tie! Both played ${playerChoice}`);
        result = "tie";
    } else if ( 
                (playerChoice === "rock" && computerChoice === "scissor") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}!`);

        humanScore++;
        result = "win";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);

        computerScore++;
        result = "lose";
    }

    return result;

}

function playGame() {

    const rounds = 5;

    console.log("Starting 5 round rock-paper-scissor game..");
    console.log("Input your choice when prompted: ");

    for (let i=1; i <= rounds; i++) {
        console.log(`Round ${i} of ${rounds} `);

        const playerSelection = getHumanChoice();

        if (playerSelection === null) {
            console.log("Game cancelled");
            return;
        }

        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        console.log(`Current Score: Player ${humanScore} | Computer ${computerScore} `);

    }

    console.log("Game over")
    if (humanScore > computerScore) {
        console.log(`You win! Final score: ${humanScore} to ${computerScore} `);
    } else if (humanScore < computerScore) {
        console.log(`You lose Final score: ${humanScore} to ${computerScore} `);
    } else {
        console.log(`The game ends in a TIE`);
    }
}

playGame();

