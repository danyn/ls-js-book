let arr = ['Dude', 'Man', 'Garbonzo', 'Finger', '5 Layer Dip'];
let arrUpperCase = [];
let i = 0;

while (i < arr.length) {
  arrUpperCase.push(arr[i].toUpperCase());
  i += 1;
}

/*
let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');

for and while can do the same work but have a uniq syntax
for (initialization; condition; increment) {
  // loop body
}

initialization;
while (condition) {
  // loop body
  increment;
}
*/

// taking a look at using three ways to iterate
// keywords while, do while, for, break, continue.

// array.each
arr.forEach((el) => {
  console.log(el);
})

arr.forEach(el => console.log(el));

i = 0
while (i < arr.length) {
  console.log(i, arr[i]);
  i += 1;
}

for (let i = 0; i < arr.length; ++i) {
  console.log(i, arr[i - 1], arr[i], arr[i + 1]);
};

// there is one more kind of loop that 
// is used for enumerable properties that
// are keyed by strings
console.log('------------------')
const obj = { a:1, b:2, c:3 };
for (const prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}

