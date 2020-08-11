// let word = 'snow'
// console.log(word) // "know"
// word = `k${word.slice(1)}`
// console.log(word) // "know"

// with const
const str = new String('The quick dog.');
str.slice(-5) // dog
console.log(str.slice(-4)) 

let a = 'snow';
let b = a;
a = 'know';
console.log(b);
console.log(a);