class GuessingGame {
    constructor(min, max, guessNum) {
      this.min = min;
      this.max = max;
      this.guessNum = guessNum;
    }
  
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
  
    guess() {
      this.guessNum = Math.ceil((this.min + this.max) / 2);
      return this.guessNum;
    }
  
    lower() {
      this.max = this.guessNum;
    }
  
    greater() {
      this.min = this.guessNum;
    }
  }

module.exports = GuessingGame;
