const body = document.querySelector('body');
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const p = document.getElementById('p');
const r = document.getElementById('r');
const s = document.getElementById('s');
const result_div = document.getElementById('result');
const reset_div = document.querySelector('#reset');
const reset_btn = document.getElementById('reset-button')
let userScore = 0;
let compScore = 0;

p.addEventListener('click', () => game('p'));
s.addEventListener('click', () => game('s'));
r.addEventListener('click', () => game('r'));

function getCompChoice() {
    choices = ['r','s','p'];
    random = Math.floor(Math.random()*3);
    return choices[random];
}

function game(userChoice) {
    if(userScore >= 5 || compScore >= 5) {
        const reset_btn = document.createElement('button');
        reset_btn.setAttribute('id', 'reset-button');
        reset_btn.addEventListener('click', () => reset());
        reset_btn.innerHTML = 'RESET';
        reset_div.innerHTML = ``;
        reset_div.append(reset_btn);
        max();
    }else {
        compChoice = getCompChoice();
        switch(userChoice + compChoice) {
            case 'pr':
            case 'rs':
            case 'sp':
                win();
                break;
            case 'rp':
            case 'sr':
            case 'ps':
                lose();
                break;
            case 'rr':
            case 'ss':
            case 'pp':
                draw();
                break;
        }
    }
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `You Win`;
    if(userScore >= 5) {max()};
}

function lose() {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `You Lose`;
    if(compScore >= 5) {max()};
}

function draw() {
    result_div.innerHTML = `Draw`;
}

function max() {
    if(userScore > compScore) {
        result_div.innerHTML = `You Win The Game`;
    }else {
        result_div.innerHTML = `You Lose The Game`;
    }
}

function reset() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `Choose your move`;
    reset_div.innerHTML = '';
}