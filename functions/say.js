function say(str="hello") {
  console.log(str + "!")
}

function mDo(things) {
  function stuff(yeah) {
    console.log(yeah);
  }
  stuff(things);
}

mDo("Oh Yeah!");


//  if you want to use it live in the node REPL
module.exports = { say }