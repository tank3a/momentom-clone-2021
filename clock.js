const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function tendigit(time) {
    if(time < 10) {
        return `0${time}`;
    }
    return `${time}`;
}
function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clockTitle.innerText = `${tendigit(hours)}:${tendigit(minutes)}:${tendigit(seconds)}`;


}


function init() {
    getTime();
    setInterval(getTime , 100);
}

init();