var expect = require('chai').expect;
const Fibonacci = require('../fibonacci');

describe('Fibonacci', () => {
  it('given 0 should return 0', () => {
    const n = 0;

    // act
    expect(Fibonacci(0)).to.equal(0);
  });

  it('given 1 should return 1', () => {
    // arrange
    const n = 1;

    // act
    const result = Fibonacci(1);

    // assert
    expect(result).to.equal(1);
  });

  it('given 2 should return 1', () => {
    expect(Fibonacci(2)).to.equal(1);
  });

  it('given 3 should return 2', () => {
    expect(Fibonacci(3)).to.equal(2);
  });
});
