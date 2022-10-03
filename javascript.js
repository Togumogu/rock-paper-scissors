let playerScore 
let computerScore 
let winner = ""

function round(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie!")
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}!`)
        } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`)
        } else {
            console.log("Enter either rock, paper or scissors!")
        }


    }

function getComputerChoice() {
    getComputerChoice = Math.floor(Math.random() * 3)
    if (getComputerChoice === 0) {
        return computerSelection = "Scissors" 
    } else if (getComputerChoice === 1) {
        return computerSelection = "Rock"
    } else if (getComputerChoice === 2) {
        return computerSelection = "Paper"
    }

}

