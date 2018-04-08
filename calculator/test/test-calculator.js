var expect = require('chai').expect;
const Calc = require('../calc');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calc();
  });

  it('when passed 1 and 1 returns 2', () => {
    // arrange
    const x = 1;
    const y = 1;

    // act
    const total = calc.add(x, y);

    // assert
    expect(total).to.equal(2);
  });
});
