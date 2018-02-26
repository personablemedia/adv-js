var Letter = require("./letters.js");

var Word = function(word) {
  this.word = word;
  this.letter = [];
  this.guessCorrect = 0;
  this.totalLetters = this.word.length;
};

Word.prototype.printWord = function() {
  var that = this;
  var word = this.word.split("");
  var output = "";
  word.forEach(function(letter, index) {
    (output += that.letters[index]), display();
  });
  console.log(output + "\n");
};

module.exports = Word;
