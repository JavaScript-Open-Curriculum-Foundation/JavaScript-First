
// Here's an example of a Stack class in JavaScript without using built-in functions, including explanations for educational purposes:

class Stack {
    constructor() {
      this.items = [];
      this.top = -1;
    }
  
    // Custom method to add an item at the end of the array
    _append(item) {
      this.top++;
      this.items[this.top] = item;
    }
  
    // Custom method to remove the last item from the array
    _removeLast() {
      const removedItem = this.items[this.top];
      this.top--;
      return removedItem;
    }
  
    // Add an item to the top of the stack
    push(item) {
      this._append(item);
    }
  
    // Remove and return the item at the top of the stack
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this._removeLast();
    }
  
    // Return the item at the top of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items[this.top];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.top === -1;
    }
  
    // Return the number of items in the stack
    size() {
      return this.top + 1;
    }
  
    // Empty the stack
    clear() {
      this.items = [];
      this.top = -1;
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
  
