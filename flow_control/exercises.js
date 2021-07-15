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

evenOrOdd(2);
evenOrOdd(4);
evenOrOdd(1);
evenOrOdd(3);
evenOrOdd(3.3);
evenOrOdd('qux')


 