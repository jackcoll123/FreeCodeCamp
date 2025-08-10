let firstCard = 10
let secondCard = 11
let message = ""

let hasBlackJack = false
let isAlive = true

let messageEl = document.getElementById("message-el")
console.log(messageEl)


let sum = firstCard + secondCard

function startgame() {
if (sum <= 20) {
    message = "Do you want to draw a new card?"
    
} else if (sum === 21) {
    message = "you win"
    hasBlackJack = true

} else {
    message = "you lose"
    isAlive = false

}
console.log(message)
messageEl.textContent = message

}




// Cashout
