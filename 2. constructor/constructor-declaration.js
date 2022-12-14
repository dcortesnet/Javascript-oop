class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person("Diego", "Cortes");

console.log(person); // Person { firstName: 'Diego', lastName: 'Cortes' }