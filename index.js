let randomNum = Math.floor(Math.random() * 100 + 1);
console.log(randomNum)
let play = document.getElementById('play');
let display = document.getElementById('display');
let restart = document.getElementById('restart');
let headingColor = document.getElementById('heading');
let backdropChange = document.getElementById('gameContainer');
let buttonColorOne = document.getElementById('play');
let buttonColorTwo = document.getElementById('restart');



function guessTheNumber(event){
    event.preventDefault()
    let input = document.getElementById('input').value;
    input = parseInt(input);
    let tooClose = 5;

    if(input === randomNum){
        display.innerHTML = 'You are a winner!!🤪';
        display.classList.add('winner');
        document.body.classList.add('win'); 
        headingColor.classList.add('heading-color');
        backdropChange.classList.add('backdrop-change');
        buttonColorOne.classList.add('btn-win');
        buttonColorTwo.classList.add('btn-win');
    }else if(input < 1 || input > 100){
        display.innerHTML = "OUT OF RANGE 😒"
    }else if(input < randomNum && (randomNum - input <= tooClose)) {
        display.innerHTML = 'Very close!, but you are a little low 😲';
        document.body.style.setProperty('--after-filter', '50%');
    }else if(input < randomNum) {
        display.innerHTML = 'Too Low, Go Higher! 😮';
        document.body.style.setProperty('--after-filter', '90%');
    }else if(input > randomNum && (input - randomNum <= tooClose)) {
        display.innerHTML = 'Very close!, but you are a little high 😲';
        document.body.style.setProperty('--after-filter', '50%');
    }else if(input > randomNum) {
        display.innerHTML = 'Too High, Go Lower! 😮';
        document.body.style.setProperty('--after-filter', '90%');
    }else {
        display.innerHTML = 'PLEASE USE ONLY NUMBERS! 💯'
    }
}

function restartGame(event) {
    event.preventDefault()
    randomNum = Math.floor(Math.random() * 100 + 1);
    display.innerHTML = '';
    display.classList.remove('winner');
    document.body.classList.remove('win');
    headingColor.classList.remove('heading-color');
    document.body.style.setProperty('--after-filter', '100%');
}

console.log(headingColor)
   
