class Game {
  constructor() {
    this.resetGame();
  }

  roll(pins) {
    // Next ball
    this.currentBall++;

    if (this.currentBall > this.maxBalls) {
      this.resetGame();
    }

    this.pins += pins;
    this.scores[this.frame] += pins;

    // Any bonus Strike / Spare to calculate?
    if (this.bonusPoints.length) {
      this.bonusPoints = this.bonusPoints.filter(strike => {
        this.scores[strike.frame] += pins;

        strike.balls--;
        return strike.balls >= 1;
      });
    }

    if (this.pins === 10 || this.currentBall >= this.maxBalls) {
      if (this.pins === 10 && !this.isLastRoll()) {
        this.bonusPoints.push({
          frame: this.frame,
          balls: this.currentBall === 1 ? 2 : 1, // Strike or Spare?
        });
      }

      if (this.frame < 9) {
        this.frame++;

        this.currentBall = 0;
      }

      this.pins = 0;
    }
  }

  /**
   * Check if the current roll is the last one, if so don't need to add any
   * extra point to the last frame itself.
   */
  isLastRoll() {
    if (this.frame === 9 && this.currentBall <= 2) {
      this.maxBalls = 3;
    }

    return this.frame === 9;
  }

  /**
   * Reset the game variables
   */
  resetGame() {
    this.frame = 0;
    this.currentBall = 0;
    this.maxBalls = 2;
    this.score = 0;
    this.pins = 0;
    this.bonusPoints = [];
    this.spare = false;
    this.scores = Array(10).fill(0);
  }

  /**
   * The current score
   */
  getScore() {
    return this.scores.reduce((total, num) => total + num, 0);
  }

  /**
   * Log the frame's score
   */
  getFrames() {
    console.log(this.scores);
  }
}

module.exports = Game;
