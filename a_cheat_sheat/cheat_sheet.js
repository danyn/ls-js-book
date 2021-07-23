// Array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
/** .entries()
 * 
 * const a = ['a', 'b', 'c'];
 * let iterator = a.entries();
 * 
 * for (const [index, element] of a.entries()) {
 *   console.log(index, element);
 * }
 *       0 'a'
 *       1 'b'
 *       2 'c'
 *
 *  for (let e of iterator) {
 *    console.log(e);
 *  }
 *      [0, 'a']
 *      [1, 'b']
 *      [2, 'c']
 */
function showEntries() {
  const arr = [1,2,3];
  arr.qwerty = 'alpha beta 09';
  for (const [i, el] of arr.entries()) {
    console.log(i, el);
  }
}
// showEntries()

// Array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
/** .splice()
 * 
 * splice(start)
 * splice(start, deleteCount)
 * splice(start, deleteCount, item1)
 * splice(start, deleteCount, item1, item2, itemN)
*/
// end

function showSplice() {
  let arr, arr_removing, arr_removing_inserting, arr_inserting;
  arr = [1, 2, 3, 4, 5];
  arr_removing = [...arr];
  arr_removing_inserting = [...arr];
  arr_inserting = [...arr];

  let elems_removing = arr_removing.splice(1, 3) // [2,3,4]
  let elemes_removing_inserting = arr_removing_inserting.splice(2, 1, 3.3, 3.9);
  arr_inserting.splice(3, 0, ...arr);
  // same as concat
  arr_inserting.splice(arr_inserting.length,0,'on the end');
  let other = arr_inserting.concat(arr);
  
}
// showSplice();

// 
/** slice()
 * returns copies , does not update the caller
 * slice()
 * slice(start)
 * slice(start, end)
 */

function showSlice() {
  let arr = [1, 2, 3, 4, 5];
  let elems = arr.slice(1,3) //[2,3]
  // all
  let allElems = arr.slice();
  // let a, b, c, d, e;
  let [a, b, c, d, e] = allElems;
}
showSlice()