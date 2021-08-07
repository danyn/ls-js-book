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
  // it goes from ^ to the argument on its right
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
 * Insead they use a  symbol 
 *  .  any char
 *  [^] any char including carraige returns and all whitespace (negated nothing [^])
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
 * 
 * ^start
 * 
 * end$
 * 
 * \b word boudary 
 * word boudnary matches work at the beginning of a string the end of
 * a string and between word characters where one non word character separates
 * where word characters are [A-Za-z0-9_]
 * so while non word characters are ^[A-Za-z0-9_]
 * the likely chars are [ \r\t\n]
 * but also include [*&^%$#@!<>?=+~] etc..
 * so any of these chars satify a word boundary
 */


// https://launchschool.com/books/regex/read/quantifiers
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers

/**
  These quantifiers match the character to the left once and then repeat
  as many timers as the rule of the quantifier yields.

  ###################
  Preset Quantifiers: * (zero or more), + (one or more), ? (zero or one)
  ###################

  Star: * matches zero or more so it needs to use word boundaries and be in the middle of a match
  'bag bg baag rag raag'.match(/\bba*g\b/g)->[ 'bag', 'bg', 'baag' ]

  Plus: + one or more
  'bag bg baag rag raag'.match(/\bba+g\b/g) -> [ 'bag', 'baag' ]

  Question mark: ? zero or one again should occur using \b (word boundaries) etc.
  'bag bg baag rag raag'.match(/\bba?g\b/g) -> [ 'bag', 'bg' ]
  This is useful in dates
  '2017-01-11'.match(/\b\d{4}-?\d{2}-?\d{2}\b/g) ->[ '2017-01-11' ]
  '20170111'.match(/\b\d{4}-?\d{2}-?\d{2}\b/g) -> [ '20170111' ]
  altenation inside match groups works and can occur more than once (?|?)(?|?)
  '2017/01/11'.match(/\b\d{4}(-?|\/?)\d{2}(-?|\/?)\d{2}\b/g) -> [ '2017/01/11' ]

  ##################
  Range Quantifier: {n} {n,} {n,n2} and work on the argument to its right (character class, group, or single)
  ##################
  {n} precicely n
  {n,} n or more
  {n, n2} matches from n up to n1 no more than n1 and no less than n.
  
  Using a group as the argument
  // exactly
  'bar barbar barbarbar nar narnar narnarnar'.match(/\b(bar){1}\b/g) -> [ 'bar' ]
  'bar barbar barbarbar nar narnar narnarnar'.match(/\b(bar){2}\b/g) -> [ 'barbar' ]
  // at least
  'bar barbar barbarbar nar narnar narnarnar'.match(/\b(bar){2,}\b/g) -> [ 'barbar', 'barbarbar' ]
  // from to
  'bar barbar barbarbar nar narnar narnarnar'.match(/\b(bar){1,2}\b/g) -> [ 'bar', 'barbar' ]
  
  Using a character class as the argument
  // four letter words
  'that and this are four letter words'.match(/\b[a-z]{4}\b/g)-> [ 'that', 'this', 'four' ]
  // three or four letter words
  'that and this are four letter words. It has two letters'.match(/\b[a-z]{3,4}\b/gi)
   -> [
      'that', 'and',
      'this', 'are',
      'four', 'has',
      'two'
      ]

  */

/**
 Greedy Matching:
 
 Regex will try to match the longest possible string.  This is not a concern when words are well
 defined and use /\bexpression\b/ word boundaries.
 When matching inside of words for the small possible match you just use
 
 Question mark ? after the quantifier. This makes question mark overloaded akwardly
 because: ? as a quantifier also means (zero or one)
'cat caat ct rat raat rt'.match(/ca?t/g) ->[ 'cat', 'ct' ]

      needs some thought if required:
      https://d186loudes4jlv.cloudfront.net/regex/files/greedy-vs-lazy.pdf
      really only matters when using large character classes like .(anything) and no \b(word boundaries)

'cataaacat caataaaacat ct rat raat rt'.match(/c.*t/g) ->[ 'cataaacat caataaaacat ct rat raat rt' ]
'cataaacat caataaaacat ct rat raat rt'.match(/c.*?t/g) ->[ 'cat', 'cat', 'caat', 'cat', 'ct' ]

 */