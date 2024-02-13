var btn = document.querySelector('#submit');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var result = document.querySelector('#result');
var pointsDisplay = document.querySelector('#points');

var points = 0;

function evaluateQuiz() {
    points = 0;
    answer1.className = '';
    answer2.className = '';

    if (answer1.value.toLowerCase() === 'Ottawa') {
        points += 10;
        answer1.className = 'correct';
    } else {
        answer1.className = 'incorrect';
    }

    if (answer2.value === '24') {
        points += 10;
        answer2.className = 'correct';
    } else {
        answer2.className = 'incorrect';
    }

    result.style.display = 'block';
    pointsDisplay.textContent = points;
}

btn.addEventListener('click', evaluateQuiz);