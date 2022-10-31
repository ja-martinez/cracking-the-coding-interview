/*
One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
*/

function oneAway(string1, string2) {
  if (string1.length === string2.length) {
    let hasDifference = false;
    for (let i=0; i<string1.length; i++) {
      if (string1[i] !== string2[i]) {
        if (hasDifference) {
          return false;
        }

        hasDifference = true;
      }
    }
  } else {
    let larger;
    let smaller;
    if (string1.length > string2.length) {
      larger = string1;
      smaller = string2;
    } else {
      larger = string2;
      smaller = string1;
    }

    if (larger.length - smaller.length > 1) {
      return false;
    }

    let largerIndex = 0;
    let smallerIndex = 0;
    let hasDifference = false;

    while (largerIndex < larger.length) {
      if (larger[largerIndex] !== smaller[smallerIndex]) {
        if (hasDifference) {
          return false;
        }
        hasDifference = true;
        smallerIndex--;
      }

      largerIndex++;
      smallerIndex++;
    }
  }

  return true;
}

function lessThanNumAway(maxDiff, string1, string2) {
  let diffCount = 0;
  let index1 = 0;
  let index2 = 0;
  
  while (string1[index1] && string2[index2]) {
    const char1 = string1[index1];
    const char2 = string2[index2];
    if (char1 !== char2) {
      diffCount++;
      
      if (diffCount > maxDiff) {
        return false;
      }

      if (string1.length > string2.length) {
        index2--;
      }

      if (string2.length > string1.length) {
        index1--;
      }
    }

    index1++;
    index2++;
  }

  return true;
}

// TODO: while vs for loops, always do operation on first string, flexible for num of changes

// Testing
const tests = [['pale', 'ple'], ['pales', 'pale'], ['pale', 'bale'], ['pale', 'bake']];

for (const test of tests) {
  console.log(test);
  console.log(lessThanNumAway(2, test[0], test[1]));
}