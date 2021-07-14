function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function times(a, b) {
  return a * b;
}

res = times(add(20, 45), subtract(80, 10)); //4550
res = add(subtract(80, 10), times(subtract(20, 6), add(30, 5))); // => 560

console.log(res);
