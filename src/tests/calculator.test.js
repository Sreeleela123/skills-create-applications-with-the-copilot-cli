const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator - basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Calculator - edge cases', () => {
  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow('Division by zero');
  });

  test('operations with negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(subtract(-2, 3)).toBe(-5);
    expect(multiply(-4, 5)).toBe(-20);
    expect(divide(-20, 5)).toBe(-4);
  });

  test('floating point operations', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.30000000000000004);
    expect(divide(1, 4)).toBeCloseTo(0.25);
  });
});
