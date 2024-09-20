'use strict';

/* javascript array object */

// array literal notation
const numArray = [2, 3, 4, 5, 6];
console.log(typeof numArray);
console.log(numArray);

// array constructor
const fruits = Array('Apple', 'Banana', 'Orange', 'Mango', 'Guava');
console.log(fruits);
console.log(typeof fruits);

const vegetables = new Array('Raddish', 'Carrot', 'Potato', 'Tomato', 'Onion');
console.log(vegetables);
console.log(typeof vegetables);

/* array property */
console.log(vegetables.length);

/* array methods */
const numbers = [2, 3, 5, 1, 7, 4];

/* sorts the elements of an array in 
place and returns the sorted array. */
console.log('Array.sort: ', numbers.sort());

/* adds one or more elements to the end of an
 array and returns the new length of the array. */
numbers.push(...[6, 9, 8]);
console.log('Array.push: ', numbers);

/* removes the last element from 
an array and returns that element. */
numbers.pop();
console.log('Array.pop: ', numbers);

/* removes the first element from an array and returns that 
element, shifting all subsequent elements down one position */
numbers.shift();
console.log('Array.shift: ', numbers);

/* adds one or more elements to the beginning of 
an array and returns the new length of the array. */
numbers.unshift(...[19, 20, 23, 31]);
console.log('Array.unshift: ', numbers);

/* merges two or more arrays and returns a new array. */
console.log('Array.concat: ', numbers.concat(...[12, 14, 16, 18]));

/* returns a shallow copy of a portion
 of an array into a new array object.  */
console.log('Array.slice: ', numbers.slice(4, 8));

/* removes elements from an array and, if necessary, inserts 
new elements in their place, returning the deleted elements. */
console.log('Array.splice: ', numbers.splice(4, 8));

/*  determine if an array contains a certain element */
console.log('Array.includes: ', numbers.includes(5));

/* reverse the order of the elements in an array */
console.log('Array.reverse', numbers.reverse());

/* returns the value of the first element in the array
 where predicate is true, and undefined otherwise. */
console.log(
  'Array.find',
  numbers.find((item, index) => {
    return item === 20;
  })
);

/* returns the index of the first element in the 
array where predicate is true, and -1 otherwise. */
console.log(
  'Array.findIndex',
  numbers.findIndex((item, index) => {
    return item === 20;
  })
);

/* returns the index of the first occurrence of 
a value in an array, or -1 if it is not present. */
console.log('Array.indexOf', numbers.indexOf(20));

/* returns index of last occurrence of a specified
 value in an array, or -1 if it is not present. */
console.log('Array.lastIndexOf', numbers.lastIndexOf(19));

/* changes all array elements from start to end index
 to a static value and returns the modified array */
console.log(numbers.fill(0, 0, numbers.length));

numbers[10] = 0;
console.log(numbers); // [ 0, 0, 0, 0, <6 empty items>, 0 ]

/* performs the specified action for each element in an array */
numbers.forEach((number, index) => {
  numbers[index] = index;
});
console.log('Array.forEach', numbers);
