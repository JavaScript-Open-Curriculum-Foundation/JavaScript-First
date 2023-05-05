/*
1. Function call stack:
In Node.js, a call stack is used to track the order of function calls. 
Whenever a function is called, it is pushed onto the stack. 
Once the function is done executing, it is popped off the stack. 
This ensures that the program knows which function to return to after the current function has finished.
*/
function firstFunction() {
    console.log('First function called');
    secondFunction();
  }
  
  function secondFunction() {
    console.log('Second function called');
    thirdFunction();
  }
  
  function thirdFunction() {
    console.log('Third function called');
  }
  
firstFunction();

/*
2. Expression evaluation:
Stacks can be used to evaluate arithmetic expressions in postfix notation (also known as Reverse Polish Notation). 
This can be useful when creating a calculator program or when evaluating expressions in a custom language interpreter.
*/
function evaluatePostfixExpression(expression) {
    const stack = [];
    const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };
  
    expression.split(' ').forEach((token) => {
      if (token in operators) {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(operators[token](a, b));
      } else {
        stack.push(parseFloat(token));
      }
    });
  
    return stack.pop();
  }
  
  console.log(evaluatePostfixExpression('3 4 + 5 *')); // (3 + 4) * 5 = 35
  
/*
3. Reversing a string:
Stacks can be used to reverse a string by pushing each character onto a stack and then popping them off in reverse order.
*/
function reverseString(str) {
    const stack = [];
    for (const char of str) {
      stack.push(char);
    }
  
    let reversed = '';
    while (stack.length > 0) {
      reversed += stack.pop();
    }
  
    return reversed;
  }
  
console.log(reverseString('hello')); // 'olleh'
  
/*
4. Balancing parentheses:
Stacks can be used to check if a string with parentheses, brackets, and braces is balanced. 
This can be useful when validating code or user input.
*/
function isBalanced(input) {
    const stack = [];
    const pairs = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
  
    for (const char of input) {
      if (char in pairs) {
        stack.push(char);
      } else if (Object.values(pairs).includes(char)) {
        if (stack.length === 0 || pairs[stack.pop()] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isBalanced('{[()]}')); // true
  console.log(isBalanced('{[(])}')); // false
  
/*
Undo/Redo functionality:
Stacks can be used to implement undo and redo functionality in an application by keeping track of user actions on two separate stacks.
*/
class History {
    constructor() {
      this.undoStack = [];
      this.redoStack = [];
    }
  
    // Add a new action to the undo stack and clear the redo stack
    addAction(action) {
      this.undoStack.push(action);
      this.redoStack = [];
    }
  
    // Undo the last action by moving it from the undo stack to the redo stack
    undo() {
      if (this.undoStack.length === 0) return;
  
      const action = this.undoStack.pop();
      this.redoStack.push(action);
      console.log(`Undo: ${action}`);
    }
  
    // Redo the last undone action by moving it back from the redo stack to the undo stack
    redo() {
      if (this.redoStack.length === 0) return;
  
      const action = this.redoStack.pop();
      this.undoStack.push(action);
      console.log(`Redo: ${action}`);
    }
  }
  
  // Example usage
  const history = new History();
  
  history.addAction('Type A');
  history.addAction('Type B');
  history.addAction('Type C');
  
  history.undo(); // Undo: Type C
  history.undo(); // Undo: Type B
  
  history.redo(); // Redo: Type B
  history.addAction('Type D'); // Performing a new action resets the redo history
  
  history.redo(); // No action, as redo history has been reset
  


