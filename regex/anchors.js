let match = require('./match');

match = require('./match');
function prev() {
  arr = ['reds and blues', 'the lazy cat sleeps'];
  // anchor \b delineates the match but is not included in it
  match.match(/\b...\b/g, arr);
  // the class \s is part of the match
  match.match(/\s...\s/g, arr);
}
// prev()

function one() {
  let arr = ["The lazy cat sleeps.", "The number 623 is not a word.", "Then, we went to the movies.", "Ah. The bus has arrived."];
  match.match(/^the\b/ig, arr);
}
// one();

function two() {
arr = ["The lazy cat sleeps", "The number 623 is not a cat", "The Alaskan drives a snowcat"];
  match.match(/\bcat$/g, arr);
}
// two();

function three() {
  let arr = ["reds and blues", "The lazy cat sleeps.", "The number 623 is not a word. Or is it?"];
  match.match(/\b[a-z][a-z][a-z]\b/ig, arr);
}
// three();
/**
The first word is A or The.
There is a single space between the first and second words.
The second word is any 4-letter word.
There is a single space between the second and third words.
The third word -- the last word -- is either dog or cat.
 */
function four() {
  let arr = ['A grey cat', 'A blue caterpillar', 'The lazy dog', 'The white cat', 'A loud dog', '--A loud dog', 'Go away dog', 'The ugly rat', 'The lazy, loud dog'];
  match.match(/\b^(A|The) [a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z] (dog|cat)\b$/g, arr);
}
four();