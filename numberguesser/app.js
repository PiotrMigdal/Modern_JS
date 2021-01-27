//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Values
const   game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

//Assig UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen the pay again
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

//Listen the guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //Check if correct num
    if(isNaN(guess) || guess < min || guess > max){ //isNaN is Not a Number
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {

        //Check if won
        if(guess === winningNum){
            //Game Over - won
            gameOver(true, `${winningNum} is correct, You Won!`);
        } else {
            //wrong number
            guessesLeft -= 1; //it is shorthand for: guessesLeft = guessesLeft - 1
            if(guessesLeft === 0){
                //Game Over - lost
            gameOver(false, `Game Over, you lost! Correct number was ${winningNum}`);

            } else {
                //Wrong num - game continues
                guessInput.style.borderColor = 'orange';
                //clear input
                guessInput.value = '';
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'orange');
            }
        }
    }

})

//Set msg
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

//Game Over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    //Play again?
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

//Get random number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}