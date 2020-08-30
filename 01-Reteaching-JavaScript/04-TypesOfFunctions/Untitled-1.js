// function Person(first, last, age) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
// }
// const myFather = new Person("John", "Doe", 50, "blue");

class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
}

let me = new Person("John", "Doe", 50);

console.log(me);