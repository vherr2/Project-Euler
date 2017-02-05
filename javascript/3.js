const largest_prime_factor = (limit) => {
	let i = 2;

	while (Math.pow(i, 2) <= limit) {
		(limit%i) ? i++ : limit /= i;
	}

	return limit
};

// Largest prime number of 600851475143
console.log(largest_prime_factor(600851475143));