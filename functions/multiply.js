let rlSync = require('readline-sync');

a = Number(rlSync.question("Enter the first number "));
b = Number(rlSync.question("Enter the second number "));

function mul(a, b) {
  return a * b;
}

console.log(`${a} * ${b} = ${mul(a, b)}`);
