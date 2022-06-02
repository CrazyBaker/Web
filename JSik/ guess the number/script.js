let  guessInput = document.querySelector('.number-input');
let gameConsole = document.querySelector('.guess-message');
let oldScore = +document.querySelector('.highscore').textContent;
let minNumber = document.querySelector('.min-number');
let maxNumber = document.querySelector('.max-number');

let gussingNumber;
let score = 20;

console.log(guessInput.value);

function startGame () {
    gussingNumber = getRandomNumber(minNumber.value, maxNumber.value);
    console.log(gussingNumber);
}

function getRandomNumber(minNumber, maxNumber) {
    minNumber = Number(minNumber);
    maxNumber = Number(maxNumber);

    return Math.trunc(Math.random() * (maxNumber - minNumber) + minNumber + 1) ;
}


let compareScore = function (oldScore, newScore) {
    if (oldScore >= newScore) {
        return oldScore;
    } else {
        return newScore;
    }
};

let checkGuessValue = function () {
    console.log(guessInput.value);
    score--;
    document.querySelector('.score').textContent = score;

    if (guessInput.value === 0 || guessInput.value === '') {
        gameConsole.textContent = 'Ебанько! число введи!';
    } else if (+guessInput.value > gussingNumber) {
        gameConsole.textContent = 'Эт дохуя';
    } else if (+guessInput.value < gussingNumber) {
        gameConsole.textContent = 'Эт нихуя"';
    } else if (+guessInput.value === gussingNumber) {
        gameConsole.textContent = 'Эт бля заебись ! Красавчик';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.question').textContent = gussingNumber;
        document.querySelector('.question').style.width = '50rem';

        document.querySelector('.highscore').textContent = compareScore(oldScore,score);
    }

    if (score === 0) {
        gameConsole.textContent = 'Ты проебал (((';
    }
};

let againButtonClick = function () {
    score = 20;
    gussingNumber = Math.trunc(Math.random() * 20) + 1;

    gameConsole.textContent = 'Начни угадывать чорт !';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.question').textContent = '???';
    document.querySelector('.score').textContent = score;
    document.querySelector('.question').style.width = '25rem';
};
document.querySelector('.play').addEventListener('click', startGame);
document.querySelector('.check').addEventListener('click', checkGuessValue);
document.querySelector('.again').addEventListener('click', againButtonClick);