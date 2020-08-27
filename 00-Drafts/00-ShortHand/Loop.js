/**
 * For
 */
const fruits = ['mango', 'peach', 'banana'];
for (let fruit of fruits)
  console.log(fruits)

/**
 * For IN
 */
const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'}
for (let key in obj)
  console.log(key) // output: continent, country, city


/**
 * ForEach
 */
const logArrayElements = (element, index, array) => console.log("a[" + index + "] = " + element);
[2, 5, 9].forEach(logArrayElements);

