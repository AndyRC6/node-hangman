var letter = require('./letter');

function word(word){
    this.word = word;
    this.letters = new letter(this.word);
    this.success = false;
}

module.exports = word;