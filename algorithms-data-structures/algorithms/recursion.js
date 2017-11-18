function factorial(num) {
  // Base case
  if (num === 1) {
    return num;
  }

  // Factorial case
  return num * factorial(num - 1);
}
