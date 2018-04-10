var expect = require('chai').expect;
const Game = require('../game');

describe('Bowling', () => {
  let game;

  describe('Bowling game 1', () => {
    before(() => {
      game = new Game();
    });

    it('should define roll', () => {
      expect(game.roll).to.exist;
    });

    it('"getScore" should return an int', () => {
      const score = game.getScore();
      expect(score).to.be.finite;
    });

    it('fame 1, 9 + 0 pins => score: 10', () => {
      game.roll(10);

      expect(game.getScore()).to.equal(10);
    });

    it('frame 2, 3 + 6 pins => score: 10 + (3 + 6) = 28', () => {
      game.roll(3);
      game.roll(6);

      expect(game.getScore()).to.equal(28);
    });
  });

  describe('Bowling game 2', () => {
    before(() => {
      game = new Game();
    });

    it('fame 1, ball 1: 10 pins (strike) => score: 10', () => {
      game.roll(10);

      expect(game.getScore()).to.equal(10);
    });

    it('fame 2, ball 1: 10 pins (strike) => score: 30', () => {
      game.roll(10);

      expect(game.getScore()).to.equal(30);
    });

    it('fame 3, 9 + 0 => score: 30', () => {
      game.roll(9);
      game.roll(0);

      expect(game.getScore()).to.equal(57);
    });
  });

  describe('Bowling game 3', function() {
    before(() => {
      game = new Game();
    });

    it('fame 1, ball 1: 10 pins (strike) => score: 10', () => {
      game.roll(10);

      expect(game.getScore()).to.equal(10);
    });

    it('fame 2, ball 1: 10 pins (strike) => score: 30', () => {
      game.roll(10);

      expect(game.getScore()).to.equal(30);
    });

    it('fame 3, ball 1: 10 pins (strike) => score: 60', () => {
      game.roll(10);

      expect(game.getScore()).to.equal(60);
    });

    it('fame 4, 8 + 2 pins (spare) => score: 88', () => {
      game.roll(8);
      game.roll(2);

      expect(game.getScore()).to.equal(88);
    });

    it('fame 5, 8 + 0 pins => score: 104', () => {
      game.roll(8);

      expect(game.getScore()).to.equal(104);
    });
  });

  describe('Bowling game 4', function() {
    before(() => {
      game = new Game();
    });

    it('fame 1, ball 1: 10 pins (strike) => score: 10', () => {
      game.roll(10);

      expect(game.getScore()).to.equal(10);
    });

    it('fame 2, ball 1: 10 pins (strike) => score: 30', () => {
      game.roll(10);

      expect(game.getScore()).to.equal(30);
    });

    it('fame 3, ball 1: 10 pins (strike) => score: 60', () => {
      game.roll(10);

      expect(game.getScore()).to.equal(60);
    });

    it('fame 4, ball 1: 10 pins (strike) => score: 90', () => {
      game.roll(10);

      expect(game.getScore()).to.equal(90);
    });

    it('fame 5, ball 1: 10 pins (strike) => score: 120', () => {
      game.roll(10);

      expect(game.getScore()).to.equal(120);
    });

    it('fame 6, 7 + 2 => score: 145', () => {
      game.roll(7);
      game.roll(2);

      expect(game.getScore()).to.equal(145);
    });
  });

  describe('Bowling game 5', function() {
    before(() => {
      game = new Game();
    });

    it('fame 1, 7 + 3 (spare) => score: 10', () => {
      game.roll(7);
      game.roll(3);

      expect(game.getScore()).to.equal(10);
    });

    it('fame 2, 4 + 2 => score: 20', () => {
      game.roll(4);
      game.roll(2);

      expect(game.getScore()).to.equal(20);
    });
  });

  describe('Bowling game 6', function() {
    before(() => {
      game = new Game();
    });

    it('21 rolls: 10 pairs of 5 and spare, with a final 5 => score: 150', () => {
      game.roll(5);
      game.roll(5);

      game.roll(5);
      game.roll(5);

      game.roll(5);
      game.roll(5);

      game.roll(5);
      game.roll(5);

      game.roll(5);
      game.roll(5);

      game.roll(5);
      game.roll(5);

      game.roll(5);
      game.roll(5);

      game.roll(5);
      game.roll(5);

      game.roll(5);
      game.roll(5);

      game.roll(5);
      game.roll(5);
      game.roll(5);

      expect(game.getScore()).to.equal(150);
    });
  });

  describe('Bowling game 7', function() {
    before(() => {
      game = new Game();
    });

    it('All strikes => score: 300', () => {
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);

      expect(game.getScore()).to.equal(300);
    });

    it('Should start from 0 => score: 0', () => {
      game.roll(0);

      expect(game.getScore()).to.equal(0);
    });
  });
});
