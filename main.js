const prompt = require('prompt-sync')({sigint:true})

let number = Math.floor(Math.random()*100) + 1

let guess = Number(prompt("I'm thinking of a number between 1 and 100. Try to guess it: "));

let attempt = 1;



while (guess !== number  && attempt <= 2) {
    attempt++;
    if (guess > number){
        guess= Number(prompt("Sorry, too high! Guess again."))
    } if (guess < number){
        guess= Number(prompt("Sorry, too low! Guess again."))
    } if (attempt === 3){
        console.log("Sorry, I was thinking of " + number)
    }

}

if (guess === number){
    console.log("Congratulations" + number + " is correct!");
    }