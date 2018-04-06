class Game {
  constructor() {
    this.frame = 0;
    this.balls = 2;
    this.score = 0;
    this.pins = 0;
    this.strikes = [];
    this.spare = false;
    this.scores = Array(10).fill(0);
  }

  roll(pins) {
    // Next ball
    this.balls--;

    this.pins += pins;
    this.scores[this.frame] += pins;

    if (this.spare) {
      this.scores[this.frame - 1] += pins;

      this.spare = false;
    }

    if (this.strikes.length) {
      this.strikes = this.strikes.filter(strike => {
        this.scores[strike.frame] += pins;

        strike.balls--;
        return strike.balls >= 1;
      });
    }

    if (this.pins === 10 || this.balls < 1) {
      if (this.balls === 1 && pins === 10) {
        this.strikes.push({
          frame: this.frame,
          balls: 2,
        });
      }
      this.spare = this.balls < 1 && this.pins === 10;

      this.pins = 0;
      this.balls = this.frame < 8 ? 2 : 3;

      if (this.frame < 9) {
        this.frame++;
      }
    }
  }

  getScore() {
    return this.scores.reduce((total, num) => total + num, 0);
  }

  getFrames() {
    console.log(this.scores);
  }
}

module.exports = Game;
