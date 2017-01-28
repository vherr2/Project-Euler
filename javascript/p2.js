const memo = [1, 1]

const fib = (n) => {
	if (memo[n]) return memo[n];

	m = memo.length;

	while (m < n) {
		memo.push(
			memo.slice(-2)
				.reduce((a, b) => { return a + b; })
		);
		m = memo.length;
	}
}

const fib_even_sum = (lim) => {
	while (memo.slice(-1) < lim) {
		fib(memo.length+1);
	}
	
	return memo.slice(0, -1)
				.filter((n) => { return !(n%2); })
				.reduce((a, b) => { return a + b; })
}

// Sum of all even fibonacci numbers up to 4 million
console.log(fib_even_sum(4*Math.pow(10, 6)))