class HashTable {
    constructor(size = 50) {
      this.size = size;
      this.buckets = new Array(size);
    }
  
    // Hash function
    _hash(key) {
      let hash = 0;
      for (const char of key) {
        hash = (hash + char.charCodeAt(0)) % this.size;
      }
      return hash;
    }
  
    // Set a key-value pair in the hash table
    set(key, value) {
      const index = this._hash(key);
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
      this.buckets[index].push([key, value]);
    }
  
    // Get the value associated with a key
    get(key) {
      const index = this._hash(key);
      if (!this.buckets[index]) {
        return null;
      }
  
      for (const [storedKey, value] of this.buckets[index]) {
        if (storedKey === key) {
          return value;
        }
      }
      return null;
    }
  
    // Other hash table operations (remove, update, etc.) can be added here
  }
  
  // Example usage:
  const hashTable = new HashTable();
  
  hashTable.set('firstName', 'John');
  hashTable.set('lastName', 'Doe');
  hashTable.set('age', 30);
  
  console.log(hashTable.get('firstName')); // Output: 'John'
  
