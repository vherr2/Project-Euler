const isPrime = (num, sieve) => {
	let idx = 0;

	for (let prime of sieve) {
		if (num % prime === 0) { return false; }
		if (Math.pow(prime, 2) > num) { return true; }
	}
};

const primeSieve = (n) => {
	let sieve = [2];
	let num = 3;

	while (sieve.length < n) {
		if (isPrime(num, sieve)) { sieve.push(num); }
		num += 2;
	}

	return sieve.slice(-1);
};

// Calculate 10,001st prime number
console.log(primeSieve(10001));