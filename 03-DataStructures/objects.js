
// Here are 10 practical use cases for JavaScript objects:

// 1. Storing configuration settings for an application, such as API keys, URLs, and other settings.
// 2. Representing a user's profile, including their name, email, address, and other personal information.
// 3. Holding key-value pairs in a dictionary or a lookup table for quick access to data.
// 4. Modeling complex hierarchical data, such as a file system, an organization chart, or a product catalog.
// 5. Caching data to improve performance, such as memoization in recursive functions.
// 6. Organizing and encapsulating related functions and data in a module or a namespace.
// 7. Representing the state of a UI component, such as the current value of a form input or the checked status of a checkbox.
// 8. Describing the structure and metadata of a JSON object for data serialization and deserialization.
// 9. Storing temporary data in a client-side web application using the window.localStorage object.
// 10. Using objects as a data store for simple key-value databases, such as IndexedDB or WebSQL in the browser.



// Traversal Object


//Example 1: Using for...in loop to traverse an object (Basic)
const obj = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };
  
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  
// Example 2: Using Object.keys() and forEach() to traverse an object (Intermediate)
Object.keys(obj).forEach((key) => {
    console.log(`${key}: ${obj[key]}`);
});

// Example 3: Recursively traversing a nested object with depth (Expert)
const obj2 = {
  name: {
    firstName: 'John',
    lastName: 'Doe',
  },
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: {
      name: 'United States',
      code: 'US',
    },
  },
};

function traverseObject(obj, prefix = '') {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        traverseObject(obj[key], newKey);
      } else {
        console.log(`${newKey}: ${obj[key]}`);
      }
    }
  }
}

traverseObject(obj2);
/**************************
In this expert example, we define a traverseObject function that takes an object and an optional prefix string as arguments. 
It then iterates through the object's keys and checks if the corresponding value is an object itself (excluding arrays). 
If it is, the function calls itself recursively with the nested object and the current key appended to the prefix. 
If it's not an object, it logs the key and value with the accumulated prefix. 
This will traverse an object of any depth and log the keys and values with their full path in the object hierarchy.
***************************/
