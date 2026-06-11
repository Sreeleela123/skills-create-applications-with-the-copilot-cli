// Test runner for src/calculator.js
// Runs the example operations shown in the image:
// 2 + 3
// 10 - 4
// 45 * 2
// 20 / 5

const { add, subtract, multiply, divide } = require('./calculator');

const cases = [
  ['2 + 3', () => add(2, 3)],
  ['10 - 4', () => subtract(10, 4)],
  ['45 * 2', () => multiply(45, 2)],
  ['20 / 5', () => divide(20, 5)],
];

for (const [label, fn] of cases) {
  try {
    const res = fn();
    console.log(`${label} = ${res}`);
  } catch (err) {
    console.error(`${label} -> Error: ${err.message}`);
  }
}
