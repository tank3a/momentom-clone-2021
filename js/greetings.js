const form = document.querySelector(".welcome__form-js"),
input = form.querySelector(".welcome__form__input"),
greeting = document.querySelector(".welcome__greeting-js");

const USER_LS = "currentUser",
SHOWING_CL = "showing";

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    input.value="";
}

function handleDelete(event) {
    event.preventDefault();
    deleteName();
    askForName();
}
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
function deleteName() {
    localStorage.removeItem(USER_LS);
    greeting.classList.remove(SHOWING_CL);
}
function askForName() {
    form.classList.add(SHOWING_CL);
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_CL);
    greeting.classList.add(SHOWING_CL);
    greeting.innerText = `Hello ${text}!`;
}
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
    form.addEventListener("submit", handleSubmit);
    greeting.addEventListener("click", handleDelete);
}
init();
