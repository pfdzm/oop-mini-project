class Letter {
  constructor(char) {
    this.letter = char;
    this.visible = char.match(/[a-z0-9]/gi) === null;
  }
  toString() {
    return this.letter.match(/[a-z]/gi) === null ? this.letter : "_";
  }
  guess(letter) {
    this.visible = this.letter === letter;

    return this.visible;
  }
  getSolution() {
    return this.letter;
  }
}

module.exports = Letter;
