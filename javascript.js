//Score System

let playerScore = 0
let computerScore = 0

//Computer Randomized Choice

function getComputerChoice() {
    let computerSelection = ""
    let randomSelection = Math.floor(Math.random() * 3)
    if (randomSelection === 0) {
        computerSelection = "Rock"
    } else if (randomSelection === 1) {
        computerSelection = "Scissors"
    } else if (randomSelection === 2) {
        computerSelection = "Paper"
    }
    return computerSelection
}

//Player Choice

function pl

//A Single Round of Rock-Paper-Scissors

function singleRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie!")
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore +=
            console.log(`You Win! ${playerSelection} beats ${computerSelection}!`)
        } else if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")) {
            computerScore +=
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`)
        } else {
            console.log("Enter either rock, paper or scissors!")
        }
    }

//Game of 5 Rounds

function rockPaperScissors(
    singleRound()
    singleRound()
    singleRound()
    singleRound()
    singleRound()
)


//Endgame

function endgame() {
    if (playerScore === 5) {
        console.log("Game is over! You Win")
    } else if (computerScore === 5) {
        console.log("Game is over! You Lose")
    }
}