// ternary
function make_one(condition) {
  if (condition) {
    return {cat: 'red'}
  } else {
    return {cat: 'green'}
  }
}
let obj = false ? make_one(true) : make_one(false);

// console.log(obj);

// switch
function trans(val) {
  return val + 1;
}
let n = 11;

switch (n) {
  case trans(6):
    console.log('n is 7');
    break;
    case 8:
    case 9:
    case trans(10):
      console.log('n is 8, 9, or 11');
}

