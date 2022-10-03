//Score System

let playerScore = 0
let computerScore = 0

//Computer Randomized Choice

function getComputerChoice() {

    let randomSelection = Math.floor(Math.random() * 3)
    let choice

    if (randomSelection === 0) {
        choice = "rock"
    } else if (randomSelection === 1) {
        choice = "scissors"
    } else if (randomSelection === 2) {
        choice = "paper"
    }

    return choice;

}

//Player Choice

function getPlayerChoice() {

    let choice = prompt("Rock, paper or scissors?", "")
    choice = choice.toLowerCase()
    
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
       return choice
    } else {
        alert("Invalid Entry!!! Rock, paper or scissors?", "")
        getPlayerChoice()
    }

}

///A Single Round of Rock-Paper-Scissors

function singleRound(playerChoice, computerChoice) {

    console.log(`You: ${playerChoice} --- Computer: ${computerChoice}`)
    
    if (playerChoice === computerChoice) {
        console.log("Tie")
        } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You Win! ${playerChoice} beats ${computerChoice}!`)
            playerScore++
        } else if (
        (playerChoice === "scissors" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors")
        ) {
            console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`)
            computerScore++
        } else {
            console.log("Something went wrong!")
        }
        
}
//Game of Rock Paper Scissors

function rockPaperScissors() {

    for (let i = 1; i < 6; i++) {
        playerSelection = getPlayerChoice()
        computerSelection = getComputerChoice()
        singleRound(playerSelection, computerSelection)
        showResults(i)
    }

    winner()

}

//Show Results

function showResults(round) {
    console.log(`Round ${round} of 5. Get Ready!`)
    console.log(`You: ${playerScore} --- Computer: ${computerScore}`)
}

//Winner

function winner() {

    if (playerScore > computerScore) {
        console.log("Congratulations! You Win!")
    } else {
        console.log("Sorry! You lose!")
    }
    
}

//Start Game

rockPaperScissors()



