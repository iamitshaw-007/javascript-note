'use strict';

/* type conversion operation */

let age = '28';
const ageInNumber = Number(age);
console.log(ageInNumber);
console.log(typeof ageInNumber);

/*
  [Number]
  28 => 28
  "28" => 28
  " 28 " => 28
  "_28_" => NaN
  "true" / "false" => NaN
  true / false => 1 / 0
  undefined => NaN
  null => 0
*/

let isLoggedIn = false;
let isLoggedInBoolean = Boolean(isLoggedIn);
console.log(isLoggedInBoolean);
console.log(typeof isLoggedInBoolean);

/*
  [Boolean]
  true / false => true / false
  "true" / "false" => true
  "1" / "0" => true
  1 / 0 => true / false
  "" => false
  NaN => false
  undefined => false
  null => false
*/

let valueInNumber = '87';
const valueInString = String(valueInNumber);
console.log(valueInString);
console.log(typeof valueInString);

/*
  [String]
  28 => "28"
  "Amit Shaw" => "Amit Shaw"
  true / false => "true" / "false"
  undefined => "undefined"
  null => "null"
*/
