// class _Node {
//   constructor(data, next) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//   }

//   push(data) {
//     if (this.top === null) {
//       this.top = new _Node(data, null);
//       return this.top;
//     }
//     const node = new _Node(data, this.top);
//     this.top = node;
//   }

//   pop() {
//     const node = this.top;
//     this.top = node.next;
//     return node.data;
//   }
// }

// function peek(queue){
//   if(queue.top === null) {
//     return null;
//   }
//   console.log(queue.top.data);
//   return queue.top;
// }

// function isEmpty(queue) {
//   if(queue.top === null) {
//     return 'queue is empty!';
//   }
// }

// function display(queue) {
//   let results = '';
//   let currentNode = queue.top;
//   if (currentNode === null) {
//     return console.log('no items in list');
//   }

//   if( currentNode.next === null) {
//     return console.log(`${currentNode.data} --> null`);
//   }

//   while (currentNode.next !== null) {
//     results +=`${currentNode.data} -->`;
//     currentNode = currentNode.next;
//   }
//   results += `${currentNode.data} --> null`;
//   console.log(queue);
//   console.log(results);
// }

// let starTrek = new Stack();
// starTrek.push('Kirk')
// starTrek.push('Spock')
// starTrek.push('McCoy')
// starTrek.push('Scotty')
// starTrek.pop()

//  peek(starTrek);
// isEmpty(starTrek);
// display(starTrek);

// function is_palindrome(s) {
//     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     // Your code goes here
//     let palindromeStack = new Stack();
//     let stringSplit = s.split('');
//     let stackLength = stringSplit.length;
//     let wordResults = '';
//     stringSplit.forEach(char => palindromeStack.push(char))
//     for (let i = stackLength; i > 0; i--) {
//       wordResults += palindromeStack.pop();
//     }
//     return s === wordResults;
// }

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// function matchingParens(str) {
//   const queue = new Stack()
//   if(!str) return null;
//   for(let i=0; i < str.length; i++) {
//     if(str[i] === '(')
//       queue.push(str[i])
//     if(str[i]===')') {
//       if (queue.pop() === null)
//         return false
//     }
//   }
//   return(queue.top === null)
// }

// const parensStack = new Stack()
// console.log(matchingParens('((6 * 9))'))

// function sortStack(queue) {
//   if (queue.top.next === null){
//     return queue;
//   }

//   display(queue);

//   let sortStack = new Stack();

//   while (queue.top) {
//     let temp = queue.pop();
//     while(queue.top && sortStack,top.data > temp) {
//       queue.push(sortStack.pop());
//   }
//   sortStack.push(temp);
//  }
//  display(sortStack);
//  return sortStack; 
// }


// class _Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//   }

//   enqueue(data) {
//     const node = new _Node(data);

//     if (this.first === null){
//       this.first = node;
//     }

//     if(this.last) {
//       this.last.next = node;
//     }
//     this.last = node;
//   }

//   dequeue() {
//     if (this.first === null) {
//       return;
//     }
//     const node = this.first;
//     this.first = this.first.next;

//     if (node === this.last) {
//       this.last = null;
//     }
//     return node.value;
//   }
// }
// function peek(queue){
//   if(queue.first === null) {
//     return null;
//   }
//   return queue.first.value;
// }

// function isEmpty(queue) {
//   if(queue.first === null) {
//     return 'queue is empty!';
//   }
// }

// function display(queue) {
//   let results = '';
//   let currentNode = queue.first;
//   if (currentNode === null) {
//     return console.log('no items in queue');
//   }

//   if( currentNode.next === null) {
//     return console.log(`${currentNode.data} --> null`);
//   }

//   while (currentNode.next !== null) {
//     results +=`${currentNode.data} -->`;
//     currentNode = currentNode.next;
//   }
//   results += `${currentNode.data} --> null`;
//   console.log(queue);
//   console.log(results);
// }

// function ophidinBank(queue) {
//   while (queue.first) {
//     let person = queue.dequeue();
//     let random = Math.random();
//     if (random < .25) {
//       queue.enqueue(person);
//       console.log(`${person} paperwork paperwork isn't quite right, and it's back to the end of the queue`)
//     }
//     else {
//       console.log(`${person} served`);
//     }
//   }
//   console.log('everyone has been served');
// }

// function ophidinBankTest (){
//   const bankQueue = new Queue();
  
//   bankQueue.enqueue('person a');
//   bankQueue.enqueue('person b');
//   bankQueue.enqueue('person c');
//   bankQueue.enqueue('person d');
//   bankQueue.enqueue('person e');
//   bankQueue.enqueue('person f');
  
//   ophidinBank(bankQueue);
//   }
  
//   ophidinBankTest();

//  function display(queue) {
//   let currentNode = queue.first;
//   if (currentNode === null) {
//     return console.log('no items in list');
//   }
//     while (currentNode.next !== null) {
//     console.log(currentNode.value);
//     currentNode = currentNode.next;
//   }
//   console.log(currentNode.value);
// }

// function queueLine () {
//   const starTrekQueue = new Queue();
  
//   starTrekQueue.enqueue('Kirk');
//   starTrekQueue.enqueue('Spock');
//   starTrekQueue.enqueue('Uhara');
//   starTrekQueue.enqueue('Sulu');
//   starTrekQueue.enqueue('Checkov');
  
//   display(starTrekQueue);

//   starTrekQueue.dequeue();
//   starTrekQueue.dequeue();

//   display(starTrekQueue);
    
// }

// queueLine();
// let starTrekQueue = new Queue()
// starTrekQueue.enqueue('Kirk')
// starTrekQueue.enqueue('Spock')
// starTrekQueue.enqueue('Uhara')
// starTrekQueue.enqueue('Sulu')
// starTrekQueue.enqueue('Checkov')
// console.log((starTrekQueue))

// class _Node {
//   constructor (value, prev) {
//     this.value = value;
//     this.prev = prev;
//     this.next = null;
//   }
// }

// class DoubleQueue {
//   constructor () {
//     this.first = null;
//     this.last = null;
//   }
  
//   enqueue (data) {
//     const newNode = new _Node(data, this.last);    
//     if (this.first === null) {
//       this.first = newNode;
//     }
//     if (this.last) {
//       this.last.next = newNode;
//     }
//     this.last = newNode;
//   }
  
//   dequeue () {
//     if (!this.first) {
//       return null;
//     }
//     const firstNode = this.first;
//     if (firstNode.next === null) {
//       this.last = null;
//     }
//     else {
//       firstNode.next.prev = null;
//     }
//     this.first = firstNode.next;
//     return firstNode.value;
//   }
// }

// function peek(queue){
//   if(queue.first === null) {
//     return null;
//   }
//   return queue.first.value;
// }

// function doubleQueueTest () {
//   const starTrekQueue = new DoubleQueue();
  
//   starTrekQueue.enqueue('Kirk');
//   starTrekQueue.enqueue('Spock');
//   starTrekQueue.enqueue('Uhara');
//   starTrekQueue.enqueue('Sulu');
//   starTrekQueue.enqueue('Checkov');
  
  // display(starTrekQueue);
  // console.log('###############');

  // starTrekQueue.dequeue();
  // starTrekQueue.dequeue();

  // display(starTrekQueue);
//   console.log(peek(starTrekQueue));
    
// }
// doubleQueueTest();