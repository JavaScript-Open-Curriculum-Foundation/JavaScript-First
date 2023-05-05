class AsyncQueue {
    constructor() {
      this.queue = [];
      this.pendingPromises = [];
    }
  
    // Add an item to the queue asynchronously
    async enqueue(item) {
      if (this.pendingPromises.length) {
        const resolve = this.pendingPromises.shift();
        resolve(item);
      } else {
        this.queue.push(item);
      }
    }
  
    // Remove and return an item from the queue asynchronously
    async dequeue() {
      if (this.queue.length) {
        return Promise.resolve(this.queue.shift());
      }
  
      return new Promise((resolve) => {
        this.pendingPromises.push(resolve);
      });
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  // Example usage:
  (async () => {
    const asyncQueue = new AsyncQueue();
  
    asyncQueue.enqueue(10);
    asyncQueue.enqueue(20);
    asyncQueue.enqueue(30);
  
    console.log(await asyncQueue.dequeue()); // 10
    console.log(await asyncQueue.dequeue()); // 20
  
    setTimeout(() => asyncQueue.enqueue(40), 1000);
  
    console.log(await asyncQueue.dequeue()); // 30
    console.log(await asyncQueue.dequeue()); // 40
  })();
  
