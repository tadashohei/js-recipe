// eslint-disable-next-line no-unused-vars
const display = document.getElementById("display")
// eslint-disable-next-line no-unused-vars
const plusButton = document.getElementById("plus-button")

const mainasuButton = document.getElementById("mainasu-button")
// eslint-disable-next-line no-unused-vars
const kakaerButton = document.getElementById("kakeru-button")
let number = 0

plusButton.onclick = function () {
  number += 1
  display.textContent = number
}
mainasuButton.onclick = function () {
  number -= 1
  display.textContent = number
}
