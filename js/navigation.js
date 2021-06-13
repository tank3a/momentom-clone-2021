const nav__icon = document.querySelector(".navigator__icon"),
nav__container = document.querySelector(".nav__container"),
bars = document.querySelector(".fa-bars"),
times = document.querySelector(".fa-times");

function navClickHandle(event) {
    if(nav__container.classList.contains("nav__container__show")) {
        times.classList.add("image__hidden");
        bars.classList.remove("image__hidden");
        nav__container.classList.add("nav__container__hidden");
        nav__container.classList.remove("nav__container__show");
    } else {
        bars.classList.add("image__hidden");
        times.classList.remove("image__hidden");
        nav__container.classList.add("nav__container__show");
        nav__container.classList.remove("nav__container__hidden");

    }}

function init() {
    nav__icon.addEventListener("click", navClickHandle);
    console.log("hello");
}
init();