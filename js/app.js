const boxA = document.getElementsByTagName(`td`).item(0);
boxA.addEventListener(`click`, flipA);
const boxB = document.getElementsByTagName(`td`).item(1);
const boxC = document.getElementsByTagName(`td`).item(2);
const boxD = document.getElementsByTagName(`td`).item(3);
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

