function times(a = 0) {
  return new Array(a).values()
}

for (const value of times(5)) {
  console.log(value);
}

