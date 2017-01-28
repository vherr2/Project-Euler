def largest_prime_factor(limit):
	i = 2
	while i**2 <= limit:
		if limit % i:
			i += 1
		else:
			limit /= i
	return limit

# Largest prime number of 600851475143
print largest_prime_factor(600851475143)
