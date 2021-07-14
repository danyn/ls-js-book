let rlSync = require('readline-sync');

function getName(question) {
  return rlSync.question(question);
}
let first_name = getName("What is you first name? ");
let last_name = getName("What is your last name? ");


console.log(`Hello, ${first_name} ${last_name}.`);