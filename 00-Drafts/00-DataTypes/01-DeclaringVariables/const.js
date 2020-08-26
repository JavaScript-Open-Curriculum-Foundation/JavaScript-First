const person = 'Hans';
// person = "some guy"; 
// TypeError: Assignment to constant variable.
console.log(person);

let otherPerson = "the dude";
otherPerson = "someone";
console.log(otherPerson); // someone


const mutable = {
  name: 'Mr M',
  title: 'person'
};
mutable.title = 'teacher';
console.log(mutable);