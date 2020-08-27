let _items = Symbol();

class StackClass {

    constructor () {
        //this.items = [];
        this[_items] = [];
    }

    push(element){
        this[_items].push(element);
    }

    pop(){
        return this[_items].pop();
    }

    peek(){
        return this[_items][this[_items].length-1];
    }

    isEmpty(){
        return this[_items].length == 0;
    }

    size(){
        return this[_items].length;
    }

    clear(){
        this[_items] = [];
    }

    print(){
      console.table(this[_items]);
        // console.table(this.toString());
    }

    toString(){
        return this[_items].toString();
    }
}
//how to ensure true privacy
//in case using Stack Class
let stack = new StackClass();
stack.push(8);
stack.print();
// used to recieve all  the properties Symbols in the class
let objectSymbols = Object.getOwnPropertySymbols(stack);

 console.log(objectSymbols.length); // 1
 console.log(objectSymbols);        // [Symbol()]
 console.log(objectSymbols[0]);     // Symbol()
 stack[objectSymbols[0]].push(1);
 stack.print(); 
 //5, 8, 1*/