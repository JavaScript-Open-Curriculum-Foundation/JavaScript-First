/**
 * Articles
 * 1. Good Medium citation
 * https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571
 */


function LinkedList() {

  let Node = function(element){
      this.element = element;
      this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function(element){

      let node = new Node(element),
          current;

      if (head === null){ //first node on list
          head = node;
      } else {

          current = head;

          //loop the list until find last item
          while(current.next){
              current = current.next;
          }

          //get last item and assign next to added item to make the link
          current.next = node;
      }

      length++; //update size of list
  };

  this.insert = function(position, element){

      //check for out-of-bounds values
      if (position >= 0 && position <= length){

          let node = new Node(element),
              current = head,
              previous,
              index = 0;

          if (position === 0){ //add on first position

              node.next = current;
              head = node;

          } else {
              while (index++ < position){
                  previous = current;
                  current = current.next;
              }
              node.next = current;
              previous.next = node;
          }

          length++; //update size of list

          return true;

      } else {
          return false;
      }
  };

  this.removeAt = function(position){

      //check for out-of-bounds values
      if (position > -1 && position < length){

          let current = head,
              previous,
              index = 0;

          //removing first item
          if (position === 0){
              head = current.next;
          } else {

              while (index++ < position){

                  previous = current;
                  current = current.next;
              }

              //link previous with current's next - skip it to remove
              previous.next = current.next;
          }

          length--;

          return current.element;

      } else {
          return null;
      }
  };

  this.remove = function(element){

      let index = this.indexOf(element);
      return this.removeAt(index);
  };

  this.indexOf = function(element){

      let current = head,
          index = 0;

      while (current) {
          if (element === current.element) {
              return index;
          }
          index++;
          current = current.next;
      }

      return -1;
  };

  this.isEmpty = ()=>  length === 0;

  this.size = ()=>  length;

  this.getHead = ()=> head;

  this.toString = function(){

      let current = head,
          string = '';

      while (current) {
          string += current.element + (current.next ? ', ' : '');
          current = current.next;
      }
      return string;

  };

  this.print = function(){
    console.log(this.toString());
    // console.table(this);
      let [...table] = this.toString()
      console.table(table);
      // console.table(Node());
  };
}

let list = new LinkedList();
list.append(15);
list.print();
console.log(list.indexOf(15));
list.append(10);
list.print();
console.log(list.indexOf(10));
list.append(13);
list.print();