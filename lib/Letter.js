class Letter {
  constructor(char) {
    this.letter = char;
    this.visible = char.match(/[a-z0-9]/i) === null;
  }
  toString() {
    return this.letter.match(/[a-z]/i) === null ? this.letter : "_";
  }
  guess(char) {
    this.visible = this.letter === char;

    return this.visible;
  }
  getSolution() {
    return this.letter;
  }
}

module.exports = Letter;
