// https://launchschool.com/books/regex/read/basic_matching
function match(regex) {
  for (elem of arr) { console.log(elem, elem.match(regex)) }
}
function one(){
   arr = ['Kx', 'BlacK', 'kelly'];
   match(/K/i);
 }
// one()

function two() {
   arr = ['Henry', 'perch', 'golf'];
   match(/h/i);
 }
//  two()

function three() { 
  arr = ["snapdragon", "bearded dragon", "dragoon"];
  match(/dragon/);
}
// three()

function four() {
  arr = ["banana", "orange", "pineapples", "strawberry", "raspberry", "grappler"];
  match(/(banana|orange|apple|strawberry)/);
}
// four()

function five() {
  arr = ["This line has spaces", "This,line,has,commas,", "No-spaces-or-commas"];
  match(/( |,)/g);
}
// five();

function six() {
  arr = ["blueberry", "blackberry", "black berry", "strawberry"];
  match(/(blue|black)berry/g);
}
six();