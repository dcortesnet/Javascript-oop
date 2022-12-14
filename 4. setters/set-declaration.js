class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
}

const person = new Person("Diego", "Cortes");

person.fullName = "Juan Cortes"

console.log(person.fullName); // Juan Cortes
