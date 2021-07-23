function two(){
  let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
  myArray.forEach((el) => { if (el % 2 == 0) console.log(el) });
}
// two();

function three() {
  let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];
  myArray.forEach((array) => {
    array.forEach((el) => {
      if (el % 2 === 0) console.log(el);
    });
  });
}
// three();

function showMap() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  let myArray = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
  ];
  let arr_named = myArray.map((el, i, ary) => {
    if (el % 2 === 0 ) {
      return 'even';
    } else {
      return 'odd';
    }
  });
}
// showMap();


function showFilter() {
  let arr = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
  ];

  let arrFiltered = [];
  arr.forEach(subArr => {
    let res =  subArr.filter((el) => { return Number.isInteger(el) });
    arrFiltered.splice(arrFiltered.length, 0, ...res);
  })
}

// showFilter();

function five() {
  let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

  let ints = things.filter((el) =>  Number.isInteger(el) );
}
five()

function six() {
  let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
  // let lengths = arr.map(el => el.length);
  // let keep = lengths.filter(el => el % 2 !== 0);
  // let lengths = arr.map(el => el.length).filter(el => el % 2 !== 0);
  let keep = [];
  arr.forEach(el => {
    if (el.length % 2 !== 0) {
      keep.push(el.length);
    }
  })
}
// six();

function seven(){
  let array = [3, 5, 7];
  let result = array.reduce( (acc, val) => acc + (val ** 2), 0);
}
// seven();

function eight() {
  let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
  let result = arr.reduce((accumulator, current) => {
    if (current.length %2 == 1) {
      accumulator.push(current.length);
    }
    return accumulator;
  }, []);
  // [1, 5, 3]
}
// eight();
function one() {
  let arr = [1, 5, 7, 9, 11, 5, 4, 3];
  let seed = 5;
  let result; 
  let once;
  arr.forEach(el => {
    if ( once && (el === seed)) {
      result = false;
    }

    if (el === seed && !once) {
      result = true;
      once = true;
    }
  })
}
// one();

function nine() {
  let arr = [1, 5, 7, 9, 11];
  let res = arr.some((elem) => elem === 3 );
}
// nine()

function ten() {
  let arr = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
  ];
  arr[1][3] = 606;
}
ten();



// thinkenovations  -- Think;
// Deana 
