arr = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0987654321'];

function match(regex, str = undefined, l = undefined) {
  if(!str){
    for (elem of arr) {
      let match = elem.match(regex);
      if(!match) { 
        console.log(match);
        continue;
      }
      if(!l) { 
        console.log(elem, match)
      } else {
        console.log(elem, match.length);
      }
    }
  } else {
    if(!l) {
      console.log(str, str.match(regex));
    } else {
      console.log(str, str.match(regex).length);
    }
  }
}


function one() {
  arr = ["Kitchen Kaboodle", "Reds and blues", "kitchen Servers"]
  // Kks
  match(/[Kks]/);
}
// one();

function two() {
 str = `My cats, Butterscotch and Pudding, like to
 sleepon my cot with me, but they cut my sleep
 short with acrobatics when breakfast time rolls
 around. I need a robotic cat feeder`;
  //  /[bc][aou]t/i 
  // cat, cot, cut, bat, bot, or but
  match(/[cb](at|ot|ut)/gi, str );
}
// two();

function three() {
  const rgx = /[a-j0-9]/ig;
  arr = ["0xDEADBEEF", "1234.5678", "Jamaica", "plow ahead"];
  match(rgx);
}
// three();
function  four() {
  arr = ['0x1234', 'Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.', 'The quick brown fox jumps over the lazy dog', 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'];
  //  /[A-WYZa-wyz]/g
  match(/[^x0-9. ]/ig, false, true);
}
// four();
function five() {
  // any char that is not a letter
  rgx = /[^a-z]/ig;
  str = '0x1234abcd\
 1,000,000,000s and 1,000,000,000s.\
 THE quick BROWN fox JUMPS over THE lazy DOG!';
  match(rgx, str, true);
}
// five();
/**
 * no -> /(ABC|abc)/ !== /[Aa][Bb][Cc]/
 *
 * 
 */
function six() {
  str = 'aBc';
  console.log( str.match(/(ABC|abc)/), str.match(/(abc)/i),str.match(/[Aa][Bb][Cc]/) );
}
// six();

function nine() {
  str = `The regex /[^a-z]/i matches any character that is
  not a letter. Similarly, /[^0-9]/ matches any
  non-digit while /[^A-Z]/ matches any character
  that is not an uppercase letter. Beware: /[^+-<]/
  is at best obscure, and may even be wrong.`;
  match(/\/\[\^[a-zA-Z0-9]\-[a-zA-Z0-9]\]/g, str);
}
// nine();