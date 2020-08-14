

const people = ['Susie Armitage', 'Lianne Flores'];
people.push('Federico Fraser');
console.log(people);

// Objects only become immutable when they are frozen
const people2 = Object.freeze(['Susie Armitage', 'Lianne Flores']);
// people.push('Federico Fraser');
console.log(people2);
