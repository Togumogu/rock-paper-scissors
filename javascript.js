//Score System

let playerScore = 0
let computerScore = 0

//Computer Randomized Choice

function getComputerChoice() {
    let computerChoice = ""
    let randomSelection = Math.floor(Math.random() * 3)
    if (randomSelection === 0) {
        computerChoice = "rock"
    } else if (randomSelection === 1) {
        computerChoice = "scissors"
    } else if (randomSelection === 2) {
        computerChoice = "paper"
    }
    return computerChoice
}

//Player Choice

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper or scissors?", "")
    playerChoice = playerChoice.toLowerCase()
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice
    } else {
        return "Please enter either rock, paper or scissors!"
    }
}

//A Single Round of Rock-Paper-Scissors

function singleRound(playerChoice,computerChoice) {
   

    if (playerChoice === computerChoice) {
        return "Tie"
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            return `You Win! ${playerChoice} beats ${computerChoice}!`
            playerScore++
        } else if (
        (playerChoice === "scissors" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors")
        ) {
            return `You Lose! ${computerChoice} beats ${playerChoice}!`
            computerScore++
        } else {
            return "Something went wrong!"
        }

//Game of Rock Paper Scissors

function rockPaperScissors() {
    for (let i = 1, i < 6, i++) {
        playerSelection = getPlayerChoice()
        computerSelection = getComputerChoice()
        singleRound()
    }
}