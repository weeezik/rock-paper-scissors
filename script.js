// console.log("Hello world!");

function getComputerChoice (){
    let computerSelection = "";
    let computerNumber = Math.floor(Math.random()*3);
    let result = computerNumber;
    if (result===0) {
        computerSelection = "rock"
    } else if (result===1) {
        computerSelection = "paper"
    } else if (result===2) {
        computerSelection = "scissors"
    }
    console.log(computerSelection);
    return computerSelection;
}

function getUserChoice (){
   playerSelection1 = prompt("Type your throw! Rock, paper, or scissors?");
    //remove spaces
    let playerSelection2 = playerSelection1.replace(" ", "");
    //make all lower case. pretty sure the function is string.toLowerCase()
    let playerSelection = playerSelection2.toLowerCase();
   console.log(playerSelection);
   return playerSelection;
}


getUserChoice();
getComputerChoice();

function playRound (playerSelection, computerSelection) {
    


}
    















