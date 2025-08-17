let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let message = ""
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")

function startGame() {
    renderGame()
}

function getRandomCard() {

}

function renderGame() {

    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    

    sumEl.textContent = "Sum: " + sum

    console.log(messageEl)
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        
    } else if (sum === 21) {
        message = "you win"
        hasBlackJack = true

    } else {
        message = "you lose"
        isAlive = false

}
messageEl.textContent = message
console.log(message)

}

function newCard() {
    let drawnCard = getRandomCard()
    cards.push(drawnCard)
    sum += drawnCard
    renderGame()


}




// Cashout
