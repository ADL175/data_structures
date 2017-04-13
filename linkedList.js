'use strict';
// //////////////////////////////////////////////
// LINKEDLIST DATA STRUCTURE CONSTRUCTOR //
// //////////////////////////////////////////////

function Node(value, next) {
  this.value = value;
  this.next = next ? next : null;
}

function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(val){
  this.head = new Node(val, this.head);
};

var list = new LinkedList();

list.push(9);
list.push(19);
list.push(29);
list.push(39);
list.push(49);

console.log(list.head.next);;
