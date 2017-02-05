const pythagorean_triplet = (tot) => {
	let y = [...Array(tot-1).keys()].map((n) => { return n + 1; });


	for (let yi of y) {
		for (let xi of [...Array(yi).keys()].map((n) => { return n + 1; })) {
			let z = Math.pow((Math.pow(xi, 2) + Math.pow(yi, 2)), 0.5);
			if (xi + yi + z === tot) { return xi*yi*z; }
		}
	}
}

// Product of sides of pythagorean triplet for which sum of sides is 1000
console.log(pythagorean_triplet(1000))