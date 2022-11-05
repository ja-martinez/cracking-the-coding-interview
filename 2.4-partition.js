/*
Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

One approach is to iterate over the list and
- keep track of most recent node with data < x prevLess
- if you encounter a node with data < x and you've seen a node with data >= x, move the smaller one to the end of prevLess. repeat without going to next node

Another approach is to make two lists, lessList and GEqList and just iterate over the original list and add each node to the corresponding list. At the end append GEqList to lessList. I could also just use one list using already created methods and insert at start or end depending on the data. These would be shorter to implement.
*/

const { SLList, SLLNode } = require("./singly-linked-list");

// in place
function partitionInPlace(list, x) {
  if (list.head === null) {
    return;
  }

  let prevLess = list.head.data < x ? list.head : null;
  let prevNode = list.head;

  while (prevNode.next !== null) {
    const currNode = prevNode.next;

    if (prevNode.data >= x && currNode.data < x) {
      prevNode.next = currNode.next;

      if (prevLess === null) {
        currNode.next = list.head;
        list.head = currNode;
      } else {
        currNode.next = prevLess.next;
        prevLess.next = currNode;
      }

      prevLess = currNode;
      continue;
    }

    if (currNode.data < x) {
      prevLess = currNode;
    }

    prevNode = currNode;
  }
}

// one list with methods
function partitionOneListMethods(list, x) {
  const newList = new SLList();

  let currentNode = list.head;

  while (currentNode !== null) {
    const nextNode = currentNode.next;

    if (currentNode.data >= x) {
      newList.insertEnd(currentNode);
    } else {
      newList.insertStart(currentNode);
    }

    currentNode = nextNode;
  }

  list.head = newList.head;
}

// without methods
function partitionOneList(list, x) {
  let newHead = list.head;
  let newTail = list.head;
  let currentNode = list.head;

  while (currentNode !== null) {
    const nextNode = currentNode.next;

    if (currentNode.data >= x) {
      newTail.next = currentNode;
      newTail = currentNode;
    }
    if (currentNode.data < x || newHead === null) {
      currentNode.next = newHead;
      newHead = currentNode;
    }
    currentNode = nextNode;
  }

  newTail.next = null;
  list.head = newHead;
}

exports.partition = partitionInPlace;
