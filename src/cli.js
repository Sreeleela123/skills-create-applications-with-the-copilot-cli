#!/usr/bin/env node

// CLI for the calculator
// Supported operations:
//  - addition: add, +
//  - subtraction: subtract, -, sub
//  - multiplication: multiply, *, x
//  - division: divide, /

const { add, subtract, multiply, divide } = require('./calculator');

function usage() {
  console.error('Usage: node src/cli.js <operation> <num1> <num2>');
  console.error('Operations: add (+), subtract (-), multiply (*), divide (/)');
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 3) {
  usage();
}

const op = args[0].toLowerCase();
const a = Number(args[1]);
const b = Number(args[2]);

if (!Number.isFinite(a) || !Number.isFinite(b)) {
  console.error('Error: both operands must be valid numbers.');
  process.exit(2);
}

try {
  let result;
  switch (op) {
    case 'add':
    case '+':
      result = add(a, b);
      break;
    case 'subtract':
    case 'sub':
    case '-':
      result = subtract(a, b);
      break;
    case 'multiply':
    case 'mul':
    case '*':
    case 'x':
      result = multiply(a, b);
      break;
    case 'divide':
    case 'div':
    case '/':
      result = divide(a, b);
      break;
    default:
      console.error(`Unknown operation: ${op}`);
      usage();
  }

  console.log(result);
  process.exit(0);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(3);
}
