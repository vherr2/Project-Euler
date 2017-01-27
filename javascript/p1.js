function mults(factors, start, max) {
	return [...Array(max+1).keys()]
		.slice(start)
		.filter((num) => {return !(num%factors)});
}

console.log(mults(3, 3, 10));
