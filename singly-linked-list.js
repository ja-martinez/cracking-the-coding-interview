/*
Singly linked list implementation

Singly Linked List
*Properties
-root
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
  constructor(root=null) {
    this.root = root;
  }

  toString(node) {
    return SLList.#nodeChainString(this.root)
  }

  insertStart(node) {
    node.next = this.root;
    this.root = node;
  }

  insertEnd(node) {
    if (this.root === null) {
      this.insertStart(node);
    }

    let lastNode = this.root;

    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    lastNode.next = node;
  }

  insert(node, place) { // places node at the nth place
    if (place === 1 || this.root === null) {
      this.insertStart(node);
    }

    let prevNode = this.root
    let nodeCount = 1

    while (prevNode.next !== null && nodeCount < place - 1) {
      prevNode = prevNode.next;
      nodeCount++;
    }

    node.next = prevNode.next;
    prevNode.next = node;
  }

  static #nodeChainString(node) {
    const string = node.toString()

    if (node.next === null) {
      return string;
    }

    return `${string} -> ` + this.#nodeChainString(node.next)
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
