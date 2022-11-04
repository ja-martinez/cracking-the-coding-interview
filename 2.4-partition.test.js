const {SLList, SLNode} = require('./singly-linked-list');
const {createTestList} = require('./singly-linked-list.test');
const {partition} = require('./2.4-partition');

test('leaves empty list unchanged', () => {
  const list = new SLList();
  partition(list, 5);

  expect(list.toString()).toBe('');
})

test('leaves list with all data less than x unchanged', () => {
  const list = createTestList();
  partition(list, 5);

  expect(list.toString()).toBe('0 -> 1 -> 2 -> 3 -> 4')
})

test('leaves list with already partitioned data unchanged', () => {
  const list = createTestList();
  partition(list, 2);

  expect(list.toString()).toBe('0 -> 1 -> 2 -> 3 -> 4');
})

test('works on list with first data less than x', () => {
  const list = createTestList();
  list.insertEnd(new SLNode(0));
  list.insert(4, new SLNode(1));
  partition(list, 2);

  expect(list.toString()).toBe('0 -> 1 -> 1 -> 0 -> 2 -> 3 -> 4')
})

test('works on list with first data greater than or equal to x', () => {
  const list = createTestList();
  list.insertStart(new SLNode(5));
  partition(list, 2);

  expect(list.toString()).toBe('0 -> 1 -> 5 -> 2 -> 3 -> 4')
})