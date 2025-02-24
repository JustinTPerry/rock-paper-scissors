const choices = ["rock", "paper", "scissors"]
const resultEl = document.getElementById("result")
const scoreEl = document.getElementById("score")
let score = 0
function startGame(userInput) {
    console.log("You are playing Rock, Paper, Scissors!")
    userInput = userInput.toLowerCase()
    console.log("You chose " + userInput)
    let oppInpt = getAIChoice()
    console.log("Your opponent chose " + oppInpt)
    if (userInput === oppInpt) {
        gameEnd("It's a tie!")
    } else if (userInput === "rock") {
        if (oppInpt === "paper") {
            score -= 1
            gameEnd("You lose.")
        } else {
            score += 1
            gameEnd("You win!")
        }
    } else if (userInput === "scissors") {
        if (oppInpt === "rock") {
            score -= 1
            gameEnd("You lose.")
        } else {
            score += 1
            gameEnd("You win!")
        }
    } else if (userInput === "paper") {
        if (oppInpt === "scissors") {
            score -= 1
            gameEnd("You lose.")
        } else {
            score += 1
            gameEnd("You win!")
        }
    }
    scoreEl.innerText = "Score: " + score
}

/*function getUserInput() {
    let usrInpt = prompt("Rock, paper, or scissors?")
    usrInpt = usrInpt.toLowerCase()
    if (usrInpt === "rock" || usrInpt === "paper" || usrInpt === "scissors") {
        return usrInpt
    } else {
        console.log("Please make sure you type rock, paper, or scissors.")
        startGame()
    }
}*/

function getAIChoice() {
    let randInt = Math.floor(Math.random() * 3)
    let choice = choices[randInt]
    return choice
}

function gameEnd(text) {
    console.log(text)
    let message = ""
    if (score === 3) {
        message = "Congrats! You won."
        score = 0
    } else if (score === -3) {
        message = "Sorry, you lost."
        score = 0
    }
    resultEl.innerText = message
}

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        startGame(button.innerText)
    })
});