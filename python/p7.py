def isPrime(num, sieve):
	idx = 0

	for i in sieve:
		if not num % i:
			return False
		if i**2 > num:
			break
	return True

def find_nth_prime(n):
	sieve = [2]
	num = 3

	while len(sieve) < n:
		if isPrime(num, sieve):
			sieve.append(num)
		num += 2
	
	return sieve[-1]

# Calculate 10,001st prime number
print(find_nth_prime(10001))