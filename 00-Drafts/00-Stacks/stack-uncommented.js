function Stack() {
  let items = [];

  this.push       = (element)=>items.push(element);
  this.pop        = ()=> items.pop();
  this.peek       = ()=> items[items.length-1];
  this.isEmpty    = ()=> items.length == 0;
  this.size       = ()=> items.length;
  this.clear      = ()=> items = [];
  this.print      = ()=> console.table(items);
  this.toString   = ()=> items.toString();
}


// Using the stack
  let stack = new Stack();
  stack.push(5);
  stack.push(8);
  stack.print()
  stack.push(11);
  stack.print()
  console.log(` Last item added: ${stack.peek()}` );
  stack.pop();
  stack.print()
  console.log(` Last item added: ${stack.peek()}` );