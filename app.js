// Game values

let minimum=1, 
    maximum =10,
    winningNum=2,
    guessesLeft=3;

// UI elements
const containerUI = document.querySelector('container'),
    minNumUI = document.querySelector('.min-num'),
    maxNumUI = document.querySelector('.max-num'),
    guessBtnUI = document.querySelector('#guess-btn'),
    guessInputUI = document.querySelector('#guess-input'),
    message = document.querySelector('.message'),
    card = document.querySelector('.card');

// Assign UI min and max
minNumUI.textContent = minimum;
maxNumUI.textContent= maximum;

// listen for guess
guessBtnUI.addEventListener('click',()=>{
    let guess = parseInt(guessInputUI.value);
    console.log(guess);

    // Validation
    
    if(isNaN(guess) ||guess < minimum || guess > maximum){ // error
        setMessage(`Please enter a number between ${minimum} and ${maximum}`, 'red');
    }
    else{   // success
        setMessage(`Good guess`, 'green');
    }

    // Check if the guess is equals to the number betweene 1-10
    if (guess === winningNum)
});

function setMessage(msg, msgColor){

    message.textContent=msg;
    message.style.color = msgColor;

    /* let element = document.createElement('section');
    element.setAttribute('class','error');
    card.appendChild(element); */
}



