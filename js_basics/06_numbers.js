'use strict';

/* javascript numbers */
const score = 400;
console.log(score);

const markObtained = Number(100);
console.log(markObtained);

const accountBalance = new Number(300);
console.log(accountBalance);

console.table({
  score,
  markObtained,
  accountBalance: accountBalance.valueOf(),
});

console.log(accountBalance.toFixed(2));
console.log(markObtained.toExponential(2));
console.log(score.toPrecision(5));
