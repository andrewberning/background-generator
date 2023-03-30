var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".random")

window.onload = function () {
  setGradient();
}

css.textContent = body.style.background + ";";

function setGradient() {
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

  css.textContent = body.style.background + ";";
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function randomColorPick() {
  let colorA = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
  let colorB = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`

  body.style.background =
    "linear-gradient(to right, "
    + colorA
    + ", "
    + colorB
    + ")";

  css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", randomColorPick);