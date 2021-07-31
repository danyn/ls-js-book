let arr = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0987654321'];

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
  arr = ['reds and blues', 'the lazy cat sleeps'];
  match(/\s...\s/g);
}
// one();

function three() {
  arr = ["Hello 4567 bye CDEF - cdef\n", "0x1234 0x5678 0xABCD", "\r1F8A done"];
  // console.log(arr);
  match(/\s[a-f0-9][a-f0-9][a-f0-9][a-f0-9]\s/ig);
}
// three();

function four() {
  arr = ["The red d0g chases the b1ack cat.", "a_b c_d"]
  match(/[a-z][a-z][a-z]/ig)
}
four();