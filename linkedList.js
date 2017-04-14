'use strict';

function Node (value, next){
  this.value = value;
  this.next = next;
};

// [5] -> [6] -> [3] -> [18]
// ['apple'] -> ['turkey'] -> ['pie'] -> ['pb&j']

function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(value){
  this.head = new Node(value, this.head);
};

// LinkedList.prototype.display = function(){
//   returns list.head.value, list.head.next.value;
// };
  // visualize whatever data is in your linked list as a string.
  // ex: [5] -> [6] -> [3] -> [18]

var list = new LinkedList();

list.push(18);
list.push(3);
list.push(6);
list.push(5);
list.push('poop');
list.push('fuck');
console.log(list.head);

  /*l
  list.display() returns '[5] -> [6] -> [3] -> [18]'

  Also implement the "length" attribute.
  The length attribute is a property of the constructor.
  An empty linked list has 0 length.
  The length increases whenever you push a new value on.
  */
// };

LinkedList.prototype.display = function(){
  var p = this.head;
  var listThing = '';
  while (p){
    listThing += `[${p.value}] -> `;
    p = p.next;

  }
  return listThing;
};

list.display();
