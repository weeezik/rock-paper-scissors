//DOM Manipulation

const buttondiv = document.createElement('div');
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


let playerSelection;
function getUserChoice (){
    rockbtn.addEventListener('click', () => {
        console.log("Rock was clicked");
        let playerSelection = "rock";
        return playerSelection;
    });
    paperbtn.addEventListener('click', () => {
        let playerSelection = "paper";
        return playerSelection;
    });
    scissorsbtn.addEventListener('click', () => {
        let playerSelection = "scissors";
        return playerSelection;
    });    
}

//Calculate computer choice
let computerSelection;
function getComputerChoice (){
    let computerNumber = Math.floor(Math.random()*3);
    let result = computerNumber;
    if (result===0) {
        computerSelection = "rock"
    } else if (result===1) {
        computerSelection = "paper"
    } else if (result===2) {
        computerSelection = "scissors"
    }
    return computerSelection;
}


let roundResult;
function playRound () {
    getComputerChoice();
    getUserChoice();
    console.log("User: " + playerSelection + "   " + "Computer: " + computerSelection);
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

// buttondiv.addEventListener('click', playRound);



//THE CODE BELOW (FOR PLAYING MORE THAN ONE ROUND)
// let playerScore;
// let computerScore;
// let finalResult;
            //may have to make roundResult a parameter for the playGame function
// function playGame () {
//     playerScore = 0;
//     computerScore = 0;
//     function iterationLogic () {
//             if (roundResult==="win") {
//                 ++playerScore;
//             } else if (roundResult==="lose") {
//                 ++computerScore;
//             } else if (roundResult==="tie") {
//                 //console.log("tie");
//             }
//         }
//         //1
//         playRound();
//         iterationLogic();        

//         let finalResult = Math.max(playerScore, computerScore);
//         if (finalResult===playerScore) {
//             console.log("Congratulations! You beat the computer in Rock, Paper, Scissors!")
//         } else {
//             console.log("Oh no! Looks like you lost to the computer :(")
//         }
    
//     }

// playGame();




















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











