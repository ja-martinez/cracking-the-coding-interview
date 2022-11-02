const { SLList, SLNode} = require("./singly-linked-list");

test('insertStart() Inserts node in empty list', () => {
  const list = new SLList();
  const node = new SLNode(-1)
  list.insertStart(node);
  
  expect(list.toString()).toBe('-1')
})

test('insertStart() Inserts node in nonempty list', () => {
  const list = createTestList();
  const node = new SLNode(-1)
  list.insertStart(node);
  
  expect(list.toString()).toBe('-1 -> 0 -> 1 -> 2 -> 3 -> 4')
})

test('insertEnd() Inserts node in empty list', () => {
  const list = createTestList();
  const node = new SLNode('Hello')
})

test('insertEnd() Inserts node in nonempty list', () => {
  const list = createTestList();
  const node = new SLNode('Hello')
})

test('insert() inserts node in empty list', () => {
  const list = createTestList();
  const node = new SLNode('Hello')
})

test('insert() inserts node at start', () => {
  const list = createTestList();
  const node = new SLNode('Hello')
});

test('insert() inserts node at the end when place is larger', () => {
  const list = createTestList();
  const node = new SLNode('Hello')
})

test('insert() inserts node in the middle', () => {
  const list = createTestList();
  const node = new SLNode('Hello')
})

function createTestList() {
  let nodeData = new Array(5).fill(0).map((el, index) => index);
  let prevNode = null;

  for (let i=nodeData.length-1; i>= 0; i--) {
    const currNode = new SLNode(nodeData[i], prevNode);
    prevNode = currNode;
  }

  return new SLList(prevNode);
}