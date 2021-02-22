// On recupere les id des différents elements
const helloBtn = document.getElementById('hello');
const sleepBtn = document.getElementById('sleep');
const colorBtn = document.getElementById('color');
const hoursBtn = document.getElementById('hours');
const message = document.getElementById('message');

/**
 * Message =)
 */
function hello() {
    message.innerHTML = 'Hello World :)';
}

function sleep() {
    message.innerHTML = 'BonneNuit les petits :)';
}

/**
 *  Colors
 */
const colors = [
    '#e74c3c',
    '#27ae60',
    '#3498db'
];
// on dit par defaut que c'est 0
let selected = 0;

function changeColor() {
    // on recupere l'element de la div, et on parcours le tableau color
    message.style.color = colors[selected];
    // on ajoute 1 a la valeur actuel
    selected += 1;
    // on parcours le tableau
    if (selected >= colors.length) {
        selected = 0;
    }
}

function addTime(){
    const d = new Date();
    message.innerHTML += `il est ${d.getHours()}h${d.getMinutes()}m${d.getSeconds()}s<br>`;
}

// pour apeller les functions
helloBtn.addEventListener('click', hello);
sleepBtn.addEventListener('click', sleep);
colorBtn.addEventListener('click', changeColor);
hoursBtn.addEventListener('click', addTime);