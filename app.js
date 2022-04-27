// Game values
let minimum = 1, 
    maximum = 10,
    winningNum = getRandomNumber(minimum,maximum),
    guessesLeft = 3;

// UI elements
const containerUI = document.querySelector('container'),
    gameWrapper = document.querySelector('#game-wrapper'),
    minNumUI = document.querySelector('.min-num'),
    maxNumUI = document.querySelector('.max-num'),
    guessBtnUI = document.querySelector('#guess-btn'),
    guessInputUI = document.querySelector('#guess-input'),
    message = document.querySelector('.message'),
    card = document.querySelector('.card');

// Assign UI min and max
minNumUI.textContent = minimum;
maxNumUI.textContent = maximum;

// PLay again event listener -- we need to select parent elements
// the reason behind this is we are instering elements directly into the dom, we need to use event delegation
// we need to descend upon the inserted elements beggining with the parent.
gameWrapper.addEventListener('mousedown', (e)=>{ // we should event type of 'mousedown' instead of 'click' for better userexperience -- click will lead things to become glitched out
    // if there is a class name of play again on the target which is mousedowned upon  ...
    // (the button we assigned a class of play-again to when the player wins or loses) ...
    // We will reload the page
    e.target.className==='play-again'? window.location.reload():"";
});

// listen for guess --- game functionality
guessBtnUI.addEventListener('click',()=>{
    let guess = parseInt(guessInputUI.value);
    console.log(guess);

    // Validation
    if(isNaN(guess) ||guess < minimum || guess > maximum){ // error
        setMessage(`Please enter a number between ${minimum} and ${maximum}`, 'red');
    // WIN CASE - Check if the guess is equals to the number betweene 1-10
    }else if (guess === winningNum){
        // call game over function which disables input field and changes border color to green signifiying win
        gameOver(true,`Good guess, ${winningNum} is correct! You Win!`);
    // Wrong CASE - subtract 1 from guesses left - if guessLeft = 0 player loses
    }else{
        guessesLeft -=1;
        setMessage(`Incorrect guess, you have ${guessesLeft} guesses left, please try again`, 'red');
        guessInputUI.value = '';
        // GAME OVER
        guessesLeft === 0 ? gameOver(false,`GAME OVER! You lost, the correct number was ${winningNum}`) : '';
    }
});

// FUNCTIONS
// game over
function gameOver(won,msg){  // won is bool(t/f), msg is string
    let color;
    won ? color = 'green' : color = 'red';
    // disable input field
    guessInputUI.disabled = true;
    // change the border colour
    guessInputUI.style.borderColor=color;
    // set the message
    setMessage(msg, color);

    // Play again ???
    guessBtnUI.value = 'Play Again?';
    guessBtnUI.className+= 'play-again';    
}
// set message
function setMessage(msg, msgColor){
    message.textContent=msg;
    message.style.color = msgColor;
    /* let element = document.createElement('section');
    element.setAttribute('class','error');
    card.appendChild(element); */
}
// get a random number to set as guess number
function getRandomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)+ min);
}


