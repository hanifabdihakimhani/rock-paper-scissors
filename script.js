console.log('Hello World');

function getComputerChoice() {
    compChoice = Math.floor(Math.random()*3);
    switch(compChoice) {
        case 0:
            return compChoice = "paper";
        case 1:
            return compChoice = "rock";
        case 2:
            return compChoice = "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Draw";
    }else if(playerSelection === "rock") {
        if(computerSelection === "scissor") {
            return "You Win";
        }else {
            return "You Lose";
        }
    }else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "You Win";
        }else {
            return "You Lose";
        }
    }else {
        if(computerSelection === "paper") {
            return "You Win";
        }else {
            return "You Lose";
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose : ");
        const computerSelection = getComputerChoice(); 
        console.log(playRound(playerSelection, computerSelection));
    }
}
