function three(){
  let object = {0: 1, 1: 2, 2: 3, length: 3};
  for (let i = 0; i < object.length; ++i) {
    console.log(object[i]);
  }
}
// three()

function four() {
  let obj = {
    b: 2,
    a: 1,
    c: 3,
  };
  let objKeys = Object.keys(obj).map( elem => elem.toUpperCase());
}
// four()

function five() {
  let myProtoObj = {
    foo: 1,
    bar: 2,
  };
  let takesProto = Object.create(myProtoObj);
}
// five();

// eight
function copyObject(toCopy, useKeys) {
  let object = {};
  const keys = Object.keys(toCopy);
  if (!useKeys) {
    object = Object.assign(object, toCopy);
    return;
  }
  useKeys.forEach(prop => {
    if (keys.includes(prop)) object[prop] = toCopy[prop];
  });
}
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};
copyObject(objToCopy, ['foo', 'qux']);