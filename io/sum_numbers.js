let rlSync = require('readline-sync');

let n1 = rlSync.question('Enter the value of the first number: ');
let n2 = rlSync.question('Enter the value of the second number: ');
let sum = Number(n1) + Number(n2);

console.log(`The numbers ${n1} and ${n2} sum to ${sum}`);