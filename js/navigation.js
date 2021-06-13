const nav__icon = document.querySelector(".navigator__icon"),
nav__container = document.querySelector(".nav__container");

function navClickHandle(event) {
    if(nav__container.classList.contains("nav__container__show")) {
        nav__container.classList.add("nav__container__hidden");
        nav__container.classList.remove("nav__container__show");
    } else {
        nav__container.classList.add("nav__container__show");
        nav__container.classList.remove("nav__container__hidden");

    }}

function init() {
    nav__icon.addEventListener("click", navClickHandle);
    console.log("hello");
}
init();