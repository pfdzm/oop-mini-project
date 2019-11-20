const Letter = require("./Letter.js");

class Word {
  constructor(str) {
    this.letters = str.split("").map(element => new Letter(element));
  }
  guessLetter(char) {
    let res = false;
    this.letters.forEach(element => {
      if (!element.visible) {
        element.guess(char);
      }
      res = Boolean(res || element.visible);
    });
    // should try Array.prototype.some() ?
    return res;
  }
  guessedCorrectly() {
    return this.letters.every(element => element.visible);
  }
}

module.exports = Word;
