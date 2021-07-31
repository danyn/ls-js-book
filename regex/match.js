
exports.arr = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0987654321'];

exports.match = function (regex, arr, str = undefined, l = undefined) {
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