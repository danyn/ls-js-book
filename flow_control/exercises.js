(false || (true && false)) === false;

(true || (1 + 2)) === true;

((1 + 2) || true) === 3;

(true && (1 + 2)) === 3;

(false && (1 + 2)) === false;

((1 + 2) && true) === true;

((32 * 4) >= 129) === false;

(false !== !true) === false;

(true === 4) === false;

(false === (847 === '847')) === true;

(false === (847 == '847')) === false;


((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false) === true;
 /**
  * ( false || false || true ) || false
  * ( false || true ) || false
  * ( true ) || false // true
  */

 function isNumeric (a) {
   return typeof a === 'number';
 }

 function isFloat (a) {
   return (typeof a === 'number') && (Number.isInteger(a) === false) 
 }


function evenOrOdd(n) {
  
  if (Number.isInteger(n) === false){
    console.log('integer type required');
    return;
  }

  if (n % 2 === 0) {
    console.log('even')
  } else {
    console.log('odd')
  }
}
/*
evenOrOdd(2);
evenOrOdd(4);
evenOrOdd(1);
evenOrOdd(3);
evenOrOdd(3.3);
evenOrOdd('qux')
*/

// refactor ternary if

function foo() {
  return true;
}
function qux() {
  return "qux";
}


function baz() {
  // refactor to use an if statement
  return foo() ? 'bar' : qux();
}

function re_baz() {
  if (foo()) {
    return 'bar'
  } else {
    return qux();
  }
}
 
// console.log(baz());
// console.log(re_baz());

function allCaps(str='', length = 10) {
  return  (str.length > 10) ? str.toUpperCase() : str;
}

// console.log(allCaps('is short.'));
// console.log(allCaps('This is a little longer.'));

/*Write a function that logs whether a number is 
between 0 and 50 (inclusive),
 between 51 and 100 (inclusive), 
 greater than 100, 
 or less than 0.
 */ 
function numberRange(n) {
  if (n < 0) {
    return `${n} is less than 0`;
  }
  else if (n <= 50) {
    return `${n} is between 0 and 50.`;
  } else if (n <= 100) {
    return `${n} is between 51 and 100.`
  } else {
    return `${n} is greater than 100.`;
  }
}

console.log(numberRange(3));
console.log(numberRange(52));
console.log(numberRange(-1));
console.log(numberRange(101));