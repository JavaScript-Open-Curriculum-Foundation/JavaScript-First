const StringPrimitive = "Hello";
console.log(typeof StringPrimitive) // string
console.log(StringPrimitive.__proto__ ) //
console.log(StringPrimitive[0]) // "H"
StringPrimitive[0] = 'k';
console.log(StringPrimitive[0]) // "H"

const StringNonPrimitive = new String("World");
console.log(typeof StringNonPrimitive ) // object
console.log(StringNonPrimitive.__proto__ ) // String: '']
console.log(StringNonPrimitive[0]) // "W"
StringNonPrimitive[0] = 'k';
console.log(StringNonPrimitive[0]) // "W"