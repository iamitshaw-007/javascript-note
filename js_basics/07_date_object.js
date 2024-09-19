'use strict';

/* javascript date object */
const today = Date();
console.log(today);

const current = new Date();
console.log(current);

/* Returns the date and time as a string. */
console.log('toString: ', current.toString());

/* Returns the primitive value of the Date object, which 
is the number of milliseconds since January 1, 1970 */
console.log('valueOf: ', current.valueOf());

/* Returns the date and time as a string, in UTC time zone. */
console.log('toUTCString: ', current.toUTCString());

/* Returns the date and time as a string, using locale conventions. */
console.log('toLocaleString: ', current.toLocaleString());

/* Returns the date portion of the Date object
 as a string, using locale conventions. */
console.log('toLocaleDateString: ', current.toLocaleDateString());

/* Returns the time portion of the Date object
 as a string, using locale conventions. */
console.log('toLocaleTimeString: ', current.toLocaleTimeString());

/* Returns the time portion of the Date object as a string. */
console.log('toTimeString: ', current.toTimeString());

/* Returns the date portion of a Date object as a human-readable string. */
console.log('toDateString: ', current.toDateString());

console.log('getTimezoneOffset: ', current.getTimezoneOffset());

/**
 * Converts a specified date and time into a different time zone.
 * @param {Date|string} date - original date and time.
 * @param {string} targetTimeZone - IANA time zone identifier for the target time zone.
 * @param {Object} [options] - Optional. An object to customize the output format.
 * @returns {string} - The formatted date and time in the target time zone.
 */
function convertToTimeZone(date, targetTimeZone, options = {}) {
  let specifiedDate = date instanceof Date ? date : new Date(date);

  let defaultOptions = {
    timeZone: targetTimeZone,
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  let formatOptions = Object.assign({}, defaultOptions, options);
  let formatter = new Intl.DateTimeFormat([], formatOptions);
  let formattedDate = formatter.format(specifiedDate);

  return formattedDate;
}

/**
 * Generates a random integer between the specified min & max.
 * @param {number} min - minimum value (inclusive).
 * @param {number} max - maximum value (inclusive).
 * @returns {number} - A random integer between min and max.
 */
function generateRandomIntegerBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(convertToTimeZone(Date(), 'Asia/Kolkata'));
console.log(generateRandomIntegerBetween(10, 20));
