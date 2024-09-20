'use strict';

/* javascript objects */

/* string literals */
const user = {
  firstName: 'Amit',
  lastName: 'Shaw',
  middleName: '',
  suffix: '',
  prefix: '',
  email: 'imamitshaw.61@gmail.com',
  phoneNumber: '8789906286',
  dateOfBirth: '10/04/1998',
};

console.log(user);
user.getFullName = function () {
  const nameParts = [];
  if (this.prefix) {
    nameParts.push(this.prefix);
  }
  nameParts.push(this.firstName);

  if (this.middleName) {
    nameParts.push(this.middleName);
  }
  if (this.lastName) {
    nameParts.push(this.lastName);
  }
  if (this.suffix) {
    nameParts.push(this.suffix);
  }
  return nameParts.join(' ');
};

console.log(user.getFullName());
console.log('Object.values', Object.values(user));
console.log('Object.keys', Object.keys(user));
console.log('Object.entries', Object.entries(user));

/* determines whether an object has a property with the specified name */
console.log('Object.hasOwnProperty: ', user.hasOwnProperty('getFullName'));
console.log(
  'Object.prototype.hasOwnProperty: ',
  Object.prototype.hasOwnProperty.call(user, 'getFullName')
);

/* copy the values of all of the enumerable
 own properties from one or more source objects
  to a target object. Returns the target object. */
console.log(
  'Object.assign: ',
  Object.assign({}, user, {
    gender: 'male',
  })
);

/* prevents the modification of existing property attributes
 and values, and prevents the addition of new properties. */
console.log('Object.freeze: ', Object.freeze(user));
