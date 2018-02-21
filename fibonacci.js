const fib = function fibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === 0) {
    return a;
  } else if (num === 1) {
    return b;
  }

  for (let i = 2; i <= num; i += 1) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
};

module.exports = fib;
