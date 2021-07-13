let a = 'a'

console.log(`a:${a}`)

{
  console.log(`block 1 -> a:${a}`)
}

{
  a = 'A'
}
console.log(`a:${a}`)

{
  let a = 'b'
  console.log(`block 3 -> a:${a}`)
}

console.log(`a:${a}`)
