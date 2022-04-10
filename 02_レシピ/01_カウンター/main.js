// eslint-disable-next-line no-unused-vars
const display = document.getElementById("display")
// eslint-disable-next-line no-unused-vars
const plusButton = document.getElementById("plus-button")

// eslint-disable-next-line no-unused-vars
let number = 0

plusButton.onclick = function () {
  number += 1
  display.textContent = number
}
