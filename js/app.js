const boxA = document.getElementsByTagName(`td`).item(0);
boxA.addEventListener(`click`, flipA);
const boxB = document.getElementsByTagName(`td`).item(1);
boxB.addEventListener(`click`, flipB);
const boxC = document.getElementsByTagName(`td`).item(2);
boxC.addEventListener(`click`, flipC);
const boxD = document.getElementsByTagName(`td`).item(3);
boxD.addEventListener(`click`, flipD);

function flipA() {
    if (boxA.style.transform != `rotate(180deg)`){
        boxA.style.transform = `rotate(180deg)`;
        boxA.style.color = `#364aff`;
    }
    else unflipA();
    unflipB();
    unflipC();
    unflipD();
}

function unflipA() {
    boxA.style.transform = `rotate(0deg)`;
    boxA.style.color = `#222`;
}

function flipB() {
    if (boxB.style.transform != `rotate(180deg)`) {
        boxB.style.transform = `rotate(180deg)`;
        boxB.style.color = `#364aff`;
    }
    else unflipB();
    unflipA();
    unflipC();
    unflipD();
}

function unflipB() {
    boxB.style.transform = `rotate(0deg)`;
    boxB.style.color = `#222`;
}

function flipC() {
    if (boxC.style.transform != `rotate(180deg)`){
        boxC.style.transform = `rotate(180deg)`;
        boxC.style.color = `#364aff`;
    }
    else unflipC();
    unflipA();
    unflipB();
    unflipD();
}

function unflipC() {
    boxC.style.transform = `rotate(0deg)`;
    boxC.style.color = `#222`;
}

function flipD() {
    if (boxD.style.transform != `rotate(180deg)`){
        boxD.style.transform = `rotate(180deg)`;
        boxD.style.color = `#364aff`;
    }
    else unflipD();
    unflipA();
    unflipB();
    unflipC();
}

let unflipD = () => {
    boxD.style.transform = `rotate(0deg)`;
    boxD.style.color = `#222`;
};
