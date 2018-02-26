var Letter = function(letter) {
  this.letter = letter;
  this.guessed = false;
};

Letter.prototype.display = function() {
  if (this.guessed) {
    return " " + this.letter.toLowerCase() + " ";
  } else {
    return "_";
  }
};

module.exports = Letter;
