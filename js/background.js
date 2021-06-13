const body = document.querySelector("body");
const background__location = document.querySelector(".background__location");

const locate = ["Jeonju, korea",
                "212 caves rd,siesta park wa 6280, australia, siesta park",
                "Bockhütte, Germany",
                "King city, canada",
                "Princeton, canada",
                "Silverthorne, united states",
                "Smalfjord, tana, norway",
                "Stakkholtsgjá, iceland",
                "Tokyo, japan",
                "Yosemite valley, united states"];

const IMG_NUMBER = 10;

function paintLocation(imgNumber) {
    const a = document.createElement("a");
    const span = document.createElement("span");
    console.log(locate[imgNumber-1]);
    const locationName = locate[imgNumber-1];
    a.href = `https://www.google.com/maps/place/${locationName}`;
    a.target ="_blank";
    a.appendChild(span);
    span.innerText = locationName;
    background__location.appendChild(a);
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `img/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom() {
    const number = Math.floor(Math.random()*IMG_NUMBER) + 1;

    return number;
}


function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
    paintLocation(randomNumber);
}

init();
