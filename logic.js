var randWord = require('random-word');
var word = require('./word');
var inquirer = require('inquirer');
var currentWord = new word(randWord());
var correctGuess = false;
var guesses = 12;

function runLogic(){
    if(guesses > 0){
        inquirer.prompt([
            {
                message: `\n${currentWord.letters.hiddenLetters}\n Guesses left: ${guesses} \n Choose a letter:`,
                type: 'input',
                name: 'letterGuess'
            }
        ]).then(function(input){
            guess(input.letterGuess);

        });
    }else{
        inquirer.prompt([
            {
                message: `You are out of guesses. \n The correct word was ${currentWord.word} \n  would you like to continue?`,
                type: 'confirm',
                name: 'confirmation'
            }
        ]).then(function(answer){
            if(answer.confirmation){
                guesses = 12;
                currentWord = new word(randWord());
                runLogic();
            }
        })
    }
}

function guess(letterGuess){
    for(i = 0; i < currentWord.letters.letterArray.length; i++){
        if(currentWord.letters.letterArray[i] === letterGuess){
            correctGuess = true;
            currentWord.letters.hiddenLettersArray[i] = letterGuess;
            currentWord.letters.hiddenLetters = currentWord.letters.hiddenLettersArray.join(' ');
        }
    }
    if(correctGuess === true){
        console.log('CORRECT!!');
        correctGuess = false;
    }else{
        guesses--;
        console.log('INCORRECT!!');
    }
    if(currentWord.letters.hiddenLettersArray.join('') === currentWord.word){
        console.log(currentWord.letters.hiddenLetters);
        console.log("You win!");
        guesses = 12;
        currentWord = new word (randWord());
        runLogic();
    }else{
        runLogic();
    }
}

module.exports = runLogic;

