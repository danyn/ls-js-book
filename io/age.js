let rlSync = require('readline-sync');

age = Number(rlSync.question('How old are you, mang? '));

n = 10;

// six decades
while (n < 61) {
  console.log(`In ${n} years, you will be ${n + age} years old.`);
  n += 10;
}