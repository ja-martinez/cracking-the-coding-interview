/*
Singly linked list implementation

Singly Linked List
*Properties
-head
*Methods
-print
-add/insert
-remove
-getNth
-getLast
-contains

Singly Linked Node
*Properties
-data
-next


*/

class SLList {
  constructor(head=null) {
    this.head = head;
  }
  
  toString() {
    return SLList.#nodeChainString(this.head)
  }
  
  static #nodeChainString(node) {
    if (node === null) {
      return "";
    }
    const string = node.toString()

    if (node.next === null) {
      return string;
    }

    return `${string} -> ` + this.#nodeChainString(node.next)
  }

  insertStart(node) {
    node.next = this.head;
    this.head = node;
  }

  insertEnd(node) {
    if (this.head === null) {
      this.insertStart(node);
      return;
    }
    node.next = null;

    let lastNode = this.head;

    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    lastNode.next = node;
  }

  insert(place, node) { // places node at the nth place 
    node.next = null;
    
    if (place <= 1 || this.head === null) {
      this.insertStart(node);
      return;
    }

    let prevNode = this.head
    let nodeCount = 1

    while (prevNode.next !== null && nodeCount < place - 1) {
      prevNode = prevNode.next;
      nodeCount++;
    }

    node.next = prevNode.next;
    prevNode.next = node;
  }

  delete(data) { // deletes first occurrence of data
    if (this.head === null) { // if empty
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let prevNode = this.head;

    while(prevNode.next !== null) {
      if (prevNode.next.data === data) {
        prevNode.next = prevNode.next.next;
        return;
      }
      prevNode = prevNode.next;
    }
  }

  removeDups() {
    if (this.head === null) {
      return;
    }

    const dataSeen = {[this.head.data]: 1};
    let prevNode = this.head;

    while (prevNode.next !== null) {
      if (dataSeen[prevNode.next.data]) {
        prevNode.next = prevNode.next.next;
        continue;
      }

      dataSeen[prevNode.next.data] = 1;
      prevNode = prevNode.next;
    }
  }
}

class SLNode {
  constructor(data=null, next=null) {
    this.data = data;
    this.next = next;
  }

  toString() {
    return this.data.toString();
  }
}

module.exports = {SLList, SLNode};

// Testing
// let nodeData = new Array(5).fill(0).map((el, index) => index);
// let prevNode = null;

// for (let i=nodeData.length-1; i>= 0; i--) {
//   const currNode = new SLNode(nodeData[i], prevNode);
//   prevNode = currNode;
// }

// const list = new SLList(prevNode);
// console.log(list.toString())
