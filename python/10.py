def is_prime(num, sieve):
	idx = 0

	for i in sieve:
		if not num % i:
			return False
		if i**2 > num:
			return True

def prime_sieve(lim):
	sieve = [2]
	num = 3

	while num < lim:
		if is_prime(num, sieve):
			sieve.append(num)
		num += 2

	return sum(sieve);

# Sum of all the primes below two million
print(prime_sieve(2*10**6))