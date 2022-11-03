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
  const list = new SLList();
  const node = new SLNode(-1)
  list.insertEnd(node)

  expect(list.toString()).toBe('-1');
})

test('insertEnd() Inserts node in nonempty list', () => {
  const list = createTestList();
  const node = new SLNode(-1)
  list.insertEnd(node);

  expect(list.toString()).toBe('0 -> 1 -> 2 -> 3 -> 4 -> -1')
})

test('insert() inserts node in empty list', () => {
  const list = new SLList();
  const node = new SLNode(-1);
  list.insert(0, node);

  expect(list.toString()).toBe('-1');
})

test('insert() inserts node at start', () => {
  const list = createTestList();
  const node = new SLNode(-1)
  list.insert(1, node);

  expect(list.toString()).toBe('-1 -> 0 -> 1 -> 2 -> 3 -> 4')
});

test('insert() inserts node at the end when place is larger', () => {
  const list = createTestList();
  const node = new SLNode(-1)
  list.insert(10, node);

  expect(list.toString()).toBe('0 -> 1 -> 2 -> 3 -> 4 -> -1');
})

test('insert() inserts node in the middle', () => {
  const list = createTestList();
  const node = new SLNode(-1)
  list.insert(3,  node);

  expect(list.toString()).toBe('0 -> 1 -> -1 -> 2 -> 3 -> 4')
})

test('delete() will not change empty list', () => {
  const list = new SLList();
  list.delete(1);

  expect(list.toString()).toBe('');
})

test('delete() will delete the first node', () => {
  const list = createTestList();
  list.delete(0);

  expect(list.toString()).toBe('1 -> 2 -> 3 -> 4');
})

test('delete() will delete node in the middle', () => {
  const list = createTestList();
  list.delete(3)

  expect(list.toString()).toBe('0 -> 1 -> 2 -> 4')
})

test('delete() will not change list if data is not fount', () => {
  const list = createTestList();
  list.delete(7);

  expect(list.toString()).toBe('0 -> 1 -> 2 -> 3 -> 4')
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