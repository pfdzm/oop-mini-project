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
    return res;
  }
  guessedCorrectly() {
    let res = true;
    this.letters.forEach(element => {
      res = Boolean(res && element.visible);
    });
    return res;
  }
}

module.exports = Word;
