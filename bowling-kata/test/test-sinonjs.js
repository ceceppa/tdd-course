const expect = require('chai').expect;
const sinon = require('sinon');

const Game = require('../game');

describe('Bowling Sinon', function() {
  let game;

  before(() => {
    sinon.spy(Game.prototype, 'resetGame');
    game = new Game();
  });

  it('should call resetGame when initialised', () => {
    expect(game.resetGame.calledOnce).to.be.true;
  });

  it('should call resetGame when a new Game starts', () => {
    for (let i = 1; i <= 20; i++) {
      game.roll(0);
    }

    game.roll(0);
    expect(game.resetGame.calledTwice).to.be.true;
  });
});
