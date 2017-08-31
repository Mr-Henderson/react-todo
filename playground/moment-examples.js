var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1504180211;
// convert unix timestamp
// http://momentjs.com/docs/#/displaying/
var currentMoment = moment.unix(timestamp);
console.log('Current Moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
