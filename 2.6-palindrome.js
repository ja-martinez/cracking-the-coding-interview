/*
Palindrome: Implement a function to check if a linked list is a palindrome.

Approach 1:
Go through list, count the nodes and save current position and data in hash map. Repeat and check if map[total - curr] = curr

Approach 2:
Go through the list with a fast pointer and save slow pointer's curr position and data in hashmap. When fast pointer has nex.next = null (even) or next = null (odd), you'll be in the second half, but remember to do another next in odd. Save the number of nodes it took to get here. Then start checking by continuing to iterate in the second half by checking that map[total-curr] = curr
*/

const {SLList, SLNode} = require('./singly-linked-list');

// Approach 1
function palindrome1(list) {
  if (list.head === null || list.head.next === null) {
    return true;
  }

  const data = [];
  let currNode = list.head;

  // add node data
  while (currNode !== null) {
    data.push(currNode.data);
    currNode = currNode.next
  }

  // check if it's a palindrome
  currNode = list.head;
  const half2Start = Math.ceil(data.length / 2);

  for (let i=data.length-1; i>=half2Start; i--) {
    if (currNode.data !== data[i]) {
      return false;
    }
    currNode = currNode.next
  }

  return true;
}

// Approach 2
function palindrome2(list) {
  if (list.head === null || list.head.next === null) {
    return true;
  }

  const data = [];
  let slowPointer = list.head;
  let fastPointer = list.head;

  // put first half in data[]
  while (fastPointer !== null && fastPointer.next !== null) {
    data.push(slowPointer.data);
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  } 

  if (fastPointer !== null) {  // if it's odd, move slow pointer to 2nd half
    slowPointer = slowPointer.next;
  }

  // compare second half with first half
  let position = 1;
  while (slowPointer !== null) {
    if (slowPointer.data !== data[data.length - position]) {
      return false;
    }
    slowPointer = slowPointer.next;
    position++
  }

  return true;
}

exports.palindrome = palindrome1;