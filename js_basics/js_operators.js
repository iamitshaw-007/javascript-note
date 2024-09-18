'use strict';

/* javascript operations */

let firstNumber = 15;
let secondNumber = 8;
/* Arithmetic Operations */
console.table({
  add: firstNumber + secondNumber,
  subtract: firstNumber - secondNumber,
  multiply: firstNumber * secondNumber,
  floorDivision: firstNumber / secondNumber,
  integerDivision: (firstNumber - (firstNumber % secondNumber)) / secondNumber,
  modulus: firstNumber % secondNumber,
  exponentiation: firstNumber ** secondNumber,
});

/* Assignment Operations */
firstNumber = 3;
secondNumber = 4;
console.table({
  addAssignment: (firstNumber += secondNumber),
  subtractAssignment: (firstNumber -= secondNumber),
  multiplyAssignment: (firstNumber *= secondNumber),
  divisionAssignment: (firstNumber /= secondNumber),
  modulusAssignment: (secondNumber %= firstNumber),
});

/* Comparision Operations */
firstNumber = 3;
secondNumber = '3';
console.table({
  // checks if two values are equal (with type coercion)
  equal: firstNumber == secondNumber,
  // checks if two values are equal (without type coercion)
  strictEqual: firstNumber === secondNumber,
  // checks if two values are not equal (with type coercion)
  notEqual: firstNumber != secondNumber,
  // checks if two values are not equal (without type coercion)
  strictNotEqual: firstNumber !== secondNumber,
  // checks if the left value is greater than the right value
  greaterThan: secondNumber > firstNumber,
  // checks if the left value is greater than  or equal to the right value
  greaterThanOrEqualTo: secondNumber >= firstNumber,
  // checks if the left value is less than the right value
  lessThan: secondNumber < firstNumber,
  // checks if the left value is less than or equal to the right value
  lessThanOrEqualTo: secondNumber <= firstNumber,
});

/* Logical Operations */
// && - AND [returns true if both operands are true]
// || - OR [returns true if at least one operand is true]
// ! - NOT [inverts the boolean value]

/* Type Operations */
const user = {
  firstName: 'Amit',
  lastName: 'Shaw',
};

/* typeof: returns the type of a variable or expression */
console.log('typeof operator: ', typeof user);

/* checks if an object is an instance of a constructor */
console.log('instanceof operator: ', user instanceof Object);

/* checks if a property exists in an object */
console.log('in operator: ', 'firstName' in user);
