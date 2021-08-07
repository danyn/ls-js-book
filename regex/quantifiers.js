/**Write a regex that matches any word that
 *  begins with b and ends with an e
 * and has any number of letters in-between */
function one() {
  let r = /\bb[a-z]*e\b/g;
  let a = 'To be or not to be'.match(r);
  let b = 'Be a busy bee'.match(r);
  let c = 'I brake for animals.'.match(r);
  console.log(a,b,c);
}
// one();
/**
 * Write a regex that matches any line of text that ends with a ?
 */
function two() {
  let r = /\?$/g ;
  let a = !!'What\'s up, doc?'.match(r);
  let b = !!'Say what? No way.'.match(r);
  let c = !!'?'.match(r);
  let d = !!'Who? What? Where? When? How?'.match(r);
  console.log(a,b,c,d);
}
// two();

// same but no empty start sequence

function three() {
  let r = /.+\?$/g ;
  let a = !!'What\'s up, doc?'.match(r);
  let b = !!'Say what? No way.'.match(r);
  let c = !!'?'.match(r);
  let d = !!'Who? What? Where? When? How?'.match(r);
  console.log(a,b,c,d);
}
// three();

/**
 * Write a regex that matches any line of text 
 * that contains nothing but a URL. 
 * URL begins with http:// or https://, 
 * and continues until it detects
 * a whitespace character or end of line.
 */
// {1,} <==> +
// {0,1} <==> ?
// {0,} <==> *

let a = 'http://launchschool.com/ ';
let b = 'https://mail.google.com/mail/u/0/#inbox ';
let c = 'htpps://example.com';
let d =  'Go to http://launchschool.com/';
let e = 'https://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello';
let f = ' http://launchschool.com/ ';
function four(){
  let r = /^https{0,1}:\/\/\S{1,}\.\S{1,}\/{0,1}\S{0,}$/g;
  console.log(a.match(r),b.match(r),c.match(r),d.match(r),e.match(r),f.match(r));
}
// four();

// Modify your regex from the previous exercise so the URL can have 
// optional leading or trailing whitespace, 
// but is otherwise on a line by itself.

function five(){
  let r = /^\s{0,}https{0,1}:\/\/\S{1,}\.\S{1,}\/{0,1}\S{0,}\s{0,}/g;
  console.log(a.match(r),b.match(r),c.match(r),d.match(r),e.match(r),f.match(r));
}
// five();

/**
 * Modify your regex from the previous exercise so the URL
 * can appear anywhere on each line, so long as it begins at a word boundary.
 */

function six() {
  let r = /\bhttps{0,1}:\/\/\S{1,}\.\S{1,}\/{0,1}\S{0,}\b/g;
  console.log(a.match(r),b.match(r),c.match(r),d.match(r),e.match(r),f.match(r));
}
// six();
/**
 * Write a regex that matches any word that contains
 *  at least three occurrences of the letter i
 */
function seven() {
  
  let r = /\b[a-z]{0,}i[a-z]{0,}i[a-z]{0,}i[a-z]{0,}\b/gi;
  r = /\b([a-z]{0,}i){3}[a-z]{0,}\b/gi;
 let a = 'Mississippi';
 let b = 'ziti 0minimize7';
 let c = 'inviting illegal iridium';

 console.log(a.match(r), b.match(r), c.match(r) );
}

// seven();

function htm() {
  // question mark doing lazy evaluation goes after a quanitifier
  // needed to keep captures withing the tag close otherwise its too greedy and claims extra sibling tags
  // untill the next closing h1
  let r = /<h1>.*?<\/h1>/g;
let a ='<h1>Main Heading</h1>';
let b ='<h1>Another Main Heading</h1>';
let c ='<h1>ABC</h1> <p>Paragraph</p> <h1>DEF</h1><p>Done</p>';
console.log(a.match(r), b.match(r), c.match(r))
}
htm()