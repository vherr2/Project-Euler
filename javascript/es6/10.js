const isPrime = (num, sieve) => {
	let idx = 0;

	for (let prime of sieve) {
		if (num % prime === 0) { return false; }
		if (Math.pow(prime, 2) > num) { return true; }
	}
};

const primeSieve = (lim) => {
	let sieve = [2];
	let num = 3;

	while (num < lim) {
		if (isPrime(num, sieve)) { sieve.push(num); }
		num += 2;
	}

	return sieve.reduce((x, y) => { return x + y; });
};

// Sum of all the primes below two million
console.log(primeSieve(2*Math.pow(10, 6)));