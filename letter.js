
function generateHiddenLetters(count){
    var hiddenLetters = [];
    for(i = 0; i < count; i++){
        hiddenLetters.push('_');
    }
    return hiddenLetters;
}

function letter(word){
    this.letterCount = word.length;
    this.letterArray = word.split('');
    this.hiddenLettersArray = generateHiddenLetters(this.letterCount);
    this.hiddenLetters = this.hiddenLettersArray.join(' ');
}



module.exports = letter;