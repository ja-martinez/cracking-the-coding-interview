/*
Check Permutation: Given two strings,write a method to decide if one is a permutation of the other.
*/

function checkPermutation(string1, string2) {
  const string1Chars = getCharsFrequency(string1);
  const string2Chars = getCharsFrequency(string2);


  return isEqual(string1Chars, string2Chars)
}

function getCharsFrequency(string) {
  const charsFrequency = {};

  for (const char of string) {
    if (!charsFrequency[char]) {
      charsFrequency[char] = 1;
    } else {
      charsFrequency[char]++
    }
  }

  return charsFrequency
}

function isEqual(obj1, obj2) {
  for (const key1 in obj1) {
    if (obj1[key1] !== obj2[key1]) {
      return false
    }
  }

  return true;
}

// testing
const tests = [['hola', 'olha'], ['jso', 'lsd'], ['merc', 'cmer']];

for (const test of tests) {
  const result = checkPermutation(test[0], test[1]);
  console.log(result);
}