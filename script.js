document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;


    let attempts = 0;

    const guessInput = document.getElementById('guess');
    const checkButton = document.getElementById('checkButton');
    const resetButton = document.getElementById('resetButton');
    const message = document.getElementById('message');
    const attemptDisplay = document.getElementById('attempts');

    checkButton.addEventListener('click', () =>{
        const userGuess = parseInt(guessInput.value,10);

        if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
            message.textContent = 'Please enter a number between 1 and 100' ;
            return;
        }
        attempts++;
        attemptDisplay.textContent = attempts;


        if(userGuess === randomNumber){
            message.textContent = ` Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts`;
            message.style.color = 'green'; 
            checkButton.disabled = true;
        }else if(userGuess > randomNumber){
            message.textContent = 'Too high! Try again!';
            message.style.color ='red';

        }else{
            message.textContent = 'Too low! Try again!';
            message.style.color ='red';
        }
        
    });

    resetButton.addEventListener('click', () => {
        location.reload();
    });

});