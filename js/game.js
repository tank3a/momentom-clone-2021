const subtitle = document.querySelector(".nav__game__subtitle-js"),
  range = document.querySelector(".js-range"),
  textSelect = document.querySelector(".js-selection span"),
  textResult = document.querySelector(".js-result span");

const nav__game__form = document.querySelector(".nav__game__form"),
  formInput = nav__game__form.querySelector(".nav__game__input");

function handleRange(event) {
  const maxRange = range.value;
  formInput.value = "";
  subtitle.innerText = `Generate a Number between 0 and ${maxRange}`;
  formInput.setAttribute("max", maxRange);
}

function createRandomNumber() {
  const randomRange = parseInt(range.value) + 1;
  const number = Math.floor(Math.random() * randomRange);
  return number;
}

function textSelectHeading(input, answer) {
  textSelect.innerText = `You chose ${input}, the machine chose ${answer}.`;
}

function textResultHeading(input, answer) {
  if (parseInt(input) === parseInt(answer)) {
    textResult.innerText = "You Win!";
  } else textResult.innerText = "You Lost!";
}
function handleSubmit(event) {
  event.preventDefault();
  const input = formInput.value;
  const answer = createRandomNumber();
  textSelectHeading(input, answer);
  textResultHeading(input, answer);
}

function init() {
  range.addEventListener("input", handleRange);
  nav__game__form.addEventListener("submit", handleSubmit);
}
init();
