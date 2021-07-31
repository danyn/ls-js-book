/** 
 * Character classes uses [abc]
 * this allows the string to be split into 
 * something that is like (a|b|c)
 * alternation: (cat|dog)
 * character classes: [abc]
 * character class metachars   ^ \ []   - 
 * regex metachars             ^ \ []   * + ?  ()  {} | / . $
 * not meta chars      : ; ` & %        -
 * so - is a metachars but only for charatcter classes
 * character class [] -> ^ only meta when it comes first
 *                    -> - only meta when it does not come first
 *                    -> [ * + ?  ()  {} | / . $] these are not meta any more as [] a character class
 * 
 */


function synoms() {
  arr = ['car', 'cat'];
  // character class + alternation
  match(/[cr](at|ar)/);
  // alternation + alternation
  match(/(c|r)(at|ar)/);
}
// synoms();
/**
 * the match is the same but only alternation produces submatches
  car [ 'car', 'ar', index: 0, input: 'car']
  cat [ 'cat', 'at', index: 0, input: 'cat ]
  car [ 'car', 'c', 'ar', index: 0, input: 'car']
  cat [ 'cat', 'c', 'at', index: 0, input: 'cat']
 */

function characterClassesConcat() {
  arr = ["a2", "Model 640c1", "a1 a2 a3 b1 b2 b3 c1 c2 c3 d1 d2 d3"];
  // concatenate character classes in order
  match(/[abc][123]/g);
}
// characterClassesConcat();

function characterClassRanges() {
  arr = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0987654321'];
  rgx1 = /[a-z]/g; // lower case alpabet;
  rgx2 = /[a-z]/ig; // entire alphabet;
  rgx3 = /[k-p]/g;
  rgx4 = /[0-9]/g;
  rgxs = [rgx1, rgx2, rgx3, rgx4 ];
  for (rgx of rgxs) {
    console.log(rgx); 
    match(rgx);
  }
}
// characterClassRanges();

function hexaDecimal() {
  arr = ['D', 'E', 'F', '1', '2f' ];
  // match(/[a-fA-F0-9]/);
  
}
// hexaDecimal();

function negation() {
  // negation is like subtraction 
  // it goes from ^ to the rest of the char string in the class
  // match(/[a-p][^aeiou]/ig);
  // any of a-p then followed by anything that is not aeiou
  // match(/[^bdfhjlnprtvxz]/gi);
  // negation always occurs inside  a character class [^1234]
  // because the same symbole ^ used outside of [] means match from start 
  //  so [^] => negation and ^ => anchor start
  match(/[^b]at/g, 'fat mat bat mick');

}
// negation();


/**
 * Character class shortcuts are ways to get common classes
 * without defining your own using []
 * Insead the use a  symbol 
 *  .  any char [^] any char including carraige returns etc 
 * 
 *  Whitespace -> space (' '), tab ('\t'), vertical tab ('\v'), carriage return ('\r'), line feed ('\n'), form feed ('\f')
 *  \s == white space == [ \t\v\r\n\f]
 *  \S anything that is not white space
 *  
 *  DIGITS
 *  \d = digits = [0-9]
 *  \D = anything that is not a digit = [^0-9]
 * 
 * WORDS
 *  \w = [a-zA-Z0-9_] 
 *  \W = ^[a-zA-Z0-9_]
 *  
 * 
 *
*/

function anyChar() {
  s = `a
  very good 6^ l;'".? `;
  match(/./gm, s);
  match(/[^]/gm, s);
}
// anyChar();

function whiteSpace() {
  arr = ['four score', 'four-score\t', 'four\rscore', 'four-score'];
  match(/\s/g);
}
// whiteSpace();

function nonWhiteSpace() {
  arr = ['four score', 'four-score\t', 'four\rscore', 'four-score'];
  match(/\S/g);
  match(/./g); //same as above but includes but ' ' and  excludes  \n \r
}
// nonWhiteSpace(); 
match(/\S/, '\t\v\r\n\f '); //-> null
match(/./g, '\t\f\n\r\v '); //-> [ '\t', '\f', '\x0B', ' ' ] excludes \n \r

// https://launchschool.com/books/regex/read/anchors
/**
 * ANCHORS
 * ^start
 * end$
 * \b word boudary 
 * word boudnary matches work at the beginning of a string the end of
 * a string and between word characters where one non word character separates
 * where word characters are [A-Za-z0-9_]
 * so while non word characters are ^[A-Za-z0-9_]
 * the likely chars are [ \r\t\n]
 * but also include [*&^%$#@!<>?=+~] etc..
 * so any of these chars satify a word boundary
 */