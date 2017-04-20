'use strict';

function Node (value, next){
  this.value = value;
  this.next = next;
};

// [5] -> [6] -> [3] -> [18]
// ['apple'] -> ['turkey'] -> ['pie'] -> ['pb&j']

function LinkedList(){
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.push = function(value){
  this.head = new Node(value, this.head);
  this.length ++;
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
  var temp = this.head;
  var listThing = '';
  while (temp){
    listThing += `[${temp.value}] -> `;
    temp = temp.next;
  }
  return listThing;
};

list.display();

LinkedList.prototype.pop = function(){
  if(this.head !== null){
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    return temp;
  }
}

LinkedList.prototype.search = function(input){
    let temp = this.head;

    while(temp.value !== input){
      temp = temp.next;

      if(temp === null) {
        return "not found";
      }
    }
    return temp;
}

LinkedList.prototype.cyclical = function(){
  let temp = this.head;
  let array = [];
  while(temp.next){
    console.log('looping!');
    if(array.includes(temp)){
      return `Cyclical node is ${temp}`;
    }
    array.push(temp);
    temp = temp.next;
  }
  return null;
}
// ********************************

var listA = new LinkedList();
var listB = new LinkedList();


listA.push(4);
listA.push(5);
listA.push(6);

listB.push(1);
listB.push(2);
listB.push(3);


function listToNum(input){
  var listNew = input;
  let temp = listNew.head;
  let array = [];
  while(temp){
    array.push(temp.value);
    temp = temp.next;
  }
  return parseInt(array.reverse().join(''));
}

function sum(a,b){
  let aNew = listToNum(a);
  let bNew = listToNum(b);
  let sum = aNew + bNew;
  return sum;
}

function sumLinkFunction(input){
  var listC = new LinkedList();
  let array = input;
  console.log(array);
  // array.push(input);
  var digits = (""+array).split("");
    console.log(digits);
  for (let i = 0; i < digits.length; i++){
    listC.push(digits[i]);
  }

  return listC;
}

// ********************************



console.log(listA.display());
console.log(listB.display());
let aVar = listToNum(listA);
let bVar = listToNum(listB);

console.log(aVar);
console.log(bVar);
console.log(sum(listA,listB));
console.log(sumLinkFunction(579));
let newList = sumLinkFunction(23452345);
console.log(newList);
newList.display();

// LinkedList.prototype.getItem = function(index){
  //given index of notde, return the value of the node
// }
//
// LinkedList.prototype.remove = function (){
//   //remove any linked list []
// }
