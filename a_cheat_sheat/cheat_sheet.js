// Array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
/** instance.entries() -> itertator object {} has a .next() method
 * 
 *  arr
 * [ 'a', 'b', hm: 'ah' ]
 * 
 * for (elem of arr.entries()) {p(elem)}
 * [ 0, 'a' ]
 * [ 1, 'b' ]
 */


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
/** .splice() -> new [], modifies []
 * 
 * Updates -> DELETE , REPLACE, INSERT  
 * returns deleted elements  -> [].length = deleteCount
 * when deleteCount is 0 INSERT -> [].length = 0
 * when no item1... DELETE delete count from start -> [].length = deleteCount
 * when item1 & deleteCount REPLACE -> [].length = deleteCount
 * splice(start)
 * splice(start, deleteCount)
 * splice(start, deleteCount, item1)
 * splice(start, deleteCount, item1, item2, itemN)
*/


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
/** slice() -> new [].length = end - start returns from start up to but not including end
 * 
 * GET
 * slice()
 * slice(start)
 * slice(start, end)
 */

// Objects

/** delete 
 * DELETE
 * 
 * person = {name: 'Jane', height: '5 ft', gender: 'female'}
 * delete person.gender -> true
 * { name: 'Jane', height: '5 ft' }
 * 
 */

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
/** Object.freeze(object) -> object
 * NO CHANGE ALLOWED NO UPDATE, DELETE, REPLACE on properties
 * Object.freeze(person)
 * delete person.gender -> false
 * person.gender = 'male' -> 'male'  but does not affect object
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
/** Object.create(object) 
  subObject = Object.create(object)
  subObject inherits the prototype of object
*/

// iteration of Objects

/** for ( property in object) {property} -> undefined  
 * object[property] -> value 
 */


/** Object.keys(object) -> [[property, value], [property, value]] */

/** Methods of Object class that return arrays:
 person = { height: '5 ft', gender: 'female' }
 Object.keys(person) -> [ 'height', 'gender' ]
 Object.values(person) ->[ '5 ft', 'female' ]
 Object.entries(person) ->[['height', '5 ft'], ['gender', 'female']]
 */

// Iterators //

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
/** for (element of iterable) { element } -> each element 
 * What are the elements of...
 * only works on iterable objects!
 * 
 * Built in Iterable objects are the best use case
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#built-in_iterables
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
/** for (property in iterable) { property } -> each property
 *  yeilds each enumerable property in the prototype chain
 * 
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
/** Object.entries(object) -> [[prop, value], [prop, value]]
 *  yields enumerable properties of self as array of array
 * 
 * Array.isArray(Object.entries(Object)) -> true
*/



// destructuting

/**
 *  const a = ['a', 'b'];
 * 
 * for (const [index, element] of a.entries()) {
 *   console.log(index, element);
 * }
 *       0 'a'
 *       1 'b'
 * 
 */