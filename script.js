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


// getComputerChoice();
// getUserChoice();

// console.log("Before function call: " + playerSelection, computerSelection);


let roundResult;
function playRound () {
    getComputerChoice();
    getUserChoice();
    // console.log("User: " + playerSelection + "   " + "Computer: " + computerSelection);
    if (playerSelection===computerSelection) {
        console.log("IT'S A TIE!");
        roundResult = "tie";
        return roundResult;
    } else if ((playerSelection==="rock" && computerSelection==="scissors") || (playerSelection==="scissors" && computerSelection==="paper") || (playerSelection==="paper" && computerSelection==="rock")) {
        console.log("YOU WIN!!! :)");
        roundResult = "win";
        return roundResult;
    } else if ((computerSelection==="rock" && playerSelection==="scissors") || (computerSelection==="scissors" && playerSelection==="paper") || (computerSelection==="paper" && playerSelection==="rock")) {
        console.log("YOU LOST THIS ONE :(");
        roundResult = "lose";
        return roundResult;
    }
}

// playRound();
// console.log(roundResult);


let playerScore;
let computerScore;
let finalResult;

function playGame () {
    playerScore = 0;
    computerScore = 0;
    function iterationLogic () {
            if (roundResult==="win") {
                ++playerScore;
            } else if (roundResult==="lose") {
                ++computerScore;
            } else if (roundResult==="tie") {
                //console.log("tie");
            }
        }
        //1
        playRound();
        iterationLogic();
        //2
        playRound();
        iterationLogic();
        //3
        playRound();
        iterationLogic();
        //4
        playRound();
        iterationLogic();
        //5
        playRound();
        iterationLogic();

        

        let finalResult = Math.max(playerScore, computerScore);
        if (finalResult===playerScore) {
            console.log("Congratulations! You beat the computer in rock paper scissors!")
        } else {
            console.log("Ruh roh :( Looks like you lost to the computer.")
        }
    
    }

playGame();




// console.log(playerScore);
// console.log(computerScore);















//1
            //iteration attempt at function
    // playRound();
    // ++i;

    // if (roundResult==="win") {
    //     ++playerScore;
    // } else if (roundResult==="lose") {
    //     ++computerScore;
    // } else if (roundResult==="tie") {
    //     console.log("tie");
    // }

  
            //original playgame function
    


//for loop attempt
        // for (let step = 0; step < 5; step++) {
        //     playRound();    
        //     if (roundResult==="win") {
        //         ++playerScore;
        //     } else if (roundResult==="lose") {
        //         ++computerScore;
        //     } else if (roundResult==="tie") {
        //         console.log("tie");
        //     }
        // }











