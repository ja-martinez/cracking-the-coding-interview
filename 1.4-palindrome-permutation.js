/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

Spaces do not matter - get rid of them
*/

function palindromePermutation(string) {
  const realString = deleteSpaces(string).toLowerCase();

  const charFreq = {};

  for (const char of realString) {
    if (charFreq[char]) {
      charFreq[char]++;
    } else {
      charFreq[char] = 1;
    }
  }

  let modSum = 0;
  for (const char in charFreq) {
    modSum += charFreq[char] % 2;
  }

  const lengthParity = realString.length % 2;

  if (lengthParity === 0 && modSum === 0) {
    return true;
  }

  if (lengthParity === 1 && modSum === 1) {
    return true;
  }

  return false;
}

function deleteSpaces(string) {
  return string.split(' ').join('');
}

// Testing
const tests = ['Hannah', 'taco cat', 'ggh ho o i ', 'jjddiw', 'Alejandro']

for (const test of tests) {
  const result = palindromePermutation(test);
  console.log(`${test}: ${result}`);
}