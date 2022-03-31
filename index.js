const input = document.querySelector("#email-input")
const button = document.querySelector("#print")
const output = document.querySelector("#email-output")

function printText() {
    output.textContent = input.value
}

button.addEventListener("click", printText)