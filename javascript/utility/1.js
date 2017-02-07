var flatten = require('lodash/flatten');
var range = require('lodash/range');
var sum = require('lodash/sum');
var uniq = require('lodash/uniq');

const multsArr = (arr, start, max) => {
	return sum(uniq(flatten(arr.map((n) => range(start, max, n)))))
};

// sum of all multiples of 3 or 5 up to 1000
console.log(multsArr([3, 5], 0, 1000));
