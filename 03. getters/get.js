class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person = new Person("Diego", "Cortes");
console.log(person.fullName); // Diego Cortes
