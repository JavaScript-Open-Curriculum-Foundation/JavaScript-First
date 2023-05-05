class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an item to the top of the stack
    push(item) {
      this.items.push(item);
    }
  
    // Remove and return the item at the top of the stack
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items.pop();
    }
  
    // Return the item at the top of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the number of items in the stack
    size() {
      return this.items.length;
    }
  
    // Empty the stack
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.peek()); // 30
  stack.pop();
  console.log(stack.peek()); // 20

