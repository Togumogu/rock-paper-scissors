//Score System

let playerScore = 0
let computerScore = 0

//Computer Randomized Choice

function getComputerChoice() {
    let computerSelection = ""
    let randomSelection = Math.floor(Math.random() * 3)
    if (randomSelection === 0) {
        computerSelection = "rock"
    } else if (randomSelection === 1) {
        computerSelection = "scissors"
    } else if (randomSelection === 2) {
        computerSelection = "paper"
    }
    return computerSelection
}

//Player Choice

function getPlayerChoice() {
    let playerSelection = prompt("Rock, paper or scissors?")
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection
    } else {
        return "Please enter either rock, paper or scissors!"
    }
}

//A Single Round of Rock-Paper-Scissors

function singleRound(playerSelection,computerSelection) {
    

   
    if (playerSelection === computerSelection) {
        return "Tie"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            return `You Win! ${playerSelection} beats ${computerSelection}!`
            playerScore++
        } else if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")
        ) {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`
            computerScore++
        } else {
            return "Something went wrong!"
        }
    
    checkScore()

}
    
//Score Check

function checkScore() {
    if ((playerScore < 5) && (computerScore < 5)) {
        singleRound()
    } else {
        endgame()
    }
}

//Endgame

function endgame() {
    if (playerScore === 5) {
        return "Game is over! You Win"
    } else if (computerScore === 5) {
        return "Game is over! You Lose"
    }
    playerScore = 0
    computerScore = 0
}   