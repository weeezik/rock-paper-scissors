// console.log("Hello world!");

let computerSelection;
function getComputerChoice (){
    // let computerSelection = "";
    let computerNumber = Math.floor(Math.random()*3);
    let result = computerNumber;
    if (result===0) {
        computerSelection = "rock"
    } else if (result===1) {
        computerSelection = "paper"
    } else if (result===2) {
        computerSelection = "scissors"
    }
    // console.log(computerSelection);
    return computerSelection;
}

let playerSelection;
function getUserChoice (){
    playerSelection1 = prompt("Type your throw! Rock, paper, or scissors?");
    //remove spaces
    playerSelection2 = playerSelection1.replace(" ", "");
    //make all lower case. pretty sure the function is string.toLowerCase()
    playerSelection = playerSelection2.toLowerCase();

    return playerSelection;
}


getComputerChoice();
getUserChoice();

console.log("Before function call: " + playerSelection, computerSelection);


let roundResult;
function playRound () {
    console.log("In function call: " + "User " + playerSelection + "   " + "Computer " + computerSelection);

    if (playerSelection===computerSelection) {
        alert("It's tie! Go again.");
        roundResult = "tie";
        return roundResult;
    } else if ((playerSelection==="rock" && computerSelection==="scissors") || (playerSelection==="scissors" && computerSelection==="paper") || (playerSelection==="paper" && computerSelection==="rock")) {
        alert("You win!!!");
        roundResult = "win";
        return roundResult;
    } else if ((computerSelection==="rock" && playerSelection==="scissors") || (computerSelection==="scissors" && playerSelection==="paper") || (computerSelection==="paper" && playerSelection==="rock")) {
        alert("You lost this won :(");
        roundResult = "lose";
        return roundResult;
    }
}

playRound();
console.log(roundResult);








    















