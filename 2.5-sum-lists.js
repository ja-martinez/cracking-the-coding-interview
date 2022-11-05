/*
Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit.The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

you can add each node and if the sum is greater than nine, keep sum % 10 in this "digit" and add 1 to the next sum.

Assuming they are of the same length
*/

const { SLList, SLNode } = require("./singly-linked-list");

function sumLists(list1, list2) {
  let [digitSum, carry] = sumDigits(list1.head, list2.head, 0);
  let sumList = new SLList(new SLNode(digitSum));
  let sumTail = sumList.head;
  let currNode1 = list1.head.next;
  let currNode2 = list2.head.next;

  while (currNode1 !== null) {
    [digitSum, carry] = sumDigits(currNode1, currNode2, carry);
    sumTail.next = new SLNode(digitSum);
    sumTail = sumTail.next;

    currNode1 = currNode1.next;
    currNode2 = currNode2.next;
  }

  if (carry === 1) {
    sumTail.next = new SLNode(1);
  }

  return sumList;
}

function sumDigits(node1, node2, carry) {
  const sum = node1.data + node2.data + carry;
  const digitSum = sum % 10;
  const newCarry = sum > 9 ? 1 : 0;

  return [digitSum, newCarry];
}

module.exports = {sumLists};

// Testing
