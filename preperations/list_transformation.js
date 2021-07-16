const CreateSuspectObject = function (name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log(`my name is ${name}.`)
    },
  };
}

const CreateSuspectList = function (suspects, hydrator) {
  list = [];
  for (let i = 0; i < suspects.length; i++) {
    list.push(hydrator(suspects[i]));
  }
  return list;
}

const suspects = ['Lana White', 'Dave Green', 'Tina Scarlet', 'James Brown'];
let suspectsList = CreateSuspectList(suspects, CreateSuspectObject);
// end

