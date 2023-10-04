let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const remaining=document.querySelector(".lastResult");
const lowORhi=document.querySelector(".lowORhi");
const slots=document.querySelector(".guesses");
const startOver=document.querySelector(".resultParas");

const p=document.createElement("p");

let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',(ev)=>{
        ev.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number!')
    }else if(guess<1){
        alert('Please enter number greater than 1!')
    }else if(guess>100){
        alert('Please enter number smaller than 100!')
    }

    prevGuess.push(guess);
    if(guess===11){
        displayGuess(guess);
        displayMessage(`Game over.. Random number was ${randomNumber}`);
        endGame();
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it.......`)
    }else if(guess>randomNumber){
        displayMessage(`Please enter lower number`)
    }else{
        displayMessage(`Please enter higher number`)
    }
}

function displayGuess(guess){
    userInput.value=' ';
    slots.innerHTML+=`${guess} `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
    lowORhi.innerHTML=`<h2>${message}</h2>`
}


function endGame() {
    // userInput.value = ' ';
    // userInput.setAttribute('disabled', '');
    // p.classList.add('button');
    // p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    // startOver.appendChild(p);
    // playGame = false;
    // newGame();
    if(remaining.innerHTML===0){
        alert("You lost the game")
    }
  }
  
  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      slots.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }










