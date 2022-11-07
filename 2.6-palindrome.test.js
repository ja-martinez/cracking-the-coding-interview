const {SLList, SLNode} = require('./singly-linked-list');
const {palindrome} = require('./2.6-palindrome');

test('works on empty list', () => {
  const list = new SLList();
  expect(palindrome(list)).toBe(true);
})

test('works on list size 1', palindromeCB(1, true))

test('works on false list size 2', palindromeCB(12, false))

test('works on true list size 2', palindromeCB(11, true))

test('works on true even list', palindromeCB(12344321, true))

test('works on false even list', palindromeCB(12344331, false))

test('works on true odd list', palindromeCB(1234321, true))

test('works on false odd list', palindromeCB(1234521, false))

function palindromeCB(num, isPalindrome) {
  return () => {
    const list = createListFromNum(num);
    expect(palindrome(list)).toBe(isPalindrome);
  }
}

function createListFromNum(num) {
  const numDigits = num.toString().split('').map((num) => parseInt(num));
  return SLList.listFromData(false, ...numDigits);
}