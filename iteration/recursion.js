const doubler = function (n) {
  console.log(n);

  if (n <= 50) {
    doubler(n * 2);
  }

}
/** Fibonacci Serires
 * fibonacci(0) = 0 // by definition
 * fibonacci(1) = 1 // by definition
 * fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2) // for all n >= 2
 */

const fibonacci = function (n) {
  if(n === 0 || n ===1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

// end
