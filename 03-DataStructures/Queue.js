class Queue {
    constructor() {
      this.items = [];
      this.front = 0;
      this.rear = 0;
    }
  
    // Add an item to the rear of the queue
    enqueue(item) {
      this.items[this.rear] = item;
      this.rear++;
    }
  
    // Remove and return the item at the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      const removedItem = this.items[this.front];
      this.front++;
      return removedItem;
    }
  
    // Return the item at the front of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.items[this.front];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.front === this.rear;
    }
  
    // Return the number of items in the queue
    size() {
      return this.rear - this.front;
    }
  
    // Empty the queue
    clear() {
      this.items = [];
      this.front = 0;
      this.rear = 0;
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.peek()); // 10
  queue.dequeue();
  console.log(queue.peek()); // 20
  
