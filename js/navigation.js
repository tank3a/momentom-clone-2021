const nav__icon = document.querySelector(".navigator__icon"),
nav__container = document.querySelector(".nav__container");

function navClickHandle(event) {
    if(todo__list.classList.contains("nav__container__show")) {
        todo__list.classList.add("nav__container__hidden");
        todo__list.classList.remove("nav__container__show");
    } else {
        todo__list.classList.add("nav__container__show");
        todo__list.classList.remove("nav__container__hidden");

    }}

function init() {
    nav__icon.addEventListener("click", navClickHandle);
}
init();