// https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
let a1, a2, a3, aS, aB;
let array = [0,1,2];
// array.length is one bigger than the last index of the array
// when appending the previous element array.length - 1 is the last element
array[array.length] = '.'; //push()
const frozenArray = Object.freeze(array.slice());
// truly contant 1d array
frozenArray[0] = Infinity || 'smelly cat - the song' ;
// Infinit is truthy
let shortCircuitAssignment =  Infinity || 'smelly cat - the song' ;
// getting elements slice()
aS = array.slice(0,1)
aB = array[3]
// removing elements (also returning the removed elements)
a1 = array.pop(); // the element itself
a2 = array.splice(0,1); //returns array of them

// setter, getter
// array[] 

// getter (returns a shollow copy as an array) no modify
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//  slice is just a getter type function
// array.slice(Integer, Integer); 

// getter remover
// array.pop

// getter remover setter insert 
// splice is a power house method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// array.splice(Integer, Integer);

// forEach is a method that accesses each element of the array
// it returns null and can be used in any fashion when you want to touch every element of an array
// forEach((el)=>{});
array.forEach((el) => { console.log(el) });
// end