let match = require('./match');

// Homonyms (contextual meaning)
/**
 ? 
 a? (zero or one a) Quantifer
 a+? (one or more a lazy) Modifies a Quantifier to take shortest possible match

 ^
 ^a  Anchor (sentence starts with a) positional argument
 [^abc] Negation (sequence must not inlucde a or b or c)

 */
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


// https://launchschool.com/books/regex/read/anchors
/** ANCHORS
 * 
 * ^start , end$
 * \b word boudary 
 * 
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

/** Quantifiers (how many)
 
  quantifiers match the argument to the left once and then repeat
  as many timers as the rule for quantifier 

  ###################
  Preset Quantifiers: * (zero or more), + (one or more), ? (zero or one)
  ###################

  Star: * == {0,} matches zero or more 
  'bag bg baag rag raag'.match(/\bba*g\b/g)->[ 'bag', 'bg', 'baag' ]
  needs to use word boundaries and be in the middle of a match othewise it matches anyting

  Question mark: ?  == {0,1} zero or one 
  'bag bg baag rag raag'.match(/\bba?g\b/g) -> [ 'bag', 'bg' ]
  should occur using \b (word boundaries) and inside words, othwerwise matches anything.

  Plus: +  == {1,} one or more
  'bag bg baag rag raag'.match(/\bba+g\b/g) -> [ 'bag', 'baag' ]


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

/** Lazy Quantifier ? => ({1,}?) follows a quantifier +?, *?, ??
 Greedy Matching:
 Regex will try to match the longest possible string.  This is not a concern when words are well
 defined and use /\bexpression\b/ word boundaries.
 When matching inside of words for the small possible match you just use

      https://d186loudes4jlv.cloudfront.net/regex/files/greedy-vs-lazy.pdf
      matters when using character classes that do not exist beside \b(word boundaries)

'cataaacat caataaaacat ct rat raat rt'.match(/c.*t/g) ->[ 'cataaacat caataaaacat ct rat raat rt' ]
'cataaacat caataaaacat ct rat raat rt'.match(/c.*?t/g) ->[ 'cat', 'cat', 'caat', 'cat', 'ct' ]

 */

/** Not VS Startswith
 
// NOT [^]
 'abcword xyzword  word'.match(/\b[^(abc|xyz)]word\b/g) -> [ ' word' ]


// Starts with ^expression means the whole String starts 
  as opossed to boundaries \b \b which  are often more useful.  
  this does not match since the whole string only starts with abc:
  'abcword xyzword lmnword word'.match(/\b^(abc|xyz)word\b/g) -> [ 'abcword' ]
  This matches as you would think:
  'abcword xyzword lmnword word'.match(/\b(abc|xyz)word\b/g) -> [ 'abcword', 'xyzword' ]

 */

  /** Back References
   *  Back references use a capture group to match the next occurance
   * This can be used like an OR kind of behaviour

   'I said, "Can you open the time portal"'.match(/".{1,}"/)
    [
      '"Can you open the time portal"',
      index: 8,
      input: 'I said, "Can you open the time portal"',
      groups: undefined
    ]
    "I said, 'Can you open the time portal'".match(/".{1,}"/)
    null

    "I said, 'Can you open the time portal'".match(/(["']).{1,}\1/)
    [
      "'Can you open the time portal'",
      "'",
      index: 8,
      input: "I said, 'Can you open the time portal'",
      groups: undefined
    ]
    Here \1 is a  "backreference" which is just the 1st capture group
   
    ####### You can also name the group if wanted:
    "I said, 'Can you open the time portal'".match(/(?<quo>["']).{1,}\k<quo>/)
    [
      "'Can you open the time portal'",
      "'",
      index: 8,
      input: "I said, 'Can you open the time portal'",
      groups: [Object: null prototype] { quo: "'" }
    ]

    #### OR like behaviour of capture groups applications:
    if text.match(/".*?"/) || text.match(/'.*?'/) -> "Got a quoted string"

   */

/**Find and Replace (Replacement)
 
  'holy fuck, did you see that? No, that is crap'.replace(/fuck|crap/g, '****')
   -> 'holy ****, did you see that? No, that is ****'
 
  Can be used with backreferences:
  'He said, "you are the best"'.replace(/(['"]).+?\1/, '$1you are the fastest$1')
   ->'He said, "you are the fastest"'
*/

/** EXAMPLES */

function negation() {
  // negation is like subtraction 
  // it goes from ^ to the argument on its right
  // match(/[a-p][^aeiou]/ig);
  // any of a-p then followed by anything that is not aeiou
  // match(/[^bdfhjlnprtvxz]/gi);
  // negation always occurs inside  a character class [^1234]
  // because the same symbole ^ used outside of [] means match from start 
  //  so [^] => negation and ^ => anchor start
  // console.log('fat mat bat'.match(/[^b]at/g)); //['fat', 'mat']
  console.log('abccat defcat'.match(/\b[^(abc)].{3}(cat){1}\b/g));
}
negation();