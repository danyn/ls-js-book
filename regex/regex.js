// let s = 'cast';
// if (s.match(/s/)) console.log('s');
// if (s.match(/z/)) console.log('z');
// console.log(s.match(/s/));
// console.log(s.match(/z/));

/** str.match() -> [] or null if no match */

/** 
   special meta characters
   $ ^ * + ?  () [] {} | / \ .
   not meta chars
   : ; -  ` & %

*/
// console.log('hello?'.match(/\?/));
// console.log(':;-`&%'.match(/:;-`&%/));
// console.log('yes no. '.match(/\./));

// Alternation (or statement)
let exp = /(cat|dog|rabbit)/gi;

let str = 'I have a cat RabbIt and three dogs as well as two rabbits catdogsrabbits';
// console.log(str.match(exp));

// str = "\t what? \t Oh? \n Ah? \n\n\n";

// console.log(str)
// match control characters from the language js
// exp = /(\t|\n|\r)/g



console.log(str.match(exp));
