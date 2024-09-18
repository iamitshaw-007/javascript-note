'use strict';

/* javascript strings */
const userName = 'Amit Shaw';

const motherName = String('Shila Devi');

const fatherName = new String('Ram Kesar Shaw');

console.table({
  userName,
  motherName,
  fatherName,
});

console.table({
  userName: typeof userName,
  motherName: typeof motherName,
  fatherName: typeof fatherName,
});
// string property
console.log('length: ', fatherName.length);

// string functions
console.log('charAt: ', fatherName.charAt(4));
console.log('charCodeAt: ', fatherName.charCodeAt(4));
console.log(
  'String.fromCharCode: ',
  String.fromCharCode(fatherName.charCodeAt(4))
);
console.log('indexOf: ', fatherName.indexOf('e'));
console.log('toUpperCase: ', fatherName.toUpperCase());
console.log('toLowerCase: ', motherName.toLowerCase());
console.log('split: ', fatherName.split(' '));
console.log('substring: ', fatherName.substring(0, 4));
console.log('search: ', fatherName.search(/m/gi));
console.log('valueOf: ', fatherName.valueOf());
console.log('slice: ', fatherName.slice(0, 4));
console.log('startsWith:', fatherName.startsWith('Ram'));
console.log('endsWith:', fatherName.endsWith('wa'));
console.log('includes:', fatherName.includes('wa'));
console.log('concat: ', userName.concat(' s/o ', fatherName));
const text = 'banana';
console.log('match: ', (text.match(/ana/g) || [])?.length);

/** function to count occurrences of a substring in a string;
 * @param {String} string               string
 * @param {String} subString            sub string to search for
 * @param {Boolean} [allowOverlapping]  Optional [default: false]
 */
function occurrences(string, subString, allowOverlapping = false) {
  string += '';
  subString += '';
  if (subString.length <= 0) return string.length + 1;

  var numberOfOccurrence = 0,
    positionOfSearch = 0,
    incrementStep = allowOverlapping ? 1 : subString.length;

  while (true) {
    positionOfSearch = string.indexOf(subString, positionOfSearch);
    if (positionOfSearch >= 0) {
      ++numberOfOccurrence;
      positionOfSearch += incrementStep;
    } else {
      break;
    }
  }
  return numberOfOccurrence;
}
