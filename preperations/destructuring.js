// destructuring and array
let arr = [1, 2, 3];
let [one, two, three] = arr;

// unpacking with spread operator
arr = [1, 2, 3, 4, 5];
[one, two, ...pack] =  arr;

// swapping variables
let  a = 10; let b = 20;
[a, b] = [b, a]




// destructuring an object
obj = {pet: 'cat', food: 'alpine\'s recipe book for cats'}
let {pet, food} = obj;
// end
