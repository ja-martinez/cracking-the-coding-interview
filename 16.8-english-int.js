/*
English Int: Given any integer, print an English phrase that describes the integer (e.g., "One Thou­sand, Two Hundred Thirty Four").

numbers 1-19 have unique names and are always said at the end.
numbers 20-99 have unique ten's place names followed by the one's place.
numbers 100-999 have "hundred" prefixed by a number 1-9.
numbers 1,000+ have names for each base place afterwards, which is prefixed by a number 1-999.

numbers are grouped in three, so essentially you are just naming a number 1-999 and adding something afterwards depending on what group of three we are on.

zeros mean that you ignore the current case


Make hash maps for each number (1-19)
*/

const uniqueInts = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
};

const tens = {
  '2': 'twenty',
  '3': 'thirty',
  '4': 'forty',
  '5': 'fifty',
  '6': 'sixty',
  '7': 'seventy',
  '8': 'eighty',
  '9': 'ninety'
};

const thousands = {
  '0': '',
  '1': 'thousand',
  '2': 'million',
  '3': 'trillion',
}

function englishInt(int) {
  const stringInt = int.toString();
  let description = "";
  let currThousand = 0;

  for (let i=stringInt.length; i>0; i-=3) {
    if (thousands[currThousand] === undefined) {
      console.log(thousands[currThousand])
      throw new Error(`number ${int} is too large for program`);
    }

    const currentNum = stringInt.substring(i-3, i);
    const currentDescription = hundredsInt(parseInt(currentNum));

    description = `${currentDescription} ${thousands[currThousand]} ` + description;
    currThousand++
  }
  
  description = description.trim();

  if (description === "") {
    return "zero";
  }

  return description;
}

function hundredsInt(int) {
  const intString = int.toString().padStart(3, '0');

  if (intString.length > 3) {
    throw new Error(`hundreds int can only have 3 digits! given ${int}`)
  }

  let description = "";

  if (intString[0] !== '0') {
    description += `${uniqueInts[intString[0]]} hundred `;
  }

  description += tensInt(parseInt(intString.substring(1)));

  return description;
}


function tensInt(int) {
  if (int === 0) {
    return "";
  }

  const intString = int.toString();

  if (uniqueInts[intString]) {
    return uniqueInts[intString];
  }

  return `${tens[intString[0]]} ${uniqueInts[intString[1]]}`
}

// Testing
const tests = [123, 34, 99, 1, 15, 0, 1000, 323000, 1123111];

for (const test of tests) {
  console.log(englishInt(test));
}

// console.log(englishInt(0))