class Person {
  @Nonenumerable
  get kidCount() {
    return 42;
  }
  
  get parentCount() {
    return 2;
  }
}

function Nonenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}

var person = new Person();

for (let prop in person) {
  console.log(prop);
}

console.log(person.kidCount);
