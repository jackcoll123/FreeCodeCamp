
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0


function INCRIMENT() {
    count += 1
    countEl.textContent = count

}

function save() {
    console.log(count)

    let countStr =  count + " - "
    saveEl.textContent += countStr

    count = 0
    countEl.textContent = count
}

