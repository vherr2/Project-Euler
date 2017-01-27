function flatten(arr) {
	return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
}

function mults(n, start, max) {
	return [...Array(max).keys()]
		.slice(start)
		.filter((num) => { return !(num%n) });
}

function multsArr(arr, start, max) {
	return [...new Set(flatten(arr.map((n) => mults(n, start, max))))]
		.reduce((a, b) => { return a + b; });
}

// sum of all multiples of 3 or 5 up to 1000
console.log(multsArr([3, 5], 0, 1000));
