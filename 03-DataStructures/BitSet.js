class BitSet {
    constructor(size = 32) {
      this.size = size;
      this.bits = new Uint32Array(Math.ceil(size / 32));
    }
  
    add(value) {
      const index = Math.floor(value / 32);
      const position = value % 32;
      this.bits[index] |= 1 << position;
    }
  
    has(value) {
      const index = Math.floor(value / 32);
      const position = value % 32;
      return (this.bits[index] & (1 << position)) !== 0;
    }
  }
  
  // Example usage:
  const bitSet = new BitSet();
  
  bitSet.add(10);
  bitSet.add(32);
  bitSet.add(50);
  
  console.log(bitSet.has(10)); // Output: true
  console.log(bitSet.has(15)); // Output: false
  
