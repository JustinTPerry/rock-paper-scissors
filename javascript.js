const choices = ["rock", "paper", "scissors"]

function startGame() {
    console.log("You are playing Rock, Paper, Scissors!")
    let usrInpt = getUserInput()
    console.log("You chose " + usrInpt)
    let oppInpt = getAIChoice()
    console.log("Your opponent chose " + oppInpt)
    if (usrInpt === oppInpt) {
        gameEnd("It's a tie!")
    } else if (usrInpt === "rock") {
        console.log("You chose " + usrInpt)
        if (oppInpt === "paper") {
            gameEnd("You lose.")
        } else {
            gameEnd("You win!")
        }
    } else if (usrInpt === "scissors") {
        if (oppInpt === "rock") {
            gameEnd("You lose.")
        } else {
            gameEnd("You win!")
        }
    } else if (usrInpt === "paper") {
        if (oppInpt === "scissors") {
            gameEnd("You lose.")
        } else {
            gameEnd("You win!")
        }
    }
}

function getUserInput() {
    let usrInpt = prompt("Rock, paper, or scissors?")
    usrInpt = usrInpt.toLowerCase()
    if (usrInpt === "rock" || usrInpt === "paper" || usrInpt === "scissors") {
        return usrInpt
    } else {
        console.log("Please make sure you type rock, paper, or scissors.")
        startGame()
    }
}

function getAIChoice() {
    let randInt = Math.floor(Math.random() * 3)
    let choice = choices[randInt]
    return choice
}

function gameEnd(text) {
    usrInpt = prompt(text + " Play again ?(Y/N)")
    usrInpt = usrInpt.toLowerCase()
    if (usrInpt === "y") {
        startGame()
    } else {
        console.log("Thanks for playing.")
    }
}

startGame()