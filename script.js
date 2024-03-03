//DOM Manipulation
//Buttons
const buttondiv = document.createElement("div");
document.body.appendChild(buttondiv);
const rockbtn = document.createElement("button");
const paperbtn = document.createElement("button");
const scissorsbtn = document.createElement("button");

buttondiv.appendChild(rockbtn);
buttondiv.appendChild(paperbtn);
buttondiv.appendChild(scissorsbtn);

rockbtn.textContent = "Rock";
paperbtn.textContent = "Paper";
scissorsbtn.textContent = "Scissors";

//Score Counter Div
const score = document.createElement("div");
document.body.appendChild(score);
// score.textContent = "Player Score: " + playerScore + " " + "Computer Score:" + computerScore;


//Result Div
const results = document.createElement("div");
results.classList.add("results");
document.body.appendChild(results);
let textResult = "";
results.textContent = textResult;

//Functions micro

//Calculate computer choice
let computerSelection;
function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3);
    let result = computerNumber;
    //change to switch statement
    if (result === 0) {
        computerSelection = "rock"
    } else if (result === 1) {
        computerSelection = "paper"
    } else if (result === 2) {
        computerSelection = "scissors"
    }
    return computerSelection;
}

function endGame(playerScore, computerScore) {
    let winner = Math.max(playerScore, computerScore);
    if (winner == playerScore) {
        results.textContent = "You beat the computer!";
    } else if (winner == computerScore) {
        results.textContent = "The computer beat you!";
    } else {
        results.textContent = "ERROR"
    }
}

let playerScore = 0;
let computerScore = 0;
let roundResult;
function playRound(playerSelection) {
    getComputerChoice();
    console.log("User: " + playerSelection + "   " + "Computer: " + computerSelection);
    if (playerSelection === computerSelection) {
        results.textContent = "IT'S A TIE";
        roundResult = "tie";
        return roundResult;
        //RESET, no scores awarded 
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        results.textContent = "YOU WIN!!! :)";
        roundResult = "win";
        playerScore++;
        return roundResult + playerScore + computerScore;

    } else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "rock")) {
        results.textContent = "YOU LOST THIS ONE :(";
        roundResult = "lose";
        computerScore++;
        return roundResult + playerScore + computerScore;
    }
}
//playRound function is played on a click of one of the buttons. depending on the button, the user choice is set as the player selection 
//(i.e., if user chooses rock button, the playerSelection variable is set to "rock")
let playerSelection;
rockbtn.addEventListener('click', () => {
    let playerSelection = "rock";
    if (playerScore !=5 && computerScore !=5) {
        playRound(playerSelection);
        score.textContent = "Player Score: " + playerScore + "   " + "Computer Score: " + computerScore;
    } else {
        endGame(playerScore, computerScore)
    }
    
});
paperbtn.addEventListener('click', () => {
    let playerSelection = "paper";
    if (playerScore !=5 && computerScore !=5) {
        playRound(playerSelection);
        score.textContent = "Player Score: " + playerScore + "   " + "Computer Score: " + computerScore;
    } else {
        endGame(playerScore, computerScore)
    }
    

});
scissorsbtn.addEventListener('click', () => {
    let playerSelection = "scissors";
    if (playerScore !=5 && computerScore !=5) {
        playRound(playerSelection);
        score.textContent = "Player Score: " + playerScore + "   " + "Computer Score: " + computerScore;
    } else {
        endGame(playerScore, computerScore)
    }

});

// let playerScore = 0;
// let computerScore = 0;
// if (playerScore !=5 && computerScore !=5) {




// } else {endGame();}






