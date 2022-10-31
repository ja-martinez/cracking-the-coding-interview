/*
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters,and that you are given the "true" length of the string. (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)
*/

function urlify(stringArray) {
  for (let index=0; index<stringArray.length; index++) {
    const char = stringArray[index];
    if (char === ' ') {
      for (let moveIndex=stringArray.length-1; moveIndex > index; moveIndex--) {
        stringArray[moveIndex + 2] = stringArray[moveIndex];
      }
      stringArray[index] = '%';
      stringArray[index+1] = '2';
      stringArray[index+2] = '0';
    }
  }
}


// Testing
const tests = ['hello ', 'hello monsieur', ' what are you saying?'];
tests.forEach((test) => {
  const testChars = test.split('');
  urlify(testChars);
  console.log(testChars.join(''));
})