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

    //Result Div
    const results = document.createElement("div");
    results.classList.add("results");
    document.body.appendChild(results);
    let textResult = "";
    results.textContent = textResult;

//Functions micro

    //Calculate computer choice
let computerSelection;
function getComputerChoice (){
    let computerNumber = Math.floor(Math.random()*3);
    let result = computerNumber;
    //change to switch statement
    if (result===0) {
        computerSelection = "rock"
    } else if (result===1) {
        computerSelection = "paper"
    } else if (result===2) {
        computerSelection = "scissors"
    }
    return computerSelection;
}

    //play one round of rps
let roundResult;
function playRound (playerSelection) {
    getComputerChoice();
    console.log("User: " + playerSelection + "   " + "Computer: " + computerSelection);
    if (playerSelection===computerSelection) {
        results.textContent = "IT'S A TIE";
        roundResult = "tie";
        return roundResult;
    } else if ((playerSelection==="rock" && computerSelection==="scissors") || (playerSelection==="scissors" && computerSelection==="paper") || (playerSelection==="paper" && computerSelection==="rock")) {
        results.textContent = "YOU WIN!!! :)";
        roundResult = "win";
        return roundResult;
    } else if ((computerSelection==="rock" && playerSelection==="scissors") || (computerSelection==="scissors" && playerSelection==="paper") || (computerSelection==="paper" && playerSelection==="rock")) {        results.textContent = "YOU LOST THIS ONE :(";
        roundResult = "lose";
        return roundResult;
    }
}

//Iteration logic for playing more than one round
let playerScore;
let computerScore;
function iterationLogic () {
                if (roundResult==="win") {
                    ++playerScore;
                } else if (roundResult==="lose") {
                    ++computerScore;
                } else if (roundResult==="tie") {
                    //console.log("tie");
                }
            }


//Functions macro
let playerSelection;
    rockbtn.addEventListener('click', () => {
        // console.log("Rock was clicked");
        let textResult = "Rock was clicked";
        let playerSelection = "rock";
        playRound(playerSelection); 
        iterationLogic();
    });
    paperbtn.addEventListener('click', () => {
        console.log("Paper was clicked")
        let playerSelection = "paper";
        playRound(playerSelection);
    });
    scissorsbtn.addEventListener('click', () => {
        console.log("Scissors was clicked")
        let playerSelection = "scissors";
        playRound(playerSelection);
    });



    
    // score.style.backgroundColor = "hotpink";
    score.textContent = "Player Score: " + playerScore + " " + "Computer Score:" + computerScore;
        
        
    



    


























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










