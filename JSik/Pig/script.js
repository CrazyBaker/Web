/*
let player1Name;
let player2Name;

player1Name = prompt('Как зовут игрока 1 ?');
player2Name = prompt('Как зовут игрока 2 ?');

document.querySelector('#name--0').textContent = player1Name;
document.querySelector('#name--1').textContent = player2Name;
*/

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0Element.textContent = '0';
score1Element.textContent = '0';
diceElement.classList.add('hidden');

let currentScore = 0;

function rollTheDice () {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    diceElement.classList.remove('hidden');

    diceElement.src = `img/dice${diceNumber}.png`;

    if (diceNumber !== 1) {
        currentScore += diceNumber;
        current0Element.textContent = currentScore; // change later
    } else {

    }
}

btnRoll.addEventListener('click', rollTheDice);
