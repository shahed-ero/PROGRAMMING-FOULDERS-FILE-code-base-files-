var moment = require('moment');
var unique = require('uniq');

var myList = [1, 2, 1, 1, 1, 1, 3, 3, 4, 5, 6, 5, 7];

var myUniqueList = unique(myList);
console.log(myUniqueList);
var myDate = new Date();

var myCollDate = moment(myDate).format('LL');
console.log(myCollDate);