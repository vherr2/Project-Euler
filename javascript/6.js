const sumSquares = (n) => {
	return [...Array(n+1).keys()]
				.map((n) => Math.pow(n, 2))
				.reduce((x, y) => { return x + y; });
};

const squareSums = (n) => {
	return Math.pow([...Array(n+1).keys()]
				.reduce((x, y) => { return x + y; }), 2);
};

const diff = (n) => {
	return squareSums(n) - sumSquares(n);
}

// Difference between sum of squares of the first one hundred natural numbers and the square of the sum
console.log(diff(100));