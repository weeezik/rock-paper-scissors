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

// console.log("Before function call: " + playerSelection, computerSelection);


let roundResult;
function playRound () {
    console.log("User: " + playerSelection + "   " + "Computer: " + computerSelection);

    if (playerSelection===computerSelection) {
        console.log("IT'S A TIE, GO AGAIN!");
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

let finalResult;
let playerScore;
let computerScore;

function playGame () {
        playerScore = 0;
        computerScore = 0;
        let i=0;
        
        if (i<5) {
        playRound();    
        ++i;

        if (roundResult==="win") {
            ++playerScore;
        } else if (roundResult==="lose") {
            ++computerScore;
        } else if (roundResult==="tie") {
            console.log("tie");
            }
        }
        
    }
playGame();
console.log(playerScore);
console.log(computerScore);















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











