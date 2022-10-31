/*
Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/

// using hash map
function isUnique(string) {
  const chars = {};

  for (const char of string) {
    if (chars[char]) {
      return false;
    }

    chars[char] = 1;
  }

  return true;
}

// using no additional data structures
function isUniqueNoDataStructures(string) {
  for (let index1=0; index1<string.length-1; index1++) {
    const char1 = string[index1];
    for (let index2=index1+1; index2<string.length; index2++) {
      const char2 = string[index2];
      if (char1 === char2) {
        return false;
      }
    }
  }

  return true;
}

// testing
const testStrings = ['aaabd', 'asdfsdf', 'asdfa', 'asdf', ';lkjgd.'];
for (const string of testStrings) {
  console.log(isUniqueNoDataStructures(string));
}