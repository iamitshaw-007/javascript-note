'use strict';

/* primitive data types */

let age = 28; // number
const userName = 'Amit Shaw'; // string
let isLoggedIn = false; // boolean
let accountState; // undefined
let dateOfBirth = null; // null
let symbolKey = Symbol('followers'); // symbol
let bigIntNumberOfLikes = BigInt(1234567890123456789012345678901234567890); // bigint

console.table({
  'typeof(age)': typeof age,
  'typeof(userName)': typeof userName,
  'typeof(isLoggedIn)': typeof isLoggedIn,
  'typeof(accountState)': typeof accountState,
  'typeof(dateOfBirth)': typeof dateOfBirth,
  'typeof(symbolKey)': typeof symbolKey,
  'typeof(bigIntNumberOfLikes)': typeof bigIntNumberOfLikes,
});

// Number
const maxNumber = Number.MAX_VALUE;
const maxSafeInteger = Number.MAX_SAFE_INTEGER;

const minNumber = Number.MIN_VALUE;
const minSafeInteger = Number.MIN_SAFE_INTEGER;
console.table({
  maxNumber,
  maxSafeInteger,
  minNumber,
  minSafeInteger,
  positiveInfinity: Number.POSITIVE_INFINITY,
  negativeInfinity: Number.NEGATIVE_INFINITY,
});
