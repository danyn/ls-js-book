const factorial = function(n) {
  let solution = 1;
  for (let i = 1; i <= n; i += 1) {
    solution *= i;
  }
  return solution;
}
