// 'use strict';
const accountId = '44ref2356d21e42w4';
let accountEmail = 'imamitshaw.61@gmail.com';
var accountPassword = 'Amit@3571';
accountCity = 'Patna';
let accountState;

/* assignment to const declared variable not allowed
accountId = 'io432nui89023er1'; */

accountEmail = 'imamitshaw99@gmail.com';
accountPassword = 'Amit@37124';
accountCity = 'New Delhi';
console.log(accountId);

/* prefer not to use var because of issue 
in block scope and functional scope */
console.table({
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
});
