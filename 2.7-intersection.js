/*
Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the inter­ secting node. Note that the intersection is defined based on reference, not value.That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

Approach 1
We can't simply use a hash map  because we can't store a node's reference as a key in JS. Instead of comparing all nodes with each other (O(n^2)), we can use the fact that if the nodes are the same, then they have the same data. Therefore we can:
- create a hash map with keys set to data and value set to its most recent position
- iterate over list1 and fill in data map
- iterate over list2 and check if the data is in map
-- if it's in map, then iterate through list1 to get the node references and compare
- we can optimize a bit if we compare the last nodes. If they are not the same, then the lists do not intersect.

Approach 2
- check if last nodes are the same. If not, then false
- reverse the lists
- compare their nodes until their next nodes are not equal
** This won't work since the node of divergence cannot point to 2 different nodes. when we reverse one list, we will modify the other one at the intersection.

Approach 3
- count the length of each list and check if the tails are the same. If not, false
- trim the head of the longest list by the difference of their lengths
- iterate over both of the lists until the nodes are the same

Assumptions: the lists are nonempty and we are looking for the first intersecting node.
*/

const {SLList, SLNode} = require('./singly-linked-list');

function intersection1(list1, list2) {
  const data = {}

  // add list1 data
  let currNode = list1.head;
  let position = 0;
  while (currNode !== null) {
    data[currNode.data] = position;
    currNode = currNode.next;
    position++;
  }

  // check list2 nodes
  currNode = list2.head;
  while(currNode !== null) {
    if (data[currNode.data] !== undefined) {
      // iterate over list1 and compare nodes
      let currNode1 = list1.head;
      let position1 = 0;

      while (position1 <= data[currNode.data]) {
        if (currNode1 === currNode) {
          return currNode;
        }
        currNode1 = currNode1.next;
        position1++;
      }
    }
    currNode = currNode.next;
  }

  return false;
}

// Approach 3
function intersection3(list1, list2) {
  // iterate list1
  let length1 = 1;
  let currNode = list1.head;

  while(currNode.next !== null) {
    length1++;
    currNode = currNode.next;
  }

  let last1 = currNode

  // iterate list2
  let length2 = 1;
  currNode = list2.head;

  while(currNode.next !== null) {
    length2++;
    currNode = currNode.next;
  }

  let last2 = currNode;

  if (last1 !== last2) {
    return false;
  }

  // trim the longest list
  if (length1 > length2) {
    const trimLength = length1 - length2;
    list1 = trimList(list1, trimLength);
  }

  if (length2 > length1) {
    const trimLength = length2 - length1;
    list2 = trimList(list2, trimLength);
  }

  // iterate through both lists to find intersection
  let currNode1 = list1.head;
  let currNode2 = list2.head;

  while(currNode1 !== currNode2) {
    currNode1 = currNode1.next;
    currNode2 = currNode2.next;
  }

  return currNode1;
}

function trimList(list, trimLength) { // trims list at start
  let trimList = new SLList();
  trimList.head = list.head;

  let trimCount = 0;

  while (trimCount < trimLength) {
    trimList.head = trimList.head.next;
    trimCount++;
  }

  return trimList;
}

// Testing 
const intersection = intersection3;
const list1 = createListFromNum(13456);
const list2 = new SLList();
list2.head = list1.head;
//list2.insertEnd(list1.head);

console.log(intersection(list1, list2))

function createListFromNum(num) {
  const numDigits = num.toString().split('').map((num) => parseInt(num));
  return SLList.listFromData(false, ...numDigits);
}