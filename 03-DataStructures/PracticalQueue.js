/*
Task Scheduler:
A task scheduler can process tasks in the order they were added. 
A queue can be used to maintain the task order and execute them sequentially.
*/
const Queue = require("./queue");

const taskQueue = new Queue();

function processTask(task) {
  console.log("Processing task:", task);
  setTimeout(() => {
    if (!taskQueue.isEmpty()) {
      processTask(taskQueue.dequeue());
    }
  }, 1000);
}

function addTask(task) {
  if (taskQueue.isEmpty()) {
    taskQueue.enqueue(task);
    processTask(taskQueue.dequeue());
  } else {
    taskQueue.enqueue(task);
  }
}

addTask("Task 1");
addTask("Task 2");
addTask("Task 3");



/*
Message Queue:
A message queue can process incoming messages in the order they were received. 
This can be useful in chat applications or other communication systems.
*/
const Queue = require("./queue");

const messageQueue = new Queue();

function displayMessage(message) {
  console.log("New message:", message);
}

function processMessages() {
  while (!messageQueue.isEmpty()) {
    displayMessage(messageQueue.dequeue());
  }
}

function receiveMessage(message) {
  messageQueue.enqueue(message);
  processMessages();
}

receiveMessage("Hello");
receiveMessage("How are you?");
receiveMessage("Goodbye!");



/*
Rate Limiter:
A rate limiter can be implemented using a queue to ensure API requests are sent at a controlled rate to prevent exceeding API limits.
*/
const Queue = require("./queue");

const requestQueue = new Queue();
const rateLimit = 200; // Limit to one request every 200ms

function sendRequest(request) {
  console.log("Sending request:", request);
}

function processQueue() {
  if (!requestQueue.isEmpty()) {
    sendRequest(requestQueue.dequeue());
  }
  setTimeout(processQueue, rateLimit);
}

function addRequest(request) {
  requestQueue.enqueue(request);
}

processQueue(); // Start processing the queue

addRequest("Request 1");
addRequest("Request 2");
addRequest("Request 3");





