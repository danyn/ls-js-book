let rlSync = require('readline-sync');

age = Number(rlSync.question('How old are you? '));

// 6 decades
for (let i = 10; i <= 60; i += 10) {
  console.log(`in ${i} years you will be ${age + i}`)
}

