var last = require('lodash/last');
var sum = require('lodash/sum');

const memo = [1, 1]

const fib_even_sum = (lim) => {
	while (last(memo) < lim) {
		memo.push(sum(memo.slice(-2)));
	}
	
	return sum(memo.filter((n) => { return !(n%2); }))
};



// Sum of all even fibonacci numbers up to 4 million
console.log(fib_even_sum(4*Math.pow(10, 6)))