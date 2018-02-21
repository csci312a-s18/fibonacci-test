const fib = function fibonacci(fibNum) {
  const num = Math.ceil(fibNum);
  let a = 0;
  let b = 1;

  if (num <= 0) {
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
