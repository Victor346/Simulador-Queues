function factorial(n) {
  let acc = 1;
  for (let i = n; i > 0; i--) {
    acc *= i;
  }
  return acc;
}

export { factorial };
