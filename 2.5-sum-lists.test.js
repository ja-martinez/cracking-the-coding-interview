const {SLList, SLNode} = require('./singly-linked-list');
const {sumLists} = require('./2.5-sum-lists');

test('add zeros', sumListCB(0, 0))

test('add without carry', sumListCB(111, 111))

test('add with carry', sumListCB(11, 19))

test('Adds an extra digit', sumListCB(9, 9))

function sumListCB(num1, num2) {
  return () => {
    const sumList = sumLists(...createTwoLists(num1, num2));
    expect(sumList.toString()).toBe(digitsListString(num1 + num2))
  }
}

function digitsListString(num) {
  return num.toString().split('').reverse().join(' -> ');
}

function createTwoLists(num1, num2) {
  const num1Digits = num1
    .toString()
    .split("")
    .map((num) => parseInt(num));
  const num2Digits = num2
    .toString()
    .split("")
    .map((num) => parseInt(num));
  return [SLList.listFromData(true, ...num1Digits), SLList.listFromData(true, ...num2Digits)];
}