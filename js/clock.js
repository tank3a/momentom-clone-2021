const clockContainer = document.querySelector(".time__clock-js"),
dateContainer = document.querySelector(".time__date-js"),
dateTitle = dateContainer.querySelector(".time__date-title"),
clockTitle = clockContainer.querySelector(".time__clock-title");

function tendigit(time) {
    if(time < 10) {
        return `0${time}`;
    }
    return `${time}`;
}
function getTime() {
    const date = new Date();
    console.dir(date);
    const years = date.getFullYear();
    const months = date.getMonth();
    const dates = date.getDate();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    dateTitle.innerText = `${tendigit(years)}. ${tendigit(months+1)}. ${tendigit(dates)}`;
    clockTitle.innerText = `${tendigit(hours)}:${tendigit(minutes)}:${tendigit(seconds)}`;


}


function init() {
    getTime();
    setInterval(getTime , 100);
}

init();