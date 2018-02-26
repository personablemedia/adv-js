var Letter = require("./letters.js");
var Word = require("./word.js");
var figlet = require("figlet");
var inquirer = require("inquirer");
var isLetter = require("is-letter");

// figlet("Chemistry", function(err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

var defaults = {
  words: [
    "love",
    "peace",
    "fish",
    "meditate",
    "empathy"
  ],
  score: 0,
  lives: 10
};

var wordBank = [];
var userGuesses = [];
var score = 0;
var lives = 0;
var currentWord = {};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseWord() {
  var random = randomInt(0, wordBank.length - 1);
  currentWord = new Word(wordBank[random]);

  //psuedo - this function would give us the string we need
  currentWord.generateLetters();
  wordBank.splice(random, 1);
}

function reset() {
  wordBank = defaults.words;
  score = defaults.score;
  lives = defaults.lives;
  userGuesses = [];
}

function startGame() {
    chooseWord();
    console.log('Game started!')
    console.log('Guess a letter:')
    console.log('_ _ _ _')
}

function endGame() {
}

function restart() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "again",
        message: "Let's play again?"
      }
    ])
    .then(function(res) {
      switch (response.again) {
      }
    });
}

function printGuess() {
}

function checkGuess() {
}

function promptingLetter() {
}

startGame();
