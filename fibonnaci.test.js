const fib = require('./fibonacci'); // Import fib function from module

describe('Computes Fibonacci numbers', () => {
  test('Computes first two numbers correctly', () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
  });

  test('Computes arbitrary Fibonacci numbers', () => {
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(6)).toBe(8);
  });
});
